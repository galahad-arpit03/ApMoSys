"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { CheckCircle2, Cpu, Shield, Zap } from "lucide-react";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { coreValuesData } from "./CoreValuesData";

const getBorderClasses = (idx: number, total: number) => {
  let classes = "border-gray-200 ";

  if (idx < total - 1) classes += "border-b ";

  if (idx === total - 2) classes += "md:border-b-0 ";
  if (idx % 2 === 0) classes += "md:border-r ";
  else classes += "md:border-r-0 ";

  if (idx >= 4) classes += "lg:border-b-0 ";
  else classes += "lg:border-b ";

  if ((idx + 1) % 4 !== 0) classes += "lg:border-r ";
  else classes += "lg:border-r-0 ";

  return classes;
};

export default function CoreValues() {
  const pathname = usePathname();
  const isEditRoute = pathname?.startsWith("/administrator");
  
  const { content, addAboutCoreValue, deleteAboutCoreValue } = useContentStore();
  const rawValues = content?.about?.coreValues;
  const values = Array.isArray(rawValues) ? rawValues : coreValuesData;
  const totalItems = isEditRoute ? values.length + 1 : values.length;

  return (
    <SectionThemeWrapper sectionId="about_coreValues" defaultTheme="light">
      {() => {
        return (
          <section className="py-12 relative overflow-clip transition-colors duration-300 bg-gray-50 text-gray-900">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 bg-gray-200/50" />
            
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
              <div className="flex flex-col gap-8">
                
                {/* Header - LHS/RHS */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-4 lg:mb-8">
                  <div className="shrink-0">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.1] text-gray-900">
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
                  <div className="flex flex-col lg:items-end gap-6 max-w-xl">
                    <p className="text-base lg:text-lg leading-relaxed lg:text-left text-gray-600 font-medium">
                      <EditableText
                        path="about.coreValues.description"
                        fallback="These foundational principles shape every decision we make, guiding our engineering standards and defining our unyielding commitment to client success."
                        as="span"
                        multiline
                      />
                    </p>
                  </div>
                </div>

                {/* Tabular Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-t border-b border-gray-200">
                  <AnimatePresence mode="popLayout">
                    {values.map((value, i) => (
                      <motion.div
                        key={value.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className={`group relative py-6 md:py-10 px-6 xl:px-10 flex flex-col items-start gap-5 hover:bg-gray-100/50 transition-colors ${getBorderClasses(i, totalItems)}`}
                      >
                        {isEditRoute && (
                          <button
                            onClick={() => deleteAboutCoreValue(value.id)}
                            className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 hover:text-white z-20"
                            title="Delete Core Value"
                          >
                            ×
                          </button>
                        )}
                        

                        
                        <div className="w-full">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            <EditableText
                              path={`about.coreValues.${i}.title`}
                              fallback={value.title}
                              as="span"
                            />
                          </h4>
                          <p className="text-sm font-normal text-gray-600 leading-relaxed">
                            <EditableText
                              path={`about.coreValues.${i}.desc`}
                              fallback={value.desc}
                              as="span"
                              multiline
                            />
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {isEditRoute && (
                    <motion.button
                      layout
                      onClick={addAboutCoreValue}
                      className={`flex flex-col items-center justify-center py-6 md:py-10 px-6 xl:px-10 gap-5 hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-900 ${getBorderClasses(values.length, totalItems)}`}
                    >
                      <div className="shrink-0 w-12 h-12 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-3xl">
                        +
                      </div>
                      <span className="font-semibold text-sm">Add Core Value</span>
                    </motion.button>
                  )}
                </div>

              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
