import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, ExternalLink } from "lucide-react";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research and technical work across probabilistic ML, structure learning, and epistemic foundations of production AI systems.",
};

const researchInterests = [
  {
    title: "Bayesian Structure Learning",
    description:
      "Scalable DAG discovery, score-based search, sufficient statistic data structures.",
    openQuestion:
      "Anytime algorithms for structure learning under streaming data.",
  },
  {
    title: "Causal Inference in Observational Data",
    description:
      "ATE estimation, counterfactual reasoning, causal graph extraction from text.",
    openQuestion:
      "Bridging LLM-extracted causal graphs with do-calculus validation.",
  },
  {
    title: "Epistemic Calibration of LLMs",
    description:
      "Self-consistency sampling, adversarial probing, Platt scaling on LLM outputs.",
    openQuestion: "When should a production LLM abstain rather than answer?",
  },
  {
    title: "Probabilistic Graphical Models for Real-Time Systems",
    description:
      "AD-tree structures, inference efficiency, C++ implementation for low-latency use cases.",
    openQuestion: "Hybrid neural-symbolic approaches to PGM inference.",
  },
];

const artifactTags = [
  "C++",
  "Bayesian Networks",
  "Structure Learning",
  "PGM",
  "Open Source",
];

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const SectionHeading = ({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) => (
  <div className="mb-8">
    {eyebrow && (
      <p className="mb-2 font-body text-xs font-semibold uppercase tracking-widest text-accent-primary">
        {eyebrow}
      </p>
    )}
    <h2 className="font-display text-3xl font-bold text-text-primary md:text-4xl">
      {title}
    </h2>
  </div>
);

const TagBadge = ({ tag }: { tag: string }) => (
  <span className="inline-flex items-center rounded-full border border-accent-primary/30 bg-accent-primary/15 px-3 py-1 font-body text-xs font-medium text-accent-primary">
    {tag}
  </span>
);

export default function ResearchPage() {
  const researchPosts = getAllPosts()
    .filter((post) =>
      post.tags.some((tag) => tag === "Research" || tag === "Technical Deep-Dive")
    )
    .slice(0, 3);

  return (
    <main className="flex-1 bg-bg-base">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-3xl space-y-4">
            <h1 className="font-display text-5xl font-bold text-text-primary md:text-6xl">
              Research & Technical Work
            </h1>
            <p className="font-body text-lg leading-relaxed text-text-muted">
              My focus is on probabilistic ML, structure learning, and epistemic
              foundations of production AI systems.
            </p>
          </div>

          <section className="mb-20">
            <SectionHeading title="Research Interests" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {researchInterests.map((interest) => (
                <article
                  key={interest.title}
                  className="rounded-lg border border-border-subtle bg-bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-secondary/50"
                >
                  <h3 className="mb-4 font-display text-xl font-bold text-text-primary">
                    {interest.title}
                  </h3>
                  <p className="mb-5 min-h-12 font-body text-sm leading-relaxed text-text-muted">
                    {interest.description}
                  </p>
                  <p className="font-body text-sm italic leading-relaxed text-text-muted">
                    <span className="font-semibold text-accent-secondary">
                      Open question:
                    </span>{" "}
                    {interest.openQuestion}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <SectionHeading
              eyebrow="Research Artifacts"
              title="Technical Artifacts"
            />
            <article className="rounded-lg border border-border-subtle bg-bg-card p-6 transition-all duration-300 hover:border-accent-primary/40 md:p-8">
              <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-text-primary">
                    bayesnet-sl — Bayesian Network Structure Learner
                  </h3>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-3 py-1 font-body text-xs font-semibold text-accent-primary">
                  <span className="h-2 w-2 rounded-full bg-accent-primary animate-pulse" />
                  Active Development
                </span>
              </div>

              <p className="mb-5 max-w-4xl font-body text-sm leading-relaxed text-text-muted">
                C++ library for DAG structure learning. AD-tree for O(1)
                sufficient statistics, Chow-Liu spanning tree as warm start,
                Simulated Annealing for full search, BIC scoring. Rebuilt from a
                2018 production cybersecurity system as a rigorous public
                artifact.
              </p>

              <div className="mb-6 rounded-lg border border-border-subtle bg-bg-base/50 p-4">
                <h4 className="mb-3 font-body text-sm font-semibold text-text-primary">
                  Implementation notes
                </h4>
                <p className="font-body text-sm leading-relaxed text-text-muted">
                  Moore & Lee 1998 AD-tree implementation, SA cooling schedule
                  empirically tuned, BIC vs MDL scoring comparison planned.
                </p>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {artifactTags.map((tag) => (
                  <TagBadge key={tag} tag={tag} />
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 border-t border-border-subtle pt-4">
                <a
                  href="https://github.com/placeholder/bayesnet-sl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-body text-sm font-medium text-accent-primary transition-colors duration-200 hover:bg-accent-primary/10"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.05.14 3.01.4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                  </svg>
                  GitHub
                </a>
                <Link
                  href="/blog/the-case-for-epistemic-rigor-in-production-llm-systems"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-body text-sm font-medium text-accent-secondary transition-colors duration-200 hover:bg-accent-secondary/10"
                >
                  <ExternalLink size={16} />
                  Technical Write-up
                </Link>
              </div>
            </article>
          </section>

          <section className="mb-20">
            <SectionHeading title="Writings with Research Depth" />
            {researchPosts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {researchPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="group flex h-full flex-col rounded-lg border border-border-subtle bg-bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary/40"
                  >
                    <h3 className="mb-3 font-display text-xl font-bold text-text-primary transition-colors group-hover:text-accent-primary">
                      {post.title}
                    </h3>
                    <div className="mb-4 flex items-center gap-2 font-body text-sm text-text-muted">
                      <Calendar size={16} />
                      {formatDate(post.date)}
                    </div>
                    <p className="mb-5 flex-1 font-body text-sm leading-relaxed text-text-muted">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 font-body text-sm font-semibold text-accent-primary transition-all duration-200 group-hover:gap-3"
                    >
                      Read the technical post
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-border-subtle bg-bg-card p-8">
                <p className="font-body text-sm leading-relaxed text-text-muted">
                  Research-tagged technical posts will appear here as they are
                  published.
                </p>
              </div>
            )}
          </section>

          <section className="mb-20">
            <SectionHeading title="Preprints & Publications" />
            <div className="rounded-lg border border-dashed border-accent-primary/60 bg-bg-card p-6 md:p-8">
              <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h3 className="font-display text-xl font-bold text-text-primary">
                  Working Paper — Expected 2025: Anytime Bayesian Structure
                  Learning with Streaming AD-trees
                </h3>
                <span className="inline-flex w-fit items-center rounded-full border border-accent-secondary/30 bg-accent-secondary/10 px-3 py-1 font-body text-xs font-semibold text-accent-secondary">
                  In progress
                </span>
              </div>
              <p className="font-body text-sm leading-relaxed text-text-muted">
                I write technical deep-dives on this blog as precursors to formal
                papers. Follow along.
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-accent-primary/60 bg-accent-primary/10 p-6 md:p-8">
            <p className="font-display text-2xl font-bold leading-snug text-text-primary">
              All research artifacts ship with reproducible environments,
              documented hyperparameter choices, and honest failure mode
              analysis. Code &gt; claims.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
