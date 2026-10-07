"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const schedule = [
  { day: "Monday", hours: "10:00 AM – 8:00 PM", dayIndex: 1 },
  { day: "Tuesday", hours: "10:00 AM – 8:00 PM", dayIndex: 2 },
  { day: "Wednesday", hours: "10:00 AM – 8:00 PM", dayIndex: 3 },
  { day: "Thursday", hours: "10:00 AM – 8:00 PM", dayIndex: 4 },
  { day: "Friday", hours: "10:00 AM – 9:00 PM", dayIndex: 5 },
  { day: "Saturday", hours: "10:00 AM – 9:00 PM", dayIndex: 6 },
  { day: "Sunday", hours: "10:00 AM – 6:00 PM", dayIndex: 0 },
];

export default function StoreLocation() {
  const [activeMediaTab, setActiveMediaTab] = useState("map"); // "map" | "photo"
  const [currentDayIndex, setCurrentDayIndex] = useState(null);
  const [isOpenNow, setIsOpenNow] = useState(true);

  const sectionRef = useRef(null);
  const mediaContainerRef = useRef(null);

  useEffect(() => {
    // 1. Determine current day & store open status in Pacific Time
    const now = new Date();
    const ptDateString = now.toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    });
    const ptDate = new Date(ptDateString);
    const day = ptDate.getDay();
    const hours = ptDate.getHours();
    setCurrentDayIndex(day);

    const closeHour = day === 0 ? 18 : day === 5 || day === 6 ? 21 : 20;
    setIsOpenNow(hours >= 10 && hours < closeHour);

    // 2. GSAP ScrollTrigger Pro-Grade Animations
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header Text Staggered Lift
      gsap.fromTo(
        "[data-loc-header]",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Bento Cards Lift & Scale Reveal
      gsap.fromTo(
        "[data-loc-card]",
        {
          y: 50,
          opacity: 0,
          scale: 0.98,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            once: true,
          },
        }
      );

      // Subtle Background Ambient Parallax
      gsap.to("[data-loc-glow]", {
        y: 90,
        x: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // Handle Tab Switch Animation
  const handleTabChange = (tab) => {
    if (tab === activeMediaTab) return;
    if (mediaContainerRef.current) {
      gsap.fromTo(
        mediaContainerRef.current,
        { opacity: 0.35, scale: 0.99 },
        { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" }
      );
    }
    setActiveMediaTab(tab);
  };

  const googleMapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Cell+Repair+-+Otay+Ranch+Mall+2015+Birch+Rd+Chula+Vista+CA+91915";

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#fcfcfd] border-t border-black/[0.06] py-20 lg:py-28 text-neutral-900 overflow-hidden"
    >
      {/* Decorative Parallax Glow */}
      <div
        data-loc-glow
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-500/[0.035] blur-[140px] pointer-events-none rounded-full"
      />

      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <div
            data-loc-header
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.06] text-xs font-medium uppercase tracking-wider text-neutral-600 mb-5"
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isOpenNow ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
              }`}
            />
            {isOpenNow ? "Open Today for Walk-ins" : "Closed • Opens at 10:00 AM"}
          </div>

          <h2
            data-loc-header
            className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.035em] leading-[1.12] text-neutral-900 mb-4"
          >
            Visit our repair studio at Otay Ranch Town Center.
          </h2>
          <p
            data-loc-header
            className="text-lg text-neutral-500 font-normal max-w-2xl leading-relaxed"
          >
            Conveniently situated in the outdoor shopping concourse opposite
            Zumiez. Drop off your broken device for a fast 30-minute repair while
            you shop or dine.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Interactive Map & Storefront Visuals (7 cols) */}
          <div
            data-loc-card
            className="lg:col-span-7 flex flex-col bg-white rounded-3xl border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-shadow duration-300 overflow-hidden"
          >
            {/* View Switcher Header */}
            <div className="flex flex-wrap items-center justify-between p-4 sm:p-5 gap-3 border-b border-black/[0.06]">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-neutral-900">
                  Otay Ranch Mall
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 font-normal">
                  Opposite Zumiez
                </span>
              </div>

              {/* Tabs with smooth motion */}
              <div className="flex items-center p-1 rounded-xl bg-neutral-100 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => handleTabChange("map")}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                    activeMediaTab === "map"
                      ? "bg-white text-neutral-900 shadow-sm"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  Interactive Map
                </button>
                <button
                  type="button"
                  onClick={() => handleTabChange("photo")}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                    activeMediaTab === "photo"
                      ? "bg-white text-neutral-900 shadow-sm"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  Kiosk Photo
                </button>
              </div>
            </div>

            {/* Media Area */}
            <div
              ref={mediaContainerRef}
              className="relative w-full flex-1 min-h-[440px] sm:min-h-[500px] bg-neutral-100 overflow-hidden"
            >
              {activeMediaTab === "map" ? (
                <iframe
                  title="Cell Repair - Otay Ranch Mall Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4000!2d-116.967599!3d32.623822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d945b4858a7b2f%3A0x46fffca104e4fea8!2sCell%20Repair%20-%20Otay%20Ranch%20Mall!5e0!3m2!1sen!2sus!4v1791284929652!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full filter saturate-[0.95] contrast-[1.02]"
                />
              ) : (
                <div className="relative w-full h-full min-h-[440px] sm:min-h-[500px]">
                  <Image
                    src="/mall-kiosk.webp"
                    alt="Cell Repair kiosk at Otay Ranch Mall opposite Zumiez"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full shadow-lg">
                    📍 Outdoor concourse kiosk (opposite Zumiez)
                  </div>
                </div>
              )}
            </div>

            {/* Address & Navigation Quick Action Footer */}
            <div className="mt-auto p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-black/[0.06]">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  Studio Address
                </div>
                <div className="text-sm font-medium text-neutral-900 leading-snug">
                  2015 Birch Rd, Chula Vista, CA 91915
                </div>
                <div className="text-xs text-neutral-500 mt-0.5">
                  Otay Ranch Town Center • Opposite Zumiez
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-neutral-900 hover:bg-[#f11d4b] transition-all duration-200 shadow-sm shrink-0 hover:-translate-y-0.5"
              >
                Get Directions
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Operating Hours & Direct Contact Bento (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Hours Card */}
            <div
              data-loc-card
              className="bg-white rounded-3xl p-6 sm:p-7 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-shadow duration-300 flex-1"
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-base font-semibold text-neutral-900">
                    Studio Hours
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Open 7 days a week for walk-ins
                  </p>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600">
                  Pacific Time
                </span>
              </div>

              <div className="space-y-2 text-sm">
                {schedule.map((item) => {
                  const isToday = currentDayIndex === item.dayIndex;
                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between py-2 px-3 rounded-xl transition-all duration-200 ${
                        isToday
                          ? "bg-[#f11d4b]/[0.08] border border-[#f11d4b]/20 text-neutral-900 font-semibold shadow-xs"
                          : "text-neutral-600 hover:bg-neutral-50 hover:translate-x-1"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{item.day}</span>
                        {isToday && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#f11d4b] bg-white px-1.5 py-0.5 rounded shadow-xs">
                            Today
                          </span>
                        )}
                      </div>
                      <span
                        className={
                          isToday
                            ? "text-[#f11d4b] font-medium"
                            : "text-neutral-500 font-mono text-xs"
                        }
                      >
                        {item.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Contact Bento Card */}
            <div
              data-loc-card
              className="bg-white rounded-3xl p-6 border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-shadow duration-300"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                Direct Contact & Support
              </div>

              <div className="space-y-2.5">
                <a
                  href="tel:+16195139994"
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-neutral-50 hover:bg-[#f11d4b]/[0.05] border border-black/[0.04] hover:border-[#f11d4b]/20 transition-all duration-200 group hover:-translate-y-0.5 shadow-2xs hover:shadow-sm"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-white border border-black/[0.06] flex items-center justify-center text-neutral-700 group-hover:text-[#f11d4b] group-hover:border-[#f11d4b]/30 shrink-0 transition-colors">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-neutral-400 uppercase font-medium">
                        Call / Text
                      </div>
                      <div className="text-sm font-semibold text-neutral-900 group-hover:text-[#f11d4b] transition-colors">
                        +1 (619) 513-9994
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-neutral-400 group-hover:text-[#f11d4b] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>

                <a
                  href="mailto:cellrepairandaccessories@gmail.com"
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-neutral-50 hover:bg-[#f11d4b]/[0.05] border border-black/[0.04] hover:border-[#f11d4b]/20 transition-all duration-200 group hover:-translate-y-0.5 shadow-2xs hover:shadow-sm"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-white border border-black/[0.06] flex items-center justify-center text-neutral-700 group-hover:text-[#f11d4b] group-hover:border-[#f11d4b]/30 shrink-0 transition-colors">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-neutral-400 uppercase font-medium">
                        Email Inquiry
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-neutral-900 group-hover:text-[#f11d4b] transition-colors break-all">
                        cellrepairandaccessories@gmail.com
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-neutral-400 group-hover:text-[#f11d4b] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
                    ↗
                  </span>
                </a>
              </div>

              {/* Perks Row */}
              <div className="mt-5 pt-4 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500">
                <span>⚡ 30-Min Fast Turnaround</span>
                <span>•</span>
                <span>🅿️ Free Mall Parking</span>
                <span>•</span>
                <span>🛡️ Lifetime Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
