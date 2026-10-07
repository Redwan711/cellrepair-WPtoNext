import React from "react";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://cellrepairandaccessories.com";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["ElectronicsStore", "LocalBusiness"],
    "@id": `${SITE_URL}/#store`,
    name: "Cell Repair - Otay Ranch Mall",
    alternateName: ["Cell Repair & Accessories", "Cell Repair Chula Vista"],
    url: SITE_URL,
    logo: `${SITE_URL}/cell-repair-01.png`,
    image: [
      `${SITE_URL}/kiosk.jpg`,
      `${SITE_URL}/faq-repair.jpg`,
      `${SITE_URL}/storefront.jpg`,
    ],
    description:
      "Expert 20-30 minute smartphone, iPhone, iPad, and tablet repair studio at Otay Ranch Town Center in Chula Vista. We specialize in screen replacement, battery repairs, charging ports, and water damage.",
    telephone: "+1-619-513-9994",
    email: "cellrepairandaccessories@gmail.com",
    priceRange: "$$",
    paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Apple Pay", "Google Pay"],
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2015 Birch Rd (Opposite Zumiez)",
      addressLocality: "Chula Vista",
      addressRegion: "CA",
      postalCode: "91915",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.623822,
      longitude: -116.967599,
    },
    hasMap:
      "https://www.google.com/maps/dir/?api=1&destination=Cell+Repair+-+Otay+Ranch+Mall+2015+Birch+Rd+Chula+Vista+CA+91915",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "11:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Chula Vista" },
      { "@type": "City", name: "Otay Ranch" },
      { "@type": "City", name: "Eastlake" },
      { "@type": "City", name: "Bonita" },
      { "@type": "City", name: "Imperial Beach" },
      { "@type": "City", name: "San Diego" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://www.google.com/maps/search/?api=1&query=Cell+Repair+Otay+Ranch+Town+Center",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({ items }) {
  if (!items || !items.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question || item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer || item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function RepairServicesJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        name: "iPhone Screen Repair & Replacement",
        description:
          "Fast 20-30 minute OLED and LCD display replacement for all iPhone models using OEM-grade components with warranty.",
        serviceType: "Phone Screen Repair",
        provider: {
          "@type": "LocalBusiness",
          name: "Cell Repair - Otay Ranch Mall",
        },
        areaServed: "Chula Vista, CA",
      },
      {
        "@type": "Service",
        name: "Smartphone Battery Replacement",
        description:
          "Fresh high-capacity battery installation for iPhone, Samsung Galaxy, and Google Pixel to restore all-day battery life.",
        serviceType: "Battery Replacement",
        provider: {
          "@type": "LocalBusiness",
          name: "Cell Repair - Otay Ranch Mall",
        },
        areaServed: "Chula Vista, CA",
      },
      {
        "@type": "Service",
        name: "Samsung Galaxy & Android Repairs",
        description:
          "Certified repair for curved AMOLED displays, back glass, and charging ports on Samsung Galaxy S, Note, and Z Fold devices.",
        serviceType: "Android Phone Repair",
        provider: {
          "@type": "LocalBusiness",
          name: "Cell Repair - Otay Ranch Mall",
        },
        areaServed: "Chula Vista, CA",
      },
      {
        "@type": "Service",
        name: "iPad & Tablet Repair",
        description:
          "Digitizer glass and display panel repairs for iPad Pro, iPad Air, iPad Mini, and Android tablets.",
        serviceType: "Tablet Repair",
        provider: {
          "@type": "LocalBusiness",
          name: "Cell Repair - Otay Ranch Mall",
        },
        areaServed: "Chula Vista, CA",
      },
      {
        "@type": "Service",
        name: "Charging Port & Micro-Soldering Diagnostics",
        description:
          "Precision cleaning and flex cable replacements for loose or non-charging lightning and USB-C ports with upfront quote.",
        serviceType: "Hardware Diagnostic",
        provider: {
          "@type": "LocalBusiness",
          name: "Cell Repair - Otay Ranch Mall",
        },
        areaServed: "Chula Vista, CA",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Cell Repair - Otay Ranch Town Center",
    description:
      "Expert smartphone, iPhone, and iPad repair service in Chula Vista, California.",
    publisher: {
      "@id": `${SITE_URL}/#store`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
