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
 * API endpoint to generate marketing images using OpenAI's GPT-Image-1 model
 */
export async function POST(request: NextRequest) {
  console.log("[API] Starting image post generation request");
  
  try {
    // Handle multipart form data
    const formData = await request.formData();
    
    // Extract form fields
    const companyName = formData.get('company_name') as string;
    const productName = formData.get('product_name') as string;
    const price = formData.get('price') as string;
    const tagline = formData.get('tagline') as string || '';
    const address = formData.get('address') as string || '';
    const imageFile = formData.get('image') as File;
    const productType = (formData.get('product_type') as string) || 'general';
    
    console.log(`[API] Received request: product=${productName}, type=${productType}`);
    
    // Validation
    if (!companyName || !productName || !price || !imageFile) {
      console.error("[API] Missing required fields");
      return NextResponse.json(
        { error: 'Company name, product name, price, and image are required' },
        { status: 400 }
      );
    }

    // Create product details object
    const productDetails = {
      companyName,
      productName,
      price,
      tagline,
      address
    };

    // Create the marketing prompt based on product type
    const marketingPrompt = generateMarketingPrompt(productDetails, productType);
    console.log(`[API] Generated prompt: ${marketingPrompt.substring(0, 100)}...`);

    // Get the raw image data
    const imageBuffer = await imageFile.arrayBuffer();

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
        const promptToUse = hadModerationError ? generateFallbackPrompt(productDetails) : marketingPrompt;
        
        // Create a proper File object from the image buffer
        const imageUint8Array = new Uint8Array(imageBuffer);
        const imageFile = new File([imageUint8Array], "image.png", { type: "image/png" });
        
        // Use the proper OpenAI v4 SDK format for images.edit
        result = await openai.images.edit({
          model: "gpt-image-1", // Using GPT-Image-1 as it's the newest and most advanced model
          prompt: promptToUse,
          image: imageFile,
          n: 1
        });
        
        console.log("[API] Successfully generated image");
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

    if (!result?.data?.[0]?.url) {
      throw new Error("No image was generated");
    }

    // Get the generated image URL
    const imageUrl = result.data[0].url;

    if (!imageUrl) {
      throw new Error('No image URL in OpenAI response');
    }

    // Return the generated image URL and details
    return NextResponse.json({
      success: true,
      message: 'Marketing image generated successfully',
      imageUrl,
      productDetails,
      usedModel: "gpt-image-1"
    });
  } catch (error: any) {
    console.error("[API] Error generating marketing image:", error);
    
    // Handle different error types
    if (error.message?.includes('moderation') || error.message?.includes('safety')) {
      return NextResponse.json({ 
        error: 'Your request was flagged by content moderation. Please revise your input or try a different image.' 
      }, { status: 400 });
    }
    
    if (error.message?.includes('API key')) {
      return NextResponse.json({ 
        error: 'API configuration error. Please contact support.' 
      }, { status: 500 });
    }
    
    // Generic error response
    return NextResponse.json({ 
      error: 'Failed to generate marketing image. Please try again.' 
    }, { status: 500 });
  }
}

/**
 * Generate a fallback prompt when the main one is rejected by content moderation
 */
function generateFallbackPrompt(productDetails: Record<string, string>): string {
  const { companyName, productName, price, tagline, address } = productDetails;
  
  return `
Create a clean, professional marketing design with the following elements:
- Preserve the main subject completely intact, maintaining all details and characteristics
- Add a subtle, elegant background that complements the subject
- Include text for company name "${companyName}" in a premium font
- Add text for product name "${productName}" in an attractive font
- Include price "${price}" in a small badge design
${tagline ? `- Add tagline "${tagline}" in a complementary style` : ''}
${address ? `- Include address "${address}" in small text at the bottom` : ''}

Design this as a clean, minimalist but professional marketing poster with balanced layout.
Ensure all text is placed within safe margins away from edges to prevent cropping.
`;
}

/**
 * Generate a marketing prompt based on product details and type
 */
function generateMarketingPrompt(productDetails: Record<string, string>, productType: string): string {
  const { companyName, productName, price, tagline, address } = productDetails;
  
  // Base master template for all product types
  let prompt = `Create a stunning, professional marketing poster that looks like it was crafted by an expert graphic designer:

1. SUBJECT TREATMENT (HIGHEST PRIORITY):
   - Keep the original subject 100% UNCHANGED - preserve exact appearance, positioning and all details
   - Do NOT modify, filter, stylize or alter the original subject in ANY way
   - Maintain all original colors, textures, reflections and details of the subject perfectly

2. ELEMENT POSITIONING (MAINTAIN CONSISTENT PLACEMENT):
   - Company name "${companyName}" must be at the TOP of the poster
   - Product name "${productName}" must be centered ABOVE the product
   - Price "${price}" must be positioned in the BOTTOM-RIGHT corner`;
   
  // Add optional elements if provided
  if (tagline) {
    prompt += `\n   - Tagline "${tagline}" must be placed BELOW the product`;
  }
  if (address) {
    prompt += `\n   - Address "${address}" must be at the VERY BOTTOM in a single horizontal line`;
  }

  // Product-specific templates
  if (productType.toLowerCase() === 'beverage') {
    prompt += `\n
3. BEVERAGE-SPECIFIC ENHANCEMENTS:
   - Center the beverage as the focal point
   - Remove the original background completely
   - Keep whipped cream, garnishes, and toppings visible and appetizing
   - Add subtle steam effects for hot drinks or condensation for cold drinks
   - Enhance beverage colors for visual appeal`;
  } else if (productType.toLowerCase() === 'food') {
    prompt += `\n
3. FOOD-SPECIFIC ENHANCEMENTS:
   - Center the food item as the focal point
   - Remove the original background completely
   - Enhance food textures and colors for appetite appeal
   - Add steam effects for hot items or fresh appearance for cold items
   - Ensure the food looks perfectly prepared`;
  } else {
    // General product
    prompt += `\n
3. DYNAMIC DESIGN ELEMENTS (USE AI REASONING FOR BEST RESULTS):
   - Choose the best fonts, colors, and styling based on the specific product and overall design
   - Determine the optimal size, weight, and visual treatment for each text element
   - Apply professional design techniques that best complement this specific product
   - Use your reasoning to create a cohesive color palette that enhances this particular subject
   - Adapt the background style to suit this specific product while keeping text positions fixed`;
  }

  // Technical excellence section for all types
  prompt += `\n
4. TECHNICAL EXCELLENCE:
   - Maintain exact original aspect ratio
   - Keep safe margins for all text to prevent any edge cropping
   - Ensure perfect readability of all text at various viewing sizes
   - Create pixel-perfect alignment of all design elements

The final result must look like it was created by a professional graphic designer with years of experience in marketing design, with impeccable attention to detail, perfect visual balance, and a high-end aesthetic while keeping the original subject completely untouched.`;
  
  return prompt;
} 