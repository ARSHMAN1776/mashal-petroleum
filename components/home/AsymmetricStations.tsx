"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Navigation, ShieldCheck } from "lucide-react";
import { parcoStation, psoStation } from "@/lib/station-data";
import { ParcoBadge, PsoBadge } from "@/components/ui/BrandBadges";

export const AsymmetricStations: React.FC = () => {
  return (
    <section id="stations" className="bg-white py-16 sm:py-20 lg:py-24 border-b border-neutral-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-[10px] sm:text-xs font-semibold text-[#8C7238] uppercase tracking-[0.2em] block">
              Forecourt Network
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0A111F] font-normal tracking-tight">
              Our Two Forecourts
            </h2>
          </div>
          <p className="text-xs sm:text-[13px] text-[#5A6474] max-w-md leading-relaxed">
            Operated independently under official franchises with Pakistan&apos;s most trusted
            energy corporations. Certified fuels, verified measurement, and round-the-clock forecourt hospitality.
          </p>
        </div>

        {/* Symmetrical Balanced 50/50 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* 1. Total PARCO Station Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-parco-border rounded-[24px] p-6 sm:p-7 space-y-5 relative shadow-[0_10px_35px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between hover:border-parco-red/40 transition-colors"
          >
            {/* Top Red Brand Accent Strip */}
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

              {/* Real Night Photo Container (16:9) */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200/80 group">
                <Image
                  src="/images/parco/parco-hero-night.jpg"
                  alt="Mashal Total PARCO station at night with illuminated red canopy in Rahim Yar Khan"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
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

              {/* Station Details */}
              <div className="space-y-2.5 text-xs text-[#574F41]">
                <div className="space-y-0.5">
                  <span className="font-semibold text-[#15120D] flex items-center gap-1.5">
                    <MapPin size={13} className="text-parco-red" />
                    <span>Address</span>
                  </span>
                  <p className="pl-4 leading-relaxed">{parcoStation.fullAddress}</p>
                </div>

                <div className="space-y-0.5">
                  <span className="font-semibold text-[#15120D] flex items-center gap-1.5">
                    <Clock size={13} className="text-parco-red" />
                    <span>Operating Hours</span>
                  </span>
                  <p className="pl-4 leading-relaxed">24 Hours a day, 7 days a week (Continuous)</p>
                </div>

                {/* Feature Tags */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="bg-[#FAF8F5] border border-neutral-200/80 p-2.5 rounded-xl">
                    <span className="text-[10px] text-parco-red font-semibold block">Fuel Grades</span>
                    <span className="text-[11px] text-[#15120D] font-medium">Super, Hi-Octane 97, Euro 5</span>
                  </div>
                  <div className="bg-[#FAF8F5] border border-neutral-200/80 p-2.5 rounded-xl">
                    <span className="text-[10px] text-parco-red font-semibold block">Forecourt Mart</span>
                    <span className="text-[11px] text-[#15120D] font-medium">M-Mart 24/7 &amp; Auto Wash</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Actions */}
            <div className="pt-4 border-t border-parco-border/60 flex flex-wrap items-center justify-between gap-2.5">
              <a
                href={parcoStation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-parco-red hover:bg-parco-dark text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all shadow-sm active:scale-95"
              >
                <Navigation size={12} />
                <span>Get Directions</span>
              </a>

              <Link
                href="/parco"
                className="inline-flex items-center gap-1.5 bg-[#FAECEC] hover:bg-[#F5D8D8] text-parco-red text-xs font-semibold px-4 py-2.5 rounded-full transition-all"
              >
                <span>Station Profile</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </motion.div>

          {/* 2. PSO Station Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white border border-pso-border rounded-[24px] p-6 sm:p-7 space-y-5 relative shadow-[0_10px_35px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between hover:border-pso-green/40 transition-colors"
          >
            {/* Top Green Brand Accent Strip */}
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

              {/* Real Night Photo Container (16:9) */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200/80 group">
                <Image
                  src="/images/pso/pso-landing-station.jpg"
                  alt="Mashal PSO station at night with illuminated canopy and Shop Stop in Raiwind Lahore"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
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

              {/* Station Details */}
              <div className="space-y-2.5 text-xs text-[#574F41]">
                <div className="space-y-0.5">
                  <span className="font-semibold text-[#15120D] flex items-center gap-1.5">
                    <MapPin size={13} className="text-pso-green" />
                    <span>Address</span>
                  </span>
                  <p className="pl-4 leading-relaxed">{psoStation.fullAddress}</p>
                </div>

                <div className="space-y-0.5">
                  <span className="font-semibold text-[#15120D] flex items-center gap-1.5">
                    <Clock size={13} className="text-pso-green" />
                    <span>Operating Hours</span>
                  </span>
                  <p className="pl-4 leading-relaxed">24 Hours a day, 7 days a week (Continuous)</p>
                </div>

                {/* Feature Tags */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="bg-[#FAF8F5] border border-neutral-200/80 p-2.5 rounded-xl">
                    <span className="text-[10px] text-pso-green font-semibold block">Fuel Grades</span>
                    <span className="text-[11px] text-[#15120D] font-medium">Altron X 97, Euro 5 Diesel</span>
                  </div>
                  <div className="bg-[#FAF8F5] border border-neutral-200/80 p-2.5 rounded-xl">
                    <span className="text-[10px] text-pso-green font-semibold block">Forecourt Mart</span>
                    <span className="text-[11px] text-[#15120D] font-medium">Shop Stop &amp; Cashless PSO Card</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Actions */}
            <div className="pt-4 border-t border-pso-border/60 flex flex-wrap items-center justify-between gap-2.5">
              <a
                href={psoStation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-pso-green hover:bg-pso-dark text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all shadow-sm active:scale-95"
              >
                <Navigation size={12} />
                <span>Get Directions</span>
              </a>

              <Link
                href="/pso"
                className="inline-flex items-center gap-1.5 bg-[#E8F3ED] hover:bg-[#D5EBDD] text-pso-green text-xs font-semibold px-4 py-2.5 rounded-full transition-all"
              >
                <span>Station Profile</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

