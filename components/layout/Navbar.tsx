"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FlameIcon } from "@/components/ui/FlameIcon";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { mashalInfo } from "@/lib/station-data";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "PARCO Station", href: "/parco" },
    { name: "PSO Station", href: "/pso" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 bg-[#030914]/90 backdrop-blur-md border-b border-white/10 text-white py-2 sm:py-2.5",
        isScrolled && "shadow-lg shadow-black/40 bg-[#030914]/95 py-1.5 sm:py-2"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark & Flame */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F3C351] rounded"
          aria-label="Mashal Petroleum Home"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F3C351]/10 border border-[#F3C351]/40 flex items-center justify-center text-[#F3C351] group-hover:scale-105 transition-transform shadow-[0_0_10px_rgba(243,195,81,0.2)]">
            <FlameIcon size={16} />
          </div>
          <span className="font-serif text-base sm:text-lg tracking-tight font-normal text-white group-hover:text-[#F3C351] transition-colors">
            Mashal Petroleum
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs lg:text-[13px] font-medium transition-colors relative py-1",
                  isActive
                    ? "text-[#F3C351]"
                    : "text-neutral-300 hover:text-white"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#F3C351] rounded-full shadow-[0_0_8px_rgba(243,195,81,0.6)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-2.5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#F3C351] hover:bg-[#E5B53F] text-[#050D19] px-4 py-2 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <span>Direct Inquiries</span>
            <span className="text-xs leading-none font-bold">&rarr;</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#F3C351]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#030914] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2.5 rounded text-sm font-medium transition-colors",
                    isActive
                      ? "text-[#F3C351] bg-white/5 font-semibold"
                      : "text-neutral-200 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center text-sm font-semibold bg-[#F3C351] text-[#050D19] py-2.5 rounded-full shadow-md"
            >
              Direct Inquiries &rarr;
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
