"use client";

import React from "react";
import Container from "@/src/components/Container";
import { motion, type Variants } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <SectionThemeWrapper sectionId="products_hero" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            className={`relative min-h-[550px] lg:min-h-[600px] flex items-center pt-20 pb-28 border-b transition-colors duration-300 ${
              isDark
                ? "bg-[#000000] text-[#FAFAFA] border-[#1F1F1F]"
                : "bg-[#FAFAFA] text-[#121212] border-[#E8E8E8]"
            }`}
          >
            {/* Background gradient */}
            {isDark && (
              <div className="absolute inset-0 bg-gradient-to-b from-[#B40001]/10 to-transparent opacity-30 pointer-events-none" />
            )}

            <Container className="relative z-10 w-full">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                <motion.div
                  className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.span
                    variants={fadeUp}
                    className="text-primary-red text-xs font-bold tracking-widest uppercase mb-4 block"
                  >
                    {/* <EditableText
                      path="products.hero.badge"
                      fallback="Products & Platform"
                      as="span"
                      className="text-primary-red text-xs font-bold tracking-widest uppercase"
                    /> */}
                  </motion.span>

                  <motion.h1 variants={fadeUp} className="mb-6 leading-none">
                    <EditableText
                      path="products.hero.heading"
                      fallback="Enterprise Platforms Engineered for Scale"
                      as="span"
                      className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-normal leading-none ${
                        isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                      }`}
                    />
                  </motion.h1>

                  <motion.p variants={fadeUp} className="mb-10 max-w-2xl">
                    <EditableText
                      path="products.hero.subheading"
                      fallback="Purpose-built products and platforms that integrate seamlessly into your existing toolchain — accelerating quality, observability, and intelligent automation at enterprise scale."
                      as="span"
                      multiline
                      className={`text-base sm:text-lg leading-relaxed ${
                        isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                      }`}
                    />
                  </motion.p>

                  <motion.div
                    variants={fadeUp}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <a
                      href="#products-grid"
                      className="bg-primary-red hover:bg-primary-hover text-[#FFFFFF] font-semibold text-center px-8 py-3.5 rounded-md text-sm tracking-wide transition-colors"
                    >
                      <EditableText
                        path="products.hero.ctaPrimary"
                        fallback="Explore Products"
                        as="span"
                      />
                    </a>
                    <a
                      href="#contact"
                      className={`border font-semibold text-center px-8 py-3.5 rounded-md text-sm tracking-wide transition-colors ${
                        isDark
                          ? "bg-transparent border-[#3A3A3A] hover:border-primary-red text-[#FFFFFF]"
                          : "bg-transparent border-[#C8C8C8] hover:border-primary-red text-[#121212]"
                      }`}
                    >
                      <EditableText
                        path="products.hero.ctaSecondary"
                        fallback="See Platform Demos"
                        as="span"
                      />
                    </a>
                  </motion.div>
                </motion.div>

                {/* Right side - abstract visual */}
                <motion.div
                  variants={fadeUp}
                  className="hidden lg:flex lg:col-span-5 justify-center items-center"
                >
                  <div
                    className={`relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border flex items-center justify-center ${
                      isDark
                        ? "bg-[#1A1A1A] border-[#2A2A2A]"
                        : "bg-[#F5F5F5] border-[#E8E8E8]"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        isDark
                          ? "from-[#B40001]/20 via-[#1A1A1A] to-[#0A0A0A]"
                          : "from-primary-soft via-[#F5F5F5] to-[#FFFFFF]"
                      }`}
                    />
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="flex flex-wrap justify-center gap-3">
                        {["📊", "🤖", "☁️", "🔒", "📈", "⚡"].map((icon, i) => (
                          <div
                            key={i}
                            className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 ${
                              isDark
                                ? "bg-[#2A2A2A] border border-[#3A3A3A]"
                                : "bg-[#FFFFFF] border border-[#E8E8E8] shadow-sm"
                            }`}
                          >
                            {icon}
                          </div>
                        ))}
                      </div>
                      <span
                        className={`text-xs font-bold uppercase tracking-widest mt-2 ${
                          isDark ? "text-[#7A7A7A]" : "text-[#5A5A5A]"
                        }`}
                      >
                        <EditableText
                          path="products.hero.visualLabel"
                          fallback="Product Ecosystem"
                          as="span"
                        />
                      </span>
                    </div>
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