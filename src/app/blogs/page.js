import { createClient } from '@/lib/supabase/server';
import BlogCard from '@/components/blog/BlogCard';
import BlogCardSkeleton from '@/components/blog/BlogCardSkeleton';
import { Suspense } from 'react';

async function getAllPosts() {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

function BlogGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {[...Array(6)].map((_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  );
}

async function BlogGrid() {
  const posts = await getAllPosts();

  if (posts.length === 0) {
    return (
      <div className="col-span-full">
        <div className="text-center py-12">
          <p className="text-gray-600">No blog posts yet!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default async function BlogsPage() {
  return (
    <div className="bg-white ">
      {/* Container - max 1414px for large screens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-[1414px] py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blogs
          </h1>
        </div>

        <Suspense fallback={<BlogGridSkeleton />}>
          <BlogGrid />
        </Suspense>
      </div>
    </div>
  );
}

export const revalidate = 60;
