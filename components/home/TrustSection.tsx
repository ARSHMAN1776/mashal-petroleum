import React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LuxButton } from "@/components/ui/LuxButton";
import { Reveal } from "@/components/ui/Reveal";

const trustPoints = [
  {
    step: "01",
    badge: "Authentic sourcing",
    title: "Direct refinery sourcing & seal integrity",
    description:
      "Every fuel drop is sourced straight from state-authorized PARCO and PSO supply terminals under strict seals. We do not blend, dilute, or purchase secondary wholesale stock.",
    metricValue: "100%",
    metricLabel: "Terminal direct dispatch",
    metricSub: "Zero secondary blending",
  },
  {
    step: "02",
    badge: "Precision calibration",
    title: "Certified digital volume calibration",
    description:
      "Our multi-product dispensers undergo routine physical calibration tests using certified measures, ensuring that the volume printed on your receipt is exactly what enters your fuel tank.",
    metricValue: "0.0%",
    metricLabel: "Measurement variance",
    metricSub: "Daily standard verification",
  },
  {
    step: "03",
    badge: "Professional crew",
    title: "Accountable, permanent forecourt staff",
    description:
      "Our station managers, cashiers, and attendants are permanent members of our team, trained to serve with dignity, honesty, and prompt attention.",
    metricValue: "24/7",
    metricLabel: "Supervised operation",
    metricSub: "Permanent management",
  },
];

export const TrustSection: React.FC = () => {
  return (
    <section className="bg-white text-mashal-charcoal">
      <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <Reveal>
              <Eyebrow>The trust standard</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-8 text-balance font-display text-[clamp(1.9rem,3.2vw,2.75rem)] font-normal leading-[1.15] tracking-[-0.015em]">
                Why drivers and commercial fleets rely on{" "}
                <span className="text-mashal-gold-deep">Mashaal Petroleum.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16} className="lg:col-span-4 lg:self-end">
            <p className="max-w-[26rem] text-[16px] leading-[1.85] text-mashal-ink-soft">
              In an industry where measurement variances and secondary fuel blending are frequent
              concerns, we built our reputation on verifiable consistency.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 border-t border-mashal-charcoal/20 lg:mt-16">
          {trustPoints.map((point, i) => (
            <Reveal key={point.step} delay={i * 0.06}>
              <article className="grid grid-cols-1 gap-x-10 gap-y-10 border-b border-mashal-line py-14 lg:grid-cols-12 lg:py-20">
                <div className="lg:col-span-1">
                  <span className="font-display text-[17px] tabular-nums text-mashal-gold-muted">
                    {point.step}
                  </span>
                </div>

                <div className="lg:col-span-6">
                  <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-mashal-gold-muted">
                    {point.badge}
                  </p>
                  <h3 className="mt-5 text-balance font-display text-[clamp(1.4rem,2vw,1.75rem)] font-normal leading-[1.18] tracking-[-0.01em]">
                    {point.title}
                  </h3>
                  <p className="mt-6 max-w-[34rem] text-[15.5px] leading-[1.85] text-mashal-ink-soft">
                    {point.description}
                  </p>
                </div>

                <div className="lg:col-span-4 lg:col-start-9">
                  <span className="block font-display text-[clamp(2.8rem,4.4vw,3.75rem)] font-normal leading-none tracking-[-0.015em]">
                    {point.metricValue}
                  </span>
                  <p className="mt-5 text-[14px] font-medium text-mashal-charcoal">
                    {point.metricLabel}
                  </p>
                  <p className="mt-1 text-[13.5px] text-mashal-ink-soft">{point.metricSub}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 lg:mt-14">
          <LuxButton href="/contact" variant="dark">
            Speak with forecourt management
          </LuxButton>
        </Reveal>
      </div>
    </section>
  );
};
