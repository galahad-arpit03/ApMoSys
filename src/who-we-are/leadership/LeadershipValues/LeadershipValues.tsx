"use client";
import { leadershipvaluesData } from "./LeadershipValuesData";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { motion } from "framer-motion";

export default function LeadershipValues() {
  return (
    <SectionThemeWrapper sectionId="leadership_values" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-16 sm:py-20 lg:py-24 transition-colors duration-300 ${isDark ? "bg-[#0F0F0F]" : "bg-white"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <h2 className={`text-3xl sm:text-4xl font-bold mb-8 sm:mb-14 ${isDark ? "text-white" : "text-gray-900"}`}>
                Leadership Principles
              </h2>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {leadershipvaluesData.map((value, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    key={value.title}
                    className={`border p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                      isDark 
                        ? "border-[#2A2A2A] bg-[#181818] hover:border-red-900/50" 
                        : "border-gray-200 bg-gray-50 hover:border-red-500/50"
                    }`}
                  >
                    <h3 className={`text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {value.title}
                    </h3>

                    <p className={`${isDark ? "text-neutral-400" : "text-gray-600"}`}>
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
