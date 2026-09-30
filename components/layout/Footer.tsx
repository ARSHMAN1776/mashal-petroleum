import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FlameIcon } from "@/components/ui/FlameIcon";
import { parcoStation, psoStation } from "@/lib/station-data";

const directory = [
  { name: "Home", href: "/" },
  { name: "PARCO Station", href: "/parco" },
  { name: "PSO Station", href: "/pso" },
  { name: "Services", href: "/services" },
  { name: "Contact Desk", href: "/contact" },
];

const stations = [
  {
    key: "parco",
    label: "Total PARCO Station",
    dot: "bg-[#D6484E]",
    address: parcoStation.shortAddress,
    href: "/parco",
    cta: "View PARCO forecourt",
  },
  {
    key: "pso",
    label: "PSO Station",
    dot: "bg-[#2E9A66]",
    address: psoStation.shortAddress,
    href: "/pso",
    cta: "View PSO forecourt",
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-mashal-charcoal text-[#E9E2D2]">
      <div className="mx-auto max-w-[1320px] px-6 pb-10 pt-24 lg:px-10 lg:pt-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              aria-label="Mashaal Petroleum home"
              className="inline-flex items-center gap-3"
            >
              <FlameIcon size={26} className="text-mashal-gold" />
              <span className="font-display text-[30px] font-normal tracking-[-0.01em] text-[#FAF8F5]">
                Mashaal Petroleum
              </span>
            </Link>
            <p className="mt-8 max-w-[26rem] text-[15px] leading-[1.8] text-[#A79F8D]">
              An independent, family-run petroleum retail company in Punjab, Pakistan. Two premier
              Total PARCO and Pakistan State Oil forecourts, with certified volume calibration and
              hospitality that never closes.
            </p>
          </div>

          {/* Stations */}
          {stations.map((s, i) => (
            <div
              key={s.key}
              className={i === 0 ? "lg:col-span-3 lg:col-start-7" : "lg:col-span-2"}
            >
              <h4 className="flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.14em] text-mashal-gold">
                <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} aria-hidden />
                {s.label}
              </h4>
              <p className="mt-6 text-[15px] leading-7 text-[#D9D1BF]">{s.address}</p>
              <p className="mt-2 text-[14px] text-[#8F8776]">Open 24 hours, 365 days</p>
              <Link
                href={s.href}
                className="group mt-6 inline-flex items-center gap-1.5 text-[14px] text-[#FAF8F5] transition-colors duration-500 hover:text-mashal-gold"
              >
                <span>{s.cta}</span>
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          ))}

          {/* Directory */}
          <div className="lg:col-span-2">
            <h4 className="text-[13px] font-medium uppercase tracking-[0.14em] text-mashal-gold">
              Directory
            </h4>
            <ul className="mt-6 space-y-3.5">
              {directory.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-[#D9D1BF] transition-colors duration-500 hover:text-mashal-gold"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal / credits */}
        <div className="mt-24 flex flex-col gap-4 border-t border-white/10 pt-8 text-[13px] text-[#8F8776] md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Mashaal Petroleum. All rights reserved. Punjab, Pakistan.</p>
          <p>Franchised under Total PARCO Pakistan Ltd. &amp; Pakistan State Oil (PSO).</p>
          <p>
            Built by{" "}
            <a
              href="https://www.fastamsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D9D1BF] underline decoration-white/20 underline-offset-4 transition-colors duration-500 hover:text-mashal-gold hover:decoration-mashal-gold"
            >
              Fastam Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
