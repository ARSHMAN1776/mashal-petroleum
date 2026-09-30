import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { parcoStation } from "@/lib/station-data";
import { ParcoGallerySlider } from "@/components/ui/ParcoGallerySlider";
import {
  StationAssurance,
  StationFuels,
  StationAmenities,
  StationLocation,
  type StationAccent,
} from "@/components/station/StationSections";
import { Navigation, Clock, Award, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "No. 1 Petrol in Rahim Yar Khan | Total PARCO Khanpur Road",
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

const accent: StationAccent = {
  text: "text-parco-red",
  dot: "bg-parco-red",
};

const assurances = [
  { title: "Direct refinery sourcing", detail: "100% sealed supply pipeline" },
  { title: "Digital calibration", detail: "Physical 5L/10L verification" },
  { title: "24/7 forecourt service", detail: "Day & night attendants" },
  { title: "QUARTZ service bay", detail: "Certified Total lubricants" },
];

const amenityTags: string[] = [
  "24/7 Fresh Stock",
  "A/C & Dedicated Wudu",
  "Sanitized Roster",
  "Attendant Serviced",
  "TotalEnergies QUARTZ",
  "High-Flow Commercial",
];

const fuelSpecs = [
  {
    tag: "Daily Unleaded",
    octane: "RON 92",
    specs: ["Direct Refinery Sealed", "Clean Injector Additives", "Standard Commuter Grade"],
  },
  {
    tag: "High Performance",
    octane: "RON 97",
    specs: ["Anti-Knock Formulation", "Turbo & High Compression", "Maximum Acceleration"],
  },
  {
    tag: "Low Sulfur Diesel",
    octane: "Euro-5",
    specs: ["High Cetane Index", "Heavy Logistics & Buses", "Enhanced Fuel Economy"],
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

      <StationAssurance items={assurances} />

      <StationFuels
        eyebrow="Refinery formulations"
        heading={
          <>
            No. 1 certified PARCO fuel grades in{" "}
            <span className="text-mashal-gold-deep">Rahim Yar Khan.</span>
          </>
        }
        intro="Direct state refinery sourcing with uncompromised seal integrity, formulated for engine longevity, high compression efficiency, and commercial hauling across District Rahim Yar Khan."
        fuels={parcoStation.fuels}
        specs={fuelSpecs}
        accent={accent}
        availability="All three grades available on the forecourt · Refinery verified · Total PARCO"
      />

      <StationAmenities
        eyebrow="Full forecourt services"
        heading={
          <>
            Forecourt amenities &amp;{" "}
            <span className="text-mashal-gold-deep">services.</span>
          </>
        }
        intro="Engineered for commuter convenience, long-haul highway drivers, and commercial transit fleets traveling through Rahim Yar Khan."
        amenities={parcoStation.amenities}
        tags={amenityTags}
        accent={accent}
      />

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

      <StationLocation
        station={parcoStation}
        corridor="District Rahim Yar Khan · Khanpur Road Corridor"
        coordinates="28.4211563° N, 70.3013898° E"
        mapTitle="Total PARCO Station Location Map - Khanpur Road, Rahim Yar Khan"
        accent={accent}
      />
    </div>
  );
}
