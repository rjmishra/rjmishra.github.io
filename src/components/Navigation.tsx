"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopHovered, setIsDesktopHovered] = useState(false);
  const [isMobileHovered, setIsMobileHovered] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    try {
      return document.documentElement.classList.contains("dark");
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onTheme = (e: Event) => {
      const ce = e as CustomEvent<string>;
      try {
        setIsDarkTheme(ce.detail === "dark");
      } catch {
        setIsDarkTheme(document.documentElement.classList.contains("dark"));
      }
    };

    window.addEventListener("themechange", onTheme as EventListener);
    return () => window.removeEventListener("themechange", onTheme as EventListener);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <motion.nav
      role="navigation"
      aria-label="Primary"
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? isDarkTheme
            ? "border-b border-white/10 bg-[#06101F]/95 backdrop-blur-xl shadow-black/20 shadow-sm"
            : "border-b border-gray-200 bg-white/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Go to homepage" className="flex items-center gap-2">
          <span className="sr-only">Ranjan Mishra</span>
          <div className="w-9 h-9 rounded-md bg-accent-primary/10 flex items-center justify-center text-accent-primary font-display font-bold text-sm">RM</div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                isActive(link.href)
                  ? "text-accent"
                  : "text-text-muted hover:text-text-primary hover:bg-white/5"
              }`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span
                  layoutId="underline"
                  className="absolute inset-x-3 -bottom-0.5 h-[1.5px] rounded-full bg-gradient-to-r from-accent to-accent/80"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center">
            <ThemeToggle />
          </div>
          <div className="relative hidden sm:block">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={isDesktopHovered}
              onMouseEnter={() => setIsDesktopHovered(true)}
              onMouseLeave={() => setIsDesktopHovered(false)}
              onFocus={() => setIsDesktopHovered(true)}
              onBlur={() => setIsDesktopHovered(false)}
              className="flex items-center gap-2 rounded-full border border-accent-primary/25 px-3 py-1.5 cursor-pointer hover:border-accent-primary/40 transition-all duration-200 text-xs text-accent-primary bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
            >
              <span className="font-body text-xs font-medium text-accent-primary whitespace-nowrap tracking-wide">
                Open to Opportunities
              </span>
            </button>

            <AnimatePresence>
              {isDesktopHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute right-0 top-full mt-3 w-72 p-4 rounded-xl border border-border-medium bg-bg-surface/98 backdrop-blur-xl shadow-2xl shadow-black/50 z-50"
                >
                  <div className="absolute right-5 -top-[5px] w-[10px] h-[10px] bg-bg-surface border-t border-l border-border-medium rotate-45" />
                  <div className="space-y-2.5 relative z-10">
                    <div>
                      <p className="font-body text-[10px] font-semibold uppercase tracking-widest text-accent mb-0.5">Industry</p>
                      <p className="font-body text-sm font-medium text-text">Director / Senior Manager AI</p>
                    </div>
                    <div className="border-t border-border-subtle pt-2.5">
                      <p className="font-body text-[10px] font-semibold uppercase tracking-widest text-accent/80 mb-0.5">Labs</p>
                      <p className="font-body text-sm font-medium text-text">Applied Scientist / Research Engineer</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen((state) => !state)}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            className="md:hidden rounded-lg p-3 text-text-muted transition-all duration-200 hover:bg-white/5 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            id="mobile-menu"
            className="md:hidden overflow-hidden border-t border-white/10 bg-[#06101F]/95"
          >
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? "bg-white/5 text-accent border-l-2 border-accent"
                      : "text-text-muted hover:text-text-primary hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-3 mt-3 border-t border-border-subtle relative">
                <button
                  type="button"
                  onClick={() => setIsMobileHovered(!isMobileHovered)}
                  onMouseEnter={() => setIsMobileHovered(true)}
                  onMouseLeave={() => setIsMobileHovered(false)}
                  aria-haspopup="true"
                  aria-expanded={isMobileHovered}
                  className="px-4 py-2.5 rounded-lg bg-accent/10 border border-accent/25 flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  <span className="font-body text-sm font-medium text-accent">
                    Open to Opportunities
                  </span>
                </button>

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
                          <p className="font-body text-[10px] font-semibold uppercase tracking-widest text-accent-primary mb-0.5">Industry</p>
                          <p className="font-body text-sm font-medium text-text">Director / Senior Manager AI</p>
                        </div>
                        <div className="border-t border-border-subtle pt-2.5">
                          <p className="font-body text-[10px] font-semibold uppercase tracking-widest text-accent-primary/80 mb-0.5">Labs</p>
                          <p className="font-body text-sm font-medium text-text">Applied Scientist / Research Engineer</p>
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
    </motion.nav>
  );
}
