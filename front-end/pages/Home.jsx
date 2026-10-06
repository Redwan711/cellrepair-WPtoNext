import Hero from "@/components/Hero";
import StoreLocation from "@/components/StoreLocation";
import RepairIssues from "@/components/RepairIssues";
import React from "react";

const Home = () => {
  return (
    <main>
      <Hero />
      <StoreLocation />
      <RepairIssues />
    </main>
  );
};

export default Home;