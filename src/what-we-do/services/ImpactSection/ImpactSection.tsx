"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

export default function ImpactSection() {
  const pathname = usePathname();
  const isEditRoute = pathname?.startsWith("/administrator");

  // Default stats data
  const defaultStats = [
    { value: "40%", label: "REDUCED TIME TO MARKET" },
    { value: "99.9%", label: "SYSTEM RELIABILITY" },
    { value: "3.5x", label: "FASTER DEPLOYMENT" },
    { value: "60%", label: "COST REDUCTION" },
  ];

  // In the future, this can be fetched from the store
  // For now, we keep it static as it's likely not intended to be editable per stat
  const stats = defaultStats;

  return (
    <SectionThemeWrapper sectionId="services_impact" defaultTheme="dark">
      {() => {
        return (
          <section className="py-12 relative overflow-clip transition-colors duration-300 bg-slate-800 text-white">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none -translate-y-1/3 -translate-x-1/3 bg-slate-600/20" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none translate-y-1/3 translate-x-1/3 bg-slate-600/20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col gap-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                  <div className="text-left relative">
                    <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white">
                      <EditableText
                        path="services.impact.heading"
                        fallback="Quantifiable Technical Impact"
                        as="span"
                      />
                    </h2>
                  </div>
                  <div className="text-left lg:text-right relative max-w-2xl">
                    <p className="text-lg font-medium leading-relaxed text-gray-300">
                      <EditableText
                        path="services.impact.description"
                        fallback="Our engineering solutions deliver measurable outcomes that drive business value and operational excellence."
                        as="span"
                        multiline
                      />
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="group relative p-[1px] rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-gradient-to-b from-slate-600/50 to-slate-700/50 hover:from-slate-500 hover:to-slate-600"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/10 transition-all duration-500" />

                        <div className="relative h-full backdrop-blur-xl p-6 sm:p-8 rounded-md flex flex-col items-center justify-center text-center transition-colors duration-500 bg-slate-800/90 group-hover:bg-slate-800 overflow-hidden">
                          {/* Large Background Number */}
                          <div className="absolute -top-6 -right-6 text-[100px] leading-none font-black text-slate-700/40 group-hover:text-slate-600/50 transition-colors duration-500 select-none pointer-events-none z-0">
                            0{idx + 1}
                          </div>

                          <div className="relative z-10 pt-4 w-full">
                            <div className="text-4xl sm:text-5xl lg:text-6xl font-sans font-light tracking-tight mb-2 text-white">
                              <EditableText
                                path={`services.impact.stat${idx + 1}Value`}
                                fallback={stat.value}
                                as="span"
                              />
                            </div>
                            {/* Label - fixed contrast */}
                            <div className="text-[10px] sm:text-xs font-manrope font-semibold tracking-[0.2em] uppercase text-gray-300">
                              <EditableText
                                path={`services.impact.stat${idx + 1}Label`}
                                fallback={stat.label}
                                as="span"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}