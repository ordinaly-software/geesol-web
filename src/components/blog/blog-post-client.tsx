"use client";

import Image from 'next/image';
import Link from 'next/link';
import BackToTopButton from '@/components/ui/back-to-top-button';
import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { PortableText } from '@portabletext/react';
import { getPortableTextComponents } from './portable-text-components';
import { urlFor } from '@/lib/image';
import Banner from '@/components/ui/banner';
import type { BlogPost, MediaItem, Category } from './types';
import SharePostButtons from './share-post-buttons';

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

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const t = useTranslations('blog');
  if (!post) return null;
  const p = post;
  const tocData = useMemo(() => {
    const items: { id: string; text: string; level: 'h2' | 'h3' | 'h4' }[] = [];
    const idMap = new Map<string, string>();
    const counts = new Map<string, number>();

    const slugify = (value: string) =>
      value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

    const getBlockText = (block: { children?: Array<{ text?: string }> }) =>
      Array.isArray(block.children)
        ? block.children.map((child) => child.text || '').join('').trim()
        : '';

    if (Array.isArray(p.body)) {
      p.body.forEach((block: { _type?: string; style?: string; _key?: string; children?: Array<{ text?: string }> }) => {
        if (block?._type !== 'block') return;
        if (!block.style || !['h2', 'h3', 'h4'].includes(block.style)) return;
        const text = getBlockText(block);
        if (!text) return;
        const base = slugify(text);
        if (!base) return;
        const count = (counts.get(base) ?? 0) + 1;
        counts.set(base, count);
        const id = count === 1 ? base : `${base}-${count}`;
        if (block._key) idMap.set(block._key, id);
        items.push({ id, text, level: block.style as 'h2' | 'h3' | 'h4' });
      });
    }

    return { items, idMap };
  }, [p.body]);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    datePublished: p.publishedAt || p._createdAt,
    dateModified: p.updatedAt || p._updatedAt,
    author: { '@type': 'Person', name: p.author?.name },
    image: p.coverImage && p.coverImage.asset ? [urlFor(p.coverImage.asset).width(1200).height(630).url()] : undefined,
    mainEntityOfPage: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${p.slug}`,
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#1A1924] text-gray-800 dark:text-white transition-colors duration-300">
      <Banner
        title={p.title}
        subtitle={p.seoDescription || p.excerpt || ''}
        backgroundImage={p.mainImage && p.mainImage.asset ? urlFor(p.mainImage.asset).width(1600).height(900).url() : undefined}
      />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* Header row: back link | share buttons | date (responsive) */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          <div className="flex md:justify-start justify-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#D01B17] dark:text-[#D01B17] hover:underline">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
              {t("backToBlog")}
            </Link>
          </div>

          <div className="flex md:justify-center justify-center">
            {/* Share buttons for this post */}
            {p.slug && (
              <div className="px-2">
                <SharePostButtons title={p.title} excerpt={p.seoDescription || p.excerpt || ''} slug={p.slug} />
              </div>
            )}
          </div>

          <div className="flex md:justify-end justify-center">
            {/* Publication date */}
            {p.publishedAt && (
              <div className="text-sm text-gray-500 dark:text-gray-400 px-2">
                {new Date(p.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
              </div>
            )}
          </div>
        </div>
        {/* Main cover image (already shown in banner, so skip here) */}
        {p.media && Array.isArray(p.media) && p.media.length > 0 && (
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {p.media.map((m: MediaItem, idx: number) => (
              <div key={idx} className="rounded-lg overflow-hidden">
                {m.type === 'image' && m.asset && (
                  <Image
                    src={urlFor(m.asset).width(800).height(600).url()}
                    alt={m.alt || t('media.imageAlt')}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                )}
                {m.type === 'video' && m.url && (
                  <video controls className="w-full h-auto">
                    <source src={m.url} type="video/mp4" />
                    {t('media.videoFallback')}
                  </video>
                )}
              </div>
            ))}
          </div>
        )}
        {tocData.items.length > 0 && (
          <nav className="mt-8 rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900/70">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D01B17]">
              {t('toc.title')}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {tocData.items.map((item) => (
                <li key={item.id} className={item.level === 'h3' ? 'pl-3' : item.level === 'h4' ? 'pl-6' : ''}>
                  <a
                    href={`#${item.id}`}
                    className="transition hover:text-[#D01B17] hover:underline"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <article className="prose max-w-none mt-6">
          <PortableText
            value={p.body}
            components={getPortableTextComponents(t, {
              getHeadingId: (value) =>
                value?._key ? tocData.idMap.get(value._key) : undefined,
            })}
          />
        </article>
      </main>
      {/* Categories and share row - centered and evenly spaced */}
      <div className="border-t border-gray-300 dark:border-gray-700 pt-6 pb-10">
        {Array.isArray(p.categories) && p.categories.length > 0 && (
          <div className="max-w-3xl mx-auto px-4 pb-10">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-8 md:gap-4">
              <div className="flex flex-col items-center">
                <div className="mb-2 text-base font-semibold text-gray-700 dark:text-gray-300">{t("postCategories")}:</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {p.categories.map((cat: Category) => (
                    cat?.slug ? (
                      <Link
                        key={cat.slug}
                        href={`/blog?category=${cat.slug}`}
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition w-fit ${getTagStyle(
                          cat.slug || cat.title
                        )}`}
                      >
                        {cat.title}
                      </Link>
                    ) : null
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-2 text-base font-semibold text-gray-700 dark:text-gray-300">{t('shareLabel')}</div>
                {p.slug && (
                  <div className="px-2">
                    <SharePostButtons showLabel={false} title={p.title} excerpt={p.seoDescription || p.excerpt || ''} slug={p.slug} />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <BackToTopButton />
    </div>
  );
}
