"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What are your application performance monitoring capabilities?",
    answer:
      "Our AIOps Monitor continuously tracks server response times, memory usage, and latency spikes in real time. We integrate with Prometheus, Grafana, and custom telemetry pipelines to provide unified observability dashboards across your entire infrastructure stack.",
  },
  {
    question: "Do you offer a free trial for the cliQTest platform?",
    answer:
      "Yes. Qualified enterprise clients can access a 30-day proof-of-concept environment with full access to our automation scripting engine, visual regression module, and reporting suite. Contact our sales team to begin the onboarding process.",
  },
  {
    question: "How do you handle multi-region enterprise deployments?",
    answer:
      "ApMoSys operates engineering hubs in Chennai, Bhubaneswar, and UAE to enable round-the-clock support. Our deployment framework supports multi-cloud and hybrid environments, including AWS, Azure, and GCP, with full CI/CD pipeline integration.",
  },
  {
    question: "What security compliance standards does ApMoSys adhere to?",
    answer:
      "We follow ISO/IEC 27001, SOC 2 Type II, and GDPR-aligned practices. Our QA systems include dedicated security regression suites that validate OWASP Top 10 vulnerabilities and VAPT coverage as part of every release cycle.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#FAFAFA] text-[#121212] py-20 border-t border-[#E8E8E8] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#121212] mb-4">
            Engineering FAQ
          </h2>
          <p className="text-[#7A7A7A] text-sm sm:text-base">
            Common questions from our enterprise clients and partners.
          </p>
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
              className="border border-[#E8E8E8] rounded-xl overflow-hidden bg-[#FFFFFF]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-[#FFFFFF] hover:bg-[#F5F5F5] transition-colors"
              >
                <span className="font-semibold text-sm sm:text-base text-[#121212] pr-6">
                  {faq.question}
                </span>

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
                    <p className="px-6 py-5 text-sm text-[#5A5A5A] leading-relaxed border-t border-[#E8E8E8]">
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
