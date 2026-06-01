"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const codeSnippets = [
  {
    title: "Causal Inference",
    code: "causal_model = BayesianNetwork(\n  structure=learn_structure(data),\n  interventions=identify_confounders()\n)\neffect = model.estimate_ATE()",
  },
  {
    title: "LLM Pipeline",
    code: "pipeline = Agent(\n  retriever=VectorDB(),\n  llm=GPT4(),\n  tools=[calculate, search, reason]\n)\nresponse = pipeline.run(query)",
  },
  {
    title: "Multi-Agent System",
    code: "agents = [\n  AnalyticsAgent(),\n  DecisionAgent(),\n  ExecutionAgent()\n]\noutcome = orchestrate(agents)",
  },
];

const TypewriterCode = ({ snippet, isActive }: { snippet: typeof codeSnippets[0]; isActive: boolean }) => {
  const [displayedCode, setDisplayedCode] = useState("");

  useEffect(() => {
    if (!isActive) {
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      if (index < snippet.code.length) {
        setDisplayedCode(snippet.code.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isActive, snippet.code]);

  return (
    <div className="text-left">
      <div className="text-xs font-body font-medium text-accent-primary mb-2 uppercase tracking-widest">
        {snippet.title}
      </div>
      <pre className="font-mono text-xs text-text-primary overflow-hidden">
        <code>{displayedCode}</code>
      </pre>
    </div>
  );
};

const LinkedInIcon = () => (
  <svg
    className="h-5 w-5 fill-current"
    viewBox="0 0 24 24"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.54V8.98H7.1v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
  </svg>
);

export default function Hero() {
  const [activeSnippet, setActiveSnippet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl mix-blend-multiply filter opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl mix-blend-multiply filter opacity-30" />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl mix-blend-multiply filter opacity-20 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Labels */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-primary/40 bg-accent-primary/15">
                  <span className="text-xs font-body font-semibold text-accent-primary tracking-widest uppercase">
                    AI Systems Leadership
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-primary/30 bg-accent-primary/10">
                  <span className="text-xs font-body font-semibold text-accent-primary/80 tracking-widest uppercase">
                    ML Research
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="page-title">
                Building Rigorous AI — From Research to Production
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.div variants={itemVariants}>
              <p className="body-copy-lg max-w-lg">
                Data Science leader and ML researcher specializing in probabilistic graphical models, causal inference, and production LLM systems. 12+ years from statistical foundations to frontier AI engineering.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link href="/contact" className="btn-secondary-violet">
                Get In Touch
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-8">
              <a
                href="https://linkedin.com/in/rjmishra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-muted hover:text-accent-primary hover:bg-accent-primary/10 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/rjmishra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-muted hover:text-accent-primary hover:bg-accent-primary/10 transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </motion.div>

            {/* Status Badge */}
            <motion.div variants={itemVariants} className="pt-4">
              <Link href="/contact" className="section-badge-primary">
                Available for senior leadership roles and research collaborations
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Code Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-accent-secondary/10 to-transparent rounded-xl blur-2xl -z-10" />

            {/* Terminal Card */}
            <div className="bg-bg-card border border-border-subtle rounded-xl overflow-hidden shadow-2xl">
              {/* Top Bar */}
              <div className="bg-bg-surface border-b border-border-subtle px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-accent-primary/70" />
                <span className="ml-4 text-xs text-text-muted font-mono">neural_pipeline.py</span>
              </div>

              {/* Code Content */}
              <div className="p-6 min-h-64 font-mono">
                <motion.div
                  key={activeSnippet}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <TypewriterCode
                    snippet={codeSnippets[activeSnippet]}
                    isActive={true}
                  />
                </motion.div>

                {/* Blinking cursor */}
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-5 bg-accent-primary ml-1"
                />
              </div>

              {/* Snippet Indicators */}
              <div className="bg-bg-surface border-t border-border-subtle px-6 py-3 flex items-center gap-2">
                {codeSnippets.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveSnippet(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeSnippet
                        ? "w-8 bg-accent-primary"
                        : "w-2 bg-border-subtle hover:bg-text-muted"
                    }`}
                    aria-label={`Show snippet ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
