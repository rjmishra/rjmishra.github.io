"use client";

import { motion } from "framer-motion";
import { Brain, GitBranch, ShieldCheck, BarChart2, Cpu } from "lucide-react";

const expertise = [
  {
    icon: Brain,
    title: "LLM & GenAI Systems",
    description: "Production pipelines on AWS Bedrock, multi-agent orchestration",
  },
  {
    icon: GitBranch,
    title: "Causal Inference",
    description: "ATE estimation, counterfactual simulation, causal graph extraction",
  },
  {
    icon: ShieldCheck,
    title: "Fraud & Risk Analytics",
    description: "Real-time detection systems, anomaly modeling",
  },
  {
    icon: BarChart2,
    title: "ML Governance & MLOps",
    description: "Model lifecycle, drift detection, regulatory frameworks",
  },
  {
    icon: Cpu,
    title: "Bayesian & Probabilistic ML",
    description: "Structure learning, BIC scoring, real-time inference engines",
  },
];

const ExpertiseCard = ({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: typeof Brain;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="h-full px-6 py-8 rounded-lg bg-bg-card border border-border-subtle card-interactive group-hover:bg-bg-card/80">
        {/* Icon */}
        <div className="mb-4">
          <Icon className="w-8 h-8 text-accent-primary transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* Title */}
        <h3 className="card-title mb-2 group-hover:text-accent-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="body-copy-muted">
          {description}
        </p>

        {/* Subtle glow on hover */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent-primary/0 to-accent-primary/0 group-hover:from-accent-primary/5 group-hover:to-accent-primary/0 transition-all duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default function ExpertiseStrip() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-bg-base">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="section-badge-primary mb-4">
            Expertise
          </div>
          <h2 className="section-title section-title-accent">
            Where I Build & Lead
          </h2>
          <div className="mt-4 accent-underline mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <ExpertiseCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
