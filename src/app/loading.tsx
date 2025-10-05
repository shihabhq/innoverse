export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br p-8">
      <div className="max-w-6xl mx-auto my-40">
        <div className="animate-pulse space-y-6">
          {/* Header skeleton */}
          <div className="h-8 bg-gray-200 rounded-lg w-48"></div>

          {/* Subtitle skeleton */}
          <div className="h-6 bg-gray-200 rounded-lg w-64"></div>

          {/* Content area with circle */}
          <div className="flex items-start gap-8 mt-8">
            <div className="flex-1 space-y-4">
              {/* Text lines */}
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>

            {/* Circle skeleton */}
            <div className="w-32 h-32 bg-gray-200 rounded-full flex-shrink-0"></div>
          </div>

          {/* Button skeletons */}
          <div className="flex gap-4 mt-8">
            <div className="h-10 bg-gray-200 rounded-lg w-24"></div>
            <div className="h-10 bg-gray-200 rounded-lg w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
