import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get('token_hash');
  const type = searchParams.get('type');

  if (token_hash && type) {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    try {
      const { error } = await supabase.auth.verifyOtp({
        type: type,
        token_hash: token_hash,
      });

      if (!error) {
        // Email verified successfully
        return NextResponse.redirect(
          new URL('/admin/login?confirmed=true', request.url)
        );
      } else {
        console.error('Verification error:', error);
        return NextResponse.redirect(
          new URL('/admin/login?error=verification_failed', request.url)
        );
      }
    } catch (err) {
      console.error('Confirmation error:', err);
      return NextResponse.redirect(
        new URL('/admin/login?error=confirmation_error', request.url)
      );
    }
  }

  return NextResponse.redirect(
    new URL('/admin/login?error=invalid_link', request.url)
  );
}
