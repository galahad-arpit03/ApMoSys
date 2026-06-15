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


              <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 sm:mb-16">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-[1px] w-8 bg-[#B40001]"></div>
                    <span className="text-[#B40001] uppercase tracking-widest text-xs font-bold">
                      Our Values
                    </span>
                  </div>
                  <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold ${isDark ? "text-white" : "text-gray-900"}`}>
                    Core Principles
                  </h2>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
                {leadershipvaluesData.map((value, i) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                    key={value.title}
                    className={`group relative p-8 sm:p-10 rounded-2xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden ${
                      isDark 
                        ? "bg-[#111] border-[#222] hover:border-[#444]" 
                        : "bg-white border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#B40001] opacity-5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150" />
                    
                    <div className="text-[#B40001] font-black text-4xl sm:text-5xl opacity-20 mb-6 group-hover:opacity-100 transition-opacity duration-300">
                      0{i + 1}
                    </div>
                    
                    <h3 className={`text-xl sm:text-2xl font-bold mb-4 tracking-tight relative z-10 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {value.title}
                    </h3>

                    <p className={`font-light leading-relaxed relative z-10 ${isDark ? "text-neutral-400" : "text-gray-600"}`}>
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
