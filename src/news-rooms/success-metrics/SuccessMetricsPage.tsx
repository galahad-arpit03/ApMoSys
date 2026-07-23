"use client";

import React from "react";
import SuccessMetricsHero from "./components/SuccessMetricsHero";
import SuccessMetricsIntro from "./components/SuccessMetricsIntro";
import ROICalculatorSection from "./components/ROICalculatorSection";
import OperationalDataStrip from "./components/OperationalDataStrip";
import ImpactStudiesAccordion from "./components/ImpactStudiesAccordion";
import CorporateCTA from "@/src/who-we-are/about-us/CorporateCTA/CorporateCTA";

export default function SuccessMetricsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SuccessMetricsHero />
      <SuccessMetricsIntro />
      <ROICalculatorSection />
      <OperationalDataStrip />
      <ImpactStudiesAccordion />
      
      <CorporateCTA
        tag="Success Metrics"
        heading="Measure the Impact of Quality Engineering"
        description="Schedule a quantitative ROI assessment to calculate potential defect reduction, speed improvements, and cost savings for your enterprise."
        buttonText="Request ROI Audit"
        sectionId="success_metrics_cta"
        editablePrefix="metrics.cta"
      />
    </main>
  );
}
