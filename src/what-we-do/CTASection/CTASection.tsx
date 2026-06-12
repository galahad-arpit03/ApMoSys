"use client";
import { ctasectionData } from "./CTASectionData";

import React from "react";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";


export default function CTASection() {
  return (
    <SectionThemeWrapper sectionId="industries_cta" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDark ? "bg-[#121212]" : "bg-[#FAFAFA]"}`}>
            <div className="max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-primary-red rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
              >
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                
                <div className="relative z-10 max-w-2xl mx-auto">
                  <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#FFFFFF] mb-4">
                    <EditableText
                      path="industries.cta.heading"
                      fallback="Scale Your Industry Impact"
                      as="span"
                      className="font-heading text-3xl md:text-4xl font-extrabold text-[#FFFFFF]"
                    />
                  </h2>
                  <p className="text-primary-soft text-base mb-8 leading-relaxed">
                    <EditableText
                      path="industries.cta.subheading"
                      fallback="Join the hundreds of industry leaders globally that trust ApMoSys to drive their technological evolution."
                      as="span"
                      multiline
                      className="text-primary-soft text-base leading-relaxed"
                    />
                  </p>
                  <a
                    href="#contact"
                    className="inline-block bg-[#FFFFFF] hover:bg-[#FAFAFA] text-[#121212] font-bold text-center px-10 py-4 rounded-md text-sm tracking-wide transition-colors shadow-lg hover:shadow-xl"
                  >
                    <EditableText
                      path="industries.cta.ctaLabel"
                      fallback="Start Your Transformation"
                      as="span"
                    />
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
