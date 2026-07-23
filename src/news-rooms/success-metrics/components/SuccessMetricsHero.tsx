"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BarChart3, Activity, ArrowRight } from "lucide-react";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

export default function SuccessMetricsHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <SectionThemeWrapper sectionId="success_metrics_hero" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            ref={ref}
            className={`relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden flex items-center min-h-[50vh] transition-colors duration-300 ${
              isDark ? "bg-[#0F172A] text-white" : "bg-white text-gray-900"
            }`}
          >
            <motion.div
              className="absolute inset-0 z-0 origin-top pointer-events-none"
              style={{ y: backgroundY }}
            >
              <div className="absolute top-0 right-1/3 w-[600px] h-[400px] bg-blue-500/15 rounded-full blur-[140px] -translate-y-1/2" />
            </motion.div>

            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10 w-full">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                <div className="lg:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-6 shadow">
                      <BarChart3 className="w-4 h-4 text-blue-400" />
                      <EditableText
                        path="metrics.hero.badge"
                        fallback="Empirical Benchmarks & Impact Analytics"
                        as="span"
                      />
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-normal tracking-tight mb-6 leading-[1.1] text-white">
                      <EditableText
                        path="metrics.hero.heading1"
                        fallback="Quantified Return on"
                        as="span"
                      />{" "}
                      <EditableText
                        path="metrics.hero.heading2"
                        fallback="Engineering Quality."
                        as="span"
                        className="text-blue-400"
                      />
                    </h1>

                    <p className="text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
                      <EditableText
                        path="metrics.hero.description"
                        fallback="Quantitative views of business impact, performance gains, ROI reports, and operational improvements across enterprise transformation programs."
                        as="span"
                        multiline
                      />
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="#roi-reports"
                        className="bg-[#242A56] hover:bg-[#1E234B] text-white px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 shadow-lg flex items-center justify-center gap-2"
                      >
                        <EditableText
                          path="metrics.hero.button1"
                          fallback="View ROI Reports"
                          as="span"
                        />
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="#performance-data"
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
                      >
                        <EditableText
                          path="metrics.hero.button2"
                          fallback="Performance Signals"
                          as="span"
                        />
                      </a>
                    </div>
                  </motion.div>
                </div>

                <div className="lg:col-span-5">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] p-8 shadow-2xl relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Activity className="w-5 h-5 text-blue-400" />
                        <h3 className="font-heading font-medium text-white text-base">
                          Live Performance Index
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                        REAL-TIME BENCHMARKS
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-[#121212] border border-[#2A2A2A]">
                        <span className="text-3xl font-heading font-extrabold text-blue-400">3.5x</span>
                        <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">
                          Average Client ROI
                        </span>
                      </div>

                      <div className="p-4 rounded-lg bg-[#121212] border border-[#2A2A2A]">
                        <span className="text-3xl font-heading font-extrabold text-blue-400">-60%</span>
                        <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">
                          Defect Leakage Rate
                        </span>
                      </div>

                      <div className="p-4 rounded-lg bg-[#121212] border border-[#2A2A2A]">
                        <span className="text-3xl font-heading font-extrabold text-blue-400">99.99%</span>
                        <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">
                          App Availability
                        </span>
                      </div>

                      <div className="p-4 rounded-lg bg-[#121212] border border-[#2A2A2A]">
                        <span className="text-3xl font-heading font-extrabold text-blue-400">1400+</span>
                        <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">
                          QA Specialists
                        </span>
                      </div>
                    </div>
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
