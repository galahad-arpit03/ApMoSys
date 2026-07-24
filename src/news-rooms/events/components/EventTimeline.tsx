// src/news-rooms/events/components/EventTimeline.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users } from "lucide-react";

const timelineEvents = [
  {
    id: "1",
    title: "Global Quality Engineering Summit 2026",
    description: "Our flagship annual gathering bringing together 3,000+ technology leaders to discuss autonomous QA, continuous testing governance, and enterprise AI transformation.",
    date: "November 2026",
    location: "Hyderabad + Virtual",
    attendees: "3,000+",
    image: "/newsroom/events/event1.jpg",
  },
  {
    id: "2",
    title: "Cloud Assurance & DevSecOps Forum",
    description: "Multi-track technical symposium covering Kubernetes security, infrastructure as code validation, and cloud-native performance benchmarking.",
    date: "September 2026",
    location: "Bengaluru",
    attendees: "1,500+",
    image: "/newsroom/events/event2.jpg",
  },
  {
    id: "3",
    title: "AIOps & Observability Roundtable Series",
    description: "Executive roundtable series highlighting machine learning in telemetry analysis, proactive root-cause diagnosis, and incident response automation.",
    date: "June 2026",
    location: "Virtual",
    attendees: "800+",
    image: "/newsroom/events/event3.jpg",
  },
  {
    id: "4",
    title: "Global Developer & Partner Hackathon",
    description: "Annual 48-hour global challenge showcasing innovative open-source testing plugins, synthetic test data generators, and AI code verifiers.",
    date: "August 2026",
    location: "Global (Virtual)",
    attendees: "2,000+",
    image: "/newsroom/events/event4.jpg",
  },
];

export default function EventTimeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = timelineEvents.length;

  const goToSlide = (index: number) => {
    setCurrentIndex((index + totalSlides) % totalSlides);
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    autoplayRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [currentIndex, isPaused]);

  const currentEvent = timelineEvents[currentIndex];

  return (
    <section
      id="events-timeline"
      className="py-10 lg:py-16 bg-[#0A1128] border-t border-[#1A264A] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#242A56] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Split Header - Single-colored Heading */}
        <div className="mb-8 lg:mb-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.1]">
              Our Annual Event Calendar
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              From global summits to developer hackathons — explore our annual roadmap of technology events designed to inspire, educate, and connect.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative rounded-md overflow-hidden border border-[#1A264A] shadow-2xl group/carousel">
          {/* Image Container */}
          <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px] xl:h-[600px] bg-[#121B38] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${currentEvent.image})` }}
                />
                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128]/40 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Content Overlay - Bottom Left */}
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 lg:p-10 max-w-2xl z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                    {currentEvent.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-xl hidden sm:block">
                    {currentEvent.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content Overlay - Bottom Right */}
            <div className="absolute bottom-0 right-0 p-6 sm:p-8 lg:p-10 z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`meta-${currentIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="bg-[#121B38]/80 backdrop-blur-sm border border-[#1A264A] rounded-md p-4 sm:p-6 min-w-[180px] sm:min-w-[220px]"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{currentEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{currentEvent.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span>{currentEvent.attendees} Attendees</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#121B38]/80 backdrop-blur-sm border border-[#1A264A] text-white hover:bg-white hover:text-[#0A1128] transition-all z-20 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
            aria-label="Previous event"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#121B38]/80 backdrop-blur-sm border border-[#1A264A] text-white hover:bg-white hover:text-[#0A1128] transition-all z-20 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
            aria-label="Next event"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1A264A] z-20">
            <motion.div
              className="h-full bg-white/40 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              key={currentIndex}
            />
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {timelineEvents.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 h-2.5 bg-white"
                  : "w-2.5 h-2.5 bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Go to event ${idx + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-400">
            {currentIndex + 1} / {totalSlides}
          </span>
        </div>
      </div>
    </section>
  );
}