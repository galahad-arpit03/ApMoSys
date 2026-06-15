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
          <section className={`flex items-center border-b py-16 sm:py-20 lg:min-h-[80vh] lg:py-0 transition-colors duration-300 ${
            isDark ? "bg-[#0F0F0F] border-[#1F1F1F]" : "bg-white border-gray-200"
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

              <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span className="text-primary-red text-xs uppercase tracking-[0.2em] font-bold">
                    Leadership
                  </span>

                  <h1 className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-4 mb-6 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                    Guiding Innovation With Vision & Experience
                  </h1>

                  <p className={`text-base sm:text-lg leading-relaxed ${
                    isDark ? "text-[#A0A0A0]" : "text-gray-600"
                  }`}>
                    Meet the leaders driving enterprise transformation,
                    engineering excellence, and innovation across ApMoSys.
                  </p>
                </motion.div>

                <div className={`relative rounded-xl overflow-hidden h-64 sm:h-80 lg:h-[450px] shadow-lg border ${
                  isDark ? "bg-[#1F1F1F] border-[#3A3A3A]" : "bg-gray-100 border-gray-200"
                }`}>
                  <Image
                    src="/leadership/leadership-hero.jpg"
                    alt="Leadership Team"
                    fill
                    className="object-cover"
                  />
                  {/* Subtle overlay for better blending */}
                  <div className={`absolute inset-0 opacity-20 ${isDark ? "bg-black" : "bg-transparent"}`} />
                </div>

              </div>

            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
