"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CareersCTA() {
  return (
    <section className="py-10 lg:py-16 bg-white px-6 sm:px-8 lg:px-16">
      <div className="max-w-[1600px] mx-auto relative rounded-[12px] overflow-hidden shadow-2xl">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/landing/careers-bg.png"
            alt="Office"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#2b4c8f]/60 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-left w-full">
            <span className="text-white/80 font-bold uppercase tracking-widest text-xs sm:text-sm mb-4 block">
              Careers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight leading-tight">
              Build your career with 1400+ engineers.
            </h2>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              Join a team that values craftsmanship, continuous learning and real enterprise impact — across India and the UAE.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="#"
              className="px-8 py-3.5 bg-white text-[#0F172A] rounded-md font-semibold text-sm text-center shadow-lg hover:shadow-xl transition-all"
            >
              View Open Roles
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="#"
              className="px-8 py-3.5 bg-white text-[#0F172A] rounded-md font-semibold text-sm text-center shadow-lg hover:shadow-xl transition-all"
            >
              Life at ApMoSys
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
