"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const trustItems = [
  {
    id: "repaired",
    stat: "15,000+",
    statLabel: "Devices Repaired",
    title: "THOUSANDS OF DEVICES REPAIRED",
    desc: "Over the years, we have successfully restored thousands of smartphones, tablets, and smartwatches. We service Apple, Samsung, Google Pixel, Motorola, and more with certified parts.",
    tags: ["Apple", "Samsung", "Pixel", "Motorola"],
    icon: (
      <svg
        className="w-6 h-6 text-[#f11d4b]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    badge: "Certified Expertise",
  },
  {
    id: "turnaround",
    stat: "20–30m",
    statLabel: "Average Fix Time",
    title: "FAST TURNAROUND",
    desc: "Most screen replacements and battery swaps are completed within 20 to 30 minutes. Drop off your device, enjoy shopping at Otay Ranch Town Center, and pick it up restored.",
    tags: ["Walk-Ins Welcome", "Same-Day Return", "Zero Wait"],
    icon: (
      <svg
        className="w-6 h-6 text-[#f11d4b]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
        <path d="m19 5-2-2" />
        <path d="m5 5 2-2" />
      </svg>
    ),
    badge: "Express Service",
  },
  {
    id: "reviews",
    stat: "5.0 ★",
    statLabel: "Customer Satisfaction",
    title: "5 STAR REVIEWS & WARRANTY",
    desc: "Customer satisfaction is our highest priority. We use premium OEM-grade parts accompanied by a store warranty for all repairs performed in our Otay Ranch store.",
    tags: ["OEM-Grade Parts", "Warranty Included", "Top-Rated"],
    icon: (
      <svg
        className="w-6 h-6 text-[#f11d4b]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    badge: "Quality Guaranteed",
  },
];

export default function TrustHighlights() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        "[data-trust-header]",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Cards Staggered Animation
      gsap.fromTo(
        "[data-trust-card]",
        { y: 45, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-white via-neutral-50/50 to-white overflow-hidden border-t border-black/[0.04]"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#f11d4b]/[0.025] blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div data-trust-header className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f11d4b]/[0.08] text-[#f11d4b] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#f11d4b]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f11d4b] animate-pulse" />
            Why Choose Cell Repair
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-neutral-900 leading-[1.15]">
            Trusted Standards. Fast Fixes. Every Time.
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            We hold ourselves to the highest repair standards in Chula Vista — offering guaranteed workmanship, OEM-spec components, and unmatched speed.
          </p>
        </div>

        {/* 3 Bento Feature / Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {trustItems.map((item) => (
            <div
              key={item.id}
              data-trust-card
              className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white border border-neutral-200/80 hover:border-[#f11d4b]/30 shadow-sm hover:shadow-xl hover:shadow-[#f11d4b]/[0.06] transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Top Row: Icon + Badge */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center group-hover:bg-[#f11d4b]/10 group-hover:border-[#f11d4b]/20 transition-colors duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 bg-neutral-100/80 px-3 py-1 rounded-full group-hover:text-[#f11d4b] group-hover:bg-[#f11d4b]/10 transition-colors">
                    {item.badge}
                  </span>
                </div>

                {/* Big Stat Callout */}
                <div className="mb-4">
                  <div className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 group-hover:text-[#f11d4b] transition-colors">
                    {item.stat}
                  </div>
                  <div className="text-xs uppercase font-medium tracking-wider text-neutral-400 mt-0.5">
                    {item.statLabel}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-neutral-900 tracking-tight mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Tags */}
              <div className="mt-8 pt-5 border-t border-neutral-100 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-neutral-600 bg-neutral-100/70 hover:bg-neutral-200/60 px-2.5 py-1 rounded-lg transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Accent bottom hover stripe */}
              <div className="absolute inset-x-8 bottom-0 h-[2px] bg-[#f11d4b] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
