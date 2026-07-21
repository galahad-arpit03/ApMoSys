"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { serviceIconMap, defaultServiceIcon } from "../icons";

const ITEMS_PER_PAGE = 6;

const fallbackItems = [
  {
    id: "1",
    title: "Quality Engineering",
    description:
      "Comprehensive testing strategies including functional, automation, performance, and security testing to ensure zero-defect releases.",
    icon: "quality",
  },
  {
    id: "2",
    title: "Intelligent Automation",
    description:
      "AI-powered automation frameworks that reduce manual effort, accelerate delivery, and improve accuracy across your software lifecycle.",
    icon: "automation",
  },
  {
    id: "3",
    title: "Cloud & DevOps",
    description:
      "End-to-end cloud migration, CI/CD pipeline orchestration, infrastructure as code, and Kubernetes-based container management.",
    icon: "cloud",
  },
  {
    id: "4",
    title: "Security & Compliance",
    description:
      "Comprehensive security testing, vulnerability assessments, and compliance validation for regulated industries.",
    icon: "security",
  },
  {
    id: "5",
    title: "DevSecOps",
    description:
      "Integrated security practices into DevOps pipelines to ensure secure software delivery without compromising speed.",
    icon: "devops",
  },
  {
    id: "6",
    title: "AI Engineering",
    description:
      "Custom AI solutions including machine learning models, NLP, computer vision, and predictive analytics for enterprise applications.",
    icon: "ai",
  },
  {
    id: "7",
    title: "Observability & AIOps",
    description:
      "Real-time monitoring, anomaly detection, and intelligent operations management for mission-critical systems.",
    icon: "observability",
  },
  {
    id: "8",
    title: "Application Development",
    description:
      "Modern web and mobile application development using microservices, React, Next.js, and cloud-native architectures.",
    icon: "devops",
  },
];

export default function ServicesOverview() {
  const [currentPage, setCurrentPage] = useState(1);

  const items = fallbackItems;
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section id="services-grid" className="py-10 lg:py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Header */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-[1.1]">
              Full-Stack Engineering Services
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-[#5A5A5A] leading-relaxed">
              End-to-end engineering capabilities spanning quality assurance, automation, cloud, security, and AI — designed to accelerate your enterprise transformation.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {paginatedItems.map((item, index) => {
              const IconComponent = serviceIconMap[item.icon] || defaultServiceIcon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  layout
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white border border-gray-200 rounded-md p-8 hover:border-[#2563EB]/40 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col h-full"
                >
                  <div className="w-14 h-14 rounded-md bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    <IconComponent className="w-7 h-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-base xl:text-lg font-medium text-black mb-3 group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[13px] xl:text-[14px] text-[#5A5A5A] leading-snug flex-grow">
                    {item.description}
                  </p>

                  <div className="pt-6 border-t border-gray-200 mt-auto">
                    <a
                      href={`/services/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-sm font-bold text-black hover:text-[#2563EB] transition-colors group/link"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
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