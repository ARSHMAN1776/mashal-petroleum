import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { parcoStation } from "@/lib/station-data";
import { ParcoBadge } from "@/components/ui/BrandBadges";
import { ParcoGallerySlider } from "@/components/ui/ParcoGallerySlider";
import {
  MapPin,
  Clock,
  Navigation,
  CheckCircle2,
  Store,
  Sparkles,
  ShieldCheck,
  Gauge,
  Wrench,
  Truck,
  ArrowRight,
  ExternalLink,
  Droplet,
  Fuel,
  Shield,
  Activity,
  Layers,
  Award,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "No. 1 Petrol in Rahim Yar Khan | Total PARCO Khanpur Road | Mashaal Petroleum",
  description:
    "Ranked No. 1 Petrol in Rahim Yar Khan on Khanpur Road. Authorized Total PARCO fuel station offering Super RON 92, Hi-Octane RON 97, Euro-5 Diesel, 24/7 M-Mart, and verified digital volume calibration.",
  keywords: [
    "No 1 petrol in Rahim Yar Khan",
    "No 1 petrol pump Rahim Yar Khan",
    "Best petrol pump in Rahim Yar Khan",
    "Total PARCO Rahim Yar Khan",
    "Khanpur Road petrol station",
    "Hi-Octane Rahim Yar Khan",
    "Euro 5 Diesel Rahim Yar Khan",
  ],
};

const amenityIcons: Record<string, React.ElementType> = {
  Store,
  Sparkles,
  ShieldCheck,
  Gauge,
  Wrench,
  Truck,
};

const amenityTags: string[] = [
  "24/7 Fresh Stock",
  "A/C & Dedicated Wudu",
  "Sanitized Roster",
  "Attendant Serviced",
  "TotalEnergies QUARTZ",
  "High-Flow Commercial",
];

const fuelSpecs: {
  tag: string;
  octane: string;
  specs: string[];
  color: string;
}[] = [
  {
    tag: "Daily Unleaded",
    octane: "RON 92",
    specs: ["Direct Refinery Sealed", "Clean Injector Additives", "Standard Commuter Grade"],
    color: "#C1272D",
  },
  {
    tag: "High Performance",
    octane: "RON 97",
    specs: ["Anti-Knock Formulation", "Turbo & High Compression", "Maximum Acceleration"],
    color: "#E53935",
  },
  {
    tag: "Low Sulfur Diesel",
    octane: "Euro-5",
    specs: ["High Cetane Index", "Heavy Logistics & Buses", "Enhanced Fuel Economy"],
    color: "#8E0000",
  },
];

export default function ParcoPage() {
  return (
    <div className="bg-[#FAF8F5] text-[#15120D] min-h-screen selection:bg-red-500 selection:text-white">
      {/* =========================================================================
          HERO SECTION: Full-Width Cinematic Total PARCO Night Station Photo
         ========================================================================= */}
      <section className="relative overflow-hidden bg-[#0A0707] text-white border-b border-parco-border/40">
        {/* Background Image: Landscape Total PARCO Night Station Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/parco/parco-hero-night.jpg"
            alt="Mashaal Total PARCO station - No. 1 Petrol in Rahim Yar Khan on Khanpur Road"
            fill
            priority
            unoptimized
            quality={95}
            sizes="100vw"
            className="object-cover object-[center_35%] sm:object-[center_28%] lg:object-[center_22%] select-none scale-[1.01]"
          />

          {/* Luxury Film Gradients for pristine contrast and depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0707] via-[#0A0707]/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0707]/90 via-[#0A0707]/55 to-transparent lg:w-[68%]" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8 xl:col-span-7 space-y-6 sm:space-y-8">
              {/* Brand Telemetry Pill & No. 1 Ranking Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-medium text-white shadow-2xl">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                  <span className="text-[#FF858A] font-semibold">Total PARCO</span>
                  <span className="text-neutral-400">&bull;</span>
                  <span className="text-neutral-200">Authorized Forecourt</span>
                </div>

                <div className="inline-flex items-center gap-1.5 bg-black/60 border border-[#F3C351]/40 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#F3C351] shadow-lg">
                  <Award size={13} className="text-[#F3C351]" />
                  <span>No. 1 Petrol in Rahim Yar Khan</span>
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] text-[#FF858A] font-semibold">
                  Khanpur Road &bull; District Rahim Yar Khan
                </p>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] xl:text-[60px] leading-[1.08] tracking-tight font-normal text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                  Mashaal Total PARCO <span className="italic font-light text-red-300">Station</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-neutral-200/95 font-normal leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Recognized as the <strong>No. 1 petrol station in Rahim Yar Khan</strong> on Khanpur Road.
                Delivering 100% refinery-sealed PARCO fuels, certified digital meter accuracy, 24/7 M-Mart convenience,
                automated car wash, and dignified traveler hospitality.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={parcoStation.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-parco-red hover:bg-parco-dark text-white text-sm font-semibold px-7 py-3.5 rounded-sm transition-all shadow-[0_8px_24px_rgba(193,39,45,0.45)] hover:shadow-[0_12px_32px_rgba(193,39,45,0.6)] active:scale-[0.98]"
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
                  <Clock size={13} className="text-[#FF858A] flex-shrink-0" />
                  <span className="tabular-nums">Continuous 365 Days Operation</span>
                </div>
              </div>
            </div>

            {/* Right Luxury Verification Badge */}
            <div className="lg:col-span-4 xl:col-span-5 hidden lg:flex flex-col items-end justify-end h-full pt-48 pointer-events-none">
              <div className="bg-black/75 backdrop-blur-xl border border-white/20 p-4 rounded-sm text-xs text-neutral-200 shadow-2xl flex items-center gap-3.5 max-w-xs">
                <div className="w-9 h-9 rounded-sm bg-parco-red/20 border border-parco-red/40 flex items-center justify-center text-[#FF858A] flex-shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <p className="font-medium text-white text-xs">Certified Total PARCO Station</p>
                  <p className="text-[11px] text-neutral-400 leading-tight mt-0.5">
                    Refinery direct delivery &bull; Digital volumetric accuracy proved
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
      <section className="bg-[#120B0C] border-b border-[#2A1416] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-parco-red/20 border border-parco-red/40 flex items-center justify-center text-[#FF858A] flex-shrink-0">
                <Droplet size={15} />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Direct Refinery Sourcing</p>
                <p className="text-[11px] text-neutral-400">100% Sealed Supply Pipeline</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-parco-red/20 border border-parco-red/40 flex items-center justify-center text-[#FF858A] flex-shrink-0">
                <Gauge size={15} />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Digital Calibration</p>
                <p className="text-[11px] text-neutral-400">Physical 5L/10L Verification</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-parco-red/20 border border-parco-red/40 flex items-center justify-center text-[#FF858A] flex-shrink-0">
                <Clock size={15} />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">24/7 Forecourt Service</p>
                <p className="text-[11px] text-neutral-400">Day &amp; Night Attendants</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-parco-red/20 border border-parco-red/40 flex items-center justify-center text-[#FF858A] flex-shrink-0">
                <ShieldCheck size={15} />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">QUARTZ Service Bay</p>
                <p className="text-[11px] text-neutral-400">Certified Total Lubricants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FUEL PRODUCTS: Redesigned Ultra-Luxury Cards
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-neutral-200/80 bg-gradient-to-b from-[#FFFDFD] to-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-parco-red bg-[#FAECEC] px-3 py-1 rounded-full border border-parco-border">
                <Fuel size={13} />
                <span>Refinery Formulations</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#15120D] tracking-tight">
                No. 1 Certified PARCO Fuel Grades in Rahim Yar Khan
              </h2>
              <p className="text-sm text-[#61584C] leading-relaxed">
                Direct state refinery sourcing with uncompromised seal integrity, formulated for engine longevity, high compression efficiency, and commercial hauling across District Rahim Yar Khan.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs text-[#7A7265] bg-white px-4 py-2.5 rounded-sm border border-neutral-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>All 3 Grades Available On Forecourt</span>
            </div>
          </div>

          {/* 3 Luxury Fuel Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {parcoStation.fuels.map((fuel, index) => {
              const spec = fuelSpecs[index] || fuelSpecs[0];
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-md border border-neutral-200/90 hover:border-parco-red/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(193,39,45,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden p-7 sm:p-8"
                >
                  {/* Subtle top brand accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-parco-red via-[#E53935] to-parco-dark group-hover:h-1.5 transition-all duration-300" />

                  {/* Ambient luxury glow in corner on hover */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-red-500/15 transition-all duration-500" />

                  <div className="space-y-6 relative z-10">
                    {/* Header Row: Octane Pill & Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-1.5 bg-[#15120D] text-white px-3 py-1 rounded-sm text-xs font-mono font-semibold tracking-wide shadow-xs">
                        <Droplet size={11} className="text-red-400" />
                        <span>{spec.octane}</span>
                      </div>

                      <span className="text-[11px] font-semibold uppercase tracking-wider text-parco-red bg-[#FAECEC] border border-parco-border px-2.5 py-0.5 rounded-sm">
                        {fuel.badge || spec.tag}
                      </span>
                    </div>

                    {/* Fuel Title & Description */}
                    <div className="space-y-2.5">
                      <h3 className="font-serif text-2xl font-normal text-[#15120D] group-hover:text-parco-red transition-colors">
                        {fuel.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#574F41] leading-relaxed">
                        {fuel.description}
                      </p>
                    </div>

                    {/* Specs Checklist */}
                    <div className="pt-2 border-t border-neutral-100 space-y-2">
                      {spec.specs.map((item, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-[#474136]">
                          <CheckCircle2 size={13} className="text-parco-red flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Verification Footer */}
                  <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-[#7A7265] relative z-10">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck size={13} className="text-emerald-600" />
                      <span>Refinery Verified</span>
                    </span>
                    <span className="font-mono text-neutral-400">Total PARCO</span>
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
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-parco-red bg-[#FAECEC] px-3 py-1 rounded-full border border-parco-border">
              <Store size={13} />
              <span>Full Forecourt Services</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#15120D] tracking-tight">
              Forecourt Amenities &amp; Services
            </h2>
            <p className="text-sm text-[#61584C] leading-relaxed max-w-xl mx-auto">
              Engineered for commuter convenience, long-haul highway drivers, and commercial transit fleets traveling through Rahim Yar Khan.
            </p>
          </div>

          {/* 6 Luxury Amenity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {parcoStation.amenities.map((item, index) => {
              const Icon = amenityIcons[item.iconName] || CheckCircle2;
              const tag = amenityTags[index] || "24/7 Available";
              const indexNum = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={index}
                  className="group relative bg-[#FFFDFD] hover:bg-white rounded-md border border-parco-border/80 hover:border-parco-red p-7 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(193,39,45,0.09)] flex flex-col justify-between"
                >
                  {/* Subtle Top Watermark Index */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-sm bg-[#FAECEC] border border-parco-border flex items-center justify-center text-parco-red group-hover:bg-parco-red group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                      <Icon size={22} />
                    </div>
                    <span className="font-serif text-2xl font-light text-neutral-200 group-hover:text-red-200 transition-colors">
                      {indexNum}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 mb-6">
                    <h3 className="font-serif text-xl font-normal text-[#15120D] group-hover:text-parco-red transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#574F41] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Amenity Status Tag */}
                  <div className="pt-3 border-t border-neutral-100/90 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-medium text-parco-red bg-[#FAECEC] px-2.5 py-0.5 rounded-sm">
                      {tag}
                    </span>
                    <span className="text-[11px] text-neutral-400 group-hover:text-neutral-600 transition-colors">
                      Khanpur Road Site
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PHOTO GALLERY: Ultra-Premium Running Cinema Showcase
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-neutral-200/80 bg-[#120B0C] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF858A] bg-red-950/60 px-3 py-1 rounded-full border border-red-800/40">
                <Sparkles size={13} />
                <span>Forecourt Visuals &bull; Khanpur Road</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-white tracking-tight">
                Station Photo Showcase
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-md leading-relaxed">
              Authentic high-resolution photography of our illuminated canopy, Excellium dispensers, 24/7 Welcome mart, and QUARTZ car wash in Rahim Yar Khan.
            </p>
          </div>
        </div>

        {/* Gallery Slider Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-md border border-white/10 p-2 sm:p-3 bg-black/40 backdrop-blur-sm shadow-2xl">
            <ParcoGallerySlider images={parcoStation.gallery} interval={2800} />
          </div>
        </div>
      </section>

      {/* =========================================================================
          LOCATION & COORDINATES: Executive Split Luxury Card & Live GPS Map
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Executive Station Card */}
            <div className="lg:col-span-5 bg-white border border-neutral-200/90 p-8 sm:p-10 rounded-md shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between space-y-8 relative overflow-hidden">
              {/* Subtle brand top accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-parco-red via-red-500 to-parco-dark" />

              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-parco-red uppercase tracking-wider mb-2">
                    <MapPin size={13} />
                    <span>Location &amp; Coordinates</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#15120D]">
                    Mashaal Total PARCO Station
                  </h3>
                  <p className="text-xs text-[#7A7265] mt-1">
                    District Rahim Yar Khan &bull; Khanpur Road Corridor
                  </p>
                </div>

                {/* Info Blocks with Clean Styling */}
                <div className="space-y-4 text-xs sm:text-sm text-[#474136]">
                  <div className="p-4 rounded-sm bg-[#FFFDFD] border border-parco-border/70 space-y-1">
                    <span className="font-semibold text-[#15120D] block text-xs uppercase tracking-wider text-parco-red">
                      Forecourt Address
                    </span>
                    <p className="leading-relaxed font-medium text-[#15120D]">
                      {parcoStation.fullAddress}
                    </p>
                  </div>

                  <div className="p-4 rounded-sm bg-[#FAF8F5] border border-neutral-200/80 space-y-1">
                    <span className="font-semibold text-[#15120D] block text-xs uppercase tracking-wider text-neutral-500">
                      Operational Schedule
                    </span>
                    <p className="leading-relaxed text-[#15120D] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Continuous 24 Hours a day &bull; 7 Days a week &bull; 365 Days
                    </p>
                  </div>

                  <div className="p-4 rounded-sm bg-[#FAF8F5] border border-neutral-200/80 space-y-1">
                    <span className="font-semibold text-[#15120D] block text-xs uppercase tracking-wider text-neutral-500">
                      GPS Satellite Coordinates
                    </span>
                    <p className="font-mono text-xs text-[#15120D]">
                      28.4211563&deg; N, 70.3013898&deg; E
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-neutral-100">
                <a
                  href={parcoStation.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-parco-red hover:bg-parco-dark text-white text-sm font-semibold py-3.5 px-6 rounded-sm transition-all text-center shadow-[0_4px_16px_rgba(193,39,45,0.3)] hover:shadow-[0_6px_20px_rgba(193,39,45,0.5)]"
                >
                  <Navigation size={15} />
                  <span>Open in Google Maps Navigation</span>
                  <ExternalLink size={13} className="opacity-70 ml-1" />
                </a>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 border border-neutral-300 hover:bg-[#FAECEC] hover:border-parco-red/40 text-[#15120D] text-sm font-medium py-3 px-6 rounded-sm transition-all text-center"
                >
                  <span>Contact Station Manager Desk &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right Embedded Interactive Map in Luxury Frame */}
            <div className="lg:col-span-7 min-h-[460px] rounded-md overflow-hidden border border-neutral-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative bg-neutral-100">
              <iframe
                title="Total PARCO Station Location Map - Khanpur Road, Rahim Yar Khan"
                src={parcoStation.embedMapUrl}
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
