"use client";

import React from "react";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

export default function SuccessMetricsIntro() {
  return (
    <SectionThemeWrapper sectionId="success_metrics_intro" defaultTheme="light">
      {() => {
        return (
          <section className="py-12 border-b transition-colors duration-300 bg-white border-gray-100 text-[#121212]">
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.1] text-gray-800">
                <EditableText
                  path="metrics.intro.heading1"
                  fallback="Data-Driven Quality &"
                  as="span"
                />
                <br />
                <EditableText
                  path="metrics.intro.heading2"
                  fallback="Empirical Performance Insights"
                  as="span"
                  className="text-blue-500"
                />
              </h2>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-8 sm:mt-10">
                <p className="text-base sm:text-lg leading-7 sm:leading-8 font-medium text-black">
                  <EditableText
                    path="metrics.intro.col1"
                    fallback="Quantitative views of business impact, performance gains, ROI, and operational improvements across transformation programs."
                    as="span"
                    multiline
                  />
                </p>

                <p className="text-base sm:text-lg leading-7 sm:leading-8 font-medium text-black">
                  <EditableText
                    path="metrics.intro.col2"
                    fallback="By tracking defect reduction, deployment frequency, application latency, and cost avoidance, we provide transparent benchmarks that substantiate transformation investments."
                    as="span"
                    multiline
                  />
                </p>
              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
