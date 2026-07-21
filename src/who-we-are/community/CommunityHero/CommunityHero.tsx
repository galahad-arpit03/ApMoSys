"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import EditableText from "@/src/admin/components/EditableText";
import EditableImage from "@/src/admin/components/EditableImage";

export default function CommunityHero() {
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
            src="/who-we-are/community/CommunityHero/community.png"
            alt="Community"
            fill
            priority
            className="object-cover object-center"
          />
        </EditableImage>
      </motion.div>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-normal tracking-tight mb-6 leading-[1.1] text-gray-800 drop-shadow-sm">
              <EditableText path="community.hero.heading1" fallback="Empowering" as="span" /> <br/>
              <EditableText path="community.hero.heading2" fallback="Through Technology" as="span" className="text-gray-800" />
            </h1>
            <p className="text-gray-800 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 drop-shadow">
              <EditableText 
                path="community.hero.description" 
                fallback="We are committed to driving meaningful change beyond the digital landscape. By fostering innovation, education, and sustainable initiatives, we build stronger communities and a more resilient, connected world." 
                as="span" 
                multiline 
              />
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-[#242A56] hover:bg-[#1E234B] text-white px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 shadow-lg group"
            >
              <EditableText path="community.hero.button" fallback="Get Involved" as="span" />
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-[#242A56]/20 text-gray-800 px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 shadow-lg"
            >
              Join the Program
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
