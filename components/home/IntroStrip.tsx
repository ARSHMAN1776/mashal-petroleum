import React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const commitments = [
  {
    value: "100%",
    label: "Refinery sealed",
    text: "Tanker dispatches received directly from official terminals without third-party blending.",
  },
  {
    value: "24/7",
    label: "Continuous service",
    text: "Illuminated forecourts, clean restrooms, and operational prayer halls around the clock.",
  },
  {
    value: "0.0%",
    label: "Measurement tolerance",
    text: "Routine physical calibration checks to guarantee the exact volume displayed on the dispenser.",
  },
];

export const IntroStrip: React.FC = () => {
  return (
    <section className="bg-mashal-bone text-mashal-charcoal">
      <div className="mx-auto max-w-[1320px] px-6 pb-20 pt-4 lg:px-10 lg:pb-28 lg:pt-4">
        <div className="border-t border-mashal-line pt-14 lg:pt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <Reveal>
                <Eyebrow>The Mashaal commitment</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-8 text-balance font-display text-[clamp(1.9rem,3.2vw,2.75rem)] font-normal leading-[1.15] tracking-[-0.015em]">
                  A family-run company. Two distinct outlets.{" "}
                  <span className="text-mashal-gold-deep">
                    One uncompromising standard.
                  </span>
                </h2>
              </Reveal>
            </div>

            <Reveal delay={0.16} className="lg:col-span-4 lg:self-end">
              <p className="max-w-[28rem] text-[16px] leading-[1.85] text-mashal-ink-soft">
                Founded on transparent measurement and motorist dignity, Mashaal Petroleum serves
                thousands of private vehicle owners, transit drivers, and logistics fleets every day
                across our Rahim Yar Khan and Raiwind forecourts. Whether you pull into our Total
                PARCO station or our PSO hub, you receive pure fuel, accurate meters, and a
                respectful pause in your journey.
              </p>
            </Reveal>
          </div>

          <dl className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 lg:mt-20 lg:grid-cols-3">
            {commitments.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.1}>
                <div className="border-t border-mashal-charcoal/20 pt-8">
                  <dt className="sr-only">{item.label}</dt>
                  <dd>
                    <span
                      aria-hidden
                      className="block font-display text-[clamp(2.8rem,4.4vw,3.75rem)] font-normal leading-none tracking-[-0.015em] text-mashal-charcoal"
                    >
                      {item.value}
                    </span>
                    <span className="sr-only">{item.value} </span>
                    <span className="mt-7 block text-[13px] font-medium uppercase tracking-[0.14em] text-mashal-gold-muted">
                      {item.label}
                    </span>
                    <span className="mt-4 block max-w-[22rem] text-[15px] leading-7 text-mashal-ink-soft">
                      {item.text}
                    </span>
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
