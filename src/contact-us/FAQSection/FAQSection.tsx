"use client";
import { faqsectionData } from "./FAQSectionData";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";


export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Subscribe to dynamic contact FAQ items
  const faqItems = useContentStore((state) => state.content.contact.faqItems) || [];
  const addContactFAQItem = useContentStore((state) => state.addContactFAQItem);
  const deleteContactFAQItem = useContentStore((state) => state.deleteContactFAQItem);

  // Check admin mode based on routing namespace
  const isAdmin = typeof window !== "undefined" && window.location.pathname.startsWith("/administrator");

  return (
    <SectionThemeWrapper sectionId="contact_faq" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-16 lg:py-24 border-t transition-colors duration-300 overflow-hidden ${
            isDark ? "bg-[#0A1128] border-[#1F2C47] text-white" : "bg-white border-gray-200 text-slate-900"
          }`}>
            <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
              
              <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                
                {/* LHS: Heading & Description */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  className="col-span-5 mb-12 lg:mb-0 lg:pr-8"
                >
                  <EditableText
                    path="contact.faq.heading"
                    fallback="Engineering FAQ"
                    as="h2"
                    className={`font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight font-normal mb-6 block ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  />
                  <EditableText
                    path="contact.faq.subheading"
                    fallback="Common questions from our enterprise clients and partners."
                    as="p"
                    className={`text-[15px] sm:text-base leading-relaxed block ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  />

                  {isAdmin && (
                    <button
                      onClick={() => addContactFAQItem()}
                      className={`mt-8 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-md inline-flex items-center gap-2 shadow-md transition-all cursor-pointer ${
                        isDark ? "bg-[#2563EB] hover:bg-blue-600 text-white" : "bg-[#2563EB] hover:bg-blue-700 text-white"
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                      Add FAQ Question
                    </button>
                  )}
                </motion.div>

                {/* RHS: Accordion */}
                <div className="col-span-7 space-y-3">
                  <AnimatePresence mode="wait">
                    {faqItems.map((faq, idx) => (
                      <motion.div
                        key={faq.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: -10 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.05 }}
                        className={`border rounded-xl overflow-hidden relative border transition-colors ${
                          isDark ? "bg-[#1A233A] border-[#1F2C47]" : "bg-gray-50 border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full pr-4">
                          <button
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className={`flex-1 flex items-center justify-between px-6 py-5 text-left transition-colors cursor-pointer group ${
                              isDark ? "hover:bg-[#151d30]" : "hover:bg-gray-100/50"
                            }`}
                          >
                            <EditableText
                              path={`contact.faqItems.${idx}.question`}
                              fallback={faq.question}
                              as="span"
                              className={`font-bold text-sm sm:text-base pr-6 block transition-colors ${
                                isDark ? "text-white group-hover:text-[#2563EB]" : "text-slate-900 group-hover:text-[#2563EB]"
                              }`}
                            />

                            <motion.span
                              animate={{ rotate: openIndex === idx ? 45 : 0 }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                                openIndex === idx 
                                  ? "bg-[#2563EB] text-white" 
                                  : (isDark ? "bg-[#2563EB]/20 text-[#2563EB]" : "bg-[#2563EB]/10 text-[#2563EB]")
                              }`}
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                              </svg>
                            </motion.span>
                          </button>

                          {isAdmin && (
                            <button
                              onClick={() => deleteContactFAQItem(faq.id)}
                              className="ml-2 p-2 bg-red-600/10 hover:bg-red-600 text-red-600 hover:text-white rounded-md transition-colors shadow-sm flex items-center justify-center cursor-pointer"
                              title="Delete Question"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                              transition={{ duration: 0.32, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className={`px-6 py-5 border-t ${isDark ? "border-[#1F2C47]" : "border-gray-200"}`}>
                                <EditableText
                                  path={`contact.faqItems.${idx}.answer`}
                                  fallback={faq.answer}
                                  as="p"
                                  multiline
                                  className={`text-[15px] leading-relaxed block ${isDark ? "text-gray-400" : "text-gray-500"}`}
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
