"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { id: 1, end: 15, suffix: "+", label: "Years of Excellence" },
  { id: 2, end: 1400, suffix: "+", label: "Global Engineers" },
  { id: 3, end: 50, suffix: "+", label: "Enterprise Clients" },
  { id: 4, end: 99, suffix: "%", label: "Client Retention" },
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2">
      {count}
      <span className="text-[#3B82F6]">{suffix}</span>
    </div>
  );
};

export default function SuccessMetrics() {
  return (
    <section className="py-10 lg:py-16 bg-[#0F172A] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 w-full">
          {metrics.map((metric, idx) => (
            <motion.div 
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <Counter end={metric.end} suffix={metric.suffix} />
              <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest max-w-[150px]">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
