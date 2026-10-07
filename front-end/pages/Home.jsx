import React from "react";
import Hero from "@/components/Hero";
import TrustHighlights from "@/components/TrustHighlights";
import StoreLocation from "@/components/StoreLocation";
import RepairIssues from "@/components/RepairIssues";
import Accessories from "@/components/Accessories";
import AboutUs from "@/components/AboutUs";
import CommunityBanner from "@/components/CommunityBanner";

const Home = () => {
  return (
    <main>
      <Hero />
      <StoreLocation />
      <TrustHighlights />
      <RepairIssues />
      <Accessories />
      <AboutUs />
      <CommunityBanner />
    </main>
  );
};

export default Home;