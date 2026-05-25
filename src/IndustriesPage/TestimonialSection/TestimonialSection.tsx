"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

export default function TestimonialSection() {
  return (
    <SectionThemeWrapper sectionId="industries_testimonial" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-12 transition-colors duration-300 ${isDark ? "bg-[#121212]" : "bg-[#FAFAFA]"}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`rounded-2xl p-6 md:p-8 relative border transition-colors ${
                  isDark ? "bg-[#1A1A1A] border-[#2A2A2A]" : "bg-[#FFFFFF] border-[#E8E8E8]"
                }`}
              >
                {/* Large Quote Mark */}
                <div className={`absolute top-8 right-10 text-8xl font-serif leading-none pointer-events-none select-none ${
                  isDark ? "text-[#2A2A2A]" : "text-[#E8E8E8]"
                }`}>
                  "
                </div>
                
                <p className={`text-lg md:text-xl font-medium leading-relaxed mb-6 relative z-10 ${
                  isDark ? "text-[#E8E8E8]" : "text-[#121212]"
                }`}>
                  "ApMoSys didn't just provide a service; they redesigned our technical DNA. Their precision in handling our legacy migration allowed us to scale our global financial operations by 300% in a single fiscal year."
                </p>
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                    isDark ? "bg-[#2A2A2A] border-[#3A3A3A] text-[#FFFFFF]" : "bg-[#FAFAFA] border-[#C8C8C8] text-[#121212]"
                  }`}>
                    <span className="font-bold">MF</span>
                  </div>
                  <div>
                    <div className={`font-bold ${isDark ? "text-[#FFFFFF]" : "text-[#121212]"}`}>Marcus Freeno</div>
                    <div className={`text-sm ${isDark ? "text-[#7A7A7A]" : "text-[#5A5A5A]"}`}>CTO, Global Finance Inc.</div>
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
