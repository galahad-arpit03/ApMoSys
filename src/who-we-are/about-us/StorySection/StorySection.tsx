"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { storyData } from "./StorySectionData"; // keep for fallback if needed

export default function StorySection() {
  const pathname = usePathname();
  const isEditRoute = pathname?.startsWith("/administrator");
  
  const { content, addAboutStoryCard, deleteAboutStoryCard } = useContentStore();
  const rawCards = content?.about?.storyCards;
  const cards = Array.isArray(rawCards) ? rawCards : storyData.cards;

  return (
    <SectionThemeWrapper sectionId="about_story" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-12 relative transition-colors duration-300 ${isDark ? "bg-[#0D0D0D] text-[#FAFAFA]" : "bg-gradient-to-b from-[#F0F4F8] to-white text-[#121212]"}`}>
            {/* Subtle Background Glows wrapped to prevent overflow without breaking sticky */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 ${isDark ? "bg-red-900/10" : "bg-red-100/40"}`} />
              <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3 ${isDark ? "bg-blue-900/10" : "bg-blue-50/50"}`} />
            </div>
            
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                
                <div className="lg:col-span-4 lg:sticky lg:top-32">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal tracking-tight mb-6 leading-[1.1] text-gray-800">
                    <EditableText
                      path="about.story.heading1"
                      fallback="Our"
                      as="span"
                    />{' '}
                    <EditableText
                      path="about.story.heading2"
                      fallback="Journey"
                      as="span"
                    />
                  </h2>
                  <p className="text-lg font-medium leading-relaxed mb-8 text-black">
                    <EditableText
                      path="about.story.description"
                      fallback="A legacy built on..."
                      as="span"
                      multiline
                    />
                  </p>
                </div>

                <div className="lg:col-span-8 relative">
                  {/* Vertical Timeline Line */}
                  <div className={`absolute left-8 sm:left-10 top-10 bottom-10 w-px ${isDark ? "bg-gradient-to-b from-gray-800 via-[#2A2A2A] to-[#2A2A2A]" : "bg-gradient-to-b from-gray-800 via-gray-300 to-gray-200"}`}></div>
                  
                  <div className="flex flex-col gap-6 sm:gap-8">
                    <AnimatePresence mode="popLayout">
                      {cards.map((card, idx) => (
                        <motion.div 
                          key={card.id}
                          layout
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ delay: idx * 0.1, duration: 0.5 }}
                          className="relative flex items-start group"
                        >
                          {/* Timeline Node */}
                          <div className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center font-black text-2xl sm:text-3xl relative z-10 transition-all duration-500 shadow-sm ${
                            isDark 
                              ? "bg-[#121212] border-4 border-[#1A1A1A] text-gray-500 group-hover:border-gray-600 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]" 
                              : "bg-white border-4 border-gray-50 text-gray-400 group-hover:border-gray-200 group-hover:text-gray-900 group-hover:shadow-lg"
                          }`}>
                            0{idx + 1}
                          </div>
                          
                          {/* Card Content */}
                          <div className={`ml-8 sm:ml-12 flex-1 p-8 sm:p-10 rounded-xl border transition-all duration-500 hover:-translate-y-1 ${
                            isDark 
                              ? "bg-[#1A1A1A] border-[#2A2A2A] hover:bg-[#222]" 
                              : "bg-white/80 backdrop-blur-md border-gray-200/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:bg-white"
                          }`}>
                            {isEditRoute && (
                              <button
                                onClick={() => deleteAboutStoryCard(card.id)}
                                className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#242A56]/10 text-[#242A56] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#242A56]/20"
                                title="Delete Card"
                              >
                                ×
                              </button>
                            )}
                            
                            <h3 className="font-heading font-medium text-2xl md:text-3xl mb-4 transition-colors duration-300 text-gray-700">
                              <EditableText
                                path={`about.storyCards.${idx}.title`}
                                fallback={card.title}
                                as="span"
                              />
                            </h3>
                            <p className="text-base leading-relaxed font-medium text-black">
                              <EditableText
                                path={`about.storyCards.${idx}.content`}
                                fallback={card.content}
                                as="span"
                                multiline
                              />
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    
                    {isEditRoute && (
                      <motion.div layout className="relative flex items-start">
                        <div className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center font-black text-2xl sm:text-3xl relative z-10 border-4 border-dashed ${isDark ? "border-[#2A2A2A] text-gray-600" : "border-gray-200 text-gray-300"}`}>
                          +
                        </div>
                        <button
                          onClick={addAboutStoryCard}
                          className={`ml-8 sm:ml-12 flex-1 flex flex-col items-center justify-center p-8 sm:p-10 rounded-3xl border-2 border-dashed transition-colors ${
                            isDark ? "border-[#2A2A2A] hover:border-[#242A56]/50 text-gray-500 hover:text-[#242A56] bg-[#1A1A1A]/50" : "border-gray-200 hover:border-[#242A56]/50 text-gray-400 hover:text-[#242A56] bg-white/50"
                          }`}
                        >
                          <span className="font-semibold text-lg">Add Story Card</span>
                        </button>
                      </motion.div>
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
