import React from "react";
import Link from "next/link";
import { FlameIcon } from "@/components/ui/FlameIcon";
import { parcoStation, psoStation } from "@/lib/station-data";
import { Clock, ArrowUpRight, MapPin, ChevronRight, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF9F6] text-[#15120D] border-t border-[#EAE5D9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 sm:pt-16 sm:pb-12">
        {/* Main 4-Column Clean Typographic Grid (No Cards/Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#EAE5D9]">
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group focus:outline-none"
              aria-label="Mashal Petroleum Home"
            >
              <div className="w-8 h-8 rounded-full bg-[#FAF6EE] border border-[#E6DEC8] flex items-center justify-center text-[#C89A3C] group-hover:scale-105 transition-transform shadow-[0_0_10px_rgba(200,154,60,0.15)]">
                <FlameIcon size={16} />
              </div>
              <span className="font-serif text-xl tracking-tight text-[#15120D] group-hover:text-[#C89A3C] transition-colors">
                Mashal Petroleum
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#5A5245] leading-relaxed font-normal max-w-sm">
              An independent, family-run petroleum retail enterprise in Punjab, Pakistan. Operating premier Total PARCO and Pakistan State Oil (PSO) forecourts with certified volume calibration and 24/7 hospitality.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#8C7238] bg-[#FAF6EE] border border-[#E6DEC8] px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C89A3C] animate-pulse" />
                <span>Punjab Forecourt Retail Network</span>
              </span>
            </div>
          </div>

          {/* Column 2: Total PARCO Station Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-parco-red ring-4 ring-parco-red/20" />
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#15120D]">
                Total PARCO Station
              </h4>
            </div>

            <div className="space-y-2 text-xs text-[#5A5245]">
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-parco-red flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">{parcoStation.shortAddress}</p>
              </div>
              <div className="flex items-center gap-2 text-[#7A7265]">
                <Clock size={12} className="flex-shrink-0 text-parco-red" />
                <span>Open 24/7 &bull; 365 Days</span>
              </div>
            </div>

            <div className="pt-1">
              <Link
                href="/parco"
                className="inline-flex items-center gap-1 text-xs font-medium text-parco-red hover:text-parco-dark transition-colors group"
              >
                <span>View PARCO Forecourt</span>
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Column 3: PSO Station Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pso-green ring-4 ring-pso-green/20" />
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#15120D]">
                PSO Station
              </h4>
            </div>

            <div className="space-y-2 text-xs text-[#5A5245]">
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-pso-green flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">{psoStation.shortAddress}</p>
              </div>
              <div className="flex items-center gap-2 text-[#7A7265]">
                <Clock size={12} className="flex-shrink-0 text-pso-green" />
                <span>Open 24/7 &bull; 365 Days</span>
              </div>
            </div>

            <div className="pt-1">
              <Link
                href="/pso"
                className="inline-flex items-center gap-1 text-xs font-medium text-pso-green hover:text-pso-dark transition-colors group"
              >
                <span>View PSO Forecourt</span>
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Column 4: Quick Directory (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C7238]">
              Directory
            </h4>
            <ul className="space-y-2 text-xs text-[#5A5245]">
              <li>
                <Link href="/" className="hover:text-[#C89A3C] flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={12} className="text-[#8C7238] group-hover:text-[#C89A3C] transition-colors" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/parco" className="hover:text-parco-red flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={12} className="text-[#8C7238] group-hover:text-parco-red transition-colors" />
                  <span>PARCO Station</span>
                </Link>
              </li>
              <li>
                <Link href="/pso" className="hover:text-pso-green flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={12} className="text-[#8C7238] group-hover:text-pso-green transition-colors" />
                  <span>PSO Station</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#C89A3C] flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={12} className="text-[#8C7238] group-hover:text-[#C89A3C] transition-colors" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C89A3C] flex items-center gap-1.5 transition-colors group">
                  <ChevronRight size={12} className="text-[#8C7238] group-hover:text-[#C89A3C] transition-colors" />
                  <span>Contact Desk</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Clean Aligned 3-Item Layout */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7A7265] text-center md:text-left">
          {/* Copyright */}
          <p className="order-2 md:order-1">
            &copy; {new Date().getFullYear()} Mashal Petroleum. All rights reserved. Punjab, Pakistan.
          </p>

          {/* Dealer Attribution */}
          <p className="order-1 md:order-2 text-[11px] text-[#7A7265]">
            Franchised under Total PARCO Pakistan Ltd. &amp; Pakistan State Oil (PSO).
          </p>

          {/* Fastam Solutions Credit */}
          <div className="order-3 flex items-center gap-1 text-[11px]">
            <span>Built by</span>
            <a
              href="https://www.fastamsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8C7238] hover:text-[#15120D] font-medium inline-flex items-center gap-0.5 transition-colors hover:underline"
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
