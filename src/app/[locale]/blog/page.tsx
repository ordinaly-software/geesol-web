import type { Metadata } from "next";
import BlogIndex from "./page.client";
import { createPageMetadata } from "@/lib/metadata";
import { client } from "@/lib/sanity";
import { listPosts } from "@/lib/queries";
import type { BlogPost } from "@/components/blog/types";

export const revalidate = 300;
export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale?.startsWith("es");

  return createPageMetadata({
    locale,
    path: "/blog",
    title: isEs ? "Blog solar" : "Solar blog",
    description: isEs
      ? "Noticias y guias sobre energia solar, autoconsumo y ayudas disponibles."
      : "News and guides on solar energy, self-consumption, and incentives.",
    image: "/og-image.png",
  });
}

export default async function BlogPage() {
  const posts = await client.fetch<BlogPost[]>(listPosts, {}, { next: { tags: ["blog"] } });
  return <BlogIndex posts={posts} />;
}
