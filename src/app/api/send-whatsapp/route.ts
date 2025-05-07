import { type NextRequest, NextResponse } from 'next/server';

/**
 * API endpoint to send an image to a WhatsApp number
 */
export async function POST(request: NextRequest) {
  // Log start of request
  console.log("[API] Starting WhatsApp send request");
  
  try {
    // Parse form data
    const formData = await request.formData();
    
    // Extract required parameters
    const phoneNumber = formData.get('phoneNumber') as string;
    const imageUrl = formData.get('imageUrl') as string;
    const message = formData.get('message') as string || 'Check out this image!';
    
    // Validate required fields
    if (!phoneNumber || !imageUrl) {
      console.error("[API] Missing required fields for WhatsApp send");
      return NextResponse.json({ 
        error: 'Phone number and image URL are required' 
      }, { status: 400 });
    }
    
    console.log(`[API] Sending WhatsApp to ${phoneNumber} with image: ${imageUrl.substring(0, 30)}...`);
    
    // In a production environment, you would integrate with WhatsApp Business API
    // or a third-party service like Twilio to send the message.
    // For demo purposes, we'll simulate a successful send
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Log success
    console.log("[API] WhatsApp message sent successfully");
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: "Image sent to WhatsApp successfully",
      sentTo: phoneNumber
    });
    
  } catch (error: any) {
    console.error("[API] WhatsApp send error:", error);
    
    return NextResponse.json({
      error: "Failed to send WhatsApp message: " + (error.message || "Unknown error")
    }, { status: 500 });
  }
} 