// Admin wrapper for the Industries page - renders identically to /industries
// The EditableText components render when admin-edit-mode class is present
import AdminEditOverlay from "@/src/admin/components/AdminEditOverlay";
import HeroSection from "@/src/IndustriesPage/HeroSection/HeroSection";
import IndustryGrid from "@/src/IndustriesPage/IndustryGrid/IndustryGrid";
import ComplexProblems from "@/src/IndustriesPage/ComplexProblems/ComplexProblems";
import TechnicalCapabilities from "@/src/IndustriesPage/TechnicalCapabilities/TechnicalCapabilities";
import ImpactSection from "@/src/IndustriesPage/ImpactSection/ImpactSection";
import ComplianceSection from "@/src/IndustriesPage/ComplianceSection/ComplianceSection";
import TestimonialSection from "@/src/IndustriesPage/TestimonialSection/TestimonialSection";
import CTASection from "@/src/IndustriesPage/CTASection/CTASection";

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
