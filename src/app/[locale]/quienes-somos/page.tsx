import type { Metadata } from "next";
import UsPage from "./page.client";
import { createPageMetadata } from "@/lib/metadata";
import { client } from "@/lib/sanity";
import { highlightedNewsPosts } from "@/lib/queries";
import type { BlogPost } from "@/components/blog/types";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "usPage" });

  return createPageMetadata({
    locale,
    path: "/quienes-somos",
    title: t("meta.title"),
    description: t("meta.description"),
    image: "/static/nosotros/quienes-somos-header.webp",
  });
}

export default async function Us({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;
  const highlighted = await client.fetch<BlogPost[]>(
    highlightedNewsPosts,
    {},
    { next: { tags: ["news"] } },
  );
  return <UsPage highlightedNews={highlighted} />;
}
