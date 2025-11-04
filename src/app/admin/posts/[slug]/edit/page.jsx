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
      setTags(post.tags || []);
      setExistingImage(post.featured_image_url);
    } catch (error) {
      console.error('❌ Error loading post:', error);
      router.replace('/admin/posts/manage');
    } finally {
      setLoading(false);
    }
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

    if (!title || !Object.keys(content).length) {
      return alert('Title and content are required.');
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', JSON.stringify(content));
      formData.append('tags', JSON.stringify(tags));
      formData.append('existingImageUrl', existingImage || '');

      if (featuredImage) {
        formData.append('featuredImage', featuredImage);
      }

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

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Manage Posts
        </button>
      </div>

      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Edit Blog Post
      </h1>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* Featured Image */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Featured Image
          </label>

          {existingImage && !featuredImage && (
            <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-700 mb-2">Current image:</p>
              <img src={existingImage} alt="Current featured image" className="max-h-40 rounded" />
            </div>
          )}

          <ImageUploader onFileSelect={setFeaturedImage} />
          {featuredImage && <p className="text-sm text-green-600 mt-2">New image selected</p>}
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Content
          </label>
          <RichTextEditor onContentChange={setContent} initialContent={content} />
        </div>

        {/* Tags */}
        <div>
          <label htmlFor="tag-input" className="block text-sm font-semibold text-gray-700 mb-2">
            Tags
          </label>

          <div className="mb-3">
            <div className="flex gap-2">
              <input
                id="tag-input"
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    addTag(e);
                  }
                }}
                placeholder="Type tag and press Enter or click Add"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              <button
                type="button"
                onClick={addTag}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Add Tag
              </button>
            </div>
          </div>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-lg border border-gray-200">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(index)}
                    className="hover:text-blue-900 transition"
                  >
                    <X size={16} />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition"
          >
            {isSubmitting ? 'Updating...' : 'Update Post'}
          </button>
          <button
            type="button"
            onClick={() => router.push('/admin/posts/manage')}
            className="flex-1 py-4 bg-gray-200 text-gray-900 font-bold text-lg rounded-lg hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
