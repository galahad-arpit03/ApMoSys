"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const pathname = usePathname();
  const isEditRoute = pathname?.startsWith("/administrator");

  const { content, addCareerFAQItem, deleteCareerFAQItem } = useContentStore();
  const faqs = content.careers.faqItems || [];

  return (
    <SectionThemeWrapper sectionId="careers_faq" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-24 transition-colors duration-300 overflow-hidden ${
            isDark ? "bg-[#121212] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#121212]"
          }`}>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="text-center mb-12"
              >
                <EditableText
                  path="careers.faq.heading"
                  fallback="Frequently Asked Questions"
                  as="h2"
                  className={`font-heading text-3xl sm:text-4xl font-extrabold mb-4 block ${
                    isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                  }`}
                />
              </motion.div>

              {/* Accordion */}
              <div className="space-y-3">
                <AnimatePresence mode="popLayout">
                  {faqs.map((faq, idx) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      layout
                      transition={{ duration: 0.4 }}
                      className={`border-b relative group ${
                        isDark ? "border-[#2A2A2A]" : "border-[#E8E8E8]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                          className="flex-grow flex items-center justify-between py-6 text-left group pr-12 cursor-pointer"
                        >
                          <span className={`font-bold text-base sm:text-lg group-hover:text-primary-red transition-colors pr-6 block w-full ${
                            isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                          }`}>
                            <EditableText
                              path={`careers.faqItems.${idx}.question`}
                              fallback={faq.question}
                              as="span"
                              className="block cursor-pointer"
                            />
                          </span>

                          <motion.span
                            animate={{ rotate: openIndex === idx ? 180 : 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className={`flex-shrink-0 group-hover:text-primary-red ${
                              isDark ? "text-[#CCCCCC]" : "text-[#7A7A7A]"
                            }`}
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </motion.span>
                        </button>

                        {/* Delete Button (Admin Only) */}
                        {isEditRoute && (
                          <button
                            onClick={() => deleteCareerFAQItem(faq.id)}
                            className={`absolute right-0 top-6 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 cursor-pointer ${
                              isDark ? "text-red-400 hover:text-red-300 bg-red-950/50 hover:bg-red-900/50" : "text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100"
                            }`}
                            title="Delete FAQ item"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        )}
                      </div>

                      <AnimatePresence initial={false}>
                        {openIndex === idx && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className={`pb-6 leading-relaxed block ${isDark ? "text-[#CCCCCC]" : "text-[#5A5A5A]"}`}>
                              <EditableText
                                path={`careers.faqItems.${idx}.answer`}
                                fallback={faq.answer}
                                as="p"
                                className="block cursor-pointer"
                                multiline
                              />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}

                  {/* Add FAQ Button (Admin Only) */}
                  {isEditRoute && (
                    <motion.button
                      key="add-faq-btn"
                      layout
                      onClick={addCareerFAQItem}
                      className={`w-full flex items-center justify-center gap-2 border-2 border-dashed py-3.5 rounded-xl text-sm font-bold transition-all cursor-pointer group mt-6 ${
                        isDark ? "border-[#2A2A2A] hover:border-primary-red/50 text-[#FFFFFF] hover:text-primary-red" : "border-[#E8E8E8] hover:border-primary-red/50 text-[#121212] hover:text-primary-red"
                      }`}
                    >
                      <svg className="w-4 h-4 text-[#7A7A7A] group-hover:text-primary-red transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                      Add FAQ Accordion
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
