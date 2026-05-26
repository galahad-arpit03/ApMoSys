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

export default function LifeSection() {
  return (
    <SectionThemeWrapper sectionId="careers_life" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="life"
            className={`py-24 border-t transition-colors duration-300 overflow-hidden ${
              isDark ? "bg-[#121212] text-[#FAFAFA] border-[#1F1F1F]" : "bg-[#FAFAFA] text-[#121212] border-[#E8E8E8]"
            }`}
          >
                        <Container>
              
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="mb-12"
              >
                <EditableText
                  path="careers.life.heading"
                  fallback="Life at ApMoSys"
                  as="h2"
                  className={`font-heading text-3xl sm:text-4xl font-extrabold mb-4 block ${
                    isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                  }`}
                />
                <EditableText
                  path="careers.life.subheading"
                  fallback="Modern architecture, international collaboration, and a relentless pursuit of quality."
                  as="p"
                  className={`text-sm sm:text-base max-w-2xl block ${
                    isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                  }`}
                  multiline
                />
              </motion.div>

              {/* Bento Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 h-auto md:h-[600px]"
              >
                
                {/* Main Large Image (People/Lab) */}
                <motion.div
                  variants={fadeUp}
                  className={`md:col-span-7 md:row-span-2 relative rounded-xl overflow-hidden group min-h-[300px] border transition-colors ${
                    isDark ? "bg-[#1F1F1F] border-[#3A3A3A]" : "bg-[#FFFFFF] border-[#E8E8E8]"
                  }`}
                >
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#121212]/50 to-[#121212]/10 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <span className="text-[#FAFAFA] font-bold tracking-widest uppercase">Office / Team Image Placeholder</span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                    <span className="text-primary-red text-xs font-bold uppercase tracking-widest mb-2 block">
                      Workspace
                    </span>
                    <EditableText
                      path="careers.life.bento1Title"
                      fallback="Innovation Labs"
                      as="h3"
                      className="text-[#FFFFFF] text-2xl font-bold block"
                    />
                  </div>
                </motion.div>

                {/* Top Right (Screen/Dashboard) */}
                <motion.div
                  variants={fadeUp}
                  className={`md:col-span-5 md:row-span-1 relative rounded-xl overflow-hidden group min-h-[250px] border transition-colors ${
                    isDark ? "bg-[#1F1F1F] border-[#3A3A3A]" : "bg-[#FFFFFF] border-[#E8E8E8]"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#121212] to-transparent z-10 opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <span className="text-[#FAFAFA] font-bold text-sm tracking-widest uppercase">Tech / Screen Placeholder</span>
                  </div>
                   
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <EditableText
                      path="careers.life.bento2Title"
                      fallback="State-of-the-art Infrastructure"
                      as="h3"
                      className="text-[#FFFFFF] text-lg font-bold block"
                    />
                  </div>
                </motion.div>

                {/* Bottom Right Split 1 (Global Offices) */}
                <motion.div
                  variants={fadeUp}
                  className={`md:col-span-2 md:row-span-1 relative rounded-xl overflow-hidden border flex flex-col items-center justify-center p-6 min-h-[250px] transition-colors ${
                    isDark ? "bg-[#0A0A0A] border-[#3A3A3A] hover:bg-[#121212]" : "bg-[#FFFFFF] border-[#E8E8E8] hover:bg-[#F5F5F5]"
                  }`}
                >
                  <svg
                    className={`w-10 h-10 mb-4 transition-colors ${isDark ? "text-[#7A7A7A]" : "text-[#9A9A9A]"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <EditableText
                    path="careers.life.bento3Title"
                    fallback="3 Global Offices"
                    as="h3"
                    className={`text-sm font-bold tracking-widest uppercase text-center block ${
                      isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                    }`}
                  />
                </motion.div>

                {/* Bottom Right Split 2 (Awards) */}
                <motion.div
                  variants={fadeUp}
                  className="md:col-span-3 md:row-span-1 relative rounded-xl overflow-hidden bg-primary-red flex flex-col items-center justify-center p-6 min-h-[250px]"
                >
                  <EditableText
                    path="careers.life.bento4Val"
                    fallback="14+"
                    as="h3"
                    className="font-heading text-6xl font-extrabold text-[#FFFFFF] mb-2 block text-center"
                  />
                  <EditableText
                    path="careers.life.bento4Label"
                    fallback="Industry Awards"
                    as="span"
                    className="text-[#FAFAFA]/80 text-sm font-bold tracking-widest uppercase block text-center"
                  />
                </motion.div>

              </motion.div>
                        </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
