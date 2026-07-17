"use client";

import React from "react";
import Container from "@/src/components/Container";
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
            isDark ? "bg-slate-800 text-white" : "bg-white text-slate-800"
          }`}>
            {/* Decorative glows (same as CoreValues) */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 bg-slate-600/20" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3 bg-slate-600/20" />

            <Container className="relative z-10">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                
                <div>
                  <EditableText
                    path="industries.technical.heading"
                    fallback="Technical Capabilities Tailored for Scale"
                    as="h2"
                    className={`font-heading text-3xl sm:text-4xl font-medium tracking-tight mb-12 leading-tight block ${
                      isDark ? "text-white" : "text-slate-800"
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
                        className={`p-6 rounded-lg flex items-start gap-5 hover:border-[#242A56]/50 transition-colors border ${
                          isDark 
                            ? "bg-slate-700/50 border-slate-600 hover:border-[#242A56]/40" 
                            : "bg-white/80 backdrop-blur-sm border-gray-200/60 hover:border-[#242A56]/20 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                          isDark 
                            ? "bg-[#242A56]/20 text-[#242A56] border border-[#242A56]/30" 
                            : "bg-[#242A56]/10 text-[#242A56] border border-[#242A56]/20"
                        }`}>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="w-full">
                          <EditableText
                            path={item.titlePath}
                            fallback={item.fallbackTitle}
                            as="h3"
                            className={`font-bold mb-1 block ${
                              isDark ? "text-white" : "text-slate-800"
                            }`}
                          />
                          <EditableText
                            path={item.descPath}
                            fallback={item.fallbackDesc}
                            as="p"
                            className={`text-sm leading-relaxed block ${
                              isDark ? "text-gray-300" : "text-slate-600"
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
                      isDark ? "border-slate-600 bg-slate-800" : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
                    <div className={`relative z-10 flex flex-col items-center p-8 border rounded-xl backdrop-blur-sm ${
                      isDark ? "bg-slate-800/80 border-slate-600" : "bg-white/80 border-gray-200"
                    }`}>
                       <div className="text-[#242A56] font-mono text-sm mb-4 tracking-widest uppercase">System Telemetry</div>
                       <div className="flex gap-4">
                         <div className={`w-16 h-16 rounded-full border-4 border-t-[#242A56] animate-spin ${
                           isDark ? "border-slate-600" : "border-gray-200"
                         }`}></div>
                         <div className={`w-16 h-16 rounded-full border-4 border-b-[#242A56] animate-spin ${
                           isDark ? "border-slate-600" : "border-gray-200"
                         }`} style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
                       </div>
                    </div>
                  </motion.div>
                  
                  {/* Floating badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="absolute -bottom-6 -left-6 bg-[#242A56] p-6 rounded-xl shadow-xl z-20"
                  >
                    <EditableText
                      path="industries.technical.badgeVal"
                      fallback="15+"
                      as="div"
                      className="font-heading text-3xl font-extrabold text-white mb-1 block text-center"
                    />
                    <EditableText
                      path="industries.technical.badgeLabel"
                      fallback="Active Partners"
                      as="div"
                      className="text-xs font-semibold text-white/80 uppercase tracking-wider block text-center"
                    />
                  </motion.div>
                </div>
                
              </div>
            </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}