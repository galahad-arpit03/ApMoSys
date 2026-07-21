"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import EditableText from "@/src/admin/components/EditableText";
import EditableImage from "@/src/admin/components/EditableImage";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

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
    <SectionThemeWrapper sectionId="careers_hero" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            ref={ref}
            className={`relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden flex items-center justify-center min-h-[50vh] border-b transition-colors duration-300 ${
              isDark ? "border-slate-700" : "border-gray-200"
            }`}
          >
            {/* Parallax Background Image */}
            <motion.div
              className="absolute inset-0 z-0 origin-top"
              style={{ y: backgroundY, scale: 1 }}
            >
              <EditableImage label="Careers Hero Background" className="relative w-full h-full">
                <Image
                  src="/careers/careers.png"
                  alt="Careers at ApMoSys"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </EditableImage>
            </motion.div>

            {/* Content Container */}
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10 w-full">
              <div className="max-w-3xl">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <motion.h1
                    variants={fadeUp}
                    className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight mb-6 leading-tight drop-shadow-sm text-slate-800"
                  >
                    <EditableText
                      path="careers.hero.heading"
                      fallback="Engineer Your Future with Precision."
                      as="span"
                      className="text-[#242A56] drop-shadow-md"
                    />
                  </motion.h1>

                  <motion.p
                    variants={fadeUp}
                    className="text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 drop-shadow text-slate-700"
                  >
                    <EditableText
                      path="careers.hero.subheading"
                      fallback="Join a global team of QA innovators and AIOps architects redefining enterprise software resilience at an unprecedented scale."
                      as="span"
                      multiline
                    />
                  </motion.p>

                  <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#openings"
                      className="inline-flex items-center justify-center gap-2 bg-[#242A56] hover:bg-[#1E234B] text-white px-8 py-3.5 rounded-md font-bold text-sm transition-colors duration-200 shadow-lg group"
                    >
                      <EditableText path="careers.hero.ctaPrimary" fallback="View Open Roles" as="span" />
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
                      href="#life"
                      className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 hover:border-[#242A56] hover:text-[#242A56] font-bold text-sm px-8 py-3.5 rounded-md transition-colors duration-200"
                    >
                      <EditableText path="careers.hero.ctaSecondary" fallback="Life at ApMoSys" as="span" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}