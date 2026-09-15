"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, Users, CheckCircle2, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

export const TrustSection: React.FC = () => {
  const trustPoints = [
    {
      step: "01",
      icon: ShieldCheck,
      badge: "AUTHENTIC SOURCING",
      title: "Direct Refinery Sourcing & Seal Integrity",
      description:
        "Every fuel drop is sourced straight from state-authorized PARCO and PSO supply terminals under strict seals. We do not blend, dilute, or purchase secondary wholesale stock.",
      metricValue: "100%",
      metricLabel: "Terminal Direct Dispatch",
      metricSub: "Zero Secondary Blending",
      tag: "100% Sealed Supply Chain",
    },
    {
      step: "02",
      icon: Scale,
      badge: "PRECISION CALIBRATION",
      title: "Certified Digital Volume Calibration",
      description:
        "Our multi-product dispensers undergo routine physical calibration tests using certified measures, ensuring that the volume printed on your receipt is exactly what enters your fuel tank.",
      metricValue: "0.0%",
      metricLabel: "Measurement Variance",
      metricSub: "Daily Standard Verification",
      tag: "Certified Accurate Meters",
    },
    {
      step: "03",
      icon: Users,
      badge: "PROFESSIONAL CREW",
      title: "Accountable, Permanent Forecourt Staff",
      description:
        "Our station managers, cashiers, and attendants are permanent members of our team, trained to serve with dignity, honesty, and prompt attention.",
      metricValue: "24/7",
      metricLabel: "Supervised Operation",
      metricSub: "Permanent Management",
      tag: "Dignified Customer Care",
    },
  ];

  return (
    <section className="relative bg-[#FAF8F5] text-[#0A111F] py-16 sm:py-20 lg:py-24 border-b border-neutral-200/70 overflow-hidden">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-100/20 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 mb-1.5">
            <div className="h-[1px] w-8 sm:w-14 bg-gradient-to-r from-transparent via-[#C89A3C]/60 to-[#C89A3C]" />
            <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8C7238]">
              <Award size={13} className="text-[#C89A3C] flex-shrink-0" />
              <span>THE TRUST STANDARD</span>
            </div>
            <div className="h-[1px] w-8 sm:w-14 bg-gradient-to-l from-transparent via-[#C89A3C]/60 to-[#C89A3C]" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-[#0A111F] font-normal tracking-tight leading-[1.14]">
            Why drivers and commercial fleets rely on{" "}
            <span className="text-[#C89A3C] block sm:inline">
              Mashal Petroleum.
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-[15px] text-[#525B6A] max-w-2xl mx-auto leading-relaxed font-normal pt-1.5">
            In an industry where measurement variances and secondary fuel blending are
            frequent concerns, we built our reputation on verifiable consistency.
          </p>
        </div>

        {/* Central Animated Stripe & Alternating Flow Points */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Central Animated Flow Track (Desktop Center, Mobile Left) */}
          <div className="absolute top-0 bottom-0 left-5 sm:left-7 lg:left-1/2 -translate-x-1/2 w-[2px] bg-neutral-200/80 overflow-hidden">
            {/* Running Gold Energy Beam */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#C89A3C] to-transparent shadow-[0_0_10px_#C89A3C]"
              animate={{
                top: ["-20%", "110%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Points List */}
          <div className="space-y-10 sm:space-y-14">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              const isEven = index % 2 === 1;

              return (
                <motion.div
                  key={point.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
                >
                  {/* Left Column */}
                  <div
                    className={`pl-12 sm:pl-16 lg:pl-0 ${isEven
                        ? "lg:col-span-5 lg:order-1 lg:flex lg:justify-end"
                        : "lg:col-span-5 lg:order-1"
                      }`}
                  >
                    {!isEven ? (
                      /* Content Block */
                      <div className="bg-white rounded-[18px] border border-neutral-200/80 p-5 sm:p-6 lg:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)] hover:border-[#C89A3C]/50 transition-all space-y-3 group">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-[#8C7238] uppercase">
                            {point.badge}
                          </span>
                          <span className="font-serif text-xl text-[#C89A3C]/40 font-normal">
                            {point.step}
                          </span>
                        </div>

                        <h3 className="font-serif text-lg sm:text-xl text-[#0A111F] font-normal tracking-tight group-hover:text-[#C89A3C] transition-colors">
                          {point.title}
                        </h3>

                        <p className="text-xs sm:text-[13px] text-[#5A6474] leading-relaxed">
                          {point.description}
                        </p>

                        <div className="pt-1 flex items-center gap-1.5 text-xs font-medium text-[#0A111F]">
                          <CheckCircle2 size={13} className="text-[#C89A3C]" />
                          <span className="text-[11px] sm:text-xs">{point.tag}</span>
                        </div>
                      </div>
                    ) : (
                      /* Metric / Visual Side Card */
                      <div className="w-full lg:max-w-xs bg-white rounded-[18px] border border-neutral-200/80 p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] text-left lg:text-right space-y-1 group hover:border-[#C89A3C]/50 transition-all">
                        <span className="font-serif text-3xl sm:text-4xl text-[#0A111F] font-normal tracking-tight block leading-tight">
                          {point.metricValue}
                        </span>
                        <p className="text-xs sm:text-[13px] font-semibold text-[#0A111F]">
                          {point.metricLabel}
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-[#8C7238] font-medium">
                          {point.metricSub}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center Node / Running Pulse Checkpoint */}
                  <div className="absolute left-5 sm:left-7 lg:left-1/2 -translate-x-1/2 lg:col-span-2 lg:static lg:flex lg:items-center lg:justify-center lg:order-2 z-20">
                    <div className="relative group">
                      {/* Pulse Ring */}
                      <div className="absolute -inset-1.5 rounded-full bg-[#C89A3C]/20 animate-ping opacity-60 pointer-events-none" />

                      {/* Node Circle */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#C89A3C] flex items-center justify-center text-[#C89A3C] shadow-[0_0_15px_rgba(200,154,60,0.25)] transition-transform group-hover:scale-110">
                        <Icon size={18} className="sm:w-5 sm:h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div
                    className={`pl-12 sm:pl-16 lg:pl-0 ${isEven
                        ? "lg:col-span-5 lg:order-3"
                        : "lg:col-span-5 lg:order-3 lg:flex lg:justify-start"
                      }`}
                  >
                    {isEven ? (
                      /* Content Block */
                      <div className="bg-white rounded-[18px] border border-neutral-200/80 p-5 sm:p-6 lg:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)] hover:border-[#C89A3C]/50 transition-all space-y-3 group">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-[#8C7238] uppercase">
                            {point.badge}
                          </span>
                          <span className="font-serif text-xl text-[#C89A3C]/40 font-normal">
                            {point.step}
                          </span>
                        </div>

                        <h3 className="font-serif text-lg sm:text-xl text-[#0A111F] font-normal tracking-tight group-hover:text-[#C89A3C] transition-colors">
                          {point.title}
                        </h3>

                        <p className="text-xs sm:text-[13px] text-[#5A6474] leading-relaxed">
                          {point.description}
                        </p>

                        <div className="pt-1 flex items-center gap-1.5 text-xs font-medium text-[#0A111F]">
                          <CheckCircle2 size={13} className="text-[#C89A3C]" />
                          <span className="text-[11px] sm:text-xs">{point.tag}</span>
                        </div>
                      </div>
                    ) : (
                      /* Metric / Visual Side Card */
                      <div className="w-full lg:max-w-xs bg-white rounded-[18px] border border-neutral-200/80 p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] text-left space-y-1 group hover:border-[#C89A3C]/50 transition-all">
                        <span className="font-serif text-3xl sm:text-4xl text-[#0A111F] font-normal tracking-tight block leading-tight">
                          {point.metricValue}
                        </span>
                        <p className="text-xs sm:text-[13px] font-semibold text-[#0A111F]">
                          {point.metricLabel}
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-[#8C7238] font-medium">
                          {point.metricSub}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-14 sm:mt-18 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold bg-[#C89A3C] hover:bg-[#B68B34] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-[0_4px_16px_rgba(200,154,60,0.25)] hover:shadow-[0_6px_20px_rgba(200,154,60,0.35)] transition-all group active:scale-95"
          >
            <span>Speak with Forecourt Management</span>
            <ArrowRight size={13} className="text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
