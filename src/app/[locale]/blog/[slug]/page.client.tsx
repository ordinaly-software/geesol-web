import type { BlogPost } from "@/components/blog/types";
import BlogPostClient from "@/components/blog/blog-post-client";

export default function BlogPostPage({ post }: { post: BlogPost }) {
  return <BlogPostClient post={post} />;
}
