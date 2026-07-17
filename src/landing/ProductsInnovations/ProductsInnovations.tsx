"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const productsData = [
  {
    id: "cliqtest",
    name: "CliQTest",
    description: "Enterprise-grade intelligent test automation platform engineered for scale.",
    features: ["Zero-code automation", "AI-driven test insights", "Seamless CI/CD"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "shieldvue",
    name: "ShieldVue",
    description: "Comprehensive cybersecurity and dynamic vulnerability management.",
    features: ["Real-time threat intel", "Continuous monitoring", "Automated compliance"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "aptmt",
    name: "APTMT",
    description: "Advanced performance testing and deep-dive monitoring toolkit.",
    features: ["Load simulation", "Root-cause analysis", "Custom reporting"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "ruambot",
    name: "RUAMBOT",
    description: "Intelligent RPA solution for automating complex enterprise workflows.",
    features: ["Cognitive automation", "Deep process mining", "Scalable bot networks"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "protean",
    name: "Protean",
    description: "Dynamic cloud infrastructure provisioning and unified management.",
    features: ["Multi-cloud orchestration", "Cost optimization", "Policy-as-code security"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "lighthouse",
    name: "LightHouse",
    description: "Data-driven analytics dashboard designed for strategic enterprise foresight.",
    features: ["Predictive analytics", "Executive KPIs", "Real-time streaming"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
  },
];

export default function ProductsInnovations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollTo({ left: scrollLeft + clientWidth / 3, behavior: "smooth" });
        }
      }
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - LHS/RHS Split with Navigation */}
        <div className="mb-8 lg:mb-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          {/* Left Side: Heading */}
          <div className="shrink-0">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-[1.1]">
              Products & <br className="hidden lg:block" />
              <span>Innovations</span>
            </h2>
          </div>
          
          {/* Right Side: Paragraph & Arrows */}
          <div className="flex flex-col lg:items-end gap-6 max-w-xl">
            <p className="text-base lg:text-lg leading-relaxed text-[#5A5A5A] lg:text-left">
              Discover our suite of enterprise-grade platforms engineered to accelerate automation, fortify security, and scale your digital operations with AI-driven precision.
            </p>
            
            {/* Navigation Arrows */}
            <div className="flex gap-4 shrink-0">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <style dangerouslySetInnerHTML={{ __html: `
          .hide-scroll::-webkit-scrollbar { display: none; }
          .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scroll pb-8"
        >
          {productsData.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start bg-white rounded-md border border-gray-200 overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-video overflow-hidden bg-slate-100 shrink-0 cursor-pointer">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url(${product.image})` }} 
                />
                {/* Fade Overlay */}
                <div className="absolute inset-0 bg-[#0A1128]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover Arrow Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-xl">
                  <ArrowUpRight className="w-5 h-5 text-[#2563EB]" />
                </div>
              </div>

              {/* Content Container (Reduced padding) */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2563EB] transition-colors">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">{product.description}</p>
                
                {/* Features List */}
                <ul className="space-y-2.5 mb-2 mt-auto">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span className="text-[13px] font-medium text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
