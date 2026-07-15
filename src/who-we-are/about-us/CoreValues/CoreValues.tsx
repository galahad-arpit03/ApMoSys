"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { CheckCircle2, Cpu, Shield, Zap } from "lucide-react";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { coreValuesData } from "./CoreValuesData";

const iconMap: any = {
  CheckCircle2: <CheckCircle2 className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />
};

export default function CoreValues() {
  const pathname = usePathname();
  const isEditRoute = pathname?.startsWith("/administrator");
  
  const { content, addAboutCoreValue, deleteAboutCoreValue } = useContentStore();
  const rawValues = content?.about?.coreValues;
  const values = Array.isArray(rawValues) ? rawValues : coreValuesData;

  return (
    <SectionThemeWrapper sectionId="about_coreValues" defaultTheme="dark">
      {() => {
        return (
          <section className="py-12 relative overflow-clip transition-colors duration-300 bg-slate-800 text-white">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 bg-slate-600/20" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col gap-8">
                
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                  <div className="text-left relative">
                    <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white">
                      <EditableText
                        path="about.coreValues.heading1"
                        fallback="Core"
                        as="span"
                      />{' '}
                      <EditableText
                        path="about.coreValues.heading2"
                        fallback="Values"
                        as="span"
                      />
                    </h2>
                  </div>
                  <div className="text-left lg:text-right relative max-w-2xl">
                    <p className="text-lg font-medium leading-relaxed text-gray-300">
                      <EditableText
                        path="about.coreValues.description"
                        fallback="These foundational principles shape every decision we make, guiding our engineering standards and defining our unyielding commitment to client success."
                        as="span"
                        multiline
                      />
                    </p>
                  </div>
                </div>

                {/* Grid of Cards */}
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AnimatePresence mode="popLayout">
                      {values.map((value, i) => (
                        <motion.div
                          key={value.id}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          className="group relative p-[1px] rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-gradient-to-b from-slate-600/50 to-slate-700/50 hover:from-slate-500 hover:to-slate-600"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/10 transition-all duration-500" />
                          
                          {isEditRoute && (
                            <button
                              onClick={() => deleteAboutCoreValue(value.id)}
                              className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white z-20"
                              title="Delete Core Value"
                            >
                              ×
                            </button>
                          )}
                          
                          <div className="relative h-full backdrop-blur-xl p-6 sm:p-8 rounded-md flex flex-col items-start transition-colors duration-500 bg-slate-800/90 group-hover:bg-slate-800 overflow-hidden">
                            {/* Large Background Number */}
                            <div className="absolute -top-6 -right-6 text-[120px] leading-none font-black text-slate-700/40 group-hover:text-slate-600/50 transition-colors duration-500 select-none pointer-events-none z-0">
                              0{i + 1}
                            </div>
                            
                            <div className="relative z-10 pt-4">
                              <h3 className="font-bold text-xl lg:text-2xl mb-4 transition-colors duration-300 text-white">
                                <EditableText
                                  path={`about.coreValues.${i}.title`}
                                  fallback={value.title}
                                  as="span"
                                />
                              </h3>
                              <p className="text-sm lg:text-base leading-relaxed font-medium text-gray-400">
                                <EditableText
                                  path={`about.coreValues.${i}.desc`}
                                  fallback={value.desc}
                                  as="span"
                                  multiline
                                />
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    
                    {isEditRoute && (
                      <motion.button
                        layout
                        onClick={addAboutCoreValue}
                        className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-md border-2 border-dashed transition-colors border-slate-600 hover:border-slate-400 text-gray-400 hover:text-white"
                      >
                        <span className="text-3xl mb-2">+</span>
                        <span className="font-semibold">Add Core Value</span>
                      </motion.button>
                    )}
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
