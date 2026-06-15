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
          <section className={`py-24 transition-colors duration-300 ${isDark ? "bg-[#121212] text-[#FAFAFA]" : "bg-[#F8F9FA] text-[#121212]"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                
                <div className="lg:col-span-4 lg:sticky lg:top-32">
                  <h2 className={`text-4xl lg:text-5xl font-black tracking-tight mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                    <EditableText
                      path="about.story.heading1"
                      fallback="Our"
                      as="span"
                    />{' '}
                    <EditableText
                      path="about.story.heading2"
                      fallback="Story"
                      as="span"
                      className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-red-500"
                    />
                  </h2>
                  <p className={`text-base leading-relaxed mb-8 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                    <EditableText
                      path="about.story.description"
                      fallback="A legacy built on..."
                      as="span"
                      multiline
                    />
                  </p>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                  <AnimatePresence mode="popLayout">
                    {cards.map((card, idx) => (
                      <motion.div 
                        key={card.id}
                        layout
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        className={`group relative p-8 lg:p-10 rounded-2xl border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                          isDark ? "bg-[#1A1A1A] border-[#2A2A2A]" : "bg-white border-gray-100"
                        }`}
                      >
                        {isEditRoute && (
                          <button
                            onClick={() => deleteAboutStoryCard(card.id)}
                            className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200"
                            title="Delete Card"
                          >
                            ×
                          </button>
                        )}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 font-bold text-xl transition-all duration-300 ${
                          isDark ? "bg-[#2A2A2A] text-gray-400 group-hover:bg-[#3A3A3A] group-hover:text-white" : "bg-gray-50 text-gray-400 group-hover:bg-gray-200 group-hover:text-black"
                        }`}>
                          0{idx + 1}
                        </div>
                        <h3 className={`font-bold text-xl mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                          <EditableText
                            path={`about.storyCards.${idx}.title`}
                            fallback={card.title}
                            as="span"
                          />
                        </h3>
                        <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                          <EditableText
                            path={`about.storyCards.${idx}.content`}
                            fallback={card.content}
                            as="span"
                            multiline
                          />
                        </p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {isEditRoute && (
                    <motion.button
                      layout
                      onClick={addAboutStoryCard}
                      className={`flex flex-col items-center justify-center p-8 lg:p-10 rounded-2xl border-2 border-dashed transition-colors ${
                        isDark ? "border-[#2A2A2A] hover:border-primary-red/50 text-gray-500 hover:text-primary-red" : "border-gray-200 hover:border-primary-red/50 text-gray-400 hover:text-primary-red"
                      }`}
                    >
                      <span className="text-3xl mb-2">+</span>
                      <span className="font-semibold">Add Story Card</span>
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
