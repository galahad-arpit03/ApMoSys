"use client";

import React, { useState } from "react";
import Container from "@/src/components/Container";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

// Icon mapping for product cards
const iconMap: Record<string, React.ReactNode> = {
  "cliqtest": (
    <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "netraa": (
    <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  "jupiter": (
    <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  "shieldvue": (
    <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  "swikrti": (
    <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  "finxplore": (
    <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  ),
  "saransh": (
    <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  "protean": (
    <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
    </svg>
  ),
};

const ITEMS_PER_PAGE = 6;

export default function ProductsOverview() {
  const [currentPage, setCurrentPage] = useState(1);
  const pathname = usePathname();
  const isEditRoute = pathname?.startsWith("/administrator");

  const { content } = useContentStore();
  const productItems = content.products?.overview?.items || [];

  const totalPages = Math.ceil(productItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = productItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // If no items in store, use default data
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
    <SectionThemeWrapper sectionId="products_overview" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="products-grid"
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
                    path="products.overview.sectionLabel"
                    fallback="Our Product Suite"
                    as="span"
                  />
                </span> */}
                <h2
                  className={`font-heading text-3xl sm:text-4xl font-bold mb-4 ${
                    isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                  }`}
                >
                  <EditableText
                    path="products.overview.heading"
                    fallback="Purpose-Built Platforms for Enterprise Excellence"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                  }`}
                >
                  <EditableText
                    path="products.overview.description"
                    fallback="From AI-powered testing and observability to security validation and device labs — our products are designed to solve real-world enterprise challenges."
                    as="span"
                    multiline
                  />
                </p>
              </motion.div>

              {/* Products Grid */}
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
                          {iconMap[item.icon] || iconMap["cliqtest"]}
                        </div>

                        <EditableText
                          path={`products.overview.items.${actualIdx}.title`}
                          fallback={item.title}
                          as="h3"
                          className={`font-heading text-2xl font-bold mb-4 block ${
                            isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                          }`}
                        />

                        <EditableText
                          path={`products.overview.items.${actualIdx}.description`}
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
                              path={`products.overview.items.${actualIdx}.linkText`}
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