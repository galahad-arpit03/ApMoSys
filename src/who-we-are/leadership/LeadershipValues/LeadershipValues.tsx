"use client";
import { leadershipvaluesData } from "./LeadershipValuesData";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { motion } from "framer-motion";

const getBorderClasses = (idx: number) => {
  let classes = "";
  
  if (idx < 3) classes += "border-b ";
  else classes += "border-b-0 ";
  
  if (idx < 2) classes += "md:border-b ";
  else classes += "md:border-b-0 ";
  
  classes += "lg:border-b-0 ";
  
  if (idx % 2 === 0) classes += "md:border-r ";
  else classes += "md:border-r-0 ";
  
  if (idx < 3) classes += "lg:border-r ";
  else classes += "lg:border-r-0 ";
  
  return classes;
};

export default function LeadershipValues() {
  return (
    <SectionThemeWrapper sectionId="leadership_values" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-10 sm:py-14 lg:py-16 relative overflow-hidden transition-colors duration-500 ${isDark ? "bg-[#0A1128] text-white" : "bg-white text-gray-900"}`}>
            
            {/* Subtle atmospheric background for dark mode */}
            {isDark && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 bg-blue-600/20" />
              </div>
            )}

            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
              
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10 sm:mb-16">
                <div className="shrink-0">
                  <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.1] ${isDark ? "text-white" : "text-gray-900"}`}>
                    Core Principles
                  </h2>
                </div>
                <div className="flex flex-col lg:items-end gap-6 max-w-xl">
                  <p className={`text-base lg:text-lg leading-relaxed lg:text-left font-medium ${isDark ? "text-gray-300" : "text-[#5A5A5A]"}`}>
                    These foundational values guide our leadership team in every decision, ensuring a culture of innovation, integrity, and relentless dedication to our customers&apos; success.
                  </p>
                </div>
              </div>

              {/* Tabular Grid Section */}
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-t border-b ${isDark ? "border-[#1F2C47]" : "border-gray-200"}`}>
                {leadershipvaluesData.map((value, i) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className={`group py-6 md:py-10 px-6 xl:px-10 flex flex-col items-start gap-5 transition-colors ${
                      isDark ? "hover:bg-[#121B31]/50 border-[#1F2C47]" : "hover:bg-gray-100/50 border-gray-200"
                    } ${getBorderClasses(i)}`}
                  >
                    <div>
                      <h4 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>{value.title}</h4>
                      <p className={`text-sm font-normal leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        {value.description}
                      </p>
                    </div>
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
