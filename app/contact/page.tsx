"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Navigation, Plus } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { parcoStation, psoStation, mashalInfo } from "@/lib/station-data";
import { ParcoBadge, PsoBadge } from "@/components/ui/BrandBadges";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LuxButton } from "@/components/ui/LuxButton";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";

const contactFaqs = [
  {
    q: "Can I request a physical volumetric calibration test before fueling?",
    a: "Absolutely. At both our Total PARCO (Rahim Yar Khan) and PSO (Raiwind Lahore) stations, standard certified 5-liter and 10-liter calibration measures are maintained on-site. Any motorist or fleet driver can request a forecourt supervisor to conduct a transparent physical measurement check at zero cost before filling.",
  },
  {
    q: "How can commercial logistics fleets or agricultural operations arrange bulk diesel supply?",
    a: "We provide dedicated commercial high-flow diesel dispensing, scheduled night filling windows, and account-based fueling for fleet operators and agricultural machinery. Contact our central management desk directly at 0304 2774444 or via WhatsApp to discuss volume terms and priority dispatch.",
  },
  {
    q: "Are the convenience marts, prayer areas, and washrooms open 24/7?",
    a: "Yes. Both forecourts operate continuously 24 hours a day, 7 days a week, 365 days a year. The M-Mart / Shop Stop convenience stores, air-conditioned prayer sanctuaries, and clean restrooms are staffed and illuminated round the clock.",
  },
  {
    q: "Which payment methods and corporate fleet cards are accepted?",
    a: "We accept all major commercial payment channels including Cash, Debit/Credit cards (Visa/Mastercard), PSO Fleet Cards (at our Raiwind location), Total PARCO Cards (at our Khanpur Road location), and corporate account billing for approved commercial fleets.",
  },
];

const EASE = [0.32, 0.72, 0, 1] as const;

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            <Eyebrow>Direct forecourt &middot; Corporate access</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-9 max-w-[14ch] text-balance font-display text-[clamp(2.4rem,4.6vw,3.75rem)] font-normal leading-[1.15] tracking-[-0.015em] sm:max-w-[16ch]">
              Connect with{" "}
              <span className="text-mashal-gold-deep">Mashaal Petroleum.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-9 max-w-[36rem] text-[17px] leading-[1.8] text-mashal-ink-soft">
              Direct contact with our forecourt supervisors, station managers, and corporate desk
              across Punjab. Call us 24/7 at{" "}
              <strong className="font-medium tabular-nums text-mashal-charcoal">
                {mashalInfo.centralPhoneDisplay}
              </strong>{" "}
              or message us via WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-11 flex flex-wrap items-center gap-x-9 gap-y-6">
            <LuxButton href={`tel:${mashalInfo.centralPhone}`} variant="dark">
              <span className="tabular-nums">Call 24/7 &middot; {mashalInfo.centralPhoneDisplay}</span>
            </LuxButton>
            <TextLink
              href={`https://wa.me/${parcoStation.whatsapp}?text=Hello%20Mashaal%20Petroleum,%20I%20have%20an%20inquiry%20regarding%20Total%20PARCO%20Station%20(Khanpur%20Road,%20Rahim%20Yar%20Khan)`}
            >
              WhatsApp PARCO (RYK)
            </TextLink>
            <TextLink
              href={`https://wa.me/${psoStation.whatsapp}?text=Hello%20Mashaal%20Petroleum,%20I%20have%20an%20inquiry%20regarding%20PSO%20Station%20(Raiwind,%20Lahore)`}
            >
              WhatsApp PSO (Lahore)
            </TextLink>
          </Reveal>
        </div>
      </section>

      {/* 2. Three contact desks */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid grid-cols-1 border-t border-mashal-charcoal/20 lg:grid-cols-3">
            {/* Central helpdesk */}
            <Reveal>
              <div className="border-b border-mashal-line py-12 lg:border-b-0 lg:border-r lg:pr-12">
                <p className="flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.14em] text-mashal-ink-soft">
                  <span className="relative flex h-2 w-2" aria-hidden>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                  </span>
                  Live 24/7
                </p>
                <h3 className="mt-6 font-display text-[clamp(1.4rem,2vw,1.7rem)] font-normal leading-[1.15] tracking-[-0.01em]">
                  Central helpdesk &amp; inquiries
                </h3>
                <p className="mt-5 max-w-[22rem] text-[15px] leading-7 text-mashal-ink-soft">
                  Direct verbal assistance for fuel stock, current rates, bulk transport, or
                  managerial escalation.
                </p>
                <a
                  href={`tel:${mashalInfo.centralPhone}`}
                  className="mt-8 inline-block font-display text-[clamp(1.5rem,2.2vw,1.9rem)] font-normal tabular-nums tracking-[-0.01em] text-mashal-charcoal transition-colors duration-500 hover:text-mashal-gold-deep"
                >
                  {mashalInfo.centralPhoneDisplay}
                </a>
              </div>
            </Reveal>

            {/* Total PARCO desk */}
            <Reveal delay={0.08}>
              <div className="border-b border-mashal-line py-12 lg:border-b-0 lg:border-r lg:px-12">
                <p className="flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.14em] text-mashal-ink-soft">
                  <span className="h-1.5 w-1.5 rounded-full bg-parco-red" aria-hidden />
                  PARCO Authorized
                </p>
                <h3 className="mt-6 font-display text-[clamp(1.4rem,2vw,1.7rem)] font-normal leading-[1.15] tracking-[-0.01em]">
                  Total PARCO (Rahim Yar Khan)
                </h3>
                <p className="mt-5 max-w-[22rem] text-[15px] leading-7 text-mashal-ink-soft">
                  Khanpur Road forecourt desk, M-Mart convenience, Excellium dispensers, and
                  automatic car wash.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                  <TextLink href={parcoStation.googleMapsUrl} className="text-parco-red">
                    Map route
                  </TextLink>
                  <TextLink
                    href={`https://wa.me/${parcoStation.whatsapp}?text=Hello%20Mashaal%20Total%20PARCO%20Rahim%20Yar%20Khan`}
                  >
                    WhatsApp
                  </TextLink>
                </div>
              </div>
            </Reveal>

            {/* PSO desk */}
            <Reveal delay={0.16}>
              <div className="py-12 lg:pl-12">
                <p className="flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.14em] text-mashal-ink-soft">
                  <span className="h-1.5 w-1.5 rounded-full bg-pso-green" aria-hidden />
                  PSO Official Forecourt
                </p>
                <h3 className="mt-6 font-display text-[clamp(1.4rem,2vw,1.7rem)] font-normal leading-[1.15] tracking-[-0.01em]">
                  PSO Station (Raiwind Lahore)
                </h3>
                <p className="mt-5 max-w-[22rem] text-[15px] leading-7 text-mashal-ink-soft">
                  Raiwind Road flagship forecourt, Shop Stop, on-site 24/7 ATM, Altron High Octane
                  &amp; Euro-5 diesel.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                  <TextLink href={psoStation.googleMapsUrl} className="text-pso-green">
                    Map route
                  </TextLink>
                  <TextLink
                    href={`https://wa.me/${psoStation.whatsapp}?text=Hello%20Mashal%20PSO%20Raiwind%20Lahore`}
                  >
                    WhatsApp
                  </TextLink>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Form & corporate details */}
      <section className="bg-mashal-bone">
        <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-7">
              <ContactForm />
            </Reveal>

            <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9">
              <aside className="lg:sticky lg:top-32">
                <div className="border-t border-mashal-charcoal/20 pt-8">
                  <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-mashal-gold-muted">
                    Punjab, Pakistan
                  </p>
                  <h3 className="mt-5 font-display text-[clamp(1.4rem,2vw,1.7rem)] font-normal tracking-[-0.01em]">
                    Corporate headquarters
                  </h3>

                  <dl className="mt-9 divide-y divide-mashal-line border-y border-mashal-line">
                    <div className="py-5">
                      <dt className="text-[13px] uppercase tracking-[0.14em] text-mashal-ink-soft">
                        Address
                      </dt>
                      <dd className="mt-2 text-[15px] leading-7">{mashalInfo.headquarters}</dd>
                    </div>
                    <div className="py-5">
                      <dt className="text-[13px] uppercase tracking-[0.14em] text-mashal-ink-soft">
                        Telephone
                      </dt>
                      <dd className="mt-2 text-[15px]">
                        <a
                          href={`tel:${mashalInfo.centralPhone}`}
                          className="tabular-nums transition-colors duration-500 hover:text-mashal-gold-deep"
                        >
                          {mashalInfo.centralPhoneDisplay}
                        </a>
                      </dd>
                    </div>
                    <div className="py-5">
                      <dt className="text-[13px] uppercase tracking-[0.14em] text-mashal-ink-soft">
                        Email
                      </dt>
                      <dd className="mt-2 break-all text-[15px]">
                        <a
                          href={`mailto:${mashalInfo.centralEmail}`}
                          className="transition-colors duration-500 hover:text-mashal-gold-deep"
                        >
                          {mashalInfo.centralEmail}
                        </a>
                      </dd>
                    </div>
                    <div className="py-5">
                      <dt className="text-[13px] uppercase tracking-[0.14em] text-mashal-ink-soft">
                        Hours
                      </dt>
                      <dd className="mt-2 text-[15px]">
                        Continuous forecourt operations &middot; Open 24/7
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-9 border-l border-mashal-gold pl-6 text-[15px] leading-7 text-mashal-ink-soft">
                    <strong className="font-medium text-mashal-charcoal">
                      Certified physical volume verification.
                    </strong>{" "}
                    Test calibration measures (5L / 10L) are accessible upon request before any
                    fueling transaction.
                  </p>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Both station outlets (photo cards kept as-is) */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Reveal>
                <Eyebrow>Forecourt coordinates &amp; profiles</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-8 text-balance font-display text-[clamp(1.9rem,3.2vw,2.75rem)] font-normal leading-[1.15] tracking-[-0.015em]">
                  Both station outlets,{" "}
                  <span className="text-mashal-gold-deep">side by side.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.16}>
              <p className="max-w-[24rem] text-[16px] leading-[1.85] text-mashal-ink-soft">
                Direct location maps, certified fuel grades, and on-site supervisor contacts for
                both locations.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 lg:mt-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              {/* PARCO Station Full Card */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-parco-border rounded-[24px] p-6 sm:p-7 space-y-5 relative shadow-[0_10px_35px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-parco-red" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-parco-border/60">
                    <div>
                      <ParcoBadge />
                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#15120D] mt-1.5">
                        Mashaal Total PARCO Station
                      </h3>
                    </div>
                    <span className="text-[11px] bg-[#FAECEC] text-parco-red px-2.5 py-1 rounded-full font-semibold">
                      Open 24/7
                    </span>
                  </div>

                  {/* Photo Container */}
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200/80 group">
                    <Image
                      src="/images/parco/parco-hero-night.jpg"
                      alt="Mashaal Total PARCO station at night in Rahim Yar Khan"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px]">
                      <span className="font-medium drop-shadow-sm">Khanpur Road &bull; RYK</span>
                      <span className="bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-[#F3C351] font-semibold">
                        Excellium &amp; Auto Wash
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-parco-border/60 flex flex-wrap gap-2.5">
                  <a
                    href={parcoStation.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-parco-red hover:bg-parco-dark text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all shadow-sm active:scale-95"
                  >
                    <Navigation size={12} />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={`https://wa.me/${parcoStation.whatsapp}?text=Hello%20Total%20PARCO%20Mashaal%20Petroleum`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#FAECEC] hover:bg-[#F5D8D8] text-parco-red text-xs font-semibold px-4 py-2.5 rounded-full transition-all"
                  >
                    <MessageSquare size={12} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.div>

              {/* PSO Station Full Card */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-white border border-pso-border rounded-[24px] p-6 sm:p-7 space-y-5 relative shadow-[0_10px_35px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-pso-green" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-pso-border/60">
                    <div>
                      <PsoBadge />
                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#15120D] mt-1.5">
                        Mashaal PSO Station
                      </h3>
                    </div>
                    <span className="text-[11px] bg-[#E8F3ED] text-pso-green px-2.5 py-1 rounded-full font-semibold">
                      Open 24/7
                    </span>
                  </div>

                  {/* Real Photo Thumbnail */}
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200/80 group">
                    <Image
                      src="/images/pso/pso-landing-station.jpg"
                      alt="Mashaal PSO station at night in Raiwind Lahore"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px]">
                      <span className="font-medium drop-shadow-sm">Raiwind Road &bull; Lahore</span>
                      <span className="bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-[#4ADE80] font-semibold">
                        Shop Stop &amp; 24/7 ATM
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-pso-border/60 flex flex-wrap gap-2.5">
                  <a
                    href={psoStation.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-pso-green hover:bg-pso-dark text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all shadow-sm active:scale-95"
                  >
                    <Navigation size={12} />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={`https://wa.me/${psoStation.whatsapp}?text=Hello%20PSO%20Mashaal%20Petroleum`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#E8F3ED] hover:bg-[#D5EBDD] text-pso-green text-xs font-semibold px-4 py-2.5 rounded-full transition-all"
                  >
                    <MessageSquare size={12} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Frequently asked inquiries */}
      <section className="bg-mashal-bone">
        <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <Eyebrow>Direct assistance</Eyebrow>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="mt-8 text-balance font-display text-[clamp(1.9rem,3vw,2.6rem)] font-normal leading-[1.15] tracking-[-0.015em]">
                    Frequently asked{" "}
                    <span className="text-mashal-gold-deep">inquiries.</span>
                  </h2>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-mashal-charcoal/20">
                {contactFaqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={index} className="border-b border-mashal-line">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${index}`}
                        className="group flex w-full cursor-pointer items-start gap-5 py-8 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mashal-gold sm:gap-8"
                      >
                        <span className="pt-1.5 font-display text-[17px] tabular-nums text-mashal-gold-muted">
                          0{index + 1}
                        </span>
                        <span className="flex-1 font-display text-[clamp(1.1rem,1.6vw,1.35rem)] font-normal leading-[1.3] tracking-[-0.015em] transition-colors duration-500 group-hover:text-mashal-gold-deep">
                          {faq.q}
                        </span>
                        <span
                          aria-hidden
                          className={`mt-1.5 shrink-0 text-mashal-charcoal/50 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          <Plus size={22} strokeWidth={1.2} />
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-panel-${index}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-[40rem] pb-9 pl-11 text-[15.5px] leading-[1.85] text-mashal-ink-soft sm:pl-[3.75rem]">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
