import type { Metadata } from "next";
import type { BlogPost } from "@/components/blog/types";
import { client } from "@/lib/sanity";
import { postBySlug } from "@/lib/queries";
import { createPageMetadata } from "@/lib/metadata";
import BlogPostPage from "./page.client";

export const dynamic = "force-dynamic";
export const revalidate = 300;

export async function generateStaticParams() {
  const slugs: string[] = await client.fetch(
    '*[_type=="post" && (!defined(isPrivate) || isPrivate==false)].slug.current',
  );
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = await client.fetch<BlogPost | null>(postBySlug, { slug });
  if (!p) return {};

  const title = p.seoTitle ?? p.title;
  const description = p.seoDescription ?? p.excerpt ?? "";
  const og = p.ogImage ?? p.mainImage ?? p.coverImage;
  const imageUrl = og && "asset" in og && og.asset?.url ? og.asset.url : "/og-image.png";

  return createPageMetadata({
    locale,
    path: `/blog/${p.slug}`,
    title,
    description,
    image: imageUrl,
    type: "article",
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const p = await client.fetch<BlogPost | null>(postBySlug, { slug }, {
    next: { tags: ["blog", `post:${slug}`] },
  });
  if (!p || ("isPrivate" in p && p.isPrivate)) return null;

  return <BlogPostPage post={p} />;
}
