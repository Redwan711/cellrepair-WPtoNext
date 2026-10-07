"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const accessoryCategories = [
  {
    id: "charger",
    category: "CHARGER & CABLES",
    title: "Fast Chargers & Braided Cables",
    desc: "MFi-certified USB-C wall adapters, high-wattage power blocks, and reinforced braided cables built to last.",
    badge: "20W–65W Fast Charge",
    image: "/accessories/charger.jpg",
    colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    aspect: "h-[320px] sm:h-[360px]",
    href: "/accessories",
  },
  {
    id: "headset",
    category: "HEADSET & AUDIO",
    title: "Headphones & Audio Gear",
    desc: "High-fidelity wired and wireless headsets, earbuds, and premium audio adapters with deep bass and clear sound.",
    badge: "Studio Clarity",
    image: "/accessories/headset.jpg",
    colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    aspect: "h-[320px] sm:h-[360px]",
    href: "/accessories",
  },
  {
    id: "cases",
    category: "PHONE CASES",
    title: "Shockproof & Slim Covers",
    desc: "Impact-absorbing silicone, clear bumper, and rugged MagSafe-compatible phone cases for iPhone, Galaxy & Pixel.",
    badge: "10ft Drop-Tested",
    image: "/accessories/phone-case.jpg",
    colSpan: "col-span-12 md:col-span-12 lg:col-span-4",
    aspect: "h-[320px] sm:h-[360px]",
    href: "/accessories",
  },
  {
    id: "screen-protector",
    category: "SCREEN PROTECTOR",
    title: "9H Tempered Glass Armor",
    desc: "Edge-to-edge shatter and scratch protection. Every screen protector purchased in-store is installed free with laser precision.",
    badge: "Free In-Store Installation",
    image: "/accessories/screen-protector.webp",
    colSpan: "col-span-12 lg:col-span-7",
    aspect: "h-[340px] sm:h-[380px]",
    href: "/accessories",
  },
];

const extraPills = [
  "Car Phone Mounts",
  "MagSafe Wallets",
  "Camera Lens Protectors",
  "Wireless Charging Pads",
  "High-Capacity Power Banks",
  "USB-C to Audio Adapters",
];

export default function Accessories() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header Entrance
      gsap.fromTo(
        "[data-acc-header]",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Bento Cards Staggered Slide-Up
      gsap.fromTo(
        "[data-acc-card]",
        { y: 45, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
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
      className="relative py-20 md:py-28 bg-[#fafafa] overflow-hidden border-t border-black/[0.04]"
    >
      {/* Ambient Red Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#f11d4b]/[0.03] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#f11d4b]/[0.02] blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div data-acc-header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f11d4b]/[0.08] text-[#f11d4b] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#f11d4b]/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f11d4b] animate-pulse" />
              In-Store Collection
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-neutral-900 leading-[1.15]">
              ACCESSORIES
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              Restoring your devices to peak performance with high-quality parts, certified expertise, and convenient walk-in service.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/accessories"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-neutral-900 bg-white hover:bg-neutral-100 border border-neutral-200/90 shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5"
            >
              Browse Full Catalog
              <span aria-hidden="true" className="text-[#f11d4b]">↗</span>
            </Link>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* 4 Image Category Cards */}
          {accessoryCategories.map((item) => (
            <div
              key={item.id}
              data-acc-card
              className={`group relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-200/80 shadow-md hover:shadow-2xl hover:shadow-black/15 transition-all duration-500 ${item.colSpan} ${item.aspect}`}
            >
              {/* Background Image with Hover Zoom */}
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Gradient Scrim for Impeccable Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 transition-colors duration-300" />

              {/* Top Floating Badge */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90 bg-black/40 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <span className="text-[11px] font-semibold tracking-wide text-white bg-[#f11d4b] px-3 py-1 rounded-full shadow-sm">
                  {item.badge}
                </span>
              </div>

              {/* Bottom Details Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 z-10 flex flex-col justify-end">
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-[#f11d4b] transition-colors duration-200 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed line-clamp-2">
                  {item.desc}
                </p>

                {/* Micro Action link */}
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-white/90 group-hover:text-white transition-colors">
                  <span>Available at our kiosk</span>
                  <span className="text-[#f11d4b] group-hover:translate-x-1 transition-transform duration-200">→</span>
                </div>
              </div>
            </div>
          ))}

          {/* Card 5: "AND MANY MORE" Feature Bento Card */}
          <div
            data-acc-card
            className="group relative rounded-3xl overflow-hidden col-span-12 lg:col-span-5 h-[340px] sm:h-[380px] p-7 sm:p-9 flex flex-col justify-between bg-gradient-to-br from-neutral-900 via-neutral-900 to-black text-white border border-neutral-800 shadow-xl shadow-black/20 hover:border-[#f11d4b]/40 transition-all duration-300"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-16 -right-16 w-60 h-60 bg-[#f11d4b]/25 blur-[70px] pointer-events-none rounded-full" />
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-amber-500/10 blur-[60px] pointer-events-none rounded-full" />

            {/* Top Badge & Header */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#f11d4b] bg-[#f11d4b]/10 border border-[#f11d4b]/20 px-3 py-1 rounded-full">
                  AND MANY MORE
                </span>
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-[#f11d4b] transition-all duration-300">
                  ↗
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2.5">
                Everything Else Your Phone Needs
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Looking for something specific? We stock hundreds of verified smartphone accessories right at our Otay Ranch kiosk.
              </p>
            </div>

            {/* Middle In-Stock Pills */}
            <div className="relative z-10 flex flex-wrap gap-2 my-3">
              {extraPills.map((pill) => (
                <span
                  key={pill}
                  className="text-xs font-medium text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Bottom Button */}
            <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-neutral-400">
                Walk-in stock updated daily
              </span>
              <a
                href="tel:+16195139994"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f11d4b] hover:text-white transition-colors"
              >
                Call to Check Stock →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
