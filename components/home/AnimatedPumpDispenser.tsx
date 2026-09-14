"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Fuel,
  ShieldCheck,
  Zap,
  Gauge,
  Sparkles,
  Droplet,
  CheckCircle2,
  Flame,
} from "lucide-react";
import { FlameIcon } from "@/components/ui/FlameIcon";

const fuelGrades = [
  {
    id: "hioctane",
    name: "Hi-Octane 97",
    tag: "RON 97 Performance",
    color: "#F3C351",
    glow: "rgba(243, 195, 81, 0.35)",
    bg: "rgba(243, 195, 81, 0.1)",
    border: "rgba(243, 195, 81, 0.4)",
    rate: "High Compression",
    density: "0.745 kg/L",
  },
  {
    id: "diesel",
    name: "Euro-5 Diesel",
    tag: "Low-Sulfur Cetane",
    color: "#4ADE80",
    glow: "rgba(74, 222, 128, 0.35)",
    bg: "rgba(74, 222, 128, 0.1)",
    border: "rgba(74, 222, 128, 0.4)",
    rate: "High-Torque Flow",
    density: "0.835 kg/L",
  },
  {
    id: "super",
    name: "Super Unleaded",
    tag: "RON 92 Pure",
    color: "#FF6B6B",
    glow: "rgba(255, 107, 107, 0.35)",
    bg: "rgba(255, 107, 107, 0.1)",
    border: "rgba(255, 107, 107, 0.4)",
    rate: "Everyday Drive",
    density: "0.730 kg/L",
  },
];

export const AnimatedPumpDispenser: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState(fuelGrades[0]);
  const [liters, setLiters] = useState(42.65);
  const [flowPercent, setFlowPercent] = useState(78);
  const [isDispensing, setIsDispensing] = useState(true);

  // Smooth realistic volume ticker simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiters((prev) => {
        if (prev >= 65.0) return 12.4;
        return Number((prev + 0.08).toFixed(2));
      });
      setFlowPercent((prev) => {
        const noise = Math.sin(Date.now() / 400) * 12;
        return Math.min(95, Math.max(65, Math.round(80 + noise)));
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto select-none">
      {/* Ambient Outer Glow */}
      <div
        className="absolute -inset-2 rounded-[32px] blur-2xl transition-all duration-700 opacity-60 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${selectedGrade.glow} 0%, transparent 70%)`,
        }}
      />

      {/* Main Luxury Dispenser Body */}
      <div className="relative bg-[#050D19]/95 border border-white/15 rounded-[28px] p-5 sm:p-6 shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Top Metallic Energy Strip */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${selectedGrade.color}, transparent)`,
          }}
        />

        {/* 1. Dispenser Header: Brand & Live Station Status */}
        <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#F3C351] shadow-inner">
              <FlameIcon size={14} />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-white tracking-tight block">
                Digital Calibrated Dispenser
              </span>
              <span className="text-[9px] text-neutral-400 block -mt-0.5">
                Mashal Forecourt Telemetry &bull; Unit 02
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Active Flow</span>
          </div>
        </div>

        {/* 2. Fuel Grade Selector Tabs */}
        <div className="pt-3 pb-4">
          <div className="text-[9px] font-semibold text-neutral-400 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Select Product Stream</span>
            <span className="text-[#F3C351] text-[10px]">Refinery Direct</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 p-1 bg-black/40 rounded-xl border border-white/10">
            {fuelGrades.map((grade) => {
              const isSelected = selectedGrade.id === grade.id;
              return (
                <button
                  key={grade.id}
                  type="button"
                  onClick={() => setSelectedGrade(grade)}
                  className={`py-2 px-2 rounded-lg text-center transition-all relative ${
                    isSelected
                      ? "bg-white/10 shadow-sm border border-white/20"
                      : "hover:bg-white/5 text-neutral-400"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeGradeHighlight"
                      className="absolute inset-0 rounded-lg -z-10"
                      style={{ backgroundColor: grade.bg }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span
                    className="text-[11px] font-bold block truncate"
                    style={{ color: isSelected ? grade.color : "#FFFFFF" }}
                  >
                    {grade.name}
                  </span>
                  <span className="text-[9px] text-neutral-400 block truncate mt-0.5">
                    {grade.tag.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Glowing Digital Ticker Glass Display */}
        <div className="bg-[#02060E] border border-white/10 rounded-2xl p-4 sm:p-5 relative overflow-hidden shadow-inner space-y-3">
          {/* Subtle Digital Scanline Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 4px)",
            }}
          />

          {/* Meter Label & Calibration Badge */}
          <div className="flex items-center justify-between text-[10px] text-neutral-400 relative z-10">
            <span className="uppercase tracking-widest font-mono flex items-center gap-1.5">
              <Gauge size={12} style={{ color: selectedGrade.color }} />
              Volume Dispensed
            </span>
            <span
              className="font-mono text-[9px] px-1.5 py-0.5 rounded border"
              style={{
                borderColor: selectedGrade.border,
                color: selectedGrade.color,
                backgroundColor: selectedGrade.bg,
              }}
            >
              100.00% Calibrated
            </span>
          </div>

          {/* Running Volume Digits */}
          <div className="flex items-baseline justify-between relative z-10">
            <div className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-baseline">
              <span className="tabular-nums drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                {liters.toFixed(2)}
              </span>
              <span
                className="text-base sm:text-lg font-sans font-semibold ml-2"
                style={{ color: selectedGrade.color }}
              >
                LITERS
              </span>
            </div>

            {/* Micro Flow indicator */}
            <div className="text-right">
              <span className="text-[10px] text-neutral-400 font-mono block">FLOW RATE</span>
              <span className="font-mono text-xs text-white font-bold tabular-nums">
                {flowPercent} L/min
              </span>
            </div>
          </div>

          {/* Animated Flow Meter Wave / Bar */}
          <div className="relative pt-1 z-10">
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden p-[1px] relative">
              <motion.div
                className="h-full rounded-full relative"
                style={{
                  width: `${flowPercent}%`,
                  backgroundColor: selectedGrade.color,
                  boxShadow: `0 0 10px ${selectedGrade.color}`,
                }}
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>

        {/* 4. Animated Flow Stream & Calibration Pipeline */}
        <div className="pt-4 space-y-3">
          {/* Animated Liquid Particle Pipeline SVG */}
          <div className="relative h-11 bg-white/[0.03] border border-white/10 rounded-xl px-3 flex items-center justify-between overflow-hidden">
            {/* Animated Light Stream Particles */}
            <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
              <motion.div
                className="w-20 h-1.5 rounded-full blur-xs opacity-75"
                style={{ backgroundColor: selectedGrade.color }}
                animate={{
                  x: ["-50px", "420px"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  ease: "linear",
                }}
              />
              <motion.div
                className="w-12 h-1.5 rounded-full blur-xs opacity-60 ml-12"
                style={{ backgroundColor: selectedGrade.color }}
                animate={{
                  x: ["-50px", "420px"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  delay: 0.7,
                  ease: "linear",
                }}
              />
            </div>

            {/* Pipeline Step 1: Refinery Sealed */}
            <div className="flex items-center gap-1.5 relative z-10">
              <ShieldCheck size={14} style={{ color: selectedGrade.color }} />
              <span className="text-[10px] font-semibold text-white">Refinery Sealed</span>
            </div>

            {/* Arrow Wave */}
            <div className="text-[10px] text-neutral-500 font-mono tracking-widest relative z-10">
              &bull; &bull; &bull; &rarr;
            </div>

            {/* Pipeline Step 2: Digital Calibrated */}
            <div className="flex items-center gap-1.5 relative z-10">
              <Zap size={13} className="text-[#F3C351]" />
              <span className="text-[10px] font-semibold text-white">Zero Tolerance</span>
            </div>

            {/* Arrow Wave */}
            <div className="text-[10px] text-neutral-500 font-mono tracking-widest relative z-10">
              &bull; &bull; &bull; &rarr;
            </div>

            {/* Pipeline Step 3: Pure Combustion */}
            <div className="flex items-center gap-1.5 relative z-10">
              <CheckCircle2 size={13} className="text-emerald-400" />
              <span className="text-[10px] font-semibold text-white">Pure Fuel</span>
            </div>
          </div>

          {/* Bottom Live Forecourt Specs Pill */}
          <div className="flex items-center justify-between text-[10px] text-neutral-300 pt-1">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F3C351]" />
              Density: <strong className="text-white font-mono">{selectedGrade.density}</strong>
            </span>
            <span className="text-neutral-400">
              Grade: <strong className="text-white">{selectedGrade.tag}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
