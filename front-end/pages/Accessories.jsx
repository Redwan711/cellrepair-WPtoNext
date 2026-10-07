import React from "react";
import AccessoriesHero from "@/components/AccessoriesHero";
import Accessories from "@/components/Accessories";
import AccessoriesPerks from "@/components/AccessoriesPerks";
import StoreLocation from "@/components/StoreLocation";
import CommunityBanner from "@/components/CommunityBanner";

const AccessoriesPage = () => {
  return (
    <main>
      {/* hero of this page */}
      <AccessoriesHero />

      {/* accessories */}
      <Accessories />

      {/* other new if it fits good */}
      <AccessoriesPerks />
      <StoreLocation />
      <CommunityBanner />
    </main>
  );
};

export default AccessoriesPage;