"use client";

import React, { useState } from "react";
import Image from "next/image";

export const faqData = [
  {
    id: 1,
    question: "What types of devices do you repair?",
    answer:
      "We specialize in a wide range of electronics. We repair smartphones (iPhone, Samsung, Google, Sony, LG, and more). If it has a power button, we can probably fix it!",
  },
  {
    id: 2,
    question: "How can I get a price quote?",
    answer:
      "You can get an estimate in seconds by calling or texting us at +1 (619) 513-9994, using the quote request section on this page, or simply walking into our Otay Ranch Town Center kiosk for a free, no-obligation inspection.",
  },
  {
    id: 3,
    question: "Do you sell accessories or spare parts?",
    answer:
      "Yes! We stock premium 9H tempered glass screen protectors (with free precision installation in-store), MFi-certified USB-C fast chargers, braided cables, shockproof phone cases, and studio-grade audio headsets.",
  },
  {
    id: 4,
    question: "Can I talk to a technician by phone?",
    answer:
      "Yes, absolutely! You can call or text our technician directly at +1 (619) 513-9994 during regular business hours to discuss your device's specific issues and get direct advice.",
  },
  {
    id: 5,
    question: "Do you offer mail-in repairs or pickup services?",
    answer:
      "We primarily focus on convenient walk-in service at Otay Ranch Town Center, where most screen and battery fixes take just 20 to 30 minutes. For corporate fleets or mail-in inquiries, please contact us directly.",
  },
  {
    id: 6,
    question: "How long does a typical repair take?",
    answer:
      "Most common repairs — including iPhone and Samsung screen replacements, battery swaps, and camera lens replacements — are completed within 20 to 30 minutes while you browse the mall.",
  },
  {
    id: 7,
    question: "Is there a warranty on your repairs?",
    answer:
      "Yes! Every repair performed at Cell Repair includes our comprehensive warranty covering both parts and workmanship. We exclusively use tested, OEM-spec grade components.",
  },
];

export default function RepairFAQ() {
  const [openId, setOpenId] = useState(1); // First item open by default like in the screenshot

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden border-t border-black/[0.04]">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#f11d4b]/[0.025] blur-[140px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f11d4b]/[0.08] text-[#f11d4b] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#f11d4b]/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f11d4b]" />
              Clear Answers
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-neutral-900 leading-[1.15] mb-8">
              FREQUENTLY <br className="hidden sm:inline" />
              ASKED QUESTIONS
            </h2>

            {/* Accordion List */}
            <div className="space-y-3.5">
              {faqData.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "border-[#f11d4b]/40 bg-neutral-50/70 shadow-sm"
                        : "border-neutral-200/80 bg-white hover:border-neutral-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(item.id)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span
                        className={`text-sm sm:text-base font-semibold tracking-tight transition-colors ${
                          isOpen ? "text-[#f11d4b]" : "text-neutral-900"
                        }`}
                      >
                        {item.question}
                      </span>
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-base font-bold transition-all duration-200 ${
                          isOpen
                            ? "bg-[#f11d4b] text-white rotate-180"
                            : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                        }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed border-t border-neutral-200/50">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-Res Technician Photo */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-28">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 bg-neutral-950 aspect-[4/4.5] group">
              <Image
                src="/faq-repair.jpg"
                alt="Cell Repair master technician working with magnifying lamp and precision tools"
                fill
                className="object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Bottom In-Image Badge */}
              <div className="absolute bottom-6 inset-x-6 z-10 text-white">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#f11d4b] mb-1">
                  Precision Craftsmanship
                </div>
                <div className="text-base sm:text-lg font-medium text-white drop-shadow">
                  Honest Diagnostics. Expert Care.
                </div>
                <p className="text-xs text-neutral-300 font-light mt-1">
                  Every device is treated with certified surgical precision.
                </p>
              </div>
            </div>

            {/* Floating Glassmorphic Trust Card */}
            <div className="mt-6 p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-neutral-900">
                  Still have questions?
                </div>
                <div className="text-xs text-neutral-500 font-light mt-0.5">
                  Speak directly with a technician on duty
                </div>
              </div>
              <a
                href="tel:+16195139994"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#f11d4b] hover:bg-[#c90f38] transition-colors shrink-0 shadow-sm"
              >
                <span>Call Now</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
