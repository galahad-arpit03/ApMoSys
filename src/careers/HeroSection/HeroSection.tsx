"use client";
import { herosectionData } from "./HeroSectionData";

import React from "react";
import Image from "next/image";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";


const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function HeroSection() {
  return (
    <SectionThemeWrapper sectionId="careers_hero" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`relative min-h-[550px] lg:min-h-[600px] flex items-center pt-20 pb-28 border-b transition-colors duration-300 ${
            isDark ? "bg-[#0A1128] text-white border-[#1F2C47]" : "bg-white text-gray-900 border-gray-200"
          }`}>
            {/* Background gradient */}
            {isDark && <div className="absolute inset-0 bg-blue-600/10 pointer-events-none" />}

            <Container className="relative z-10 w-full">
              <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left mb-12 lg:mb-0"
                >
                <motion.h1 variants={fadeUp} className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-6 leading-[1.1] ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                  <EditableText
                    path="careers.hero.heading"
                    fallback="Engineer Your Future with Precision."
                    as="span"
                    className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  />
                </motion.h1>
                
                <motion.p variants={fadeUp} className={`text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl ${
                  isDark ? "text-gray-300" : "text-[#5A5A5A]"
                }`}>
                  <EditableText
                    path="careers.hero.subheading"
                    fallback="Join a global team of QA innovators and AIOps architects redefining enterprise software resilience at an unprecedented scale."
                    as="span"
                    multiline
                    className={`text-lg sm:text-xl leading-relaxed ${
                      isDark ? "text-gray-300" : "text-[#5A5A5A]"
                    }`}
                  />
                </motion.p>
                
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#openings"
                    className="inline-flex justify-center items-center bg-[#2563EB] hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-md text-sm transition-colors cursor-pointer"
                  >
                    <EditableText
                      path="careers.hero.ctaPrimary"
                      fallback="View Open Roles"
                      as="span"
                    />
                  </a>
                  <a
                    href="#life"
                    className={`inline-flex justify-center items-center border font-bold px-8 py-3.5 rounded-md text-sm transition-colors cursor-pointer ${
                      isDark ? "border-[#1F2C47] hover:bg-[#121B31] text-gray-300" : "border-gray-200 hover:bg-gray-50 text-[#5A5A5A]"
                    }`}
                  >
                    <EditableText
                      path="careers.hero.ctaSecondary"
                      fallback="Life at ApMoSys"
                      as="span"
                    />
                  </a>
                </motion.div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="lg:col-span-6 relative"
                >
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src="/careers/careers_hero.png"
                      alt="Careers at ApMoSys"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
