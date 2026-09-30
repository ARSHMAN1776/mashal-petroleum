import React from "react";
import type { Amenity, FuelProduct, StationData } from "@/lib/station-data";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LuxButton } from "@/components/ui/LuxButton";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/**
 * Brand accent for a station page. Class names are passed in as full strings
 * from the page files so Tailwind can see them.
 */
export interface StationAccent {
  /** e.g. "text-parco-red" */
  text: string;
  /** e.g. "bg-parco-red" */
  dot: string;
}

/* -------------------------------------------------------------------------- */
/* Assurance row                                                              */
/* -------------------------------------------------------------------------- */

export const StationAssurance: React.FC<{
  items: { title: string; detail: string }[];
}> = ({ items }) => (
  <section className="bg-mashal-bone">
    <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
      <dl className="grid grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06} className="h-full">
            <div
              className={cn(
                "h-full border-mashal-line py-10 lg:px-9 lg:py-14",
                i % 2 === 1 ? "border-l pl-6" : "pr-4",
                i > 0 && "lg:border-l",
                i < 2 && "border-b lg:border-b-0",
                i === 0 && "lg:pl-0"
              )}
            >
              <dt className="font-display text-[clamp(1.05rem,1.4vw,1.2rem)] font-normal tracking-[-0.01em]">
                {item.title}
              </dt>
              <dd className="mt-2 text-[14px] leading-6 text-mashal-ink-soft">{item.detail}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/* Fuel grades                                                                */
/* -------------------------------------------------------------------------- */

interface FuelSpec {
  tag: string;
  octane: string;
  specs: string[];
}

export const StationFuels: React.FC<{
  eyebrow: string;
  heading: React.ReactNode;
  intro: string;
  fuels: FuelProduct[];
  specs: FuelSpec[];
  accent: StationAccent;
  availability: string;
}> = ({ eyebrow, heading, intro, fuels, specs, accent, availability }) => (
  <section className="bg-white">
    <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 text-balance font-display text-[clamp(1.9rem,3.2vw,2.75rem)] font-normal leading-[1.15] tracking-[-0.015em]">
              {heading}
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.16} className="lg:col-span-4 lg:self-end">
          <p className="max-w-[26rem] text-[16px] leading-[1.85] text-mashal-ink-soft">{intro}</p>
        </Reveal>
      </div>

      <div className="mt-12 border-t border-mashal-charcoal/20 lg:mt-16">
        {fuels.map((fuel, index) => {
          const spec = specs[index] || specs[0];
          return (
            <Reveal key={fuel.name}>
              <article className="grid grid-cols-1 gap-x-10 gap-y-8 border-b border-mashal-line py-12 lg:grid-cols-12 lg:py-16">
                <div className="lg:col-span-3">
                  <span
                    className={`block font-display text-[clamp(2.2rem,3.2vw,2.9rem)] font-normal leading-none tracking-[-0.015em] ${accent.text}`}
                  >
                    {spec.octane}
                  </span>
                  <p className="mt-5 text-[13px] font-medium uppercase tracking-[0.14em] text-mashal-gold-muted">
                    {fuel.badge || spec.tag}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <h3 className="font-display text-[clamp(1.4rem,2vw,1.7rem)] font-normal leading-[1.15] tracking-[-0.01em]">
                    {fuel.name}
                  </h3>
                  <p className="mt-5 max-w-[30rem] text-[15px] leading-7 text-mashal-ink-soft">
                    {fuel.description}
                  </p>
                </div>

                <ul className="space-y-3.5 lg:col-span-3 lg:col-start-10">
                  {spec.specs.map((item) => (
                    <li key={item} className="flex items-baseline gap-4 text-[14.5px] text-mashal-ink-soft">
                      <span aria-hidden className="h-px w-5 shrink-0 translate-y-[-4px] bg-mashal-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-8">
        <p className="text-[13.5px] text-mashal-ink-soft">{availability}</p>
      </Reveal>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/* Amenities                                                                  */
/* -------------------------------------------------------------------------- */

export const StationAmenities: React.FC<{
  eyebrow: string;
  heading: React.ReactNode;
  intro: string;
  amenities: Amenity[];
  tags: string[];
  accent: StationAccent;
}> = ({ eyebrow, heading, intro, amenities, tags, accent }) => (
  <section className="bg-mashal-bone">
    <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 text-balance font-display text-[clamp(1.9rem,3.2vw,2.75rem)] font-normal leading-[1.15] tracking-[-0.015em]">
              {heading}
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.16} className="lg:col-span-4 lg:self-end">
          <p className="max-w-[26rem] text-[16px] leading-[1.85] text-mashal-ink-soft">{intro}</p>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-20 border-t border-mashal-charcoal/20 md:grid-cols-2 lg:mt-16">
        {amenities.map((item, index) => (
          <Reveal key={item.title} delay={(index % 2) * 0.08}>
            <div className="grid h-full grid-cols-[3rem_1fr] gap-x-2 border-b border-mashal-line py-10 sm:grid-cols-[4rem_1fr] lg:py-12">
              <span className="pt-1 font-display text-[17px] tabular-nums text-mashal-gold-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-[clamp(1.3rem,1.8vw,1.55rem)] font-normal leading-[1.2] tracking-[-0.015em]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-[26rem] text-[15px] leading-7 text-mashal-ink-soft">
                  {item.description}
                </p>
                <p className={`mt-5 text-[13px] font-medium uppercase tracking-[0.14em] ${accent.text}`}>
                  {tags[index] || "24/7 Available"}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/* Location                                                                   */
/* -------------------------------------------------------------------------- */

export const StationLocation: React.FC<{
  station: StationData;
  corridor: string;
  coordinates: string;
  mapTitle: string;
  accent: StationAccent;
}> = ({ station, corridor, coordinates, mapTitle, accent }) => (
  <section className="bg-mashal-bone">
    <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid grid-cols-1 items-stretch gap-16 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>Location &amp; coordinates</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-8 font-display text-[clamp(1.8rem,2.8vw,2.4rem)] font-normal leading-[1.1] tracking-[-0.015em]">
              {station.name}
            </h2>
            <p className="mt-4 text-[15px] text-mashal-ink-soft">{corridor}</p>
          </Reveal>

          <Reveal delay={0.16}>
            <dl className="mt-12 divide-y divide-mashal-line border-y border-mashal-line">
              <div className="py-6">
                <dt className={`text-[13px] font-medium uppercase tracking-[0.14em] ${accent.text}`}>
                  Forecourt address
                </dt>
                <dd className="mt-2.5 text-[16px] leading-7">{station.fullAddress}</dd>
              </div>
              <div className="py-6">
                <dt className="text-[13px] font-medium uppercase tracking-[0.14em] text-mashal-ink-soft">
                  Operational schedule
                </dt>
                <dd className="mt-2.5 flex items-center gap-3 text-[16px] leading-7">
                  <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                  </span>
                  Continuous 24 hours a day &middot; 7 days a week &middot; 365 days
                </dd>
              </div>
              <div className="py-6">
                <dt className="text-[13px] font-medium uppercase tracking-[0.14em] text-mashal-ink-soft">
                  GPS satellite coordinates
                </dt>
                <dd className="mt-2.5 text-[16px] tabular-nums">{coordinates}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.24} className="mt-12 flex flex-wrap items-center gap-x-9 gap-y-6">
            <LuxButton href={station.googleMapsUrl} variant="dark">
              Open in Google Maps
            </LuxButton>
            <TextLink href="/contact">Contact station desk</TextLink>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="min-h-[460px] lg:col-span-7">
          <div className="relative h-full min-h-[460px] overflow-hidden rounded-[6px] border border-mashal-line bg-neutral-100">
            <iframe
              title={mapTitle}
              src={station.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "460px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full contrast-[1.04]"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
