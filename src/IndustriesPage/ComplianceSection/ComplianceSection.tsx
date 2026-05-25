"use client";

import React from "react";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

export default function ComplianceSection() {
  return (
    <SectionThemeWrapper sectionId="industries_compliance" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-20 border-t transition-colors duration-300 ${
            isDark ? "bg-[#121212] border-[#1F1F1F]" : "bg-[#FAFAFA] border-[#E8E8E8]"
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="max-w-lg text-center md:text-left">
                  <EditableText
                    path="industries.compliance.heading"
                    fallback="Engineered for Global Compliance"
                    as="h2"
                    className={`font-heading text-2xl font-bold mb-4 block ${
                      isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                    }`}
                  />
                  <EditableText
                    path="industries.compliance.subheading"
                    fallback="We adhere to strict regulatory and technical standards across all implementations globally, guaranteeing peace of mind for enterprise operations."
                    as="p"
                    className={`text-sm leading-relaxed block ${
                      isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                    }`}
                    multiline
                  />
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-end gap-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                  {['ISO 27001', 'SOC 2 TYPE II', 'HIPAA'].map((cert, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-colors ${
                        isDark ? "border-[#3A3A3A] bg-[#1F1F1F]" : "border-[#C8C8C8] bg-[#FFFFFF]"
                      }`}>
                        <svg className={`w-6 h-6 ${isDark ? "text-[#FFFFFF]" : "text-[#121212]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className={`text-xs font-bold tracking-wider uppercase ${
                        isDark ? "text-[#7A7A7A]" : "text-[#5A5A5A]"
                      }`}>{cert}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
