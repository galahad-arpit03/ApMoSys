"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Trophy, Star, ArrowRight } from "lucide-react";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

export default function AwardsHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <SectionThemeWrapper sectionId="awards_hero" defaultTheme="dark">
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
              <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-amber-500/15 rounded-full blur-[140px] -translate-y-1/2" />
            </motion.div>

            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10 w-full">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                <div className="lg:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-6 shadow">
                      <Trophy className="w-4 h-4 text-amber-400" />
                      <EditableText
                        path="awards.hero.badge"
                        fallback="Recognized Excellence & Credentials"
                        as="span"
                      />
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-normal tracking-tight mb-6 leading-[1.1] text-white">
                      <EditableText
                        path="awards.hero.heading1"
                        fallback="Validated Quality &"
                        as="span"
                      />{" "}
                      <EditableText
                        path="awards.hero.heading2"
                        fallback="Ecosystem Trust."
                        as="span"
                        className="text-amber-400"
                      />
                    </h1>

                    <p className="text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
                      <EditableText
                        path="awards.hero.description"
                        fallback="Recognition for solution delivery, process compliance certifications, technology partner accolades, and continuous engineering maturity."
                        as="span"
                        multiline
                      />
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="#industry-awards"
                        className="bg-[#242A56] hover:bg-[#1E234B] text-white px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 shadow-lg flex items-center justify-center gap-2"
                      >
                        <EditableText
                          path="awards.hero.button1"
                          fallback="View Industry Awards"
                          as="span"
                        />
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="#certifications"
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
                      >
                        <EditableText
                          path="awards.hero.button2"
                          fallback="Certifications"
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
                    <div className="flex items-center gap-3 border-b border-[#2A2A2A] pb-5 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                        <Star className="w-6 h-6 fill-amber-400/20" />
                      </div>
                      <div>
                        <h3 className="font-heading font-medium text-white text-lg">
                          Global Honors & Standards
                        </h3>
                        <span className="text-xs text-amber-400 font-bold">
                          Audited & Verified Governance
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-[#121212] border border-[#2A2A2A] text-center">
                        <span className="text-3xl font-heading font-extrabold text-amber-400">15+</span>
                        <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">
                          Industry Awards
                        </span>
                      </div>
                      <div className="p-4 rounded-lg bg-[#121212] border border-[#2A2A2A] text-center">
                        <span className="text-3xl font-heading font-extrabold text-amber-400">ISO 27001</span>
                        <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">
                          Security Standard
                        </span>
                      </div>
                      <div className="p-4 rounded-lg bg-[#121212] border border-[#2A2A2A] text-center">
                        <span className="text-3xl font-heading font-extrabold text-amber-400">CMMI 5</span>
                        <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">
                          Delivery Maturity
                        </span>
                      </div>
                      <div className="p-4 rounded-lg bg-[#121212] border border-[#2A2A2A] text-center">
                        <span className="text-3xl font-heading font-extrabold text-amber-400">100%</span>
                        <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">
                          Audit Confidence
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
