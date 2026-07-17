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
            className={`py-16 border-t transition-colors duration-300 ${
              isDark
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-gray-200"
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
                  className={`text-4xl lg:text-5xl font-medium tracking-tight mb-4 ${
                    isDark ? "text-white" : "text-slate-800"
                  }`}
                >
                  <EditableText
                    path="services.benefits.heading"
                    fallback="Delivering Measurable Business Outcomes"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-base lg:text-lg font-medium leading-relaxed ${
                    isDark ? "text-gray-300" : "text-slate-600"
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
                          ? "bg-slate-700/50 border-slate-600 hover:border-[#242A56]/40"
                          : "bg-white/80 backdrop-blur-sm border-gray-200/60 hover:border-[#242A56]/20 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                      }`}
                    >
                      <div className="flex justify-center mb-4 text-[#242A56]">
                        <IconComponent className="w-10 h-10" />
                      </div>
                      <h3
                        className={`text-xl font-medium mb-3 ${
                          isDark ? "text-white" : "text-slate-800"
                        }`}
                      >
                        <EditableText
                          path={`services.benefits.items.${idx}.title`}
                          fallback={benefit.title}
                          as="span"
                        />
                      </h3>
                      <p
                        className={`text-base leading-relaxed font-medium ${
                          isDark ? "text-gray-300" : "text-slate-600"
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