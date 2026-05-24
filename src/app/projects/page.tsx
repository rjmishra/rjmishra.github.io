"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  keyDecisions: string[];
  github?: string;
  blog?: string;
}

const projects: Project[] = [
  {
    id: "bayesian-network",
    title: "Bayesian Network Structure Learner",
    tags: ["C++", "Bayesian ML", "Research"],
    description:
      "High-performance DAG structure learning library using AD-tree for O(1) sufficient statistics, Chow-Liu warm start, and Simulated Annealing search with BIC scoring. Rebuilt from a 2018 real-time cybersecurity application as a public research artifact.",
    keyDecisions: [
      "AD-tree vs junction tree trade-offs for indexing efficiency",
      "Simulated Annealing cooling schedule tuning (geometric vs exponential)",
      "BIC vs MDL scoring trade-off for model complexity penalties",
    ],
    github: "https://github.com/ranjan/bayesian-structure-learner",
  },
  {
    id: "rca-pipeline",
    title: "Root Cause Analysis Pipeline — Insurance Claims",
    tags: ["Python", "AWS Bedrock", "Multi-Agent", "LLM"],
    description:
      "Production-grade RCA system for roadside assistance transcripts featuring multi-agent architecture, epistemic validation (self-consistency sampling, adversarial probing, Platt scaling), ATE-based attribution, and counterfactual simulation.",
    keyDecisions: [
      "Multi-agent vs monolithic LLM reasoning patterns",
      "Epistemic validation: self-consistency vs adversarial probing trade-offs",
      "Knowledge base mining strategies for RL/RAG pipeline integration",
    ],
    github: "https://github.com/ranjan/rca-pipeline",
    blog: "https://ranjan.dev/blog/production-rca-systems",
  },
  {
    id: "ai-assistant",
    title: "Personal AI Assistant — Voice + Face",
    tags: ["Python", "MLX", "React", "FastAPI"],
    description:
      "Browser-based personal AI assistant with multi-LLM routing (OpenAI, Anthropic, Gemini, Ollama), cloned voice synthesis via OpenVoice v2, and animated talking face via LivePortrait. Optimized for Apple M2 Air with MLX-Whisper for on-device transcription.",
    keyDecisions: [
      "LiteLLM for provider abstraction and cost optimization",
      "MLX vs CUDA trade-offs on Apple Silicon hardware",
      "Voice synthesis latency vs quality with OpenVoice v2",
    ],
    github: "https://github.com/ranjan/ai-assistant",
  },
];

const TagBadge = ({ tag }: { tag: string }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-body bg-accent-primary/15 text-accent-primary border border-accent-primary/30">
      {tag}
    </span>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full"
    >
      <div className="flex-1 px-6 py-8 rounded-lg bg-bg-card border border-border-subtle hover:border-accent-primary/40 transition-all duration-300 flex flex-col">
        {/* Title */}
        <h3 className="font-display text-xl font-bold text-text-primary mb-4">
          {project.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>

        {/* Description */}
        <p className="font-body text-sm text-text-muted leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Key Decisions Accordion */}
        <div className="mb-6 border-t border-border-subtle pt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between text-text-primary hover:text-accent-primary transition-colors duration-200"
          >
            <span className="font-body font-semibold text-sm">
              Key Design Decisions
            </span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={18} />
            </motion.div>
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 space-y-2"
              >
                {project.keyDecisions.map((decision, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 text-sm text-text-muted font-body"
                  >
                    <span className="text-accent-primary font-bold flex-shrink-0">
                      •
                    </span>
                    <span>{decision}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 border-t border-border-subtle pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-accent-primary hover:bg-accent-primary/10 transition-colors duration-200 font-body text-sm font-medium"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {project.blog && (
            <a
              href={project.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-accent-secondary hover:bg-accent-secondary/10 transition-colors duration-200 font-body text-sm font-medium"
            >
              <ExternalLink size={16} />
              Blog Post
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  return (
    <main className="flex-1 bg-bg-base">
      {/* Page Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 mb-16"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-text-primary">
              What I&apos;ve Built
            </h1>
            <p className="font-body text-lg text-text-muted max-w-2xl">
              Production AI systems, research libraries, and open source work spanning LLM pipelines, causal inference, and decision intelligence.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* More on GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <a
              href="https://github.com/ranjan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-accent-primary/10 border border-accent-primary/50 text-accent-primary font-body font-semibold hover:bg-accent-primary/20 hover:border-accent-primary transition-all duration-200"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Explore More on GitHub
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
