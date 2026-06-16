import React from "react";

import Hero from "./Hero/Hero";
import ThinMarquee from "./ThinMarquee/ThinMarquee";
import StatsStrip from "./StatsStrip/StatsStrip";
import ClientLogos from "./ClientLogos/ClientLogos";
import SolutionsFunnel from "./SolutionsFunnel/SolutionsFunnel";
import CoESection from "./CoESection/CoESection";
import Partnerships from "./Partnerships/Partnerships";
import ValueProposition from "./ValueProposition/ValueProposition";
import Testimonials from "./Testimonials/Testimonials";
import LatestInsights from "./LatestInsights/LatestInsights";
import ContactCTA from "./ContactCTA/ContactCTA";

export default function LandingPage() {
  return (
    <div className="relative bg-[#0A1128]">
      <Hero />
      <ThinMarquee />
      <ClientLogos />
      <StatsStrip />
      <ValueProposition />
      <SolutionsFunnel />
      <CoESection />
      <Testimonials />
      <Partnerships />
      <LatestInsights />
      <ContactCTA />
    </div>
  );
}