// app/admin/posts/manage/page.js
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { createSlug } from '@/lib/utils/slugify';
import { Trash2, Edit, Plus } from 'lucide-react';

export default function ManagePostsPage() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    checkUserAndLoadPosts();
  }, []);

  const checkUserAndLoadPosts = async () => {
    try {
      const sessionRes = await fetch('/api/auth/session');
      const sessionData = await sessionRes.json();

      if (!sessionData.user) {
        router.replace('/admin/login');
        return;
      }

      setUser(sessionData.user);

      const postsRes = await fetch('/api/posts/list');
      const postsData = await postsRes.json();

      if (postsRes.ok) {
        const postsArray = postsData.posts || [];
        setPosts(postsArray);

        // ✅ Extract all unique tags
        const tags = new Set();
        postsArray.forEach((post) => {
          if (post.tags && Array.isArray(post.tags)) {
            post.tags.forEach((tag) => tags.add(tag));
          }
        });
        setAllTags(Array.from(tags).sort());
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (postSlug, postTitle) => {
    if (!confirm(`Are you sure you want to delete "${postTitle}"? This action cannot be undone.`)) {
      return;
    }

    try {
      const response = await fetch(`/api/posts/${postSlug}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setPosts(posts.filter((post) => createSlug(post.title) !== postSlug));
        alert('Post deleted successfully');
      } else {
        alert('Failed to delete post');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Error deleting post');
    }
  };

  // ✅ Filter posts based on search and tag
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.content && post.content.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesTag = filterTag === '' || (post.tags && post.tags.includes(filterTag));

    return matchesSearch && matchesTag;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Manage Blog Posts</h1>
              <p className="text-sm text-gray-600 mt-2">
                {filteredPosts.length} of {posts.length} post{posts.length !== 1 ? 's' : ''}
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/admin/dashboard"
                className="px-6 py-2.5 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition font-semibold text-sm"
              >
                Back to Dashboard
              </Link>
              <Link
                href="/admin/posts/create"
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-sm flex items-center gap-2 shadow-md"
              >
                <Plus size={18} />
                Create New Post
              </Link>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="🔍 Search posts by title or content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Tag Filter */}
            {allTags.length > 0 && (
              <select
                value={filterTag}
                onChange={(e) => setFilterTag(e.target.value)}
                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
              >
                <option value="">All Tags</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            {posts.length === 0 ? (
              <>
                <svg
                  className="w-16 h-16 mx-auto text-gray-400 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h2 className="text-xl font-bold text-gray-900 mb-2">No posts yet</h2>
                <p className="text-gray-600 mb-6">Start creating your first blog post</p>
                <Link
                  href="/admin/posts/create"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  <Plus size={18} />
                  Create Your First Post
                </Link>
              </>
            ) : (
              <>
                <svg
                  className="w-16 h-16 mx-auto text-gray-400 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <h2 className="text-xl font-bold text-gray-900 mb-2">No posts found</h2>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </>
            )}
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredPosts.map((post) => {
              const postSlug = createSlug(post.title);
              const postDate = new Date(post.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              });

              return (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Featured Image */}
                    <div className="md:w-64 h-48 md:h-auto bg-gray-100 overflow-hidden flex-shrink-0">
                      {post.featured_image_url ? (
                        <Image
                          src={post.featured_image_url}
                          alt={post.title}
                          width={256}
                          height={192}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src =
                              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 192"%3E%3Crect fill="%23f3f4f6" width="256" height="192"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="system-ui" font-size="16" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                          <div className="text-center">
                            <svg
                              className="w-12 h-12 text-gray-400 mx-auto mb-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <p className="text-gray-500 text-sm font-medium">No Image</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Post Details */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-1">
                            <span>📅</span>
                            <span>{postDate}</span>
                          </div>
                          {post.read_time && (
                            <div className="flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full text-blue-700 font-medium">
                              <span>📖</span>
                              <span>{post.read_time} min read</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <span>✍️</span>
                            <span>
                              {post.content
                                ? typeof post.content === 'string'
                                  ? JSON.parse(post.content).content?.length || 0
                                  : post.content.content?.length || 0
                                : 0}{' '}
                              blocks
                            </span>
                          </div>
                        </div>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold hover:bg-blue-200 transition cursor-pointer"
                                onClick={() => setFilterTag(tag)}
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4 border-t border-gray-100">
                        <Link
                          href={`/admin/posts/${postSlug}/edit`}
                          className="flex-1 px-4 py-2.5 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition font-semibold text-sm flex items-center justify-center gap-2 group"
                        >
                          <Edit size={16} className="group-hover:scale-110 transition" />
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDeletePost(postSlug, post.title)}
                          className="flex-1 px-4 py-2.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition font-semibold text-sm flex items-center justify-center gap-2 group"
                        >
                          <Trash2 size={16} className="group-hover:scale-110 transition" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
