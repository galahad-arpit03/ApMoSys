"use client";
import React from "react";
import { corporateCTAData } from "./CorporateCTAData";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { ArrowRight } from "lucide-react";

export default function CorporateCTA() {
  return (
    <SectionThemeWrapper sectionId="about_cta" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-12 transition-colors duration-300 ${isDark ? "bg-[#000000]" : "bg-white"}`}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-xl p-12 md:p-16 text-center relative overflow-hidden border transition-colors shadow-2xl bg-slate-800 border-slate-700">
                {/* Glassmorphism gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/50 via-transparent to-slate-900/50 pointer-events-none" />
                {/* Top Right decorative blur */}
                <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-[600px] h-[600px] bg-white/20 rounded-full blur-[120px] pointer-events-none" />
                {/* Bottom Left decorative blur */}
                <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] bg-white/15 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">
                    <EditableText
                      path="about.cta.heading"
                      fallback={corporateCTAData.heading}
                      as="span"
                    />
                  </h2>
                  <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto font-medium text-gray-300">
                    <EditableText
                      path="about.cta.description"
                      fallback={corporateCTAData.description}
                      as="span"
                      multiline
                    />
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 shadow-lg w-full sm:w-auto">
                      <EditableText
                        path="about.cta.buttonText"
                        fallback={corporateCTAData.buttonText}
                        as="span"
                      />
                    </button>
                    <button className="px-8 py-3.5 rounded-md font-semibold text-sm transition-colors shadow-sm flex items-center justify-center gap-2 border w-full sm:w-auto bg-transparent border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-white">
                      View Blogs <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
