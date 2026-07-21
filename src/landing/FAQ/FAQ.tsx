"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does implementation take?",
    answer: "Most enterprise integrations are completed within 2 to 4 weeks. Our team provides dedicated onboarding support to ensure a seamless transition without disrupting your current operations."
  },
  {
    question: "Do you offer on-premise deployments?",
    answer: "Yes. While we are cloud-native, we offer enterprise-grade on-premise and hybrid deployment options for organizations with strict security or compliance requirements."
  },
  {
    question: "How does the pricing scale?",
    answer: "Our pricing is transparent and scales based on your infrastructure size and usage. We offer tailored enterprise agreements that provide predictable billing."
  },
  {
    question: "Is there a limit to the number of users?",
    answer: "No, all our enterprise plans include unlimited seats. We believe in democratizing access to quality tools across your entire engineering organization."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#0A1128] border-y border-[#1A264A]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Everything you need to know about partnering with ApMoSys, our implementation process, and enterprise pricing.
            </p>
            <div className="p-6 bg-[#121B38] border border-[#1A264A] rounded-md">
              <h4 className="text-white font-semibold mb-2">Still have questions?</h4>
              <p className="text-sm text-gray-500 mb-4">Our enterprise support team is available 24/7 to help you evaluate ApMoSys.</p>
              <a href="/contact" className="inline-flex items-center text-[#B40001] text-sm font-bold hover:text-red-600 transition-colors">
                Contact Support &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`bg-[#121B38] border rounded-md transition-all duration-300 ${isOpen ? "border-[#B40001]/50 shadow-[0_0_15px_rgba(180,0,1,0.05)]" : "border-[#1A264A] hover:border-[#243461]"}`}
                >
                  <button
                    className="w-full text-left p-6 flex items-start justify-between focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                  >
                    <span className={`font-semibold text-lg pr-8 transition-colors ${isOpen ? "text-white" : "text-gray-300"}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-6 h-6 rounded-sm flex items-center justify-center border transition-all duration-300 mt-0.5 ${isOpen ? "bg-[#B40001]/10 border-[#B40001]/50 text-[#B40001]" : "border-[#243461] text-gray-500"}`}>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-[#1A264A] mt-2 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
