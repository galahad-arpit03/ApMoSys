"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import EditableText from "@/src/admin/components/EditableText";
import EditableImage from "@/src/admin/components/EditableImage";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden flex items-center min-h-[50vh]">
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0 origin-top"
        style={{ y: backgroundY, scale: 1 }}
      >
        <EditableImage label="Alliance Hero Background" className="relative w-full h-full">
          <Image
            src="/what-we-do/alliance.png"
            alt="Alliance Background"
            fill
            priority
            className="object-cover object-center"
          />
        </EditableImage>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight mb-6 leading-tight text-slate-800 drop-shadow-sm"
            >
              <EditableText
                path="alliance.hero.heading1"
                fallback="Powering Innovation Through"
                as="span"
              />{' '}
              <EditableText
                path="alliance.hero.heading2"
                fallback="Strategic Partnerships"
                as="span"
                className="text-[#242A56] drop-shadow-md"
              />
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-900 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 drop-shadow"
            >
              <EditableText
                path="alliance.hero.subheading"
                fallback="We collaborate with the world's leading technology providers to deliver integrated solutions that accelerate enterprise transformation and drive measurable business outcomes."
                as="span"
                multiline
              />
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#partners"
                className="inline-flex items-center justify-center gap-2 bg-[#242A56] hover:bg-[#1E234B] text-white px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 shadow-lg group"
              >
                <EditableText path="alliance.hero.ctaPrimary" fallback="View Our Partners" as="span" />
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-slate-800 px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 shadow-lg"
              >
                <EditableText path="alliance.hero.ctaSecondary" fallback="Become a Partner" as="span" />
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}