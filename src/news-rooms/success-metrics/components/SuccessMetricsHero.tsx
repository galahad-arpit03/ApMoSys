"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import EditableText from "@/src/admin/components/EditableText";
import EditableImage from "@/src/admin/components/EditableImage";

export default function SuccessMetricsHero() {
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
            src="/news-rooms/success-metrics/image.png"
            alt="Success Metrics"
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
                path="metrics.hero.heading1"
                fallback="Quantified Return on"
                as="span"
              />{' '}
              <EditableText
                path="metrics.hero.heading2"
                fallback="Engineering Quality."
                as="span"
                className="text-gray-800"
              />
            </h1>
            <p className="text-slate-900 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 drop-shadow">
              <EditableText
                path="metrics.hero.description"
                fallback="Quantitative views of business impact, performance gains, ROI reports, and operational improvements across enterprise transformation programs."
                as="span"
                multiline
              />
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#roi-reports" className="bg-[#242A56] hover:bg-[#1E234B] text-white px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 shadow-lg inline-flex items-center justify-center">
                <EditableText
                  path="metrics.hero.button1"
                  fallback="View ROI Reports"
                  as="span"
                />
              </a>
              <a href="#performance-data" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-gray-800/20 text-gray-800 px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg">
                <EditableText
                  path="metrics.hero.button2"
                  fallback="Performance Signals"
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
