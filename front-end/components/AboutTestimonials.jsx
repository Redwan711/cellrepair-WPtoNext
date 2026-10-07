"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials = [
  {
    name: "Alison Burgas",
    service: "iPhone 15 Pro Screen Fix",
    rating: 5,
    avatar: "AB",
    avatarBg: "bg-rose-100 text-rose-700",
    review:
      "Shattered my iPhone 15 Pro screen during lunch at Otay Ranch. Dropped it off at Cell Repair and had it back looking brand new in under 25 minutes. Touch sensitivity and OLED clarity are flawless!",
    verified: "Verified Customer • Otay Ranch Walk-In",
  },
  {
    name: "Mark Adam",
    service: "Galaxy S23 Water Recovery",
    rating: 5,
    avatar: "MA",
    avatarBg: "bg-blue-100 text-blue-700",
    review:
      "They saved my Galaxy S23 from liquid exposure after another shop told me it was completely dead. Honest upfront pricing, fast diagnostic, and super friendly technicians. Cannot recommend them enough.",
    verified: "Verified Customer • Board Diagnostic",
  },
  {
    name: "Lio Hernandez",
    service: "Battery Swap & Screen Armor",
    rating: 5,
    avatar: "LH",
    avatarBg: "bg-emerald-100 text-emerald-700",
    review:
      "Got my battery replaced and bought a privacy screen protector with free professional installation. Fast, affordable, and backed by a store warranty. Best repair experience in Chula Vista.",
    verified: "Verified Customer • Battery & Protection",
  },
];

export default function AboutTestimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-testimonial-card]",
        { y: 40, opacity: 0, scale: 0.98 },
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
      className="relative py-20 md:py-28 bg-[#fafafa] overflow-hidden border-b border-black/[0.04]"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#f11d4b]/[0.025] blur-[150px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f11d4b]/[0.08] text-[#f11d4b] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#f11d4b]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f11d4b] animate-pulse" />
            TESTIMONIALS
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-neutral-900 leading-[1.15]">
            SEE WHAT OUR HAPPY CUSTOMERS SAY
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            Rated 4.9 stars by hundreds of local Chula Vista & San Diego residents.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12 md:mb-14">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              data-testimonial-card
              className="p-8 rounded-3xl bg-white border border-neutral-200/90 hover:border-[#f11d4b]/30 shadow-xs hover:shadow-xl hover:shadow-[#f11d4b]/[0.05] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
            >
              <div>
                {/* 5 Stars Row */}
                <div className="flex items-center gap-1 text-amber-400 text-lg mb-5">
                  {"★".repeat(item.rating)}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed mb-6">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Author & Service */}
              <div className="pt-5 border-t border-neutral-100 flex items-center gap-3.5">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${item.avatarBg}`}
                >
                  {item.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-neutral-900 group-hover:text-[#f11d4b] transition-colors">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-neutral-400 font-light">
                    {item.verified}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Action Button */}
        <div className="text-center">
          <Link
            href="/book-a-place"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#f11d4b] hover:bg-[#c90f38] transition-all shadow-lg shadow-[#f11d4b]/25 hover:-translate-y-0.5"
          >
            <span>GET A QUOTE</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
