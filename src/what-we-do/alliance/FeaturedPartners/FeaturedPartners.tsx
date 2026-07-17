"use client";

import React from "react";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { useContentStore } from "@/src/admin/store/adminStore";
import { allianceIconMap, defaultAllianceIcon } from "../icons";

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
            className={`py-24 border-t transition-colors duration-300 relative overflow-hidden ${
              isDark
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-gray-200"
            }`}
          >
            {/* Decorative glows */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/3 bg-slate-600/20" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none translate-y-1/2 translate-x-1/3 bg-slate-600/20" />

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
                    path="alliance.featured.heading"
                    fallback="Recognized Excellence in Partnerships"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-base lg:text-lg font-medium leading-relaxed ${
                    isDark ? "text-gray-300" : "text-black"
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
                      className="group relative p-[1px] rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-gradient-to-b from-slate-600/50 to-slate-700/50 hover:from-slate-500 hover:to-slate-600"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/10 transition-all duration-500" />
                      <div className={`relative h-full backdrop-blur-xl p-6 sm:p-8 rounded-md flex flex-col items-start transition-colors duration-500 ${
                        isDark ? "bg-slate-800/90 group-hover:bg-slate-800" : "bg-white/80 group-hover:bg-white"
                      } overflow-hidden`}>
                        <div className="relative z-10 pt-4 w-full">
                          {/* Icon with contrast fix */}
                          <div className={`mb-4 p-3 rounded-xl inline-block ${
                            isDark
                              ? "bg-[#242A56]/30 text-white"
                              : "bg-[#242A56]/10 text-[#242A56]"
                          }`}>
                            <IconComponent className="w-10 h-10" />
                          </div>
                          <h3 className={`font-bold text-xl lg:text-2xl mb-4 transition-colors duration-300 ${
                            isDark ? "text-white" : "text-slate-800"
                          }`}>
                            <EditableText
                              path={`alliance.featured.items.${idx}.title`}
                              fallback={feature.title}
                              as="span"
                            />
                          </h3>
                          <p className={`text-sm lg:text-base leading-relaxed font-medium ${
                            isDark ? "text-gray-400" : "text-slate-600"
                          }`}>
                            <EditableText
                              path={`alliance.featured.items.${idx}.description`}
                              fallback={feature.description}
                              as="span"
                              multiline
                            />
                          </p>
                        </div>
                      </div>
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