// app/api/posts/[slug]/route.js
import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import { createSlug } from '@/lib/utils/slugify';

// ✅ GET - Fetch by slug
export async function GET(request, { params }) {
  try {
    const { slug } = await params;
    console.log('🔍 Fetching post by slug:', slug);

    const supabase = await createClient();

    // Get all posts and find by slug
    const { data: allPosts, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('❌ Database error:', error);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    const post = allPosts?.find((p) => createSlug(p.title) === slug);

    if (!post) {
      console.log('❌ Post not found:', slug);
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    console.log('✅ Post found:', post.title);
    return NextResponse.json({ post });
  } catch (error) {
    console.error('❌ GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// ✅ PUT - Update by slug
export async function PUT(request, { params }) {
  try {
    const { slug } = await params;
    const formData = await request.formData();
    const title = formData.get('title');
    const content = formData.get('content');
    const tagsJson = formData.get('tags');
    const readTimeFromForm = formData.get('readTime'); // ✅ Get read time from form
    const featuredImage = formData.get('featuredImage');
    const existingImageUrl = formData.get('existingImageUrl');

    console.log('📝 Updating post by slug:', slug);
    console.log('📖 Received read time:', readTimeFromForm);

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content required' },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Find post by slug
    const { data: allPosts } = await supabase
      .from('posts')
      .select('*');

    const post = allPosts?.find((p) => createSlug(p.title) === slug);

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const postId = post.id;

    // ✅ Use read time from form (already calculated in frontend)
    const readTime = readTimeFromForm ? parseInt(readTimeFromForm) : 1;

    let featured_image_path = post.featured_image_path; // Keep existing path by default

    // Upload image if provided
    if (featuredImage && featuredImage.size > 0) {
      try {
        // Delete old image if it exists
        if (post.featured_image_path) {
          await supabase.storage
            .from('blog')
            .remove([post.featured_image_path]);
        }

        const fileName = `${Date.now()}_${featuredImage.name}`;
        const { data, error: uploadError } = await supabase.storage
          .from('blog')
          .upload(`featured-images/${fileName}`, featuredImage);

        if (uploadError) throw uploadError;

        featured_image_path = data.path; // ✅ Store the path, not the full URL
      } catch (error) {
        console.error('❌ Image upload failed:', error);
        return NextResponse.json(
          { error: 'Image upload failed' },
          { status: 500 }
        );
      }
    }

    // Parse tags
    let tagsArray = [];
    try {
      tagsArray = JSON.parse(tagsJson || '[]');
    } catch {
      tagsArray = [];
    }

    // ✅ Update post by ID with read_time from frontend calculation
    const { data, error } = await supabase
      .from('posts')
      .update({
        title,
        content,
        featured_image_path, // ✅ Store path instead of full URL
        tags: tagsArray,
        read_time: readTime, // ✅ Store calculated read time
        updated_at: new Date().toISOString(),
      })
      .eq('id', postId)
      .select();

    if (error) {
      console.error('❌ Update failed:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // ✅ Get public URL if image exists
    let featured_image_url = null;
    if (data[0].featured_image_path) {
      const { data: publicUrlData } = supabase.storage
        .from('blog')
        .getPublicUrl(data[0].featured_image_path);
      featured_image_url = publicUrlData.publicUrl;
    }

    const updatedPost = {
      ...data[0],
      featured_image_url, // ✅ Include public URL in response
    };

    console.log('✅ Post updated:', data[0].title, 'Read time:', readTime);
    return NextResponse.json({
      success: true,
      post: updatedPost,
      readTime,
    });
  } catch (error) {
    console.error('❌ PUT error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// ✅ DELETE - Delete by slug
export async function DELETE(request, { params }) {
  try {
    const { slug } = await params;
    console.log('🗑️  Deleting post by slug:', slug);

    const supabase = await createClient();

    // Find post by slug
    const { data: allPosts } = await supabase
      .from('posts')
      .select('*');

    const post = allPosts?.find((p) => createSlug(p.title) === slug);

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    // Delete featured image if it exists
    if (post.featured_image_path) {
      try {
        await supabase.storage
          .from('blog')
          .remove([post.featured_image_path]);
      } catch (error) {
        console.warn('⚠️  Could not delete image:', error);
        // Don't fail the delete if image removal fails
      }
    }

    // Delete post by ID
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', post.id);

    if (error) {
      console.error('❌ Delete failed:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log('✅ Post deleted');
    return NextResponse.json({ success: true, message: 'Post deleted' });
  } catch (error) {
    console.error('❌ DELETE error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
