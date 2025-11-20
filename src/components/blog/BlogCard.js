'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { createSlug } from '@/lib/utils/slugify';

function calculateTimePassed(createdAt) {
  const now = new Date();
  const postDate = new Date(createdAt);
  const diffMs = now - postDate;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  if (diffWeeks < 4) return `${diffWeeks} week${diffWeeks > 1 ? 's' : ''} ago`;
  if (diffMonths < 12) return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
  return `${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
}

function getExcerpt(content) {
  if (!content) return '';

  try {
    let contentObj = content;

    // Handle if content is a string
    if (typeof content === 'string') {
      contentObj = JSON.parse(content);
    }

    // Handle if it has { json: {...} } structure
    if (contentObj.json) {
      contentObj = contentObj.json;
    }

    // Extract text from content array
    if (!contentObj.content || !Array.isArray(contentObj.content)) {
      console.warn('No content array found');
      return '';
    }

    let textContent = '';

    // Loop through nodes and extract text
    contentObj.content.forEach((node) => {
      if (!node) return;

      if (node.type === 'paragraph' && node.content && Array.isArray(node.content)) {
        node.content.forEach((item) => {
          if (item.text) {
            textContent += item.text + ' ';
          }
        });
      } else if (node.type === 'heading' && node.content && Array.isArray(node.content)) {
        node.content.forEach((item) => {
          if (item.text) {
            textContent += item.text + ' ';
          }
        });
      } else if (node.type === 'bulletList' && node.content) {
        node.content.forEach((listItem) => {
          if (listItem.content && listItem.content[0] && listItem.content[0].content) {
            listItem.content[0].content.forEach((item) => {
              if (item.text) {
                textContent += item.text + ' ';
              }
            });
          }
        });
      }
    });

    textContent = textContent.trim();

    // Return excerpt with ellipsis
    if (textContent.length > 120) {
      return textContent.slice(0, 120) + '...';
    }

    return textContent || '';
  } catch (error) {
    console.error('Error extracting excerpt:', error);
    return '';
  }
}

export default function BlogCard({ post }) {
  const { id, title, featured_image_url, created_at, read_time, content } = post;
  const [imageError, setImageError] = useState(false);

  const excerpt = useMemo(() => getExcerpt(content), [content]);
  const timePassed = useMemo(() => calculateTimePassed(created_at), [created_at]);
  const slug = useMemo(() => createSlug(title), [title]);

  console.log('📝 Post:', title, 'Excerpt:', excerpt); // ✅ DEBUG

  return (
    <Link href={`/blogs/${slug}`}>
      <article className="group cursor-pointer h-full flex flex-col">
        {/* Featured Image Container - 250px FIXED */}
        <div className="relative w-full h-[250px] bg-gray-200 overflow-hidden mb-0">
          {featured_image_url && !imageError ? (
            <Image
              src={featured_image_url}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={() => setImageError(true)}
              loading="lazy"
              priority={false}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
              <svg
                className="w-12 h-12 text-gray-500 mb-2"
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
              <span className="text-gray-600 font-medium text-sm">No Image</span>
            </div>
          )}

          {/* Posted Time Badge */}
          <div className="absolute top-3 left-3 bg-slate-700 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
            Posted {timePassed}
          </div>
        </div>

        {/* Card Content - SAME PADDING */}
        <div className="flex flex-col grow pt-4 px-1.5">
          {/* Title - 22px semibold */}
          <h2 className="  md:text-[20px] xl:text-[22px] font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
            {title}
          </h2>

          {/* Excerpt - 4 lines - DEBUG */}
          {excerpt ? (
            <p className=" md:text-[16px] xl:text-[18px] font-medium text-gray-600 mb-6 line-clamp-4 leading-relaxed flex-grow">
              {excerpt}
            </p>
          ) : (
            <p className="text-[18px] font-medium text-gray-400 mb-6 line-clamp-4 leading-relaxed flex-grow italic">
              No content available
            </p>
          )}

          {/* View Post Link - Black with underline */}
          <div className="mt-auto pb-2">
            <span className="text-[24px] font-normal text-black underline inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
              View Post
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
