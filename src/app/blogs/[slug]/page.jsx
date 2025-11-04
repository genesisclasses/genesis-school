import { notFound } from 'next/navigation';
import { createSlug } from '@/lib/utils/slugify';
import ShareSidebar from '@/components/blog/ShareSidebar';

async function getBlogPostBySlug(slug) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/posts/${slug}`, { next: { revalidate: 60 } });
    if (!response.ok) return null;
    const data = await response.json();
    return data.post || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/posts/list`, { next: { revalidate: 60 } });
    if (!response.ok) return [];
    const data = await response.json();
    return (data.posts || []).map((post) => ({ slug: createSlug(post.title) }));
  } catch (error) {
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
                <p key={idx} className="text-base text-gray-700 mb-5 leading-relaxed">
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
              return (
                <Tag key={idx} className={`text-${4-level}xl font-bold mb-4 mt-6`}>
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

            {/* ✅ Full-width image with 373px height */}
            {/* ✅ Image with title overlay */}
      <div className="relative w-full h-[373px]">
        {post.featured_image_url && (
          <img
            src={post.featured_image_url}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        )}

        {/* ✅ Title overlay - centered on image */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-5xl font-bold text-white text-center px-8">
            {post.title}
          </h1>
        </div>
      </div>


      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex gap-12">
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
