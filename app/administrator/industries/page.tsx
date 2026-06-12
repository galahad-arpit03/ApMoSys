"use client";

// Admin wrapper for the Industries page - renders identically to /industries
// The EditableText components render when admin-edit-mode class is present
import AdminEditOverlay from "@/src/admin/components/AdminEditOverlay";
import HeroSection from "@/src/what-we-do/HeroSection/HeroSection";
import IndustryGrid from "@/src/what-we-do/IndustryGrid/IndustryGrid";
import ComplexProblems from "@/src/what-we-do/ComplexProblems/ComplexProblems";
import TechnicalCapabilities from "@/src/what-we-do/TechnicalCapabilities/TechnicalCapabilities";
import ImpactSection from "@/src/what-we-do/ImpactSection/ImpactSection";
import ComplianceSection from "@/src/what-we-do/ComplianceSection/ComplianceSection";
import TestimonialSection from "@/src/what-we-do/TestimonialSection/TestimonialSection";
import CTASection from "@/src/what-we-do/CTASection/CTASection";

export default function AdminIndustriesPage() {
  return (
    <AdminEditOverlay page="Industries">
      <div className="bg-[#121212] min-h-screen">
        <HeroSection />
        <div className="bg-[#FAFAFA]">
          <IndustryGrid />
          <ComplexProblems />
        </div>
        <TechnicalCapabilities />
        <ImpactSection />
        <ComplianceSection />
        <TestimonialSection />
        <CTASection />
      </div>
    </AdminEditOverlay>
  );
}
