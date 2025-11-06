// app/admin/posts/edit/[slug]/page.js
'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { X } from 'lucide-react';
import ImageUploader from '@/components/blog/ImageUploader';

const RichTextEditor = dynamic(() => import('@/components/blog/RichTextEditor'), { ssr: false });

export default function EditPostPage({ params }) {
  const router = useRouter();

  // ✅ Use React.use() to unwrap params Promise
  const { slug: postSlug } = React.use(params);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState({});
  const [readTime, setReadTime] = useState(1); // ✅ Add read time state
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);
  const [existingImage, setExistingImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    checkUserAndLoadPost();
  }, [postSlug]);

  const checkUserAndLoadPost = async () => {
    try {
      // Check user
      const sessionRes = await fetch('/api/auth/session');
      const sessionData = await sessionRes.json();

      if (!sessionData.user) {
        router.replace('/admin/login');
        return;
      }

      setUser(sessionData.user);

      // Fetch post by slug
      console.log('🔍 Fetching post with slug:', postSlug);
      const postRes = await fetch(`/api/posts/${postSlug}`);

      console.log('📊 Response status:', postRes.status);

      if (!postRes.ok) {
        const error = await postRes.json();
        console.error('❌ API Error:', error);
        router.replace('/admin/posts/manage');
        return;
      }

      const postData = await postRes.json();
      const post = postData.post;

      console.log('✅ Post loaded:', post.title);

      setTitle(post.title);

      // ✅ FIX: Clean content - parse if string and extract only the content
      let cleanContent = post.content;
      if (typeof cleanContent === 'string') {
        cleanContent = JSON.parse(cleanContent);
      }

      // If it has both 'json' and 'html' structure, use only the json part
      if (cleanContent && cleanContent.json) {
        cleanContent = cleanContent.json;
      }

      setContent(cleanContent);
      setReadTime(post.read_time || 1); // ✅ Load existing read time
      setTags(post.tags || []);
      setExistingImage(post.featured_image_url);
    } catch (error) {
      console.error('❌ Error loading post:', error);
      router.replace('/admin/posts/manage');
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle content change from RichTextEditor (recalculates read time)
  const handleContentChange = (editorData) => {
    console.log('📝 Editor data received:', editorData);
    setContent(editorData.json); // Store the JSON content
    setReadTime(editorData.readTime || 1); // Update read time with new calculation
  };

  const addTag = (e) => {
    e.preventDefault();
    const trimmedTag = tagInput.trim().toLowerCase();

    if (trimmedTag && !tags.includes(trimmedTag)) {
      setTags([...tags, trimmedTag]);
      setTagInput('');
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('Title is required.');
      return;
    }

    if (!content || Object.keys(content).length === 0) {
      alert('Content is required.');
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', JSON.stringify(content));
      formData.append('tags', JSON.stringify(tags));
      formData.append('readTime', readTime.toString()); // ✅ Send updated read time
      formData.append('existingImageUrl', existingImage || '');

      if (featuredImage) {
        formData.append('featuredImage', featuredImage);
      }

      console.log('📤 Updating post with read time:', readTime);

      const response = await fetch(`/api/posts/${postSlug}`, {
        method: 'PUT',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update post');
      }

      alert('Post updated successfully!');
      router.push('/admin/posts/manage');
      router.refresh();
    } catch (error) {
      console.error('Submit error:', error);
      alert('Failed to update post: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasContent = content && Object.keys(content).length > 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg">Loading post...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => router.back()}
            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Manage Posts
          </button>
        </div>

        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Edit Blog Post
          </h1>
          <p className="text-gray-600">Update your content</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-3">
              Post Title *
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter an engaging title for your post"
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
              <span>{title.length} characters</span>
              <span>{title.length > 60 ? '⚠️ Consider a shorter title' : '✓ Good length'}</span>
            </div>
          </div>

          {/* Featured Image Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Featured Image (Optional)
            </label>

            {/* Current Image Display */}
            {existingImage && !featuredImage && (
              <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-700 font-medium mb-3">Current image:</p>
                <img
                  src={existingImage}
                  alt="Current featured image"
                  className="max-h-48 rounded-lg shadow-sm border border-blue-300"
                />
                <p className="text-xs text-blue-600 mt-2">Upload a new image to replace it</p>
              </div>
            )}

            <ImageUploader onFileSelect={setFeaturedImage} />

            {/* New Image Selected */}
            {featuredImage && (
              <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                <span className="text-green-600 text-lg">✅</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-green-900">New image selected</p>
                  <p className="text-xs text-green-700">{featuredImage.name}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setFeaturedImage(null)}
                  className="text-green-600 hover:text-green-800"
                >
                  <X size={18} />
                </button>
              </div>
            )}
          </div>

          {/* Content Editor Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Post Content *
            </label>
            <RichTextEditor onContentChange={handleContentChange} initialContent={content} />

            {/* ✅ Read Time Preview - Updated in Real-time */}
            <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-200 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">📖</div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Estimated Read Time</p>
                    <p className="text-3xl font-bold text-blue-900">
                      {readTime} <span className="text-xl">min{readTime !== 1 ? 's' : ''}</span>
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 mb-1">Based on ~200 words/min</p>
                  <div className="flex items-center gap-2">
                    {hasContent ? (
                      <>
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <p className="text-sm font-semibold text-green-700">Updated</p>
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        <p className="text-sm font-semibold text-gray-500">Add Content</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tags Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <label htmlFor="tag-input" className="block text-sm font-semibold text-gray-700 mb-3">
              Tags (Optional)
            </label>
            <p className="text-sm text-gray-500 mb-4">
              Add tags to help readers discover your content
            </p>

            {/* Tag Input */}
            <div className="mb-4">
              <div className="flex gap-2">
                <input
                  id="tag-input"
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value.toLowerCase())}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      addTag(e);
                    }
                  }}
                  placeholder="e.g., education, technology, news"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <button
                  type="button"
                  onClick={addTag}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold whitespace-nowrap"
                >
                  Add Tag
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {tags.length} tag{tags.length !== 1 ? 's' : ''} added
              </p>
            </div>

            {/* Tags Display */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-lg border border-gray-200">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                  >
                    #{tag}
                    <button
                      type="button"
                      onClick={() => removeTag(index)}
                      className="hover:text-blue-900 transition ml-1 p-1 hover:bg-blue-300 rounded-full"
                      aria-label={`Remove tag ${tag}`}
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Post Summary Card */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-sm border border-gray-300 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>📋</span> Post Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-600 mb-1">Title</p>
                <p className="font-semibold text-gray-900 flex items-center gap-2">
                  {title ? (
                    <>
                      <span className="text-green-600">✓</span> Updated
                    </>
                  ) : (
                    <>
                      <span className="text-gray-400">○</span> Missing
                    </>
                  )}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-600 mb-1">Content</p>
                <p className="font-semibold text-gray-900 flex items-center gap-2">
                  {hasContent ? (
                    <>
                      <span className="text-green-600">✓</span> {readTime} min
                    </>
                  ) : (
                    <>
                      <span className="text-gray-400">○</span> Missing
                    </>
                  )}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-600 mb-1">Featured Image</p>
                <p className="font-semibold text-gray-900 flex items-center gap-2">
                  {featuredImage ? (
                    <>
                      <span className="text-green-600">✓</span> New Image
                    </>
                  ) : existingImage ? (
                    <>
                      <span className="text-blue-600">✓</span> Current
                    </>
                  ) : (
                    <>
                      <span className="text-gray-400">○</span> Optional
                    </>
                  )}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-600 mb-1">Tags</p>
                <p className="font-semibold text-gray-900 flex items-center gap-2">
                  {tags.length > 0 ? (
                    <>
                      <span className="text-green-600">✓</span> {tags.length} tag{tags.length !== 1 ? 's' : ''}
                    </>
                  ) : (
                    <>
                      <span className="text-gray-400">○</span> Optional
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting || !title.trim() || !hasContent}
              className="flex-1 py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg disabled:shadow-none"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <span className="animate-spin text-2xl">⏳</span>
                  <span>Updating Post...</span>
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <span>💾</span>
                  <span>Update Post</span>
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => router.push('/admin/posts/manage')}
              disabled={isSubmitting}
              className="flex-1 py-4 bg-gray-200 text-gray-900 font-bold text-lg rounded-xl hover:bg-gray-300 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Cancel
            </button>
          </div>

          {/* Info Box */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <p className="font-semibold text-yellow-900 mb-1">Edit Tips</p>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• The read time is recalculated automatically as you edit</li>
                  <li>• Your changes are not saved until you click "Update Post"</li>
                  <li>• You can update the featured image anytime</li>
                  <li>• Tags can be added or removed as needed</li>
                </ul>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
