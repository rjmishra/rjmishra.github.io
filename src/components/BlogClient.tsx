"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { PostMeta } from "@/lib/posts";

const allTags = ["All", "LLM", "Causal Inference", "MLOps", "Career", "Systems Design"];

interface BlogClientProps {
  posts: PostMeta[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredPosts = useMemo(() => {
    if (selectedTag === "All") {
      return posts;
    }
    return posts.filter((post) => post.tags.includes(selectedTag));
  }, [posts, selectedTag]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="flex-1 bg-bg-base">
      {/* Page Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 mb-12"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-text-primary">
              Thinking Out Loud
            </h1>
            <p className="font-body text-lg text-text-muted max-w-2xl">
              Writing about production AI systems, decision intelligence, causal inference, and the frontiers of machine learning.
            </p>
          </motion.div>

          {/* Tag Filter Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedTag === tag
                    ? "bg-accent-primary text-bg-base border border-accent-primary"
                    : "bg-bg-card border border-border-subtle text-text-muted hover:text-text-primary hover:border-accent-primary/50"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-4xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="group h-full px-6 py-8 rounded-lg bg-bg-card border border-border-subtle hover:border-l-2 hover:border-l-accent-primary transition-all duration-300 cursor-pointer hover:bg-bg-card/80 flex flex-col">
                      {/* Title */}
                      <h2 className="font-display text-xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors duration-300">
                        {post.title}
                      </h2>

                      {/* Date & Read Time */}
                      <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          {post.readTime} min read
                        </div>
                      </div>

                      {/* Excerpt */}
                      <p className="font-body text-sm text-text-muted leading-relaxed mb-4 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-1 rounded text-xs font-medium font-body bg-accent-primary/10 text-accent-primary border border-accent-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More Link */}
                      <div className="flex items-center gap-2 text-accent-primary font-body font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                        Read More
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <p className="font-body text-text-muted">
                No posts found with the selected tag. Try a different filter!
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
