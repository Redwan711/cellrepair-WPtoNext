import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import { LocalBusinessJsonLd, WebSiteJsonLd } from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://cellrepairandaccessories.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cell Repair | iPhone & Phone Repair Chula Vista | Otay Ranch",
    template: "%s | Cell Repair Otay Ranch",
  },
  description:
    "Fast 20-30 minute smartphone, iPhone, and iPad repairs at Otay Ranch Town Center in Chula Vista. Walk-ins welcome for screens, batteries, charging ports, and accessories.",
  keywords: [
    "phone repair chula vista",
    "iphone screen repair otay ranch",
    "cell phone repair near me",
    "samsung repair chula vista",
    "ipad screen replacement eastlake",
    "otay ranch town center phone repair",
    "phone battery replacement chula vista",
    "screen protector installation otay ranch",
  ],
  authors: [{ name: "Cell Repair - Otay Ranch Mall" }],
  creator: "Cell Repair",
  publisher: "Cell Repair",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Cell Repair - Otay Ranch Mall",
    title: "Cell Repair | Expert Phone & Screen Repairs in Chula Vista",
    description:
      "Fast 20-30 minute phone repairs at Otay Ranch Town Center. iPhone, Samsung, iPad screens, batteries, diagnostics, and accessories.",
    images: [
      {
        url: "/kiosk.jpg",
        width: 1200,
        height: 630,
        alt: "Cell Repair kiosk at Otay Ranch Town Center in Chula Vista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cell Repair | iPhone & Phone Repairs at Otay Ranch Town Center",
    description:
      "Expert 20-30 minute smartphone repairs in Chula Vista. Walk-ins welcome opposite Zumiez.",
    images: ["/kiosk.jpg"],
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Chula Vista",
    "geo.position": "32.623822;-116.967599",
    ICBM: "32.623822, -116.967599",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-full">
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

