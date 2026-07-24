// src/news-rooms/events/components/PastEventsHighlights.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Play, ArrowRight } from "lucide-react";

const pastEvents = [
  {
    id: "pe1",
    title: "Global Quality Engineering Summit 2025",
    date: "November 2025",
    location: "Virtual + Hyderabad",
    attendees: "2,800+",
    image: "/community/tech-leadership-summit.png",
    description: "Keynotes from industry leaders, live automation demos, and deep-dive workshops on AI-driven testing.",
  },
  {
    id: "pe2",
    title: "Cloud Assurance & DevSecOps Forum",
    date: "September 2025",
    location: "Bengaluru",
    attendees: "1,200+",
    image: "/community/community-tech-day.png",
    description: "Two days of technical sessions on Kubernetes security, policy-as-code, and chaos engineering.",
  },
  {
    id: "pe3",
    title: "AIOps & Observability Roundtable",
    date: "June 2025",
    location: "Virtual",
    attendees: "900+",
    image: "/community/student-innovation-challenge.png",
    description: "Executive discussions on predictive analytics, real-time telemetry, and incident automation.",
  },
];

export default function PastEventsHighlights() {
  return (
    <section className="py-10 lg:py-16 bg-white border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        {/* Split Header - No Eyebrow */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-[1.1]">
              Highlights from <br className="hidden lg:block" />
              <span className="text-[#2563EB]">Our Previous Events</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-[#5A5A5A] leading-relaxed">
              Relive the moments from our recent global summits, technical forums, and developer meetups.
            </p>
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pastEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group bg-white border border-gray-200 rounded-md overflow-hidden hover:border-[#2563EB]/30 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-base xl:text-lg font-medium text-black mb-2 group-hover:text-[#2563EB] transition-colors">
                  {event.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#2563EB]" />
                    {event.attendees}
                  </span>
                </div>
                <p className="text-[13px] xl:text-[14px] text-[#5A5A5A] leading-snug">
                  {event.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-bold text-[#2563EB] hover:text-[#1E234B] transition-colors group/link"
                  >
                    <Play className="w-3.5 h-3.5 mr-2" />
                    View Highlights
                    <ArrowRight className="w-3.5 h-3.5 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}