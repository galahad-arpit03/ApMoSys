"use client";
import { leadershipvaluesData } from "./LeadershipValuesData";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { motion } from "framer-motion";

export default function LeadershipValues() {
  return (
    <SectionThemeWrapper sectionId="leadership_values" defaultTheme="dark">
      {() => {
        return (
          <section className="py-12 relative overflow-hidden transition-colors duration-500 bg-slate-800 text-white">
            
            {/* Subtle atmospheric background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 bg-slate-600/20" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 lg:mb-24">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6">
                    Core Principles
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 font-medium">
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
                    className="group relative p-8 sm:p-10 rounded-2xl flex flex-col h-full border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-slate-700/50 border-slate-600 hover:bg-slate-700 hover:border-slate-500"
                  >
                    <div className="mb-auto relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-lg sm:text-xl font-mono font-bold transition-colors duration-500 text-gray-400 group-hover:text-white">
                          0{i + 1}.
                        </span>
                        <div className="h-[1px] flex-1 transition-colors duration-500 bg-slate-600 group-hover:bg-slate-500"></div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 tracking-tight transition-colors duration-300 text-white group-hover:text-gray-100">
                        {value.title}
                      </h3>
                    </div>

                    <p className="font-medium leading-relaxed relative z-10 transition-colors duration-300 text-gray-400 group-hover:text-gray-300">
                      {value.description}
                    </p>
                    
                    {/* Faint watermark number behind the text on hover */}
                    <div className="absolute -bottom-6 -right-4 text-9xl font-black opacity-0 group-hover:opacity-[0.03] transition-all duration-700 pointer-events-none text-white scale-75 group-hover:scale-100">
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
