"use client";
import { mindsetsectionData } from "./MindsetSectionData";

import React from "react";
import Container from "@/src/components/Container";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const iconMap: Record<string, string> = {
  bolt: "M13 10V3L4 14h7v7l9-11h-7z",
  shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
};

export default function MindsetSection() {
  const pathname = usePathname();
  const isEditRoute = pathname?.startsWith("/administrator");

  const { content, addCareerMindset, deleteCareerMindset } = useContentStore();
  const mindsetItems = content.careers.mindset.items || [];

  return (
    <SectionThemeWrapper sectionId="careers_mindset" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-12 lg:py-16 transition-colors duration-300 overflow-hidden ${
            isDark ? "bg-[#0A1128] text-white" : "bg-white text-gray-900"
          }`}>
            <Container>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                
                {/* Left Side: Text Content */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ staggerChildren: 0.15 }}
                  className="mb-16 lg:mb-0"
                >
                  <EditableText
                    path="careers.mindset.heading"
                    fallback="The ApMoSys Mindset."
                    as="h2"
                    className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] mb-6 block ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  />
                  <EditableText
                    path="careers.mindset.subheading"
                    fallback="We look for individuals who are not only technically proficient but also possess the drive to innovate. Our culture is built on continuous learning and agile methodologies."
                    as="p"
                    className={`text-lg sm:text-xl leading-relaxed mb-6 block ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                    multiline
                  />
                  
                  <div className="space-y-4">
                    <AnimatePresence mode="wait">
                      {mindsetItems.map((item, index) => (
                        <motion.div
                          key={item.id}
                          variants={fadeRight}
                          layout
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="flex gap-4 relative group"
                        >
                          <div className="flex-1 min-w-0 pr-8">
                            <EditableText
                              path={`careers.mindset.items.${index}.title`}
                              fallback={item.title}
                              as="h3"
                              className={`text-2xl lg:text-3xl font-semibold mb-3 block ${isDark ? "text-white" : "text-gray-900"}`}
                            />
                            <EditableText
                              path={`careers.mindset.items.${index}.description`}
                              fallback={item.description}
                              as="p"
                              className={`text-sm sm:text-base leading-relaxed block ${isDark ? "text-gray-400" : "text-gray-600"}`}
                              multiline
                            />
                          </div>

                          {/* Delete button (Admin Only) */}
                          {isEditRoute && (
                            <button
                              onClick={() => deleteCareerMindset(item.id)}
                              className={`absolute right-0 top-1 p-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 cursor-pointer ${
                                isDark ? "text-red-400 hover:text-red-300 bg-red-950/50 hover:bg-red-900/50" : "text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100"
                              }`}
                              title="Delete mindset pillar"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          )}
                        </motion.div>
                      ))}

                      {/* Add Mindset Pillar Button (Admin Only) */}
                      {isEditRoute && (
                        <motion.button
                          key="add-mindset-btn"
                          variants={fadeRight}
                          onClick={addCareerMindset}
                          className={`w-full flex items-center justify-center gap-2 border-2 border-dashed py-3.5 rounded-xl text-sm font-bold transition-all cursor-pointer group mt-4 ${
                            isDark ? "border-[#1F2C47] hover:border-[#2563EB]/50 text-white hover:text-[#2563EB]" : "border-gray-200 hover:border-[#2563EB]/50 text-gray-900 hover:text-[#2563EB]"
                          }`}
                        >
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-[#2563EB] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                          </svg>
                          Add Mindset Pillar
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Right Side: Visuals */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeLeft}
                  className="relative h-auto lg:h-[500px]"
                >
                  {/* Mobile: stacked flex, Desktop: absolute grid */}
                  <div className="flex flex-col gap-6 lg:absolute lg:inset-0 lg:grid lg:grid-cols-12 lg:grid-rows-12 lg:gap-4">
                    <div className={`aspect-[4/3] lg:aspect-auto lg:col-span-8 lg:row-span-8 lg:col-start-1 lg:row-start-3 rounded-xl overflow-hidden shadow-2xl relative z-10 flex items-center justify-center border ${
                      isDark ? "bg-[#1A1A1A] border-[#1F2C47]" : "bg-gray-50 border-gray-200"
                    }`}>
                       <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${
                         isDark ? "from-[#121B31] to-[#0A1128]" : "from-gray-100 to-gray-50"
                       }`}>
                          <span className={`${isDark ? "text-gray-500" : "text-gray-400"} font-medium text-sm px-4 text-center`}>Dashboard Image Placeholder</span>
                       </div>
                    </div>
                    <div className={`aspect-[4/3] lg:aspect-auto lg:col-span-8 lg:row-span-8 lg:col-start-5 lg:row-start-1 rounded-xl overflow-hidden shadow-xl relative z-0 flex items-center justify-center border ${
                      isDark ? "bg-[#1A1A1A] border-[#1F2C47]" : "bg-white border-gray-200"
                    }`}>
                       <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-tl ${
                         isDark ? "from-[#121B31] to-[#0A1128]" : "from-gray-100 to-gray-50"
                       }`}>
                          <span className={`${isDark ? "text-gray-500" : "text-gray-400"} font-medium text-sm text-center px-4`}>Video Call / Meet <br/> Image Placeholder</span>
                       </div>
                    </div>
                  </div>
                </motion.div>
                
              </div>
            </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
