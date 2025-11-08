// app/blogs/[slug]/page.jsx
import { createClient } from '@/lib/supabase/server';
import { createStaticClient } from '@/lib/supabase/client';
import { notFound } from 'next/navigation';
import { createSlug } from '@/lib/utils/slugify';
import ShareSidebar from '@/components/blog/ShareSidebar';

// ✅ Use static client for build-time data fetching
async function getBlogPostBySlug(slug) {
  try {
    const supabase = await createClient();

    const { data: posts, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !posts) {
      console.error('Supabase error:', error);
      return null;
    }

    const post = posts.find(p => createSlug(p.title) === slug);
    return post || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// ✅ Use createStaticClient() instead of createClient() here
export async function generateStaticParams() {
  try {
    const supabase = createStaticClient();

    const { data: posts, error } = await supabase
      .from('posts')
      .select('id, title')
      .order('created_at', { ascending: false });

    if (error || !posts) {
      console.error('Error generating static params:', error);
      return [];
    }

    console.log('✅ Generated static params for', posts.length, 'posts');

    return posts.map((post) => ({
      slug: createSlug(post.title),
    }));
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: post.title,
    description: post.content ? JSON.stringify(post.content).slice(0, 160) : '',
  };
}

function renderContent(content) {
  if (!content) return null;
  try {
    let contentObj = content;
    if (typeof content === 'string') contentObj = JSON.parse(content);
    if (contentObj.json) contentObj = contentObj.json;
    if (!contentObj.content || !Array.isArray(contentObj.content)) return null;

    return (
      <>
        {contentObj.content.map((node, idx) => {
          if (!node) return null;
          switch (node.type) {
            case 'paragraph':
              return (
                <p key={idx} className="text-[16px] md:text-base text-gray-700 mb-5 leading-relaxed">
                  {node.content?.map((item, i) => {
                    if (!item) return null;
                    let element = item.text || '';
                    if (item.marks?.some(m => m.type === 'bold')) {
                      element = <strong key={i} className="font-bold">{element}</strong>;
                    }
                    return <span key={i}>{element}</span>;
                  })}
                </p>
              );
            case 'heading':
              const level = node.attrs?.level || 1;
              const Tag = `h${level}`;

              // Responsive heading sizes: 18px mobile, scales up on desktop
              const headingSizes = {
                h1: 'text-[18px] md:text-4xl',
                h2: 'text-[18px] md:text-3xl',
                h3: 'text-[18px] md:text-2xl',
                h4: 'text-[18px] md:text-xl',
                h5: 'text-[18px] md:text-lg',
                h6: 'text-[18px] md:text-base'
              };

              return (
                <Tag key={idx} className={`${headingSizes[Tag]} font-bold mb-4 mt-6`}>
                  {node.content?.map((item, i) => <span key={i}>{item.text}</span>)}
                </Tag>
              );
            default:
              return null;
          }
        })}
      </>
    );
  } catch (error) {
    return null;
  }
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="bg-white min-h-screen">
      <div className="relative w-full h-[373px]">
        {post.featured_image_url && (
          <img
            src={post.featured_image_url}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-[32px] md:text-5xl font-bold text-white text-center px-8">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex-row md:flex gap-12">
          <ShareSidebar post={post} readTime={post.read_time} />

          <main className="flex-1 max-w-3xl">
            <div className="prose-lg max-w-none mb-12">
              {renderContent(post.content)}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 60;
export const dynamicParams = true;
