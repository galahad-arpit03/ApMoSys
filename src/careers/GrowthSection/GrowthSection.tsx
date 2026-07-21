"use client";
import { growthsectionData } from "./GrowthSectionData";

import React, { useState } from "react";
import Container from "@/src/components/Container";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";


const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const iconMap: Record<string, string> = {
  heart: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  globe: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  monitor: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  bolt: "M13 10V3L4 14h7v7l9-11h-7z",
  shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
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

export default function GrowthSection() {
  const pathname = usePathname();
  const isEditRoute = pathname?.startsWith("/administrator");
  
  const { content, addCareerPerk, deleteCareerPerk } = useContentStore();
  const perks = content.careers.growth.items || [];

  // Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // 4 columns
  const totalPages = Math.ceil(perks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPerks = perks.slice(startIndex, startIndex + itemsPerPage);

  return (
    <SectionThemeWrapper sectionId="careers_growth" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-12 lg:py-16 border-t transition-colors duration-300 overflow-hidden ${
            isDark ? "bg-[#0A1128] border-[#1F2C47] text-white" : "bg-white border-gray-200 text-gray-900"
          }`}>
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
                    path="careers.growth.heading"
                    fallback="Engineered for Your Growth."
                    as="h2"
                    className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] block ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  />
                </div>

                {/* Right Side: Paragraph */}
                <div className="flex flex-col lg:items-end gap-6 max-w-xl">
                  <EditableText
                    path="careers.growth.subheading"
                    fallback="We invest heavily in our team's well-being and professional development. Here is what you get when you join our ranks."
                    as="p"
                    className={`text-lg sm:text-xl leading-relaxed lg:text-left block ${
                      isDark ? "text-gray-300" : "text-[#5A5A5A]"
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
                <AnimatePresence mode="wait">
                  {paginatedPerks.map((perk, index) => {
                    const globalIndex = startIndex + index;
                    return (
                      <motion.div
                        key={perk.id}
                        variants={fadeUp}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        whileHover={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`group py-8 md:py-10 px-6 xl:px-10 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-5 transition-colors relative ${
                          isDark ? "hover:bg-[#121B31]/50" : "hover:bg-gray-100/50"
                        } ${getBorderClasses(index, paginatedPerks.length + (isEditRoute ? 1 : 0), isDark)}`}
                      >
                        {/* Delete Button (Admin Only) */}
                        {isEditRoute && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteCareerPerk(perk.id);
                              // Reset page if empty
                              if (paginatedPerks.length === 1 && currentPage > 1) {
                                setCurrentPage(currentPage - 1);
                              }
                            }}
                            className={`absolute top-4 right-4 p-1.5 rounded-md transition-colors z-30 cursor-pointer ${
                              isDark ? "text-red-400 hover:text-red-300 bg-red-950/50 hover:bg-red-900/50" : "text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100"
                            }`}
                            title="Delete perk card"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        )}

                        <div>
                          <EditableText
                            path={`careers.growth.items.${globalIndex}.title`}
                            fallback={perk.title}
                            as="h4"
                            className={`text-[17px] font-bold mb-1.5 block ${isDark ? "text-white" : "text-slate-900"}`}
                          />
                          
                          <EditableText
                            path={`careers.growth.items.${globalIndex}.description`}
                            fallback={perk.description}
                            as="p"
                            className={`text-[13px] font-normal leading-relaxed max-w-[200px] block ${isDark ? "text-gray-400" : "text-slate-900"}`}
                            multiline
                          />
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* "Add Perk" Card (Admin Only) */}
                  {isEditRoute && (
                      <motion.button
                        key="add-perk-card"
                        variants={fadeUp}
                        onClick={addCareerPerk}
                        className={`group py-8 md:py-10 px-6 xl:px-10 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-center text-center gap-5 transition-colors relative cursor-pointer ${
                          isDark ? "hover:bg-[#121B31]/50 text-white" : "hover:bg-gray-100/50 text-gray-900"
                        } ${getBorderClasses(paginatedPerks.length, paginatedPerks.length + 1, isDark)}`}
                      >
                        <div className="shrink-0 w-12 h-12 rounded-full border border-dashed border-gray-400 bg-transparent flex items-center justify-center text-gray-400 group-hover:text-[#2563EB] group-hover:border-[#2563EB] transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-bold text-[17px] group-hover:text-[#2563EB] transition-colors block">
                            Add Benefit
                          </span>
                        </div>
                      </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      currentPage === 1
                        ? (isDark ? "border-[#2A2A2A] text-[#5A5A5A] opacity-50 cursor-not-allowed" : "border-[#E8E8E8] text-[#9A9A9A] opacity-50 cursor-not-allowed")
                        : (isDark ? "border-[#3A3A3A] text-[#FFFFFF] hover:bg-white hover:text-black" : "border-[#D8D8D8] text-[#121212] hover:bg-black hover:text-white")
                    }`}
                  >
                    Prev
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        currentPage === page
                          ? "bg-primary-red text-white border-primary-red shadow-lg shadow-primary-red/20"
                          : (isDark ? "border-[#3A3A3A] text-[#FFFFFF] hover:bg-white hover:text-black" : "border-[#D8D8D8] text-[#121212] hover:bg-black hover:text-white")
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      currentPage === totalPages
                        ? (isDark ? "border-[#2A2A2A] text-[#5A5A5A] opacity-50 cursor-not-allowed" : "border-[#E8E8E8] text-[#9A9A9A] opacity-50 cursor-not-allowed")
                        : (isDark ? "border-[#3A3A3A] text-[#FFFFFF] hover:bg-white hover:text-black" : "border-[#D8D8D8] text-[#121212] hover:bg-black hover:text-white")
                    }`}
                  >
                    Next
                  </button>
                </div>
              )}

                        </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
