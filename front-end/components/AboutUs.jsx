"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const highlights = [
  {
    title: "Premium OEM-Grade Parts",
    desc: "We only source rigorously tested parts accompanied by our warranty for enduring durability.",
    icon: (
      <svg className="w-5 h-5 text-[#f11d4b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Walk-In Convenience",
    desc: "No prior booking required. Our kiosk is open 7 days a week during regular business hours.",
    icon: (
      <svg className="w-5 h-5 text-[#f11d4b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Certified Master Technicians",
    desc: "Skilled specialists handling screen lamination, micro-soldering, and intricate motherboard restoration.",
    icon: (
      <svg className="w-5 h-5 text-[#f11d4b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export default function AboutUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Content side reveal
      gsap.fromTo(
        "[data-about-content]",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Visual side reveal
      gsap.fromTo(
        "[data-about-visual]",
        { x: 40, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
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
      className="relative py-20 md:py-32 bg-white overflow-hidden border-t border-black/[0.04]"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[550px] h-[550px] bg-[#f11d4b]/[0.025] blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Content */}
          <div data-about-content className="lg:col-span-6 flex flex-col justify-center">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f11d4b]/[0.08] text-[#f11d4b] text-xs font-semibold uppercase tracking-wider mb-5 w-fit border border-[#f11d4b]/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f11d4b]" />
              Who We Are
            </div>

            {/* Main Section Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-neutral-900 leading-[1.15] mb-6">
              ABOUT US
            </h2>

            {/* Original Core Statement Elevated */}
            <p className="text-lg sm:text-xl font-normal text-neutral-800 leading-relaxed mb-4">
              Cell Repair provides professional repair services for mobile devices using high-quality parts. Our walk-in service is available during regular business hours.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed mb-8">
              Based right inside Otay Ranch Town Center in Chula Vista, we treat every phone, tablet, and smart device with surgical precision. From simple cracked glass swaps to advanced micro-soldering board repairs, our certified specialists ensure your device leaves our station performing like new.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 mt-0.5 border border-neutral-200/60">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-500 font-light mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#f11d4b] hover:bg-[#c90f38] transition-all duration-200 shadow-lg shadow-[#f11d4b]/20 hover:-translate-y-0.5"
              >
                More About Us
                <span aria-hidden="true">↗</span>
              </Link>
              <a
                href="tel:+16195139994"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 transition-all duration-200 hover:-translate-y-0.5"
              >
                Call: +1 (619) 513-9994
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div data-about-visual className="lg:col-span-6 relative">
            {/* Primary Workbench Photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-neutral-950 aspect-[4/3] group">
              <Image
                src="/unnamed.jpg"
                alt="Cell Repair technician workstation repairing smartphone"
                fill
                className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Bottom In-Image Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#f11d4b] mb-1">
                    Precision Lab Station
                  </div>
                  <div className="text-base sm:text-lg font-medium text-white drop-shadow">
                    Certified Micro-Repair & Diagnostics
                  </div>
                </div>
                <div className="shrink-0 hidden sm:flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Walk-ins Welcome
                </div>
              </div>
            </div>

            {/* Floating Glassmorphic Trust Card */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-neutral-200 shadow-xl max-w-[280px] sm:max-w-[320px] hidden sm:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#f11d4b]/10 text-[#f11d4b] flex items-center justify-center font-bold text-lg">
                  ★
                </div>
                <div>
                  <div className="text-sm font-bold text-neutral-900">
                    Otay Ranch Town Center
                  </div>
                  <div className="text-xs text-neutral-500">
                    Walk-in service daily
                  </div>
                </div>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed font-light">
                Available during regular mall business hours. Fast 20–30 minute turnaround on most common repairs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
