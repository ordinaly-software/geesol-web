import type { Metadata } from "next";
import BlogIndex from "./page.client";
import { createPageMetadata } from "@/lib/metadata";
import { client } from "@/lib/sanity";
import { listPosts } from "@/lib/queries";
import type { BlogPost } from "@/components/blog/types";
import { getTranslations } from "next-intl/server";

export const revalidate = 300;
export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  return createPageMetadata({
    locale,
    path: "/blog",
    title: t("meta.title"),
    description: t("meta.description"),
    image: "/static/footer_background.webp",
  });
}

export default async function BlogPage() {
  const posts = await client.fetch<BlogPost[]>(listPosts, {}, { next: { tags: ["blog"] } });
  return <BlogIndex posts={posts} />;
}
