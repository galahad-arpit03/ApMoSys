"use client";

import React from "react";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { useContentStore } from "@/src/admin/store/adminStore";
import { coesIconMap, defaultCoEIcon } from "../icons";

export default function CoEOverview() {
  const { content } = useContentStore();
  const coeItems = content.coe?.overview?.items || [];

  // Fallback data if store is empty
  const fallbackItems = [
    {
      id: "1",
      title: "Functional Center of Excellence",
      shortName: "FCoE",
      description:
        "Certified testing engineers and quality consultants possessing specialized skillsets, domain experience, and tools expertise to add value in pursuit of excellence.",
      icon: "functional",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "2",
      title: "Performance Center of Excellence",
      shortName: "PCoE",
      description:
        "Navigate challenges, achieve your performance goals, and deliver a rapid, responsive, and reliable experience that delights your customers.",
      icon: "performance",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "3",
      title: "Automation Center of Excellence",
      shortName: "ACoE",
      description:
        "Leverage the power of automation to reduce manual effort, improve reliability, increase repeatability, and identify issues as they are introduced.",
      icon: "automation",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "4",
      title: "AI Center of Excellence",
      shortName: "AICoE",
      description:
        "Dedicated research and implementation lab for integrating predictive analytics, NLP, and advanced machine learning models into enterprise workflows.",
      icon: "ai",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "5",
      title: "Banking CoE",
      shortName: "BCoE",
      description:
        "Deep domain expertise in core banking, payments, and compliance testing, ensuring zero-defect releases for financial institutions.",
      icon: "banking",
      image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "6",
      title: "Insurance CoE",
      shortName: "ICoE",
      description:
        "Specialized frameworks for Policy Admin Systems, Claims Processing, and Underwriting validation tailored for the insurance sector.",
      icon: "insurance",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?q=80&w=400&auto=format&fit=crop",
    },
  ];

  const items = coeItems.length > 0 ? coeItems : fallbackItems;

  return (
    <SectionThemeWrapper sectionId="coe_overview" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="coe-grid"
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
                    path="coe.overview.sectionLabel"
                    fallback="Our Centers of Excellence"
                    as="span"
                  />
                </span> */}
                <h2
                  className={`font-heading text-3xl sm:text-4xl font-bold mb-4 ${
                    isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                  }`}
                >
                  <EditableText
                    path="coe.overview.heading"
                    fallback="Specialized Innovation Labs"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                  }`}
                >
                  <EditableText
                    path="coe.overview.description"
                    fallback="Our Centers of Excellence are dedicated innovation hubs that establish best practices, develop specialized tools, and drive thought leadership across critical domains."
                    as="span"
                    multiline
                  />
                </p>
              </motion.div>

              {/* CoE Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, idx) => {
                  const IconComponent = coesIconMap[item.icon] || defaultCoEIcon;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08, duration: 0.5 }}
                      className={`p-8 rounded-xl border transition-all hover:shadow-lg hover:-translate-y-1 group ${
                        isDark
                          ? "bg-[#1A1A1A] border-[#2A2A2A] hover:border-primary-red/30"
                          : "bg-[#FFFFFF] border-[#E8E8E8] hover:border-primary-red/20"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-primary-red">
                          <IconComponent className="w-8 h-8" />
                        </div>
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
                      <h3
                        className={`font-heading text-xl font-bold mb-3 ${
                          isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                        }`}
                      >
                        <EditableText
                          path={`coe.overview.items.${idx}.title`}
                          fallback={item.title}
                          as="span"
                        />
                      </h3>
                      <p
                        className={`text-sm leading-relaxed ${
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