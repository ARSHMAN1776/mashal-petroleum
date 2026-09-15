import React from "react";
import { FlameIcon } from "@/components/ui/FlameIcon";
import { Fuel, Clock, Gauge } from "lucide-react";

export const IntroStrip: React.FC = () => {
  return (
    <section className="relative bg-[#FAF8F5] text-[#0A111F] py-16 sm:py-20 lg:py-24 border-b border-neutral-200/70 overflow-hidden">
      {/* Subtle Atmospheric Warm Radial Background Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-amber-100/25 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[250px] bg-gradient-to-tl from-amber-50/30 via-transparent to-transparent blur-2xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow with Delicate Horizontal Gold Lines */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 mb-1.5">
            <div className="h-[1px] w-8 sm:w-14 bg-gradient-to-r from-transparent via-[#C89A3C]/60 to-[#C89A3C]" />
            <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8C7238]">
              <FlameIcon size={13} className="text-[#C89A3C] flex-shrink-0" />
              <span>THE MASHAL COMMITMENT</span>
            </div>
            <div className="h-[1px] w-8 sm:w-14 bg-gradient-to-l from-transparent via-[#C89A3C]/60 to-[#C89A3C]" />
          </div>

          {/* Large Editorial Headline */}
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] text-[#0A111F] font-normal tracking-tight leading-[1.16]">
            A family-run company. Two distinct outlets.{" "}
            <span className="text-[#C89A3C] block sm:inline">
              One uncompromising standard.
            </span>
          </h2>

          {/* Refined Description Paragraph */}
          <p className="text-xs sm:text-sm md:text-[15px] lg:text-base text-[#525B6A] max-w-2xl mx-auto leading-relaxed font-normal pt-1.5">
            Founded on principles of transparent measurement and motorist dignity,
            Mashal Petroleum serves thousands of private vehicle owners, transit
            drivers, and industrial logistics fleets daily across our Rahim Yar Khan
            and Raiwind forecourts. Whether you pull into our Total PARCO station or
            our PSO hub, you receive pure fuel, accurate meters, and a respectful
            pause in your journey.
          </p>
        </div>

        {/* 3-Column Editorial Feature System with Navy Center Anchor */}
        <div className="pt-12 sm:pt-16 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch max-w-5xl mx-auto">
          {/* Feature 1: 100% Refinery Sealed */}
          <div className="bg-white rounded-[18px] border border-neutral-200/80 p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)] hover:border-[#C89A3C]/40 transition-all flex flex-col justify-between group">
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#C89A3C]/40 bg-[#C89A3C]/10 flex items-center justify-center text-[#C89A3C] flex-shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_12px_rgba(200,154,60,0.1)]">
                  <Fuel size={19} />
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl text-[#0A111F] font-normal tracking-tight block leading-tight">
                    100%
                  </span>
                  <h3 className="font-serif text-base sm:text-[17px] text-[#0A111F] font-normal tracking-tight">
                    Refinery Sealed
                  </h3>
                </div>
              </div>
              <div className="h-[1px] w-full bg-neutral-100" />
              <p className="text-xs sm:text-[13px] text-[#5A6474] leading-relaxed">
                Tanker dispatches received directly from official terminals without
                third-party blending.
              </p>
            </div>
          </div>

          {/* Feature 2: 24/7 Continuous Service (Featured Luxury White & Gold) */}
          <div className="relative bg-gradient-to-b from-[#FFFDF9] to-[#FAF6EE] text-[#0A111F] rounded-[18px] border-2 border-[#C89A3C]/40 p-6 sm:p-7 shadow-[0_15px_35px_rgba(200,154,60,0.08)] flex flex-col justify-between overflow-hidden group transform md:-translate-y-1 hover:shadow-[0_20px_40px_rgba(200,154,60,0.14)] hover:border-[#C89A3C]/70 transition-all">
            {/* Top Gold Accent Line */}
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#C89A3C] to-transparent" />

            <div className="space-y-4 sm:space-y-5 relative z-10">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#C89A3C]/50 bg-[#C89A3C]/15 flex items-center justify-center text-[#C89A3C] flex-shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(200,154,60,0.15)]">
                  <Clock size={19} />
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl text-[#C89A3C] font-normal tracking-tight block leading-tight">
                    24/7
                  </span>
                  <h3 className="font-serif text-base sm:text-[17px] text-[#0A111F] font-normal tracking-tight">
                    Continuous Service
                  </h3>
                </div>
              </div>
              <div className="h-[1px] w-full bg-[#EAE5D9]" />
              <p className="text-xs sm:text-[13px] text-[#5A6474] leading-relaxed">
                Illuminated forecourts, clean restrooms, and operational prayer
                halls around the clock.
              </p>
            </div>
          </div>

          {/* Feature 3: 0.0% Measurement Tolerance */}
          <div className="bg-white rounded-[18px] border border-neutral-200/80 p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)] hover:border-[#C89A3C]/40 transition-all flex flex-col justify-between group">
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#C89A3C]/40 bg-[#C89A3C]/10 flex items-center justify-center text-[#C89A3C] flex-shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_12px_rgba(200,154,60,0.1)]">
                  <Gauge size={19} />
                </div>
                <div>
                  <span className="font-serif text-2xl sm:text-3xl text-[#0A111F] font-normal tracking-tight block leading-tight">
                    0.0%
                  </span>
                  <h3 className="font-serif text-base sm:text-[17px] text-[#0A111F] font-normal tracking-tight">
                    Measurement Tolerance
                  </h3>
                </div>
              </div>
              <div className="h-[1px] w-full bg-neutral-100" />
              <p className="text-xs sm:text-[13px] text-[#5A6474] leading-relaxed">
                Routine physical calibration checks to guarantee the exact volume
                displayed on the dispenser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
