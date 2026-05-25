"use client";

import React from "react";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function RoadmapSection() {
  const steps = [
    {
      num: 1,
      titlePath: "careers.roadmap.step1Title",
      descPath: "careers.roadmap.step1Desc",
      fallbackTitle: "Initial Chat",
      fallbackDesc: "Cultural fit and alignment with our company values and goals."
    },
    {
      num: 2,
      titlePath: "careers.roadmap.step2Title",
      descPath: "careers.roadmap.step2Desc",
      fallbackTitle: "Technical Deep-Dive",
      fallbackDesc: "Live coding or architecture whiteboard session with engineering leads."
    },
    {
      num: 3,
      titlePath: "careers.roadmap.step3Title",
      descPath: "careers.roadmap.step3Desc",
      fallbackTitle: "Architecture Review",
      fallbackDesc: "In-depth discussion on system design, scalability, and previous projects."
    },
    {
      num: 4,
      titlePath: "careers.roadmap.step4Title",
      descPath: "careers.roadmap.step4Desc",
      fallbackTitle: "The Offer",
      fallbackDesc: "Welcome to the premier engineering team."
    }
  ];

  return (
    <SectionThemeWrapper sectionId="careers_roadmap" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            className={`py-24 border-t transition-colors duration-300 overflow-hidden ${
              isDark ? "bg-[#121212] text-[#FAFAFA] border-[#1F1F1F]" : "bg-[#FAFAFA] text-[#121212] border-[#E8E8E8]"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center mb-16"
              >
                <EditableText
                  path="careers.roadmap.heading"
                  fallback="Hiring Roadmap"
                  as="h2"
                  className={`font-heading text-3xl sm:text-4xl font-extrabold block text-center ${
                    isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                  }`}
                />
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
              >
                {/* Connecting Line (visible on large screens only) */}
                <div className={`hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 z-0 ${
                  isDark ? "bg-[#3A3A3A]" : "bg-[#E2E8F0]"
                }`} />
                
                {steps.map((step) => (
                  <motion.div
                    key={step.num}
                    variants={fadeUp}
                    className={`relative z-10 flex flex-col items-center text-center p-8 rounded-xl border transition-colors group ${
                      isDark ? "bg-[#1F1F1F] border-[#3A3A3A] hover:border-primary-red" : "bg-[#FFFFFF] border-[#E8E8E8] hover:border-primary-red"
                    }`}
                  >
                    <div className="w-12 h-12 bg-primary-red text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 group-hover:scale-110 transition-transform">
                      {step.num}
                    </div>
                    <EditableText
                      path={step.titlePath}
                      fallback={step.fallbackTitle}
                      as="h3"
                      className={`text-lg font-bold mb-3 block text-center ${
                        isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                      }`}
                    />
                    <EditableText
                      path={step.descPath}
                      fallback={step.fallbackDesc}
                      as="p"
                      className={`text-sm leading-relaxed block text-center ${
                        isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                      }`}
                      multiline
                    />
                  </motion.div>
                ))}
              </motion.div>
              
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
