"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const timeSlots = ["9:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

export default function TechDeepDive() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const today = new Date().getDay();

  return (
    <section className="bg-[#121212] text-[#FAFAFA] py-20 border-t border-[#1F1F1F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-[#1F1F1F] border border-[#3A3A3A] rounded-xl overflow-hidden"
        >
          <div className="lg:grid lg:grid-cols-12">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-5 p-10 lg:p-12 flex flex-col justify-center border-b border-[#3A3A3A] lg:border-b-0 lg:border-r"
            >
              <span className="text-[#B40001] text-xs font-bold tracking-widest uppercase mb-4 block">
                Direct Access
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] mb-5 leading-tight">
                Book a Technical Deep-Dive.
              </h2>
              <p className="text-[#A0A0A0] text-sm leading-relaxed mb-8">
                60-minute dedicated sessions with our QA architects and automation engineers to evaluate your specific platform needs and deployment goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(180,0,1,0.30)" }}
                  whileTap={{ scale: 0.96 }}
                  className="bg-[#B40001] hover:bg-[#D10000] text-white font-bold px-7 py-3 rounded-md text-sm tracking-wide transition-colors"
                >
                  Schedule Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="border border-[#3A3A3A] hover:border-[#5A5A5A] text-[#A0A0A0] hover:text-[#FAFAFA] font-semibold px-7 py-3 rounded-md text-sm tracking-wide transition-colors"
                >
                  View Engineering Team
                </motion.button>
              </div>
            </motion.div>

            {/* Right Scheduling Widget */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
              className="lg:col-span-7 p-10 lg:p-12"
            >
              <h3 className="text-xs font-bold text-[#7A7A7A] uppercase tracking-widest mb-6">
                Scheduling Planner
              </h3>

              {/* Day Selector */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
                {days.map((day, i) => (
                  <motion.button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.93 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={`flex-shrink-0 px-3 py-2 rounded-md text-xs font-bold transition-colors ${
                      selectedDay === day
                        ? "bg-[#B40001] text-white"
                        : i === today
                        ? "bg-[#3A3A3A] text-[#FAFAFA]"
                        : "bg-[#121212] border border-[#3A3A3A] text-[#7A7A7A] hover:text-[#FAFAFA]"
                    }`}
                  >
                    {day}
                  </motion.button>
                ))}
              </div>

              {/* Time Slots Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {timeSlots.map((slot) => (
                  <motion.button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.93 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={`py-2.5 rounded-md text-xs font-semibold border transition-colors ${
                      selectedSlot === slot
                        ? "bg-[#B40001] border-[#B40001] text-white"
                        : "bg-[#121212] border-[#3A3A3A] text-[#A0A0A0] hover:border-[#B40001] hover:text-[#FAFAFA]"
                    }`}
                  >
                    {slot}
                  </motion.button>
                ))}
              </div>

              <AnimatePresence>
                {selectedSlot && selectedDay && (
                  <motion.div
                    key="confirmation"
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="mt-6 bg-[#B40001]/10 border border-[#B40001]/30 rounded-xl p-4 text-sm text-[#FAFAFA]"
                  >
                    <span className="text-[#B40001] font-bold">✓ Slot Selected:</span>{" "}
                    {selectedDay} at {selectedSlot}{" — "}
                    <button
                      className="underline text-[#B40001] font-semibold"
                      onClick={() => { setSelectedSlot(null); setSelectedDay(null); }}
                    >
                      Clear
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
