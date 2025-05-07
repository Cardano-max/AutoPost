import { type NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client with fallback for missing API key
let openai: OpenAI;
try {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || '',
  });
} catch (error) {
  console.error("Error initializing OpenAI:", error);
}

// Maximum number of retry attempts for API calls
const MAX_RETRIES = 3;

/**
 * API endpoint to generate festival greeting images using OpenAI's GPT-Image-1 model
 */
export async function POST(request: NextRequest) {
  console.log("[API] Starting festival post generation request");
  
  try {
    // Handle multipart form data
    const formData = await request.formData();
    
    // Extract form fields
    const companyName = formData.get('company_name') as string;
    const festivalName = formData.get('festival_name') as string;
    const logoFile = formData.get('logo') as File;
    const contactNumber = formData.get('contact_number') as string || '';
    const email = formData.get('email') as string || '';
    const website = formData.get('website') as string || '';
    const address = formData.get('address') as string || '';
    const quote = formData.get('quote') as string || '';
    const festivalDate = formData.get('festival_date') as string || '';
    
    console.log(`[API] Received request: company=${companyName}, festival=${festivalName}`);
    
    // Validation
    if (!companyName || !festivalName || !logoFile) {
      console.error("[API] Missing required fields");
      return NextResponse.json(
        { error: 'Company name, festival name, and logo are required' },
        { status: 400 }
      );
    }

    // Create company details object
    const companyDetails = {
      companyName,
      contactNumber,
      email,
      website,
      address,
      quote,
      festivalName,
      festivalDate
    };

    // Create the festival greeting prompt
    const festivalPrompt = generateFestivalPrompt(companyDetails, festivalName);
    console.log(`[API] Generated prompt: ${festivalPrompt.substring(0, 100)}...`);

    // Get the raw logo data
    const logoBuffer = await logoFile.arrayBuffer();

    // Call OpenAI API with retry logic
    let result;
    let retryCount = 0;
    let hadModerationError = false;
    
    while (retryCount < MAX_RETRIES) {
      try {
        console.log(`[API] Attempt ${retryCount + 1} to call OpenAI API`);
        
        // Ensure OpenAI client is properly initialized
        if (!openai || !process.env.OPENAI_API_KEY) {
          throw new Error("OpenAI client not properly initialized. Check API key.");
        }
        
        // If we had a moderation error, use a simplified prompt
        const promptToUse = hadModerationError ? 
          generateFallbackPrompt(companyDetails) : festivalPrompt;
        
        // Create a proper File object from the logo buffer
        const logoUint8Array = new Uint8Array(logoBuffer);
        const logoFile = new File([logoUint8Array], "logo.png", { type: "image/png" });
        
        // Use OpenAI v4 SDK format for images.create
        result = await openai.images.generate({
          model: "gpt-image-1", // Using latest GPT-Image-1 model
          prompt: promptToUse,
          n: 1,
          quality: "standard", // Standard quality for festival posts
          size: "1024x1024" // Standard size
        });
        
        console.log("[API] Successfully generated festival image");
        break; // Success, exit retry loop
      } catch (error: any) {
        retryCount++;
        const errorMessage = error.message || "Unknown error";
        console.error(`[API] Attempt ${retryCount} failed: ${errorMessage}`);
        
        // Check for moderation errors and use fallback prompt if needed
        if (errorMessage.includes("safety") || errorMessage.includes("moderation")) {
          console.log("[API] Detected content moderation issue, will use fallback prompt");
          hadModerationError = true;
        }
        
        // If it's the last retry, throw the error
        if (retryCount === MAX_RETRIES) {
          throw error;
        }
        
        // Wait before retrying (exponential backoff)
        await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, retryCount)));
      }
    }

    // Get the generated image url or data
    if (!result?.data?.[0]?.url) {
      console.error("[API] Response data structure:", JSON.stringify(result?.data || {}).substring(0, 100));
      throw new Error("No festival image was generated");
    }

    // Get the generated image URL
    const imageUrl = result.data[0].url;
    
    // Return the generated image data and details
    return NextResponse.json({
      success: true,
      message: 'Festival greeting image generated successfully',
      imageUrl,
      companyDetails,
      usedModel: "gpt-image-1"
    });
  } catch (error: any) {
    console.error("[API] Error generating festival image:", error);
    
    // Handle different error types
    if (error.message?.includes('moderation') || error.message?.includes('safety')) {
      return NextResponse.json({ 
        error: 'Your request was flagged by content moderation. Please revise your input.' 
      }, { status: 400 });
    }
    
    if (error.message?.includes('API key')) {
      return NextResponse.json({ 
        error: 'API configuration error. Please contact support.' 
      }, { status: 500 });
    }
    
    // Generic error response
    return NextResponse.json({ 
      error: 'Failed to generate festival image. Please try again.' 
    }, { status: 500 });
  }
}

/**
 * Generate a fallback prompt when the main one is rejected by content moderation
 */
function generateFallbackPrompt(companyDetails: Record<string, string>): string {
  const { companyName, contactNumber, email, website, address, quote, festivalName } = companyDetails;
  
  return `
Create a clean, professional festival greeting design with the following elements:
- Create a festive, culturally appropriate background for "${festivalName}"
- Include text for company name "${companyName}" prominently at the top
- Add the greeting for "${festivalName}" in an attractive, festive font
${quote ? `- Include motivational quote: "${quote}" in an elegant style` : ''}
${contactNumber ? `- Add contact number: "${contactNumber}" in a small, professional font` : ''}
${email ? `- Include email: "${email}" in a small, professional font` : ''}
${website ? `- Add website: "${website}" in a small, professional font` : ''}
${address ? `- Include address: "${address}" in small text at the bottom` : ''}

Design this as a clean, professional festival greeting with balanced layout.
Ensure all text is clearly readable and the design has a festive, cultural theme.
`;
}

/**
 * Generate a festival greeting prompt based on company details and festival
 */
function generateFestivalPrompt(companyDetails: Record<string, string>, festivalName: string): string {
  const { companyName, contactNumber, email, website, address, quote, festivalDate } = companyDetails;
  
  // Create prompt based on festival name
  let festivalTheme = '';
  let festivalGreeting = '';
  
  // Set festival-specific theme and greeting based on name
  if (festivalName.toLowerCase().includes('diwali')) {
    festivalTheme = 'Festival of Lights with diyas, lanterns, and vibrant colors';
    festivalGreeting = 'Happy Diwali';
  } else if (festivalName.toLowerCase().includes('holi')) {
    festivalTheme = 'Festival of Colors with vibrant color splashes and celebrations';
    festivalGreeting = 'Happy Holi';
  } else if (festivalName.toLowerCase().includes('republic day')) {
    festivalTheme = 'Indian Republic Day with patriotic symbolism (tricolor flag, monuments like Red Fort, India Gate, etc.)';
    festivalGreeting = 'Happy Republic Day';
  } else if (festivalName.toLowerCase().includes('independence day')) {
    festivalTheme = 'Indian Independence Day with patriotic symbols (tricolor flag, monuments, historic imagery)';
    festivalGreeting = 'Happy Independence Day';
  } else {
    // Generic festival template
    festivalTheme = `${festivalName} celebration with cultural symbols and festive elements`;
    festivalGreeting = `Happy ${festivalName}`;
  }
  
  // Add date if provided
  const dateElement = festivalDate ? `\n   - Festival date "${festivalDate}" should be displayed prominently` : '';
  
  // Base template for festival posts
  let prompt = `Create a stunning, professional festival greeting that looks like it was crafted by an expert graphic designer for ${festivalName}:

1. FESTIVAL THEME (HIGHEST PRIORITY):
   - Create a beautiful, culturally authentic design for "${festivalName}"
   - Include traditional cultural symbols and elements representing ${festivalTheme}
   - Use a color palette traditionally associated with this festival
   - Maintain a professional, premium look suitable for business communication

2. EXACT ELEMENT POSITIONING (FOLLOW PRECISELY):
   - Company name "${companyName}" must be at the TOP-LEFT of the design
   - Company logo should be placed prominently in the TOP-LEFT corner
   - The festival greeting "${festivalGreeting}" must be a prominent focal point${dateElement}`;
   
  // Add optional elements if provided
  if (quote) {
    prompt += `\n   - Motivational quote "${quote}" should be placed in an elegant style`;
  }
  
  // Add contact information section
  prompt += `\n
3. CONTACT INFORMATION (BOTTOM SECTION):`;

  if (contactNumber) {
    prompt += `\n   - Contact number "${contactNumber}" must be displayed clearly`;
  }
  if (email) {
    prompt += `\n   - Email "${email}" must be displayed clearly`;
  }
  if (website) {
    prompt += `\n   - Website "${website}" must be displayed clearly`;
  }
  if (address) {
    prompt += `\n   - Address "${address}" must be at the VERY BOTTOM in a single horizontal line`;
  }

  // Technical excellence section
  prompt += `\n
4. TECHNICAL EXCELLENCE & STYLING:
   - Create a balanced, harmonious composition with proper visual hierarchy
   - Use fonts that are both festive and professional, ensuring perfect readability
   - Apply subtle design elements that enhance the festive mood without overwhelming
   - Ensure all text has perfect contrast against its background
   - The final image should look like a premium corporate greeting

The final result must follow the specified layout with company branding at top-left, festival greeting as focal point, and contact details at the bottom. The design should appear festive yet professional, suitable for business-to-client communication.`;
  
  return prompt;
} 