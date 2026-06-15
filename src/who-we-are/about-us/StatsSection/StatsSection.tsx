"use client";
import React from "react";
import { motion } from "framer-motion";
import { statsData } from "./StatsSectionData";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

export default function StatsSection() {
  return (
    <SectionThemeWrapper sectionId="about_stats" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-12 border-y transition-colors duration-300 ${isDark ? "bg-black border-[#222]" : "bg-white border-gray-200"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x gap-y-8 md:gap-y-0 ${isDark ? "divide-[#333]" : "divide-gray-200"}`}>
                {statsData.map((stat, i) => {
                  // Fallbacks from original data logic, splitting plus signs for styling
                  const valParts = stat.value.split('+');
                  const valNum = valParts[0];
                  const hasPlus = stat.value.includes('+');

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="text-center px-4 flex flex-col items-center justify-center"
                    >
                      <div className={`text-4xl md:text-5xl font-black tracking-tight mb-2 flex items-center gap-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                        <EditableText
                          path={`about.stats.stat${i + 1}Value`}
                          fallback={stat.value}
                          as="span"
                        />
                      </div>
                      <div className={`text-xs uppercase tracking-[0.2em] font-bold ${isDark ? "text-white/60" : "text-gray-500"}`}>
                        <EditableText
                          path={`about.stats.stat${i + 1}Label`}
                          fallback={stat.label}
                          as="span"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
