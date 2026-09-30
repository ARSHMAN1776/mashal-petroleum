"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FlameIcon } from "@/components/ui/FlameIcon";
import { LuxButton } from "@/components/ui/LuxButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "PARCO Station", href: "/parco" },
  { name: "PSO Station", href: "/pso" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const EASE = [0.32, 0.72, 0, 1] as const;

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock page scroll and allow Escape while the menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-mashal-bone/90 backdrop-blur-xl transition-[border-color] duration-500",
        isScrolled || menuOpen ? "border-mashal-line" : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-6 lg:px-10">
        {/* Wordmark */}
        <Link
          href="/"
          aria-label="Mashaal Petroleum home"
          className="group flex items-center gap-3 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mashal-gold"
        >
          <FlameIcon size={22} className="text-mashal-gold transition-transform duration-500 group-hover:-translate-y-0.5" />
          <span className="font-display text-[21px] font-normal tracking-[-0.01em] text-mashal-charcoal">
            Mashaal Petroleum
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative py-2 text-[13px] tracking-[0.02em] transition-colors duration-500",
                  "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-mashal-gold after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.32,0.72,0,1)]",
                  isActive
                    ? "font-medium text-mashal-charcoal after:scale-x-100"
                    : "text-mashal-ink-soft after:scale-x-0 hover:text-mashal-charcoal hover:after:scale-x-100"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <LuxButton href="/contact" variant="outline" size="sm">
            Direct inquiries
          </LuxButton>
        </div>

        {/* Mobile toggle: two hairlines that morph into a cross */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="relative -mr-2 flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mashal-gold md:hidden"
        >
          <span
            className={cn(
              "absolute h-px w-6 bg-mashal-charcoal transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
              menuOpen ? "rotate-45" : "-translate-y-[4px]"
            )}
          />
          <span
            className={cn(
              "absolute h-px w-6 bg-mashal-charcoal transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
              menuOpen ? "-rotate-45" : "translate-y-[4px]"
            )}
          />
        </button>
      </div>

      {/* Mobile menu: full-screen sheet, links rise in one after another */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="absolute inset-x-0 top-full flex h-[calc(100dvh-76px)] flex-col justify-between bg-mashal-bone px-6 pb-10 pt-8 md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <div key={link.href} className="overflow-hidden border-b border-mashal-line">
                    <motion.div
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.7, delay: 0.08 + i * 0.06, ease: EASE }}
                    >
                      <Link
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className="flex items-baseline justify-between py-5"
                      >
                        <span
                          className={cn(
                            "font-display text-[34px] font-normal leading-none tracking-[-0.01em]",
                            isActive ? "text-mashal-gold-deep" : "text-mashal-charcoal"
                          )}
                        >
                          {link.name}
                        </span>
                        <span className="text-[12px] tabular-nums tracking-[0.2em] text-mashal-gold-muted">
                          0{i + 1}
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
            >
              <LuxButton href="/contact" variant="dark">
                Direct inquiries
              </LuxButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
