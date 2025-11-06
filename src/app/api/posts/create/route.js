// app/api/posts/create/route.js
import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import { calculateReadTime } from '@/lib/utils/readTime';

export async function POST(request) {
  try {
    const supabase = await createClient();

    const formData = await request.formData();
    const title = formData.get('title');
    const content = formData.get('content');
    const tags = JSON.parse(formData.get('tags') || '[]');
    const featuredImage = formData.get('featuredImage');

    // ✅ Calculate read time from content
    const readTime = calculateReadTime(content);

    let featured_image_path = null;

    // Upload featured image if provided
    if (featuredImage) {
      const fileName = `${Date.now()}_${featuredImage.name}`;
      const { error: uploadError } = await supabase.storage
        .from('blog')
        .upload(`featured-images/${fileName}`, featuredImage);

      if (uploadError) {
        return NextResponse.json(
          { error: 'Image upload failed' },
          { status: 500 }
        );
      }

      featured_image_path = `featured-images/${fileName}`;
    }

    // ✅ Insert post with read_time
    const { data, error } = await supabase
      .from('posts')
      .insert([
        {
          title,
          content,
          tags,
          featured_image_path,
          read_time: readTime, // Store calculated read time
        },
      ])
      .select();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'Post created successfully!',
      post: data[0],
    });
  } catch (error) {
    console.error('Create post error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
