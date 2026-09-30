"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AlertCircle, ArrowUpRight, Loader2 } from "lucide-react";
import { mashalInfo } from "@/lib/station-data";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Please provide your full name (at least 2 characters)." }),
  phone: z
    .string()
    .min(10, { message: "Please enter a valid phone or WhatsApp number (e.g., 0304 2774444)." }),
  inquiryType: z.enum(["general", "parco", "pso", "bulk_fleet"], {
    errorMap: () => ({ message: "Please select an inquiry category." }),
  }),
  message: z
    .string()
    .min(10, { message: "Please enter at least 10 characters detailing your request." }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inquiryOptions = [
  { id: "general", label: "General inquiry", sub: "Corporate & management" },
  { id: "parco", label: "Total PARCO (RYK)", sub: "Khanpur Road desk" },
  { id: "pso", label: "PSO (Lahore)", sub: "Raiwind Road desk" },
  { id: "bulk_fleet", label: "Bulk / fleet supply", sub: "Commercial diesel" },
] as const;

const fieldBase =
  "w-full border-0 border-b bg-transparent px-0 py-3 text-[16px] text-mashal-charcoal placeholder:text-[#A59C89] transition-colors duration-500 focus:outline-none focus:ring-0";

const labelBase =
  "block text-[13px] font-medium uppercase tracking-[0.14em] text-mashal-ink-soft";

const FieldError: React.FC<{ message?: string }> = ({ message }) =>
  message ? (
    <p role="alert" className="mt-2.5 flex items-center gap-1.5 text-[13px] text-red-700">
      <AlertCircle size={13} strokeWidth={1.5} />
      <span>{message}</span>
    </p>
  ) : null;

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiryType: "general",
    },
  });

  const selectedInquiry = watch("inquiryType");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate swift server processing
    await new Promise((resolve) => setTimeout(resolve, 750));
    setIsSubmitting(false);
    setSubmitted(true);
    reset();
  };

  return (
    <div>
      <Eyebrow>Direct dispatch form</Eyebrow>
      <h3 className="mt-7 font-display text-[clamp(1.9rem,3.2vw,2.8rem)] font-normal leading-[1.1] tracking-[-0.015em]">
        Send a{" "}
        <span className="text-mashal-gold-deep">direct message.</span>
      </h3>
      <p className="mt-5 max-w-[30rem] text-[15px] leading-7 text-mashal-ink-soft">
        Inquiries are routed directly to station supervisors or corporate management.
      </p>

      {submitted ? (
        <div className="mt-12 border-t border-mashal-charcoal/20 pt-10">
          <h4 className="font-display text-[clamp(1.4rem,2vw,1.75rem)] font-normal tracking-[-0.01em]">
            Message dispatched.
          </h4>
          <p className="mt-4 max-w-[32rem] text-[15.5px] leading-7 text-mashal-ink-soft">
            Thank you for reaching out to Mashaal Petroleum. Our management desk will review your
            details and respond directly via phone or WhatsApp at{" "}
            <strong className="font-medium text-mashal-charcoal tabular-nums">
              {mashalInfo.centralPhoneDisplay}
            </strong>{" "}
            shortly.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-9 gap-y-4">
            <a
              href={`https://wa.me/${mashalInfo.centralWhatsApp}?text=Hello%20Mashaal%20Petroleum,%20I%20just%20submitted%20a%20form%20on%20your%20website.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-5 rounded-full bg-mashal-charcoal py-1.5 pl-7 pr-1.5 text-[14px] font-medium text-mashal-bone transition-[background-color,transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#2B241A] active:scale-[0.98]"
            >
              <span>Connect on WhatsApp now</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mashal-gold text-mashal-charcoal transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-[2px] group-hover:scale-105">
                <ArrowUpRight size={17} strokeWidth={1.5} />
              </span>
            </a>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="text-[14px] font-medium text-mashal-gold-muted underline decoration-mashal-gold/40 underline-offset-[6px] transition-colors duration-500 hover:text-mashal-charcoal hover:decoration-mashal-charcoal"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-12" noValidate>
          {/* Inquiry category */}
          <fieldset>
            <legend className={labelBase}>
              01 &nbsp;Inquiry nature <span className="text-red-700">*</span>
            </legend>
            <div
              role="radiogroup"
              aria-label="Inquiry nature"
              className="mt-5 grid grid-cols-1 border-t border-mashal-charcoal/20 sm:grid-cols-2"
            >
              {inquiryOptions.map((opt, i) => {
                const isSelected = selectedInquiry === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => setValue("inquiryType", opt.id)}
                    className={cn(
                      "group flex items-start gap-4 border-b border-mashal-line py-5 text-left transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mashal-gold",
                      i % 2 === 0 ? "sm:pr-6" : "sm:pl-6"
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "mt-[7px] flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border transition-colors duration-500",
                        isSelected
                          ? "border-mashal-gold bg-mashal-gold"
                          : "border-mashal-charcoal/30 group-hover:border-mashal-gold"
                      )}
                    />
                    <span>
                      <span
                        className={cn(
                          "block font-display text-[19px] font-normal tracking-[-0.01em] transition-colors duration-500",
                          isSelected ? "text-mashal-charcoal" : "text-mashal-ink-soft group-hover:text-mashal-charcoal"
                        )}
                      >
                        {opt.label}
                      </span>
                      <span className="mt-1 block text-[13px] text-mashal-ink-soft">{opt.sub}</span>
                    </span>
                  </button>
                );
              })}
            </div>
            <FieldError message={errors.inquiryType?.message} />
          </fieldset>

          {/* Name & phone */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelBase}>
                02 &nbsp;Full name <span className="text-red-700">*</span>
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="e.g. Tariq Mahmood"
                aria-invalid={errors.name ? true : undefined}
                {...register("name")}
                className={cn(
                  fieldBase,
                  errors.name
                    ? "border-red-700"
                    : "border-mashal-charcoal/25 focus:border-mashal-gold"
                )}
              />
              <FieldError message={errors.name?.message} />
            </div>

            <div>
              <label htmlFor="phone" className={labelBase}>
                03 &nbsp;Phone / WhatsApp <span className="text-red-700">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                placeholder="0304 2774444"
                aria-invalid={errors.phone ? true : undefined}
                {...register("phone")}
                className={cn(
                  fieldBase,
                  errors.phone
                    ? "border-red-700"
                    : "border-mashal-charcoal/25 focus:border-mashal-gold"
                )}
              />
              <FieldError message={errors.phone?.message} />
            </div>
          </div>

          {/* Message */}
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <label htmlFor="message" className={labelBase}>
                04 &nbsp;Inquiry details <span className="text-red-700">*</span>
              </label>
              <span className="text-[12px] text-mashal-ink-soft">Min. 10 characters</span>
            </div>
            <textarea
              id="message"
              rows={4}
              placeholder="Describe your inquiry, fleet volume requirements, scheduled arrival, or forecourt feedback."
              aria-invalid={errors.message ? true : undefined}
              {...register("message")}
              className={cn(
                fieldBase,
                "resize-none leading-7",
                errors.message
                  ? "border-red-700"
                  : "border-mashal-charcoal/25 focus:border-mashal-gold"
              )}
            />
            <FieldError message={errors.message?.message} />
          </div>

          {/* Submit */}
          <div className="space-y-5">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center gap-5 rounded-full bg-mashal-charcoal py-1.5 pl-7 pr-1.5 text-[14px] font-medium text-mashal-bone transition-[background-color,transform,opacity] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#2B241A] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span>{isSubmitting ? "Dispatching message" : "Dispatch inquiry to management"}</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mashal-gold text-mashal-charcoal transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-[2px] group-hover:scale-105">
                {isSubmitting ? (
                  <Loader2 size={17} strokeWidth={1.5} className="animate-spin" />
                ) : (
                  <ArrowUpRight size={17} strokeWidth={1.5} />
                )}
              </span>
            </button>

            <p className="text-[13px] text-mashal-ink-soft">
              A direct, confidential channel &middot; monitored 24/7 across Rahim Yar Khan &amp;
              Lahore.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
