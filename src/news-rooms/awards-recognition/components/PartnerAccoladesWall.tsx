"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Sparkles, Handshake } from "lucide-react";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

type PartnerItem = {
  id: string;
  partner: string;
  badge: string;
  quote: string;
  points: string[];
};

const partnerAccoladesData: PartnerItem[] = [
  {
    id: "dynatrace-partner",
    partner: "Ecosystem Observability Alliance",
    badge: "Premier Delivery Partner",
    quote:
      "ApMoSys consistently demonstrates top-tier implementation quality across automated performance engineering and full-stack observability.",
    points: [
      "Partner feedback on execution quality across strategic transformation programs.",
      "Joint solution achievements in automation, assurance, cloud, and AI-led delivery.",
      "Ecosystem milestones that support broader market and customer enablement.",
    ],
  },
  {
    id: "uipath-partner",
    partner: "Automation & Robotics Council",
    badge: "Gold Integration Partner",
    quote:
      "Their deep QA rigor combined with robotic process automation enables enterprises to deploy error-free digital workflows in record time.",
    points: [
      "Accelerated RPA deployment validation for enterprise clients.",
      "Certified automation architects across testing and operational workflows.",
      "Joint innovation programs in hyperautomation and AI process checks.",
    ],
  },
];

export default function PartnerAccoladesWall() {
  return (
    <SectionThemeWrapper sectionId="awards_accolades" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="partner-accolades"
            className={`py-12 lg:py-16 border-b transition-colors duration-300 scroll-mt-20 ${
              isDark ? "bg-[#0F172A] text-white border-slate-800" : "bg-gray-900 text-white border-gray-800"
            }`}
          >
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
              
              <div className="mb-12 max-w-3xl">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.1] text-white">
                  <EditableText
                    path="awards.accolades.title"
                    fallback="Partner Accolades & Ecosystem Honors"
                    as="span"
                  />
                </h2>
                <p className="mt-3 text-base sm:text-lg font-medium text-slate-300">
                  <EditableText
                    path="awards.accolades.subtitle"
                    fallback="Recognition from technology and business partners for collaboration, implementation quality, and customer success."
                    as="span"
                  />
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {partnerAccoladesData.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] p-8 flex flex-col justify-between transition-all hover:border-gray-600"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <Handshake className="w-5 h-5 text-amber-400" />
                          <span className="font-heading font-medium text-white text-lg">
                            {item.partner}
                          </span>
                        </div>
                        <span className="text-xs font-bold px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          {item.badge}
                        </span>
                      </div>

                      <Quote className="w-8 h-8 text-amber-400/30 mb-3" />

                      <p className="text-slate-200 text-base font-medium leading-relaxed italic">
                        "{item.quote}"
                      </p>

                      <div className="mt-6 pt-5 border-t border-[#2A2A2A] space-y-2">
                        {item.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2 text-xs font-medium text-slate-400">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
