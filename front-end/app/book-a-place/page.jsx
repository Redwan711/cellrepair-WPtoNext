import Repair from "@/pages/Repair";

export const metadata = {
  title: "Get an Instant Repair Quote & Diagnostic",
  description:
    "Fast, reliable smartphone and electronics repair estimates at Otay Ranch Town Center in Chula Vista. Free quotes and 20-30 minute walk-in service.",
  alternates: {
    canonical: "/repairs",
  },
};

export default function Page() {
  return (
    <div>
      <Repair />
    </div>
  );
}
