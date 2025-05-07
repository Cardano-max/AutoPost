import { type NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * API endpoint to generate marketing images using OpenAI's Image-1 model
 */
export async function POST(request: NextRequest) {
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
    
    // Validation
    if (!companyName || !productName || !price || !imageFile) {
      return NextResponse.json(
        { error: 'Company name, product name, price, and image are required' },
        { status: 400 }
      );
    }

    // Create product details object
    const productDetails = {
      company_name: companyName,
      product_name: productName,
      price,
      tagline,
      address
    };

    // Create the marketing prompt based on product type
    const marketingPrompt = generateMarketingPrompt(productDetails, productType);

    // Convert file to ArrayBuffer
    const imageBuffer = await imageFile.arrayBuffer();
    const imageArray = new Uint8Array(imageBuffer);

    // Call OpenAI API to generate marketing image
    const result = await openai.images.edit({
      model: "gpt-image-1",
      prompt: marketingPrompt,
      image: imageArray,
      size: "auto", // Let OpenAI choose optimal size
      quality: "auto", // Use standard quality
      n: 1
    });

    // Check if we got a valid response
    if (!result.data || result.data.length === 0) {
      throw new Error('No image data returned from OpenAI');
    }

    // Get the generated image URL
    const imageUrl = result.data[0].url;

    if (!imageUrl) {
      throw new Error('No image URL in OpenAI response');
    }

    // Return the generated image URL and details
    return NextResponse.json({
      imageUrl,
      message: 'Marketing image generated successfully',
      details: {
        company: companyName,
        product: productName,
        generatedAt: new Date().toISOString(),
      }
    });
  } catch (error: any) {
    console.error('Error generating marketing image:', error);
    
    // Provide more specific error messages for common issues
    if (error.message?.includes('API key')) {
      return NextResponse.json(
        { error: 'OpenAI API key configuration error' },
        { status: 500 }
      );
    }
    
    if (error.message?.includes('safety system') || error.message?.includes('moderation')) {
      return NextResponse.json(
        { error: 'Content moderation error: The image may contain inappropriate content' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: `Error generating marketing image: ${error.message || 'Unknown error'}` },
      { status: 500 }
    );
  }
}

/**
 * Generate a marketing prompt based on product details and type
 */
function generateMarketingPrompt(productDetails: Record<string, string>, productType: string): string {
  const basePrompt = `Create a stunning, professional marketing poster that looks like it was crafted by an expert graphic designer:

1. SUBJECT TREATMENT (HIGHEST PRIORITY):
   - Keep the original subject 100% UNCHANGED - preserve exact appearance, positioning and all details
   - Do NOT modify, filter, stylize or alter the original subject in ANY way
   - Maintain all original colors, textures, reflections and details of the subject perfectly

2. ELEMENT POSITIONING (MAINTAIN CONSISTENT PLACEMENT):
   - Company name "${productDetails.company_name}" must be at the TOP of the poster
   - Product name "${productDetails.product_name}" must be centered ABOVE the product
   - Tagline "${productDetails.tagline}" must be placed BELOW the product
   - Price "${productDetails.price}" must be positioned in the BOTTOM-RIGHT corner
   ${productDetails.address ? `- Address "${productDetails.address}" must be at the VERY BOTTOM in a single horizontal line` : ''}

3. DYNAMIC DESIGN ELEMENTS (USE AI REASONING FOR BEST RESULTS):
   - Choose the best fonts, colors, and styling based on the specific product and overall design
   - Determine the optimal size, weight, and visual treatment for each text element
   - Apply professional design techniques that best complement this specific product
   - Use your reasoning to create a cohesive color palette that enhances this particular subject
   - Adapt the background style to suit this specific product while keeping text positions fixed

4. TECHNICAL EXCELLENCE:
   - Maintain exact original aspect ratio
   - Keep safe margins for all text to prevent any edge cropping
   - Ensure perfect readability of all text at various viewing sizes
   - Create pixel-perfect alignment of all design elements

The final result must look like it was created by a professional graphic designer with years of experience in marketing design, with impeccable attention to detail, perfect visual balance, and a high-end aesthetic while keeping the original subject completely untouched.`;

  // Add product-specific enhancements based on type
  if (productType.toLowerCase() === "beverage") {
    return `${basePrompt}

5. BEVERAGE-SPECIFIC ENHANCEMENTS:
   - Add subtle visual elements that suggest freshness or temperature (steam for hot drinks, condensation for cold)
   - Use colors and lighting that enhance the beverage's appeal
   - Create an atmosphere that evokes the beverage's qualities (energizing, refreshing, comforting, etc.)
   - Maintain a gourmet/premium aesthetic suitable for a high-end café or restaurant`;
  } else if (productType.toLowerCase() === "food") {
    return `${basePrompt}

5. FOOD-SPECIFIC ENHANCEMENTS:
   - Add subtle visual elements that enhance appetite appeal
   - Use warm, inviting colors that complement the food
   - Create an elegant, restaurant-quality presentation
   - Maintain a gourmet/premium aesthetic suitable for culinary marketing`;
  }

  return basePrompt;
} 