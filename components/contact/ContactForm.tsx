"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  CheckCircle,
  AlertCircle,
  Loader2,
  Send,
  Building2,
  Fuel,
  Truck,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { mashalInfo } from "@/lib/station-data";

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

  const inquiryOptions = [
    {
      id: "general",
      label: "General Inquiry",
      sub: "Corporate & Management",
      icon: Building2,
    },
    {
      id: "parco",
      label: "Total PARCO (RYK)",
      sub: "Khanpur Road Desk",
      icon: Fuel,
    },
    {
      id: "pso",
      label: "PSO (Lahore)",
      sub: "Raiwind Road Desk",
      icon: Fuel,
    },
    {
      id: "bulk_fleet",
      label: "Bulk / Fleet Supply",
      sub: "Commercial Diesel",
      icon: Truck,
    },
  ] as const;

  return (
    <div className="bg-white border border-neutral-200/90 p-6 sm:p-8 lg:p-9 rounded-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.04)] relative overflow-hidden">
      {/* Decorative top gold gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C89A3C] to-transparent" />

      <div className="mb-6 sm:mb-7 space-y-1.5">
        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#8C7238] uppercase tracking-[0.2em]">
          <Sparkles size={13} className="text-[#C89A3C]" />
          <span>DIRECT DISPATCH FORM</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#0A111F] tracking-tight">
          Send a Direct Message
        </h3>
        <p className="text-xs sm:text-[13px] text-[#5A6474] leading-relaxed">
          Inquiries are routed directly to station supervisors or corporate management.
        </p>
      </div>

      {submitted ? (
        <div className="bg-[#FAF8F5] border border-[#C89A3C]/40 p-7 sm:p-8 rounded-2xl text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300/80 flex items-center justify-center text-emerald-700 mx-auto shadow-sm">
            <CheckCircle size={24} />
          </div>
          <div className="space-y-1">
            <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#0A111F]">
              Message Dispatched
            </h4>
            <p className="text-xs sm:text-[13px] text-[#5A6474] max-w-md mx-auto leading-relaxed">
              Thank you for reaching out to Mashaal Petroleum. Our management desk will review your details and respond directly via phone or WhatsApp at{" "}
              <strong className="text-[#0A111F] font-semibold">{mashalInfo.centralPhoneDisplay}</strong> shortly.
            </p>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/${mashalInfo.centralWhatsApp}?text=Hello%20Mashaal%20Petroleum,%20I%20just%20submitted%20a%20form%20on%20your%20website.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0B4A2D] hover:bg-[#07331F] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all shadow-sm"
            >
              <MessageSquare size={13} />
              <span>Connect on WhatsApp Now</span>
            </a>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="text-xs font-semibold text-[#8C7238] hover:text-[#0A111F] hover:underline px-3 py-2 transition-colors"
            >
              Send another message &rarr;
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          {/* Inquiry Category Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-[#0A111F] uppercase tracking-wider">
              1. Select Inquiry Nature <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {inquiryOptions.map((opt) => {
                const IconComponent = opt.icon;
                const isSelected = selectedInquiry === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setValue("inquiryType", opt.id)}
                    className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all relative ${
                      isSelected
                        ? "bg-[#FAF6EE] border-[#C89A3C] text-[#15120D] shadow-xs"
                        : "bg-[#FAFAFA] border-neutral-200/90 text-[#0A111F] hover:border-neutral-300 hover:bg-neutral-50"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1.5">
                      <IconComponent
                        size={15}
                        className={isSelected ? "text-[#C89A3C]" : "text-[#8C7238]"}
                      />
                      {isSelected && (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C89A3C]" />
                      )}
                    </div>
                    <span className="text-xs font-semibold leading-tight line-clamp-1">
                      {opt.label}
                    </span>
                    <span
                      className={`text-[10px] leading-tight line-clamp-1 mt-0.5 ${
                        isSelected ? "text-[#8C7238]" : "text-[#7A8494]"
                      }`}
                    >
                      {opt.sub}
                    </span>
                  </button>
                );
              })}
            </div>
            {errors.inquiryType && (
              <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                <AlertCircle size={12} />
                <span>{errors.inquiryType.message}</span>
              </p>
            )}
          </div>

          {/* Name & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="block text-xs font-semibold text-[#0A111F]"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="e.g. Tariq Mahmood"
                {...register("name")}
                className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border bg-[#FAFAFA] text-[#0A111F] placeholder:text-[#9A9180] transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C89A3C]/30 focus:border-[#C89A3C] ${
                  errors.name ? "border-red-500 bg-red-50/20" : "border-neutral-200"
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.name.message}</span>
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="phone"
                className="block text-xs font-semibold text-[#0A111F]"
              >
                Phone / WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="0304 2774444 or +92 304 2774444"
                {...register("phone")}
                className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border bg-[#FAFAFA] text-[#0A111F] placeholder:text-[#9A9180] transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C89A3C]/30 focus:border-[#C89A3C] ${
                  errors.phone ? "border-red-500 bg-red-50/20" : "border-neutral-200"
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                  <AlertCircle size={12} />
                  <span>{errors.phone.message}</span>
                </p>
              )}
            </div>
          </div>

          {/* Message Field */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="message"
                className="block text-xs font-semibold text-[#0A111F]"
              >
                Inquiry Details or Requirements <span className="text-red-500">*</span>
              </label>
              <span className="text-[10px] text-[#7A8494]">Min 10 characters</span>
            </div>
            <textarea
              id="message"
              rows={4}
              placeholder="Describe your inquiry, fleet volume requirements, scheduled arrival, or forecourt feedback..."
              {...register("message")}
              className={`w-full text-xs sm:text-sm p-3.5 rounded-xl border bg-[#FAFAFA] text-[#0A111F] placeholder:text-[#9A9180] transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C89A3C]/30 focus:border-[#C89A3C] leading-relaxed ${
                errors.message ? "border-red-500 bg-red-50/20" : "border-neutral-200"
              }`}
            />
            {errors.message && (
              <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                <AlertCircle size={12} />
                <span>{errors.message.message}</span>
              </p>
            )}
          </div>

          {/* Submit Button & Direct note */}
          <div className="pt-1 space-y-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#C89A3C] hover:bg-[#B68B34] disabled:bg-neutral-300 text-white text-xs sm:text-sm font-semibold py-3 sm:py-3.5 px-6 rounded-full transition-all shadow-[0_4px_16px_rgba(200,154,60,0.25)] hover:shadow-[0_6px_20px_rgba(200,154,60,0.35)] active:scale-98 group cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin text-white" />
                  <span>Dispatching Message...</span>
                </>
              ) : (
                <>
                  <span>Dispatch Inquiries to Management</span>
                  <Send size={14} className="text-white group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <p className="text-[11px] text-center text-[#7A8494]">
              🔒 Direct confidential channel &bull; Monitored 24/7 across Rahim Yar Khan & Lahore
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

