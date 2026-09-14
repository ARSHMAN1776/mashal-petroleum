import React from "react";
import Link from "next/link";
import { FlameIcon } from "@/components/ui/FlameIcon";
import { parcoStation, psoStation } from "@/lib/station-data";
import { Clock, ArrowUpRight, MapPin, ChevronRight, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030914] text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 sm:pt-16 sm:pb-12">
        {/* Main 4-Column Clean Typographic Grid (No Cards/Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group focus:outline-none"
              aria-label="Mashal Petroleum Home"
            >
              <div className="w-8 h-8 rounded-full bg-[#F3C351]/10 border border-[#F3C351]/30 flex items-center justify-center text-[#F3C351] group-hover:scale-105 transition-transform shadow-[0_0_12px_rgba(243,195,81,0.25)]">
                <FlameIcon size={16} />
              </div>
              <span className="font-serif text-xl tracking-tight text-white group-hover:text-[#F3C351] transition-colors">
                Mashal Petroleum
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal max-w-sm">
              An independent, family-run petroleum retail enterprise in Punjab, Pakistan. Operating premier Total PARCO and Pakistan State Oil (PSO) forecourts with certified volume calibration and 24/7 hospitality.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#F3C351] bg-white/5 border border-[#F3C351]/25 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F3C351] animate-pulse" />
                <span>Punjab Forecourt Retail Network</span>
              </span>
            </div>
          </div>

          {/* Column 2: Total PARCO Station Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-parco-red ring-4 ring-parco-red/20" />
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                Total PARCO Station
              </h4>
            </div>

            <div className="space-y-2 text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-[#FF858A] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">{parcoStation.shortAddress}</p>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <Clock size={12} className="flex-shrink-0 text-[#FF858A]" />
                <span>Open 24/7 &bull; 365 Days</span>
              </div>
            </div>

            <div className="pt-1">
              <Link
                href="/parco"
                className="inline-flex items-center gap-1 text-xs font-medium text-[#FF858A] hover:text-white transition-colors group"
              >
                <span>View PARCO Forecourt</span>
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Column 3: PSO Station Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                PSO Station
              </h4>
            </div>

            <div className="space-y-2 text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-[#4ADE80] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">{psoStation.shortAddress}</p>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <Clock size={12} className="flex-shrink-0 text-[#4ADE80]" />
                <span>Open 24/7 &bull; 365 Days</span>
              </div>
            </div>

            <div className="pt-1">
              <Link
                href="/pso"
                className="inline-flex items-center gap-1 text-xs font-medium text-[#4ADE80] hover:text-white transition-colors group"
              >
                <span>View PSO Forecourt</span>
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Column 4: Quick Directory (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F3C351]">
              Directory
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <Link href="/" className="hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={12} className="text-neutral-500 group-hover:text-[#F3C351] transition-colors" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/parco" className="hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={12} className="text-neutral-500 group-hover:text-[#FF858A] transition-colors" />
                  <span>PARCO Station</span>
                </Link>
              </li>
              <li>
                <Link href="/pso" className="hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={12} className="text-neutral-500 group-hover:text-[#4ADE80] transition-colors" />
                  <span>PSO Station</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={12} className="text-neutral-500 group-hover:text-[#F3C351] transition-colors" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={12} className="text-neutral-500 group-hover:text-[#F3C351] transition-colors" />
                  <span>Contact Desk</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Clean Aligned 3-Item Layout */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400 text-center md:text-left">
          {/* Copyright */}
          <p className="order-2 md:order-1">
            &copy; {new Date().getFullYear()} Mashal Petroleum. All rights reserved. Punjab, Pakistan.
          </p>

          {/* Dealer Attribution */}
          <p className="order-1 md:order-2 text-[11px] text-neutral-400">
            Franchised under Total PARCO Pakistan Ltd. &amp; Pakistan State Oil (PSO).
          </p>

          {/* Fastam Solutions Credit */}
          <div className="order-3 flex items-center gap-1 text-[11px]">
            <span>Built by</span>
            <a
              href="https://www.fastamsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F3C351] hover:text-[#FFE5A3] font-medium inline-flex items-center gap-0.5 transition-colors hover:underline"
            >
              <span>Fastam Solutions</span>
              <ExternalLink size={10} className="opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
