import WarrantyTerms from "@/pages/WarrantyTerms";
import { FAQJsonLd } from "@/components/JsonLd";
import { warrantyFaqs } from "@/components/WarrantyFAQ";

export const metadata = {
  title: "Device Repair Warranty & Terms of Service",
  description:
    "Comprehensive parts and labor warranty, 'No Fix No Fee' diagnostic policy, and data privacy terms for repairs at Cell Repair Otay Ranch Town Center.",
  alternates: {
    canonical: "/warranty-terms",
  },
  openGraph: {
    title: "Device Repair Warranty & Service Terms | Cell Repair Otay Ranch",
    description:
      "Learn about our store warranty on parts and labor, transparent diagnostics, and 60-day safe hold policy at Otay Ranch Town Center.",
    url: "/warranty-terms",
    images: [
      {
        url: "/warranty/terms-tablet.webp",
        width: 1200,
        height: 630,
        alt: "Cell Repair transparent warranty and store terms",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <FAQJsonLd items={warrantyFaqs} />
      <div>
        <WarrantyTerms />
      </div>
    </>
  );
}
