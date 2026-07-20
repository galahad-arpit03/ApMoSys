"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import { useContentStore } from "@/src/admin/store/adminStore";
import { coesIconMap, defaultCoEIcon } from "../icons";

export default function CoEAccordion() {
  const { content } = useContentStore();
  const coeItems = content.coe?.overview?.items || [];

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
    <section className="py-16 lg:py-24 bg-[#0A1128] border-t border-[#1A264A] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Header */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            {/* <span className="text-[#2563EB] uppercase tracking-[0.25em] text-xs font-semibold">
              <EditableText
                path="coe.accordion.label"
                fallback="In-Depth View"
                as="span"
              />
            </span> */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-white mt-4 leading-[1.1]">
              <EditableText
                path="coe.accordion.heading"
                fallback="Explore Our Centers of Excellence in Depth"
                as="span"
              />
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              <EditableText
                path="coe.accordion.description"
                fallback="Click on each CoE to discover its focus areas, capabilities, and how it drives innovation across our organization."
                as="span"
                multiline
              />
            </p>
          </div>
        </div>

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
                className={`border rounded-md overflow-hidden transition-all duration-300 ${
                  isActive
                    ? `border-[#2563EB] bg-[#121B38] shadow-[0_0_30px_rgba(37,99,235,0.05)]`
                    : `border-[#1A264A] bg-[#121B38]/30`
                }`}
              >
                <button
                  onClick={() => setActiveId(isActive ? null : item.id)}
                  className="w-full text-left px-6 py-5 flex items-center gap-4 cursor-pointer transition-colors hover:bg-[#2563EB]/5"
                >
                  <div
                    className={`flex-shrink-0 p-2 rounded-md transition-colors ${
                      isActive
                        ? "bg-[#2563EB]/30 text-[#2563EB]"
                        : "bg-[#2563EB]/20 text-[#2563EB]"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3
                        className={`font-bold text-base transition-colors ${
                          isActive ? "text-[#2563EB]" : "text-white"
                        }`}
                      >
                        <EditableText
                          path={`coe.overview.items.${idx}.title`}
                          fallback={item.title}
                          as="span"
                        />
                      </h3>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
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
                    } text-gray-400`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
                      <div className="px-6 pb-6 pt-2 border-t border-[#1A264A]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-sm leading-relaxed text-gray-300 mb-4">
                              <EditableText
                                path={`coe.overview.items.${idx}.description`}
                                fallback={item.description}
                                as="span"
                                multiline
                              />
                            </p>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                              Key Capabilities
                            </h4>
                            <ul className="space-y-2">
                              {details.map((detail, dIdx) => (
                                <li
                                  key={dIdx}
                                  className="flex items-start gap-2 text-sm text-gray-300"
                                >
                                  <span className="text-[#2563EB] mt-0.5">◆</span>
                                  <EditableText
                                    path={`coe.overview.items.${idx}.details.${dIdx}`}
                                    fallback={detail}
                                    as="span"
                                  />
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="relative h-48 md:h-auto rounded-md overflow-hidden bg-[#1A264A]">
                            {item.image ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
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
      </div>
    </section>
  );
}