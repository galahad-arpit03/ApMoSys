"use client";

import React from "react";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

const benefits = [
  {
    id: "1",
    title: "Enterprise-Grade Security",
    description:
      "All our products are built with zero-trust principles, SOC 2 compliance, and enterprise-grade encryption to protect your sensitive data.",
    icon: "🛡️",
  },
  {
    id: "2",
    title: "Seamless Integration",
    description:
      "Designed to integrate seamlessly with your existing CI/CD pipelines, cloud platforms, and enterprise tools without disrupting workflows.",
    icon: "🔗",
  },
  {
    id: "3",
    title: "AI-Powered Intelligence",
    description:
      "Leverage machine learning and AI across all products for predictive analytics, anomaly detection, and intelligent automation.",
    icon: "🤖",
  },
  {
    id: "4",
    title: "Scalable Architecture",
    description:
      "Cloud-native architectures that scale effortlessly from startup to enterprise — handling millions of requests without performance degradation.",
    icon: "📈",
  },
  {
    id: "5",
    title: "Real-Time Insights",
    description:
      "Gain instant visibility into system performance, security posture, and quality metrics with real-time dashboards and alerts.",
    icon: "📊",
  },
  {
    id: "6",
    title: "Global Support",
    description:
      "24/7 enterprise support with dedicated engineering teams across multiple time zones to ensure your systems are always running.",
    icon: "🌍",
  },
];

export default function ProductBenefits() {
  return (
    <SectionThemeWrapper sectionId="products_benefits" defaultTheme="dark">
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
                <span className="text-primary-red text-xs font-bold uppercase tracking-widest block mb-4">
                  <EditableText
                    path="products.benefits.sectionLabel"
                    fallback="Why Our Products"
                    as="span"
                  />
                </span>
                <h2
                  className={`font-heading text-3xl sm:text-4xl font-extrabold mb-4 ${
                    isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                  }`}
                >
                  <EditableText
                    path="products.benefits.heading"
                    fallback="Built for Enterprise Excellence"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                  }`}
                >
                  <EditableText
                    path="products.benefits.description"
                    fallback="Every product in the ApMoSys suite is engineered to solve complex enterprise challenges — delivering security, scalability, and intelligent automation at every level."
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
                        : "bg-[#FFFFFF] border-[#E8E8E8] hover:border-primary-red/20"
                    }`}
                  >
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3
                      className={`font-heading text-lg font-bold mb-3 ${
                        isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                      }`}
                    >
                      <EditableText
                        path={`products.benefits.items.${idx}.title`}
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
                        path={`products.benefits.items.${idx}.description`}
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