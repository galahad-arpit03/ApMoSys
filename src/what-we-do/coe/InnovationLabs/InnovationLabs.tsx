"use client";

import React from "react";
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
            className={`py-10 lg:py-16 border-t transition-colors duration-300 relative overflow-hidden ${
              isDark
                ? "bg-[#0A1128] border-[#1A264A]"
                : "bg-white border-gray-100"
            }`}
          >
            {/* Subtle background glow */}
            <div className={`absolute inset-0 pointer-events-none ${
              isDark ? "opacity-[0.05]" : "opacity-[0.03]"
            }`}>
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Split Header */}
              <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-5">
                  <h2
                    className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-normal mt-4 leading-[1.1] ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    <EditableText
                      path="coe.labs.heading"
                      fallback="Where Ideas Become Reality"
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
                      path="coe.labs.description"
                      fallback="Our Innovation Labs are dedicated spaces where engineers, researchers, and domain experts collaborate to build the future of enterprise technology."
                      as="span"
                      multiline
                    />
                  </p>
                </div>
              </div>

              {/* Labs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {labItems.map((lab, idx) => {
                  const IconComponent = coesIconMap[lab.icon] || defaultCoEIcon;
                  return (
                    <motion.div
                      key={lab.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className={`group relative rounded-md p-8 text-center transition-all hover:-translate-y-1 ${
                        isDark
                          ? "bg-[#121B38] border border-[#1A264A] hover:border-[#2563EB]/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.05)]"
                          : "bg-white border border-gray-200 hover:border-[#2563EB]/30 hover:shadow-lg"
                      }`}
                    >
                      <div
                        className={`w-14 h-14 rounded-md border flex items-center justify-center mx-auto mb-5 transition-colors ${
                          isDark
                            ? "bg-[#2563EB]/20 border-[#2563EB]/30 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white"
                            : "bg-[#2563EB]/10 border-[#2563EB]/20 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white"
                        }`}
                      >
                        <IconComponent className="w-7 h-7" strokeWidth={1.5} />
                      </div>

                      <h3
                        className={`text-base xl:text-lg font-medium mb-3 transition-colors ${
                          isDark
                            ? "text-white group-hover:text-[#2563EB]"
                            : "text-black group-hover:text-[#2563EB]"
                        }`}
                      >
                        <EditableText
                          path={`coe.labs.items.${idx}.title`}
                          fallback={lab.title}
                          as="span"
                        />
                      </h3>

                      <p
                        className={`text-[13px] xl:text-[14px] leading-snug ${
                          isDark ? "text-gray-300" : "text-[#5A5A5A]"
                        }`}
                      >
                        <EditableText
                          path={`coe.labs.items.${idx}.description`}
                          fallback={lab.description}
                          as="span"
                          multiline
                        />
                      </p>

                      {/* Decorative bottom line */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#2563EB] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}