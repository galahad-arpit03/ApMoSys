"use client";

import React from "react";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { serviceIconMap, defaultServiceIcon } from "../icons";
import { useContentStore } from "@/src/admin/store/adminStore";

export default function ServiceBenefits() {
  const { content } = useContentStore();
  const benefitItems = content.services?.benefits?.items || [];

  return (
    <SectionThemeWrapper sectionId="services_benefits" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
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
                  className={`font-heading text-3xl sm:text-4xl font-extrabold mb-4 ${
                    isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                  }`}
                >
                  <EditableText
                    path="services.benefits.heading"
                    fallback="Delivering Measurable Business Outcomes"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                  }`}
                >
                  <EditableText
                    path="services.benefits.description"
                    fallback="Our engineering services are designed to deliver tangible value across your entire software delivery lifecycle — from development to production."
                    as="span"
                    multiline
                  />
                </p>
              </motion.div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefitItems.map((benefit, idx) => {
                  const IconComponent =
                    serviceIconMap[benefit.icon] || defaultServiceIcon;
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
                          : "bg-[#FAFAFA] border-[#E8E8E8] hover:border-primary-red/20"
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
                          path={`services.benefits.items.${idx}.title`}
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
                          path={`services.benefits.items.${idx}.description`}
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