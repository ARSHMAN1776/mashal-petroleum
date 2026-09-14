"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Fuel,
  Store,
  Sparkles,
  Users,
  ShieldCheck,
  Scale,
  Truck,
  CreditCard,
  Clock,
  ArrowRight,
  CheckCircle2,
  Car,
  Droplets,
  Award,
  MessageSquare,
  Gauge,
  Navigation,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
import { FlameIcon } from "@/components/ui/FlameIcon";
import { mashalInfo, parcoStation, psoStation } from "@/lib/station-data";

export default function ServicesPage() {
  const serviceCategories = [
    { id: "fuels", label: "Certified Fuels" },
    { id: "convenience", label: "Forecourt Marts" },
    { id: "checks", label: "Air & Radiator Care" },
    { id: "carwash", label: "Car Wash & Lube" },
    { id: "fleet", label: "Fleet Accounts" },
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#0A111F] min-h-screen selection:bg-[#F3C351] selection:text-[#050D19]">
      {/* 1. Apple-Inspired Cinematic Hero Banner */}
      <section className="relative bg-[#030914] text-white py-20 sm:py-28 lg:py-32 overflow-hidden border-b border-white/10">
        {/* Ambient Warm Radial Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#F3C351]/15 via-transparent to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[350px] bg-gradient-to-tl from-emerald-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-[1.5px] w-8 sm:w-14 bg-gradient-to-r from-transparent via-[#F3C351] to-[#F3C351]" />
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#F3C351]">
              <FlameIcon size={14} className="text-[#F3C351] flex-shrink-0" />
              <span>MASHAL PETROLEUM &bull; PROVISIONS</span>
            </div>
            <div className="h-[1.5px] w-8 sm:w-14 bg-gradient-to-l from-transparent via-[#F3C351] to-[#F3C351]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight max-w-4xl mx-auto leading-[1.1]"
          >
            Engineered for fuel integrity.{" "}
            <span className="text-[#F3C351] block sm:inline">
              Built for traveler dignity.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Operating premier Total PARCO (Rahim Yar Khan) and PSO (Raiwind Lahore) forecourts with verifiable calibration, 24/7 hospitality, automated car wash bays, and commercial fleet services.
          </motion.p>

          {/* Quick Anchor Jump Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {serviceCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-xs font-medium text-neutral-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 px-3.5 py-1.5 rounded-full transition-all backdrop-blur-xs active:scale-95"
              >
                {cat.label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Stripe 1: Certified Fuel Dispensing & Measurement (Warm Light Stripe) */}
      <section id="fuels" className="py-20 sm:py-28 lg:py-32 border-b border-neutral-200/80 scroll-mt-16 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#8C7238]">
                <Fuel size={15} className="text-[#C89A3C]" />
                <span>PRIMARY FORECOURT PROVISION</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-[44px] text-[#0A111F] font-normal tracking-tight leading-[1.14]">
                Certified Fuel Dispensing &amp;{" "}
                <span className="text-[#C89A3C]">Digital Accuracy.</span>
              </h2>

              <p className="text-xs sm:text-sm md:text-[15px] text-[#525B6A] leading-relaxed">
                Every drop of fuel at Mashal Petroleum is sourced straight from official state-authorized PARCO and PSO terminals under strict physical tamper seals. We do not blend, dilute, or purchase secondary wholesale stock.
              </p>

              {/* Specific Fuel Grades Strip */}
              <div className="space-y-3 pt-2">
                <div className="bg-[#FAF8F5] border border-neutral-200/80 p-4 rounded-xl space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-base text-[#0A111F] font-normal">
                      RON 92 Unleaded (Super)
                    </h3>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Standard Daily
                    </span>
                  </div>
                  <p className="text-xs text-[#5A6474]">
                    Total PARCO Super and PSO Altron Premium for passenger sedans, commuter bikes, and commercial vans.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] border border-neutral-200/80 p-4 rounded-xl space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-base text-[#0A111F] font-normal">
                      RON 97 High Octane
                    </h3>
                    <span className="text-[10px] font-semibold text-[#8C7238] bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      High Performance
                    </span>
                  </div>
                  <p className="text-xs text-[#5A6474]">
                    PARCO Hi-Octane and PSO Altron X 97. Stocked specifically for turbocharged engines, imported luxury sedans, and SUVs.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] border border-neutral-200/80 p-4 rounded-xl space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-base text-[#0A111F] font-normal">
                      Euro 5 High-Speed Diesel (HSD)
                    </h3>
                    <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      Low Emission
                    </span>
                  </div>
                  <p className="text-xs text-[#5A6474]">
                    Clean low-sulfur diesel with high-flow nozzles on dedicated lanes for heavy transport trucks, buses, and containers.
                  </p>
                </div>
              </div>

              {/* Physical Calibration Guarantee Pill */}
              <div className="pt-2 flex items-center gap-3 bg-[#FAF8F5] border border-[#C89A3C]/40 p-3.5 rounded-xl text-xs text-[#0A111F]">
                <Scale size={18} className="text-[#C89A3C] flex-shrink-0" />
                <p className="leading-tight">
                  <strong className="font-semibold text-[#0A111F]">Physical Calibration Measure:</strong> Shift supervisors will dispense a certified 5L or 10L volumetric test measure on request before fueling.
                </p>
              </div>
            </motion.div>

            {/* Right Visual Image & Interactive Metric */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative aspect-[4/3] w-full rounded-[22px] overflow-hidden shadow-2xl border border-neutral-200/80 group">
                <Image
                  src="/images/parco/parco-day-fueling.jpg"
                  alt="Active fuel dispensing at Mashal Total PARCO station on Khanpur Road"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Metric Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C89A3C]/10 border border-[#C89A3C]/40 flex items-center justify-center text-[#C89A3C]">
                      <Award size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#0A111F]">Certified Volumetric Calibration</p>
                      <p className="text-[11px] text-[#5A6474]">100% Refinery-Direct Supply Chain</p>
                    </div>
                  </div>
                  <span className="font-serif text-xl font-normal text-[#0A111F] tabular-nums">0.0%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Stripe 2: Forecourt Convenience (Deep Midnight Navy Luxury Stripe) */}
      <section id="convenience" className="py-20 sm:py-28 lg:py-32 border-b border-white/10 scroll-mt-16 relative overflow-hidden bg-[#050D19] text-white">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[500px] bg-gradient-to-l from-[#F3C351]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Visual Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 order-2 lg:order-1 relative"
            >
              <div className="relative aspect-[4/3] w-full rounded-[22px] overflow-hidden shadow-2xl border border-white/15 group">
                <Image
                  src="/images/parco/parco-mart.jpg"
                  alt="Mashal Petroleum Welcome 24/7 convenience mart with cold drinks, snacks, and travel goods"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Floating Store Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-[#030914]/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F3C351]/15 border border-[#F3C351]/50 flex items-center justify-center text-[#F3C351]">
                      <Store size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">M-Mart &bull; Shop Stop Express</p>
                      <p className="text-[11px] text-neutral-400">Open 24 Hours &bull; 365 Days a Year</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#F3C351] bg-white/5 border border-[#F3C351]/30 px-2.5 py-1 rounded-full">
                    24/7 Open
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 order-1 lg:order-2 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#F3C351]">
                <Store size={15} className="text-[#F3C351]" />
                <span>HIGHWAY REFRESHMENT &amp; ESSENTIALS</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-[44px] text-white font-normal tracking-tight leading-[1.14]">
                Forecourt Convenience &amp;{" "}
                <span className="text-[#F3C351]">Traveler Rest.</span>
              </h2>

              <p className="text-xs sm:text-sm md:text-[15px] text-neutral-300 leading-relaxed font-normal">
                Whether you are on an inter-district commute across Punjab or on a regional freight haul, our on-site convenience marts offer a secure, well-illuminated pause in your journey.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-1.5 backdrop-blur-xs">
                  <div className="flex items-center gap-2 text-[#F3C351]">
                    <Sparkles size={16} />
                    <h3 className="font-semibold text-xs sm:text-sm text-white">Hot Karak Chai &amp; Drinks</h3>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Fresh hot tea, espresso, chilled juices, energy drinks, and packaged travel snacks.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-1.5 backdrop-blur-xs">
                  <div className="flex items-center gap-2 text-[#F3C351]">
                    <Droplets size={16} />
                    <h3 className="font-semibold text-xs sm:text-sm text-white">Engine Lubricants</h3>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Official manufacturer oils: Total Quartz, Rubia, PSO Carient, and Castrol formulations.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-1.5 backdrop-blur-xs">
                  <div className="flex items-center gap-2 text-[#F3C351]">
                    <Clock size={16} />
                    <h3 className="font-semibold text-xs sm:text-sm text-white">24/7 Continuous Service</h3>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Manned cashier desks, illuminated store bays, and cash/card checkout around the clock.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-1.5 backdrop-blur-xs">
                  <div className="flex items-center gap-2 text-[#F3C351]">
                    <Smartphone size={16} />
                    <h3 className="font-semibold text-xs sm:text-sm text-white">Travel Goods &amp; ATM</h3>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Mobile accessories, charging cords, emergency vehicle fuses, and on-site 24/7 ATM.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Stripe 3: Digital Air & Radiator Water (Warm Ivory Stripe) */}
      <section id="checks" className="py-20 sm:py-28 lg:py-32 border-b border-neutral-200/80 scroll-mt-16 relative overflow-hidden bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#8C7238]">
                <Droplets size={15} className="text-[#C89A3C]" />
                <span>COMPLIMENTARY FORECOURT CARE</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-[44px] text-[#0A111F] font-normal tracking-tight leading-[1.14]">
                Digital Air Inflation &amp;{" "}
                <span className="text-[#C89A3C]">Radiator Water Care.</span>
              </h2>

              <p className="text-xs sm:text-sm md:text-[15px] text-[#525B6A] leading-relaxed">
                Trained forecourt attendants provide complimentary digital tire pressure checks, calibrated air inflation, and radiator water fill points to maintain your vehicle&apos;s safety and cooling performance.
              </p>

              <div className="space-y-4 pt-1">
                <div className="bg-white border border-neutral-200/80 p-5 rounded-xl space-y-2 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#C89A3C]/10 border border-[#C89A3C]/40 flex items-center justify-center text-[#C89A3C] flex-shrink-0">
                      <Gauge size={15} />
                    </div>
                    <h3 className="font-serif text-lg text-[#0A111F] font-normal">
                      Precision Digital Tire Pressure Gauges
                    </h3>
                  </div>
                  <p className="text-xs text-[#5A6474] leading-relaxed pl-10">
                    Accurate digital pressure calibration counter for passenger sedans, motorcycles, commercial vans, and heavy transport vehicles at no extra charge.
                  </p>
                </div>

                <div className="bg-white border border-neutral-200/80 p-5 rounded-xl space-y-2 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#C89A3C]/10 border border-[#C89A3C]/40 flex items-center justify-center text-[#C89A3C] flex-shrink-0">
                      <Droplets size={15} />
                    </div>
                    <h3 className="font-serif text-lg text-[#0A111F] font-normal">
                      Radiator Coolant &amp; Clean Water Top-Up
                    </h3>
                  </div>
                  <p className="text-xs text-[#5A6474] leading-relaxed pl-10">
                    Dedicated clean water fill points manned by trained attendants to replenish cooling systems and prevent engine overheating during highway drives.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-medium text-[#0A111F]">
                <CheckCircle2 size={16} className="text-[#C89A3C]" />
                <span>Complimentary service manned by trained attendants around the clock.</span>
              </div>
            </motion.div>

            {/* Right Visual Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative aspect-[4/3] w-full rounded-[22px] overflow-hidden shadow-2xl border border-neutral-200/80 group">
                <Image
                  src="/images/pso/pso-hero-night.jpg"
                  alt="Illuminated forecourt care and vehicle service area at Mashal PSO Raiwind"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Amenity Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#0A111F]">Digital Air &amp; Radiator Water Counter</p>
                    <p className="text-[11px] text-[#5A6474]">Serviced by Trained Forecourt Staff</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    100% Free Service
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Stripe 4: Automated Car Wash & Quick Lube Bay (Deep Midnight Navy Stripe) */}
      <section id="carwash" className="py-20 sm:py-28 lg:py-32 border-b border-white/10 scroll-mt-16 relative overflow-hidden bg-[#030914] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Visual Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 order-2 lg:order-1 relative"
            >
              <div className="relative aspect-[4/3] w-full rounded-[22px] overflow-hidden shadow-2xl border border-white/15 group">
                <Image
                  src="/images/parco/parco-carwash.jpg"
                  alt="Automated car wash facility and QUARTZ service bay at Mashal Total PARCO Rahim Yar Khan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Floating Service Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-[#050D19]/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-parco-red/20 border border-parco-red/50 flex items-center justify-center text-parco-red">
                      <Car size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">QUARTZ Service Bay &bull; Car Wash</p>
                      <p className="text-[11px] text-neutral-400">High-Pressure Wash &amp; Genuine Oils</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#F3C351] bg-white/5 border border-[#F3C351]/30 px-2.5 py-1 rounded-full">
                    Solar Powered
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 order-1 lg:order-2 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#FF858A]">
                <Car size={15} className="text-[#FF858A]" />
                <span>AUTOMOTIVE CARE &amp; SERVICE BAY</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-[44px] text-white font-normal tracking-tight leading-[1.14]">
                Automatic High-Pressure Wash &amp;{" "}
                <span className="text-[#FF858A]">Lube Bay.</span>
              </h2>

              <p className="text-xs sm:text-sm md:text-[15px] text-neutral-300 leading-relaxed font-normal">
                Equipped with modern vehicle cleaning gantries and certified lubricant technicians to keep passenger cars, commercial pickups, and fleet vehicles in peak operating condition.
              </p>

              <div className="space-y-3 pt-1">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-1 backdrop-blur-xs">
                  <h3 className="font-semibold text-xs sm:text-sm text-white">
                    High-Pressure Automatic Body &amp; Underbody Wash
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Removes road grime, salt, and dust with touchless high-pressure water jets and safe vehicle shampoos.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-1 backdrop-blur-xs">
                  <h3 className="font-semibold text-xs sm:text-sm text-white">
                    Authorized Oil Change &amp; Filter Inspection
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Complete drain and fill using genuine factory-sealed Total Quartz, Rubia, and PSO synthetic motor oils.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-1 backdrop-blur-xs">
                  <h3 className="font-semibold text-xs sm:text-sm text-white">
                    Complimentary Digital Air &amp; Radiator Water
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Trained forecourt attendants check cold tire pressures and replenish coolant reservoirs free of charge.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Stripe 5: Commercial Transport & Fleet Accounts (Clean White Stripe) */}
      <section id="fleet" className="py-20 sm:py-28 lg:py-32 border-b border-neutral-200/80 scroll-mt-16 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#8C7238]">
                <Truck size={15} className="text-[#C89A3C]" />
                <span>COMMERCIAL LOGISTICS &amp; TRANSIT</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-[44px] text-[#0A111F] font-normal tracking-tight leading-[1.14]">
                Commercial Fleet Fueling &amp;{" "}
                <span className="text-[#C89A3C]">Corporate Accounts.</span>
              </h2>

              <p className="text-xs sm:text-sm md:text-[15px] text-[#525B6A] leading-relaxed">
                We provide tailored volume contracts and high-flow diesel dispensing for logistics fleets, passenger bus lines, agricultural contractors, and industrial transporters.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 bg-[#FAF8F5] border border-neutral-200/80 p-4 rounded-xl">
                  <Truck size={18} className="text-[#C89A3C] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-[#0A111F]">High-Clearance Heavy Bays</h3>
                    <p className="text-xs text-[#5A6474] mt-0.5">Wide turning radii designed for 22-wheelers, container carriers, and agricultural machinery.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#FAF8F5] border border-neutral-200/80 p-4 rounded-xl">
                  <CreditCard size={18} className="text-[#C89A3C] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-[#0A111F]">PSO Fleet Card Integration</h3>
                    <p className="text-xs text-[#5A6474] mt-0.5">Cashless digital tracking, vehicle-specific limit controls, and monthly consolidated tax statements.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#FAF8F5] border border-neutral-200/80 p-4 rounded-xl">
                  <Scale size={18} className="text-[#C89A3C] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-[#0A111F]">Structured Volume Ledgers</h3>
                    <p className="text-xs text-[#5A6474] mt-0.5">Direct commercial contracts with transparent billing and prompt priority refueling.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-[#050D19] hover:bg-[#0A172D] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-white/10 shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  <span>Inquire About Fleet Fueling Terms</span>
                  <ArrowRight size={14} className="text-[#F3C351]" />
                </Link>
              </div>
            </motion.div>

            {/* Right Visual Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative aspect-[4/3] w-full rounded-[22px] overflow-hidden shadow-2xl border border-neutral-200/80 group">
                <Image
                  src="/images/pso/pso-day-forecourt.jpg"
                  alt="High-clearance commercial forecourt at Mashal PSO Station Raiwind"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Fleet Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#0A111F]">Corporate Transport Hub</p>
                    <p className="text-[11px] text-[#5A6474]">Dedicated High-Flow Diesel Islands</p>
                  </div>
                  <span className="text-xs font-semibold text-[#0B4A2D] bg-[#E8F3ED] px-3 py-1 rounded-full border border-emerald-200">
                    Fleet Card Ready
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Bottom Direct Inquiries Banner */}
      <section className="bg-[#030914] text-white py-16 sm:py-20 relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal tracking-tight max-w-2xl mx-auto">
            Experience the standard of{" "}
            <span className="text-[#F3C351]">Mashal Petroleum.</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Visit our Total PARCO station in Rahim Yar Khan or our PSO hub in Raiwind, Lahore. For bulk transport accounts or direct inquiries, contact our forecourt management.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F3C351] hover:bg-[#E5B53F] text-[#050D19] text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-md active:scale-95"
            >
              <span>Reach Direct Contact Desk</span>
              <ArrowRight size={14} />
            </Link>

            <Link
              href="/#stations"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full border border-white/20 transition-all backdrop-blur-xs active:scale-95"
            >
              <span>Explore Forecourt Locations</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
