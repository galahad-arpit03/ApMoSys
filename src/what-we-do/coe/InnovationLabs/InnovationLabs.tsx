"use client";

import React from "react";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { useContentStore } from "@/src/admin/store/adminStore";
import { coesIconMap, defaultCoEIcon } from "../icons";

// Fallback data with icon keys (not emojis)
const labs = [
  {
    id: "1",
    title: "AI Research Lab",
    description:
      "Exploring cutting-edge AI technologies including generative AI, computer vision, and natural language processing for enterprise applications.",
    icon: "brain",
  },
  {
    id: "2",
    title: "Automation Innovation Hub",
    description:
      "Developing next-generation automation frameworks that combine RPA, AI, and intelligent decision-making for complex business processes.",
    icon: "wrench",
  },
  {
    id: "3",
    title: "Security & Compliance Lab",
    description:
      "Researching advanced security validation techniques, zero-trust architectures, and compliance automation for regulated industries.",
    icon: "lock",
  },
  {
    id: "4",
    title: "Cloud & DevOps Lab",
    description:
      "Innovating in cloud-native architectures, Kubernetes orchestration, and GitOps-driven continuous delivery pipelines.",
    icon: "cloud",
  },
];

export default function InnovationLabs() {
  const { content } = useContentStore();
  const labItems = content.coe?.labs?.items || labs;

  return (
    <SectionThemeWrapper sectionId="coe_labs" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="labs"
            className={`py-24 border-t transition-colors duration-300 ${
              isDark
                ? "bg-[#121212] border-[#1F1F1F]"
                : "bg-[#FFFFFF] border-[#E8E8E8]"
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
                    path="coe.labs.heading"
                    fallback="Where Ideas Become Reality"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                  }`}
                >
                  <EditableText
                    path="coe.labs.description"
                    fallback="Our Innovation Labs are dedicated spaces where engineers, researchers, and domain experts collaborate to build the future of enterprise technology."
                    as="span"
                    multiline
                  />
                </p>
              </motion.div>

              {/* Labs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {labItems.map((lab, idx) => {
                  const IconComponent = coesIconMap[lab.icon] || defaultCoEIcon;
                  return (
                    <motion.div
                      key={lab.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className={`p-8 rounded-xl border transition-all hover:shadow-lg hover:-translate-y-1 group ${
                        isDark
                          ? "bg-[#1A1A1A] border-[#2A2A2A] hover:border-primary-red/30"
                          : "bg-[#FAFAFA] border-[#E8E8E8] hover:border-primary-red/20"
                      }`}
                    >
                      <div className="mb-4 text-primary-red">
                        <IconComponent className="w-10 h-10" />
                      </div>
                      <h3
                        className={`font-heading text-xl font-bold mb-3 ${
                          isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                        }`}
                      >
                        <EditableText
                          path={`coe.labs.items.${idx}.title`}
                          fallback={lab.title}
                          as="span"
                        />
                      </h3>
                      <p
                        className={`text-sm leading-relaxed ${
                          isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                        }`}
                      >
                        <EditableText
                          path={`coe.labs.items.${idx}.description`}
                          fallback={lab.description}
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