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
          <section className={`py-10 sm:py-14 lg:py-16 relative overflow-hidden transition-colors duration-500 ${isDark ? "bg-[#0A0A0A]" : "bg-gradient-to-b from-[#F8F9FA] to-white"}`}>
            
            {/* Subtle atmospheric background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/3 ${isDark ? "bg-[#B40001]/10" : "bg-red-100/50"}`} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 lg:mb-24">
                <div>
                  <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                    Core <span className="text-[#B40001]">Principles</span>
                  </h2>
                  <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    These foundational values guide our leadership team in every decision, ensuring a culture of innovation, integrity, and relentless dedication to our customers' success.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {leadershipvaluesData.map((value, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
                    key={value.title}
                    className={`group relative p-8 sm:p-10 rounded-2xl flex flex-col h-full border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                      isDark 
                        ? "bg-[#141414]/90 border-[#2A2A2A] hover:bg-[#1A1A1A] hover:border-[#B40001]/30 hover:shadow-[0_10px_40px_rgba(180,0,1,0.1)]" 
                        : "bg-white/80 border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
                    }`}
                  >
                    <div className="mb-auto relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <span className={`text-lg sm:text-xl font-mono font-bold transition-colors duration-500 ${
                          isDark ? "text-[#B40001]" : "text-[#B40001]"
                        }`}>
                          0{i + 1}.
                        </span>
                        <div className={`h-[1px] flex-1 transition-colors duration-500 ${isDark ? "bg-[#333] group-hover:bg-[#555]" : "bg-gray-200 group-hover:bg-gray-300"}`}></div>
                      </div>
                      
                      <h3 className={`text-2xl font-bold mb-4 tracking-tight transition-colors duration-300 ${
                        isDark ? "text-white group-hover:text-gray-100" : "text-gray-900 group-hover:text-[#B40001]"
                      }`}>
                        {value.title}
                      </h3>
                    </div>

                    <p className={`font-medium leading-relaxed relative z-10 transition-colors duration-300 ${
                      isDark ? "text-gray-400 group-hover:text-gray-300" : "text-gray-500 group-hover:text-gray-700"
                    }`}>
                      {value.description}
                    </p>
                    
                    {/* Faint watermark number behind the text on hover */}
                    <div className={`absolute -bottom-6 -right-4 text-9xl font-black opacity-0 group-hover:opacity-[0.03] transition-all duration-700 pointer-events-none ${isDark ? "text-white" : "text-black"} scale-75 group-hover:scale-100`}>
                      0{i + 1}
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
