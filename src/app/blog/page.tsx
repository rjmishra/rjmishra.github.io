import { getAllPosts } from "@/lib/posts";
import BlogClient from "@/components/BlogClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing about production AI systems, decision intelligence, causal inference, and the frontiers of machine learning.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogClient posts={posts} />;
}
