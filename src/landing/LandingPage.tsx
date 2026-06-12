import React from "react";

import Hero from "./Hero/Hero";
import ClientLogos from "./ClientLogos/ClientLogos";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";
import Solutions from "./Solutions/Solutions";
import Products from "./Products/Products";
import IndustriesPreview from "./IndustriesPreview/IndustriesPreview";
import CaseStudiesPreview from "./CaseStudiesPreview/CaseStudiesPreview";
import TechnologyStack from "./TechnologyStack/TechnologyStack";
import LandingMilestones from "./LandingMilestones/LandingMilestones";
import ContactCTA from "./ContactCTA/ContactCTA";

export default function LandingPage() {
  return (
    <div className="relative bg-[#0B0B0B]">
      {/* Hero */}
      <Hero />
        <ClientLogos />

        <AboutUs />

        <Services />

        <Solutions />

        <Products />

        <IndustriesPreview />

        <CaseStudiesPreview />

        <TechnologyStack />

        <LandingMilestones />

        <ContactCTA />
      </div>
  );
}