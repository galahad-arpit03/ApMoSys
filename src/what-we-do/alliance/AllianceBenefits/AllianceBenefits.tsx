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
                {/* <span className="text-primary-red text-xs font-bold uppercase tracking-widest block mb-4">
                  <EditableText
                    path="alliance.benefits.sectionLabel"
                    fallback="Why Partner With Us"
                    as="span"
                  />
                </span> */}
                <h2
                  className={`font-heading text-3xl sm:text-4xl font-bold mb-4 ${
                    isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                  }`}
                >
                  <EditableText
                    path="alliance.benefits.heading"
                    fallback="Building a Stronger Ecosystem Together"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
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

              {/* Benefits Grid */}
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
                          path={`alliance.benefits.items.${idx}.title`}
                          fallback={benefit.title}
                          as="span"
                        />
                      </h3>
                      <p
                        className={`text-sm leading-relaxed ${
                          isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                        }`}
                      >
                        <EditableText
                          path={`alliance.benefits.items.${idx}.description`}
                          fallback={benefit.description}
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