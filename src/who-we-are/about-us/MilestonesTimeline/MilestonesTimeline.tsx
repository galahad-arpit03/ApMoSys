"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const reversedMilestones = milestones.map((ms, originalIdx) => ({ ms, originalIdx })).reverse();

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current && scrollContainerRef.current.children.length > 0) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const card = scrollContainerRef.current.children[0] as HTMLElement;
      const cardWidth = card.clientWidth;
      const newActiveIdx = Math.round(scrollLeft / cardWidth);
      if (newActiveIdx !== activeIdx && newActiveIdx >= 0 && newActiveIdx < reversedMilestones.length) {
        setActiveIdx(newActiveIdx);
      }
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current && scrollContainerRef.current.children.length > 0) {
      const card = scrollContainerRef.current.children[0] as HTMLElement;
      const cardWidth = card.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveIdx(index);
    }
  };

  return (
    <SectionThemeWrapper sectionId="about_milestones" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-24 relative border-t transition-colors duration-300 ${isDark ? "bg-[#121212] border-[#2A2A2A] text-[#FAFAFA]" : "bg-white border-gray-100 text-[#121212]"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative">
                {/* LHS - Header Content */}
                <div className="lg:col-span-4">
                  <div className="text-left relative">
                    <h2 className={`text-4xl md:text-5xl font-medium tracking-tight mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
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

                <div className="lg:col-span-8 overflow-hidden relative">
                  {/* Navigation Arrows */}
                  <div className="flex justify-end gap-3 mb-4 pr-4">
                    <button 
                      onClick={() => scrollToIndex(Math.max(0, activeIdx - 1))}
                      disabled={activeIdx === 0}
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                        activeIdx === 0 
                          ? (isDark ? "border-gray-800 text-gray-700 cursor-not-allowed" : "border-gray-200 text-gray-300 cursor-not-allowed") 
                          : (isDark ? "border-gray-600 text-white hover:bg-gray-800 hover:border-gray-400" : "border-gray-300 text-black hover:bg-gray-50 hover:border-gray-400")
                      }`}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => scrollToIndex(Math.min(reversedMilestones.length - 1, activeIdx + 1))}
                      disabled={activeIdx === reversedMilestones.length - 1}
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                        activeIdx === reversedMilestones.length - 1 
                          ? (isDark ? "border-gray-800 text-gray-700 cursor-not-allowed" : "border-gray-200 text-gray-300 cursor-not-allowed") 
                          : (isDark ? "border-gray-600 text-white hover:bg-gray-800 hover:border-gray-400" : "border-gray-300 text-black hover:bg-gray-50 hover:border-gray-400")
                      }`}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div 
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-0 pb-8 pt-4 scroll-smooth"
                  >
                    {reversedMilestones.map(({ ms, originalIdx: idx }, mappedIdx) => {
                      const isActive = mappedIdx === activeIdx;
                      return (
                        <div key={ms.id} className="w-[85%] sm:w-[65%] lg:w-[60%] shrink-0 snap-start flex flex-col relative group border-l-0">
                          {/* Year & Subtitle */}
                          <div className="mb-6 px-6">
                            <div className={`text-5xl tracking-tight mb-2 transition-colors ${isActive ? (isDark ? "text-white font-medium" : "text-black font-medium") : "text-gray-400 font-light group-hover:text-gray-500"}`}>
                              <EditableText path={`about.milestones.${idx}.year`} fallback={ms.year} as="span" />
                            </div>
                            <div className={`text-sm font-semibold tracking-wide uppercase transition-colors ${isActive ? (isDark ? "text-gray-300" : "text-gray-800") : "text-gray-400 group-hover:text-gray-500"}`}>
                              <EditableText path={`about.milestones.${idx}.title`} fallback={ms.title} as="span" />
                            </div>
                          </div>

                          {/* Scale Line with Ticks */}
                          <div className={`flex border-t relative h-12 w-full ${isDark ? "border-gray-800" : "border-gray-200"}`}>
                            {/* Main vertical tick for the year */}
                            <div className={`absolute left-0 top-0 h-full w-[3px] ${isActive ? "bg-primary-red" : (isDark ? "bg-gray-600" : "bg-gray-300")}`}></div>
                            
                            {/* Small tick marks */}
                            <div className="w-full flex justify-evenly ml-[3px] pt-0">
                              {Array.from({length: 10}).map((_, i) => (
                                <div key={i} className={`w-[1px] h-4 ${isActive ? (isDark ? "bg-gray-700" : "bg-gray-300") : (isDark ? "bg-gray-800" : "bg-gray-200")}`}></div>
                              ))}
                            </div>
                          </div>

                          {/* Content & Image */}
                          <div className="px-6 mt-6 pr-8 flex flex-col h-full">
                            <div className={`text-base mb-8 leading-relaxed line-clamp-2 min-h-[48px] ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                              {ms.items.map((item, i) => (
                                <div key={i} className="mb-1 last:mb-0">
                                  <EditableText path={`about.milestones.${idx}.items.${i}`} fallback={item} as="span" />
                                </div>
                              ))}
                            </div>
                            <div className="w-full h-[220px] shrink-0 bg-gray-100 rounded-xl overflow-hidden relative shadow-sm mt-auto">
                               <img src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400&seed=${ms.year}`} alt={ms.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
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
