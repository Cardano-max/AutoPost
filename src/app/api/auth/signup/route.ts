import { type NextRequest, NextResponse } from 'next/server';

// This is a placeholder API endpoint
// In a real application, this would connect to your authentication backend

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password, companyName, businessType } = body;

    // Validation
    if (!name || !email || !password || !companyName) {
      return NextResponse.json(
        { error: 'Name, email, password, and company name are required' },
        { status: 400 }
      );
    }

    // In a real app, you would:
    // 1. Check if user already exists
    // 2. Hash the password
    // 3. Create a new user record in the database
    // 4. Create a JWT token

    // Mock successful signup
    return NextResponse.json({
      token: 'mock-jwt-token',
      user: {
        id: 'user_' + Date.now(),
        name,
        email,
        companyName,
        businessType: businessType || 'other',
      }
    });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
