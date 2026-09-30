import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    title: "Certified fuel dispensers",
    subtitle: "Petrol · Hi-Octane · Diesel",
    description:
      "High-performance Euro-5 diesel, RON 92 unleaded, and 97 RON high-octane gasoline dispensed through calibrated digital pumps.",
    href: "/services#fuels",
  },
  {
    title: "Forecourt convenience",
    subtitle: "Mart · Shop Stop",
    description:
      "Well-stocked stores offering hot tea, chilled beverages, snacks, engine oils, and essentials for everyday commuters and highway travelers.",
    href: "/services#convenience",
  },
  {
    title: "Worship & prayer halls",
    subtitle: "Dedicated prayer & wudu",
    description:
      "Quiet, air-conditioned prayer spaces with immaculate ablution facilities maintained separately for men and women.",
    href: "/services",
  },
  {
    title: "Sanitized restrooms",
    subtitle: "Inspected regularly",
    description:
      "Clean, hygienic washrooms maintained around the clock to offer motorists and families a comfortable rest stop.",
    href: "/services",
  },
  {
    title: "Digital air & water",
    subtitle: "Complimentary forecourt check",
    description:
      "Precision tire pressure gauges and radiator water fill points manned by trained attendants.",
    href: "/services#checks",
  },
  {
    title: "Commercial fleet fueling",
    subtitle: "PSO Fleet Card & bulk accounts",
    description:
      "Structured volume agreements, transparent digital billing, and priority high-flow diesel bays for transport companies.",
    href: "/services#fleet",
  },
];

export const QuickServices: React.FC = () => {
  return (
    <section className="bg-mashal-bone text-mashal-charcoal">
      <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Sticky heading */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow>Comprehensive services</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-8 text-balance font-display text-[clamp(1.9rem,3vw,2.6rem)] font-normal leading-[1.15] tracking-[-0.015em]">
                  Essential forecourt provisions for{" "}
                  <span className="text-mashal-gold-deep">every journey.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.16} className="mt-10">
                <TextLink href="/services">Explore all services</TextLink>
              </Reveal>
            </div>
          </div>

          {/* Index list */}
          <ol className="border-t border-mashal-charcoal/20 lg:col-span-8">
            {services.map((item, i) => (
              <li key={item.title} className="border-b border-mashal-line">
                <Reveal delay={Math.min(i * 0.05, 0.2)}>
                  <Link
                    href={item.href}
                    className="group grid grid-cols-[2.75rem_1fr_auto] gap-x-2 py-9 sm:grid-cols-[4.5rem_1fr_auto] sm:py-11"
                  >
                    <span className="pt-1.5 font-display text-[17px] tabular-nums text-mashal-gold-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="block">
                      <span className="block font-display text-[clamp(1.4rem,2vw,1.7rem)] font-normal leading-[1.15] tracking-[-0.01em] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-2">
                        {item.title}
                      </span>
                      <span className="mt-3 block text-[13px] font-medium uppercase tracking-[0.14em] text-mashal-gold-muted">
                        {item.subtitle}
                      </span>
                      <span className="mt-5 block max-w-[34rem] text-[15px] leading-7 text-mashal-ink-soft">
                        {item.description}
                      </span>
                    </span>

                    <span
                      aria-hidden
                      className="self-start pt-2 text-mashal-charcoal/30 transition-[transform,color] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-0.5 group-hover:translate-x-1 group-hover:text-mashal-gold"
                    >
                      <ArrowUpRight size={26} strokeWidth={1.1} />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
