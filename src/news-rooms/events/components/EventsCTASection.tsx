// src/news-rooms/events/components/EventsCTASection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function EventsCTASection() {
  return (
    <section className="py-10 lg:py-16 bg-white px-6 sm:px-8 lg:px-16 border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto relative rounded-[12px] overflow-hidden shadow-2xl min-h-[300px] md:min-h-[350px] lg:min-h-[380px] flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/abstract-waves.png"
            alt="Background"
            fill
            quality={90}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#242A56]/90 mix-blend-multiply" />
        </div>

        <div className="relative z-10 p-8 sm:p-12 lg:p-16 w-full flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-left w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight leading-tight">
              Secure Your Spot at Our Upcoming Events
            </h2>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              Join us for interactive workshops, insightful keynotes, and networking with technology leaders. Space is limited.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="#events-overview"
              className="px-8 py-3.5 bg-white text-[#242A56] rounded-md font-semibold text-sm text-center shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
            >
              View All Events
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="/contact"
              className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-md font-semibold text-sm text-center shadow-lg hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}