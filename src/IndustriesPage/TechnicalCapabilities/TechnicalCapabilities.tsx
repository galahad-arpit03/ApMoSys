"use client";

import React from "react";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

export default function TechnicalCapabilities() {
  const capabilities = [
    {
      titlePath: "industries.technical.item1Title",
      descPath: "industries.technical.item1Desc",
      fallbackTitle: "API Architecture",
      fallbackDesc: "Build resilient, fast, and scalable API gateways across multi-cloud environments."
    },
    {
      titlePath: "industries.technical.item2Title",
      descPath: "industries.technical.item2Desc",
      fallbackTitle: "Cloud Engineering",
      fallbackDesc: "Native cloud orchestration optimized for AWS, Azure, and GCP efficiency."
    },
    {
      titlePath: "industries.technical.item3Title",
      descPath: "industries.technical.item3Desc",
      fallbackTitle: "DevSecOps",
      fallbackDesc: "End-to-end security pipeline automation bridging the gap between dev and operations."
    }
  ];

  return (
    <SectionThemeWrapper sectionId="industries_capabilities" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${
            isDark ? "bg-[#121212] text-[#FAFAFA]" : "bg-[#FAFAFA] text-[#121212]"
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                
                <div>
                  <EditableText
                    path="industries.technical.heading"
                    fallback="Technical Capabilities Tailored for Scale"
                    as="h2"
                    className={`font-heading text-3xl sm:text-4xl font-extrabold mb-12 leading-tight block ${
                      isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                    }`}
                  />
                  
                  <div className="space-y-6">
                    {capabilities.map((item, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className={`p-6 rounded-lg flex items-start gap-5 hover:border-primary-red/50 transition-colors border ${
                          isDark ? "bg-[#1A1A1A] border-[#2A2A2A]" : "bg-[#FFFFFF] border-[#E8E8E8]"
                        }`}
                      >
                        <div className="w-10 h-10 rounded-md bg-primary-dark/30 flex items-center justify-center shrink-0 border border-primary-red/20">
                          <svg className="w-5 h-5 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="w-full">
                          <EditableText
                            path={item.titlePath}
                            fallback={item.fallbackTitle}
                            as="h3"
                            className={`font-bold mb-1 block ${
                              isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                            }`}
                          />
                          <EditableText
                            path={item.descPath}
                            fallback={item.fallbackDesc}
                            as="p"
                            className={`text-sm leading-relaxed block ${
                              isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                            }`}
                            multiline
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-16 lg:mt-0 relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className={`relative rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center aspect-[4/3] border ${
                      isDark ? "border-[#2A2A2A] bg-[#000000]" : "border-[#E8E8E8] bg-[#FAFAFA]"
                    }`}
                  >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
                    <div className={`relative z-10 flex flex-col items-center p-8 border rounded-xl backdrop-blur-sm ${
                      isDark ? "bg-[#000000]/80 border-[#3A3A3A]" : "bg-[#FFFFFF]/80 border-[#E8E8E8]"
                    }`}>
                       <div className="text-primary-red font-mono text-sm mb-4 tracking-widest uppercase">System Telemetry</div>
                       <div className="flex gap-4">
                         <div className={`w-16 h-16 rounded-full border-4 border-t-primary-red animate-spin ${
                           isDark ? "border-[#3A3A3A]" : "border-[#E8E8E8]"
                         }`}></div>
                         <div className={`w-16 h-16 rounded-full border-4 border-b-primary-red animate-spin ${
                           isDark ? "border-[#3A3A3A]" : "border-[#E8E8E8]"
                         }`} style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
                       </div>
                    </div>
                  </motion.div>
                  
                  {/* Overlay badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="absolute -bottom-6 -left-6 bg-primary-red p-6 rounded-xl shadow-xl z-20"
                  >
                    <EditableText
                      path="industries.technical.badgeVal"
                      fallback="15+"
                      as="div"
                      className="font-heading text-3xl font-extrabold text-[#FFFFFF] mb-1 block text-center"
                    />
                    <EditableText
                      path="industries.technical.badgeLabel"
                      fallback="Active Partners"
                      as="div"
                      className="text-xs font-semibold text-[#FFFFFF]/80 uppercase tracking-wider block text-center"
                    />
                  </motion.div>
                </div>
                
              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
