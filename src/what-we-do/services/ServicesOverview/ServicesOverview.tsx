"use client";

import React, { useState } from "react";
import Container from "@/src/components/Container";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

// Icon mapping for service cards
const iconMap: Record<string, React.ReactNode> = {
  "quality": (
    <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "automation": (
    <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  "cloud": (
    <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  ),
  "security": (
    <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  "devops": (
    <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  "ai": (
    <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  "observability": (
    <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
};

const ITEMS_PER_PAGE = 6;

export default function ServicesOverview() {
  const [currentPage, setCurrentPage] = useState(1);
  const pathname = usePathname();
  const isEditRoute = pathname?.startsWith("/administrator");

  const { content } = useContentStore();
  // Assuming we'll add a services.overview.items array to the store
  const servicesItems = content.services?.overview?.items || [];

  const totalPages = Math.ceil(servicesItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = servicesItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // If no items in store, use default data
  const defaultItems = [
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

  const items = paginatedItems.length > 0 ? paginatedItems : defaultItems.slice(0, ITEMS_PER_PAGE);

  return (
    <SectionThemeWrapper sectionId="services_overview" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="services-grid"
            className={`py-24 transition-colors duration-300 ${
              isDark
                ? "bg-[#121212] text-[#FAFAFA]"
                : "bg-[#FFFFFF] text-[#121212]"
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
                {/* <span className="text-primary-red text-xs font-bold uppercase tracking-widest block mb-4">
                  <EditableText
                    path="services.overview.sectionLabel"
                    fallback="Our Capabilities"
                    as="span"
                  />
                </span> */}
                <h2
                  className={`font-heading text-3xl sm:text-4xl font-extrabold mb-4 ${
                    isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                  }`}
                >
                  <EditableText
                    path="services.overview.heading"
                    fallback="Full-Stack Engineering Services"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
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
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        layout
                        transition={{ duration: 0.4 }}
                        className={`p-8 md:p-10 rounded-xl shadow-sm border hover:shadow-md transition-shadow group flex flex-col h-full relative transition-colors ${
                          isDark
                            ? "bg-[#1F1F1F] border-[#3A3A3A]"
                            : "bg-[#FFFFFF] border-[#E8E8E8]"
                        }`}
                      >
                        {/* Icon */}
                        <div
                          className={`mb-6 w-16 h-16 rounded-xl flex items-center justify-center transition-colors ${
                            isDark
                              ? "bg-primary-red/10 text-primary-red"
                              : "bg-primary-soft text-primary-red"
                          }`}
                        >
                          {iconMap[item.icon] || iconMap["automation"]}
                        </div>

                        <EditableText
                          path={`services.overview.items.${actualIdx}.title`}
                          fallback={item.title}
                          as="h3"
                          className={`font-heading text-2xl font-bold mb-4 block ${
                            isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                          }`}
                        />

                        <EditableText
                          path={`services.overview.items.${actualIdx}.description`}
                          fallback={item.description}
                          as="p"
                          className={`leading-relaxed mb-8 flex-grow block ${
                            isDark ? "text-[#A0A0A0]" : "text-[#4A4A4A]"
                          }`}
                          multiline
                        />

                        <div
                          className={`pt-6 border-t mt-auto transition-colors ${
                            isDark ? "border-[#3A3A3A]" : "border-[#E8E8E8]"
                          }`}
                        >
                          <a
                            href="#"
                            className={`inline-flex items-center text-xs font-bold tracking-widest uppercase group-hover:text-primary-red transition-colors ${
                              isDark ? "text-[#FFFFFF]" : "text-[#121212]"
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
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
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
                          ? "border-[#2A2A2A] text-[#5A5A5A] cursor-not-allowed"
                          : "border-[#E8E8E8] text-[#C8C8C8] cursor-not-allowed"
                        : isDark
                        ? "border-[#3A3A3A] text-[#FFFFFF] hover:bg-[#1F1F1F] cursor-pointer"
                        : "border-[#C8C8C8] text-[#121212] hover:bg-[#FAFAFA] cursor-pointer"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
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
                            ? "bg-primary-red text-white border-primary-red shadow-lg shadow-red-500/25"
                            : `border transition-colors ${
                                isDark
                                  ? "border-[#3A3A3A] text-[#A0A0A0] hover:bg-[#1F1F1F] hover:text-[#FFFFFF]"
                                  : "border-[#C8C8C8] text-[#5A5A5A] hover:bg-[#FAFAFA] hover:text-[#121212]"
                              }`
                        }`}
                      >
                        {pNum}
                      </button>
                    );
                  })}

                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={`p-2.5 rounded-lg border transition-colors ${
                      currentPage === totalPages
                        ? isDark
                          ? "border-[#2A2A2A] text-[#5A5A5A] cursor-not-allowed"
                          : "border-[#E8E8E8] text-[#C8C8C8] cursor-not-allowed"
                        : isDark
                        ? "border-[#3A3A3A] text-[#FFFFFF] hover:bg-[#1F1F1F] cursor-pointer"
                        : "border-[#C8C8C8] text-[#121212] hover:bg-[#FAFAFA] cursor-pointer"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
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