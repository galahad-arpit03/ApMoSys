// src/what-we-do/services/ImpactSection/ImpactSection.tsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Shield, Gauge, DollarSign } from "lucide-react";

const metrics = [
  {
    value: 40,
    suffix: "%",
    label: "Reduced Time to Market",
    description: "Faster delivery cycles with automated pipelines and agile processes",
    icon: TrendingUp,
  },
  {
    value: 99.9,
    suffix: "%",
    label: "System Reliability",
    description: "Enterprise-grade uptime with proactive monitoring and AIOps",
    icon: Shield,
  },
  {
    value: 3.5,
    suffix: "x",
    label: "Faster Deployment",
    description: "Accelerated release cycles with CI/CD and infrastructure as code",
    icon: Gauge,
  },
  {
    value: 60,
    suffix: "%",
    label: "Cost Reduction",
    description: "Optimized cloud spend and operational efficiency at scale",
    icon: DollarSign,
  },
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
    <span ref={ref} className="text-5xl sm:text-6xl font-light tracking-tight">
      {count}
      <span className="text-[#2563EB]">{suffix}</span>
    </span>
  );
};

export default function ImpactSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#0A1128] border-t border-[#1A264A] relative overflow-hidden">
      {/* Background Glows - Keep blue theme */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            {/* <span className="text-[#2563EB] uppercase tracking-[0.25em] text-xs font-semibold">
              Measurable Impact
            </span> */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-white mt-4 leading-[1.1]">
              Quantifiable Technical Impact
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Our engineering solutions deliver measurable outcomes that drive business value and operational excellence.
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative bg-[#121B38] border border-[#1A264A] rounded-md p-8 hover:border-[#2563EB]/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.05)] transition-all"
              >
                {/* Unified Blue Top Border on Hover */}
                <div className="absolute inset-x-0 top-0 h-0.5 bg-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-md" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-md bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] mb-5 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                {/* Value */}
                <div className="text-white mb-1">
                  <Counter end={metric.value} suffix={metric.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-sm font-bold text-gray-200 mb-2">{metric.label}</h3>

                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed">{metric.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}