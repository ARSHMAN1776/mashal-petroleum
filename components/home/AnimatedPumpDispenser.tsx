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
    color: "#C89A3C",
    glow: "rgba(200, 154, 60, 0.25)",
    bg: "rgba(200, 154, 60, 0.08)",
    border: "rgba(200, 154, 60, 0.4)",
    rate: "High Compression",
    density: "0.745 kg/L",
  },
  {
    id: "diesel",
    name: "Euro-5 Diesel",
    tag: "Low-Sulfur Cetane",
    color: "#0B4A2D",
    glow: "rgba(11, 74, 45, 0.2)",
    bg: "rgba(11, 74, 45, 0.08)",
    border: "rgba(11, 74, 45, 0.35)",
    rate: "High-Torque Flow",
    density: "0.835 kg/L",
  },
  {
    id: "super",
    name: "Super Unleaded",
    tag: "RON 92 Pure",
    color: "#C1272D",
    glow: "rgba(193, 39, 45, 0.2)",
    bg: "rgba(193, 39, 45, 0.08)",
    border: "rgba(193, 39, 45, 0.35)",
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
        className="absolute -inset-2 rounded-[32px] blur-2xl transition-all duration-700 opacity-70 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${selectedGrade.glow} 0%, transparent 70%)`,
        }}
      />

      {/* Main Luxury Dispenser Body */}
      <div className="relative bg-white border border-[#E6DEC8] rounded-[28px] p-5 sm:p-6 shadow-[0_20px_50px_rgba(200,154,60,0.08)] backdrop-blur-xl overflow-hidden">
        {/* Top Metallic Energy Strip */}
        <div
          className="absolute top-0 left-0 right-0 h-[2.5px] transition-all duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${selectedGrade.color}, transparent)`,
          }}
        />

        {/* 1. Dispenser Header: Brand & Live Station Status */}
        <div className="flex items-center justify-between pb-3.5 border-b border-[#EAE5D9]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#FAF6EE] border border-[#E6DEC8] flex items-center justify-center text-[#C89A3C] shadow-xs">
              <FlameIcon size={14} />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-[#15120D] tracking-tight block">
                Digital Calibrated Dispenser
              </span>
              <span className="text-[9px] text-[#7A7265] block -mt-0.5">
                Mashal Forecourt Telemetry &bull; Unit 02
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>Active Flow</span>
          </div>
        </div>

        {/* 2. Fuel Grade Selector Tabs */}
        <div className="pt-3 pb-4">
          <div className="text-[9px] font-semibold text-[#7A7265] uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Select Product Stream</span>
            <span className="text-[#8C7238] font-medium text-[10px]">Refinery Direct</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#FAF8F5] rounded-xl border border-[#E6DEC8]">
            {fuelGrades.map((grade) => {
              const isSelected = selectedGrade.id === grade.id;
              return (
                <button
                  key={grade.id}
                  type="button"
                  onClick={() => setSelectedGrade(grade)}
                  className={`py-2 px-2 rounded-lg text-center transition-all relative ${
                    isSelected
                      ? "bg-white shadow-sm border border-[#E2DBD0]"
                      : "hover:bg-white/60 text-[#7A7265]"
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
                    style={{ color: isSelected ? grade.color : "#15120D" }}
                  >
                    {grade.name}
                  </span>
                  <span className="text-[9px] text-[#7A7265] block truncate mt-0.5">
                    {grade.tag.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Glowing Digital Ticker Glass Display */}
        <div className="bg-[#FAF8F3] border border-[#E2DBD0] rounded-2xl p-4 sm:p-5 relative overflow-hidden shadow-inner space-y-3">
          {/* Subtle Digital Scanline Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, #000, #000 1px, transparent 1px, transparent 4px)",
            }}
          />

          {/* Meter Label & Calibration Badge */}
          <div className="flex items-center justify-between text-[10px] text-[#7A7265] relative z-10">
            <span className="uppercase tracking-widest font-mono flex items-center gap-1.5 font-medium">
              <Gauge size={12} style={{ color: selectedGrade.color }} />
              Volume Dispensed
            </span>
            <span
              className="font-mono text-[9px] px-1.5 py-0.5 rounded border font-semibold"
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
            <div className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-[#15120D] flex items-baseline">
              <span className="tabular-nums">
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
              <span className="text-[10px] text-[#7A7265] font-mono block">FLOW RATE</span>
              <span className="font-mono text-xs text-[#15120D] font-bold tabular-nums">
                {flowPercent} L/min
              </span>
            </div>
          </div>

          {/* Animated Flow Meter Wave / Bar */}
          <div className="relative pt-1 z-10">
            <div className="w-full bg-[#EAE5D9] h-2 rounded-full overflow-hidden p-[1px] relative">
              <motion.div
                className="h-full rounded-full relative"
                style={{
                  width: `${flowPercent}%`,
                  backgroundColor: selectedGrade.color,
                  boxShadow: `0 0 8px ${selectedGrade.color}`,
                }}
                animate={{
                  opacity: [0.85, 1, 0.85],
                }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>

        {/* 4. Animated Flow Stream & Calibration Pipeline */}
        <div className="pt-4 space-y-3">
          {/* Animated Liquid Particle Pipeline SVG */}
          <div className="relative h-11 bg-[#FAF8F5] border border-[#E6DEC8] rounded-xl px-3 flex items-center justify-between overflow-hidden">
            {/* Animated Light Stream Particles */}
            <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
              <motion.div
                className="w-20 h-1.5 rounded-full blur-xs opacity-60"
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
                className="w-12 h-1.5 rounded-full blur-xs opacity-40 ml-12"
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
              <span className="text-[10px] font-semibold text-[#15120D]">Refinery Sealed</span>
            </div>

            {/* Arrow Wave */}
            <div className="text-[10px] text-[#A89F91] font-mono tracking-widest relative z-10">
              &bull; &bull; &bull; &rarr;
            </div>

            {/* Pipeline Step 2: Digital Calibrated */}
            <div className="flex items-center gap-1.5 relative z-10">
              <Zap size={13} className="text-[#C89A3C]" />
              <span className="text-[10px] font-semibold text-[#15120D]">Zero Tolerance</span>
            </div>

            {/* Arrow Wave */}
            <div className="text-[10px] text-[#A89F91] font-mono tracking-widest relative z-10">
              &bull; &bull; &bull; &rarr;
            </div>

            {/* Pipeline Step 3: Pure Combustion */}
            <div className="flex items-center gap-1.5 relative z-10">
              <CheckCircle2 size={13} className="text-emerald-600" />
              <span className="text-[10px] font-semibold text-[#15120D]">Pure Fuel</span>
            </div>
          </div>

          {/* Bottom Live Forecourt Specs Pill */}
          <div className="flex items-center justify-between text-[10px] text-[#5A5245] pt-1">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C89A3C]" />
              Density: <strong className="text-[#15120D] font-mono">{selectedGrade.density}</strong>
            </span>
            <span className="text-[#7A7265]">
              Grade: <strong className="text-[#15120D]">{selectedGrade.tag}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
