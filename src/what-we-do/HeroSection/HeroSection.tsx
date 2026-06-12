"use client";
import { herosectionData } from "./HeroSectionData";

import React from "react";
import Container from "@/src/components/Container";
import { motion, type Variants } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function HeroSection() {
  return (
    <SectionThemeWrapper sectionId="industries_hero" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            className={`relative min-h-[550px] lg:min-h-[600px] flex items-center pt-20 pb-28 border-b transition-colors duration-300 ${
              isDark ? "bg-[#000000] text-[#FAFAFA] border-[#1F1F1F]" : "bg-[#FAFAFA] text-[#121212] border-[#E8E8E8]"
            }`}
          >
            <div className="absolute inset-0 z-0" />
            <Container className="relative z-10 w-full">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                <motion.div
                  className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.span variants={fadeUp} className="text-primary-red text-xs font-bold tracking-widest uppercase mb-4 block">
                  <EditableText
                    path="industries.hero.badge"
                    fallback="Industries we serve"
                    as="span"
                    className="text-primary-red text-xs font-bold tracking-widest uppercase"
                  />
                </motion.span>

                <motion.h1
                  variants={fadeUp}
                  className="mb-6 leading-none"
                >
                  <EditableText
                    path="industries.hero.heading"
                    fallback="Engineering Precision Across Every Sector."
                    as="span"
                    className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-normal leading-none ${
                      isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                    }`}
                  />
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mb-10 max-w-2xl"
                >
                  <EditableText
                    path="industries.hero.subheading"
                    fallback="Bridging the gap between legacy infrastructure and future-proof digital business. ApMoSys provides robust, tailored digital transformations for the world's most demanding sectors."
                    as="span"
                    multiline
                    className={`text-base sm:text-lg leading-relaxed ${isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"}`}
                  />
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="bg-primary-red hover:bg-primary-hover text-[#FFFFFF] font-semibold text-center px-8 py-3.5 rounded-md text-sm tracking-wide transition-colors"
                  >
                    View Solutions
                  </a>
                  <a
                    href="#contact"
                    className={`border font-semibold text-center px-8 py-3.5 rounded-md text-sm tracking-wide transition-colors ${
                      isDark
                        ? "bg-transparent border-[#3A3A3A] hover:border-primary-red text-[#FFFFFF]"
                        : "bg-transparent border-[#C8C8C8] hover:border-primary-red text-[#121212]"
                    }`}
                  >
                    Contact Expert
                  </a>
                </motion.div>
                </motion.div>
              </div>
            </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
