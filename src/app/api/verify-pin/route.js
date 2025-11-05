import { NextResponse } from 'next/server';

const CORRECT_PIN = process.env.SETUP_PIN_CODE || '79899897';

export async function POST(req) {
  try {
    const { pin } = await req.json();

    // Verify PIN matches
    if (pin !== CORRECT_PIN) {
      return NextResponse.json(
        { error: 'Invalid PIN' },
        { status: 401 }
      );
    }

    // You can add additional security here, like rate limiting or logging
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('PIN verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
