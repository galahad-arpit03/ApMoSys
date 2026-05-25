"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Subscribe to dynamic contact FAQ items
  const faqItems = useContentStore((state) => state.content.contact.faqItems) || [];
  const addContactFAQItem = useContentStore((state) => state.addContactFAQItem);
  const deleteContactFAQItem = useContentStore((state) => state.deleteContactFAQItem);

  // Check admin mode based on routing namespace
  const isAdmin = typeof window !== "undefined" && window.location.pathname.startsWith("/administrator");

  return (
    <section className="bg-[#FAFAFA] text-[#121212] py-20 border-t border-[#E8E8E8] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-center mb-16 relative"
        >
          <EditableText
            path="contact.faq.heading"
            fallback="Engineering FAQ"
            as="h2"
            className="font-heading text-3xl sm:text-4xl font-extrabold text-[#121212] mb-4 block text-center"
          />
          <EditableText
            path="contact.faq.subheading"
            fallback="Common questions from our enterprise clients and partners."
            as="p"
            className="text-[#7A7A7A] text-sm sm:text-base block text-center"
          />

          {isAdmin && (
            <button
              onClick={() => addContactFAQItem()}
              className="mt-6 bg-[#121212] hover:bg-primary-red text-[#FFFFFF] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-md inline-flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Add FAQ Question
            </button>
          )}
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {faqItems.map((faq, idx) => (
              <motion.div
                key={faq.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="border border-[#E8E8E8] rounded-xl overflow-hidden bg-[#FFFFFF] relative"
              >
                <div className="flex items-center justify-between w-full pr-4">
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="flex-1 flex items-center justify-between px-6 py-5 text-left bg-[#FFFFFF] hover:bg-[#F5F5F5] transition-colors cursor-pointer"
                  >
                    <EditableText
                      path={`contact.faqItems.${idx}.question`}
                      fallback={faq.question}
                      as="span"
                      className="font-semibold text-sm sm:text-base text-[#121212] pr-6 block"
                    />

                    {/* Fixed: SVG icon perfectly centred inside the circle */}
                    <motion.span
                      animate={{ rotate: openIndex === idx ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="flex-shrink-0 w-7 h-7 rounded-full bg-primary-red flex items-center justify-center"
                    >
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
                      <div className="px-6 py-5 border-t border-[#E8E8E8]">
                        <EditableText
                          path={`contact.faqItems.${idx}.answer`}
                          fallback={faq.answer}
                          as="p"
                          multiline
                          className="text-sm text-[#5A5A5A] leading-relaxed block"
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
    </section>
  );
}
