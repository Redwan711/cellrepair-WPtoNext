"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const trustPillars = [
  {
    icon: "🛡️",
    title: "Store Warranty",
    desc: "Comprehensive parts & labor guarantee on all completed repairs.",
  },
  {
    icon: "🔍",
    title: "Free Diagnostics",
    desc: "Upfront evaluation and honest pricing before any repair begins.",
  },
  {
    icon: "🔒",
    title: "Data Privacy",
    desc: "Your personal data, photos, and accounts remain 100% confidential.",
  },
  {
    icon: "⚡",
    title: "30-Day Returns",
    desc: "Easy exchange for defective chargers, cables, or accessories.",
  },
];

export default function WarrantyHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-warranty-anim]",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-[#fcfcfd] via-white to-[#fafafa] text-neutral-900 overflow-hidden border-b border-black/[0.04]"
    >
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#f11d4b]/[0.04] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[350px] bg-amber-500/[0.03] blur-[140px] pointer-events-none rounded-full" />

      {/* Subtle Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #18181b 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Status Bar */}
        <div
          data-warranty-anim
          className="flex flex-wrap items-center justify-between gap-4 pb-7 mb-8 border-b border-neutral-200/80"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-emerald-800">
              Guaranteed Protection
            </span>
            <span className="text-emerald-300">•</span>
            <span className="text-xs text-emerald-700 font-medium">
              Transparent Store Policies
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-xs text-neutral-500">
            <span className="flex items-center gap-1.5">
              <span className="text-[#f11d4b]">✓</span> OEM-Spec Parts
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#f11d4b]">✓</span> No Hidden Charges
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#f11d4b]">📍</span> Otay Ranch Town Center
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl mb-12">
          <div data-warranty-anim className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#f11d4b] bg-[#f11d4b]/[0.08] border border-[#f11d4b]/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f11d4b]" />
              Peace of Mind Guarantee
            </span>
          </div>

          <h1
            data-warranty-anim
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal tracking-[-0.035em] text-neutral-900 leading-[1.08] mb-6"
          >
            WARRANTY &{" "}
            <span className="font-semibold text-[#f11d4b]">
              TERMS OF SERVICE
            </span>
          </h1>

          <p
            data-warranty-anim
            className="text-base sm:text-lg md:text-xl text-neutral-600 font-light leading-relaxed max-w-3xl mb-8"
          >
            We stand behind every repair and product we provide. Cell Repair delivers honest workmanship, premium OEM-spec replacement components, and clear, fair terms so you always have total confidence in your device.
          </p>

          <div data-warranty-anim className="flex flex-wrap items-center gap-4">
            <a
              href="#warranty-details"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#f11d4b] hover:bg-[#c90f38] transition-all shadow-md shadow-[#f11d4b]/20 hover:-translate-y-0.5"
            >
              <span>Explore Warranty Policies ↓</span>
            </a>
            <a
              href="tel:+16195139994"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 transition-all hover:-translate-y-0.5"
            >
              <span>Questions? Call (619) 513-9994 ↗</span>
            </a>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div data-warranty-anim className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-4">
          {trustPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#f11d4b]/30 shadow-xs hover:shadow-md transition-all duration-200 group"
            >
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-base font-semibold text-neutral-900 group-hover:text-[#f11d4b] transition-colors mb-1.5">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
