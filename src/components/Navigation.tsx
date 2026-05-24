"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopHovered, setIsDesktopHovered] = useState(false);
  const [isMobileHovered, setIsMobileHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <motion.nav
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-xl bg-[#060910]/85 border-b border-[#1C2A3A] shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-0.5 group">
            <span className="font-display text-lg font-bold text-accent-primary transition-colors duration-300">
              [
            </span>
            <span className="font-display text-lg font-bold text-text-primary group-hover:text-white transition-colors duration-300">
              Ranjan Mishra
            </span>
            <span className="font-display text-lg font-bold text-accent-primary transition-colors duration-300">
              ]
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 font-body text-sm font-medium rounded-md transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-accent-primary"
                    : "text-text-muted hover:text-text-primary hover:bg-white/5"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.div
                    className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 380, damping: 40 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right side: Badge + Mobile button */}
          <div className="flex items-center gap-3">
            {/* Open to Work Badge */}
            <div
              className="relative hidden sm:block"
              onMouseEnter={() => setIsDesktopHovered(true)}
              onMouseLeave={() => setIsDesktopHovered(false)}
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/25 cursor-pointer hover:border-accent-primary/50 hover:bg-accent-primary/15 transition-all duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-50"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
                </span>
                <span className="font-body text-xs font-medium text-accent-primary whitespace-nowrap tracking-wide">
                  Open to Opportunities
                </span>
              </div>

              <AnimatePresence>
                {isDesktopHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute right-0 top-full mt-3 w-72 p-4 rounded-xl border border-border-medium bg-bg-surface/98 backdrop-blur-xl shadow-2xl shadow-black/50 z-50 pointer-events-none"
                  >
                    <div className="absolute right-5 -top-[5px] w-[10px] h-[10px] bg-bg-surface border-t border-l border-border-medium rotate-45" />
                    <div className="space-y-2.5 relative z-10">
                      <div>
                        <p className="font-body text-[10px] font-semibold text-accent-primary uppercase tracking-widest mb-0.5">Industry</p>
                        <p className="font-body text-sm font-medium text-text-primary">Director / Senior Manager AI</p>
                      </div>
                      <div className="border-t border-border-subtle pt-2.5">
                        <p className="font-body text-[10px] font-semibold text-accent-secondary uppercase tracking-widest mb-0.5">Labs</p>
                        <p className="font-body text-sm font-medium text-text-primary">Applied Scientist / Research Engineer</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-white/5 transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden border-t border-border-subtle overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-2.5 rounded-lg font-body text-sm font-medium transition-all duration-200 ${
                        isActive(link.href)
                          ? "bg-accent-primary/10 text-accent-primary border-l-2 border-accent-primary"
                          : "text-text-muted hover:text-text-primary hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile badge */}
                <div className="pt-3 mt-3 border-t border-border-subtle relative">
                  <div
                    onClick={() => setIsMobileHovered(!isMobileHovered)}
                    onMouseEnter={() => setIsMobileHovered(true)}
                    onMouseLeave={() => setIsMobileHovered(false)}
                    className="px-4 py-2.5 rounded-lg bg-accent-primary/10 border border-accent-primary/25 flex items-center gap-2 cursor-pointer"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-50"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
                    </span>
                    <span className="font-body text-sm font-medium text-accent-primary">
                      Open to Opportunities
                    </span>
                  </div>

                  <AnimatePresence>
                    {isMobileHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 right-0 bottom-full mb-3 p-4 rounded-xl border border-border-medium bg-bg-surface/98 backdrop-blur-xl shadow-2xl shadow-black/50 z-50"
                      >
                        <div className="absolute left-6 -bottom-[5px] w-[10px] h-[10px] bg-bg-surface border-b border-r border-border-medium rotate-45" />
                        <div className="space-y-2.5 relative z-10">
                          <div>
                            <p className="font-body text-[10px] font-semibold text-accent-primary uppercase tracking-widest mb-0.5">Industry</p>
                            <p className="font-body text-sm font-medium text-text-primary">Director / Senior Manager AI</p>
                          </div>
                          <div className="border-t border-border-subtle pt-2.5">
                            <p className="font-body text-[10px] font-semibold text-accent-secondary uppercase tracking-widest mb-0.5">Labs</p>
                            <p className="font-body text-sm font-medium text-text-primary">Applied Scientist / Research Engineer</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
