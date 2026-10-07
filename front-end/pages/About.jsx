import React from "react";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutTestimonials from "@/components/AboutTestimonials";
import StoreLocation from "@/components/StoreLocation";
import CommunityBanner from "@/components/CommunityBanner";

const About = () => {
  return (
    <main>
      {/* Hero section */}
      <AboutHero />

      {/* Your Trusted Partner & 3-Photo Visual Showcase */}
      <AboutStory />

      {/* Testimonials */}
      <AboutTestimonials />

      {/* Store Location & Hours */}
      <StoreLocation />

      {/* Community Banner */}
      <CommunityBanner />
    </main>
  );
};

export default About;
