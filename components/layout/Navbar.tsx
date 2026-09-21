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
        "sticky top-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-[#EAE5D9] text-[#15120D] py-2.5 sm:py-3",
        isScrolled && "shadow-[0_4px_25px_rgba(200,154,60,0.08)] bg-white/98 py-2 sm:py-2.5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark & Flame */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C89A3C] rounded"
          aria-label="Mashaal Petroleum Home"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FAF6EE] border border-[#E6DEC8] flex items-center justify-center text-[#C89A3C] group-hover:scale-105 transition-transform shadow-[0_0_10px_rgba(200,154,60,0.15)]">
            <FlameIcon size={16} />
          </div>
          <span className="font-serif text-base sm:text-lg tracking-tight font-normal text-[#15120D] group-hover:text-[#C89A3C] transition-colors">
            Mashaal Petroleum
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
                    ? "text-[#C89A3C] font-semibold"
                    : "text-[#5A5245] hover:text-[#15120D]"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#C89A3C] rounded-full shadow-[0_0_6px_rgba(200,154,60,0.4)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-2.5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#C89A3C] hover:bg-[#B68B34] text-white px-4 py-2 rounded-full transition-all shadow-[0_2px_12px_rgba(200,154,60,0.25)] hover:shadow-[0_4px_16px_rgba(200,154,60,0.35)] active:scale-95"
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
            className="text-[#15120D] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C89A3C]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EAE5D9] bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl">
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
                      ? "text-[#C89A3C] bg-[#FAF6EE] font-semibold"
                      : "text-[#5A5245] hover:bg-[#FAF8F5] hover:text-[#15120D]"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#EAE5D9] flex flex-col gap-2.5">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center text-sm font-semibold bg-[#C89A3C] text-white py-2.5 rounded-full shadow-md"
            >
              Direct Inquiries &rarr;
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
