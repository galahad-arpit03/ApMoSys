// src/news-rooms/events/components/EventsCategories.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Users, Monitor, Globe } from "lucide-react";

const eventCategories = [
  {
    id: "summits",
    title: "Global Summits",
    count: "4",
    description: "Flagship annual conferences bringing together 3,000+ technology leaders.",
    icon: Globe,
  },
  {
    id: "workshops",
    title: "Technical Workshops",
    count: "12",
    description: "Hands-on sessions covering AI-driven testing, observability, and automation.",
    icon: Monitor,
  },
  {
    id: "webinars",
    title: "Live Webinars",
    count: "24",
    description: "Expert-led sessions on enterprise quality, DevSecOps, and platform engineering.",
    icon: Sparkles,
  },
  {
    id: "roundtables",
    title: "Executive Roundtables",
    count: "8",
    description: "Exclusive peer-to-peer discussions for CIOs and engineering leaders.",
    icon: Users,
  },
];

export default function EventsCategories() {
  return (
    <section className="py-10 lg:py-16 bg-[#0A1128] border-b border-[#1A264A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Split Header - No Eyebrow */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.1]">
              Explore Our <br className="hidden lg:block" />
              <span className="text-[#2563EB]">Event Categories</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              From global summits to hands-on workshops and executive roundtables — find the right event to fuel your engineering journey.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group relative bg-[#121B38] border border-[#1A264A] rounded-md p-8 hover:border-[#2563EB]/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.05)] transition-all hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-md bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="text-4xl font-bold text-[#2563EB]/20 group-hover:text-[#2563EB]/40 transition-colors">
                    {category.count}
                  </span>
                </div>
                <h3 className="text-base xl:text-lg font-medium text-white mb-2 group-hover:text-[#2563EB] transition-colors">
                  {category.title}
                </h3>
                <p className="text-[13px] xl:text-[14px] text-gray-300 leading-snug">
                  {category.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}