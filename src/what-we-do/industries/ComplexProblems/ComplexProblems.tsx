"use client";

import React from "react";
import Container from "@/src/components/Container";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

export default function ComplexProblems() {
  const pathname = usePathname();
  const isEditRoute = pathname?.startsWith("/administrator");

  const { content, addIndustryComplexItem, deleteIndustryComplexItem } = useContentStore();
  const items = content.industries.complexItems || [];

  return (
    <SectionThemeWrapper sectionId="industries_complex" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            className={`py-16 pb-24 border-b transition-colors duration-300 relative overflow-hidden ${
              isDark
                ? "bg-[#0D0D0D] text-[#FAFAFA] border-[#1F1F1F]"
                : "bg-gradient-to-b from-[#F0F4F8] to-white text-[#121212] border-[#E8E8E8]"
            }`}
          >
            {/* Subtle background glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 ${
                isDark ? "bg-[#242A56]/10" : "bg-[#242A56]/10"
              }`} />
              <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3 ${
                isDark ? "bg-[#242A56]/10" : "bg-[#242A56]/10"
              }`} />
            </div>

            <Container>
              <EditableText
                path="industries.complex.heading"
                fallback="Complex Problems. Precise Solutions."
                as="h2"
                className={`font-heading text-3xl lg:text-4xl font-medium tracking-tight mb-16 block ${
                  isDark ? "text-white" : "text-slate-800"
                }`}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <AnimatePresence mode="popLayout">
                  {items.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      layout
                      transition={{ duration: 0.4 }}
                      className="relative pl-6 border-l-2 border-[#242A56]/30 hover:border-[#242A56] transition-colors group/card"
                    >
                      <EditableText
                        path={`industries.complexItems.${idx}.title`}
                        fallback={item.title}
                        as="h3"
                        className={`font-heading text-xl font-bold mb-3 block ${
                          isDark ? "text-white" : "text-slate-800"
                        }`}
                      />
                      <EditableText
                        path={`industries.complexItems.${idx}.description`}
                        fallback={item.description}
                        as="p"
                        className={`leading-relaxed block ${
                          isDark ? "text-gray-300" : "text-slate-600"
                        }`}
                        multiline
                      />

                      {/* Delete Button (Admin Only) */}
                      {isEditRoute && (
                        <button
                          onClick={() => deleteIndustryComplexItem(item.id)}
                          className={`absolute right-0 top-0 text-red-500 hover:text-red-400 p-1.5 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-200 z-30 cursor-pointer ${
                            isDark ? "bg-red-950/40 hover:bg-red-950/60" : "bg-red-50 hover:bg-red-100"
                          }`}
                          title="Delete item"
                        >
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Add Button (Admin Only) */}
              {isEditRoute && (
                <div className="mt-12 flex justify-center">
                  <button
                    onClick={addIndustryComplexItem}
                    className={`flex items-center gap-2 border-2 border-dashed px-8 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer group ${
                      isDark
                        ? "border-[#3A3A3A] hover:border-[#242A56]/50 text-white hover:text-[#242A56]"
                        : "border-[#E8E8E8] hover:border-[#242A56]/50 text-slate-800 hover:text-[#242A56]"
                    }`}
                  >
                    <svg className={`w-4 h-4 transition-colors ${
                      isDark ? "text-[#5A5A5A] group-hover:text-[#242A56]" : "text-[#7A7A7A] group-hover:text-[#242A56]"
                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    Add Architectural Challenge
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