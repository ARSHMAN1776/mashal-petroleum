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
    <section className="relative overflow-hidden bg-[#FAF9F6] text-[#15120D] border-b border-[#EAE5D9]">
      {/* 1. Ambient Lighting & Luxury Energy Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Glowing Top Central Warm Gold Light */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1100px] h-[450px] bg-gradient-to-b from-[#C89A3C]/10 via-[#F4EFE4]/50 to-transparent blur-3xl rounded-full" />
        
        {/* Subtle PARCO Red Glow on Left */}
        <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-gradient-to-r from-red-500/5 via-transparent to-transparent blur-3xl rounded-full" />

        {/* Subtle PSO Emerald Glow on Right */}
        <div className="absolute top-1/3 -right-48 w-[500px] h-[500px] bg-gradient-to-l from-emerald-500/5 via-transparent to-transparent blur-3xl rounded-full" />

        {/* Fine Architectural Grid Texture */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(to right, #C89A3C 1px, transparent 1px), linear-gradient(to bottom, #C89A3C 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* 2. Main Hero Content (2-Column Grid with Animated Pump Dispenser) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Editorial Text & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-left"
          >
            {/* Top Gold Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF6EE] border border-[#E6DEC8] shadow-xs">
              <FlameIcon size={14} className="text-[#C89A3C] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#8C7238] uppercase">
                PUNJAB FORECOURT NETWORK &bull; ESTABLISHED INTEGRITY
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-[50px] lg:text-[54px] leading-[1.12] tracking-tight font-normal text-[#15120D] max-w-2xl">
              Two iconic forecourts.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9E7324] via-[#C89A3C] to-[#8C7238]">
                One uncompromising standard
              </span>
              <br />
              of fuel integrity.
            </h1>

            {/* Supporting Description */}
            <p className="text-xs sm:text-sm md:text-base text-[#524C42] font-normal leading-relaxed max-w-xl">
              Mashaal Petroleum operates official Total PARCO (Rahim Yar Khan) and Pakistan State Oil (Raiwind Lahore) forecourts. Dedicated to 100% refinery-sealed fuels, certified digital measurement, and dignified highway hospitality.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="#stations"
                className="group inline-flex items-center justify-center gap-2 bg-[#C89A3C] hover:bg-[#B68B34] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-[0_4px_20px_rgba(200,154,60,0.22)] hover:shadow-[0_6px_25px_rgba(200,154,60,0.32)] active:scale-95 cursor-pointer"
              >
                <span>Explore Forecourt Network</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF6EE] text-[#15120D] text-xs sm:text-sm font-medium px-6 py-3 rounded-full border border-[#E2DBD0] hover:border-[#C89A3C]/40 transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                <span>Services &amp; Forecourt Care</span>
                <ChevronRight size={14} className="text-[#7A7265] group-hover:text-[#15120D] transition-colors" />
              </Link>
            </div>

            {/* Trust Metrics Strip */}
            <div className="pt-6 sm:pt-8 border-t border-[#EAE5D9] grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#C89A3C]">
                  <ShieldCheck size={16} />
                  <span className="text-xs font-semibold text-[#15120D]">Volumetric Check</span>
                </div>
                <p className="text-[11px] text-[#7A7265]">Physical measure on request</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#C89A3C]">
                  <Fuel size={16} />
                  <span className="text-xs font-semibold text-[#15120D]">Direct Sourcing</span>
                </div>
                <p className="text-[11px] text-[#7A7265]">Refinery-sealed Euro 5</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#C89A3C]">
                  <Clock size={16} />
                  <span className="text-xs font-semibold text-[#15120D]">Open 24/7</span>
                </div>
                <p className="text-[11px] text-[#7A7265]">365 continuous days</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#C89A3C]">
                  <Sparkles size={16} />
                  <span className="text-xs font-semibold text-[#15120D]">Rest &amp; Mart</span>
                </div>
                <p className="text-[11px] text-[#7A7265]">M-Mart &amp; Shop Stop</p>
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
    </section>
  );
};

