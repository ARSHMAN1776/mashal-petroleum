import React from "react";
import { parcoStation, psoStation } from "@/lib/station-data";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LuxButton } from "@/components/ui/LuxButton";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";

const locations = [
  {
    key: "parco",
    dot: "bg-parco-red",
    link: "text-parco-red",
    city: "Rahim Yar Khan",
    name: "Mashaal Total PARCO Station",
    address: parcoStation.fullAddress,
    mapsUrl: parcoStation.googleMapsUrl,
  },
  {
    key: "pso",
    dot: "bg-pso-green",
    link: "text-pso-green",
    city: "Raiwind, Lahore",
    name: "Mashaal PSO Station",
    address: psoStation.fullAddress,
    mapsUrl: psoStation.googleMapsUrl,
  },
];

export const ContactPreview: React.FC = () => {
  return (
    <section className="bg-mashal-bone text-mashal-charcoal">
      <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <Eyebrow>Direct station access</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-8 font-display text-[clamp(1.9rem,3.2vw,2.75rem)] font-normal leading-[1.15] tracking-[-0.015em]">
                Locate our{" "}
                <span className="text-mashal-gold-deep">forecourts.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <LuxButton href="/contact" variant="dark">
              Open the contact desk
            </LuxButton>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 border-t border-mashal-charcoal/20 lg:mt-16 lg:grid-cols-2">
          {locations.map((loc, i) => (
            <Reveal key={loc.key} delay={i * 0.1}>
              <div
                className={`py-12 lg:py-16 ${
                  i === 0
                    ? "lg:border-r lg:border-mashal-line lg:pr-14"
                    : "border-t border-mashal-line lg:border-t-0 lg:pl-14"
                }`}
              >
                <p className="flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.14em] text-mashal-ink-soft">
                  <span className={`h-1.5 w-1.5 rounded-full ${loc.dot}`} aria-hidden />
                  {loc.city}
                </p>
                <h3 className="mt-6 font-display text-[clamp(1.5rem,2.2vw,1.9rem)] font-normal leading-[1.15] tracking-[-0.01em]">
                  {loc.name}
                </h3>
                <p className="mt-6 max-w-[26rem] text-[15.5px] leading-7 text-mashal-ink-soft">
                  {loc.address}
                </p>
                <p className="mt-2 text-[15.5px] text-mashal-ink-soft">
                  Open 24 hours &middot; 7 days a week
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-x-9 gap-y-4">
                  <TextLink href={loc.mapsUrl} className={loc.link}>
                    Directions on Google Maps
                  </TextLink>
                  <TextLink href="/contact">Contact desk</TextLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
