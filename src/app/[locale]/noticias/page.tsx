import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { client } from "@/lib/sanity";
import type { QueryParams } from "@sanity/client";
import { paginatedNewsPosts, highlightedNewsPosts } from "@/lib/queries";
import { getTranslations } from "next-intl/server";

export const revalidate = 300;
export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "news" });

  return createPageMetadata({
    locale,
    path: "/noticias",
    title: t("meta.title"),
    description: t("meta.description"),
    image: "/static/news_background.webp",
  });
}

export default async function NewsIndex() {
  const pageSize = 6;
  const params = {
    offset: 0,
    end: pageSize,
    q: "",
    tag: null,
    cat: null,
  } as unknown as QueryParams;

  const [{ items, total }, highlighted] = await Promise.all([
    client.fetch(paginatedNewsPosts, params, { next: { tags: ["news"] } }),
    client.fetch(highlightedNewsPosts, {}, { next: { tags: ["news"] } }),
  ]);

  const { default: BlogClient } = await import('@/components/blog/blog-client');
  return (
    <BlogClient
      posts={items}
      total={total}
      pageSize={pageSize}
      highlightedPosts={highlighted}
      basePath="/noticias"
      namespace="news"
    />
  );
}
