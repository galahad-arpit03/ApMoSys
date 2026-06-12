"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useContentStore } from "@/src/admin/store/adminStore";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  const { content } = useContentStore();
  const hero = content.about.hero;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  // Create a parallax effect by moving the background down slightly as we scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden flex items-center min-h-[50vh]">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0 origin-top"
        style={{ y: backgroundY, scale: 1 }}
      >
        <Image
          src="/about/about-hero2.png"
          alt="About ApMoSys"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay fading from left (60%) to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-white drop-shadow-sm">
              Engineering Excellence at <span className="text-primary-red drop-shadow-md [-webkit-text-stroke:0.3px_white]">Enterprise Scale.</span>
            </h1>
            <p className="text-gray-100 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 drop-shadow">  
              We are a trusted technology partner for global enterprises, delivering intelligent automation, digital assurance, and resilient engineering solutions that drive measurable business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-red hover:bg-red-700 text-white px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 shadow-lg">
                Discover Our Services
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg">
                Meet the Leadership <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
