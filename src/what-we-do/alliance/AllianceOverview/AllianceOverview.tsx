"use client";

import React from "react";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { useContentStore } from "@/src/admin/store/adminStore";
import { allianceIconMap, defaultAllianceIcon } from "../icons";

export default function AllianceOverview() {
  const { content } = useContentStore();
  const allianceItems = content.alliance?.overview?.items || [];

  const fallbackItems = [
    {
      id: "1",
      title: "Technology Partnerships",
      description:
        "Strategic partnerships with leading technology providers to deliver integrated, best-in-class solutions for enterprise transformation.",
      icon: "tech",
    },
    {
      id: "2",
      title: "Consulting Alliances",
      description:
        "Collaborations with global consulting firms to bring deep industry expertise and implementation excellence to complex transformation programs.",
      icon: "consulting",
    },
    {
      id: "3",
      title: "Industry Alliances",
      description:
        "Partnerships with industry associations and standards bodies to drive innovation and shape the future of enterprise technology.",
      icon: "industry",
    },
    {
      id: "4",
      title: "Academic Alliances",
      description:
        "Collaborations with leading academic institutions to advance research, develop talent, and foster innovation in emerging technologies.",
      icon: "academic",
    },
    {
      id: "5",
      title: "Channel Partnerships",
      description:
        "A global network of channel partners who extend our reach and deliver our solutions to enterprises worldwide.",
      icon: "channel",
    },
    {
      id: "6",
      title: "Innovation Alliances",
      description:
        "Strategic collaborations with startups and innovation labs to bring cutting-edge technologies and fresh perspectives to enterprise challenges.",
      icon: "innovation",
    },
  ];

  const items = allianceItems.length > 0 ? allianceItems : fallbackItems;

  return (
    <SectionThemeWrapper sectionId="alliance_overview" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="partners"
            className={`py-24 transition-colors duration-300 relative overflow-hidden ${
              isDark
                ? "bg-slate-800 text-white"
                : "bg-gradient-to-b from-[#F0F4F8] to-white text-slate-800"
            }`}
          >
            {/* Subtle background glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 ${
                isDark ? "bg-[#242A56]/10" : "bg-[#242A56]/10"
              }`} />
            </div>

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
                    path="alliance.overview.heading"
                    fallback="Strategic Partnerships for Enterprise Success"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-base lg:text-lg font-medium leading-relaxed ${
                    isDark ? "text-gray-300" : "text-black"
                  }`}
                >
                  <EditableText
                    path="alliance.overview.description"
                    fallback="Our alliances bring together the world's best technologies, expertise, and innovation to deliver comprehensive solutions that drive enterprise transformation."
                    as="span"
                    multiline
                  />
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, idx) => {
                  const IconComponent = allianceIconMap[item.icon] || defaultAllianceIcon;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08, duration: 0.5 }}
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
                          path={`alliance.overview.items.${idx}.title`}
                          fallback={item.title}
                          as="span"
                        />
                      </h3>
                      <p
                        className={`text-sm leading-relaxed ${
                          isDark ? "text-gray-300" : "text-slate-600"
                        }`}
                      >
                        <EditableText
                          path={`alliance.overview.items.${idx}.description`}
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