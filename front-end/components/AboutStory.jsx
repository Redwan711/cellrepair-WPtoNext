"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const galleryCards = [
  {
    image: "/about/logic-board.jpg",
    tag: "Micro-Soldering",
    title: "Precision Circuit Board Repairs",
    desc: "Laser-aligned micro-soldering, FPC connector fixes, and board-level chip diagnostics.",
  },
  {
    image: "/about/technician-bench.jpg",
    tag: "OEM Components",
    title: "Screen & Battery Restorations",
    desc: "Dust-free frame alignment, waterproof adhesive resealing, and tested battery swaps.",
  },
  {
    image: "/about/microscope-repair.jpg",
    tag: "Optical QC",
    title: "Microscope-Level Quality Control",
    desc: "Every restored device undergoes high-magnification multi-point hardware verification.",
  },
];

const supportedBrands = [
  "Apple iPhone",
  "iPad & Tablets",
  "Apple Watch",
  "Samsung Galaxy",
  "Galaxy Tab",
  "Google Pixel",
  "Motorola",
  "Amazon Fire",
];

export default function AboutStory() {
  const storyRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        "[data-story-header]",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Photos Stagger Animation
      gsap.fromTo(
        "[data-story-card]",
        { y: 45, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-story-card]",
            start: "top 85%",
            once: true,
          },
        }
      );
    }, storyRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={storyRef}
      className="relative py-20 md:py-28 bg-white overflow-hidden border-b border-black/[0.04]"
    >
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Top Header Block */}
        <div data-story-header className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f11d4b]/[0.08] text-[#f11d4b] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#f11d4b]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f11d4b]" />
            Master Craftsmanship
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-neutral-900 leading-[1.15] mb-5">
            YOUR TRUSTED PARTNER
          </h2>

          <p className="text-base sm:text-lg text-neutral-700 font-light leading-relaxed">
            <strong className="font-semibold text-neutral-900">Keeping You Connected:</strong> Today, our devices are more than just electronics—they are essential tools for communication, entertainment, and productivity. At Cell Repair, we understand how important they are to your everyday life. That&apos;s why we&apos;re dedicated to delivering fast, reliable, affordable, and eco-friendly repair services you can trust.
          </p>
        </div>

        {/* 3-Photo Visual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14 md:mb-18">
          {galleryCards.map((card, idx) => (
            <div
              key={idx}
              data-story-card
              className="group relative rounded-3xl overflow-hidden bg-neutral-950 aspect-[4/3] sm:aspect-[4/3.2] border border-neutral-200/90 shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Image with zoom on hover */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 group-hover:from-black/90 transition-colors" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full">
                  {card.tag}
                </span>
              </div>

              {/* Bottom Text Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 z-10 text-white">
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-white group-hover:text-[#f11d4b] transition-colors mb-1.5">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Two-Column Editorial Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 pt-8 border-t border-neutral-200/80">
          {/* Column 1: Comprehensive Repairs */}
          <div>
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#f11d4b] mb-3">
              <span>🛠️</span> Full-Spectrum Diagnostics
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3.5">
              Comprehensive Repairs for All Modern Electronics
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed mb-6">
              Cell Repair delivers comprehensive repair services for a wide range of mobile devices. Our experienced technicians service Apple iPhones, iPads, and Apple Watches, as well as all Samsung smartphones and Galaxy Tablets. We also provide expert repairs for Google phones, Motorola devices, Amazon Tablets, and many other mobile devices.
            </p>

            {/* Supported Brand Chips */}
            <div className="flex flex-wrap gap-2">
              {supportedBrands.map((brand) => (
                <span
                  key={brand}
                  className="text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200/60 px-3 py-1.5 rounded-full transition-colors"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Curated Protective Accessories */}
          <div>
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-amber-600 mb-3">
              <span>🛡️</span> Protection & Power
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3.5">
              Protective Gear to Extend Your Device Lifespan
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed mb-6">
              Beyond repairs, Cell Repair offers a carefully selected range of accessories to help protect and extend the life of your devices. Our collection includes durable phone cases and advanced screen protectors, such as privacy tempered glass and ceramic protectors. To keep you powered throughout the day, we also supply essential charging solutions, including traditional phone chargers and convenient wireless power banks.
            </p>

            {/* Perks bullets */}
            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-700">
              <div className="flex items-center gap-2">
                <span className="text-[#f11d4b]">✓</span> Free Glass Installation
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f11d4b]">✓</span> MagSafe & Drop Armor
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f11d4b]">✓</span> PD Fast Charging
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f11d4b]">✓</span> In-Store Stock Daily
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
