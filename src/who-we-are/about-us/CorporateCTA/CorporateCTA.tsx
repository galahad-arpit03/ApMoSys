"use client";
import React from "react";
import { corporateCTAData } from "./CorporateCTAData";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

export default function CorporateCTA() {
  return (
    <SectionThemeWrapper sectionId="about_cta" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-20 transition-colors duration-300 ${isDark ? "bg-[#121212]" : "bg-white"}`}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-[#B40001] rounded-2xl p-10 md:p-14 text-center shadow-lg relative overflow-hidden">
                {/* Subtle background decoration */}
                <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    <EditableText
                      path="about.cta.heading"
                      fallback={corporateCTAData.heading}
                      as="span"
                    />
                  </h2>
                  <p className="text-white/90 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                    <EditableText
                      path="about.cta.description"
                      fallback={corporateCTAData.description}
                      as="span"
                      multiline
                    />
                  </p>
                  <button className="bg-white hover:bg-gray-50 text-[#B40001] px-8 py-3.5 rounded-md font-bold text-sm transition-colors shadow-sm">
                    <EditableText
                      path="about.cta.buttonText"
                      fallback={corporateCTAData.buttonText}
                      as="span"
                    />
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
