"use client";

import React, { useState } from "react";
import Container from "@/src/components/Container";
import { motion, AnimatePresence } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { useContentStore } from "@/src/admin/store/adminStore";
import { productIconMap, defaultProductIcon } from "../icons";
import { ArrowRight } from "lucide-react";

export default function ProductCategories() {
  const { content } = useContentStore();
  const categoryItems = content.products?.categories?.items || [];
  const [activeCategory, setActiveCategory] = useState<string | null>(
    categoryItems.length > 0 ? categoryItems[0].id : null
  );

  // Find the active category object
  const activeCategoryData = categoryItems.find((c) => c.id === activeCategory);

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
                  {categoryItems.map((category) => {
                    const isActive = activeCategory === category.id;
                    const IconComponent =
                      productIconMap[category.icon] || defaultProductIcon;
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
                        <div className="flex-shrink-0 text-primary-red">
                          <IconComponent className="w-6 h-6" />
                        </div>
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
                            className={`text-sm leading-relaxed line-clamp-2 ${
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

                {/* Right: Products in category – now filled with rich content */}
                <div className="relative">
                  <div
                    className={`rounded-xl border p-6 h-full flex flex-col transition-all duration-300 ${
                      isDark
                        ? "bg-[#1A1A1A] border-[#2A2A2A]"
                        : "bg-[#FFFFFF] border-[#E8E8E8]"
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {activeCategoryData ? (
                        <motion.div
                          key={activeCategoryData.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col h-full"
                        >
                          {/* Icon & Title */}
                          <div className="flex items-center gap-4 mb-4">
                            <div className="text-primary-red">
                              {(() => {
                                const Icon = productIconMap[activeCategoryData.icon] || defaultProductIcon;
                                return <Icon className="w-10 h-10" />;
                              })()}
                            </div>
                            <h4
                              className={`font-heading text-2xl font-bold ${
                                isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                              }`}
                            >
                              <EditableText
                                path={`products.categories.items.${Number(activeCategoryData.id) - 1}.title`}
                                fallback={activeCategoryData.title}
                                as="span"
                              />
                            </h4>
                          </div>

                          {/* Category Description */}
                          <p
                            className={`text-sm leading-relaxed mb-6 ${
                              isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                            }`}
                          >
                            <EditableText
                              path={`products.categories.items.${Number(activeCategoryData.id) - 1}.description`}
                              fallback={activeCategoryData.description}
                              as="span"
                              multiline
                            />
                          </p>

                          {/* Products List */}
                          <div className="flex-1">
                            <h5
                              className={`text-xs font-bold uppercase tracking-widest mb-3 ${
                                isDark ? "text-[#7A7A7A]" : "text-[#5A5A5A]"
                              }`}
                            >
                              Products in this category
                            </h5>
                            <ul className="space-y-2">
                              {activeCategoryData.products.map((product) => (
                                <li
                                  key={product}
                                  className={`flex items-center gap-3 text-sm ${
                                    isDark ? "text-[#C8C8C8]" : "text-[#5A5A5A]"
                                  }`}
                                >
                                  <span className="text-primary-red">◆</span>
                                  <span>{product}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* CTA Button */}
                          <div className="mt-6 pt-4 border-t border-[#2A2A2A]">
                            <a
                              href="/products"
                              className={`inline-flex items-center gap-2 text-sm font-bold transition-colors group ${
                                isDark
                                  ? "text-[#FFFFFF] hover:text-primary-red"
                                  : "text-[#121212] hover:text-primary-red"
                              }`}
                            >
                              Explore all products
                              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </a>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex flex-col items-center justify-center h-full min-h-[200px] text-center"
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