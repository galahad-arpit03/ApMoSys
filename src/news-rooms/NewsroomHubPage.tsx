"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Calendar,
  Award,
  Users,
  BarChart3,
  ArrowRight
} from "lucide-react";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";
import CorporateCTA from "@/src/who-we-are/about-us/CorporateCTA/CorporateCTA";

const hubPortals = [
  {
    slug: "events",
    href: "/newsrooms/events",
    title: "Events & Live Summits",
    eyebrow: "Live Engagements",
    icon: Calendar,
    accentColor: "text-rose-500",
    badgeBg: "bg-rose-500/10 border-rose-500/20 text-rose-500",
    summary:
      "Conferences, webinars, roundtables, and knowledge-sharing programs where ApMoSys connects with enterprise technology leaders.",
    keyHighlight: "25+ Annual Events • Live Replay Library • Executive Panels",
    sectionsPreview: ["Upcoming Events", "Past Webinars Replays", "Annual Conferences"],
  },
  {
    slug: "awards-recognition",
    href: "/newsrooms/awards-recognition",
    title: "Awards & Recognition",
    eyebrow: "Recognized Excellence",
    icon: Award,
    accentColor: "text-amber-500",
    badgeBg: "bg-amber-500/10 border-amber-500/20 text-amber-500",
    summary:
      "Recognition for delivery quality, ISO/CMMI compliance certifications, ecosystem partnerships, and enterprise contributions.",
    keyHighlight: "15+ Industry Honors • ISO 27001 & CMMI 5 • Tier-1 Accolades",
    sectionsPreview: ["Industry Awards", "Certifications & Compliance", "Partner Accolades"],
  },
  {
    slug: "customer-stories",
    href: "/newsrooms/customer-stories",
    title: "Customer Stories",
    eyebrow: "Client Outcomes",
    icon: Users,
    accentColor: "text-emerald-500",
    badgeBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
    summary:
      "Customer-focused narratives showing how ApMoSys helps organizations modernize delivery, improve quality, and unlock measurable value.",
    keyHighlight: "50+ Enterprise Cases • 40% Faster Releases • Client Quotes",
    sectionsPreview: ["Featured Case Studies", "Impact Snapshots", "Client Interviews"],
  },
  {
    slug: "success-metrics",
    href: "/newsrooms/success-metrics",
    title: "Success Metrics",
    eyebrow: "Measured Impact",
    icon: BarChart3,
    accentColor: "text-blue-500",
    badgeBg: "bg-blue-500/10 border-blue-500/20 text-blue-500",
    summary:
      "Quantitative views of business impact, performance gains, ROI reports, and operational improvements across transformation programs.",
    keyHighlight: "3.5x Average ROI • 60% Defect Reduction • Empirical Signals",
    sectionsPreview: ["ROI Reports", "Operational Signals", "Impact Studies"],
  },
];

export default function NewsroomHubPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <SectionThemeWrapper sectionId="newsroom_hub_hero" defaultTheme="dark">
        {(theme) => {
          const isDark = theme === "dark";
          return (
            <section
              ref={ref}
              className={`relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden flex items-center transition-colors duration-300 ${
                isDark ? "bg-[#0F172A] text-white" : "bg-white text-gray-900"
              }`}
            >
              <motion.div
                className="absolute inset-0 z-0 origin-top pointer-events-none"
                style={{ y: backgroundY }}
              >
                <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-red-600/10 rounded-full blur-[140px] -translate-y-1/2" />
              </motion.div>

              <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10 w-full text-center">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-normal tracking-tight mb-6 leading-[1.1] text-white">
                    <EditableText
                      path="newsroom.hub.heading1"
                      fallback="Independent Engineering"
                      as="span"
                    />{" "}
                    <EditableText
                      path="newsroom.hub.heading2"
                      fallback="Channels & Stories."
                      as="span"
                      className="text-primary-red"
                    />
                  </h1>

                  <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                    <EditableText
                      path="newsroom.hub.description"
                      fallback="Select a dedicated channel below to explore live event summits, industry awards, customer case studies, and empirical success metrics."
                      as="span"
                      multiline
                    />
                  </p>
                </div>
              </div>
            </section>
          );
        }}
      </SectionThemeWrapper>

      {/* Portals Grid Section */}
      <SectionThemeWrapper sectionId="newsroom_hub_grid" defaultTheme="light">
        {(theme) => {
          const isDark = theme === "dark";
          return (
            <section
              className={`py-12 lg:py-16 transition-colors duration-300 border-b ${
                isDark ? "bg-[#0D0D0D] text-[#FAFAFA] border-[#2A2A2A]" : "bg-[#F0F4F8] text-[#121212] border-gray-200"
              }`}
            >
              <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
                <div className="grid gap-8 md:grid-cols-2">
                  {hubPortals.map((portal, idx) => {
                    const PortalIcon = portal.icon;

                    return (
                      <motion.div
                        key={portal.slug}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className={`rounded-xl border p-8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                          isDark
                            ? "bg-[#1A1A1A] border-[#2A2A2A] hover:bg-[#222]"
                            : "bg-white border-gray-200 shadow-sm hover:shadow-lg"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-6">
                            <div className={`p-3 rounded-lg border ${
                              isDark ? "bg-[#121212] border-[#2A2A2A]" : "bg-gray-50 border-gray-200"
                            } ${portal.accentColor}`}>
                              <PortalIcon className="w-6 h-6" />
                            </div>
                            <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded border ${portal.badgeBg}`}>
                              {portal.eyebrow}
                            </span>
                          </div>

                          <h2 className="font-heading text-2xl md:text-3xl font-medium text-gray-800 dark:text-white mb-3">
                            {portal.title}
                          </h2>

                          <p className="text-sm font-medium leading-relaxed text-black dark:text-gray-300 mb-4">
                            {portal.summary}
                          </p>

                          <div className={`p-3 rounded-lg border text-xs font-mono mb-5 ${
                            isDark ? "bg-[#121212] border-[#2A2A2A] text-gray-300" : "bg-gray-50 border-gray-200 text-gray-700"
                          }`}>
                            {portal.keyHighlight}
                          </div>

                          <div className="space-y-2">
                            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                              Dedicated Sections:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {portal.sectionsPreview.map((sec, sIdx) => (
                                <span
                                  key={sIdx}
                                  className={`text-xs font-medium px-2.5 py-1 rounded-md border ${
                                    isDark ? "bg-[#121212] border-[#2A2A2A] text-gray-300" : "bg-white border-gray-200 text-gray-700"
                                  }`}
                                >
                                  {sec}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-[#2A2A2A]">
                          <Link
                            href={portal.href}
                            className="inline-flex items-center gap-2 text-sm font-bold text-[#242A56] dark:text-primary-red hover:underline"
                          >
                            <span>Enter {portal.title}</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }}
      </SectionThemeWrapper>

      <CorporateCTA
        tag="Newsroom & Insights"
        heading="Accelerate Your Enterprise Transformation"
        description="Connect with our quality engineering experts to learn how ApMoSys can drive automated assurance and measurable value for your organization."
        buttonText="Schedule a Consultation"
        sectionId="newsroom_hub_cta"
        editablePrefix="newsroom.hub.cta"
      />
    </main>
  );
}
