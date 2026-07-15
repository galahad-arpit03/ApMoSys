"use client";

import React, { useState } from "react";
import Container from "@/src/components/Container";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { serviceIconMap, defaultServiceIcon } from "../icons";

const ITEMS_PER_PAGE = 6;

export default function ServicesOverview() {
  const [currentPage, setCurrentPage] = useState(1);
  const pathname = usePathname();
  const isEditRoute = pathname?.startsWith("/administrator");

  const { content } = useContentStore();
  const servicesItems = content.services?.overview?.items || [];

  const totalPages = Math.ceil(servicesItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = servicesItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const fallbackItems = [
    {
      id: "1",
      title: "Quality Engineering",
      description:
        "Comprehensive testing strategies including functional, automation, performance, and security testing to ensure zero-defect releases.",
      icon: "quality",
      linkText: "Learn More",
    },
    {
      id: "2",
      title: "Intelligent Automation",
      description:
        "AI-powered automation frameworks that reduce manual effort, accelerate delivery, and improve accuracy across your software lifecycle.",
      icon: "automation",
      linkText: "Learn More",
    },
    {
      id: "3",
      title: "Cloud & DevOps",
      description:
        "End-to-end cloud migration, CI/CD pipeline orchestration, infrastructure as code, and Kubernetes-based container management.",
      icon: "cloud",
      linkText: "Learn More",
    },
    {
      id: "4",
      title: "Security & Compliance",
      description:
        "Comprehensive security testing, vulnerability assessments, and compliance validation for regulated industries.",
      icon: "security",
      linkText: "Learn More",
    },
    {
      id: "5",
      title: "DevSecOps",
      description:
        "Integrated security practices into DevOps pipelines to ensure secure software delivery without compromising speed.",
      icon: "devops",
      linkText: "Learn More",
    },
    {
      id: "6",
      title: "AI Engineering",
      description:
        "Custom AI solutions including machine learning models, NLP, computer vision, and predictive analytics for enterprise applications.",
      icon: "ai",
      linkText: "Learn More",
    },
    {
      id: "7",
      title: "Observability & AIOps",
      description:
        "Real-time monitoring, anomaly detection, and intelligent operations management for mission-critical systems.",
      icon: "observability",
      linkText: "Learn More",
    },
    {
      id: "8",
      title: "Application Development",
      description:
        "Modern web and mobile application development using microservices, React, Next.js, and cloud-native architectures.",
      icon: "devops",
      linkText: "Learn More",
    },
  ];

  const items =
    paginatedItems.length > 0 ? paginatedItems : fallbackItems.slice(0, ITEMS_PER_PAGE);

  return (
    <SectionThemeWrapper sectionId="services_overview" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="services-grid"
            className={`py-16 transition-colors duration-300 ${
              isDark
                ? "bg-slate-800"
                : "bg-white"
            }`}
          >
            <Container>
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <h2
                  className={`text-4xl lg:text-5xl font-medium tracking-tight mb-4 ${
                    isDark ? "text-white" : "text-slate-800"
                  }`}
                >
                  <EditableText
                    path="services.overview.heading"
                    fallback="Full-Stack Engineering Services"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-base lg:text-lg font-medium leading-relaxed ${
                    isDark ? "text-gray-300" : "text-slate-600"
                  }`}
                >
                  <EditableText
                    path="services.overview.description"
                    fallback="End-to-end engineering capabilities spanning quality assurance, automation, cloud, security, and AI — designed to accelerate your enterprise transformation."
                    as="span"
                    multiline
                  />
                </p>
              </motion.div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {items.map((item, index) => {
                    const actualIdx = startIndex + index;
                    const IconComponent =
                      serviceIconMap[item.icon] || defaultServiceIcon;
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        layout
                        transition={{ duration: 0.4 }}
                        className={`p-8 md:p-10 rounded-xl border transition-all hover:shadow-lg hover:-translate-y-1 group flex flex-col h-full ${
                          isDark
                            ? "bg-slate-700/50 border-slate-600 hover:border-[#242A56]/40"
                            : "bg-white/80 backdrop-blur-sm border-gray-200/60 hover:border-[#242A56]/20 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                        }`}
                      >
                        {/* Icon */}
                        <div
                          className={`mb-6 w-16 h-16 rounded-xl flex items-center justify-center transition-colors ${
                            isDark
                              ? "bg-[#242A56]/20 text-[#242A56]"
                              : "bg-[#242A56]/10 text-[#242A56]"
                          }`}
                        >
                          <IconComponent className="w-8 h-8" />
                        </div>

                        <EditableText
                          path={`services.overview.items.${actualIdx}.title`}
                          fallback={item.title}
                          as="h3"
                          className={`text-2xl font-medium mb-4 block ${
                            isDark ? "text-white" : "text-slate-800"
                          }`}
                        />

                        <EditableText
                          path={`services.overview.items.${actualIdx}.description`}
                          fallback={item.description}
                          as="p"
                          className={`text-base leading-relaxed mb-8 flex-grow font-medium ${
                            isDark ? "text-gray-300" : "text-slate-600"
                          }`}
                          multiline
                        />

                        <div
                          className={`pt-6 border-t mt-auto transition-colors ${
                            isDark ? "border-slate-600" : "border-gray-200"
                          }`}
                        >
                          <a
                            href="#"
                            className={`inline-flex items-center text-sm font-medium tracking-wide group-hover:text-[#242A56] transition-colors ${
                              isDark ? "text-gray-300" : "text-slate-700"
                            }`}
                          >
                            <EditableText
                              path={`services.overview.items.${actualIdx}.linkText`}
                              fallback="Learn More"
                              as="span"
                            />
                            <svg
                              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform inline-block"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </a>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-16 flex justify-center items-center gap-3">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className={`p-2.5 rounded-lg border transition-colors ${
                      currentPage === 1
                        ? isDark
                          ? "border-slate-600 text-gray-500 cursor-not-allowed"
                          : "border-gray-200 text-gray-300 cursor-not-allowed"
                        : isDark
                        ? "border-slate-500 text-gray-300 hover:bg-slate-700 hover:text-white cursor-pointer"
                        : "border-gray-300 text-slate-600 hover:bg-gray-50 hover:text-slate-900 cursor-pointer"
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
                        className={`w-10 h-10 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                          currentPage === pNum
                            ? "bg-[#242A56] text-white shadow-lg shadow-[#242A56]/20"
                            : `border transition-colors ${
                                isDark
                                  ? "border-slate-600 text-gray-400 hover:bg-slate-700 hover:text-white"
                                  : "border-gray-300 text-slate-600 hover:bg-gray-50 hover:text-slate-900"
                              }`
                        }`}
                      >
                        {pNum}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`p-2.5 rounded-lg border transition-colors ${
                      currentPage === totalPages
                        ? isDark
                          ? "border-slate-600 text-gray-500 cursor-not-allowed"
                          : "border-gray-200 text-gray-300 cursor-not-allowed"
                        : isDark
                        ? "border-slate-500 text-gray-300 hover:bg-slate-700 hover:text-white cursor-pointer"
                        : "border-gray-300 text-slate-600 hover:bg-gray-50 hover:text-slate-900 cursor-pointer"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}