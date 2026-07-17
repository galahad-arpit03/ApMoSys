"use client";
import { compliancesectionData } from "./ComplianceSectionData";

import React from "react";
import Container from "@/src/components/Container";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

export default function ComplianceSection() {
  return (
    <SectionThemeWrapper sectionId="services_compliance" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            className={`py-12 border-t transition-colors duration-300 ${
              isDark ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200"
            }`}
          >
            <Container>
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="max-w-lg text-center md:text-left">
                  <h2
                    className={`text-2xl lg:text-3xl font-medium tracking-tight mb-4 ${
                      isDark ? "text-white" : "text-slate-800"
                    }`}
                  >
                    <EditableText
                      path="services.compliance.heading"
                      fallback="Engineered for Global Compliance"
                      as="span"
                    />
                  </h2>
                  <p
                    className={`text-base lg:text-lg font-medium leading-relaxed ${
                      isDark ? "text-gray-300" : "text-slate-600"
                    }`}
                  >
                    <EditableText
                      path="services.compliance.subheading"
                      fallback="We adhere to strict regulatory and technical standards across all implementations globally, guaranteeing peace of mind for enterprise operations."
                      as="span"
                      multiline
                    />
                  </p>
                </div>

                <div className="flex flex-wrap justify-center md:justify-end gap-8">
                  {["ISO 27001", "SOC 2 TYPE II", "HIPAA"].map((cert, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center border transition-colors ${
                          isDark
                            ? "border-slate-600 bg-slate-700"
                            : "border-gray-200 bg-gray-50"
                        }`}
                      >
                        <svg
                          className={`w-6 h-6 ${
                            isDark ? "text-[#242A56]" : "text-[#242A56]"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div
                        className={`text-xs font-manrope font-semibold tracking-wider uppercase ${
                          isDark ? "text-gray-400" : "text-slate-500"
                        }`}
                      >
                        {cert}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}