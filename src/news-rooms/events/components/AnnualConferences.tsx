"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Layers, Network } from "lucide-react";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

export default function AnnualConferences() {
  const tracks = [
    {
      icon: Zap,
      title: "Keynote Innovations",
      eyebrow: "Flagship Theme",
      copy: "Keynotes on digital transformation, intelligent automation, and operating model change across global enterprise systems.",
    },
    {
      icon: Layers,
      title: "Breakout Tracks",
      eyebrow: "Domain Deep-Dives",
      copy: "Breakout tracks for domain-specific quality engineering, security validation, and high-throughput performance engineering.",
    },
    {
      icon: Network,
      title: "Networking Forums",
      eyebrow: "Peer Collaboration",
      copy: "Networking forums for customers, partners, consultants, and technology specialists to exchange enterprise practices.",
    },
  ];

  return (
    <SectionThemeWrapper sectionId="events_conferences" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="annual-conferences"
            className={`py-12 lg:py-16 border-b transition-colors duration-300 scroll-mt-20 ${
              isDark ? "bg-[#0F172A] text-white border-slate-800" : "bg-gray-900 text-white border-gray-800"
            }`}
          >
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
              
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#242A56]/30 border border-slate-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
                <div className="max-w-3xl relative z-10">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-white tracking-tight leading-tight">
                    <EditableText
                      path="events.conferences.title"
                      fallback="ApMoSys Global Quality Engineering Conference"
                      as="span"
                    />
                  </h2>

                  <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                    <EditableText
                      path="events.conferences.subtitle"
                      fallback="Large-format annual gathering built around innovation themes, industry priorities, and the future of enterprise technology assurance."
                      as="span"
                      multiline
                    />
                  </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-3 relative z-10">
                  {tracks.map((track, idx) => {
                    const TrackIcon = track.icon;
                    return (
                      <motion.div
                        key={track.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] p-6 sm:p-8 hover:border-gray-600 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary-red/10 border border-primary-red/20 text-primary-red flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                          <TrackIcon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                          {track.eyebrow}
                        </span>
                        <h3 className="font-heading text-xl font-medium text-white mt-1 group-hover:text-primary-red transition-colors">
                          {track.title}
                        </h3>
                        <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                          {track.copy}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
