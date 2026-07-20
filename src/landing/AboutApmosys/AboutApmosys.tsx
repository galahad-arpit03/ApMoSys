"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const STATS_DATA = [
  { value: "15+", label: "Countries" },
  { value: "1.4k+", label: "Global Engineers" },
  { value: "4", label: "Core Values" },
  { value: "24/7", label: "Enterprise Support" }
];

export default function AboutApmosys() {
  return (
    <section className="py-10 lg:py-16 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">

        {/* Header - LHS/RHS Split */}
        <div className="mb-8 lg:mb-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          {/* Left Side: Heading */}
          <div className="shrink-0">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-[1.1]">
              Engineering <br className="hidden lg:block" /> Digital Excellence
            </h2>
          </div>

          {/* Right Side: Paragraph & CTA */}
          <div className="flex flex-col lg:items-end gap-6 max-w-xl">
            <p className="text-base lg:text-lg leading-relaxed text-[#5A5A5A] lg:text-left">
              We architect scalable, secure, and intelligent solutions that simplify complex enterprise challenges. Experience seamless technology designed to fit effortlessly into your business model.
            </p>
            <div className="w-full lg:text-left flex lg:justify-start">
              <button className="group flex items-center gap-2 bg-[#2563EB] text-white px-7 py-3 rounded-md font-bold text-sm hover:bg-blue-700 transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                Discover Our Story
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Single Combined Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full rounded-xl overflow-hidden group border border-gray-100"
        >
          {/* Optimized Next.js Background Image */}
          <Image
            src="/assets/images/abstract-waves.png"
            alt="Abstract Waves Background"
            fill
            quality={90}
            className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1600px"
          />

          {/* Overlay Layer */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/20 via-transparent to-transparent pointer-events-none" />

          {/* Inner Content Container */}
          <div className="relative z-10 p-4 md:p-5 lg:p-6 flex flex-col gap-5 md:gap-6">

            {/* Mission & Vision Boxes (Glassmorph) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {/* Mission */}
              <div className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-xl p-4 md:p-5 shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex flex-col justify-center">
                <h4 className="font-heading text-xl md:text-2xl font-normal text-black mb-2 md:mb-3">Our Mission</h4>
                <p className="text-[#333333] text-base font-normal md:text-lg leading-relaxed">
                  To architect and deliver exceptional engineering solutions that accelerate digital transformation, enhance operational efficiency, and create measurable, long-term business value for our enterprise clients globally. We are deeply committed to pushing the boundaries of what is possible through continuous innovation, agile methodologies, and flawless execution.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-xl p-4 md:p-5 shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex flex-col justify-center">
                <h4 className="font-heading text-xl md:text-2xl font-normal text-black mb-2 md:mb-3">Our Vision</h4>
                <p className="text-[#333333] font-normal text-base md:text-lg leading-relaxed">
                  To be the world&apos;s most trusted and forward-thinking technology partner, globally recognized for our relentless innovation, uncompromising quality, and steadfast commitment to shaping the future of enterprise software. We envision a business landscape where technology seamlessly bridges the gap between complex challenges and elegant, scalable solutions.
                </p>
              </div>
            </div>

            {/* 4 Stats Strip (Rendered via Map) - Now inside the card */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {STATS_DATA.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-md border border-white/70 rounded-xl p-3 md:p-4 shadow-[0_4px_16px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center transition-all hover:bg-white/80"
                >
                  <div className="text-xl md:text-2xl font-bold text-[#000000] mb-1">{stat.value}</div>
                  <div className="text-[#333333] text-[10px] md:text-xs font-semibold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
