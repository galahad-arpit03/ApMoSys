"use client";

import React from "react";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { useContentStore } from "@/src/admin/store/adminStore";
import { allianceIconMap, defaultAllianceIcon } from "../icons";

// Fallback data with icon keys (not emojis)
const features = [
  {
    id: "1",
    title: "Endorsed Service Partner of the Year",
    description:
      "Recognized by Dynatrace for excellence in delivering observability and AIOps solutions to enterprise customers.",
    icon: "trophy",
  },
  {
    id: "2",
    title: "Rising Star in Automation",
    description:
      "Awarded by Automation Anywhere for outstanding contributions to intelligent automation and RPA implementation.",
    icon: "star",
  },
  {
    id: "3",
    title: "CMMI Maturity Level 3",
    description:
      "Achieved CMMI Maturity Level 3 Certification, demonstrating our commitment to process excellence and quality delivery.",
    icon: "clipboard",
  },
  {
    id: "4",
    title: "Multiple IEEE Publications",
    description:
      "Published multiple research papers in Springer and IEEE journals on AI, automation, and quality engineering.",
    icon: "filetext",
  },
];

export default function FeaturedPartners() {
  const { content } = useContentStore();
  const featuredItems = content.alliance?.featured?.items || features;

  return (
    <SectionThemeWrapper sectionId="alliance_featured" defaultTheme="dark">
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
                  className={`font-heading text-3xl sm:text-4xl font-bold mb-4 ${
                    isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                  }`}
                >
                  <EditableText
                    path="alliance.featured.heading"
                    fallback="Recognized Excellence in Partnerships"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                  }`}
                >
                  <EditableText
                    path="alliance.featured.description"
                    fallback="Our partnerships have been recognized with industry awards, certifications, and publications that validate our commitment to excellence."
                    as="span"
                    multiline
                  />
                </p>
              </motion.div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredItems.map((feature, idx) => {
                  const IconComponent = allianceIconMap[feature.icon] || defaultAllianceIcon;
                  return (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className={`p-8 rounded-xl border text-center transition-all hover:shadow-lg hover:-translate-y-1 group ${
                        isDark
                          ? "bg-[#1A1A1A] border-[#2A2A2A] hover:border-primary-red/30"
                          : "bg-[#FFFFFF] border-[#E8E8E8] hover:border-primary-red/20"
                      }`}
                    >
                      <div className="flex justify-center mb-4 text-primary-red">
                        <IconComponent className="w-10 h-10" />
                      </div>
                      <h3
                        className={`font-heading text-lg font-bold mb-3 ${
                          isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                        }`}
                      >
                        <EditableText
                          path={`alliance.featured.items.${idx}.title`}
                          fallback={feature.title}
                          as="span"
                        />
                      </h3>
                      <p
                        className={`text-sm leading-relaxed ${
                          isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                        }`}
                      >
                        <EditableText
                          path={`alliance.featured.items.${idx}.description`}
                          fallback={feature.description}
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