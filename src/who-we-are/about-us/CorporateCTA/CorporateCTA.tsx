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
          <section className={`py-20 transition-colors duration-300 ${isDark ? "bg-[#000000]" : "bg-white"}`}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`rounded-2xl p-12 md:p-16 text-center relative overflow-hidden border transition-colors backdrop-blur-xl ${
                isDark 
                  ? "bg-white/5 border-white/10 shadow-2xl" 
                  : "bg-white/60 border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              }`}>
                {/* Glassmorphism gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-transparent to-red-100/30 pointer-events-none" />
                {/* Right decorative blur */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-72 h-72 bg-primary-soft opacity-80 rounded-md blur-3xl pointer-events-none" />
                {/* Left decorative blur */}
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-primary-soft opacity-80 rounded-md blur-3xl pointer-events-none" />
                
                <div className="relative z-10">
                  <h2 className={`text-4xl md:text-5xl font-medium tracking-tight mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                    <EditableText
                      path="about.cta.heading"
                      fallback={corporateCTAData.heading}
                      as="span"
                    />
                  </h2>
                  <p className={`text-base md:text-lg mb-10 max-w-2xl mx-auto font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                    <EditableText
                      path="about.cta.description"
                      fallback={corporateCTAData.description}
                      as="span"
                      multiline
                    />
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="bg-primary-red hover:bg-primary-hover text-white px-8 py-3.5 rounded-md font-semibold text-sm transition-colors shadow-md w-full sm:w-auto">
                      <EditableText
                        path="about.cta.buttonText"
                        fallback={corporateCTAData.buttonText}
                        as="span"
                      />
                    </button>
                    <button className={`px-8 py-3.5 rounded-md  font-semibold text-sm transition-colors shadow-sm flex items-center justify-center gap-2 border w-full sm:w-auto ${
                      isDark 
                        ? "bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800" 
                        : "bg-transparent border-gray-200 text-gray-700 hover:bg-white hover:shadow-md"
                    }`}>
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
