"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg-base">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-1 mb-3">
                <span className="font-display text-xl font-bold text-accent">[</span>
                <span className="font-display text-xl font-bold text-text">Ranjan Mishra</span>
                <span className="font-display text-xl font-bold text-accent">]</span>
              </div>
              <p className="font-body text-sm text-text-muted leading-relaxed">
                AI/ML leader building rigorous, production-ready decision intelligence systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-display text-sm font-bold text-text-primary uppercase tracking-widest mb-4">
                Quick Links
              </h3>
              <nav className="space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/projects", label: "Projects" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block font-body text-sm text-text-muted transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-display text-sm font-bold text-text-primary uppercase tracking-widest mb-4">
                Currently Building
              </h3>
              <p className="font-body text-sm text-text-muted leading-relaxed">
                Open source systems for Bayesian structure learning, search workflows, and personal knowledge tracking.
              </p>
            </motion.div>
          </div>

          <div className="border-t border-border-subtle my-8" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <p className="font-body text-sm text-text-muted">
              © 2026 Ranjan Mishra. Built with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                Next.js
              </a>{" "}
              +{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                Vercel
              </a>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
