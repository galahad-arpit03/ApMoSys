"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Sparkles, Building } from "lucide-react";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

type InterviewItem = {
  id: string;
  clientRole: string;
  organization: string;
  quote: string;
  points: string[];
};

const clientInterviewsData: InterviewItem[] = [
  {
    id: "interview-cio-banking",
    clientRole: "Chief Information Officer",
    organization: "Global Retail & Investment Bank",
    quote:
      "ApMoSys transformed our testing mindset. Their team brought automated frameworks that enabled us to release weekly without risking compliance or platform uptime.",
    points: [
      "Conversations about customer priorities, program decisions, and success measures.",
      "Feedback on collaboration, governance, responsiveness, and engineering expertise.",
      "Lessons for organizations starting or scaling their own transformation journeys.",
    ],
  },
  {
    id: "interview-head-qa-health",
    clientRole: "Head of Digital Quality",
    organization: "Leading Healthtech Platform",
    quote:
      "The self-healing automation suites developed by ApMoSys gave our development teams the speed they needed while giving regulators 100% confidence.",
    points: [
      "Seamless integration with agile squads and CI/CD pipelines.",
      "Measurable reduction in regression cycle times.",
      "Empowering internal QA teams with modern automation skills.",
    ],
  },
];

export default function ClientTestimonialsView() {
  return (
    <SectionThemeWrapper sectionId="customer_testimonials" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="client-interviews"
            className={`py-12 lg:py-16 border-b transition-colors duration-300 scroll-mt-20 ${
              isDark ? "bg-[#0F172A] text-white border-slate-800" : "bg-gray-900 text-white border-gray-800"
            }`}
          >
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
              
              <div className="mb-12 max-w-3xl">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.1] text-white">
                  <EditableText
                    path="customer.testimonials.title"
                    fallback="Client Interviews & Testimonials"
                    as="span"
                  />
                </h2>
                <p className="mt-3 text-base sm:text-lg font-medium text-slate-300">
                  <EditableText
                    path="customer.testimonials.subtitle"
                    fallback="Direct customer perspectives on partnership experience, delivery quality, and transformation outcomes."
                    as="span"
                  />
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {clientInterviewsData.map((item, idx) => (
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
                        <div>
                          <h3 className="font-heading font-medium text-white text-lg">
                            {item.clientRole}
                          </h3>
                          <span className="text-xs text-emerald-400 font-bold">
                            {item.organization}
                          </span>
                        </div>
                        <Building className="w-6 h-6 text-gray-500" />
                      </div>

                      <Quote className="w-8 h-8 text-emerald-400/30 mb-3" />

                      <p className="text-slate-200 text-base font-medium leading-relaxed italic">
                        "{item.quote}"
                      </p>

                      <div className="mt-6 pt-5 border-t border-[#2A2A2A] space-y-2">
                        {item.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2 text-xs font-medium text-slate-400">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
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
