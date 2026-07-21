"use client";
import { lifesectionData } from "./LifeSectionData";

import React from "react";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import Image from "next/image";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";


const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function LifeSection() {
  return (
    <SectionThemeWrapper sectionId="careers_life" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="life"
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
                    path="careers.life.heading"
                    fallback="Life at ApMoSys"
                    as="h2"
                    className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] block ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  />
                </div>

                {/* Right Side: Paragraph */}
                <div className="flex flex-col lg:items-end gap-6 max-w-xl">
                  <EditableText
                    path="careers.life.subheading"
                    fallback="Modern architecture, international collaboration, and a relentless pursuit of quality."
                    as="p"
                    className={`text-lg sm:text-xl leading-relaxed lg:text-left block ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                    multiline
                  />
                </div>
              </motion.div>

              {/* Bento Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 h-auto md:h-[600px]"
              >
                
                {/* Main Large Image (People/Lab) */}
                <motion.div
                  variants={fadeUp}
                  className={`md:col-span-7 md:row-span-2 relative rounded-xl overflow-hidden group min-h-[300px] border transition-colors ${
                    isDark ? "bg-[#1A233A] border-[#1F2C47]" : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <Image
                    src="/team/team1.png"
                    alt="Office Workspace"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/90 via-[#0A1128]/40 to-transparent z-10" />
                  
                  <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                    <span className="text-[#2563EB] text-sm font-semibold uppercase tracking-widest mb-2 block">
                      Workspace
                    </span>
                    <EditableText
                      path="careers.life.bento1Title"
                      fallback="Innovation Labs"
                      as="h3"
                      className="text-white text-4xl font-medium block"
                    />
                  </div>
                </motion.div>

                {/* Top Right (Screen/Dashboard) */}
                <motion.div
                  variants={fadeUp}
                  className={`md:col-span-5 md:row-span-1 relative rounded-xl overflow-hidden group min-h-[250px] border transition-colors ${
                    isDark ? "bg-[#1A233A] border-[#1F2C47]" : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <Image
                    src="/team/team2.png"
                    alt="Infrastructure"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1128]/90 to-transparent z-10" />
                   
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <EditableText
                      path="careers.life.bento2Title"
                      fallback="State-of-the-art Infrastructure"
                      as="h3"
                      className="text-white text-3xl font-medium block"
                    />
                  </div>
                </motion.div>

                {/* Bottom Right Split 1 (Global Offices) */}
                <motion.div
                  variants={fadeUp}
                  className={`md:col-span-2 md:row-span-1 relative rounded-xl overflow-hidden border flex flex-col items-center justify-center p-6 min-h-[250px] transition-colors ${
                    isDark ? "bg-[#121B31] border-[#1F2C47] hover:bg-[#1A233A]" : "bg-white border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <svg
                    className={`w-10 h-10 mb-4 transition-colors ${isDark ? "text-[#2563EB]" : "text-[#2563EB]"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <EditableText
                    path="careers.life.bento3Title"
                    fallback="3 Global Offices"
                    as="h3"
                    className={`text-base font-semibold tracking-widest uppercase text-center block ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  />
                </motion.div>

                {/* Bottom Right Split 2 (Awards) */}
                <motion.div
                  variants={fadeUp}
                  className="md:col-span-3 md:row-span-1 relative rounded-xl overflow-hidden bg-[#2563EB] flex flex-col items-center justify-center p-6 min-h-[250px]"
                >
                  <EditableText
                    path="careers.life.bento4Val"
                    fallback="14+"
                    as="h3"
                    className="font-heading text-7xl font-normal text-white mb-2 block text-center leading-none tracking-tight"
                  />
                  <EditableText
                    path="careers.life.bento4Label"
                    fallback="Industry Awards"
                    as="span"
                    className="text-white/80 text-base font-semibold tracking-widest uppercase block text-center"
                  />
                </motion.div>

              </motion.div>
            </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
