"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const supportedDevices = [
  { name: "iPhone", tag: "Screen & Battery in 20m" },
  { name: "Samsung Galaxy", tag: "OEM OLED Restorations" },
  { name: "Google Pixel", tag: "Screen & Charge Port" },
  { name: "iPad & Tablets", tag: "Glass & Digitizer Fix" },
  { name: "Apple Watch", tag: "Glass & Sensor Repair" },
];

export default function RepairHero() {
  const heroRef = useRef(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Text Stagger
      gsap.fromTo(
        "[data-hero-headline]",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      // Bento Cards Entrance
      gsap.fromTo(
        "[data-hero-bento]",
        { y: 40, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.15,
        }
      );

      // Devices Chips Entrance
      gsap.fromTo(
        "[data-hero-chip]",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out",
          delay: 0.4,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+16195139994");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("cellrepairandaccessories@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      ref={heroRef}
      className="relative pt-10 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-[#fcfcfd] via-white to-[#fafafa] text-neutral-900 overflow-hidden border-b border-black/[0.04]"
    >
      {/* Background Subtle Tech Graphic & Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Subtle dot matrix pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #18181b 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Ambient Warm Brand Glows */}
        <div className="absolute -top-32 right-1/4 w-[600px] h-[450px] bg-[#f11d4b]/[0.045] blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[350px] bg-amber-500/[0.03] blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Top Floating Live Status Bar */}
        <div
          data-hero-headline
          className="flex flex-wrap items-center justify-between gap-4 pb-7 mb-8 border-b border-neutral-200/80"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-emerald-800">
              Master Technicians on Duty
            </span>
            <span className="text-emerald-300">•</span>
            <span className="text-xs text-emerald-700 font-medium">
              Walk-Ins Welcome Today
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-xs text-neutral-500">
            <span className="flex items-center gap-1.5">
              <span className="text-[#f11d4b]">⚡</span> 20–30 Min Express Service
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#f11d4b]">🛡️</span> Parts Warranty Included
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#f11d4b]">📍</span> Otay Ranch Town Center
            </span>
          </div>
        </div>

        {/* Main Headline & Narrative */}
        <div className="max-w-4xl mb-14">
          <div data-hero-headline className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#f11d4b] bg-[#f11d4b]/[0.08] border border-[#f11d4b]/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f11d4b]" />
              Fast Walk-In Estimates
            </span>
          </div>

          <h1
            data-hero-headline
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal tracking-[-0.035em] text-neutral-900 leading-[1.08] mb-6"
          >
            GET A QUOTE{" "}
            <span className="font-semibold text-[#f11d4b]">
              FOR REPAIR
            </span>
          </h1>

          <p
            data-hero-headline
            className="text-base sm:text-lg md:text-xl text-neutral-600 font-light leading-relaxed max-w-3xl"
          >
            Keeping you connected today. Our devices are more than just electronics—they are essential tools that connect us, entertain us, and drive our daily lives. At <strong className="text-neutral-900 font-semibold">Cell Repair</strong>, we understand how vital your device is. That is why we provide expert repairs that are fast, dependable, affordable, and eco-friendly.
          </p>
        </div>

        {/* 3 Channels Bento Grid (Light Mode) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Bento Card 1: Primary Call/Text Hotline (lg:col-span-5) */}
          <div
            data-hero-bento
            className="lg:col-span-5 group relative rounded-3xl p-8 sm:p-9 bg-white border border-neutral-200/90 hover:border-[#f11d4b]/40 shadow-sm hover:shadow-xl hover:shadow-[#f11d4b]/[0.07] transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Top red accent stripe */}
            <div className="absolute top-0 inset-x-0 h-1 bg-[#f11d4b]" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#f11d4b]/10 border border-[#f11d4b]/20 flex items-center justify-center text-[#f11d4b] shadow-xs group-hover:scale-105 transition-transform">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  FASTEST RESPONSE
                </span>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-[#f11d4b] mb-1.5">
                DIRECT TECHNICIAN LINE
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight mb-3">
                MAKE A CALL OR TEXT
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mb-6">
                Speak directly with the repair tech at our bench. Describe your issue or text a photo for an immediate quote and parts check.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-100 space-y-3">
              <a
                href="tel:+16195139994"
                className="inline-flex items-center justify-between w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider text-white bg-[#f11d4b] hover:bg-[#c90f38] transition-all shadow-lg shadow-[#f11d4b]/20 hover:-translate-y-0.5 group/btn"
              >
                <span>CALL: +1 (619) 513-9994</span>
                <span className="text-base group-hover/btn:translate-x-1 transition-transform">
                  ↗
                </span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href="sms:+16195139994"
                  className="flex-1 text-center py-2.5 px-4 rounded-xl text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 transition-colors"
                >
                  💬 Send SMS Text
                </a>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="py-2.5 px-4 rounded-xl text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 transition-colors shrink-0 cursor-pointer"
                >
                  {copiedPhone ? "✓ Copied!" : "📋 Copy"}
                </button>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Location & Walk-In Directions (lg:col-span-4) */}
          <div
            data-hero-bento
            className="lg:col-span-4 group relative rounded-3xl p-8 sm:p-9 bg-white border border-neutral-200/90 hover:border-amber-400/60 shadow-sm hover:shadow-xl hover:shadow-amber-500/[0.06] transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Top amber accent stripe */}
            <div className="absolute top-0 inset-x-0 h-1 bg-amber-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 shadow-xs group-hover:scale-105 transition-transform">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full">
                  IN-PERSON
                </span>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1.5">
                OTAY RANCH MALL KIOSK
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 tracking-tight mb-3">
                LOCATION
              </h3>
              <p className="text-sm text-neutral-900 font-medium leading-snug mb-1">
                2015 Birch Rd (Inside transit plaza)
              </p>
              <p className="text-xs text-neutral-500 font-light leading-relaxed mb-4">
                Next to Claire&apos;s, Chula Vista, CA 91915
              </p>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Enjoy outdoor mall shopping, coffee, or dining while our technician fixes your phone in 20–30 minutes.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-100">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Otay+Ranch+Town+Center+2015+Birch+Rd+Chula+Vista+CA+91915"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-2xl text-xs font-bold uppercase tracking-wider text-neutral-900 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 transition-all hover:-translate-y-0.5"
              >
                <span>Open in Google Maps ↗</span>
              </a>
            </div>
          </div>

          {/* Bento Card 3: Our Email & Diagnostics (lg:col-span-3) */}
          <div
            data-hero-bento
            className="lg:col-span-3 group relative rounded-3xl p-8 sm:p-9 bg-white border border-neutral-200/90 hover:border-blue-400/60 shadow-sm hover:shadow-xl hover:shadow-blue-500/[0.06] transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Top blue accent stripe */}
            <div className="absolute top-0 inset-x-0 h-1 bg-blue-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 shadow-xs group-hover:scale-105 transition-transform">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                  PHOTO QUOTE
                </span>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1.5">
                DIRECT INBOX
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 tracking-tight mb-3">
                OUR EMAIL
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mb-3">
                Need a motherboard or liquid damage assessment? Email photos of the damage.
              </p>
              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/80 mb-4">
                <div className="text-[11px] text-neutral-600 truncate font-mono">
                  cellrepairandaccessories@gmail.com
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center gap-2">
              <a
                href="mailto:cellrepairandaccessories@gmail.com"
                className="flex-1 inline-flex items-center justify-center py-3 px-4 rounded-xl text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 transition-colors"
              >
                Send Email ↗
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="py-3 px-3.5 rounded-xl text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copiedEmail ? "✓" : "📋"}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Devices Quick Badges */}
        <div className="pt-6 border-t border-neutral-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs uppercase font-semibold tracking-wider text-neutral-500">
              Popular Devices Restored On-Site:
            </span>
            <div className="flex flex-wrap items-center gap-2.5">
              {supportedDevices.map((d) => (
                <div
                  key={d.name}
                  data-hero-chip
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-neutral-50 border border-neutral-200/80 shadow-2xs transition-colors text-xs text-neutral-700"
                >
                  <span className="font-semibold text-neutral-900">{d.name}</span>
                  <span className="text-[11px] text-neutral-400 font-light">
                    ({d.tag})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
