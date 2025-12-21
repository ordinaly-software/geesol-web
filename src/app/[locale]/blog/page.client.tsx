import type { BlogPost } from "@/components/blog/types";
import BlogClient from "@/components/blog/blog-client";

export default function BlogIndex({ posts }: { posts: BlogPost[] }) {
  return <BlogClient posts={posts} total={posts.length} />;
}
