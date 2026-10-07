"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const policies = [
  {
    id: "repair-warranty",
    category: "REPAIR COVERAGE",
    badge: "Labor & Parts Included",
    title: "Comprehensive Device Repair Warranty",
    desc: "Every repair performed at Cell Repair includes our store warranty protecting against component defects and workmanship faults.",
    covered: [
      "Screen touch unresponsiveness or ghost touching",
      "Display backlight or OLED driver failure",
      "Battery failing to hold standard charge capacity",
      "Defective replacement charging port or speaker",
      "Workmanship and precision solder connections",
    ],
    notCovered: [
      "Subsequent accidental physical drops or cracked glass",
      "Liquid damage or moisture exposure after return",
      "Tampering or modifications by unauthorized third parties",
      "Internal logic board failure unrelated to the replaced part",
    ],
  },
  {
    id: "diagnostic-policy",
    category: "UPFRONT INSPECTION",
    badge: "Transparent Service",
    title: "Diagnostic & 'No Fix, No Fee' Policy",
    desc: "We believe in honest pricing without surprise fees. Before any screw is turned, we thoroughly assess your device and provide a clear quote.",
    covered: [
      "Free initial visual & multimeter diagnostic on-site",
      "Exact quote provided before work commences",
      "No charges if device is determined unrepairable",
      "Zero bench fees for simple diagnostic assessments",
    ],
    notCovered: [
      "Extensive micro-soldering board tracing requiring specialized chip-level lab time (disclosed beforehand)",
    ],
  },
  {
    id: "data-privacy",
    category: "SECURITY & PRIVACY",
    badge: "100% Confidential",
    title: "Customer Data & Privacy Commitment",
    desc: "Your privacy is paramount. We handle your device with strict security standards to ensure your personal data is protected.",
    covered: [
      "We never browse photos, emails, apps, or private messages",
      "Passcode is only requested for touch/camera QA (or test with customer present)",
      "Zero cloud syncing, data downloads, or account access",
      "Customers are welcome to watch testing directly at the kiosk counter",
    ],
    notCovered: [
      "We recommend performing an iCloud/Google backup before leaving devices for motherboard repairs",
    ],
  },
  {
    id: "terms-storage",
    category: "STORE TERMS",
    badge: "60-Day Safe Hold",
    title: "Device Storage & Terms of Service",
    desc: "When dropping off devices at our Otay Ranch Town Center kiosk, our standardized terms ensure accountability and care.",
    covered: [
      "Completed devices are securely stored in locked storage for up to 60 days",
      "Automatic SMS notification when device is restored and ready for pickup",
      "Quick verification of identity before device release",
    ],
    notCovered: [
      "Devices unclaimed after 60 days of multiple contact attempts may be recycled in compliance with California commercial code",
    ],
  },
  {
    id: "accessories-return",
    category: "IN-STORE ACCESSORIES",
    badge: "30-Day Guarantee",
    title: "Accessories Warranty & Exchange",
    desc: "Every charger, cable, case, and screen protector sold at our kiosk meets verified quality and safety standards.",
    covered: [
      "30-day exchange for defective chargers, cables, or car mounts",
      "Free replacement for any tempered glass with manufacturing defects",
      "Complimentary re-alignment if screen protector lifts within 7 days",
    ],
    notCovered: [
      "Heavy physical wear, chewed cables, or customer-induced damage",
    ],
  },
];

export default function WarrantyPolicy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-policy-card]",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
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
      id="warranty-details"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-white overflow-hidden border-b border-black/[0.04]"
    >
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f11d4b]/[0.08] text-[#f11d4b] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#f11d4b]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f11d4b]" />
            Detailed Service Policies
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-neutral-900 leading-[1.15] mb-5">
            CLEAR, FAIR & TRANSPARENT POLICIES
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            Read through our comprehensive service policies. If you have any questions regarding your specific repair or device condition, feel free to call or text us anytime.
          </p>
        </div>

        {/* Mobile / Tablet Quick Navigation Pills */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-4 mb-8 -mx-6 px-6 no-scrollbar">
          {policies.map((p, idx) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="shrink-0 text-xs font-semibold px-3.5 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200/80 text-neutral-700 border border-neutral-200/60 transition-colors"
            >
              0{idx + 1}. {p.category}
            </a>
          ))}
        </div>

        {/* 12-Column Responsive Layout: Cards (8 cols) + Sticky Guide & Navigator (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Policy Cards */}
          <div className="lg:col-span-8 space-y-8">
            {policies.map((p) => (
              <div
                key={p.id}
                id={p.id}
                data-policy-card
                className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-neutral-50/70 border border-neutral-200/90 hover:border-[#f11d4b]/40 hover:bg-white hover:shadow-xl hover:shadow-[#f11d4b]/[0.04] transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#f11d4b]">
                    {p.category}
                  </span>
                  <span className="text-[11px] font-semibold text-neutral-600 bg-white border border-neutral-200 px-3 py-1 rounded-full w-fit">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight mb-3">
                  {p.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed mb-6">
                  {p.desc}
                </p>

                {/* Covered vs Excluded Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-neutral-200/80">
                  {/* Covered */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3 flex items-center gap-1.5">
                      <span>✓</span> What Is Covered:
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-neutral-700 font-light">
                      {p.covered.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Not Covered / Exceptions */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-1.5">
                      <span>✕</span> Exclusions & Exceptions:
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-neutral-500 font-light">
                      {p.notCovered.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-neutral-400 font-bold mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Policy Navigator & Claim Guide */}
          <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            {/* Table of Contents Nav Card */}
            <div className="p-6 rounded-3xl bg-neutral-50/80 border border-neutral-200/90 shadow-xs">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-200/60">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Policy Navigator
                </span>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#f11d4b]/10 text-[#f11d4b]">
                  5 Policies
                </span>
              </div>

              <nav className="space-y-1.5">
                {policies.map((p, idx) => (
                  <a
                    key={p.id}
                    href={`#${p.id}`}
                    className="flex items-center justify-between p-3 rounded-2xl text-xs font-medium text-neutral-700 hover:text-neutral-900 hover:bg-white hover:shadow-xs border border-transparent hover:border-neutral-200/80 transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[11px] text-neutral-400 group-hover:text-[#f11d4b]">
                        0{idx + 1}
                      </span>
                      <span className="font-semibold text-neutral-800 group-hover:text-[#f11d4b] transition-colors truncate max-w-[190px]">
                        {p.title}
                      </span>
                    </div>
                    <span className="text-neutral-400 group-hover:text-[#f11d4b] group-hover:translate-x-0.5 transition-all">
                      →
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Claim Assistance Card with Photo */}
            <div className="rounded-3xl border border-neutral-200/90 bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                <Image
                  src="/warranty/terms-tablet.webp"
                  alt="Cell Repair transparent terms and service inspection"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#f11d4b] px-2.5 py-0.5 rounded-full">
                    Hassle-Free Warranty
                  </span>
                  <h4 className="text-sm font-semibold mt-1.5">
                    Fast In-Person Warranty Lookup
                  </h4>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900 mb-1">
                    Need to File a Claim?
                  </h4>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    Walk in to our kiosk at Otay Ranch Town Center. No paper receipt needed — our technician will lookup your repair warranty by phone number or IMEI on the spot.
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2.5">
                  <a
                    href="tel:+16195139994"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#f11d4b] hover:bg-[#c90f38] transition-colors shadow-xs"
                  >
                    <span>Call / Text (619) 513-9994</span>
                  </a>
                  <a
                    href="https://maps.google.com/?q=2015+Birch+Rd+Otay+Ranch+Town+Center+Chula+Vista+CA+91915"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200/70 transition-colors"
                  >
                    <span>Get Directions to Kiosk ↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Guarantees Box */}
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/70 text-xs text-neutral-600 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-neutral-800">
                <span className="text-[#f11d4b]">✓</span> OEM-Quality Certified Parts
              </div>
              <div className="flex items-center gap-2 font-semibold text-neutral-800">
                <span className="text-[#f11d4b]">✓</span> Full Parts & Labor Coverage
              </div>
              <div className="flex items-center gap-2 font-semibold text-neutral-800">
                <span className="text-[#f11d4b]">✓</span> 60-Day Safe Device Storage
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
