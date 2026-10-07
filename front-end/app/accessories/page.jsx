import AccessoriesPage from "@/pages/Accessories";

export const metadata = {
  title: "Premium Phone Cases, Chargers & Screen Protectors",
  description:
    "Shop certified 9H tempered glass screen protectors (with free in-store installation), MFi fast chargers, durable cables, and shockproof cases at Otay Ranch Town Center.",
  alternates: {
    canonical: "/accessories",
  },
  openGraph: {
    title: "Phone Cases, Fast Chargers & Screen Protectors | Otay Ranch",
    description:
      "Hands-on fit testing and free screen protector installation at Otay Ranch Town Center kiosk. Certified chargers, heavy-duty cases, and audio accessories.",
    url: "/accessories",
    images: [
      {
        url: "/accessories/all.jpg",
        width: 1200,
        height: 630,
        alt: "Premium smartphone accessories at Cell Repair Otay Ranch",
      },
    ],
  },
};

export default function Page() {
  return (
    <div>
      <AccessoriesPage />
    </div>
  );
}
