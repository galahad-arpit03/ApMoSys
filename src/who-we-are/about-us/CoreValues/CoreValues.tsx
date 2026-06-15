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
    <SectionThemeWrapper sectionId="about_coreValues" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-24 relative overflow-clip transition-colors duration-300 ${isDark ? "bg-[#0D0D0D] text-[#FAFAFA]" : "bg-white text-[#121212]"}`}>
            {/* Decorative Elements */}
            <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 ${isDark ? "bg-red-900/10" : "bg-red-50/50"}`} />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                
                {/* LHS - Sticky Header */}
                <div className="lg:col-span-4 lg:sticky lg:top-28">
                  <div className="text-left relative">
                    <h2 className={`text-4xl md:text-5xl font-black tracking-tight mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                      <EditableText
                        path="about.coreValues.heading1"
                        fallback="Core"
                        as="span"
                      />{' '}
                      <EditableText
                        path="about.coreValues.heading2"
                        fallback="Values"
                        as="span"
                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#B40001] to-red-600"
                      />
                    </h2>
                    <p className={`text-lg font-medium leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      <EditableText
                        path="about.coreValues.description"
                        fallback="These foundational principles shape every decision we make, guiding our engineering standards and defining our unyielding commitment to client success."
                        as="span"
                        multiline
                      />
                    </p>
                  </div>
                </div>

                {/* RHS - Grid of Cards */}
                <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <AnimatePresence mode="popLayout">
                      {values.map((value, i) => (
                        <motion.div
                          key={value.id}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          className={`group relative p-[1px] rounded-md overflow-hidden shadow-sm hover:shadow-xl hover:shadow-red-900/5 transition-all duration-500 ${
                            isDark 
                              ? "bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] hover:from-red-900/30 hover:to-red-900/10" 
                              : "bg-gradient-to-b from-gray-200/50 to-gray-100/50 hover:from-red-300/80 hover:to-red-100"
                          }`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-[#B40001]/0 via-[#B40001]/0 to-[#B40001]/0 group-hover:from-[#B40001]/5 group-hover:to-[#B40001]/10 transition-all duration-500" />
                          
                          {isEditRoute && (
                            <button
                              onClick={() => deleteAboutCoreValue(value.id)}
                              className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-red-100/10 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white z-20"
                              title="Delete Core Value"
                            >
                              ×
                            </button>
                          )}
                          
                          <div className={`relative h-full backdrop-blur-xl p-6 sm:p-8 rounded-md flex flex-col items-start gap-6 transition-colors duration-500 ${
                            isDark ? "bg-[#1A1A1A]/90 group-hover:bg-[#1A1A1A]" : "bg-white/80 group-hover:bg-white/90"
                          }`}>
                            <div className={`flex items-center justify-center w-14 h-14 rounded-2xl shadow-sm group-hover:text-[#B40001] group-hover:scale-110 group-hover:border-red-200 transition-all duration-500 ${
                              isDark ? "bg-[#2A2A2A] border-[#3A3A3A] text-gray-400 group-hover:bg-red-950/30" : "bg-gray-50 border-gray-100 text-gray-400 group-hover:bg-red-50"
                            }`}>
                              {iconMap[value.icon] || <CheckCircle2 className="w-6 h-6" />}
                            </div>
                            
                            <div>
                              <h3 className={`text-xl font-bold mb-3 group-hover:text-[#B40001] transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`}>
                                <EditableText
                                  path={`about.coreValues.${i}.title`}
                                  fallback={value.title}
                                  as="span"
                                />
                              </h3>
                              <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? "text-gray-400 group-hover:text-gray-300" : "text-gray-500 group-hover:text-gray-700"}`}>
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
                        className={`flex flex-col items-center justify-center p-6 sm:p-8 rounded-md border-2 border-dashed transition-colors ${
                          isDark ? "border-[#2A2A2A] hover:border-primary-red/50 text-gray-500 hover:text-primary-red" : "border-gray-200 hover:border-primary-red/50 text-gray-400 hover:text-primary-red"
                        }`}
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
