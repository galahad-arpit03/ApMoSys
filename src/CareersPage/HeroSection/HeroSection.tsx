"use client";

import React from "react";
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
          <section className={`min-h-screen flex items-center pt-32 pb-24 border-b overflow-hidden relative transition-colors duration-300 ${
            isDark ? "bg-[#000000] text-[#FAFAFA] border-[#1F1F1F]" : "bg-[#FAFAFA] text-[#121212] border-[#E8E8E8]"
          }`}>
            {/* Background gradient */}
            {isDark && <div className="absolute inset-0 bg-gradient-to-b from-[#B40001]/10 to-transparent opacity-30 pointer-events-none" />}

                        <Container className="relative z-10 w-full">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-3xl"
              >
                <motion.span variants={fadeUp} className="text-primary-red text-xs font-bold tracking-widest uppercase mb-4 block">
                  <EditableText
                    path="careers.hero.badge"
                    fallback="CAREERS AT APMOSYS"
                    as="span"
                    className="text-primary-red text-xs font-bold tracking-widest uppercase"
                  />
                </motion.span>
                
                <motion.h1 variants={fadeUp} className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-normal mb-6 leading-[1.1] ${
                  isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                }`}>
                  <EditableText
                    path="careers.hero.heading"
                    fallback="Engineer Your Future with Precision."
                    as="span"
                    className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-normal leading-[1.1] ${
                      isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                    }`}
                  />
                </motion.h1>
                
                <motion.p variants={fadeUp} className={`text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl ${
                  isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                }`}>
                  <EditableText
                    path="careers.hero.subheading"
                    fallback="Join a global team of QA innovators and AIOps architects redefining enterprise software resilience at an unprecedented scale."
                    as="span"
                    multiline
                    className={`text-lg sm:text-xl leading-relaxed ${
                      isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                    }`}
                  />
                </motion.p>
                
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="#openings"
                    whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(180,0,1,0.25)" }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex justify-center items-center bg-primary-red hover:bg-primary-hover text-white font-bold px-8 py-3.5 rounded-md text-sm tracking-wide uppercase transition-colors cursor-pointer"
                  >
                    <EditableText
                      path="careers.hero.ctaPrimary"
                      fallback="View Open Roles"
                      as="span"
                    />
                  </motion.a>
                  <motion.a
                    href="#life"
                    whileHover={isDark ? { scale: 1.04, borderColor: "#7A7A7A", color: "#FFFFFF" } : { scale: 1.04, borderColor: "#121212", color: "#121212" }}
                    whileTap={{ scale: 0.96 }}
                    className={`inline-flex justify-center items-center border font-bold px-8 py-3.5 rounded-md text-sm tracking-wide uppercase transition-colors cursor-pointer ${
                      isDark ? "border-[#3A3A3A] hover:bg-[#121212] text-[#C8C8C8]" : "border-[#C8C8C8] hover:bg-[#F5F5F5] text-[#5A5A5A]"
                    }`}
                  >
                    <EditableText
                      path="careers.hero.ctaSecondary"
                      fallback="Life at ApMoSys"
                      as="span"
                    />
                  </motion.a>
                </motion.div>
              </motion.div>
                        </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
