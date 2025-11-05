import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const CORRECT_PIN = process.env.SETUP_PIN_CODE || '79899897';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  try {
    const pinHeader = req.headers.get('X-Setup-Pin');

    if (pinHeader !== CORRECT_PIN) {
      return NextResponse.json(
        { error: 'Unauthorized - Invalid PIN' },
        { status: 401 }
      );
    }

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Create user and send confirmation email
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: false, // Requires email verification
      user_metadata: {
        role: 'admin',
      }
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    const userId = data.user.id;

    // Update user role to admin in database
    const { error: profileError } = await supabase
      .from('profiles')
      .update({ role: 'admin' })
      .eq('id', userId);

    if (profileError) {
      console.warn('Profile update warning:', profileError);
    }

    return NextResponse.json({
      user: data.user,
      message: 'Admin user created successfully. Confirmation email sent.',
      email: email
    });
  } catch (error) {
    console.error('Setup admin error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
