

interface BlogCardProps {
  title: string;
  brief: string;
  coverImage: string | null;
  slug: string;
}

export function BlogCard({ title, brief, coverImage, }: BlogCardProps) {
  return (
    <a
      href={``}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 bg-white dark:bg-gray-900 hover:shadow-xl"
    >
      {/* Blog Cover Image */}
      {coverImage ? (
        <img
          src={coverImage}
          alt={title}
          className="w-full h-48 object-cover rounded-t-xl"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded-t-xl">
          <span className="text-gray-500 dark:text-gray-400 text-sm">No Image Available</span>
        </div>
      )}

      {/* Blog Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {brief}
        </p>
      </div>

      {/* Read More Button */}
      <div className="px-5 pb-4">
        <span className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
          Read More →
        </span>
      </div>
    </a>
  );
}