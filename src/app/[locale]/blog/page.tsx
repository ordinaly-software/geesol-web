import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { client } from "@/lib/sanity";
import type { QueryParams } from "@sanity/client";
import { paginatedPosts, highlightedPosts } from "@/lib/queries";
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

export default async function BlogIndex() {
  const pageSize = 6;
  const params = {
    offset: 0,
    end: pageSize,
    q: "",
    tag: null,
    cat: null,
  } as unknown as QueryParams;

  const [{ items, total }, highlighted] = await Promise.all([
    client.fetch(paginatedPosts, params, { next: { tags: ['blog'] } }),
    client.fetch(highlightedPosts, {}, { next: { tags: ['blog'] } })
  ]);

  const { default: BlogClient } = await import('@/components/blog/blog-client');
  return <BlogClient posts={items} total={total} pageSize={pageSize} highlightedPosts={highlighted} />;
}
