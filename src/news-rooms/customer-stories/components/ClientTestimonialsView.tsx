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
              
              {/* Header - LHS/RHS Split */}
              <div className="mb-8 lg:mb-12 grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                <div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight leading-[1.15] text-white">
                    <EditableText
                      path="customer.testimonials.title"
                      fallback="Client Interviews & Testimonials"
                      as="span"
                    />
                  </h2>
                </div>
                <div className="lg:pt-4">
                  <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-300">
                    <EditableText
                      path="customer.testimonials.subtitle"
                      fallback="Direct customer perspectives on partnership experience, delivery quality, and transformation outcomes."
                      as="span"
                    />
                  </p>
                </div>
              </div>

              {/* Auto-scrolling Marquee */}
              <div className="relative w-full overflow-hidden flex flex-col border-t border-b border-white/10 md:border-b-0 md:border-t-0 mt-8">
                <motion.div
                  className="flex w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                >
                  {[...clientInterviewsData, ...clientInterviewsData, ...clientInterviewsData, ...clientInterviewsData].map((item, idx) => (
                    <div
                      key={`${item.id}-${idx}`}
                      className="w-[350px] sm:w-[450px] lg:w-[500px] shrink-0 bg-white/5 border-r border-t border-b border-white/10 p-8 flex flex-col justify-between transition-all hover:bg-white/10 group"
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
                          <Building className="w-6 h-6 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                        </div>

                        <Quote className="w-8 h-8 text-emerald-400/30 mb-4" />

                        <p className="text-slate-200 text-base font-medium leading-relaxed italic mb-8">
                          "{item.quote}"
                        </p>

                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
