"use client";
import { leadershipheroData } from "./LeadershipHeroData";
import { motion } from "framer-motion";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import Image from "next/image";

export default function LeadershipHero() {
  return (
    <SectionThemeWrapper sectionId="leadership_hero" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`relative flex items-center min-h-[50vh] pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden transition-colors duration-500 border-b ${
            isDark ? "bg-[#0A0A0A] border-[#1F1F1F]" : "bg-[#F9F9F9] border-gray-200"
          }`}>
            {/* Subtle background glow */}
            <div className={`absolute top-0 left-0 w-full h-full pointer-events-none ${isDark ? "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#B40001]/10 via-transparent to-transparent" : ""}`} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                <motion.div
                  className="flex flex-col justify-center"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-[1px] w-12 bg-[#B40001]"></div>
                    <span className="text-[#B40001] text-xs sm:text-sm uppercase tracking-[0.3em] font-bold">
                      Our Leadership
                    </span>
                  </div>

                  <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                    <span className="block">Guiding</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#B40001] to-[#FF4D4D]">
                      Innovation.
                    </span>
                  </h1>

                  <p className={`text-base sm:text-lg leading-relaxed max-w-xl font-light ${
                    isDark ? "text-[#A0A0A0]" : "text-gray-600"
                  }`}>
                    Meet the visionaries driving enterprise transformation, engineering excellence, and technological resilience at ApMoSys.
                  </p>
                </motion.div>

                <motion.div 
                  className="relative flex justify-center lg:justify-end"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                  <div className={`relative aspect-[4/5] w-full max-w-sm xl:max-w-[340px] rounded-sm overflow-hidden shadow-2xl ${
                    isDark ? "bg-[#161616]" : "bg-gray-200"
                  }`}>
                    <Image
                      src="/leadership/leadership-hero.jpg"
                      alt="Leadership Vision"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className={`absolute inset-0 opacity-40 mix-blend-multiply ${isDark ? "bg-black" : "bg-transparent"}`} />
                    <div className="absolute inset-0 border border-white/10 rounded-sm" />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-[#B40001] hidden lg:block" />
                </motion.div>

              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
