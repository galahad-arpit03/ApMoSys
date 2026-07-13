"use client";

import React, { useState } from "react";
import Container from "@/src/components/Container";
import { motion, AnimatePresence } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

const categories = [
  {
    id: "1",
    title: "AI & Automation",
    description:
      "AI-driven platforms that automate testing, document processing, and workflow orchestration to reduce manual effort and accelerate delivery.",
    icon: "🤖",
    products: ["CliqTest", "Swikrti", "FinXplore"],
  },
  {
    id: "2",
    title: "Quality Engineering",
    description:
      "Comprehensive testing platforms for functional, visual, performance, and security testing across web, mobile, and API layers.",
    icon: "✅",
    products: ["CliqTest", "Protean Device Lab", "Jupiter"],
  },
  {
    id: "3",
    title: "Observability & Monitoring",
    description:
      "Real-time monitoring, anomaly detection, and AIOps platforms that provide end-to-end visibility into your entire infrastructure.",
    icon: "📊",
    products: ["Saransh", "Netraa"],
  },
  {
    id: "4",
    title: "Security & Compliance",
    description:
      "Security validation platforms that automate vulnerability scanning, penetration testing, and compliance verification.",
    icon: "🛡️",
    products: ["ShieldVue"],
  },
  {
    id: "5",
    title: "Analytics & Intelligence",
    description:
      "Advanced analytics platforms that deliver real-time insights, predictive modeling, and intelligent decision-making capabilities.",
    icon: "📈",
    products: ["FinXplore", "Saransh"],
  },
  {
    id: "6",
    title: "Device & Infrastructure",
    description:
      "Cloud-based device labs and infrastructure platforms that provide on-demand access to real devices and testing environments.",
    icon: "📱",
    products: ["Protean Device Lab"],
  },
];

export default function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState<string | null>(categories[0].id);

  return (
    <SectionThemeWrapper sectionId="products_categories" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            className={`py-24 border-t transition-colors duration-300 ${
              isDark
                ? "bg-[#121212] border-[#1F1F1F]"
                : "bg-[#FAFAFA] border-[#E8E8E8]"
            }`}
          >
            <Container>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <span className="text-primary-red text-xs font-bold uppercase tracking-widest block mb-4">
                  <EditableText
                    path="products.categories.sectionLabel"
                    fallback="Product Categories"
                    as="span"
                  />
                </span>
                <h2
                  className={`font-heading text-3xl sm:text-4xl font-extrabold mb-4 ${
                    isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                  }`}
                >
                  <EditableText
                    path="products.categories.heading"
                    fallback="Organized by Capability"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                  }`}
                >
                  <EditableText
                    path="products.categories.description"
                    fallback="Explore our products grouped by capability — from AI and automation to security, observability, and analytics."
                    as="span"
                    multiline
                  />
                </p>
              </motion.div>

              {/* Categories */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Category buttons */}
                <div className="flex flex-col gap-3">
                  {categories.map((category) => {
                    const isActive = activeCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(isActive ? null : category.id)}
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 text-left ${
                          isActive
                            ? `border-primary-red ${
                                isDark
                                  ? "bg-[#1A1A1A] shadow-lg shadow-primary-red/5"
                                  : "bg-[#FFFFFF] shadow-lg shadow-primary-red/10"
                              }`
                            : isDark
                            ? "border-[#2A2A2A] bg-[#0D0D0D] hover:bg-[#1A1A1A]"
                            : "border-[#E8E8E8] bg-[#FAFAFA] hover:bg-[#FFFFFF]"
                        }`}
                      >
                        <div className="text-2xl flex-shrink-0">{category.icon}</div>
                        <div className="flex-1">
                          <h3
                            className={`font-heading font-bold text-base ${
                              isActive
                                ? "text-primary-red"
                                : isDark
                                ? "text-[#FFFFFF]"
                                : "text-[#121212]"
                            }`}
                          >
                            <EditableText
                              path={`products.categories.items.${Number(category.id) - 1}.title`}
                              fallback={category.title}
                              as="span"
                            />
                          </h3>
                          <p
                            className={`text-sm leading-relaxed ${
                              isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                            }`}
                          >
                            <EditableText
                              path={`products.categories.items.${Number(category.id) - 1}.description`}
                              fallback={category.description}
                              as="span"
                              multiline
                            />
                          </p>
                        </div>
                        <svg
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isActive ? "rotate-180" : ""
                          } ${isDark ? "text-[#7A7A7A]" : "text-[#5A5A5A]"}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    );
                  })}
                </div>

                {/* Right: Products in category */}
                <div className="relative">
                  <div
                    className={`rounded-xl border p-6 min-h-[200px] transition-all duration-300 ${
                      isDark
                        ? "bg-[#1A1A1A] border-[#2A2A2A]"
                        : "bg-[#FFFFFF] border-[#E8E8E8]"
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {activeCategory ? (
                        <motion.div
                          key={activeCategory}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h4
                            className={`font-heading font-bold text-sm uppercase tracking-widest mb-4 ${
                              isDark ? "text-[#7A7A7A]" : "text-[#5A5A5A]"
                            }`}
                          >
                            Products in this category
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {categories
                              .find((c) => c.id === activeCategory)
                              ?.products.map((product) => (
                                <span
                                  key={product}
                                  className={`px-4 py-2 rounded-full text-sm font-medium border ${
                                    isDark
                                      ? "bg-[#0D0D0D] border-[#3A3A3A] text-[#FAFAFA]"
                                      : "bg-[#FAFAFA] border-[#E8E8E8] text-[#121212]"
                                  }`}
                                >
                                  {product}
                                </span>
                              ))}
                          </div>
                          <p className={`text-xs mt-4 ${isDark ? "text-[#5A5A5A]" : "text-[#7A7A7A]"}`}>
                            Click a category to explore its products
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center justify-center h-full min-h-[150px]"
                        >
                          <p className={`text-sm ${isDark ? "text-[#5A5A5A]" : "text-[#7A7A7A]"}`}>
                            Select a category to view products
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}