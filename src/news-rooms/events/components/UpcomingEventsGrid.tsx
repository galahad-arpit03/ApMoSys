// src/news-rooms/events/components/UpcomingEventsGrid.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const ITEMS_PER_PAGE = 6;

const upcomingEvents = [
  {
    id: "1",
    title: "Executive Roundtable: Quality Strategy 2027",
    description: "An exclusive discussion for CIOs and VP-level engineering leaders on balancing release velocity with zero-defect governance.",
    date: "March 15, 2026",
    time: "10:00 AM EST",
    location: "Virtual",
  },
  {
    id: "2",
    title: "AI-Powered Test Automation Workshop",
    description: "A hands-on workshop showing QA engineers how to build resilient test suites with intelligent element detection and automated repair.",
    date: "March 22, 2026",
    time: "2:00 PM IST",
    location: "Navi Mumbai",
  },
  {
    id: "3",
    title: "DevSecOps & Platform Summit 2026",
    description: "A 2-day virtual summit exploring continuous security scanning, infrastructure policy enforcement, and pipeline governance.",
    date: "April 5-6, 2026",
    time: "9:00 AM EST",
    location: "Virtual",
  },
  {
    id: "4",
    title: "Ecosystem Assurance & Multi-Cloud Meetup",
    description: "Exploring end-to-end integration testing across SAP, Salesforce, and microservices with enterprise technology partners.",
    date: "April 18, 2026",
    time: "11:00 AM IST",
    location: "Bengaluru",
  },
  {
    id: "5",
    title: "Global Platform Automation Hackathon",
    description: "A 48-hour global developer challenge focused on building next-generation test automation plugins and observability tools.",
    date: "May 1-3, 2026",
    time: "Starts 9:00 AM GMT",
    location: "Global (Virtual)",
  },
  {
    id: "6",
    title: "Observability & AIOps Masterclass",
    description: "Expert session on real-time anomaly detection, telemetry collection, and AI-assisted root-cause analysis in distributed systems.",
    date: "May 20, 2026",
    time: "3:00 PM IST",
    location: "Virtual",
  },
];

export default function UpcomingEventsGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(upcomingEvents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = upcomingEvents.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section id="events-overview" className="py-10 lg:py-16 bg-white border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        {/* Split Header - No Eyebrow */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-[1.1]">
              Join Us at Our <br className="hidden lg:block" />
              <span className="text-[#2563EB]">Next Tech Events</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-[#5A5A5A] leading-relaxed">
              Secure your spot at our upcoming summits, workshops, and roundtables. Connect with industry leaders and advance your engineering capabilities.
            </p>
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {paginatedItems.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                layout
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white border border-gray-200 rounded-md p-8 hover:border-[#2563EB]/40 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col relative"
              >
                {/* Title */}
                <h3 className="text-base xl:text-lg font-medium text-black mb-3 group-hover:text-[#2563EB] transition-colors">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] xl:text-[14px] text-[#5A5A5A] leading-snug flex-grow">
                  {event.description}
                </p>

                {/* Event Meta */}
                <div className="mt-6 space-y-2 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Register CTA */}
                <div className="pt-4 mt-2 border-t border-gray-100">
                  <a
                    href="#register"
                    className="inline-flex items-center text-sm font-bold text-[#2563EB] hover:text-[#1E234B] transition-colors group/link"
                  >
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-3">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className={`p-2.5 rounded-md border transition-colors ${
                currentPage === 1
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => {
              const pNum = idx + 1;
              return (
                <button
                  key={pNum}
                  onClick={() => setCurrentPage(pNum)}
                  className={`w-10 h-10 rounded-md text-sm font-bold transition-all cursor-pointer ${
                    currentPage === pNum
                      ? "bg-[#2563EB] text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                      : "border border-gray-300 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {pNum}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-2.5 rounded-md border transition-colors ${
                currentPage === totalPages
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}