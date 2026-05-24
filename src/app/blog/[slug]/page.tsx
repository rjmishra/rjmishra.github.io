import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getPostBySlug, getPostSlugs, getPreviousAndNextPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Math from "@/components/mdx/Math";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const siteUrl = "https://ranjan.dev";

// Prose styles component
const ProseContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="prose prose-invert max-w-none">
      <style>{`
        .prose {
          --tw-prose-body: #F1F5F9;
          --tw-prose-headings: #F1F5F9;
          --tw-prose-links: #14B8A6;
          --tw-prose-bold: #F1F5F9;
          --tw-prose-counters: #94A3B8;
          --tw-prose-bullets: #94A3B8;
          --tw-prose-hr: #1E293B;
          --tw-prose-quotes: #94A3B8;
          --tw-prose-quote-borders: #14B8A6;
          --tw-prose-captions: #94A3B8;
          --tw-prose-code: #14B8A6;
          --tw-prose-pre-bg: #0B0F1A;
          --tw-prose-pre-code: #F1F5F9;
          --tw-prose-th-borders: #1E293B;
          --tw-prose-td-borders: #1E293B;
        }

        .prose p {
          margin: 1.25rem 0;
          font-family: var(--font-dm-sans);
          line-height: 1.75;
        }

        .prose h1 {
          font-family: var(--font-syne);
          font-size: 2.25rem;
          font-weight: 700;
          margin: 2rem 0 1rem 0;
        }

        .prose h2 {
          font-family: var(--font-syne);
          font-size: 1.875rem;
          font-weight: 700;
          margin: 1.5rem 0 0.75rem 0;
          border-bottom: 1px solid #1E293B;
          padding-bottom: 0.5rem;
        }

        .prose h3 {
          font-family: var(--font-syne);
          font-size: 1.5rem;
          font-weight: 600;
          margin: 1.25rem 0 0.5rem 0;
        }

        .prose a {
          color: #14B8A6;
          text-decoration: underline;
          transition: color 0.2s;
        }

        .prose a:hover {
          color: #0d9488;
        }

        .prose code {
          background-color: #111827;
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-family: 'Courier New', monospace;
          color: #14B8A6;
        }

        .prose pre {
          background-color: #0B0F1A;
          border: 1px solid #1E293B;
          border-radius: 0.5rem;
          padding: 1rem;
          overflow-x: auto;
          margin: 1rem 0;
        }

        .prose pre code {
          background: none;
          padding: 0;
          color: #F1F5F9;
        }

        .prose ul, .prose ol {
          margin: 1rem 0;
          padding-left: 2rem;
        }

        .prose li {
          margin: 0.5rem 0;
        }

        .prose blockquote {
          border-left: 4px solid #14B8A6;
          padding-left: 1rem;
          font-style: italic;
          color: #94A3B8;
          margin: 1.5rem 0;
        }

        .prose hr {
          border-color: #1E293B;
          margin: 2rem 0;
        }

        .prose table {
          width: 100%;
          margin: 1.5rem 0;
          border-collapse: collapse;
        }

        .prose th {
          background-color: #111827;
          border: 1px solid #1E293B;
          padding: 0.75rem;
          text-align: left;
          font-weight: 600;
        }

        .prose td {
          border: 1px solid #1E293B;
          padding: 0.75rem;
        }
      `}</style>
      {children}
    </div>
  );
};

// Table of Contents
function TableOfContents({ content }: { content: string }) {
  const headings = content
    .split("\n")
    .filter((line) => line.match(/^#{2,3}\s/))
    .map((line) => {
      const level = line.match(/^#+/)?.[0].length || 2;
      const text = line.replace(/^#+\s/, "");
      const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
      return { level, text, id };
    });

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24 hidden lg:block">
      <div className="px-4 py-6 bg-bg-card border border-border-subtle rounded-lg">
        <h4 className="font-display text-sm font-bold text-text-primary mb-4 uppercase tracking-wider">
          On This Page
        </h4>
        <nav className="space-y-2">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`block text-sm transition-colors duration-200 ${
                heading.level === 3 ? "pl-4 text-text-muted hover:text-accent-primary" : "text-text-muted hover:text-accent-primary font-medium"
              }`}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const ogImageUrl = `${siteUrl}/api/og?title=${encodeURIComponent(post.title)}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: "Ranjan — AI & Decision Intelligence",
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { previous, next } = getPreviousAndNextPosts(slug);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="flex-1 bg-bg-base">
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="max-w-2xl mx-auto mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-primary/80 transition-colors font-body font-medium"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </div>

        {/* Post Header */}
        <header className="max-w-2xl mx-auto mb-12 animate-fade-up">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-text-primary mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-text-muted font-body text-sm mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              {post.readTime} min read
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-body bg-accent-primary/15 text-accent-primary border border-accent-primary/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content Layout with TOC */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <ProseContent>
              <MDXRemote 
                source={post.content} 
                components={{ Math }} 
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                  }
                }}
              />
            </ProseContent>
          </div>

          {/* Table of Contents */}
          <div>
            <TableOfContents content={post.content} />
          </div>
        </div>

        {/* Navigation */}
        <div className="max-w-4xl mx-auto mt-20 pt-12 border-t border-border-subtle">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {previous ? (
              <Link href={`/blog/${previous.slug}`}>
                <div className="group p-4 rounded-lg bg-bg-card border border-border-subtle hover:border-accent-primary/50 transition-all duration-300">
                  <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-2">
                    ← Previous
                  </p>
                  <p className="font-display text-lg font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                    {previous.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link href={`/blog/${next.slug}`} className="md:text-right">
                <div className="group p-4 rounded-lg bg-bg-card border border-border-subtle hover:border-accent-primary/50 transition-all duration-300">
                  <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-2">
                    Next →
                  </p>
                  <p className="font-display text-lg font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                    {next.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </article>
    </main>
  );
}
