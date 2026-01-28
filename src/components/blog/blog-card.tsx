import React from 'react';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { Category } from './types';
import { BlogPost } from './types';
import { urlFor } from '@/lib/image';
export interface BlogCardProps {
  post: BlogPost;
  onCategoryClick?: (cat: string) => void;
}

export interface BlogCardProps {
  post: BlogPost;
  onCategoryClick?: (cat: string) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onCategoryClick }) => {
  const categories = Array.isArray(post.categories) ? post.categories : [];
  const tagStyles = [
    "bg-[#D01B17]/10 text-[#D01B17] hover:bg-[#D01B17]/20",
    "bg-[#0c3b52]/10 text-[#0c3b52] hover:bg-[#0c3b52]/20",
    "bg-[#46B1C9]/10 text-[#146b7b] hover:bg-[#46B1C9]/20",
    "bg-[#f6c343]/20 text-[#a16207] hover:bg-[#f6c343]/30",
    "bg-[#623CEA]/10 text-[#623CEA] hover:bg-[#623CEA]/20",
    "bg-[#c81618]/10 text-[#c81618] hover:bg-[#c81618]/20",
  ];
  const getTagStyle = (key: string) => {
    let hash = 0;
    for (let i = 0; i < key.length; i += 1) {
      hash = (hash * 31 + key.charCodeAt(i)) % 100000;
    }
    return tagStyles[Math.abs(hash) % tagStyles.length];
  };

  const rawDescription = post.seoDescription || post.excerpt || "";
  const truncatedDescription =
    rawDescription.length > 250 ? `${rawDescription.slice(0, 250).trim()}…` : rawDescription;

  return (
    <div
      className="
        group relative overflow-hidden
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        rounded-2xl
        transition-all duration-300
        w-full max-w-4xl mx-auto
        flex flex-col md:flex-row
        hover:border-[#D01B17] dark:hover:border-[#D01B17]
        hover:shadow-2xl hover:shadow-[#D01B17]/10
        hover:-translate-y-2
      "
    >
      {/* Image */}
      <div
        className="
          relative w-full h-48
          md:h-auto md:w-56 md:flex-shrink-0
          bg-gray-100 dark:bg-gray-900
          md:rounded-l-2xl overflow-hidden
        "
      >
        {post.ogImage?.asset && (
          <Image
            src={urlFor(post.ogImage.asset).url()}
            alt={post.ogImage?.alt || post.title}
            fill
            className="object-cover md:group-hover:scale-110 transition-transform duration-500"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-4 md:p-6 flex flex-col">
        {/* Categories */}
        <div className="mb-2 flex flex-wrap gap-1.5 md:gap-2">
          {categories.map((cat: Category) =>
            cat?.slug ? (
              onCategoryClick ? (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => onCategoryClick(cat.slug || cat.title)}
                  className={`px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium transition ${getTagStyle(
                    cat.slug || cat.title
                  )}`}
                >
                  {cat.title}
                </button>
              ) : (
                <Link
                  key={cat.slug}
                  href={`/blog?category=${cat.slug}`}
                  className={`px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium transition ${getTagStyle(
                    cat.slug || cat.title
                  )}`}
                >
                  {cat.title}
                </Link>
              )
            ) : null
          )}
        </div>

        {/* Title */}
        <h2
          className="
            font-bold text-gray-900 dark:text-white
            text-lg md:text-2xl
            leading-snug
            mb-1
            md:group-hover:text-[#D01B17] dark:hover:text-[#D01B17]
            transition-colors
            line-clamp-2
          "
        >
          <Link href={`/${post.slug}`}>
            {post.seoTitle || post.title}
          </Link>
        </h2>

        {/* Date */}
        {post.publishedAt && (
          <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-2">
            {new Date(post.publishedAt).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </div>
        )}

        {/* Description – desktop only */}
        {truncatedDescription && (
          <p className="hidden md:block text-gray-600 dark:text-gray-400 text-sm leading-relaxed opacity-80 mt-2 max-h-20 overflow-hidden">
            {truncatedDescription}
          </p>
        )}
      </div>
    </div>
  );
};
