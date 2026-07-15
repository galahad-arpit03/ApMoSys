"use client";

import React from "react";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { serviceIconMap, defaultServiceIcon } from "../icons";
import { useContentStore } from "@/src/admin/store/adminStore";

export default function ServiceApproach() {
  const { content } = useContentStore();
  const approachItems = content.services?.approach?.items || [];

  return (
    <SectionThemeWrapper sectionId="services_approach" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            className={`py-16 border-t transition-colors duration-300 ${
              isDark
                ? "bg-slate-800 border-slate-700"
                : "bg-white/80 border-gray-200"
            }`}
          >
            <Container>
              <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  className="lg:col-span-5 mb-12 lg:mb-0"
                >
                  <h2
                    className={`text-4xl lg:text-5xl font-medium tracking-tight mb-6 leading-tight ${
                      isDark ? "text-white" : "text-slate-800"
                    }`}
                  >
                    <EditableText
                      path="services.approach.heading"
                      fallback="Engineering Excellence Through a Proven Methodology"
                      as="span"
                    />
                  </h2>
                  <p
                    className={`text-base lg:text-lg font-medium leading-relaxed ${
                      isDark ? "text-gray-300" : "text-slate-700"
                    }`}
                  >
                    <EditableText
                      path="services.approach.description"
                      fallback="Our approach combines deep industry expertise, technical excellence, and a relentless focus on quality to deliver measurable business outcomes. We partner with you at every stage of your transformation journey."
                      as="span"
                      multiline
                    />
                  </p>
                </motion.div>

                {/* Right Grid */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {approachItems.map((item, idx) => {
                    const IconComponent =
                      serviceIconMap[item.icon] || defaultServiceIcon;
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className={`p-6 rounded-xl border transition-all hover:shadow-lg hover:-translate-y-1 group ${
                          isDark
                            ? "bg-slate-700/50 border-slate-600 hover:border-[#242A56]/50"
                            : "bg-white/80 backdrop-blur-sm border-gray-200/60 hover:border-[#242A56]/30 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                        }`}
                      >
                        <div className="mb-4 text-[#242A56]">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <h3
                          className={`text-xl font-medium mb-3 ${
                            isDark ? "text-white" : "text-slate-800"
                          }`}
                        >
                          <EditableText
                            path={`services.approach.items.${idx}.title`}
                            fallback={item.title}
                            as="span"
                          />
                        </h3>
                        <p
                          className={`text-base leading-relaxed font-medium ${
                            isDark ? "text-gray-300" : "text-slate-600"
                          }`}
                        >
                          <EditableText
                            path={`services.approach.items.${idx}.description`}
                            fallback={item.description}
                            as="span"
                            multiline
                          />
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}