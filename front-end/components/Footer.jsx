"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Repairs", href: "/book-a-place" },
  { label: "Accessories", href: "/accessories" },
  { label: "About", href: "/about" },
  { label: "Warranty & terms", href: "/warranty-terms" },
  { label: "Blog", href: "/blog" },
];

const socialLinks = [
  {
    name: "Google",
    href: "https://www.google.com/maps/search/?api=1&query=Cell+Repair+Otay+Ranch+Town+Center",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.08 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.4a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 1 0 6.34 6.34V9.05a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.48z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Linkedin",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.32a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#17171a] text-neutral-300 font-sans border-t border-white/[0.08] overflow-hidden">
      {/* Subtle Ambient Red Glow */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[300px] bg-[#f11d4b]/[0.035] blur-[140px] pointer-events-none rounded-full" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12">
          {/* Column 1: Brand Logo & About (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-5 group">
              <Image
                src="/cell-repair-01.png"
                alt="Cell Repair"
                width={170}
                height={78}
                className="brightness-105 group-hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              Cell Repair offers reliable mobile repair services using high-quality parts. Visit us during regular business hours for fast, professional walk-in support you can trust.
            </p>
            <div className="mt-5 text-xs text-neutral-500 font-light space-y-1">
              <p>📍 Otay Ranch Town Center • Chula Vista, CA</p>
              <p>📞 Call or Text: <a href="tel:+16195139994" className="text-neutral-300 hover:text-[#f11d4b] transition-colors">+1 (619) 513-9994</a></p>
            </div>
          </div>

          {/* Column 2: MENU (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-5">
              MENU
            </h4>
            <ul className="space-y-3">
              {menuLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-[#f11d4b] transition-colors duration-200 inline-block font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: LINKS (Socials) (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-5">
              LINKS
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors duration-200 group font-light"
                  >
                    <span className="w-5 h-5 flex items-center justify-center text-neutral-400 group-hover:text-[#f11d4b] transition-colors">
                      {social.icon}
                    </span>
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: SUBSCRIBE TO OUR NEWSLETTER (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-4">
              SUBSCRIBE TO OUR NEWSLETTER
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-4">
              Get device maintenance tips, exclusive in-store discounts, and seasonal repair offers directly to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="relative flex items-center max-w-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full bg-white text-neutral-900 placeholder:text-neutral-500 text-sm px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#f11d4b]"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="bg-[#f11d4b] hover:bg-[#c90f38] text-white px-5 py-3 rounded-r-md transition-colors flex items-center justify-center shrink-0 cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>

            {submitted && (
              <p className="mt-2.5 text-xs text-emerald-400 font-medium">
                ✓ Thank you for subscribing! We will keep you updated.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Powered by */}
      <div className="border-t border-white/[0.08] bg-[#121214]">
        <div className="container mx-auto px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-neutral-400 font-light">
          <p>
            Copyright © {new Date().getFullYear()} Cell phone Repair | Powered by{" "}
            <span className="text-[#f11d4b] hover:underline cursor-pointer">
              Redmun
            </span>
          </p>

          <button
            onClick={scrollToTop}
            className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Back to top</span>
            <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
