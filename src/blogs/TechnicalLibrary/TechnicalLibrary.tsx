"use client";
import { technicallibraryData } from "./TechnicalLibraryData";

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

import { FileText } from "lucide-react";

export default function TechnicalLibrary() {
  return (
    <SectionThemeWrapper sectionId="blogs_library" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            className={`py-12 lg:py-16 border-t transition-colors duration-300 ${
              isDark ? "bg-[#0A1128] text-white border-[#1F2C47]" : "bg-white text-slate-900 border-gray-200"
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
                  <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight font-normal ${isDark ? "text-white" : "text-slate-900"}`}>
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
                    className={`inline-flex items-center gap-2 text-[15px] font-bold transition-colors group ${
                      isDark ? "text-white hover:text-[#2563EB]" : "text-slate-900 hover:text-[#2563EB]"
                    }`}
                  >
                    Browse Library
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </motion.div>
              </div>

              {/* Tabular Grid Section (Seamless, No Boxes) */}
              <div className={`grid grid-cols-1 md:grid-cols-3 w-full border-t border-b transition-colors ${
                isDark ? "border-[#1F2C47]" : "border-gray-200"
              }`}>
                {resources.map((res, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`group py-8 md:py-12 px-6 xl:px-10 flex flex-col xl:flex-row items-start gap-5 transition-colors cursor-pointer ${
                      isDark ? "hover:bg-[#1A233A]" : "hover:bg-gray-100/50"
                    } ${
                      idx < resources.length - 1 
                        ? (isDark ? "border-b md:border-b-0 md:border-r border-[#1F2C47]" : "border-b md:border-b-0 md:border-r border-gray-200") 
                        : ""
                    }`}
                  >
                    <div className="shrink-0 w-12 h-12 rounded-full border border-[#2563EB]/20 bg-transparent flex items-center justify-center text-[#2563EB]">
                      <FileText className="w-5 h-5" strokeWidth={1.5} />
                    </div>

                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest block mb-2 ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}>
                        {res.tag}
                      </span>
                      <h4 className={`text-[17px] font-bold mb-1.5 leading-snug ${
                        isDark ? "text-white group-hover:text-[#2563EB]" : "text-slate-900 group-hover:text-[#2563EB]"
                      }`}>
                        {res.title}
                      </h4>
                      <p className={`text-[13px] font-normal leading-relaxed ${
                        isDark ? "text-gray-400" : "text-slate-900"
                      }`}>
                        {res.desc}
                      </p>
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
