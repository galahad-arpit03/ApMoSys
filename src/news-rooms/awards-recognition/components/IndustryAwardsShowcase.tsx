"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Trophy, Sparkles, Shield, Award, CheckCircle, Flame } from "lucide-react";

const ITEMS_PER_PAGE = 6;

const awardsOverviewItems = [
  {
    id: "qa-excellence-2025",
    title: "Best Enterprise Quality Engineering Provider",
    description: "Acknowledged by Global Tech Excellence Forum for performance across automated testing, continuous integration, and zero-defect delivery standards.",
    icon: Trophy,
    linkText: "View Recognition",
    linkHref: "#awards-overview",
  },
  {
    id: "ai-automation-innovator",
    title: "AI Test Automation Pioneer Award",
    description: "Awarded by Digital Assurance Leadership Summit for self-healing automation frameworks that drastically reduce test script maintenance.",
    icon: Sparkles,
    linkText: "View Citation",
    linkHref: "#awards-overview",
  },
  {
    id: "cloud-reliability-2024",
    title: "Cloud Migration Assurance Partner of the Year",
    description: "Recognized for pre-migration risk validation, continuous performance testing, and chaos engineering for mission-critical banking platforms.",
    icon: Shield,
    linkText: "View Achievement",
    linkHref: "#awards-overview",
  },
  {
    id: "devsecops-excellence",
    title: "DevSecOps Security Governance Excellence",
    description: "Honored for integrating continuous security scanning, automated compliance checks, and policy enforcement into enterprise CI/CD pipelines.",
    icon: Award,
    linkText: "View Details",
    linkHref: "#awards-overview",
  },
  {
    id: "customer-trust-award",
    title: "Enterprise Customer Trust & Reliability Award",
    description: "Voted by enterprise CIOs for outstanding operational uptime, delivery reliability, and transparent SLA compliance across multi-year engagements.",
    icon: CheckCircle,
    linkText: "Read Story",
    linkHref: "#awards-overview",
  },
  {
    id: "green-engineering-milestone",
    title: "Sustainable Software & Infrastructure Leader",
    description: "Recognized for eco-friendly cloud lab optimization, reduced test suite compute overhead, and energy-efficient automation execution.",
    icon: Flame,
    linkText: "Explore Milestone",
    linkHref: "#awards-overview",
  },
];

export default function IndustryAwardsShowcase() {
  const [currentPage, setCurrentPage] = useState(1);

  const items = awardsOverviewItems;
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section id="awards-overview" className="py-10 lg:py-16 bg-white border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        {/* Split Header - Single-colored Heading */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-[1.1]">
              Industry Awards & Global Recognition
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-[#5A5A5A] leading-relaxed">
              Validated by global analyst firms, technology forums, and enterprise clients for excellence in software quality engineering, cloud automation, and AI innovation.
            </p>
          </div>
        </div>

        {/* Services Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {paginatedItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  layout
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white border border-gray-200 rounded-md p-8 hover:border-[#242A56]/40 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col h-full relative"
                >
                  <div className="w-14 h-14 rounded-md bg-[#242A56]/10 border border-[#242A56]/20 flex items-center justify-center text-[#242A56] mb-6 group-hover:bg-[#242A56] group-hover:text-white transition-colors">
                    <IconComponent className="w-7 h-7" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-base xl:text-lg font-medium text-black mb-3 group-hover:text-[#242A56] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[13px] xl:text-[14px] text-[#5A5A5A] leading-snug flex-grow">
                    {item.description}
                  </p>

                  <div className="pt-6 border-t border-gray-200 mt-auto">
                    <a
                      href={item.linkHref}
                      className="inline-flex items-center text-sm font-bold text-[#242A56] hover:text-black transition-colors group/link"
                    >
                      {item.linkText}
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
                      ? "bg-[#242A56] text-white shadow-md"
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
