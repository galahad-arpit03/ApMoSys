"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import EditableText from "@/src/admin/components/EditableText";
import EditableImage from "@/src/admin/components/EditableImage";

export default function CustomerStoriesHero() {
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
            src="/news-rooms/customer-stories/image.png"
            alt="Customer Stories"
            fill
            priority
            className="object-cover object-[center_right] sm:object-right"
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
              <EditableText
                path="customer.stories.hero.heading1"
                fallback="Proven Impact for"
                as="span"
              />{' '}
              <EditableText
                path="customer.stories.hero.heading2"
                fallback="Global Enterprises."
                as="span"
                className="text-gray-800"
              />
            </h1>
            <p className="text-slate-900 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 drop-shadow">
              <EditableText
                path="customer.stories.hero.description"
                fallback="Explore how leading organizations partner with ApMoSys to accelerate software delivery, eliminate production defects, and modernize quality engineering."
                as="span"
                multiline
              />
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#case-studies" className="bg-[#242A56] hover:bg-[#1E234B] text-white px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 shadow-lg inline-flex items-center justify-center">
                <EditableText
                  path="customer.stories.hero.button1"
                  fallback="View Case Studies"
                  as="span"
                />
              </a>
              <a href="#client-interviews" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-gray-800/20 text-gray-800 px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg">
                <EditableText
                  path="customer.stories.hero.button2"
                  fallback="Client Quotes"
                  as="span"
                />
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
