"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Repairs", href: "/book-a-place" },
  { label: "Accessories", href: "/accessories" },
  { label: "About", href: "/about" },
  { label: "Warranty & terms", href: "/warranty-terms" },
  { label: "Blog", href: "/blog" },
];

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="header-phone-icon">
      <path d="M6.6 2.8 9.3 2l2.2 5.3-2.1 1.7a15.8 15.8 0 0 0 5.6 5.6l1.7-2.1 5.3 2.2-.8 2.7a2.4 2.4 0 0 1-2.6 1.7C10.4 18.1 5.9 13.6 4.9 5.4a2.4 2.4 0 0 1 1.7-2.6Z" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const nav = navRef.current;
    if (!header || !nav) return undefined;

    const context = gsap.context(() => {
      gsap.fromTo(
        header.querySelectorAll("[data-header-animate]"),
        { autoAlpha: 0, y: -12 },
        { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.08, ease: "power3.out" },
      );
    }, header);

    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      context.revert();
    };
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    if (!window.matchMedia("(max-width: 760px)").matches) return;

    gsap.to(navRef.current, {
      height: menuOpen ? "auto" : 0,
      autoAlpha: menuOpen ? 1 : 0,
      duration: 0.35,
      ease: "power2.out",
    });
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Top Promo Banner - Scrolls away naturally */}
      <div className="header-promo">
        <div className="header-container container mx-auto header-promo__inner">
          <a className="header-promo__phone" href="tel:+16195139994" data-header-animate>
            <PhoneIcon />
            <span>Get a quote, call/text: <strong>+1 (619) 513-9994</strong></span>
          </a>
          <Link href="/book-a-place" className="header-book-link" data-header-animate>
            Book now
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      {/* Main Nav Header - Sticky on top & becomes thinner when sticky */}
      <header
        ref={headerRef}
        className={`site-header sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "site-header--scrolled" : ""
        }`}
      >
        <div className="header-main">
          <div className="header-container container mx-auto header-main__inner">
            <Link href="/" className="header-logo" aria-label="Cell Repair home" data-header-animate onClick={closeMenu}>
              <Image src="/cell-repair-01.png" alt="Cell Repair" width={198} height={90} priority />
            </Link>

            <button
              type="button"
              className={`header-menu-toggle${menuOpen ? " is-open" : ""}`}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              <span />
              <span />
              <span />
            </button>

            <nav
              ref={navRef}
              id="primary-navigation"
              className={`header-nav${menuOpen ? " is-open" : ""}`}
              aria-label="Primary navigation"
            >
              <ul>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="header-nav__mobile-cta">
                  <Link href="/book-a-place" className="header-cta" onClick={closeMenu}>
                    Get a repair quote <span aria-hidden="true">↗</span>
                  </Link>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </header>
    </>
  );
}
