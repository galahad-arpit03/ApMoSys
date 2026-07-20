// src/what-we-do/industries/IndustryGrid/IndustryGrid.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  bank: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3" />
    </svg>
  ),
  cart: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  wrench: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  heart: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
};

const industries = [
  {
    id: "1",
    title: "Banking & Finance",
    description: "Secure, scalable financial solutions with real-time processing and regulatory compliance.",
    icon: "bank",
    linkText: "Learn More",
  },
  {
    id: "2",
    title: "Retail & E-Commerce",
    description: "Omnichannel commerce platforms with seamless payment processing and inventory management.",
    icon: "cart",
    linkText: "Learn More",
  },
  {
    id: "3",
    title: "Manufacturing",
    description: "Smart factory solutions with IoT integration, predictive maintenance, and supply chain automation.",
    icon: "wrench",
    linkText: "Learn More",
  },
  {
    id: "4",
    title: "Healthcare",
    description: "HIPAA-compliant patient care systems with secure data exchange and telemedicine capabilities.",
    icon: "heart",
    linkText: "Learn More",
  },
  {
    id: "5",
    title: "Insurance",
    description: "Streamlined claims processing, policy administration, and underwriting systems for insurers.",
    icon: "shield",
    linkText: "Learn More",
  },
  {
    id: "6",
    title: "Telecommunications",
    description: "High-performance network operations with real-time monitoring and customer experience optimization.",
    icon: "wifi",
    linkText: "Learn More",
  },
  {
    id: "7",
    title: "Logistics & Supply Chain",
    description: "Real-time tracking, fleet management, and predictive logistics powered by AI and automation.",
    icon: "truck",
    linkText: "Learn More",
  },
  {
    id: "8",
    title: "Government & Public Sector",
    description: "Secure digital services with compliance frameworks and citizen-centric design patterns.",
    icon: "building",
    linkText: "Learn More",
  },
  {
    id: "9",
    title: "Energy & Utilities",
    description: "Smart grid solutions with real-time monitoring, predictive analytics, and sustainability reporting.",
    icon: "bolt",
    linkText: "Learn More",
  },
];

const ITEMS_PER_PAGE = 6;

export default function IndustryGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(industries.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedIndustries = industries.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section id="industries-grid" className="py-16 lg:py-24 bg-white border-b border-gray-100 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Header – No eyebrow */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-[1.1]">
              Industries We Serve
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-[#5A5A5A] leading-relaxed">
              Transforming global enterprises across diverse sectors with cutting-edge automation, scalable architecture, and uncompromised security.
            </p>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {paginatedIndustries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                layout
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-white border border-gray-200 rounded-md p-8 hover:border-[#2563EB]/30 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-md bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] mb-5 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  {iconMap[industry.icon] || iconMap.bank}
                </div>

                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#2563EB] transition-colors">
                  {industry.title}
                </h3>

                <p className="text-sm text-[#5A5A5A] leading-relaxed mb-6">
                  {industry.description}
                </p>

                <div className="pt-4 border-t border-gray-100 group-hover:border-[#2563EB]/20 transition-colors">
                  <a
                    href="#"
                    className="inline-flex items-center text-xs font-bold text-black hover:text-[#2563EB] transition-colors group/link"
                  >
                    {industry.linkText}
                    <ArrowRight className="w-3.5 h-3.5 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#2563EB] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-3">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className={`p-2.5 rounded-md border transition-colors ${
                currentPage === 1
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer"
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
                  className={`w-10 h-10 rounded-md text-sm font-bold transition-all cursor-pointer ${
                    currentPage === pNum
                      ? "bg-[#2563EB] text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                      : "border border-gray-300 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {pNum}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-2.5 rounded-md border transition-colors ${
                currentPage === totalPages
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer"
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