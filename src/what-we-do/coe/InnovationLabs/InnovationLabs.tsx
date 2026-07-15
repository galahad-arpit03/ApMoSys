"use client";

import React from "react";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { useContentStore } from "@/src/admin/store/adminStore";
import { coesIconMap, defaultCoEIcon } from "../icons";

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
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-gray-200"
            }`}
          >
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <h2
                  className={`font-heading text-3xl sm:text-4xl font-medium tracking-tight mb-4 ${
                    isDark ? "text-white" : "text-slate-800"
                  }`}
                >
                  <EditableText
                    path="coe.labs.heading"
                    fallback="Where Ideas Become Reality"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-base lg:text-lg font-medium leading-relaxed ${
                    isDark ? "text-gray-300" : "text-black"
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
                          ? "bg-slate-700/50 border-slate-600 hover:border-[#242A56]/40"
                          : "bg-white/80 backdrop-blur-sm border-gray-200/60 hover:border-[#242A56]/20 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                      }`}
                    >
                      <div className={`mb-4 p-3 rounded-xl inline-block ${
                        isDark ? "bg-[#242A56]/20 text-[#242A56]" : "bg-[#242A56]/10 text-[#242A56]"
                      }`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3
                        className={`font-heading text-xl font-bold mb-3 ${
                          isDark ? "text-white" : "text-slate-800"
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
                          isDark ? "text-gray-300" : "text-slate-600"
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