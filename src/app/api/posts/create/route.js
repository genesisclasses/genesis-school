import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import { calculateReadTime } from '@/lib/utils/readTime';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const title = formData.get('title');
    const content = formData.get('content');
    const tagsJson = formData.get('tags');
    const featuredImage = formData.get('featuredImage');

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // ✅ Calculate read time from content
    const readTime = calculateReadTime(content);

    let featuredImageUrl = null;

    // Upload featured image if provided
    if (featuredImage && featuredImage.size > 0) {
      try {
        const fileName = `${Date.now()}_${featuredImage.name}`;
        const { data, error } = await supabase.storage
          .from('blog')
          .upload(`featured-images/${fileName}`, featuredImage);

        if (error) throw error;

        const { data: urlData } = supabase.storage
          .from('blog')
          .getPublicUrl(data.path);

        featuredImageUrl = urlData.publicUrl;
      } catch (error) {
        console.error('Image upload error:', error);
        return NextResponse.json(
          { error: 'Failed to upload image' },
          { status: 500 }
        );
      }
    }

    // Parse tags - handle both JSON array and comma-separated strings
    let tagsArray = [];
    if (tagsJson) {
      try {
        tagsArray = JSON.parse(tagsJson);
      } catch {
        tagsArray = tagsJson
          .split(',')
          .map((tag) => tag.trim())
          .filter((tag) => tag);
      }
    }

    // Insert post with read_time
    const { data, error } = await supabase
      .from('posts')
      .insert([
        {
          title,
          content,
          featured_image_url: featuredImageUrl,
          tags: tagsArray,
          read_time: readTime,
          created_at: new Date().toISOString(),
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
      success: true,
      post: data[0],
      readTime,
    });
  } catch (error) {
    console.error('Create post error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
