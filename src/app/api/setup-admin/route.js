// src/app/api/setup-admin/route.js
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { email, password } = await req.json();

  // Add a secret key check for security
  // const adminSecret = req.headers.get('Authorization')?.split('Bearer ')[1];
  // if (adminSecret !== process.env.ADMIN_SETUP_SECRET) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  // }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      // If you have a `profiles` table, you can add metadata here
      // which can be captured by a trigger to assign a role.
      data: {
        role: 'admin',
      }
    }
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  // Remember to manually update the user's role in your 'profiles' table
  // if you are not using the trigger method mentioned in the previous response.

  return NextResponse.json({ user: data.user });
}
