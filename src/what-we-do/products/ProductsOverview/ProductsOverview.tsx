"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";
import { ArrowRight } from "lucide-react";

// Icon mapping - inherits color from parent
const updatedIconMap: Record<string, React.ReactNode> = {
  "cliqtest": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "netraa": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  "jupiter": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  "shieldvue": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  "swikrti": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  "finxplore": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  ),
  "saransh": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  "protean": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
    </svg>
  ),
};

const ITEMS_PER_PAGE = 6;

// Helper to determine border classes based on grid position
const getBorderClasses = (idx: number, total: number) => {
  let classes = "border-gray-200 ";

  if (idx < total - 1) classes += "border-b ";

  if (idx === total - 2) classes += "sm:border-b-0 ";
  if (idx % 2 === 0) classes += "sm:border-r ";
  else classes += "sm:border-r-0 ";

  if (idx >= total - 3) classes += "lg:border-b-0 ";
  else classes += "lg:border-b ";

  if ((idx + 1) % 3 !== 0) classes += "lg:border-r ";
  else classes += "lg:border-r-0 ";

  return classes;
};

export default function ProductsOverview() {
  const [currentPage, setCurrentPage] = useState(1);
  const pathname = usePathname();
  const isEditRoute = pathname?.startsWith("/administrator");

  const { content } = useContentStore();
  const productItems = content.products?.overview?.items || [];

  const totalPages = Math.ceil(productItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = productItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const defaultItems = [
    {
      id: "1",
      title: "CliqTest",
      description:
        "Intelligent test automation platform that accelerates quality engineering with AI-driven test generation, execution, and maintenance.",
      icon: "cliqtest",
      linkText: "Explore CliqTest",
    },
    {
      id: "2",
      title: "Netraa",
      description:
        "AI-powered visual testing and monitoring platform that detects UI anomalies and ensures pixel-perfect user experiences across devices.",
      icon: "netraa",
      linkText: "Explore Netraa",
    },
    {
      id: "3",
      title: "Jupiter",
      description:
        "Enterprise-grade performance engineering platform for load testing, stress testing, and scalability validation at massive scale.",
      icon: "jupiter",
      linkText: "Explore Jupiter",
    },
    {
      id: "4",
      title: "ShieldVue",
      description:
        "Comprehensive security validation platform that automates vulnerability scanning, penetration testing, and compliance verification.",
      icon: "shieldvue",
      linkText: "Explore ShieldVue",
    },
    {
      id: "5",
      title: "Swikrti",
      description:
        "Intelligent document processing and workflow automation platform that streamlines complex business operations with AI and RPA.",
      icon: "swikrti",
      linkText: "Explore Swikrti",
    },
    {
      id: "6",
      title: "FinXplore",
      description:
        "Advanced financial analytics and reporting platform that provides real-time insights, predictive modeling, and regulatory compliance.",
      icon: "finxplore",
      linkText: "Explore FinXplore",
    },
    {
      id: "7",
      title: "Saransh",
      description:
        "Unified observability and AIOps platform that delivers end-to-end monitoring, incident intelligence, and root-cause analysis.",
      icon: "saransh",
      linkText: "Explore Saransh",
    },
    {
      id: "8",
      title: "Protean Device Lab",
      description:
        "Cloud-based device testing lab that provides on-demand access to thousands of real devices for cross-platform testing and validation.",
      icon: "protean",
      linkText: "Explore Protean",
    },
  ];

  const items = paginatedItems.length > 0 ? paginatedItems : defaultItems.slice(0, ITEMS_PER_PAGE);

  return (
    <section id="products-grid" className="py-10 lg:py-16 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Header – No Eyebrow */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-[1.1]">
              <EditableText
                path="products.overview.heading"
                fallback="Purpose-Built Platforms for Enterprise Excellence"
                as="span"
              />
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-[#5A5A5A] leading-relaxed">
              <EditableText
                path="products.overview.description"
                fallback="From AI-powered testing and observability to security validation and device labs — our products are designed to solve real-world enterprise challenges."
                as="span"
                multiline
              />
            </p>
          </div>
        </div>

        {/* Tabular Grid – Light Theme - Spacious */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full border-t border-b border-gray-200">
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => {
              const actualIdx = startIndex + index;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  layout
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`group flex items-start gap-5 p-6 xl:p-10 hover:bg-gray-50/50 transition-all duration-300 cursor-pointer ${getBorderClasses(
                    actualIdx,
                    items.length
                  )}`}
                >
                  {/* Icon - Larger */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-md bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    {updatedIconMap[item.icon] || updatedIconMap["cliqtest"]}
                  </div>

                  {/* Text Content - More breathing room */}
                  <div className="flex-grow min-w-0">
                    <h3 className="text-base xl:text-lg font-medium text-black mb-2 leading-tight group-hover:text-[#2563EB] transition-colors duration-300">
                      <EditableText
                        path={`products.overview.items.${actualIdx}.title`}
                        fallback={item.title}
                        as="span"
                      />
                    </h3>
                    {/* Description - Always visible, updated font size */}
                    <p className="text-[13px] xl:text-[14px] text-[#5A5A5A] leading-snug">
                      <EditableText
                        path={`products.overview.items.${actualIdx}.description`}
                        fallback={item.description}
                        as="span"
                        multiline
                      />
                    </p>
                    {/* Learn More link - Always visible */}
                    <div className="mt-3">
                      <a
                        href="#"
                        className="inline-flex items-center text-xs font-bold text-[#2563EB] hover:text-blue-700 transition-colors group/link"
                      >
                        <EditableText
                          path={`products.overview.items.${actualIdx}.linkText`}
                          fallback="Learn More"
                          as="span"
                        />
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Pagination – Light Theme */}
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