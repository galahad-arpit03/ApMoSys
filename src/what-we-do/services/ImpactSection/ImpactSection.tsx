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

// Helper to determine border classes based on grid position (4 columns, single row on desktop)
const getBorderClasses = (idx: number, total: number) => {
  let classes = "";

  // Mobile: bottom border for all but last
  if (idx < total - 1) classes += "border-b ";
  else classes += "border-b-0 ";

  // Tablet: bottom border for first two, right border for even indices
  if (idx < 2) classes += "md:border-b ";
  else classes += "md:border-b-0 ";
  if (idx % 2 === 0 && idx + 1 < total) classes += "md:border-r ";
  else classes += "md:border-r-0 ";

  // Desktop: single row, no bottom border, right border for first three
  classes += "lg:border-b-0 ";
  if (idx < total - 1) classes += "lg:border-r ";
  else classes += "lg:border-r-0 ";

  return classes;
};

export default function ImpactSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#0A1128] border-t border-[#1A264A] relative overflow-hidden">
      {/* Subtle atmospheric background for dark mode */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 bg-blue-600/20" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3 bg-blue-600/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Header - Like LeadershipValues */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10 sm:mb-16">
          <div className="shrink-0">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.1] text-white">
              Quantifiable Technical Impact
            </h2>
          </div>
          <div className="flex flex-col lg:items-end gap-6 max-w-xl">
            <p className="text-base lg:text-lg leading-relaxed lg:text-left font-medium text-gray-300">
              Our engineering solutions deliver measurable outcomes that drive business value and operational excellence.
            </p>
          </div>
        </div>

        {/* Tabular Grid - Single Row (4 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-t border-b border-[#1A264A]">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className={`group py-6 md:py-10 px-6 xl:px-10 flex flex-col items-start gap-3 transition-colors hover:bg-white/[0.02] ${getBorderClasses(
                  idx,
                  metrics.length
                )}`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-md bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                {/* Value with Counter */}
                <div className="text-white">
                  <Counter end={metric.value} suffix={metric.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-sm font-bold text-gray-200 group-hover:text-[#2563EB] transition-colors">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}