import { type NextRequest, NextResponse } from 'next/server';

// This is a placeholder API endpoint
// In a real application, this would connect to your authentication backend

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // In a real app, you would verify credentials against a database
    // This is just a mock implementation for frontend testing

    // Mock successful login for test@example.com with password "password"
    if (email === 'test@example.com' && password === 'password') {
      return NextResponse.json({
        token: 'mock-jwt-token',
        user: {
          id: '1',
          name: 'Test User',
          email: 'test@example.com',
          companyName: 'Test Company',
        }
      });
    }

    // Mock failed login
    return NextResponse.json(
      { error: 'Invalid email or password' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
