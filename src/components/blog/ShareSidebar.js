'use client';

import { useState } from 'react';
import { Clock, Share2, Twitter, Facebook, Linkedin, Copy } from 'lucide-react';

export default function ShareSidebar({ post, readTime }) {
  const [showShare, setShowShare] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied!');
    }
  };

  // Debug: log the readTime value
  console.log('Read Time:', readTime, 'Type:', typeof readTime);

  // Convert readTime to number to ensure it's valid
  const displayReadTime = readTime ? Math.max(1, Math.ceil(Number(readTime))) : null;

  return (
    <aside className="w-28 border-r-1 border-gray-300 flex-shrink-0 pt-6">
      {/* Read Time Section */}
      {displayReadTime ? (
        <div className="mb-6">
          {/* Clock Icon */}
          <div className="flex justify-center mb-3">
            <Clock className="w-6 h-6 text-gray-600" strokeWidth={1.5} />
          </div>

          {/* Read Time Text */}
          <div className="text-center text-sm">
            <p className="text-gray-700 font-medium mb-1">Read Time:</p>
            <p className="text-gray-800 font-bold text-lg">{displayReadTime} mins</p>
          </div>
        </div>
      ) : (
        <div className="mb-12">
          {/* Clock Icon */}
          <div className="flex justify-center mb-3">
            <Clock className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
          </div>

          {/* Default Text */}
          <div className="text-center text-sm">
            <p className="text-gray-700 font-medium mb-1">Read Time:</p>
            <p className="text-gray-400 font-bold text-lg">-</p>
          </div>
        </div>
      )}

      {/* Share Section */}
      <div className="mb-8">
        {/* Share Button */}
        <button
          onClick={() => setShowShare(!showShare)}
          className="w-full flex flex-col items-center gap-3"
        >
          {/* Share Icon */}
          <Share2 className="w-6 h-6 text-gray-600 hover:text-gray-800 transition" strokeWidth={1.5} />

          {/* Share Text */}
          <span className="text-gray-700 font-medium text-sm">Share</span>
        </button>

        {/* Share Options - Dropdown */}
        {showShare && (
          <div className="mt-6 space-y-4 border-l-2 border-gray-300 pl-4">
            {/* Twitter */}
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
            >
              <Twitter className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs font-medium">Twitter</span>
            </a>

            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
            >
              <Facebook className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs font-medium">Facebook</span>
            </a>

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
            >
              <Linkedin className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs font-medium">LinkedIn</span>
            </a>

            {/* Copy Link */}
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition w-full"
            >
              <Copy className="w-4 h-4 flex-shrink-0" />
              <span className="text-xs font-medium">Copy</span>
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
