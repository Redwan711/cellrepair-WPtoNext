"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const issuesData = [
  {
    id: "broken-screen",
    title: "Broken Screen",
    tag: "30-Min Fast Fix",
    tagColor: "bg-[#f11d4b]/10 text-[#f11d4b] border-[#f11d4b]/20",
    desc: "Shattered glass, unresponsive touch, vertical lines, or black OLED bleed.",
    image: "/issues/broken-screen.webp",
  },
  {
    id: "battery-issues",
    title: "Battery Issues",
    tag: "20-Min Swap",
    tagColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    desc: "Rapid draining, sudden shutdowns, overheating, or swollen battery replacement.",
    image: "/issues/battery-issue.webp",
  },
  {
    id: "water-damage",
    title: "Water Damage",
    tag: "Deep Diagnostic",
    tagColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    desc: "Liquid exposure, corrosion treatment, ultrasound cleaning, and board drying.",
    image: "/issues/water-damage.webp",
  },
  {
    id: "broken-back-glass",
    title: "Broken Back Glass",
    tag: "Laser Precision",
    tagColor: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    desc: "Rear chassis restoration, frame realignments, and camera lens replacement.",
    image: "/issues/broken-back-glass.webp",
  },
  {
    id: "others",
    title: "Other Issues",
    tag: "Full Diagnostics",
    tagColor: "bg-neutral-500/10 text-neutral-700 border-neutral-500/20",
    desc: "Charging ports, speakers, mic, camera fail, buttons, or boot loops.",
    image: "/issues/others.webp",
  },
];

export default function RepairIssues() {
  const [selectedIssue, setSelectedIssue] = useState("broken-screen");
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header Text Entrance
      gsap.fromTo(
        "[data-issues-header]",
        { y: 35, opacity: 0 },
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

      // 5 Issue Cards Staggered Slide-Up
      gsap.fromTo(
        "[data-issue-card]",
        { y: 55, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            once: true,
          },
        }
      );

      // Quote CTA Box Reveal
      gsap.fromTo(
        "[data-quote-box]",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-quote-box]",
            start: "top 88%",
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
      className="relative bg-white py-24 lg:py-32 text-neutral-900 border-t border-black/[0.06] overflow-hidden"
    >
      {/* Background Decorative Ambient Radial Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-500/[0.025] blur-[150px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div
            data-issues-header
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.06] text-xs font-medium uppercase tracking-wider text-neutral-600 mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-[#f11d4b]" />
            Precision Diagnostic Solutions
          </div>

          <h2
            data-issues-header
            className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.035em] leading-[1.12] text-neutral-900 mb-4"
          >
            What issue are you facing?
          </h2>
          <p
            data-issues-header
            className="text-lg text-neutral-500 font-normal max-w-2xl leading-relaxed"
          >
            Select your hardware issue below. We stock premium OEM-grade
            components for fast, same-day repairs with a lifetime warranty.
          </p>
        </div>

        {/* 5 Issue Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-stretch mb-16">
          {issuesData.map((issue) => {
            const isSelected = selectedIssue === issue.id;
            return (
              <div
                key={issue.id}
                data-issue-card
                onClick={() => setSelectedIssue(issue.id)}
                className={`group relative flex flex-col justify-between p-6 rounded-3xl cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? "bg-neutral-50/80 border-[#f11d4b] shadow-[0_12px_32px_rgba(241,29,75,0.08)] ring-1 ring-[#f11d4b]"
                    : "bg-white border-black/[0.08] hover:border-black/20 hover:shadow-[0_8px_28px_rgba(0,0,0,0.06)]"
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${issue.tagColor}`}
                  >
                    {issue.tag}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                      isSelected
                        ? "border-[#f11d4b] bg-[#f11d4b] text-white"
                        : "border-black/20 group-hover:border-black/40"
                    }`}
                  >
                    {isSelected && (
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Center Phone Graphic Mockup */}
                <div className="relative w-full h-[220px] my-3 flex items-center justify-center">
                  <div className="relative w-[120px] h-[210px] transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-105">
                    <Image
                      src={issue.image}
                      alt={issue.title}
                      fill
                      className="object-contain drop-shadow-md"
                      sizes="140px"
                    />
                  </div>
                </div>

                {/* Bottom Title & Details */}
                <div className="mt-4 pt-4 border-t border-black/[0.06]">
                  <h3 className="text-base font-semibold text-neutral-900 group-hover:text-[#f11d4b] transition-colors mb-1.5">
                    {issue.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {issue.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Premium "Get Your Repair Quote" CTA Banner */}
        <div
          data-quote-box
          className="relative rounded-3xl bg-neutral-900 text-white p-8 md:p-12 overflow-hidden shadow-2xl shadow-black/10"
        >
          {/* Subtle Ambient Red Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#f11d4b]/20 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#f11d4b] mb-2 block">
                Instant Online Estimate
              </span>
              <h3 className="text-3xl sm:text-4xl font-normal tracking-tight text-white mb-3">
                Get your custom repair quote in seconds.
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                Bring in your device to Otay Ranch Mall for a free diagnostic,
                or get an exact price estimate online before visiting.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 shrink-0 w-full lg:w-auto">
              <Link
                href="/book-a-place"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#f11d4b] hover:bg-[#c90f38] transition-all duration-200 shadow-lg shadow-[#f11d4b]/25 hover:-translate-y-0.5 text-center"
              >
                Get a Quote Now
                <span aria-hidden="true">↗</span>
              </Link>
              <a
                href="tel:+16195139994"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-neutral-300 bg-white/10 hover:bg-white/15 border border-white/10 transition-all duration-200 hover:-translate-y-0.5 text-center"
              >
                Call: +1 (619) 513-9994
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
