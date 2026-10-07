"use client";

import React from "react";
import Link from "next/link";

export default function CommunityBanner() {
  return (
    <aside
      aria-label="Community service announcement and contact"
      className="relative bg-[#f11d4b] text-white py-5 sm:py-6 overflow-hidden border-t border-black/10 shadow-lg"
    >
      {/* Subtle Pattern / Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/[0.08] via-transparent to-black/[0.08] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 text-center lg:text-left">
          {/* Left Text */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
            <h2 className="text-sm sm:text-base md:text-lg font-bold tracking-wider uppercase text-white drop-shadow-sm">
              PROUDLY SERVING OUR LOCAL COMMUNITY WITH EXPERT REPAIRS
            </h2>
          </div>

          {/* Right Action Button / Call CTA */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+16195139994"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white border-2 border-white hover:bg-white hover:text-[#f11d4b] transition-all duration-200 shadow-sm hover:shadow"
            >
              <span>GET A QUOTE, CALL/TEXT:</span>
              <span className="underline underline-offset-2">+1 (619) 513-9994</span>
            </a>
            <Link
              href="/book-a-place"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#f11d4b] bg-white hover:bg-neutral-100 transition-all duration-200 shadow-sm hover:shadow"
            >
              <span>BOOK NOW</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
