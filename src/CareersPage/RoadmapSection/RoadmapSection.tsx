"use client";

import React from "react";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function RoadmapSection() {
  const steps = [
    {
      num: 1,
      titlePath: "careers.roadmap.step1Title",
      descPath: "careers.roadmap.step1Desc",
      fallbackTitle: "Initial Chat",
      fallbackDesc: "Cultural fit and alignment with our company values and goals."
    },
    {
      num: 2,
      titlePath: "careers.roadmap.step2Title",
      descPath: "careers.roadmap.step2Desc",
      fallbackTitle: "Technical Deep-Dive",
      fallbackDesc: "Live coding or architecture whiteboard session with engineering leads."
    },
    {
      num: 3,
      titlePath: "careers.roadmap.step3Title",
      descPath: "careers.roadmap.step3Desc",
      fallbackTitle: "Architecture Review",
      fallbackDesc: "In-depth discussion on system design, scalability, and previous projects."
    },
    {
      num: 4,
      titlePath: "careers.roadmap.step4Title",
      descPath: "careers.roadmap.step4Desc",
      fallbackTitle: "The Offer",
      fallbackDesc: "Welcome to the premier engineering team."
    }
  ];

  return (
    <section className="bg-[#121212] text-[#FAFAFA] py-24 border-t border-[#1F1F1F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <EditableText
            path="careers.roadmap.heading"
            fallback="Hiring Roadmap"
            as="h2"
            className="font-heading text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] block text-center"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {/* Connecting Line (visible on large screens only) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-[#3A3A3A] z-0" />
          
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className="relative z-10 flex flex-col items-center text-center bg-[#1F1F1F] border border-[#3A3A3A] p-8 rounded-xl hover:border-primary-red transition-colors group"
            >
              <div className="w-12 h-12 bg-primary-red text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 group-hover:scale-110 transition-transform">
                {step.num}
              </div>
              <EditableText
                path={step.titlePath}
                fallback={step.fallbackTitle}
                as="h3"
                className="text-[#FFFFFF] text-lg font-bold mb-3 block text-center"
              />
              <EditableText
                path={step.descPath}
                fallback={step.fallbackDesc}
                as="p"
                className="text-[#A0A0A0] text-sm leading-relaxed block text-center"
                multiline
              />
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
