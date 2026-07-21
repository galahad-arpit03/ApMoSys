"use client";
import { worldmapsectionData } from "./WorldMapSectionData";

import React from "react";
import { motion } from "framer-motion";


export default function WorldMapSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/contact-us/WorldMapSection/world_map.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay — fades in */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        className="absolute inset-0 bg-[#121212]/75"
      />

      {/* Subtle animated pulse ring behind the pin */}
      <div className="relative z-10 flex items-center justify-center min-h-[340px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="bg-[#121212]/80 border border-[#3A3A3A] backdrop-blur-sm rounded-xl p-10 max-w-md w-full mx-4 text-center"
        >
          {/* Animated pin icon */}
          <div className="flex justify-center mb-5">
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Pulse ring */}
              <motion.span
                animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-[#0A1128]/60"
              />
              <div className="relative w-11 h-11 bg-[#0A1128] border border-[#2563EB]/40 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Text block — staggered */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl font-normal text-[#FFFFFF] mb-3"
          >
            ApMoSys Global HQ
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-300 text-base leading-relaxed mb-2"
          >
            ApMoSys Technologies Pvt Ltd
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-400 text-sm leading-relaxed mb-10"
          >
            B-505 &amp; 506 Greenscape Technocity, Next to Country Inn Hotel, Mahape,{" "}
            Navi Mumbai, Maharashtra – 400710
          </motion.p>

          <motion.a
            href="https://www.google.com/maps/place/ApMoSys+Technologies+Pvt+Ltd/@19.1143299,73.0117783,17z/data=!3m2!4b1!5s0x3be7c121d6d1bdc5:0x55f065ca88c1f17e!4m6!3m5!1s0x3be7c08bf79e4fbb:0x189e2a9695ebca54!8m2!3d19.1143299!4d73.0143532!16s%2Fg%2F11t9h1n9ct?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, borderColor: "#2563EB", color: "#2563EB" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.55, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block border border-[#FFFFFF]/30 text-[#FFFFFF] px-8 py-3.5 text-sm font-normal uppercase tracking-widest rounded-sm transition-colors"
          >
            View on Google Maps
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
