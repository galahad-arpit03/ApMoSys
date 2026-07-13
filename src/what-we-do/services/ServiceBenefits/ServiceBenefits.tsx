"use client";

import React from "react";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

const benefits = [
  {
    id: "1",
    title: "Accelerated Time-to-Market",
    description:
      "Streamlined engineering processes and automation reduce release cycles by up to 50%, enabling faster innovation and competitive advantage.",
    icon: "⚡",
  },
  {
    id: "2",
    title: "Zero-Defect Quality",
    description:
      "Comprehensive testing and quality assurance practices eliminate production defects, ensuring reliable, high-performing software.",
    icon: "🎯",
  },
  {
    id: "3",
    title: "Cost Optimization",
    description:
      "Intelligent automation and efficient resource utilization reduce operational costs while maximizing engineering productivity.",
    icon: "💰",
  },
  {
    id: "4",
    title: "Security & Compliance",
    description:
      "Built-in security validation and compliance frameworks protect your data and ensure adherence to industry regulations.",
    icon: "🛡️",
  },
  {
    id: "5",
    title: "Scalable Architecture",
    description:
      "Modern, cloud-native architectures that scale seamlessly with your business growth without performance degradation.",
    icon: "📈",
  },
  {
    id: "6",
    title: "Continuous Innovation",
    description:
      "AI-driven insights and continuous improvement practices keep your systems ahead of the curve, ready for future challenges.",
    icon: "🚀",
  },
];

export default function ServiceBenefits() {
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
                {/* <span className="text-primary-red text-xs font-bold uppercase tracking-widest block mb-4">
                  <EditableText
                    path="services.benefits.sectionLabel"
                    fallback="Why Choose ApMoSys"
                    as="span"
                  />
                </span> */}
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
                {benefits.map((benefit, idx) => (
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
                    <div className="text-4xl mb-4">{benefit.icon}</div>
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
                ))}
              </div>
            </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}