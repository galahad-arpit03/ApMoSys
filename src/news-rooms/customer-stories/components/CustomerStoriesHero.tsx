"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, FileText, ArrowRight } from "lucide-react";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

export default function CustomerStoriesHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <SectionThemeWrapper sectionId="customer_stories_hero" defaultTheme="dark">
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
              <div className="absolute top-0 right-1/3 w-[600px] h-[400px] bg-emerald-500/15 rounded-full blur-[140px] -translate-y-1/2" />
            </motion.div>

            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10 w-full">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                <div className="lg:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-6 shadow">
                      <Users className="w-4 h-4 text-emerald-400" />
                      <EditableText
                        path="customer.stories.hero.badge"
                        fallback="Client Outcomes & Case Studies"
                        as="span"
                      />
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-normal tracking-tight mb-6 leading-[1.1] text-white">
                      <EditableText
                        path="customer.stories.hero.heading1"
                        fallback="Proven Impact for"
                        as="span"
                      />{" "}
                      <EditableText
                        path="customer.stories.hero.heading2"
                        fallback="Global Enterprises."
                        as="span"
                        className="text-emerald-400"
                      />
                    </h1>

                    <p className="text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
                      <EditableText
                        path="customer.stories.hero.description"
                        fallback="Explore how leading organizations partner with ApMoSys to accelerate software delivery, eliminate production defects, and modernize quality engineering."
                        as="span"
                        multiline
                      />
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="#case-studies"
                        className="bg-[#242A56] hover:bg-[#1E234B] text-white px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 shadow-lg flex items-center justify-center gap-2"
                      >
                        <EditableText
                          path="customer.stories.hero.button1"
                          fallback="View Case Studies"
                          as="span"
                        />
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="#client-interviews"
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
                      >
                        <EditableText
                          path="customer.stories.hero.button2"
                          fallback="Client Quotes"
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
                        <FileText className="w-5 h-5 text-emerald-400" />
                        <h3 className="font-heading font-medium text-white text-base">
                          Documented Benchmarks
                        </h3>
                      </div>
                      <span className="text-xs font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                        Verified Data
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-[#121212] border border-[#2A2A2A] flex items-center justify-between">
                        <div>
                          <span className="text-xs text-gray-400 block font-medium">Core Banking Release Cycle</span>
                          <span className="text-sm font-bold text-white">6 Weeks → 9 Days</span>
                        </div>
                        <span className="text-lg font-heading font-extrabold text-emerald-400">+78% Speed</span>
                      </div>

                      <div className="p-4 rounded-lg bg-[#121212] border border-[#2A2A2A] flex items-center justify-between">
                        <div>
                          <span className="text-xs text-gray-400 block font-medium">Production Defect Rate</span>
                          <span className="text-sm font-bold text-white">Post-Release Reduction</span>
                        </div>
                        <span className="text-lg font-heading font-extrabold text-emerald-400">-65% Defects</span>
                      </div>

                      <div className="p-4 rounded-lg bg-[#121212] border border-[#2A2A2A] flex items-center justify-between">
                        <div>
                          <span className="text-xs text-gray-400 block font-medium">Test Automation Coverage</span>
                          <span className="text-sm font-bold text-white">Regression Execution</span>
                        </div>
                        <span className="text-lg font-heading font-extrabold text-emerald-400">92% Automated</span>
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
