"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { milestonesData } from "./MilestonesTimelineData";

export default function MilestonesTimeline() {
  const pathname = usePathname();
  const isEditRoute = pathname?.startsWith("/administrator");
  
  const { content, addAboutMilestone, deleteAboutMilestone } = useContentStore();
  const rawMilestones = content?.about?.milestones;
  const milestones = Array.isArray(rawMilestones) ? rawMilestones : milestonesData;

  return (
    <SectionThemeWrapper sectionId="about_milestones" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-24 relative border-t transition-colors duration-300 ${isDark ? "bg-[#121212] border-[#2A2A2A] text-[#FAFAFA]" : "bg-white border-gray-100 text-[#121212]"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative">
                {/* LHS - Header Content */}
                <div className="lg:col-span-4 lg:sticky lg:top-28">
                  <div className="text-left relative">
                    <h2 className={`text-4xl md:text-5xl font-black tracking-tight mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                      <EditableText
                        path="about.milestones.heading1"
                        fallback="Milestones"
                        as="span"
                      />{' '}
                      <EditableText
                        path="about.milestones.heading2"
                        fallback="Achieved"
                        as="span"
                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#B40001] to-red-600"
                      />
                    </h2>
                    <p className={`text-lg font-medium leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      <EditableText
                        path="about.milestones.description"
                        fallback="A legacy of technical excellence, continuous growth, and industry-defining innovation since 2012."
                        as="span"
                        multiline
                      />
                    </p>
                  </div>
                </div>

                {/* RHS - Timeline */}
                <div className="lg:col-span-8">
                  <div className="relative">
                    {/* Vertical tracking line */}
                    <div className="absolute left-[20px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-red-200/60 sm:-translate-x-1/2" />

                    <div className="space-y-12 sm:space-y-16">
                      <AnimatePresence mode="popLayout">
                        {milestones.map((ms, idx) => {
                          const isEven = idx % 2 === 0;
                          return (
                            <motion.div
                              key={ms.id}
                              layout
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.4 }}
                              className="relative flex flex-col sm:flex-row items-center w-full group"
                            >
                              <div className="absolute left-[10px] sm:left-1/2 w-[22px] h-[22px] rounded-md bg-[#B40001] shadow-[0_2px_8px_rgba(180,0,1,0.4)] flex items-center justify-center sm:-translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110" />

                              <div className={`w-full sm:w-1/2 pl-16 sm:pl-0 sm:pr-12 flex ${isEven ? 'justify-end' : 'justify-start'} items-center`}>
                                {isEven ? (
                                  <div className={`hidden sm:block text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter select-none ${isDark ? "text-[#2A2A2A]" : "text-gray-200"}`}>
                                    <EditableText path={`about.milestones.${idx}.year`} fallback={ms.year} as="span" />
                                  </div>
                                ) : (
                                  <div className="bg-[#B40001] p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow w-full relative">
                                    {isEditRoute && (
                                      <button onClick={() => deleteAboutMilestone(ms.id)} className="absolute right-4 top-4 text-white/50 hover:text-white" title="Delete Milestone">×</button>
                                    )}
                                    <div className="sm:hidden text-4xl font-black text-white/40 mb-4 select-none">
                                      <EditableText path={`about.milestones.${idx}.year`} fallback={ms.year} as="span" />
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-3">
                                      <EditableText path={`about.milestones.${idx}.title`} fallback={ms.title} as="span" />
                                    </h3>
                                    <ul className="space-y-2 text-white/90 text-sm leading-relaxed">
                                      {ms.items.map((item, i) => (
                                        <li key={i} className="flex gap-2 items-start">
                                          <span className="text-white/60 mt-1 shrink-0">•</span>
                                          <span><EditableText path={`about.milestones.${idx}.items.${i}`} fallback={item} as="span" multiline /></span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>

                              <div className={`w-full sm:w-1/2 pl-16 sm:pl-12 flex ${isEven ? 'justify-start' : 'justify-start'} items-center mt-6 sm:mt-0`}>
                                {isEven ? (
                                  <div className="bg-[#B40001] p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow w-full relative">
                                    {isEditRoute && (
                                      <button onClick={() => deleteAboutMilestone(ms.id)} className="absolute right-4 top-4 text-white/50 hover:text-white" title="Delete Milestone">×</button>
                                    )}
                                    <div className="sm:hidden text-4xl font-black text-white/40 mb-4 select-none">
                                      <EditableText path={`about.milestones.${idx}.year`} fallback={ms.year} as="span" />
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-3">
                                      <EditableText path={`about.milestones.${idx}.title`} fallback={ms.title} as="span" />
                                    </h3>
                                    <ul className="space-y-2 text-white/90 text-sm leading-relaxed">
                                      {ms.items.map((item, i) => (
                                        <li key={i} className="flex gap-2 items-start">
                                          <span className="text-white/60 mt-1 shrink-0">•</span>
                                          <span><EditableText path={`about.milestones.${idx}.items.${i}`} fallback={item} as="span" multiline /></span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ) : (
                                  <div className={`hidden sm:block text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter select-none ${isDark ? "text-[#2A2A2A]" : "text-gray-200"}`}>
                                    <EditableText path={`about.milestones.${idx}.year`} fallback={ms.year} as="span" />
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>

                      {isEditRoute && (
                        <motion.button
                          layout
                          onClick={addAboutMilestone}
                          className={`w-full flex items-center justify-center gap-2 border-2 border-dashed py-6 rounded-xl text-lg font-bold transition-all cursor-pointer mt-8 ${
                            isDark ? "border-[#2A2A2A] hover:border-primary-red/50 text-[#FAFAFA] hover:text-primary-red" : "border-[#E8E8E8] hover:border-primary-red/50 text-[#121212] hover:text-primary-red"
                          }`}
                        >
                          <span className="text-3xl">+</span> Add Milestone
                        </motion.button>
                      )}
                    </div>
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
