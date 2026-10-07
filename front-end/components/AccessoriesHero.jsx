"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const categories = [
  { label: "Phone Cases", icon: "📱", desc: "Slim, rugged & MagSafe" },
  { label: "Screen Protectors", icon: "🛡️", desc: "9H glass + free install" },
  { label: "Chargers & Power", icon: "⚡", desc: "20W–65W fast USB-C" },
  { label: "Audio & Headsets", icon: "🎧", desc: "Studio sound & earbuds" },
  { label: "Mounts & Wallets", icon: "🚗", desc: "Car & magnetic mounts" },
];

export default function AccessoriesHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-acc-hero-anim]",
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
      {/* Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#f11d4b]/[0.04] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[350px] bg-amber-500/[0.03] blur-[140px] pointer-events-none rounded-full" />

      {/* Subtle Dot Matrix Background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #18181b 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Top Status Bar */}
        <div
          data-acc-hero-anim
          className="flex flex-wrap items-center justify-between gap-4 pb-7 mb-8 border-b border-neutral-200/80"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-emerald-800">
              In-Store Kiosk Collection
            </span>
            <span className="text-emerald-300">•</span>
            <span className="text-xs text-emerald-700 font-medium">
              In Stock Daily at Otay Ranch
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-xs text-neutral-500">
            <span className="flex items-center gap-1.5">
              <span className="text-[#f11d4b]">✨</span> Free Screen Protector Installation
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#f11d4b]">⚡</span> MFi & PD Fast Charging
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#f11d4b]">📍</span> Space 100, Otay Ranch Mall
            </span>
          </div>
        </div>

        {/* Main Headline & Description */}
        <div className="max-w-4xl mb-12">
          <div data-acc-hero-anim className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#f11d4b] bg-[#f11d4b]/[0.08] border border-[#f11d4b]/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f11d4b]" />
              Curated Mobile Essentials
            </span>
          </div>

          <h1
            data-acc-hero-anim
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal tracking-[-0.035em] text-neutral-900 leading-[1.08] mb-6"
          >
            PROTECT, CHARGE &{" "}
            <span className="font-semibold text-[#f11d4b]">
              ELEVATE
            </span>
          </h1>

          <p
            data-acc-hero-anim
            className="text-base sm:text-lg md:text-xl text-neutral-600 font-light leading-relaxed max-w-3xl mb-8"
          >
            Restoring your devices to peak performance with high-grade accessories, certified compatibility, and convenient walk-in service. Explore drop-tested cases, fast charging blocks, edge-to-edge tempered glass, and studio audio gear in stock today.
          </p>

          {/* Quick Actions */}
          <div data-acc-hero-anim className="flex flex-wrap items-center gap-4">
            <a
              href="tel:+16195139994"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#f11d4b] hover:bg-[#c90f38] transition-all shadow-md shadow-[#f11d4b]/20 hover:-translate-y-0.5"
            >
              <span>Call / Text Stock Inquiry: +1 (619) 513-9994</span>
              <span>↗</span>
            </a>
            <Link
              href="/book-a-place"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 transition-all hover:-translate-y-0.5"
            >
              <span>Visit Kiosk at Otay Ranch</span>
              <span>📍</span>
            </Link>
          </div>
        </div>

        {/* Category Jump Cards Row */}
        <div data-acc-hero-anim className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 pt-4">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="p-4 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#f11d4b]/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {cat.icon}
                </span>
                <span className="text-[#f11d4b] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  ↓
                </span>
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-semibold text-neutral-900 group-hover:text-[#f11d4b] transition-colors">
                  {cat.label}
                </h2>
                <p className="text-[11px] text-neutral-400 font-light mt-0.5">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
