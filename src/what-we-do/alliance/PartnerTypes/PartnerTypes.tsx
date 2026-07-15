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
            className={`py-24 border-t transition-colors duration-300 relative overflow-hidden ${
              isDark
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-gray-200"
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
                    path="alliance.partners.heading"
                    fallback="Trusted Technology Alliance Partners"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-base lg:text-lg font-medium leading-relaxed ${
                    isDark ? "text-gray-300" : "text-black"
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((partner, idx) => (
                  <motion.div
                    key={partner.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className={`p-8 rounded-xl border transition-all hover:shadow-lg hover:-translate-y-1 group ${
                      isDark
                        ? "bg-slate-700/50 border-slate-600 hover:border-[#242A56]/40"
                        : "bg-white/80 backdrop-blur-sm border-gray-200/60 hover:border-[#242A56]/20 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                    }`}
                  >
                    <div
                      className={`w-full h-16 rounded-lg flex items-center justify-center mb-4 text-xs font-bold ${
                        isDark ? "bg-slate-700/50" : "bg-gray-50"
                      }`}
                    >
                      <EditableText
                        path={`alliance.partners.items.${idx}.name`}
                        fallback={partner.name}
                        as="span"
                        className={`text-sm font-bold ${
                          isDark ? "text-white" : "text-slate-800"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${
                        isDark ? "text-gray-400" : "text-slate-500"
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
                        isDark ? "text-gray-300" : "text-slate-600"
                      }`}
                    >
                      <EditableText
                        path={`alliance.partners.items.${idx}.description`}
                        fallback={partner.description}
                        as="span"
                        multiline
                      />
                    </p>
                    <div className="mt-6 pt-4 border-t border-slate-600">
                      <a
                        href={partner.link}
                        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors group/link ${
                          isDark
                            ? "text-gray-300 hover:text-[#242A56]"
                            : "text-slate-700 hover:text-[#242A56]"
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