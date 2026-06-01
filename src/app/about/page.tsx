"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Lightbulb } from "lucide-react";

// Geometric Avatar Component
const GeometricAvatar = () => {
  return (
    <div className="relative w-full aspect-square max-w-sm mx-auto">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="avatarGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle cx="100" cy="100" r="95" fill="#111827" stroke="#1E293B" strokeWidth="2" />

        {/* Geometric shapes - Abstract tech-themed pattern */}
        <g opacity="0.9">
          {/* Central hexagon */}
          <polygon
            points="100,40 140,65 140,115 100,140 60,115 60,65"
            fill="url(#avatarGradient)"
          />

          {/* Corner elements */}
          <circle cx="140" cy="60" r="12" fill="#6366F1" opacity="0.6" />
          <circle cx="60" cy="140" r="12" fill="#14B8A6" opacity="0.6" />

          {/* Lines connecting */}
          <line
            x1="100"
            y1="40"
            x2="140"
            y2="60"
            stroke="#14B8A6"
            strokeWidth="2"
            opacity="0.5"
          />
          <line
            x1="100"
            y1="140"
            x2="60"
            y2="140"
            stroke="#6366F1"
            strokeWidth="2"
            opacity="0.5"
          />

          {/* Inner circle */}
          <circle cx="100" cy="100" r="30" fill="none" stroke="#14B8A6" strokeWidth="2" opacity="0.7" />

          {/* Dots */}
          <circle cx="85" cy="85" r="4" fill="#F1F5F9" />
          <circle cx="115" cy="115" r="4" fill="#F1F5F9" />
        </g>
      </svg>
    </div>
  );
};

// Philosophy Card Component
const PhilosophyCard = ({
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
      className="p-6 rounded-lg bg-bg-card border border-border-subtle hover:border-accent-gold/50 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-accent-gold/10">
          <Icon className="w-6 h-6 text-accent-gold" />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-text-primary mb-2">
            {title}
          </h3>
          <p className="font-body text-sm text-text-muted leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Timeline Item Component
const TimelineItem = ({
  year,
  title,
  description,
  index,
  total,
}: {
  year: string;
  title: string;
  description: string;
  index: number;
  total: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex gap-8 items-start ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} md:gap-12`}
    >
      {/* Left/Right Content */}
      <div className="flex-1">
        <div className="p-6 rounded-lg bg-bg-card card-interactive hover:border-accent-gold/40">
          <p className="label-small mb-2 text-accent-gold">
            {year}
          </p>
          <h3 className="card-title mb-2 text-colorize">
            {title}
          </h3>
          <p className="body-copy-muted leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Center Timeline Dot */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-accent-gold border-4 border-bg-base" />
        {index < total - 1 && (
          <div className="w-1 h-20 md:h-32 bg-gradient-to-b from-accent-gold/50 to-accent-gold/0" />
        )}
      </div>

      {/* Placeholder for right side on desktop */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

// Tech Stack Pill
const TechPill = ({ name }: { name: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium font-body bg-accent-primary/10 text-accent-primary border border-accent-primary/30 hover:border-accent-primary/60 transition-colors duration-200"
    >
      {name}
    </motion.span>
  );
};

export default function AboutPage() {
  const philosophy = [
    {
      icon: Brain,
      title: "Epistemic Rigor First",
      description:
        "Every model claim should have calibrated confidence. Uncertainty quantification isn't a nice-to-have—it's foundational to trustworthy AI.",
    },
    {
      icon: Cpu,
      title: "Systems Over Models",
      description:
        "ML value lives in end-to-end pipelines, not isolated notebooks. Architecture, orchestration, and monitoring matter as much as model performance.",
    },
    {
      icon: Lightbulb,
      title: "Lead With Curiosity",
      description:
        "Stay close to first principles even at leadership level. The best technical leaders keep their hands dirty with actual systems.",
    },
  ];

  const timeline = [
    {
      year: "2008",
      title: "Started School in Computer Science",
      description:
        "Fell in love with algorithms, data structures, and the power of code to solve complex problems. Built a strong foundation in programming and software engineering.",
    },
    {
      year: "2012",
      title: "First Job in working with Large Datasets",
      description:
        "Built ETL pipelines and data warehouses for a major financial company, learning the importance of data quality, scalability, and real-world constraints in production systems.",
    },
    {
      year: "2015",
      title: "Back to School for Master in CS",
      description:
        "Learned rigorous statistical inference, algorithms, and machine learning theory at Indian Statistical Institute. This mathematical grounding shaped my approach to production systems—when you understand the theory deeply, you make better engineering trade-offs.",
    },
    {
      year: "2017",
      title: "Large Scale ML in Production - Cybersecurity",
      description:
        "Built single-handedly production ML pipelines for real-time cyber threat detection for a startup. This was my first deep dive into the challenges of deploying ML at scale—data drift, latency constraints, and the importance of monitoring and feedback loops.",
    },
    {
      year: "2020",
      title: "ML in HR Tech - Leading AI for Talent Acquisition",
      description:
        "Led the development of AI-powered talent acquisition systems, leveraging machine learning to optimize hiring processes and improve candidate matching.",
    },
    {
      year: "2024 - Now",
      title: "AI in Insurance - Building Decision Intelligence Systems",
      description:
        "Building production LLM pipelines, real-time fraud detection systems, and causal inference engines that drive millions in risk mitigation. Leading technical teams on building AI-powered decision intelligence systems that actually work in production—not just in notebooks.",
    },
  ];

  const techStack = [
    "Python",
    "C++",
    "AWS Bedrock",
    "PyTorch",
    "Apache Spark",
    "Kafka",
    "LangChain",
    "FastAPI",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Docker",
  ];

  return (
    <main className="flex-1 bg-bg-base">
      {/* Section 1: Bio Block */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <GeometricAvatar />
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="body-copy-lg leading-relaxed">
                  I&apos;m a Data Science Manager at a leading US insurance firm, where I build production LLM pipelines, 
                  realtime fraud detection systems, and causal inference engines that drive millions in risk mitigation. 
                  I lead technical teams on building AI powered decision intelligence systems that actually work in production, not just in notebooks.
                </p>

                <p className="body-copy-lg leading-relaxed">
                  My technical identity bridges rigorous statistical foundations with modern LLM engineering. 
                  I believe in <q>AI powered decision intelligence, the intersection of causal reasoning, Bayesian thinking, 
                  and production-grade orchestration</q>. Epistemic rigor matters: every model claim should come with calibrated confidence.
                </p>

                <p className="body-copy-lg leading-relaxed">
                  I&apos;m actively building: open source Bayesian network research libraries, public writing on production ML systems, 
                  and leading teams toward a vision of trustworthy, interpretable AI at enterprise scale. Moving toward Director/VP 
                  of AI & Decision Intelligence.
                </p>
              </div>

              <div className="pt-4">
                <p className="label-small mb-3 text-accent-primary font-bold">
                  12+ years in  data science and AI engineering
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: How I Think */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border-subtle">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="section-badge-primary mb-4">
              Philosophy
            </div>
            <h2 className="section-title section-title-accent">
              How I Think
            </h2>
            <p className="body-copy-lg mt-4">
              Three core principles that guide my approach to AI and ML systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophy.map((item, index) => (
              <PhilosophyCard
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

      {/* Section 3: Journey Timeline */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border-subtle">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="section-badge-primary mb-4">
              Timeline
            </div>
            <h2 className="section-title section-title-accent">
              My Journey
            </h2>
            <p className="body-copy-lg mt-4">
              From statistical foundations to production decision intelligence.
            </p>
          </motion.div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                index={index}
                total={timeline.length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Tech Stack */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border-subtle">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="section-badge-primary mb-4">
              Stack
            </div>
            <h2 className="section-title section-title-accent">
              Tools & Stack
            </h2>
            <p className="body-copy-lg mt-4">
              Technologies I work with daily to build production AI systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-3"
          >
            {techStack.map((tech) => (
              <TechPill key={tech} name={tech} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 5: Education */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-lg bg-bg-card border border-border-subtle"
          >
            <h2 className="subsection-title mb-4">
              Education
            </h2>
            <div className="space-y-3">
              <p className="font-body text-lg text-text-primary font-semibold">
                Master&apos;s Degree, Computer Science
              </p>
              <p className="font-body text-base text-text-muted">
                Indian Statistical Institute (ISI), Kolkata
              </p>
              <p className="font-body text-sm text-text-muted leading-relaxed mt-4 pt-4 border-t border-border-subtle">
                Foundational training in machine learning, statistical inference, and algorithms. 
                This mathematical grounding shaped my approach to production systems—when you understand 
                the theory deeply, you make better engineering trade-offs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
