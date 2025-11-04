export default function BlogCardSkeleton() {
  return (
    <article className="animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-[345px] bg-gray-300 rounded mb-0" />

      {/* Content Skeleton */}
      <div className="pt-4">
        {/* Title Skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-7 bg-gray-300 rounded w-full" />
          <div className="h-7 bg-gray-300 rounded w-3/4" />
        </div>

        {/* Excerpt Skeleton */}
        <div className="space-y-2 mb-6">
          <div className="h-6 bg-gray-200 rounded w-full" />
          <div className="h-6 bg-gray-200 rounded w-5/6" />
        </div>

        {/* Button Skeleton */}
        <div className="h-6 bg-gray-200 rounded w-1/3" />
      </div>
    </article>
  );
}
