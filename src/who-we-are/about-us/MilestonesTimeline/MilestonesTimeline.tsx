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

                <div className="lg:col-span-8 overflow-hidden">
                  <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-0 pb-8 pt-4">
                    {milestones.map((ms, originalIdx) => ({ ms, originalIdx })).reverse().map(({ ms, originalIdx: idx }, mappedIdx) => {
                      const isActive = mappedIdx === 0;
                      return (
                        <div key={ms.id} className="min-w-[320px] shrink-0 snap-start flex flex-col relative group border-l-0">
                          {/* Year & Subtitle */}
                          <div className="mb-6 px-4">
                            <div className={`text-5xl tracking-tight mb-2 transition-colors ${isActive ? (isDark ? "text-white font-medium" : "text-black font-medium") : "text-gray-400 font-light group-hover:text-gray-500"}`}>
                              <EditableText path={`about.milestones.${idx}.year`} fallback={ms.year} as="span" />
                            </div>
                            <div className={`text-sm font-semibold tracking-wide uppercase transition-colors ${isActive ? (isDark ? "text-gray-300" : "text-gray-800") : "text-gray-400 group-hover:text-gray-500"}`}>
                              <EditableText path={`about.milestones.${idx}.title`} fallback={ms.title} as="span" />
                            </div>
                          </div>

                          {/* Scale Line with Ticks */}
                          <div className={`flex border-t relative h-16 w-full ${isDark ? "border-gray-800" : "border-gray-200"}`}>
                            {/* Main vertical tick for the year */}
                            <div className={`absolute left-0 top-0 h-full w-[2px] ${isActive ? "bg-primary-red" : (isDark ? "bg-gray-700" : "bg-gray-300")}`}></div>
                            
                            {/* Small tick marks */}
                            <div className="w-full flex justify-between px-1 pt-0">
                              {Array.from({length: 12}).map((_, i) => (
                                <div key={i} className={`w-[1px] h-8 mt-0 ${isActive ? (isDark ? "bg-gray-600" : "bg-gray-400") : (isDark ? "bg-gray-800" : "bg-gray-200")}`}></div>
                              ))}
                            </div>
                          </div>

                          {/* Content & Image */}
                          <div className="px-4 mt-6 pr-8">
                            <div className={`text-sm mb-6 leading-relaxed flex flex-col gap-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                              {ms.items.map((item, i) => (
                                <p key={i}>
                                  <EditableText path={`about.milestones.${idx}.items.${i}`} fallback={item} as="span" multiline />
                                </p>
                              ))}
                            </div>
                            <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden relative shadow-sm">
                               <img src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=300&seed=${ms.year}`} alt={ms.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                          </div>

                          {isEditRoute && (
                            <button onClick={() => deleteAboutMilestone(ms.id)} className="absolute right-4 top-0 text-red-500 hover:text-red-700 text-xl font-bold" title="Delete Milestone">×</button>
                          )}
                        </div>
                      );
                    })}

                    {isEditRoute && (
                      <div className="min-w-[320px] shrink-0 flex items-center justify-center p-8">
                        <button
                          onClick={addAboutMilestone}
                          className={`w-full h-full min-h-[300px] flex flex-col items-center justify-center gap-4 border-2 border-dashed rounded-xl text-lg font-bold transition-all cursor-pointer ${
                            isDark ? "border-[#2A2A2A] hover:border-primary-red/50 text-[#FAFAFA] hover:text-primary-red" : "border-[#E8E8E8] hover:border-primary-red/50 text-[#121212] hover:text-primary-red"
                          }`}
                        >
                          <span className="text-4xl">+</span> Add Milestone
                        </button>
                      </div>
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
