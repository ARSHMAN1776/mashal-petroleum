import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { psoStation } from "@/lib/station-data";
import {
  StationAssurance,
  StationFuels,
  StationAmenities,
  StationLocation,
  type StationAccent,
} from "@/components/station/StationSections";
import { Navigation, Clock, Award, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "PSO Station Raiwind | Lahore",
  description:
    "Official Pakistan State Oil (PSO) forecourt on Raiwind Road, Raiwind, Lahore. Offering Altron Premium Euro 5, Altron X High Octane 97, Action+ Diesel, Shop Stop, 24/7 ATM, and PSO Fleet Card facilities.",
};

const accent: StationAccent = {
  text: "text-pso-green",
  dot: "bg-pso-green",
};

const assurances = [
  { title: "Direct PSO sourcing", detail: "Refinery sealed integrity" },
  { title: "Digital calibration", detail: "Accurate measure proving" },
  { title: "PSO Fleet Cards", detail: "Digital corporate billing" },
  { title: "24/7 on-site ATM", detail: "Linked cash point" },
];

const amenityTags: string[] = [
  "24/7 Chai & Snacks",
  "All Bank Networks",
  "Corporate Billing",
  "Dedicated Wudu Area",
  "Hourly Sanity Check",
  "High-Clearance Canopy",
];

const fuelSpecs = [
  {
    tag: "Everyday Drive",
    octane: "RON 92",
    specs: ["Euro 5 Additive Package", "Injector Cleaning Formula", "Standard Domestic Vehicles"],
  },
  {
    tag: "High Octane",
    octane: "RON 97",
    specs: ["High Compression Blended", "Prevents Engine Knock", "Luxury Sedans & SUVs"],
  },
  {
    tag: "Heavy Fleet Diesel",
    octane: "Euro-5",
    specs: ["Cetane-Boosted Action+", "Heavy Freight & Buses", "Low Emission Formulation"],
  },
];

export default function PsoPage() {
  return (
    <div className="bg-[#FAF8F5] text-[#15120D] min-h-screen selection:bg-emerald-600 selection:text-white">
      {/* =========================================================================
          HERO SECTION: Full-Width Cinematic PSO Forecourt Landscape Photo
         ========================================================================= */}
      <section className="relative overflow-hidden bg-[#060A08] text-white border-b border-pso-border/40">
        {/* Background Image: Landscape PSO Station Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pso/pso-hero-landscape.jpg"
            alt="Mashaal PSO Station illuminated canopy, dispensers, and Shop Stop in Raiwind, Lahore"
            fill
            priority
            unoptimized
            quality={95}
            sizes="100vw"
            className="object-cover object-[center_35%] sm:object-[center_28%] lg:object-[center_22%] select-none scale-[1.01]"
          />

          {/* Luxury Film Gradients for pristine contrast and depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060A08] via-[#060A08]/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060A08]/90 via-[#060A08]/55 to-transparent lg:w-[68%]" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8 xl:col-span-7 space-y-6 sm:space-y-8">
              {/* Brand Telemetry Pill */}
              <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-medium text-white shadow-2xl">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[#4ADE80] font-semibold">Pakistan State Oil (PSO)</span>
                <span className="text-neutral-400">&bull;</span>
                <span className="text-neutral-200">Official Franchise</span>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] text-[#4ADE80] font-semibold">
                  Raiwind Road &bull; Lahore
                </p>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] xl:text-[60px] leading-[1.08] tracking-tight font-normal text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                  Mashaal PSO <span className="italic font-light text-emerald-300">Station</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-neutral-200/95 font-normal leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Situated on the active commuter and transit corridor of Raiwind Road, Lahore.
                Providing verified PSO high-performance fuels, corporate fleet card
                management, high-clearance truck lanes, and an on-site 24/7 ATM.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={psoStation.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-pso-green hover:bg-[#07331F] text-white text-sm font-semibold px-7 py-3.5 rounded-sm transition-all shadow-[0_8px_24px_rgba(11,74,45,0.45)] hover:shadow-[0_12px_32px_rgba(11,74,45,0.6)] active:scale-[0.98]"
                >
                  <Navigation size={16} />
                  <span>Get Live Directions</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/25 text-sm font-medium px-6 py-3.5 rounded-sm transition-all hover:border-white/40 active:scale-[0.98]"
                >
                  <span>Contact Station Desk &rarr;</span>
                </Link>
              </div>

              {/* Live Status Bar */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap gap-y-3 gap-x-8 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/30 flex-shrink-0 animate-pulse" />
                  <span className="font-medium text-white">Forecourt Status:</span>
                  <span className="text-emerald-300 font-medium">Open 24/7 &bull; Active</span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <Clock size={13} className="text-[#4ADE80] flex-shrink-0" />
                  <span className="tabular-nums">Continuous 365 Days Operation</span>
                </div>
              </div>
            </div>

            {/* Right Luxury Verification Badge */}
            <div className="lg:col-span-4 xl:col-span-5 hidden lg:flex flex-col items-end justify-end h-full pt-48 pointer-events-none">
              <div className="bg-black/75 backdrop-blur-xl border border-white/20 p-4 rounded-sm text-xs text-neutral-200 shadow-2xl flex items-center gap-3.5 max-w-xs">
                <div className="w-9 h-9 rounded-sm bg-pso-green/20 border border-pso-green/40 flex items-center justify-center text-[#4ADE80] flex-shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <p className="font-medium text-white text-xs">Official PSO Franchise</p>
                  <p className="text-[11px] text-neutral-400 leading-tight mt-0.5">
                    Refinery direct delivery &bull; Certified volume calibration &bull; Fleet Cards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StationAssurance items={assurances} />

      <StationFuels
        eyebrow="Refinery formulations"
        heading={
          <>
            Official PSO{" "}
            <span className="text-mashal-gold-deep">fuel formulations.</span>
          </>
        }
        intro="Refinery-direct fuel grades engineered by Pakistan State Oil, ensuring optimal engine response, fuel system cleanliness, and maximum commercial mileage."
        fuels={psoStation.fuels}
        specs={fuelSpecs}
        accent={accent}
        availability="All three grades available on the dispenser · Refinery verified · PSO Direct"
      />

      <StationAmenities
        eyebrow="Full forecourt facilities"
        heading={
          <>
            On-site amenities &amp;{" "}
            <span className="text-mashal-gold-deep">services.</span>
          </>
        }
        intro="Equipped for urban commuters, corporate fleet cards, and commercial transport drivers on Raiwind Road, Lahore."
        amenities={psoStation.amenities}
        tags={amenityTags}
        accent={accent}
      />

      {/* =========================================================================
          PHOTO GALLERY: High-End Balanced Real Imagery Showcase
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-neutral-200/80 bg-[#08120D] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4ADE80] bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/40">
                <Sparkles size={13} />
                <span>Station Visuals &bull; Raiwind Forecourt</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-white tracking-tight">
                Forecourt Photo Showcase
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-md leading-relaxed">
              Authentic high-resolution photography of our illuminated canopy, digital dispensers, Shop Stop convenience mart, and wide transit forecourt in Raiwind, Lahore.
            </p>
          </div>
        </div>

        {/* 2 Symmetrical Luxury Gallery Cards in 16:9 Landscape Containers */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {psoStation.gallery.map((img, index) => (
              <div
                key={index}
                className="group relative bg-[#0F2017] rounded-md border border-emerald-900/50 hover:border-[#4ADE80]/60 p-4 sm:p-5 transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-4"
              >
                {/* 16:9 Landscape Image Container */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-sm overflow-hidden bg-black/60 border border-white/10">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-[center_60%] group-hover:scale-105 transition-transform duration-700 select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                  <span className="absolute top-3 left-3 z-10 bg-black/75 backdrop-blur-md text-[#4ADE80] text-[11px] font-medium px-3 py-1 rounded-full border border-emerald-500/30 shadow-lg">
                    {index === 0 ? "Night Canopy & Shop Stop" : "Daytime Forecourt & Dispenser Islands"}
                  </span>
                </div>

                {/* Caption & Title */}
                <div className="space-y-1.5 pt-1">
                  <h3 className="font-serif text-lg font-normal text-white group-hover:text-[#4ADE80] transition-colors">
                    {index === 0 ? "Illuminated Night Forecourt & Shop Stop" : "Multi-Lane Fuel Islands & Totem Sign"}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StationLocation
        station={psoStation}
        corridor="Raiwind Road Corridor · Lahore"
        coordinates="31.2505231° N, 74.1818275° E"
        mapTitle="PSO Station Location Map - Raiwind, Lahore"
        accent={accent}
      />
    </div>
  );
}
