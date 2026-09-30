import React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LuxButton } from "@/components/ui/LuxButton";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedPumpDispenser } from "@/components/home/AnimatedPumpDispenser";

const assurances = [
  { title: "Volumetric check", detail: "Physical measure on request" },
  { title: "Direct sourcing", detail: "Refinery-sealed Euro 5" },
  { title: "Open 24/7", detail: "365 continuous days" },
  { title: "Rest & mart", detail: "M-Mart & Shop Stop" },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-mashal-bone text-mashal-charcoal">
      {/* One soft pool of warm light, nothing else */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 -top-56 h-[720px] w-[720px] rounded-full bg-[radial-gradient(closest-side,rgba(200,154,60,0.16),transparent)]"
      />

      <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 gap-14 px-6 pb-16 pt-12 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>Punjab forecourt network</Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-9 max-w-[16ch] text-balance font-display text-[clamp(2.4rem,4.4vw,3.75rem)] font-normal leading-[1.15] tracking-[-0.015em] sm:max-w-none">
              Two iconic forecourts.{" "}
              <span className="text-mashal-gold-deep">
                One uncompromising standard
              </span>{" "}
              of fuel integrity.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-9 max-w-[34rem] text-[17px] leading-[1.8] text-mashal-ink-soft">
              Mashaal Petroleum operates official Total PARCO (Rahim Yar Khan) and Pakistan State
              Oil (Raiwind, Lahore) forecourts. Refinery-sealed fuel, certified digital
              measurement, and dignified highway hospitality.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-11 flex flex-wrap items-center gap-x-9 gap-y-6">
            <LuxButton href="#stations" variant="dark">
              Explore the forecourts
            </LuxButton>
            <TextLink href="/services">Services &amp; forecourt care</TextLink>
          </Reveal>

          <Reveal delay={0.32} className="mt-14 lg:mt-16">
            <dl className="grid grid-cols-2 gap-x-8 gap-y-9 border-t border-mashal-line pt-9 sm:grid-cols-4">
              {assurances.map((item) => (
                <div key={item.title}>
                  <dt className="font-display text-[19px] font-normal tracking-[-0.01em]">
                    {item.title}
                  </dt>
                  <dd className="mt-1.5 text-[13.5px] leading-6 text-mashal-ink-soft">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="lg:col-span-5 lg:pt-6">
          <AnimatedPumpDispenser />
        </Reveal>
      </div>
    </section>
  );
};
