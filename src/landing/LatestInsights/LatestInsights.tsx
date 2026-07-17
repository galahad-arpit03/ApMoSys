"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const latestInsightsData = [
  {
    id: 1,
    category: "Web Solution",
    title: "Make a better website solution for your product.",
    image: "/assets/news_1.png"
  },
  {
    id: 2,
    category: "UI Interface",
    title: "The Science of Color Contrast – An Expert Designer's Guide",
    image: "/assets/news_2.png"
  },
  {
    id: 3,
    category: "Web Interface",
    title: "SEO Made Simple: A Step by Step Guide for 2026",
    image: "/assets/news_3.png"
  },
  {
    id: 4,
    category: "Interface Design",
    title: "Make a better website solution for your product.",
    image: "/assets/news_4.png"
  },
  {
    id: 5,
    category: "Engineering",
    title: "Zero-Downtime Migration for Financial Systems",
    image: "/assets/news_5.png"
  },
  {
    id: 6,
    category: "Architecture",
    title: "The Future of AI in Enterprise Architecture",
    image: "/assets/news_6.png"
  }
];

export default function LatestInsights() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.scrollWidth / latestInsightsData.length;
      const newIndex = Math.round(scrollLeft / itemWidth);

      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < latestInsightsData.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.scrollWidth / latestInsightsData.length;
      scrollRef.current.scrollTo({ left: itemWidth * index, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-[#F8FAFC] text-[#121212] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black leading-none tracking-tight">
              From the <br /> Newsroom.
            </h2>
          </div>

          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border border-slate-300 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-600 bg-white shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 bg-[#121212]  rounded-full text-white flex items-center justify-center hover:bg-slate-800 transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards Carousel */}
        <style dangerouslySetInnerHTML={{
          __html: `
          .hide-scroll::-webkit-scrollbar { display: none; }
          .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scroll pb-4"
        >
          {latestInsightsData.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-shrink-0 snap-start bg-white overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E8E8E8] group flex flex-col h-full rounded-md"
            >
              <div className="w-full h-48 bg-slate-200 relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${post.image})` }} />
              </div>
              <div className="p-4 lg:p-5 flex flex-col flex-grow">
                <span className="text-xs text-slate-400 font-medium mb-2">{post.category}</span>
                <h3 className="text-base font-semibold text-slate-800 mb-6 leading-relaxed transition-colors group-hover:text-[#2563EB]">
                  {post.title}
                </h3>
                <div className="mt-auto flex items-center text-slate-500 font-semibold text-sm hover:text-[#121212] transition-colors cursor-pointer w-fit group-hover:text-[#2563EB]">
                  Read Blog <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {latestInsightsData.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-[#121212] w-2 h-2' : 'bg-slate-300 w-1.5 h-1.5 hover:bg-slate-400'}`}
              aria-label={`Go to slide ${i + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}
