"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What does the initial tech stack look like?",
    answer: "Our core platform leverages React/Next.js on the frontend, with Node.js/Go backend microservices running on Kubernetes. We use Playwright and Selenium extensively for our automation pipelines.",
  },
  {
    question: "Do you offer remote work options?",
    answer: "Yes, we operate on a hybrid and remote-friendly model. While certain highly collaborative architectural sessions benefit from in-office presence, daily execution is flexible based on your team's structure.",
  },
  {
    question: "How long does the onboarding process take?",
    answer: "Our standard engineering onboarding spans 4 weeks. This includes deep dives into our CI/CD pipelines, security protocols, and shadowing a senior architect on an active enterprise deployment.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FFFFFF] text-[#121212] py-24 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#121212] mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.09, ease: "easeOut" }}
              className="border-b border-[#E8E8E8]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="font-bold text-base sm:text-lg text-[#121212] group-hover:text-primary-red transition-colors pr-6">
                  {faq.question}
                </span>

                <motion.span
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="flex-shrink-0 text-[#7A7A7A] group-hover:text-primary-red"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>

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
                    <p className="pb-6 text-[#5A5A5A] leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
