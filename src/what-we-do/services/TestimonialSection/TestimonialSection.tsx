"use client";
import { testimonialsectionData } from "./TestimonialSectionData";
import React from "react";
import { motion } from "framer-motion";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

export default function TestimonialSection() {
  return (
    <SectionThemeWrapper sectionId="services_testimonial" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-12 transition-colors duration-300 ${isDark ? "bg-slate-800" : "bg-white"}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`rounded-2xl p-6 md:p-8 relative border transition-colors ${
                  isDark
                    ? "bg-slate-700/50 border-slate-600"
                    : "bg-white/80 backdrop-blur-sm border-gray-200/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
                }`}
              >
                {/* Large Quote Mark */}
                <div
                  className={`absolute top-8 right-10 text-8xl font-serif leading-none pointer-events-none select-none ${
                    isDark ? "text-slate-600" : "text-gray-200"
                  }`}
                >
                  &quot;
                </div>

                <p
                  className={`text-lg md:text-xl font-medium leading-relaxed mb-6 relative z-10 ${
                    isDark ? "text-gray-200" : "text-slate-700"
                  }`}
                >
                  &quot;ApMoSys didn&apos;t just provide a service; they redesigned our technical DNA. Their precision in handling our legacy migration allowed us to scale our global financial operations by 300% in a single fiscal year.&quot;
                </p>

                <div className="flex items-center gap-4 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                      isDark
                        ? "bg-slate-600 border-slate-500 text-white"
                        : "bg-gray-100 border-gray-200 text-slate-700"
                    }`}
                  >
                    <span className="font-bold text-[#242A56]">MF</span>
                  </div>
                  <div>
                    <div
                      className={`font-medium ${
                        isDark ? "text-white" : "text-slate-800"
                      }`}
                    >
                      Marcus Freeno
                    </div>
                    <div
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-slate-500"
                      }`}
                    >
                      CTO, Global Finance Inc.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}