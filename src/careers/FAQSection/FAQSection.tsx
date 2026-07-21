"use client";
import { faqsectionData } from "./FAQSectionData";

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
  const storeFaqs = content.careers.faqItems || [];
  
  const defaultFaqs = [
    {
      id: "faq-1",
      question: "What does the initial tech stack look like?",
      answer: "We primarily work with React, Next.js, and TypeScript on the frontend, with robust scalable microservices on the backend. We believe in using the best tool for the job."
    },
    {
      id: "faq-2",
      question: "Do you offer remote work options?",
      answer: "Yes, we offer flexible hybrid and fully remote work models for eligible roles, ensuring you can work where you are most productive."
    },
    {
      id: "faq-3",
      question: "How long does the onboarding process take?",
      answer: "Our onboarding is a comprehensive 2-4 week journey depending on your role, ensuring you have all the context, tools, and mentorship needed to succeed."
    }
  ];

  const faqs = storeFaqs.length > 0 ? storeFaqs : defaultFaqs;

  return (
    <SectionThemeWrapper sectionId="careers_faq" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-12 lg:py-16 transition-colors duration-300 overflow-hidden ${
            isDark ? "bg-[#0A1128] text-white" : "bg-white text-gray-900"
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">

                {/* Left Side: Header */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  className="col-span-5 mb-12 lg:mb-0"
                >
                  <EditableText
                    path="careers.faq.heading"
                    fallback="Frequently Asked Questions"
                    as="h2"
                    className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] block ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  />
                </motion.div>

                {/* Right Side: Accordion */}
                <div className="col-span-7 space-y-3">
                  <AnimatePresence mode="wait">
                    {faqs.map((faq: any, idx: number) => (
                      <motion.div
                        key={faq.id || idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        layout
                        transition={{ duration: 0.4 }}
                        className={`border-b relative group ${
                          isDark ? "border-[#1F2C47]" : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className="flex-grow flex items-center justify-between py-6 text-left group pr-12 cursor-pointer"
                          >
                            <span className={`font-bold text-[17px] group-hover:text-[#2563EB] transition-colors pr-6 block w-full ${
                              isDark ? "text-white" : "text-slate-900"
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
                              className={`flex-shrink-0 group-hover:text-[#2563EB] ${
                                isDark ? "text-gray-500" : "text-gray-400"
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
                              <div className={`pb-6 leading-relaxed block ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                <EditableText
                                  path={`careers.faqItems.${idx}.answer`}
                                  fallback={faq.answer}
                                  as="p"
                                  className="block cursor-pointer text-[15px]"
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
                        className={`w-full flex items-center justify-center gap-2 border-2 border-dashed py-3.5 rounded-xl text-[13px] uppercase tracking-wider font-bold transition-all cursor-pointer group mt-6 ${
                          isDark ? "border-[#1F2C47] hover:border-[#2563EB]/50 text-white hover:text-[#2563EB]" : "border-gray-200 hover:border-[#2563EB]/50 text-gray-900 hover:text-[#2563EB]"
                        }`}
                      >
                        <svg className="w-4 h-4 text-gray-500 group-hover:text-[#2563EB] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        Add FAQ Accordion
                      </motion.button>
                    )}
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
