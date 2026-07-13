"use client";

import React, { useState } from "react";
import Container from "@/src/components/Container";
import { motion, AnimatePresence } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { useContentStore } from "@/src/admin/store/adminStore";
import { coesIconMap, defaultCoEIcon } from "../icons";

export default function CoEAccordion() {
  const { content } = useContentStore();
  const coeItems = content.coe?.overview?.items || [];

  // Fallback data
  const fallbackItems = [
    {
      id: "1",
      title: "Functional Center of Excellence",
      shortName: "FCoE",
      description:
        "Certified testing engineers and quality consultants possessing specialized skillsets, domain experience, and tools expertise to add value in pursuit of excellence.",
      icon: "functional",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop",
      details: [
        "Expertise in test strategy and planning",
        "Automation framework development",
        "Continuous testing integration",
        "Quality metrics and dashboards",
      ],
    },
    {
      id: "2",
      title: "Performance Center of Excellence",
      shortName: "PCoE",
      description:
        "Navigate challenges, achieve your performance goals, and deliver a rapid, responsive, and reliable experience that delights your customers.",
      icon: "performance",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      details: [
        "Load and stress testing",
        "Scalability validation",
        "Performance monitoring",
        "Capacity planning",
      ],
    },
    {
      id: "3",
      title: "Automation Center of Excellence",
      shortName: "ACoE",
      description:
        "Leverage the power of automation to reduce manual effort, improve reliability, increase repeatability, and identify issues as they are introduced.",
      icon: "automation",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
      details: [
        "Test automation frameworks",
        "CI/CD integration",
        "Self-healing tests",
        "AI-powered test generation",
      ],
    },
    {
      id: "4",
      title: "AI Center of Excellence",
      shortName: "AICoE",
      description:
        "Dedicated research and implementation lab for integrating predictive analytics, NLP, and advanced machine learning models into enterprise workflows.",
      icon: "ai",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
      details: [
        "Machine learning model development",
        "Natural language processing",
        "Predictive analytics",
        "AI-powered automation",
      ],
    },
    {
      id: "5",
      title: "Banking CoE",
      shortName: "BCoE",
      description:
        "Deep domain expertise in core banking, payments, and compliance testing, ensuring zero-defect releases for financial institutions.",
      icon: "banking",
      image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=600&auto=format&fit=crop",
      details: [
        "Core banking system testing",
        "Payment gateway validation",
        "Regulatory compliance",
        "Fraud detection systems",
      ],
    },
    {
      id: "6",
      title: "Insurance CoE",
      shortName: "ICoE",
      description:
        "Specialized frameworks for Policy Admin Systems, Claims Processing, and Underwriting validation tailored for the insurance sector.",
      icon: "insurance",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?q=80&w=600&auto=format&fit=crop",
      details: [
        "Policy administration testing",
        "Claims processing validation",
        "Underwriting systems",
        "Insurance regulatory compliance",
      ],
    },
  ];

  const items = coeItems.length > 0 ? coeItems : fallbackItems;
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id || null);

  return (
    <SectionThemeWrapper sectionId="coe_accordion" defaultTheme="dark">
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
                    path="coe.accordion.heading"
                    fallback="Explore Our Centers of Excellence in Depth"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                  }`}
                >
                  <EditableText
                    path="coe.accordion.description"
                    fallback="Click on each CoE to discover its focus areas, capabilities, and how it drives innovation across our organization."
                    as="span"
                    multiline
                  />
                </p>
              </motion.div>

              {/* Accordion */}
              <div className="max-w-4xl mx-auto space-y-4">
                {items.map((item, idx) => {
                  const isActive = activeId === item.id;
                  const IconComponent = coesIconMap[item.icon] || defaultCoEIcon;
                  const details = item.details || [
                    "Capability 1",
                    "Capability 2",
                    "Capability 3",
                  ];

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                        isActive
                          ? `border-primary-red ${
                              isDark
                                ? "bg-[#1A1A1A] shadow-lg shadow-primary-red/5"
                                : "bg-[#FFFFFF] shadow-lg shadow-primary-red/10"
                            }`
                          : isDark
                          ? "border-[#2A2A2A] bg-[#0D0D0D]"
                          : "border-[#E8E8E8] bg-[#FAFAFA]"
                      }`}
                    >
                      <button
                        onClick={() => setActiveId(isActive ? null : item.id)}
                        className="w-full text-left px-6 py-5 flex items-center gap-4 cursor-pointer"
                      >
                        <div className="flex-shrink-0 text-primary-red">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 flex-wrap">
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
                                path={`coe.overview.items.${idx}.title`}
                                fallback={item.title}
                                as="span"
                              />
                            </h3>
                            <span
                              className={`text-xs font-bold uppercase tracking-widest ${
                                isDark ? "text-[#7A7A7A]" : "text-[#5A5A5A]"
                              }`}
                            >
                              <EditableText
                                path={`coe.overview.items.${idx}.shortName`}
                                fallback={item.shortName}
                                as="span"
                              />
                            </span>
                          </div>
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

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div
                              className={`px-6 pb-6 pt-2 border-t ${
                                isDark ? "border-[#2A2A2A]" : "border-[#E8E8E8]"
                              }`}
                            >
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                  <p
                                    className={`text-sm leading-relaxed mb-4 ${
                                      isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                                    }`}
                                  >
                                    <EditableText
                                      path={`coe.overview.items.${idx}.description`}
                                      fallback={item.description}
                                      as="span"
                                      multiline
                                    />
                                  </p>
                                  <h4
                                    className={`text-xs font-bold uppercase tracking-widest mb-3 ${
                                      isDark ? "text-[#7A7A7A]" : "text-[#5A5A5A]"
                                    }`}
                                  >
                                    Key Capabilities
                                  </h4>
                                  <ul className="space-y-2">
                                    {details.map((detail, dIdx) => (
                                      <li
                                        key={dIdx}
                                        className={`flex items-start gap-2 text-sm ${
                                          isDark ? "text-[#C8C8C8]" : "text-[#5A5A5A]"
                                        }`}
                                      >
                                        <span className="text-primary-red mt-0.5">◆</span>
                                        <EditableText
                                          path={`coe.overview.items.${idx}.details.${dIdx}`}
                                          fallback={detail}
                                          as="span"
                                        />
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="relative h-48 md:h-auto rounded-lg overflow-hidden bg-[#2A2A2A]">
                                  {item.image ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                      src={item.image}
                                      alt={item.title}
                                      className="w-full h-full object-cover"
                                    />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center text-[#5A5A5A] text-sm">
                                      CoE Image
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}