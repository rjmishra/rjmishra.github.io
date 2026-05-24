"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  index: number;
}

const ContactCard = ({ icon, label, value, href, index }: ContactCardProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
      aria-label={`${label}: ${value}`}
    >
      <div className="h-full px-6 py-8 rounded-lg bg-bg-card border border-border-subtle shadow-black/10 hover:border-accent-primary/50 hover:shadow-xl hover:shadow-accent-primary/5 transition-all duration-300 flex flex-col items-center text-center">
        <div className="mb-4 p-3 rounded-lg bg-accent-primary/10 group-hover:bg-accent-primary/20 transition-colors">
          <div className="text-accent-primary">{icon}</div>
        </div>
        <div className="flex items-center gap-1.5 font-body text-xs text-text-muted uppercase tracking-widest mb-2">
          {label}
          <ExternalLink size={13} className="text-accent-primary opacity-70" />
        </div>
        <p className="font-body font-semibold text-text-primary mb-4 group-hover:text-accent-primary transition-colors">
          {value}
        </p>
      </div>
    </motion.a>
  );
};

const LinkedInIcon = () => (
  <svg
    className="h-6 w-6 fill-current"
    viewBox="0 0 24 24"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.54V8.98H7.1v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    className="h-6 w-6 fill-current"
    viewBox="0 0 24 24"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.05.14 3.01.4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
  </svg>
);

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-base">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-text-primary mb-4">
            Let&apos;s Connect
          </h2>
          <p className="font-body text-lg text-text-muted max-w-2xl mx-auto">
            Open to Director/Senior Manager AI/ML opportunities and thought leadership conversations.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <ContactCard
            icon={<LinkedInIcon />}
            label="LinkedIn"
            value="@rjmishra"
            href="https://linkedin.com/in/rjmishra"
            index={0}
          />
          <ContactCard
            icon={<Mail size={24} />}
            label="Email"
            value="rjmishra111@gmail.com"
            href="mailto:rjmishra111@gmail.com"
            index={1}
          />
          <ContactCard
            icon={<GitHubIcon />}
            label="GitHub"
            value="github.com/rjmishra"
            href="https://github.com/rjmishra"
            index={2}
          />
        </div>

        {/* Subscribe Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-bg-card border border-border-subtle rounded-lg p-8"
        >
          <p className="font-body text-center text-text-muted mb-6">
            I write about LLM systems, causal inference, and AI leadership.{" "}
            <span className="text-text-primary font-medium">Hit subscribe if that&apos;s your thing.</span>
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-bg-base border border-border-subtle text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors font-body text-sm"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-lg bg-accent-primary text-bg-base font-body font-semibold text-sm transition-all hover:bg-accent-primary/90 whitespace-nowrap"
            >
              {subscribed ? "✓ Subscribed!" : "Subscribe"}
            </motion.button>
          </form>

          {subscribed && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-accent-primary text-sm mt-3 font-body font-medium"
            >
              Thanks for subscribing! Check your email.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
