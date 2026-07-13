"use client";

import React from "react";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { useContentStore } from "@/src/admin/store/adminStore";

export default function PartnerTypes() {
  const { content } = useContentStore();
  const partnerItems = content.alliance?.partners?.items || [];

  const fallbackPartners = [
    {
      id: "1",
      name: "Dynatrace",
      category: "Technology Partner",
      description:
        "Endorsed Service Partner of the Year providing enterprise observability and AIOps solutions.",
      logo: "https://via.placeholder.com/120x60/1A1A1A/B40001?text=Dynatrace",
      link: "#",
    },
    {
      id: "2",
      name: "Automation Anywhere",
      category: "Technology Partner",
      description:
        "Rising Star Partner delivering intelligent automation and RPA solutions.",
      logo: "https://via.placeholder.com/120x60/1A1A1A/B40001?text=Automation+Anywhere",
      link: "#",
    },
    {
      id: "3",
      name: "AppDynamics",
      category: "Technology Partner",
      description:
        "APM Specialist providing application performance monitoring and analytics.",
      logo: "https://via.placeholder.com/120x60/1A1A1A/B40001?text=AppDynamics",
      link: "#",
    },
    {
      id: "4",
      name: "MicroFocus",
      category: "Technology Partner",
      description:
        "Testing Alliance partner delivering enterprise quality engineering solutions.",
      logo: "https://via.placeholder.com/120x60/1A1A1A/B40001?text=MicroFocus",
      link: "#",
    },
  ];

  const items = partnerItems.length > 0 ? partnerItems : fallbackPartners;

  return (
    <SectionThemeWrapper sectionId="alliance_partners" defaultTheme="light">
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
                    path="alliance.partners.sectionLabel"
                    fallback="Featured Partners"
                    as="span"
                  />
                </span> */}
                <h2
                  className={`font-heading text-3xl sm:text-4xl font-extrabold mb-4 ${
                    isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                  }`}
                >
                  <EditableText
                    path="alliance.partners.heading"
                    fallback="Trusted Technology Alliance Partners"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                  }`}
                >
                  <EditableText
                    path="alliance.partners.description"
                    fallback="We collaborate with the world's leading technology providers to deliver integrated solutions that accelerate enterprise transformation."
                    as="span"
                    multiline
                  />
                </p>
              </motion.div>

              {/* Partners Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((partner, idx) => (
                  <motion.div
                    key={partner.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className={`p-6 rounded-xl border text-center transition-all hover:shadow-lg hover:-translate-y-1 group ${
                      isDark
                        ? "bg-[#1A1A1A] border-[#2A2A2A] hover:border-primary-red/30"
                        : "bg-[#FFFFFF] border-[#E8E8E8] hover:border-primary-red/20"
                    }`}
                  >
                    <div
                      className={`w-full h-16 rounded-lg flex items-center justify-center mb-4 text-xs font-bold ${
                        isDark ? "bg-[#0D0D0D]" : "bg-[#FAFAFA]"
                      }`}
                    >
                      <EditableText
                        path={`alliance.partners.items.${idx}.name`}
                        fallback={partner.name}
                        as="span"
                        className={`text-sm font-bold ${
                          isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${
                        isDark ? "text-[#7A7A7A]" : "text-[#5A5A5A]"
                      }`}
                    >
                      <EditableText
                        path={`alliance.partners.items.${idx}.category`}
                        fallback={partner.category}
                        as="span"
                      />
                    </span>
                    <p
                      className={`text-sm leading-relaxed mt-3 ${
                        isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                      }`}
                    >
                      <EditableText
                        path={`alliance.partners.items.${idx}.description`}
                        fallback={partner.description}
                        as="span"
                        multiline
                      />
                    </p>
                    <div className="mt-6 pt-4 border-t border-[#2A2A2A]">
                      <a
                        href={partner.link}
                        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors group/link ${
                          isDark
                            ? "text-[#FFFFFF] hover:text-primary-red"
                            : "text-[#121212] hover:text-primary-red"
                        }`}
                      >
                        Learn More
                        <svg
                          className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
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