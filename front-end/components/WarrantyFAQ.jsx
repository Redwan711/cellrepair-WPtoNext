"use client";

import React, { useState } from "react";

export const warrantyFaqs = [
  {
    q: "How do I file a warranty claim on my repair?",
    a: "Simply walk into our kiosk at Otay Ranch Town Center with your device. We look up your phone number and service record in our system and begin diagnostic testing on the spot. No paper receipt required.",
  },
  {
    q: "What happens if my replacement screen starts ghost-touching or flickering?",
    a: "If the screen shows defects like unresponsiveness, ghost touching, or backlight flickering with no physical impact cracks or liquid damage, our technician will replace the screen free of charge under warranty.",
  },
  {
    q: "Is there a warranty on water damage recovery?",
    a: "We perform deep ultrasonic cleaning and board drying. While we restore power and data on many liquid-damaged devices, microscopic corrosion can develop over time. We discuss long-term stability and specific part warranties prior to completing liquid repairs.",
  },
  {
    q: "Does the warranty stay with the phone if I sell or gift it?",
    a: "Yes! Our warranty coverage is tied directly to the device's IMEI and hardware serial number registered in our records, so it remains active regardless of ownership transfer within the warranty period.",
  },
  {
    q: "What payment methods are accepted at the kiosk?",
    a: "We accept all major credit and debit cards (Visa, Mastercard, Discover, Amex), Apple Pay, Google Pay, and Cash.",
  },
];

export default function WarrantyFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative py-20 md:py-28 bg-[#fafafa] overflow-hidden border-b border-black/[0.04]">
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f11d4b]/[0.08] text-[#f11d4b] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#f11d4b]/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f11d4b]" />
              Common Questions
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-neutral-900 leading-[1.15] mb-4">
              WARRANTY & TERMS FAQ
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
              Have questions about coverage, claims, or store service? Here are answers to our most frequent customer inquiries.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3.5 mb-12">
            {warrantyFaqs.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-[#f11d4b]/40 bg-white shadow-sm"
                      : "border-neutral-200/80 bg-white hover:border-neutral-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span
                      className={`text-sm sm:text-base font-semibold tracking-tight transition-colors ${
                        isOpen ? "text-[#f11d4b]" : "text-neutral-900"
                      }`}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-base font-bold transition-all duration-200 ${
                        isOpen
                          ? "bg-[#f11d4b] text-white rotate-180"
                          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed border-t border-neutral-100">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Support Callout */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-sm font-bold text-neutral-900">
                Need clarification on your warranty?
              </div>
              <div className="text-xs text-neutral-500 font-light mt-0.5">
                Our technicians are available by call or text 7 days a week.
              </div>
            </div>
            <a
              href="tel:+16195139994"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#f11d4b] hover:bg-[#c90f38] transition-colors shrink-0 shadow-sm"
            >
              <span>Call: +1 (619) 513-9994</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
