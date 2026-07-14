"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useContentStore } from "@/src/admin/store/adminStore";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import EditableText from "@/src/admin/components/EditableText";
import EditableImage from "@/src/admin/components/EditableImage";

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
      <motion.div
        className="absolute inset-0 z-0 origin-top"
        style={{ y: backgroundY, scale: 1 }}
      >
        <EditableImage label="Hero Background Image" className="relative w-full h-full">
          <Image
            src="/who-we-are/about-us/AboutHero/about-hero3.png"
            alt="About ApMoSys"
            fill
            priority
            className="object-cover object-[center_85%]"
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
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight mb-6 leading-tight text-slate-800 drop-shadow-sm">
              <EditableText
                path="about.hero.heading1"
                fallback="Engineering Excellence at"
                as="span"
              />{' '}
              <EditableText
                path="about.hero.heading2"
                fallback="Enterprise Scale."
                as="span"
                className="text-slate-800"
              />
            </h1>
            <p className="text-slate-900 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 drop-shadow">
              <EditableText
                path="about.hero.description"
                fallback="We are a trusted technology partner for global enterprises, delivering intelligent automation, digital assurance, and resilient engineering solutions that drive measurable business outcomes."
                as="span"
                multiline
              />
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#242A56] hover:bg-[#1E234B] text-white px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 shadow-lg">
                <EditableText
                  path="about.hero.button1"
                  fallback="Discover Our Services"
                  as="span"
                />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-slate-800 px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg">
                <EditableText
                  path="about.hero.button2"
                  fallback="Meet the Leadership"
                  as="span"
                />
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
