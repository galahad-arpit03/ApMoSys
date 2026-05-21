import React from "react";
import InquirySection from "./InquirySection/InquirySection";
import GlobalPresence from "./GlobalPresence/GlobalPresence";
import WorldMapSection from "./WorldMapSection/WorldMapSection";
import TechDeepDive from "./TechDeepDive/TechDeepDive";
import FAQSection from "./FAQSection/FAQSection";

export default function ContactPage() {
  return (
    <>
      <InquirySection />
      <GlobalPresence />
      <WorldMapSection />
      <TechDeepDive />
      <FAQSection />
    </>
  );
}
