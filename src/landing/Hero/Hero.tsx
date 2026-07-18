"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/landing/Hero/1.jpeg",
    title: "Engineering Digital Excellence",
    desc: "Transforming enterprises through AI, Automation, Cloud & Quality Engineering.",
    imageClass: "object-cover object-center",
  },
  {
    src: "/landing/Hero/3.png",
    title: "People Behind Every Innovation",
    desc: "Experienced engineers building next-generation enterprise solutions.",
    imageClass: "object-cover object-center",
  },
  {
    src: "/landing/Hero/4.png",
    title: "Recognized for Excellence",
    desc: "Awards and industry recognition that reflect our commitment to innovation.",
    imageClass: "object-contain py-10",
  },
  {
    src: "/landing/Hero/5.png",
    title: "Trusted by Industry & Government",
    desc: "Collaborating with leaders to shape the future of digital transformation.",
    imageClass: "object-cover object-center",
  },
  {
    src: "/landing/Hero/7.png",
    title: "Innovation Beyond Boundaries",
    desc: "Creating intelligent platforms that solve complex enterprise challenges.",
    imageClass: "object-cover object-center",
  },
  {
    src: "/landing/Hero/8.jpeg",
    title: "Your Technology Partner for Growth",
    desc: "Helping organizations innovate faster, scale smarter, and deliver with confidence.",
    imageClass: "object-cover object-center",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [[page, direction], setPage] = useState([0, 0]);

  // Wrap around index safely
  const imageIndex = Math.abs(page % slides.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const goToSlide = (idx: number) => {
    const currentIdx = Math.abs(page % slides.length);
    const direction = idx > currentIdx ? 1 : -1;
    setPage([page + (idx - currentIdx), direction]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4500);
    return () => clearInterval(timer);
  }, [page]); 

  // Parallax effect: moves the background downwards slightly as the user scrolls down
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden bg-[#0A1128] group">
      {/* Background Carousel with Parallax */}
      <motion.div
        className="absolute inset-0 z-0 origin-top"
        style={{ y: backgroundY }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 w-full h-full"
          >
            {/* The Image */}
            <img
              src={slides[imageIndex].src}
              alt={slides[imageIndex].title}
              className={`absolute inset-0 w-full h-full ${slides[imageIndex].imageClass}`}
            />
            
            {/* Bottom Fade Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/30 to-transparent" />
            
            {/* Slide Text */}
            <div className="absolute bottom-16 lg:bottom-24 left-0 right-0 px-6 sm:px-12 lg:px-24 flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-normal text-white mb-4 drop-shadow-md">
                {slides[imageIndex].title}
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-200 drop-shadow-sm max-w-3xl">
                {slides[imageIndex].desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Optional dark overlay to ensure navbar/content visibility if needed */}
        <div className="absolute inset-0 bg-[#0A1128]/20 pointer-events-none z-10" />
      </motion.div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-4 sm:px-8 pointer-events-none">
        <button 
          onClick={() => paginate(-1)}
          className="w-12 h-12 rounded-full bg-black/20 hover:bg-black/50 border border-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all pointer-events-auto opacity-0 group-hover:opacity-100 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={() => paginate(1)}
          className="w-12 h-12 rounded-full bg-black/20 hover:bg-black/50 border border-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all pointer-events-auto opacity-0 group-hover:opacity-100 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              imageIndex === idx 
                ? "bg-white w-8 h-2.5" 
                : "bg-white/40 hover:bg-white/70 w-2.5 h-2.5"
            }`}
          />
        ))}
      </div>
      
    </section>
  );
}