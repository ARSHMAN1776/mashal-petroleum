"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Car, Store } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LuxButton } from "@/components/ui/LuxButton";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";

const serviceCategories = [
  { id: "fuels", label: "Certified fuels" },
  { id: "convenience", label: "Forecourt marts" },
  { id: "checks", label: "Air & radiator care" },
  { id: "carwash", label: "Car wash & lube" },
  { id: "fleet", label: "Fleet accounts" },
];

interface FeatureItem {
  title: string;
  text: string;
  tag?: string;
}

/** Hairline-separated list. Replaces the boxed mini-cards. */
const FeatureList: React.FC<{ items: FeatureItem[] }> = ({ items }) => (
  <ul className="border-t border-mashal-charcoal/20">
    {items.map((item) => (
      <li key={item.title} className="border-b border-mashal-line py-6">
        <div className="flex items-baseline justify-between gap-6">
          <h3 className="font-display text-[clamp(1.1rem,1.6vw,1.3rem)] font-normal leading-snug tracking-[-0.01em]">
            {item.title}
          </h3>
          {item.tag && (
            <span className="hidden shrink-0 text-[13px] font-medium uppercase tracking-[0.18em] text-mashal-gold-muted sm:block">
              {item.tag}
            </span>
          )}
        </div>
        <p className="mt-3 max-w-[32rem] text-[15px] leading-7 text-mashal-ink-soft">
          {item.text}
        </p>
      </li>
    ))}
  </ul>
);

const SectionHeading: React.FC<{
  eyebrow: string;
  lead: React.ReactNode;
  accent: string;
  accentClass?: string;
}> = ({ eyebrow, lead, accent, accentClass = "text-mashal-gold-deep" }) => (
  <>
    <Reveal>
      <Eyebrow>{eyebrow}</Eyebrow>
    </Reveal>
    <Reveal delay={0.08}>
      <h2 className="mt-8 text-balance font-display text-[clamp(1.9rem,3.2vw,2.75rem)] font-normal leading-[1.15] tracking-[-0.015em]">
        {lead}{" "}
        <span className={accentClass}>{accent}</span>
      </h2>
    </Reveal>
  </>
);

export default function ServicesPage() {
  return (
    <div className="bg-mashal-bone text-mashal-charcoal selection:bg-mashal-gold selection:text-white">
      {/* 1. Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-48 -top-56 h-[680px] w-[680px] rounded-full bg-[radial-gradient(closest-side,rgba(200,154,60,0.14),transparent)]"
        />
        <div className="relative mx-auto max-w-[1320px] px-6 pb-16 pt-14 lg:px-10 lg:pb-24 lg:pt-20">
          <Reveal>
            <Eyebrow>Mashaal Petroleum &middot; Provisions</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-9 max-w-[18ch] text-balance font-display text-[clamp(2.4rem,4.6vw,3.75rem)] font-normal leading-[1.15] tracking-[-0.015em] sm:max-w-[20ch]">
              Engineered for fuel integrity.{" "}
              <span className="text-mashal-gold-deep">
                Built for traveler dignity.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-9 max-w-[36rem] text-[17px] leading-[1.8] text-mashal-ink-soft">
              Operating premier Total PARCO (Rahim Yar Khan) and PSO (Raiwind Lahore) forecourts with
              verifiable calibration, 24/7 hospitality, automated car wash bays, and commercial
              fleet services.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-12 lg:mt-14">
            <nav aria-label="Services" className="border-t border-mashal-line">
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                {serviceCategories.map((cat, i) => (
                  <li key={cat.id} className="border-b border-mashal-line lg:border-b-0">
                    <a
                      href={`#${cat.id}`}
                      className="group flex items-baseline gap-4 py-6 lg:pr-6"
                    >
                      <span className="text-[12px] tabular-nums tracking-[0.2em] text-mashal-gold-muted">
                        0{i + 1}
                      </span>
                      <span className="font-display text-[19px] font-normal tracking-[-0.01em] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1.5">
                        {cat.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>
        </div>
      </section>

      {/* 2. Certified Fuel Dispensing & Measurement */}
      <section id="fuels" className="scroll-mt-20 overflow-x-clip bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Primary forecourt provision"
                lead="Certified fuel dispensing &amp;"
                accent="digital accuracy."
              />

              <Reveal delay={0.16}>
                <p className="mt-8 max-w-[34rem] text-[16px] leading-[1.85] text-mashal-ink-soft">
                  Every drop of fuel at Mashaal Petroleum is sourced straight from official
                  state-authorized PARCO and PSO terminals under strict physical tamper seals. We do
                  not blend, dilute, or purchase secondary wholesale stock.
                </p>
              </Reveal>

              <Reveal delay={0.2} className="mt-12">
                <FeatureList
                  items={[
                    {
                      title: "RON 92 Unleaded (Super)",
                      tag: "Standard daily",
                      text: "Total PARCO Super and PSO Altron Premium for passenger sedans, commuter bikes, and commercial vans.",
                    },
                    {
                      title: "RON 97 High Octane",
                      tag: "High performance",
                      text: "PARCO Hi-Octane and PSO Altron X 97. Stocked specifically for turbocharged engines, imported luxury sedans, and SUVs.",
                    },
                    {
                      title: "Euro 5 High-Speed Diesel (HSD)",
                      tag: "Low emission",
                      text: "Clean low-sulfur diesel with high-flow nozzles on dedicated lanes for heavy transport trucks, buses, and containers.",
                    },
                  ]}
                />
              </Reveal>

              <Reveal delay={0.24} className="mt-10">
                <p className="max-w-[32rem] border-l border-mashal-gold pl-6 text-[15px] leading-7 text-mashal-ink-soft">
                  <strong className="font-medium text-mashal-charcoal">
                    Physical calibration measure.
                  </strong>{" "}
                  Shift supervisors will dispense a certified 5L or 10L volumetric test measure on
                  request before fueling.
                </p>
              </Reveal>
            </div>

            {/* Right Visual Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative aspect-[4/3] w-full rounded-[22px] overflow-hidden shadow-2xl border border-neutral-200/80 group">
                <Image
                  src="/images/parco/parco-day-fueling.jpg"
                  alt="Active fuel dispensing at Mashaal Total PARCO station on Khanpur Road"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Metric Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C89A3C]/10 border border-[#C89A3C]/40 flex items-center justify-center text-[#C89A3C]">
                      <Award size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#0A111F]">Certified Volumetric Calibration</p>
                      <p className="text-[11px] text-[#5A6474]">100% Refinery-Direct Supply Chain</p>
                    </div>
                  </div>
                  <span className="font-serif text-xl font-normal text-[#0A111F] tabular-nums">0.0%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Forecourt Convenience */}
      <section id="convenience" className="scroll-mt-20 overflow-x-clip bg-mashal-bone">
        <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Left Visual Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 order-2 lg:order-1 relative"
            >
              <div className="relative aspect-[4/3] w-full rounded-[22px] overflow-hidden shadow-2xl border border-neutral-200/80 group">
                <Image
                  src="/images/parco/parco-mart.jpg"
                  alt="Mashaal Petroleum Welcome 24/7 convenience mart with cold drinks, snacks, and travel goods"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Store Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FAF6EE] border border-[#E6DEC8] flex items-center justify-center text-[#C89A3C]">
                      <Store size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#15120D]">M-Mart &bull; Shop Stop Express</p>
                      <p className="text-[11px] text-[#7A7265]">Open 24 Hours &bull; 365 Days a Year</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#8C7238] bg-[#FAF6EE] border border-[#E6DEC8] px-2.5 py-1 rounded-full">
                    24/7 Open
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Text Column */}
            <div className="order-1 lg:order-2 lg:col-span-6">
              <SectionHeading
                eyebrow="Highway refreshment & essentials"
                lead="Forecourt convenience &amp;"
                accent="traveler rest."
              />

              <Reveal delay={0.16}>
                <p className="mt-8 max-w-[34rem] text-[16px] leading-[1.85] text-mashal-ink-soft">
                  Whether you are on an inter-district commute across Punjab or on a regional freight
                  haul, our on-site convenience marts offer a secure, well-illuminated pause in your
                  journey.
                </p>
              </Reveal>

              <Reveal delay={0.2} className="mt-12">
                <FeatureList
                  items={[
                    {
                      title: "Hot karak chai & drinks",
                      text: "Fresh hot tea, espresso, chilled juices, energy drinks, and packaged travel snacks.",
                    },
                    {
                      title: "Engine lubricants",
                      text: "Official manufacturer oils: Total Quartz, Rubia, PSO Carient, and Castrol formulations.",
                    },
                    {
                      title: "24/7 continuous service",
                      text: "Manned cashier desks, illuminated store bays, and cash/card checkout around the clock.",
                    },
                    {
                      title: "Travel goods & ATM",
                      text: "Mobile accessories, charging cords, emergency vehicle fuses, and on-site 24/7 ATM.",
                    },
                  ]}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Digital Air & Radiator Water */}
      <section id="checks" className="scroll-mt-20 overflow-x-clip bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Complimentary forecourt care"
                lead="Digital air inflation &amp;"
                accent="radiator water care."
              />

              <Reveal delay={0.16}>
                <p className="mt-8 max-w-[34rem] text-[16px] leading-[1.85] text-mashal-ink-soft">
                  Trained forecourt attendants provide complimentary digital tire pressure checks,
                  calibrated air inflation, and radiator water fill points to maintain your
                  vehicle&apos;s safety and cooling performance.
                </p>
              </Reveal>

              <Reveal delay={0.2} className="mt-12">
                <FeatureList
                  items={[
                    {
                      title: "Precision digital tire pressure gauges",
                      text: "Accurate digital pressure calibration counter for passenger sedans, motorcycles, commercial vans, and heavy transport vehicles at no extra charge.",
                    },
                    {
                      title: "Radiator coolant & clean water top-up",
                      text: "Dedicated clean water fill points manned by trained attendants to replenish cooling systems and prevent engine overheating during highway drives.",
                    },
                  ]}
                />
              </Reveal>

              <Reveal delay={0.24} className="mt-10">
                <p className="max-w-[32rem] border-l border-mashal-gold pl-6 text-[15px] leading-7 text-mashal-ink-soft">
                  Complimentary service manned by trained attendants around the clock.
                </p>
              </Reveal>
            </div>

            {/* Right Visual Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative aspect-[4/3] w-full rounded-[22px] overflow-hidden shadow-2xl border border-neutral-200/80 group">
                <Image
                  src="/images/pso/pso-hero-night.jpg"
                  alt="Illuminated forecourt care and vehicle service area at Mashaal PSO Raiwind"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Amenity Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#0A111F]">Digital Air &amp; Radiator Water Counter</p>
                    <p className="text-[11px] text-[#5A6474]">Serviced by Trained Forecourt Staff</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    100% Free Service
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Automated Car Wash & Quick Lube Bay */}
      <section id="carwash" className="scroll-mt-20 overflow-x-clip bg-mashal-bone">
        <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Left Visual Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 order-2 lg:order-1 relative"
            >
              <div className="relative aspect-[4/3] w-full rounded-[22px] overflow-hidden shadow-2xl border border-neutral-200/80 group">
                <Image
                  src="/images/parco/parco-carwash.jpg"
                  alt="Automated car wash facility and QUARTZ service bay at Mashaal Total PARCO Rahim Yar Khan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Service Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-parco-red/10 border border-parco-red/30 flex items-center justify-center text-parco-red">
                      <Car size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#15120D]">QUARTZ Service Bay &bull; Car Wash</p>
                      <p className="text-[11px] text-[#7A7265]">High-Pressure Wash &amp; Genuine Oils</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#8C7238] bg-[#FAF6EE] border border-[#E6DEC8] px-2.5 py-1 rounded-full">
                    Solar Powered
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Text Column */}
            <div className="order-1 lg:order-2 lg:col-span-6">
              <SectionHeading
                eyebrow="Automotive care & service bay"
                lead="Automatic high-pressure wash &amp;"
                accent="lube bay."
                accentClass="text-parco-red"
              />

              <Reveal delay={0.16}>
                <p className="mt-8 max-w-[34rem] text-[16px] leading-[1.85] text-mashal-ink-soft">
                  Equipped with modern vehicle cleaning gantries and certified lubricant technicians
                  to keep passenger cars, commercial pickups, and fleet vehicles in peak operating
                  condition.
                </p>
              </Reveal>

              <Reveal delay={0.2} className="mt-12">
                <FeatureList
                  items={[
                    {
                      title: "High-pressure automatic body & underbody wash",
                      text: "Removes road grime, salt, and dust with touchless high-pressure water jets and safe vehicle shampoos.",
                    },
                    {
                      title: "Authorized oil change & filter inspection",
                      text: "Complete drain and fill using genuine factory-sealed Total Quartz, Rubia, and PSO synthetic motor oils.",
                    },
                    {
                      title: "Complimentary digital air & radiator water",
                      text: "Trained forecourt attendants check cold tire pressures and replenish coolant reservoirs free of charge.",
                    },
                  ]}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Commercial Transport & Fleet Accounts */}
      <section id="fleet" className="scroll-mt-20 overflow-x-clip bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Commercial logistics & transit"
                lead="Commercial fleet fueling &amp;"
                accent="corporate accounts."
              />

              <Reveal delay={0.16}>
                <p className="mt-8 max-w-[34rem] text-[16px] leading-[1.85] text-mashal-ink-soft">
                  We provide tailored volume contracts and high-flow diesel dispensing for logistics
                  fleets, passenger bus lines, agricultural contractors, and industrial
                  transporters.
                </p>
              </Reveal>

              <Reveal delay={0.2} className="mt-12">
                <FeatureList
                  items={[
                    {
                      title: "High-clearance heavy bays",
                      text: "Wide turning radii designed for 22-wheelers, container carriers, and agricultural machinery.",
                    },
                    {
                      title: "PSO Fleet Card integration",
                      text: "Cashless digital tracking, vehicle-specific limit controls, and monthly consolidated tax statements.",
                    },
                    {
                      title: "Structured volume ledgers",
                      text: "Direct commercial contracts with transparent billing and prompt priority refueling.",
                    },
                  ]}
                />
              </Reveal>

              <Reveal delay={0.24} className="mt-12">
                <LuxButton href="/contact" variant="dark">
                  Inquire about fleet fueling terms
                </LuxButton>
              </Reveal>
            </div>

            {/* Right Visual Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative aspect-[4/3] w-full rounded-[22px] overflow-hidden shadow-2xl border border-neutral-200/80 group">
                <Image
                  src="/images/pso/pso-day-forecourt.jpg"
                  alt="High-clearance commercial forecourt at Mashaal PSO Station Raiwind"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Fleet Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#0A111F]">Corporate Transport Hub</p>
                    <p className="text-[11px] text-[#5A6474]">Dedicated High-Flow Diesel Islands</p>
                  </div>
                  <span className="text-xs font-semibold text-[#0B4A2D] bg-[#E8F3ED] px-3 py-1 rounded-full border border-emerald-200">
                    Fleet Card Ready
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Closing invitation */}
      <section className="bg-mashal-bone">
        <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <h2 className="text-balance font-display text-[clamp(2rem,3.8vw,3.1rem)] font-normal leading-[1.15] tracking-[-0.015em]">
                  Experience the standard of{" "}
                  <span className="text-mashal-gold-deep">Mashaal Petroleum.</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-4 lg:self-end">
              <Reveal delay={0.1}>
                <p className="max-w-[26rem] text-[16px] leading-[1.85] text-mashal-ink-soft">
                  Visit our Total PARCO station in Rahim Yar Khan or our PSO hub in Raiwind, Lahore.
                  For bulk transport accounts or direct inquiries, contact our forecourt management.
                </p>
              </Reveal>
              <Reveal delay={0.18} className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-5">
                <LuxButton href="/contact" variant="dark">
                  Reach the contact desk
                </LuxButton>
                <TextLink href="/#stations">Forecourt locations</TextLink>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
