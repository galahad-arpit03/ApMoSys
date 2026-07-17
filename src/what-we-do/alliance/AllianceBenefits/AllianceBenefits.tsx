"use client";

import React from "react";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { useContentStore } from "@/src/admin/store/adminStore";
import { allianceIconMap, defaultAllianceIcon } from "../icons";

export default function AllianceBenefits() {
  const { content } = useContentStore();
  const benefitItems = content.alliance?.benefits?.items || [];

  const fallbackBenefits = [
    {
      id: "1",
      title: "Accelerated Innovation",
      description:
        "Leverage cutting-edge technologies and solutions through our strategic partnerships to accelerate your digital transformation.",
      icon: "innovation",
    },
    {
      id: "2",
      title: "Deep Domain Expertise",
      description:
        "Access specialized knowledge and industry expertise through our consulting and technology alliances.",
      icon: "expertise",
    },
    {
      id: "3",
      title: "Global Reach",
      description:
        "Extend your enterprise capabilities with our global network of partners and delivery centers worldwide.",
      icon: "global",
    },
    {
      id: "4",
      title: "Integrated Solutions",
      description:
        "Benefit from seamlessly integrated solutions that combine the best of ApMoSys and partner technologies.",
      icon: "integrated",
    },
  ];

  const items = benefitItems.length > 0 ? benefitItems : fallbackBenefits;

  return (
    <SectionThemeWrapper sectionId="alliance_benefits" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            className={`py-24 border-t transition-colors duration-300 ${
              isDark
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-gray-200"
            }`}
          >
            {/* Decorative glows (matching CoreValues) */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 bg-slate-600/20" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3 bg-slate-600/20" />

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
                    path="alliance.benefits.heading"
                    fallback="Building a Stronger Ecosystem Together"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-base lg:text-lg font-medium leading-relaxed ${
                    isDark ? "text-gray-300" : "text-black"
                  }`}
                >
                  <EditableText
                    path="alliance.benefits.description"
                    fallback="Our alliance partners benefit from a collaborative ecosystem that drives mutual growth, innovation, and customer success."
                    as="span"
                    multiline
                  />
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((benefit, idx) => {
                  const IconComponent = allianceIconMap[benefit.icon] || defaultAllianceIcon;
                  return (
                    <motion.div
                      key={benefit.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08, duration: 0.5 }}
                      className="group relative p-[1px] rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-gradient-to-b from-slate-600/50 to-slate-700/50 hover:from-slate-500 hover:to-slate-600"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/10 transition-all duration-500" />
                      <div className={`relative h-full backdrop-blur-xl p-6 sm:p-8 rounded-md flex flex-col items-start transition-colors duration-500 ${
                        isDark ? "bg-slate-800/90 group-hover:bg-slate-800" : "bg-white/80 group-hover:bg-white"
                      } overflow-hidden`}>
                        {/* Large Background Number */}
                        <div className={`absolute -top-6 -right-6 text-[120px] leading-none font-black select-none pointer-events-none z-0 ${
                          isDark ? "text-slate-700/40 group-hover:text-slate-600/50" : "text-gray-200/60 group-hover:text-gray-300/70"
                        }`}>
                          0{idx + 1}
                        </div>

                        <div className="relative z-10 pt-4">
                          {/* Icon with contrast fix */}
                          <div className={`mb-4 p-3 rounded-xl inline-block ${
                            isDark
                              ? "bg-[#242A56]/30 text-white"
                              : "bg-[#242A56]/10 text-[#242A56]"
                          }`}>
                            <IconComponent className="w-8 h-8" />
                          </div>
                          <h3 className={`font-bold text-xl lg:text-2xl mb-4 transition-colors duration-300 ${
                            isDark ? "text-white" : "text-slate-800"
                          }`}>
                            <EditableText
                              path={`alliance.benefits.items.${idx}.title`}
                              fallback={benefit.title}
                              as="span"
                            />
                          </h3>
                          <p className={`text-sm lg:text-base leading-relaxed font-medium ${
                            isDark ? "text-gray-400" : "text-slate-600"
                          }`}>
                            <EditableText
                              path={`alliance.benefits.items.${idx}.description`}
                              fallback={benefit.description}
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