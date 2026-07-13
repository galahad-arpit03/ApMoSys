"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import EditableText from "@/src/admin/components/EditableText";
import EditableImage from "@/src/admin/components/EditableImage";

export default function TeamHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  // Create a parallax effect by moving the background down slightly as we scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden flex items-center min-h-[50vh]">
      <motion.div
        className="absolute inset-0 z-0 origin-top"
        style={{ y: backgroundY, scale: 1 }}
      >
        <EditableImage label="Hero Background Image" className="relative w-full h-full">
          <Image
            src="/our-team/team.png"
            alt="Our Team"
            fill
            priority
            className="object-cover object-center"
          />
        </EditableImage>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight mb-6 leading-tight text-black drop-shadow-sm">
              <EditableText path="team.hero.heading1" fallback="The People Behind" as="span" />{" "}
              <EditableText path="team.hero.heading2" fallback="ApMoSys" as="span" className="text-[#B40001] drop-shadow-md block" />
            </h1>
            <p className="text-slate-800 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 drop-shadow">
              <EditableText 
                path="team.hero.description" 
                fallback="Our strength lies in our people. Engineers, innovators, consultants, and problem-solvers working together to create intelligent solutions that transform enterprises worldwide." 
                as="span" 
                multiline 
              />
            </p>

            <a 
              href="/careers" 
              className="inline-flex items-center justify-center gap-2 bg-primary-red hover:bg-red-700 text-white px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 shadow-lg group"
            >
              <EditableText path="team.hero.button" fallback="Explore Careers" as="span" />
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
