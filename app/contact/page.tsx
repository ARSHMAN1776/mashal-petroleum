"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";
import { parcoStation, psoStation, mashalInfo } from "@/lib/station-data";
import {
  MapPin,
  Phone,
  Clock,
  MessageSquare,
  Navigation,
  Mail,
  Building2,
  ShieldCheck,
  Fuel,
  ChevronDown,
  Sparkles,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { FlameIcon } from "@/components/ui/FlameIcon";
import { ParcoBadge, PsoBadge } from "@/components/ui/BrandBadges";

const contactFaqs = [
  {
    q: "Can I request a physical volumetric calibration test before fueling?",
    a: "Absolutely. At both our Total PARCO (Rahim Yar Khan) and PSO (Raiwind Lahore) stations, standard certified 5-liter and 10-liter calibration measures are maintained on-site. Any motorist or fleet driver can request a forecourt supervisor to conduct a transparent physical measurement check at zero cost before filling.",
  },
  {
    q: "How can commercial logistics fleets or agricultural operations arrange bulk diesel supply?",
    a: "We provide dedicated commercial high-flow diesel dispensing, scheduled night filling windows, and account-based fueling for fleet operators and agricultural machinery. Contact our central management desk directly at 0328 6704501 or via WhatsApp to discuss volume terms and priority dispatch.",
  },
  {
    q: "Are the convenience marts, prayer areas, and washrooms open 24/7?",
    a: "Yes. Both forecourts operate continuously 24 hours a day, 7 days a week, 365 days a year. The M-Mart / Shop Stop convenience stores, air-conditioned prayer sanctuaries, and clean restrooms are staffed and illuminated round the clock.",
  },
  {
    q: "Which payment methods and corporate fleet cards are accepted?",
    a: "We accept all major commercial payment channels including Cash, Debit/Credit cards (Visa/Mastercard), PSO Fleet Cards (at our Raiwind location), Total PARCO Cards (at our Khanpur Road location), and corporate account billing for approved commercial fleets.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#FAF8F5] text-[#0A111F] min-h-screen selection:bg-[#C89A3C] selection:text-white">
      {/* 1. Cinematic Luxury Hero Header */}
      <section className="relative bg-[#FAF9F6] text-[#15120D] py-16 sm:py-24 lg:py-28 overflow-hidden border-b border-[#EAE5D9]">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-[#C89A3C]/10 via-[#F4EFE4]/40 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-gradient-to-tl from-emerald-500/5 via-transparent to-transparent blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-[1.5px] w-8 sm:w-14 bg-gradient-to-r from-transparent via-[#C89A3C] to-[#C89A3C]" />
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#8C7238]">
              <FlameIcon size={14} className="text-[#C89A3C] flex-shrink-0" />
              <span>DIRECT FORECOURT &bull; CORPORATE ACCESS</span>
            </div>
            <div className="h-[1.5px] w-8 sm:w-14 bg-gradient-to-l from-transparent via-[#C89A3C] to-[#C89A3C]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#15120D] font-normal tracking-tight max-w-3xl mx-auto leading-[1.12]"
          >
            Connect with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9E7324] via-[#C89A3C] to-[#8C7238]">
              Mashal Petroleum.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-[#524C42] max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Direct contact with our forecourt supervisors, station managers, and corporate desk across Punjab. Call us 24/7 at{" "}
            <strong className="text-[#15120D] font-semibold tabular-nums">{mashalInfo.centralPhoneDisplay}</strong> or message us via WhatsApp.
          </motion.p>

          {/* Quick Action Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-3 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 text-xs font-medium"
          >
            <a
              href={`tel:${mashalInfo.centralPhone}`}
              className="inline-flex items-center gap-2 bg-[#C89A3C] hover:bg-[#B68B34] text-white font-semibold px-4 py-2.5 rounded-full transition-all shadow-[0_2px_12px_rgba(200,154,60,0.25)] active:scale-95"
            >
              <Phone size={13} className="text-white" />
              <span className="tabular-nums">Call 24/7 ({mashalInfo.centralPhoneDisplay})</span>
            </a>

            <a
              href={`https://wa.me/${parcoStation.whatsapp}?text=Hello%20Mashal%20Petroleum,%20I%20have%20an%20inquiry%20regarding%20Total%20PARCO%20Station%20(Khanpur%20Road,%20Rahim%20Yar%20Khan)`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-neutral-50 border border-neutral-200/90 text-[#15120D] px-3.5 py-2.5 rounded-full transition-all shadow-xs active:scale-95"
            >
              <MessageSquare size={13} className="text-parco-red" />
              <span>WhatsApp PARCO (RYK)</span>
            </a>

            <a
              href={`https://wa.me/${psoStation.whatsapp}?text=Hello%20Mashal%20Petroleum,%20I%20have%20an%20inquiry%20regarding%20PSO%20Station%20(Raiwind,%20Lahore)`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-neutral-50 border border-neutral-200/90 text-[#15120D] px-3.5 py-2.5 rounded-full transition-all shadow-xs active:scale-95"
            >
              <MessageSquare size={13} className="text-pso-green" />
              <span>WhatsApp PSO (Lahore)</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Three Quick-Access Channel Cards */}
      <section className="relative -mt-8 sm:-mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {/* Channel 1: 24/7 Central Hotline */}
          <div className="bg-white border border-neutral-200/90 rounded-[20px] p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between space-y-4 hover:border-[#C89A3C]/80 transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-neutral-200 flex items-center justify-center text-[#8C7238]">
                  <Phone size={18} />
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live 24/7
                </span>
              </div>
              <h3 className="font-serif text-lg font-normal text-[#0A111F]">
                Central Helpdesk & Inquiries
              </h3>
              <p className="text-xs text-[#5A6474] leading-relaxed">
                Direct verbal assistance for fuel stock, current rates, bulk transport, or managerial escalation.
              </p>
            </div>
            <a
              href={`tel:${mashalInfo.centralPhone}`}
              className="inline-flex items-center justify-between text-xs font-semibold text-[#0A111F] bg-[#FAF8F5] hover:bg-[#F3EEDF] p-3 rounded-xl border border-neutral-200/80 transition-all"
            >
              <span className="tabular-nums font-bold text-sm">{mashalInfo.centralPhoneDisplay}</span>
              <span className="text-[#8C7238] flex items-center gap-1 text-[11px]">
                Call Line <ArrowUpRight size={13} />
              </span>
            </a>
          </div>

          {/* Channel 2: Total PARCO (RYK) Desk */}
          <div className="bg-white border border-parco-border/90 rounded-[20px] p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between space-y-4 hover:border-parco-red/50 transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-parco-red">
                  <Fuel size={18} />
                </div>
                <ParcoBadge />
              </div>
              <h3 className="font-serif text-lg font-normal text-[#0A111F]">
                Total PARCO (Rahim Yar Khan)
              </h3>
              <p className="text-xs text-[#5A6474] leading-relaxed">
                Khanpur Road forecourt desk, M-Mart convenience, Excellium dispensers, and automatic car wash.
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href={parcoStation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#0A111F] bg-[#FAF8F5] hover:bg-neutral-100 p-2.5 rounded-xl border border-neutral-200/80 transition-all"
              >
                <Navigation size={12} className="text-parco-red" />
                <span>Map Route</span>
              </a>
              <a
                href={`https://wa.me/${parcoStation.whatsapp}?text=Hello%20Mashal%20Total%20PARCO%20Rahim%20Yar%20Khan`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-white bg-parco-red hover:bg-parco-dark p-2.5 rounded-xl transition-all shadow-sm"
              >
                <MessageSquare size={12} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Channel 3: PSO (Lahore) Desk */}
          <div className="bg-white border border-pso-border/90 rounded-[20px] p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between space-y-4 hover:border-pso-green/50 transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-pso-green">
                  <Fuel size={18} />
                </div>
                <PsoBadge />
              </div>
              <h3 className="font-serif text-lg font-normal text-[#0A111F]">
                PSO Station (Raiwind Lahore)
              </h3>
              <p className="text-xs text-[#5A6474] leading-relaxed">
                Raiwind Road flagship forecourt, Shop Stop, on-site 24/7 ATM, Altron High Octane & Euro-5 diesel.
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href={psoStation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#0A111F] bg-[#FAF8F5] hover:bg-neutral-100 p-2.5 rounded-xl border border-neutral-200/80 transition-all"
              >
                <Navigation size={12} className="text-pso-green" />
                <span>Map Route</span>
              </a>
              <a
                href={`https://wa.me/${psoStation.whatsapp}?text=Hello%20Mashal%20PSO%20Raiwind%20Lahore`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-white bg-pso-green hover:bg-pso-dark p-2.5 rounded-xl transition-all shadow-sm"
              >
                <MessageSquare size={12} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Contact Form & Direct Support Sidebar */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Form Column (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <ContactForm />
            </motion.div>

            {/* Right Quick Assistance & Corporate Column (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 space-y-5"
            >


              {/* Central Office Info Card */}
              <div className="bg-white border border-neutral-200/90 p-6 sm:p-7 rounded-[22px] space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                  <h3 className="font-serif text-lg font-normal text-[#0A111F]">
                    Corporate Headquarters
                  </h3>
                  <span className="text-[10px] font-semibold text-[#8C7238] uppercase tracking-wider">
                    Punjab, Pakistan
                  </span>
                </div>

                <div className="space-y-3 text-xs text-[#5A6474]">
                  <div className="flex items-start gap-2.5">
                    <Building2 size={15} className="text-[#8C7238] flex-shrink-0 mt-0.5" />
                    <span>{mashalInfo.headquarters}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone size={15} className="text-[#8C7238] flex-shrink-0" />
                    <a
                      href={`tel:${mashalInfo.centralPhone}`}
                      className="tabular-nums hover:text-[#0A111F] font-semibold text-[#0A111F]"
                    >
                      {mashalInfo.centralPhoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail size={15} className="text-[#8C7238] flex-shrink-0" />
                    <a
                      href={`mailto:${mashalInfo.centralEmail}`}
                      className="hover:text-[#0A111F]"
                    >
                      {mashalInfo.centralEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock size={15} className="text-[#8C7238] flex-shrink-0" />
                    <span>Continuous Forecourt Operations &bull; Open 24/7</span>
                  </div>
                </div>
              </div>

              {/* Quality & Volumetric Calibration Assurance Badge */}
              <div className="bg-[#FAF8F5] border border-[#C89A3C]/30 p-4 sm:p-5 rounded-[18px] flex items-start gap-3.5 shadow-xs">
                <div className="w-9 h-9 rounded-full bg-[#FAF6EE] border border-[#E6DEC8] flex items-center justify-center text-[#8C7238] flex-shrink-0 mt-0.5">
                  <ShieldCheck size={18} />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-semibold text-[#0A111F]">
                    Certified Physical Volume Verification
                  </p>
                  <p className="text-[11px] text-[#5A6474] leading-relaxed">
                    Test calibration measures (5L / 10L) are accessible upon request before any fueling transaction.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 4. Both Station Forecourts Side-by-Side */}
          <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-neutral-200/90 space-y-8 sm:space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1.5 max-w-xl">
                <span className="text-[10px] sm:text-xs font-semibold text-[#8C7238] uppercase tracking-[0.2em] block">
                  Forecourt Coordinates & Profiles
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#0A111F] tracking-tight">
                  Both Station Outlets Side by Side
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-[#5A6474] max-w-sm leading-relaxed">
                Direct location maps, certified fuel grades, and on-site supervisor contacts for both locations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              {/* PARCO Station Full Card */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-parco-border rounded-[24px] p-6 sm:p-7 space-y-5 relative shadow-[0_10px_35px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-parco-red" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-parco-border/60">
                    <div>
                      <ParcoBadge />
                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#15120D] mt-1.5">
                        Mashal Total PARCO Station
                      </h3>
                    </div>
                    <span className="text-[11px] bg-[#FAECEC] text-parco-red px-2.5 py-1 rounded-full font-semibold">
                      Open 24/7
                    </span>
                  </div>

                  {/* Photo Container */}
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200/80 group">
                    <Image
                      src="/images/parco/parco-hero-night.jpg"
                      alt="Mashal Total PARCO station at night in Rahim Yar Khan"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px]">
                      <span className="font-medium drop-shadow-sm">Khanpur Road &bull; RYK</span>
                      <span className="bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-[#F3C351] font-semibold">
                        Excellium &amp; Auto Wash
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-parco-border/60 flex flex-wrap gap-2.5">
                  <a
                    href={parcoStation.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-parco-red hover:bg-parco-dark text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all shadow-sm active:scale-95"
                  >
                    <Navigation size={12} />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={`https://wa.me/${parcoStation.whatsapp}?text=Hello%20Total%20PARCO%20Mashal%20Petroleum`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#FAECEC] hover:bg-[#F5D8D8] text-parco-red text-xs font-semibold px-4 py-2.5 rounded-full transition-all"
                  >
                    <MessageSquare size={12} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.div>

              {/* PSO Station Full Card */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-white border border-pso-border rounded-[24px] p-6 sm:p-7 space-y-5 relative shadow-[0_10px_35px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-pso-green" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-pso-border/60">
                    <div>
                      <PsoBadge />
                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#15120D] mt-1.5">
                        Mashal PSO Station
                      </h3>
                    </div>
                    <span className="text-[11px] bg-[#E8F3ED] text-pso-green px-2.5 py-1 rounded-full font-semibold">
                      Open 24/7
                    </span>
                  </div>

                  {/* Real Photo Thumbnail */}
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200/80 group">
                    <Image
                      src="/images/pso/pso-landing-station.jpg"
                      alt="Mashal PSO station at night in Raiwind Lahore"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px]">
                      <span className="font-medium drop-shadow-sm">Raiwind Road &bull; Lahore</span>
                      <span className="bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-[#4ADE80] font-semibold">
                        Shop Stop &amp; 24/7 ATM
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-pso-border/60 flex flex-wrap gap-2.5">
                  <a
                    href={psoStation.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-pso-green hover:bg-pso-dark text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all shadow-sm active:scale-95"
                  >
                    <Navigation size={12} />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={`https://wa.me/${psoStation.whatsapp}?text=Hello%20PSO%20Mashal%20Petroleum`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#E8F3ED] hover:bg-[#D5EBDD] text-pso-green text-xs font-semibold px-4 py-2.5 rounded-full transition-all"
                  >
                    <MessageSquare size={12} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 5. Frequently Asked Inquiries (Accordion) */}
          <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-neutral-200/90 max-w-4xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="text-[10px] sm:text-xs font-semibold text-[#8C7238] uppercase tracking-[0.2em] block">
                Direct Assistance
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#0A111F] tracking-tight">
                Frequently Asked Inquiries
              </h2>
            </div>

            <div className="space-y-3 pt-2">
              {contactFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.02)] transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#0A111F] hover:bg-neutral-50 transition-colors cursor-pointer"
                    >
                      <span className="leading-snug">{faq.q}</span>
                      <ChevronDown
                        size={16}
                        className={`text-[#8C7238] flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 sm:p-5 pt-0 text-xs sm:text-[13px] text-[#5A6474] leading-relaxed border-t border-neutral-100">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

