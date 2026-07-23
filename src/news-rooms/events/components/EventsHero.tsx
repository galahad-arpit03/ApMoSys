"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Video, Calendar, Sparkles } from "lucide-react";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

export default function EventsHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <SectionThemeWrapper sectionId="events_hero" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            ref={ref}
            className={`relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden flex items-center min-h-[50vh] transition-colors duration-300 ${
              isDark ? "bg-[#0F172A] text-white" : "bg-white text-gray-900"
            }`}
          >
            {/* Ambient Lighting Backdrop */}
            <motion.div
              className="absolute inset-0 z-0 origin-top pointer-events-none"
              style={{ y: backgroundY }}
            >
              <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-red-600/15 rounded-full blur-[140px] -translate-y-1/2" />
              <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[120px]" />
            </motion.div>

            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10 w-full">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Left Column */}
                <div className="lg:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-red-500/30 text-xs font-semibold uppercase tracking-widest text-primary-red mb-6 shadow-lg">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      <EditableText
                        path="events.hero.badge"
                        fallback="Live Tech Engagements & Keynotes"
                        as="span"
                      />
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-normal tracking-tight mb-6 leading-[1.1] text-white">
                      <EditableText
                        path="events.hero.heading1"
                        fallback="Connecting Leaders in"
                        as="span"
                      />{" "}
                      <EditableText
                        path="events.hero.heading2"
                        fallback="Engineering Quality."
                        as="span"
                        className="text-primary-red"
                      />
                    </h1>

                    <p className="text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
                      <EditableText
                        path="events.hero.description"
                        fallback="Join ApMoSys executives, architects, and industry experts for executive roundtables, live webinars, and flagship engineering summits."
                        as="span"
                        multiline
                      />
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="#upcoming-events"
                        className="bg-[#242A56] hover:bg-[#1E234B] text-white px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 shadow-lg flex items-center justify-center gap-2"
                      >
                        <EditableText
                          path="events.hero.button1"
                          fallback="Explore Upcoming Sessions"
                          as="span"
                        />
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="#past-webinars"
                        className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
                      >
                        <Video className="w-4 h-4 text-slate-300" />
                        <EditableText
                          path="events.hero.button2"
                          fallback="Watch Replays"
                          as="span"
                        />
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Right Featured Keynote Showcase */}
                <div className="lg:col-span-5">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] p-6 sm:p-8 shadow-2xl overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-primary-red text-white font-mono text-[11px] font-bold uppercase tracking-wider rounded-bl-xl shadow-md">
                      Flagship Summit
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>Next Featured Session</span>
                    </div>

                    <h3 className="font-heading text-2xl font-medium text-white leading-snug">
                      <EditableText
                        path="events.hero.cardTitle"
                        fallback="Enterprise AI & Quality Assurance Summit 2026"
                        as="span"
                      />
                    </h3>

                    <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                      <EditableText
                        path="events.hero.cardDescription"
                        fallback="A 2-day virtual summit exploring autonomous testing, AI-driven observability, and continuous security validation."
                        as="span"
                        multiline
                      />
                    </p>

                    <div className="mt-6 space-y-2.5 border-t border-[#2A2A2A] pt-5 text-xs text-gray-300">
                      <div className="flex items-center gap-2.5">
                        <Calendar className="w-4 h-4 text-primary-red" />
                        <span>August 18 - 19, 2026 • 10:00 AM EST</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <a
                        href="#upcoming-events"
                        className="w-full py-3 rounded-md bg-[#242A56] hover:bg-[#1E234B] text-white font-bold text-xs text-center block transition-colors shadow"
                      >
                        View Full Agenda & Speakers
                      </a>
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
