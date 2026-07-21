"use client";
import { roadmapsectionData } from "./RoadmapSectionData";

import React from "react";
import Container from "@/src/components/Container";
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

const getBorderClasses = (idx: number, total: number, isDark: boolean) => {
  let classes = isDark ? "border-[#1F2C47] " : "border-gray-200 ";
  
  if (idx < total - 1) classes += "border-b ";

  // md: 2 columns
  if (idx >= Math.floor((total - 1) / 2) * 2) classes += "md:border-b-0 ";
  if ((idx + 1) % 2 !== 0) classes += "md:border-r ";
  else classes += "md:border-r-0 ";

  // lg: 4 columns
  if (idx >= Math.floor((total - 1) / 4) * 4) classes += "lg:border-b-0 ";
  else classes += "lg:border-b ";
  
  if ((idx + 1) % 4 !== 0) classes += "lg:border-r ";
  else classes += "lg:border-r-0 ";

  return classes;
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
            className={`py-12 lg:py-16 border-t transition-colors duration-300 overflow-hidden ${
              isDark ? "bg-[#0A1128] text-white border-[#1F2C47]" : "bg-white text-gray-900 border-gray-200"
            }`}
          >
            <Container>
              
              {/* Header - LHS/RHS Split */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-start justify-between gap-8"
              >
                {/* Left Side: Heading */}
                <div className="shrink-0 lg:max-w-xl">
                  <EditableText
                    path="careers.roadmap.heading"
                    fallback="Hiring Roadmap"
                    as="h2"
                    className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] block ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  />
                </div>

                {/* Right Side: Paragraph */}
                <div className="flex flex-col lg:items-end gap-6 max-w-xl">
                  <EditableText
                    path="careers.roadmap.subheading"
                    fallback="A streamlined, transparent process designed to discover the best engineering talent globally."
                    as="p"
                    className={`text-lg sm:text-xl leading-relaxed lg:text-left block ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                    multiline
                  />
                </div>
              </motion.div>

              {/* Tabular Grid Section (Seamless, No Boxes) */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-t border-b transition-colors ${
                  isDark ? "border-[#1F2C47]" : "border-gray-200"
                }`}
              >
                {steps.map((step, index) => (
                  <motion.div
                    key={step.num}
                    variants={fadeUp}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`group py-8 md:py-10 px-6 xl:px-10 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-5 transition-colors relative ${
                      isDark ? "hover:bg-[#121B31]/50" : "hover:bg-gray-100/50"
                    } ${getBorderClasses(index, steps.length, isDark)}`}
                  >
                    <div>
                      <EditableText
                        path={step.titlePath}
                        fallback={step.fallbackTitle}
                        as="h4"
                        className={`text-[17px] font-bold mb-1.5 block ${isDark ? "text-white" : "text-slate-900"}`}
                      />
                      
                      <EditableText
                        path={step.descPath}
                        fallback={step.fallbackDesc}
                        as="p"
                        className={`text-[13px] font-normal leading-relaxed max-w-[200px] block ${isDark ? "text-gray-400" : "text-slate-900"}`}
                        multiline
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
            </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
