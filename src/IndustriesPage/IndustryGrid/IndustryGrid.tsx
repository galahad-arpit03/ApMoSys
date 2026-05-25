"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";

const iconMap: Record<string, React.ReactNode> = {
  bank: (
    <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3" />
    </svg>
  ),
  cart: (
    <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  wrench: (
    <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  heart: (
    <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
};

const ITEMS_PER_PAGE = 9;

export default function IndustryGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const pathname = usePathname();
  const isEditRoute = pathname?.startsWith("/administrator");

  const { content, addIndustryGridItem, deleteIndustryGridItem } = useContentStore();
  const industries = content.industries.gridItems || [];

  // Pagination calculation
  const totalPages = Math.ceil(industries.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedIndustries = industries.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {paginatedIndustries.map((item, index) => {
              const actualIdx = startIndex + index;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  layout
                  transition={{ duration: 0.4 }}
                  className="bg-[#FFFFFF] p-8 md:p-10 rounded-xl shadow-sm border border-[#E8E8E8] hover:shadow-md transition-shadow group flex flex-col h-full relative"
                >
                  {/* Delete Trigger (Admin Only) */}
                  {isEditRoute && (
                    <button
                      onClick={() => deleteIndustryGridItem(item.id)}
                      className="absolute right-4 top-4 text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 cursor-pointer"
                      title="Delete card"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  )}

                  <div className="mb-6 bg-primary-soft w-16 h-16 rounded-xl flex items-center justify-center text-primary-red">
                    {iconMap[item.icon] || iconMap.bank}
                  </div>
                  <EditableText
                    path={`industries.gridItems.${actualIdx}.title`}
                    fallback={item.title}
                    as="h3"
                    className="font-heading text-2xl font-bold text-[#121212] mb-4 block"
                  />
                  <EditableText
                    path={`industries.gridItems.${actualIdx}.description`}
                    fallback={item.description}
                    as="p"
                    className="text-[#4A4A4A] leading-relaxed mb-8 flex-grow block"
                    multiline
                  />
                  
                  <div className="pt-6 border-t border-[#E8E8E8] mt-auto">
                    <div className="inline-flex items-center text-xs font-bold text-[#121212] tracking-widest uppercase group-hover:text-primary-red transition-colors block">
                      <EditableText
                        path={`industries.gridItems.${actualIdx}.linkText`}
                        fallback={item.linkText}
                        as="span"
                        className="cursor-pointer"
                      />
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Add Benefit Trigger (Admin Only) */}
            {isEditRoute && paginatedIndustries.length < ITEMS_PER_PAGE && (
              <motion.button
                key="add-industry-grid-btn"
                layout
                onClick={addIndustryGridItem}
                className="bg-transparent border-2 border-dashed border-[#E8E8E8] hover:border-primary-red/50 rounded-xl p-8 flex flex-col items-center justify-center text-center h-full min-h-[320px] transition-all cursor-pointer group text-[#121212] hover:text-primary-red"
              >
                <div className="w-12 h-12 rounded-full border border-dashed border-[#C8C8C8] group-hover:border-primary-red/50 flex items-center justify-center mb-4 transition-colors">
                  <svg className="w-6 h-6 text-[#7A7A7A] group-hover:text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span className="font-bold text-sm uppercase tracking-wider block">Add Industry Card</span>
                <span className="text-[#7A7A7A] text-xs mt-2 block">Configure sectors, details and redirection path.</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Pagination Toolbar */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center gap-3">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className={`p-2.5 rounded-lg border transition-colors ${
                currentPage === 1
                  ? "border-[#E8E8E8] text-[#C8C8C8] cursor-not-allowed"
                  : "border-[#C8C8C8] text-[#121212] hover:bg-[#FAFAFA] cursor-pointer"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => {
              const pNum = idx + 1;
              return (
                <button
                  key={pNum}
                  onClick={() => setCurrentPage(pNum)}
                  className={`w-10 h-10 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                    currentPage === pNum
                      ? "bg-primary-red text-white border-primary-red shadow-lg shadow-red-500/25"
                      : "border border-[#C8C8C8] text-[#5A5A5A] hover:bg-[#FAFAFA] hover:text-[#121212]"
                  }`}
                >
                  {pNum}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-2.5 rounded-lg border transition-colors ${
                currentPage === totalPages
                  ? "border-[#E8E8E8] text-[#C8C8C8] cursor-not-allowed"
                  : "border-[#C8C8C8] text-[#121212] hover:bg-[#FAFAFA] cursor-pointer"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
