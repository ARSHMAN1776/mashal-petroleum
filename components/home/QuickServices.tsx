import React from "react";
import Link from "next/link";
import {
  Fuel,
  Store,
  Sparkles,
  Users,
  Droplets,
  Truck,
  ArrowRight,
} from "lucide-react";

export const QuickServices: React.FC = () => {
  const services = [
    {
      title: "Certified Fuel Dispensers",
      subtitle: "PETROL • HI-OCTANE • DIESEL",
      description:
        "High-performance Euro-5 diesel, RON 92 unleaded, and 97 RON high-octane gasoline dispensed through calibrated digital pumps.",
      icon: Fuel,
      isFeatured: false,
    },
    {
      title: "Forecourt Convenience",
      subtitle: "MART • SHOP STOP",
      description:
        "Well-stocked stores offering hot tea, chilled beverages, snacks, engine oils, and essentials for everyday commuters and highway travelers.",
      icon: Store,
      isFeatured: true,
    },
    {
      title: "Worship & Prayer Halls",
      subtitle: "DEDICATED PRAYER & WUDU",
      description:
        "Quiet, air-conditioned prayer spaces with immaculate ablution facilities maintained separately for men and women.",
      icon: Sparkles,
      isFeatured: false,
    },
    {
      title: "Sanitized Restrooms",
      subtitle: "INSPECTED REGULARLY",
      description:
        "Clean, hygienic washrooms maintained around the clock to offer motorists and families a comfortable rest stop.",
      icon: Users,
      isFeatured: false,
    },
    {
      title: "Digital Air & Water",
      subtitle: "COMPLIMENTARY FORECOURT CHECK",
      description:
        "Precision tire pressure gauges and radiator water fill points manned by trained attendants.",
      icon: Droplets,
      isFeatured: false,
    },
    {
      title: "Commercial Fleet Fueling",
      subtitle: "PSO FLEET CARD & BULK ACCOUNTS",
      description:
        "Structured volume agreements, transparent digital billing, and priority high-flow diesel bays for transport companies.",
      icon: Truck,
      isFeatured: false,
    },
  ];

  return (
    <section className="relative bg-[#FAF8F5] text-[#0A111F] py-16 sm:py-20 lg:py-24 border-b border-neutral-200/70 overflow-hidden">
      {/* Subtle Atmospheric Warm Radial Background Lights */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[350px] bg-gradient-to-r from-amber-100/25 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[400px] bg-gradient-to-tl from-amber-100/20 via-transparent to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          {/* Left Heading Column */}
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 sm:w-9 h-[1.5px] bg-[#C89A3C]" />
              <span className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8C7238]">
                COMPREHENSIVE SERVICES
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-[#0A111F] font-normal tracking-tight leading-[1.14]">
              Essential forecourt provisions for{" "}
              <span className="text-[#C89A3C] block sm:inline">
                every journey.
              </span>
            </h2>
          </div>

          {/* Right Link */}
          <div className="lg:pb-2 flex-shrink-0">
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-[#C89A3C] hover:text-[#9E7324] transition-colors"
            >
              <span>Explore all services and technical specs</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* 3 × 2 Editorial Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {services.map((item, idx) => {
            const Icon = item.icon;

            if (item.isFeatured) {
              return (
                /* Featured Center White & Gold Card */
                <Link
                  key={idx}
                  href="/services"
                  className="group relative bg-gradient-to-b from-[#FFFDF9] to-[#FAF6EE] text-[#0A111F] rounded-[18px] border-2 border-[#C89A3C]/45 p-5 sm:p-6 lg:p-7 shadow-[0_12px_35px_rgba(200,154,60,0.08)] flex flex-col justify-between overflow-hidden md:-translate-y-1 hover:shadow-[0_18px_45px_rgba(200,154,60,0.15)] hover:border-[#C89A3C] transition-all duration-300"
                >
                  {/* Subtle Gold Accent Top Line */}
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#C89A3C] to-transparent" />

                  <div className="space-y-4 sm:space-y-5 relative z-10">
                    {/* Top Icon & Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#C89A3C]/50 bg-[#C89A3C]/15 flex items-center justify-center text-[#C89A3C] group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(200,154,60,0.15)]">
                        <Icon size={20} />
                      </div>
                      <div className="w-7 h-7 rounded-full border border-[#C89A3C]/40 flex items-center justify-center text-[#8C7238] group-hover:translate-x-0.5 group-hover:border-[#C89A3C] group-hover:bg-[#C89A3C]/10 transition-all">
                        <ArrowRight size={12} />
                      </div>
                    </div>

                    {/* Middle: Title & Subtitle */}
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg sm:text-xl text-[#0A111F] font-normal tracking-tight group-hover:text-[#C89A3C] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-[#8C7238] uppercase">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="h-[1px] w-full bg-[#EAE5D9] group-hover:bg-[#C89A3C]/30 transition-colors" />

                    {/* Bottom: Description */}
                    <p className="text-xs sm:text-[13px] text-[#5A6474] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            }

            return (
              /* Standard Warm Ivory / White Cards */
              <Link
                key={idx}
                href="/services"
                className="group bg-white rounded-[18px] border border-neutral-200/80 p-5 sm:p-6 lg:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)] hover:border-[#C89A3C]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4 sm:space-y-5">
                  {/* Top Icon & Arrow */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#C89A3C]/40 bg-[#C89A3C]/10 flex items-center justify-center text-[#C89A3C] group-hover:scale-105 transition-transform shadow-[0_0_12px_rgba(200,154,60,0.1)]">
                      <Icon size={20} />
                    </div>
                    <div className="w-7 h-7 rounded-full border border-neutral-300/80 flex items-center justify-center text-[#8C7238] group-hover:translate-x-0.5 group-hover:border-[#C89A3C] group-hover:bg-[#C89A3C]/10 transition-all">
                      <ArrowRight size={12} />
                    </div>
                  </div>

                  {/* Middle: Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg sm:text-xl text-[#0A111F] font-normal tracking-tight group-hover:text-[#C89A3C] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-[#8C7238] uppercase">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] w-full bg-neutral-100 group-hover:bg-[#C89A3C]/20 transition-colors" />

                  {/* Bottom: Description */}
                  <p className="text-xs sm:text-[13px] text-[#5A6474] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
