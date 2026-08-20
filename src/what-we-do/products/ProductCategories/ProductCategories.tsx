"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/src/components/Container";
import { motion, AnimatePresence } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { useContentStore } from "@/src/admin/store/adminStore";
import { productIconMap, defaultProductIcon } from "../icons";
import { ArrowRight, Layers } from "lucide-react";

const categoryImageMap: Record<string, string> = {
  "1": "/assets/images/products/cat_ai_automation.png",
  "2": "/assets/images/products/cat_quality_engineering.png",
  "3": "/assets/images/products/cat_observability.png",
  "4": "/assets/images/products/cat_security.png",
  "5": "/assets/images/products/cat_analytics.png",
  "6": "/assets/images/products/cat_device_infra.png",
};

export default function ProductCategories() {
  const { content } = useContentStore();
  const categoryItems = content.products?.categories?.items || [];
  const [activeCategory, setActiveCategory] = useState<string | null>(
    categoryItems.length > 0 ? categoryItems[0].id : null
  );

  const activeCategoryData = categoryItems.find((c) => c.id === activeCategory);

  return (
    <SectionThemeWrapper sectionId="products_categories" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            className={`py-10 lg:py-16 transition-colors duration-300 relative ${
              isDark
                ? "bg-[#0A1128] text-[#FAFAFA]"
                : "bg-white text-[#121212]"
            }`}
          >
            <Container>
              {/* Split Header – matching landing page pattern */}
              <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-5">
                  <h2
                    className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-normal mt-4 leading-[1.1] ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    <EditableText
                      path="products.categories.heading"
                      fallback="Organized by Capability"
                      as="span"
                    />
                  </h2>
                </div>
                <div className="lg:col-span-7">
                  <p
                    className={`text-base lg:text-lg leading-relaxed ${
                      isDark ? "text-gray-300" : "text-[#5A5A5A]"
                    }`}
                  >
                    <EditableText
                      path="products.categories.description"
                      fallback="Explore our products grouped by capability — from AI and automation to security, observability, and analytics."
                      as="span"
                      multiline
                    />
                  </p>
                </div>
              </div>

              {/* Categories */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Category buttons */}
                <div className="flex flex-col gap-3">
                  {categoryItems.map((category) => {
                    const isActive = activeCategory === category.id;
                    const IconComponent = productIconMap[category.icon] || defaultProductIcon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(isActive ? null : category.id)}
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 text-left ${
                          isActive
                            ? `border-[#2563EB] ${
                                isDark
                                  ? "bg-[#121B38] shadow-lg shadow-[#2563EB]/5"
                                  : "bg-white shadow-lg shadow-[#2563EB]/10"
                              }`
                            : isDark
                            ? "border-[#1A264A] bg-[#121B38]/30 hover:bg-[#121B38]"
                            : "border-gray-200 bg-white/50 hover:bg-white"
                        }`}
                      >
                        <div className="flex-shrink-0 text-[#2563EB]">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3
                            className={`font-medium text-base ${
                              isActive
                                ? "text-[#2563EB]"
                                : isDark
                                ? "text-white"
                                : "text-slate-800"
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
                              isDark ? "text-gray-300" : "text-slate-600"
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
                          } ${isDark ? "text-gray-400" : "text-gray-400"}`}
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
                    className={`rounded-xl border p-6 h-full flex flex-col justify-between transition-all duration-300 ${
                      isDark
                        ? "bg-[#121B38] border-[#1A264A]"
                        : "bg-white/80 backdrop-blur-md border-gray-200/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
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
                          className="flex flex-col h-full justify-between"
                        >
                          <div>
                            {/* Icon & Title */}
                            <div className="flex items-center gap-4 mb-3">
                              <div className="text-[#2563EB]">
                                {(() => {
                                  const Icon = productIconMap[activeCategoryData.icon] || defaultProductIcon;
                                  return <Icon className="w-9 h-9" />;
                                })()}
                              </div>
                              <h4
                                className={`text-2xl font-medium ${
                                  isDark ? "text-white" : "text-slate-800"
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
                              className={`text-sm leading-relaxed mb-5 ${
                                isDark ? "text-gray-300" : "text-slate-600"
                              }`}
                            >
                              <EditableText
                                path={`products.categories.items.${Number(activeCategoryData.id) - 1}.description`}
                                fallback={activeCategoryData.description}
                                as="span"
                                multiline
                              />
                            </p>

                            {/* Products Chips/Badges List */}
                            <div className="mb-5">
                              <div className="flex items-center gap-2 mb-2.5">
                                <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
                                <h5
                                  className={`text-xs font-semibold uppercase tracking-widest ${
                                    isDark ? "text-gray-400" : "text-slate-500"
                                  }`}
                                >
                                  Products in this category
                                </h5>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {activeCategoryData.products.map((product) => (
                                  <div
                                    key={product}
                                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-2 transition-all duration-200 ${
                                      isDark
                                        ? "bg-[#0A1128]/80 border-[#1A264A] text-gray-200 hover:border-[#2563EB]/50"
                                        : "bg-slate-50 border-slate-200 text-slate-700 hover:border-[#2563EB]/50 hover:bg-white shadow-xs"
                                    }`}
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                                    <span>{product}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Featured Category Dashboard Preview Image */}
                            {(() => {
                              const activeImage =
                                (activeCategoryData as any).image ||
                                categoryImageMap[activeCategoryData.id] ||
                                "/assets/images/products/cat_ai_automation.png";
                              return (
                                <div className="relative w-full rounded-xl overflow-hidden border border-slate-200/40 dark:border-white/10 shadow-md group aspect-[16/9] bg-slate-950">
                                  <Image
                                    src={activeImage}
                                    alt={activeCategoryData.title}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-60" />
                                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                    <span className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-[#2563EB]/90 text-white backdrop-blur-md shadow-sm">
                                      {activeCategoryData.title} Preview
                                    </span>
                                    <span className="text-[10px] font-medium text-slate-200 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-md">
                                      {activeCategoryData.products.length}{" "}
                                      {activeCategoryData.products.length === 1 ? "Product" : "Products"}
                                    </span>
                                  </div>
                                </div>
                              );
                            })()}
                          </div>

                          {/* CTA Button */}
                          <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-[#1A264A]">
                            <a
                              href="/products"
                              className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors group ${
                                isDark
                                  ? "text-white hover:text-[#2563EB]"
                                  : "text-slate-700 hover:text-[#2563EB]"
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
                          <p className={`text-sm ${isDark ? "text-gray-400" : "text-slate-500"}`}>
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