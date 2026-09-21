import React from "react";
import Link from "next/link";
import { parcoStation, psoStation } from "@/lib/station-data";
import { MapPin, Clock, ArrowRight } from "lucide-react";

export const ContactPreview: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-5">
          <div className="max-w-xl space-y-1.5">
            <span className="text-[10px] sm:text-xs font-semibold text-[#8C7238] uppercase tracking-[0.2em] block">
              Direct Station Access
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#15120D] font-normal tracking-tight">
              Locate our forecourts.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#C89A3C] hover:bg-[#B68B34] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow active:scale-95 self-start md:self-auto text-center"
          >
            <span>Open Dedicated Contact Desk</span>
            <ArrowRight size={14} className="flex-shrink-0" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {/* PARCO Quick Card */}
          <div className="bg-[#FFFDFD] border border-parco-border p-5 sm:p-6 rounded-[16px] space-y-4 relative shadow-sm hover:border-parco-red/40 transition-all">
            <div className="flex items-center justify-between border-b border-parco-border/60 pb-3.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-parco-red" />
                <h3 className="font-serif text-lg sm:text-xl text-[#15120D] font-normal">
                  Mashaal Total PARCO Station
                </h3>
              </div>
              <span className="text-[11px] sm:text-xs text-parco-red font-medium">Rahim Yar Khan</span>
            </div>

            <div className="space-y-2.5 text-xs text-[#574F41]">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-parco-red flex-shrink-0 mt-0.5" />
                <span>{parcoStation.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2 text-[#8C8270]">
                <Clock size={14} className="flex-shrink-0" />
                <span>Open 24 Hours &bull; 7 Days a Week</span>
              </div>
            </div>

            <div className="pt-1 flex flex-wrap items-center gap-3 text-xs">
              <a
                href={parcoStation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-parco-red hover:text-parco-dark transition-colors"
              >
                <span>Get directions on Google Maps</span>
                <ArrowRight size={12} />
              </a>
              <span className="text-neutral-300">&bull;</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 font-medium text-[#8C7238] hover:text-[#15120D] transition-colors"
              >
                <span>Contact Desk</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* PSO Quick Card */}
          <div className="bg-[#FAFCFB] border border-pso-border p-5 sm:p-6 rounded-[16px] space-y-4 relative shadow-sm hover:border-pso-green/40 transition-all">
            <div className="flex items-center justify-between border-b border-pso-border/60 pb-3.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pso-green" />
                <h3 className="font-serif text-lg sm:text-xl text-[#15120D] font-normal">
                  Mashaal PSO Station
                </h3>
              </div>
              <span className="text-[11px] sm:text-xs text-pso-green font-medium">Raiwind, Lahore</span>
            </div>

            <div className="space-y-2.5 text-xs text-[#574F41]">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-pso-green flex-shrink-0 mt-0.5" />
                <span>{psoStation.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2 text-[#8C8270]">
                <Clock size={14} className="flex-shrink-0" />
                <span>Open 24 Hours &bull; 7 Days a Week</span>
              </div>
            </div>

            <div className="pt-1 flex flex-wrap items-center gap-3 text-xs">
              <a
                href={psoStation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-pso-green hover:text-pso-dark transition-colors"
              >
                <span>Get directions on Google Maps</span>
                <ArrowRight size={12} />
              </a>
              <span className="text-neutral-300">&bull;</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 font-medium text-[#8C7238] hover:text-[#15120D] transition-colors"
              >
                <span>Contact Desk</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
