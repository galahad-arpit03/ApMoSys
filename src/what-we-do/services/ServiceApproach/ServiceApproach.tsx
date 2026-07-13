"use client";

import React from "react";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

const approachItems = [
  {
    id: "1",
    title: "Consultative Discovery",
    description:
      "We start by understanding your unique business challenges, technical landscape, and strategic goals to craft a tailored engineering roadmap.",
    icon: "🔍",
  },
  {
    id: "2",
    title: "Architectural Excellence",
    description:
      "Our solutions are built on robust, scalable architectures with industry best practices, ensuring long-term maintainability and performance.",
    icon: "🏗️",
  },
  {
    id: "3",
    title: "Agile Delivery",
    description:
      "We adopt agile methodologies with continuous feedback loops, enabling rapid iterations, early value delivery, and adaptive planning.",
    icon: "🔄",
  },
  {
    id: "4",
    title: "Quality-First Engineering",
    description:
      "Quality is embedded at every stage — from design to deployment — with automated testing, security validation, and performance benchmarks.",
    icon: "✅",
  },
];

export default function ServiceApproach() {
  return (
    <SectionThemeWrapper sectionId="services_approach" defaultTheme="dark">
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
              <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  className="lg:col-span-5 mb-12 lg:mb-0"
                >
                  {/* <span className="text-primary-red text-xs font-bold uppercase tracking-widest block mb-4">
                    <EditableText
                      path="services.approach.sectionLabel"
                      fallback="Our Approach"
                      as="span"
                    />
                  </span> */}
                  <h2
                    className={`font-heading text-3xl sm:text-4xl font-extrabold mb-6 leading-tight ${
                      isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                    }`}
                  >
                    <EditableText
                      path="services.approach.heading"
                      fallback="Engineering Excellence Through a Proven Methodology"
                      as="span"
                    />
                  </h2>
                  <p
                    className={`text-base leading-relaxed ${
                      isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
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
                  {approachItems.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className={`p-6 rounded-xl border transition-all hover:shadow-lg hover:-translate-y-1 group ${
                        isDark
                          ? "bg-[#1A1A1A] border-[#2A2A2A] hover:border-primary-red/40"
                          : "bg-[#FFFFFF] border-[#E8E8E8] hover:border-primary-red/30"
                      }`}
                    >
                      <div className="text-3xl mb-4">{item.icon}</div>
                      <h3
                        className={`font-heading text-lg font-bold mb-3 ${
                          isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                        }`}
                      >
                        <EditableText
                          path={`services.approach.items.${idx}.title`}
                          fallback={item.title}
                          as="span"
                        />
                      </h3>
                      <p
                        className={`text-sm leading-relaxed ${
                          isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
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
                  ))}
                </div>
              </div>
            </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}