import Repair from "@/pages/Repair";
import { FAQJsonLd, RepairServicesJsonLd } from "@/components/JsonLd";
import { faqData } from "@/components/RepairFAQ";

export const metadata = {
  title: "Fast iPhone & Phone Repair in Chula Vista",
  description:
    "Expert 20-30 minute smartphone, iPhone, and Samsung screen repairs at Otay Ranch Town Center in Chula Vista. Walk-ins welcome for battery replacements and diagnostics.",
  alternates: {
    canonical: "/repairs",
  },
  openGraph: {
    title: "Fast iPhone & Phone Screen Repair in Chula Vista | Cell Repair",
    description:
      "Expert 20-30 minute screen repairs, battery replacements, and hardware diagnostics at Otay Ranch Town Center. Walk-ins welcome opposite Zumiez.",
    url: "/repairs",
    images: [
      {
        url: "/faq-repair.jpg",
        width: 1200,
        height: 630,
        alt: "Technician repairing smartphone at Cell Repair Otay Ranch Town Center",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <FAQJsonLd items={faqData} />
      <RepairServicesJsonLd />
      <div>
        <Repair />
      </div>
    </>
  );
}
