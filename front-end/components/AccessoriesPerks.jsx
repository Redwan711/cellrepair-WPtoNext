"use client";

import React from "react";

const perks = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#f11d4b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    badge: "100% Free Service",
    title: "Free Precision Glass Installation",
    desc: "Tired of dust specks, crooked alignments, and trapped air bubbles? Every screen protector purchased at our kiosk is professionally installed by our technicians in under 2 minutes at no extra charge.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#f11d4b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    badge: "Zero Guesswork",
    title: "Try Cases On Your Device First",
    desc: "Never gamble on case thickness, button click feel, or MagSafe magnetic strength from an online photo. Try any case directly onto your phone right at our kiosk counter before deciding.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#f11d4b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    badge: "Battery Safe",
    title: "Certified Fast PD Charging",
    desc: "Generic gas station cables can degrade battery health or burn charging ports. All of our wall adapters and braided cables are MFi and Power Delivery certified with smart overvoltage protection.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#f11d4b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    badge: "Same-Day Ready",
    title: "Instant In-Store Availability",
    desc: "Broke your charger or shattered your glass today? No need to wait 3 to 5 business days for an online delivery. Stop by Otay Ranch Town Center and grab what you need on the spot.",
  },
];

export default function AccessoriesPerks() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden border-t border-black/[0.04]">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f11d4b]/[0.08] text-[#f11d4b] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#f11d4b]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f11d4b]" />
            The In-Store Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-neutral-900 leading-[1.15]">
            Why Buy Accessories At Our Kiosk?
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            Hands-on fit testing, expert bubble-free installations, and verified safety standards you won&apos;t get from online blind buys.
          </p>
        </div>

        {/* 4 Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-neutral-50/70 border border-neutral-200/80 hover:border-[#f11d4b]/30 hover:bg-white hover:shadow-xl hover:shadow-[#f11d4b]/[0.05] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200/80 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {perk.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#f11d4b] bg-[#f11d4b]/10 border border-[#f11d4b]/20 px-2.5 py-1 rounded-full">
                    {perk.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-neutral-900 tracking-tight mb-2.5 group-hover:text-[#f11d4b] transition-colors">
                  {perk.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                  {perk.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center gap-1.5 text-xs font-semibold text-neutral-900">
                <span>In-Store Service</span>
                <span className="text-[#f11d4b]">✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
