"use client";

import React from "react";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

const resources = [
  {
    tag: "TECHNICAL MANUAL",
    title: "Modernizing Mainframe Workloads for the Cloud",
    desc: "A strategic guide to choosing between re-hosting, re-platforming, and refactoring in highly regulated environments.",
  },
  {
    tag: "FRAMEWORK",
    title: "The 2024 Observability Maturity Model",
    desc: "Benchmarking your organization's monitoring capabilities against industry-leading SRE practices.",
  },
  {
    tag: "WHITE PAPER",
    title: "Securing the Software Supply Chain",
    desc: "Mitigating risks in open-source dependencies and automated build pipelines using DevSecOps best practices.",
  },
];

export default function TechnicalLibrary() {
  return (
    <SectionThemeWrapper sectionId="blogs_library" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            className={`py-24 border-t transition-colors duration-300 ${
              isDark ? "bg-[#121212] text-[#FAFAFA] border-[#1F1F1F]" : "bg-[#FAFAFA] text-[#121212] border-[#E8E8E8]"
            }`}
          >
                        <Container>
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-primary-red text-xs font-bold uppercase tracking-widest block mb-2">Technical Library</span>
                  <h2 className={`font-heading text-2xl sm:text-3xl font-bold ${isDark ? "text-[#FFFFFF]" : "text-[#121212]"}`}>
                    Whitepapers & Frameworks
                  </h2>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <a
                    href="#"
                    className={`inline-flex items-center gap-2 text-sm font-bold transition-colors group ${
                      isDark ? "text-[#FFFFFF] hover:text-primary-red" : "text-[#121212] hover:text-primary-red"
                    }`}
                  >
                    Browse Library
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </motion.div>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {resources.map((res, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`border rounded-xl p-8 flex flex-col h-full hover:shadow-lg transition-shadow group relative ${
                      isDark ? "bg-[#1F1F1F] border-[#3A3A3A]" : "bg-[#FFFFFF] border-[#E8E8E8]"
                    }`}
                  >
                    {/* Document Icon Top Right */}
                    <div className={`absolute top-8 right-8 transition-colors ${
                      isDark ? "text-[#3A3A3A] group-hover:text-primary-red" : "text-[#E8E8E8] group-hover:text-primary-soft"
                    }`}>
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>

                    <span className={`text-[10px] font-bold uppercase tracking-widest mb-4 block ${
                      isDark ? "text-[#888888]" : "text-[#A0A0A0]"
                    }`}>
                      {res.tag}
                    </span>
                    
                    <h3 className={`font-heading font-bold text-lg mb-3 pr-8 leading-snug ${
                      isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                    }`}>
                      {res.title}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed mb-8 ${
                      isDark ? "text-[#A0A0A0]" : "text-[#7A7A7A]"
                    }`}>
                      {res.desc}
                    </p>
                    
                    <div className="mt-auto">
                      <a href="#" className="inline-flex items-center gap-2 text-primary-red text-xs font-bold uppercase tracking-wider hover:text-[#D10000] transition-colors group/btn">
                        Download PDF
                        <svg className="w-3.5 h-3.5 group-hover/btn:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              
                        </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
