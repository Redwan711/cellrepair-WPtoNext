import React from "react";
import WarrantyHero from "@/components/WarrantyHero";
import WarrantyPolicy from "@/components/WarrantyPolicy";
import WarrantyFAQ from "@/components/WarrantyFAQ";
import StoreLocation from "@/components/StoreLocation";
import CommunityBanner from "@/components/CommunityBanner";

const WarrantyTerms = () => {
  return (
    <main>
      {/* Hero section */}
      <WarrantyHero />

      {/* Comprehensive Policy Cards */}
      <WarrantyPolicy />

      {/* Warranty & Terms FAQ */}
      <WarrantyFAQ />

      {/* Store Location & Hours */}
      <StoreLocation />

      {/* Community Banner */}
      <CommunityBanner />
    </main>
  );
};

export default WarrantyTerms;
