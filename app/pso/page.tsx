import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { psoStation } from "@/lib/station-data";
import { PsoBadge } from "@/components/ui/BrandBadges";
import {
  MapPin,
  Clock,
  Navigation,
  CheckCircle2,
  ShoppingBag,
  CreditCard,
  Wallet,
  Building2,
  Container,
  ArrowRight,
  ExternalLink,
  Droplet,
  Fuel,
  ShieldCheck,
  Award,
  Zap,
  Sparkles,
  Gauge,
} from "lucide-react";

export const metadata: Metadata = {
  title: "PSO Station Raiwind | Lahore | Mashal Petroleum",
  description:
    "Official Pakistan State Oil (PSO) forecourt on Raiwind Road, Raiwind, Lahore. Offering Altron Premium Euro 5, Altron X High Octane 97, Action+ Diesel, Shop Stop, 24/7 ATM, and PSO Fleet Card facilities.",
};

const amenityIcons: Record<string, React.ElementType> = {
  ShoppingBag,
  CreditCard,
  Wallet,
  Building2,
  CheckCircle2,
  Container,
};

const amenityTags: string[] = [
  "24/7 Chai & Snacks",
  "All Bank Networks",
  "Corporate Billing",
  "Dedicated Wudu Area",
  "Hourly Sanity Check",
  "High-Clearance Canopy",
];

const fuelSpecs: {
  tag: string;
  octane: string;
  specs: string[];
  color: string;
}[] = [
  {
    tag: "Everyday Drive",
    octane: "RON 92",
    specs: ["Euro 5 Additive Package", "Injector Cleaning Formula", "Standard Domestic Vehicles"],
    color: "#0B4A2D",
  },
  {
    tag: "High Octane",
    octane: "RON 97",
    specs: ["High Compression Blended", "Prevents Engine Knock", "Luxury Sedans & SUVs"],
    color: "#059669",
  },
  {
    tag: "Heavy Fleet Diesel",
    octane: "Euro-5",
    specs: ["Cetane-Boosted Action+", "Heavy Freight & Buses", "Low Emission Formulation"],
    color: "#065F46",
  },
];

export default function PsoPage() {
  return (
    <div className="bg-[#F8FAF9] text-[#15120D] min-h-screen selection:bg-emerald-600 selection:text-white">
      {/* =========================================================================
          HERO SECTION: Full-Width Cinematic PSO Forecourt Landscape Photo
         ========================================================================= */}
      <section className="relative overflow-hidden bg-[#060A08] text-white border-b border-pso-border/40">
        {/* Background Image: Landscape PSO Station Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pso/pso-hero-landscape.jpg"
            alt="Mashal PSO Station illuminated canopy, dispensers, and Shop Stop in Raiwind, Lahore"
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
              <div className="inline-flex items-center gap-2.5 bg-black/60 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs font-medium text-[#4ADE80] shadow-2xl">
                <PsoBadge />
                <span className="tracking-wide">Official Pakistan State Oil (PSO) Franchise</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping ml-1" />
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] text-[#4ADE80] font-semibold">
                  Raiwind Road &bull; Lahore
                </p>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] xl:text-[60px] leading-[1.08] tracking-tight font-normal text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                  Mashal PSO <span className="italic font-light text-emerald-300">Station</span>
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

      {/* =========================================================================
          FORECOURT ASSURANCE BAR (High-End Trust Strip)
         ========================================================================= */}
      <section className="bg-[#08120D] border-b border-[#142B1F] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-[#4ADE80] flex-shrink-0">
                <Droplet size={15} />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Direct PSO Sourcing</p>
                <p className="text-[11px] text-neutral-400">Refinery Sealed Integrity</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-[#4ADE80] flex-shrink-0">
                <Gauge size={15} />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Digital Calibration</p>
                <p className="text-[11px] text-neutral-400">Accurate Measure Proving</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-[#4ADE80] flex-shrink-0">
                <Wallet size={15} />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">PSO Fleet Cards</p>
                <p className="text-[11px] text-neutral-400">Digital Corporate Billing</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-[#4ADE80] flex-shrink-0">
                <CreditCard size={15} />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">24/7 On-Site ATM</p>
                <p className="text-[11px] text-neutral-400">Linked Cash Point</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FUEL PRODUCTS: Redesigned Ultra-Luxury Cards
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-neutral-200/80 bg-gradient-to-b from-[#FAFCFB] to-[#F3F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pso-green bg-[#E7F1EB] px-3 py-1 rounded-full border border-pso-border">
                <Fuel size={13} />
                <span>Refinery Formulations</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#15120D] tracking-tight">
                Official PSO Fuel Formulations
              </h2>
              <p className="text-sm text-[#4A5D52] leading-relaxed">
                Refinery-direct fuel grades engineered by Pakistan State Oil, ensuring optimal engine response, fuel system cleanliness, and maximum commercial mileage.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs text-[#4A5D52] bg-white px-4 py-2.5 rounded-sm border border-neutral-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>All 3 Grades Available On Dispenser</span>
            </div>
          </div>

          {/* 3 Luxury Fuel Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {psoStation.fuels.map((fuel, index) => {
              const spec = fuelSpecs[index] || fuelSpecs[0];
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-md border border-neutral-200/90 hover:border-pso-green shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(11,74,45,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden p-7 sm:p-8"
                >
                  {/* Top brand accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pso-green via-emerald-500 to-[#07331F] group-hover:h-1.5 transition-all duration-300" />

                  {/* Ambient luxury glow in corner on hover */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/15 transition-all duration-500" />

                  <div className="space-y-6 relative z-10">
                    {/* Header Row: Octane Pill & Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-1.5 bg-[#0B4A2D] text-white px-3 py-1 rounded-sm text-xs font-mono font-semibold tracking-wide shadow-xs">
                        <Droplet size={11} className="text-emerald-300" />
                        <span>{spec.octane}</span>
                      </div>

                      <span className="text-[11px] font-semibold uppercase tracking-wider text-pso-green bg-[#E7F1EB] border border-pso-border px-2.5 py-0.5 rounded-sm">
                        {fuel.badge || spec.tag}
                      </span>
                    </div>

                    {/* Fuel Title & Description */}
                    <div className="space-y-2.5">
                      <h3 className="font-serif text-2xl font-normal text-[#15120D] group-hover:text-pso-green transition-colors">
                        {fuel.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#42594C] leading-relaxed">
                        {fuel.description}
                      </p>
                    </div>

                    {/* Specs Checklist */}
                    <div className="pt-2 border-t border-neutral-100 space-y-2">
                      {spec.specs.map((item, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-[#42594C]">
                          <CheckCircle2 size={13} className="text-pso-green flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Verification Footer */}
                  <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-[#5A7365] relative z-10">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck size={13} className="text-emerald-600" />
                      <span>Refinery Verified</span>
                    </span>
                    <span className="font-mono text-neutral-400">PSO Direct</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FACILITIES & AMENITIES: Luxury Forecourt Infrastructure Grid
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-neutral-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pso-green bg-[#E7F1EB] px-3 py-1 rounded-full border border-pso-border">
              <ShoppingBag size={13} />
              <span>Full Forecourt Facilities</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#15120D] tracking-tight">
              On-Site Amenities &amp; Services
            </h2>
            <p className="text-sm text-[#4A5D52] leading-relaxed max-w-xl mx-auto">
              Equipped for urban commuters, corporate fleet cards, and commercial transport drivers on Raiwind Road, Lahore.
            </p>
          </div>

          {/* 6 Luxury Amenity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {psoStation.amenities.map((item, index) => {
              const Icon = amenityIcons[item.iconName] || CheckCircle2;
              const tag = amenityTags[index] || "24/7 Available";
              const indexNum = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={index}
                  className="group relative bg-[#FAFCFB] hover:bg-white rounded-md border border-pso-border/80 hover:border-pso-green p-7 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(11,74,45,0.09)] flex flex-col justify-between"
                >
                  {/* Subtle Top Watermark Index */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-sm bg-[#E7F1EB] border border-pso-border flex items-center justify-center text-pso-green group-hover:bg-pso-green group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                      <Icon size={22} />
                    </div>
                    <span className="font-serif text-2xl font-light text-neutral-200 group-hover:text-emerald-200 transition-colors">
                      {indexNum}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 mb-6">
                    <h3 className="font-serif text-xl font-normal text-[#15120D] group-hover:text-pso-green transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#42594C] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Amenity Status Tag */}
                  <div className="pt-3 border-t border-neutral-100/90 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-medium text-pso-green bg-[#E7F1EB] px-2.5 py-0.5 rounded-sm">
                      {tag}
                    </span>
                    <span className="text-[11px] text-neutral-400 group-hover:text-neutral-600 transition-colors">
                      Raiwind Site
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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

      {/* =========================================================================
          LOCATION & COORDINATES: Executive Split Luxury Card & Live GPS Map
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Executive Station Card */}
            <div className="lg:col-span-5 bg-white border border-neutral-200/90 p-8 sm:p-10 rounded-md shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between space-y-8 relative overflow-hidden">
              {/* Subtle brand top accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pso-green via-emerald-500 to-[#07331F]" />

              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-pso-green uppercase tracking-wider mb-2">
                    <MapPin size={13} />
                    <span>Location &amp; Coordinates</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#15120D]">
                    Mashal PSO Station
                  </h3>
                  <p className="text-xs text-[#5A7365] mt-1">
                    Raiwind Road Corridor &bull; Lahore
                  </p>
                </div>

                {/* Info Blocks with Clean Styling */}
                <div className="space-y-4 text-xs sm:text-sm text-[#42594C]">
                  <div className="p-4 rounded-sm bg-[#FAFCFB] border border-pso-border/70 space-y-1">
                    <span className="font-semibold text-[#15120D] block text-xs uppercase tracking-wider text-pso-green">
                      Forecourt Address
                    </span>
                    <p className="leading-relaxed font-medium text-[#15120D]">
                      {psoStation.fullAddress}
                    </p>
                  </div>

                  <div className="p-4 rounded-sm bg-[#F8FAF9] border border-neutral-200/80 space-y-1">
                    <span className="font-semibold text-[#15120D] block text-xs uppercase tracking-wider text-neutral-500">
                      Operational Schedule
                    </span>
                    <p className="leading-relaxed text-[#15120D] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Continuous 24 Hours a day &bull; 7 Days a week &bull; 365 Days
                    </p>
                  </div>

                  <div className="p-4 rounded-sm bg-[#F8FAF9] border border-neutral-200/80 space-y-1">
                    <span className="font-semibold text-[#15120D] block text-xs uppercase tracking-wider text-neutral-500">
                      GPS Satellite Coordinates
                    </span>
                    <p className="font-mono text-xs text-[#15120D]">
                      31.2505231&deg; N, 74.1818275&deg; E
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-neutral-100">
                <a
                  href={psoStation.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-pso-green hover:bg-[#07331F] text-white text-sm font-semibold py-3.5 px-6 rounded-sm transition-all text-center shadow-[0_4px_16px_rgba(11,74,45,0.3)] hover:shadow-[0_6px_20px_rgba(11,74,45,0.5)]"
                >
                  <Navigation size={15} />
                  <span>Open in Google Maps Navigation</span>
                  <ExternalLink size={13} className="opacity-70 ml-1" />
                </a>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 border border-neutral-300 hover:bg-[#E7F1EB] hover:border-pso-green/40 text-[#15120D] text-sm font-medium py-3 px-6 rounded-sm transition-all text-center"
                >
                  <span>Contact Station Manager Desk &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right Embedded Interactive Map in Luxury Frame */}
            <div className="lg:col-span-7 min-h-[460px] rounded-md overflow-hidden border border-neutral-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative bg-neutral-100">
              <iframe
                title="PSO Station Location Map - Raiwind, Lahore"
                src={psoStation.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "460px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-[1.04]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
