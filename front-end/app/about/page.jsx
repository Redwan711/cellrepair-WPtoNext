import About from "@/pages/About";

export const metadata = {
  title: "About Our Master Repair Technicians",
  description:
    "Meet the experienced micro-soldering and device repair technicians at Cell Repair in Otay Ranch Town Center, Chula Vista. 10+ years restoring smartphones and tablets.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Cell Repair | Master Technicians in Chula Vista",
    description:
      "Over 10 years of micro-soldering expertise, OEM-certified components, and transparent workbench service in Otay Ranch Town Center.",
    url: "/about",
    images: [
      {
        url: "/kiosk.jpg",
        width: 1200,
        height: 630,
        alt: "Cell Repair technician workbench at Otay Ranch Town Center",
      },
    ],
  },
};

export default function Page() {
  return (
    <div>
      <About />
    </div>
  );
}
