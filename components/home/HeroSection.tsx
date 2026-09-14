"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Fuel,
  Clock,
  Sparkles,
  MapPin,
  ChevronRight,
  Award,
} from "lucide-react";
import { FlameIcon } from "@/components/ui/FlameIcon";
import { ParcoBadge, PsoBadge } from "@/components/ui/BrandBadges";
import { AnimatedPumpDispenser } from "@/components/home/AnimatedPumpDispenser";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#030914] text-white">
      {/* 1. Ambient Lighting & Luxury Energy Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Glowing Top Central Warm Gold Light */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1100px] h-[450px] bg-gradient-to-b from-[#F3C351]/15 via-[#F3C351]/5 to-transparent blur-3xl rounded-full" />
        
        {/* Subtle PARCO Red Glow on Left */}
        <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-gradient-to-r from-red-600/10 via-transparent to-transparent blur-3xl rounded-full" />

        {/* Subtle PSO Emerald Glow on Right */}
        <div className="absolute top-1/3 -right-48 w-[500px] h-[500px] bg-gradient-to-l from-emerald-600/10 via-transparent to-transparent blur-3xl rounded-full" />

        {/* Fine Architectural Grid Texture */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Ambient Top Vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#030914]/40 to-[#030914]/90" />
      </div>

      {/* 2. Main Hero Content (2-Column Grid with Animated Pump Dispenser) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Editorial Text & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-left"
          >
            {/* Top Gold Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <FlameIcon size={14} className="text-[#F3C351] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#F3C351] uppercase">
                PUNJAB FORECOURT NETWORK &bull; ESTABLISHED INTEGRITY
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-[50px] lg:text-[54px] leading-[1.12] tracking-tight font-normal text-white max-w-2xl">
              Two iconic forecourts.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE5A3] via-[#F3C351] to-[#D4A138]">
                One uncompromising standard
              </span>
              <br />
              of fuel integrity.
            </h1>

            {/* Supporting Description */}
            <p className="text-xs sm:text-sm md:text-base text-neutral-300 font-normal leading-relaxed max-w-xl">
              Mashal Petroleum operates official Total PARCO (Rahim Yar Khan) and Pakistan State Oil (Raiwind Lahore) forecourts. Dedicated to 100% refinery-sealed fuels, certified digital measurement, and dignified highway hospitality.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="#stations"
                className="group inline-flex items-center justify-center gap-2 bg-[#F3C351] hover:bg-[#E5B53F] text-[#030914] text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-[0_4px_20px_rgba(243,195,81,0.25)] hover:shadow-[0_6px_25px_rgba(243,195,81,0.35)] active:scale-95 cursor-pointer"
              >
                <span>Explore Forecourt Network</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full border border-white/15 hover:border-white/30 transition-all backdrop-blur-md active:scale-95 cursor-pointer"
              >
                <span>Services &amp; Forecourt Care</span>
                <ChevronRight size={14} className="text-neutral-400 group-hover:text-white transition-colors" />
              </Link>
            </div>

            {/* Trust Metrics Strip */}
            <div className="pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#F3C351]">
                  <ShieldCheck size={16} />
                  <span className="text-xs font-semibold text-white">Volumetric Check</span>
                </div>
                <p className="text-[11px] text-neutral-400">Physical measure on request</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#F3C351]">
                  <Fuel size={16} />
                  <span className="text-xs font-semibold text-white">Direct Sourcing</span>
                </div>
                <p className="text-[11px] text-neutral-400">Refinery-sealed Euro 5</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#F3C351]">
                  <Clock size={16} />
                  <span className="text-xs font-semibold text-white">Open 24/7</span>
                </div>
                <p className="text-[11px] text-neutral-400">365 continuous days</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#F3C351]">
                  <Sparkles size={16} />
                  <span className="text-xs font-semibold text-white">Rest &amp; Mart</span>
                </div>
                <p className="text-[11px] text-neutral-400">M-Mart &amp; Shop Stop</p>
              </div>
            </div>
          </motion.div>

          {/* Right Custom Animated Petrol Pump Dispenser (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <AnimatedPumpDispenser />
          </motion.div>
        </div>
      </div>

      {/* 3. Bottom Curved Wave Transition with Premium Gold Accent Ribbon */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-7 sm:h-9 lg:h-11"
          preserveAspectRatio="none"
        >
          {/* Gold Accent Curved Ribbon */}
          <path
            d="M0,35 C320,65 540,8 880,38 C1180,65 1340,15 1440,28"
            stroke="url(#heroGoldGrad)"
            strokeWidth="2.5"
            fill="none"
          />
          {/* Ivory Bottom Section Fill */}
          <path
            d="M0,35 C320,65 540,8 880,38 C1180,65 1340,15 1440,28 L1440,70 L0,70 Z"
            fill="#FAF8F5"
          />
          <defs>
            <linearGradient id="heroGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C89A3C" stopOpacity="0.3" />
              <stop offset="20%" stopColor="#F3C351" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#FFE194" stopOpacity="1" />
              <stop offset="100%" stopColor="#D4A138" stopOpacity="0.85" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

