"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Shield, Award, CheckCircle } from "lucide-react";

const achievementMetrics = [
  {
    value: 35,
    suffix: "+",
    label: "Global Industry Awards",
    description: "Honored for innovation, delivery quality, and cloud leadership",
    icon: Trophy,
  },
  {
    value: 100,
    suffix: "%",
    label: "Audit Success Rate",
    description: "Zero non-conformances across multi-year regulatory audits",
    icon: Shield,
  },
  {
    value: 15,
    suffix: "+",
    label: "Security Certifications",
    description: "ISO, SOC 2, HIPAA, CMMI, and partner cloud credentials",
    icon: Award,
  },
  {
    value: 250,
    suffix: "+",
    label: "Enterprise Clients",
    description: "Trusting ApMoSys for mission-critical software assurance",
    icon: CheckCircle,
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
    <span ref={ref} className="text-5xl sm:text-6xl font-light tracking-tight text-white">
      {count}
      <span className="text-gray-300">{suffix}</span>
    </span>
  );
};

const getBorderClasses = (idx: number, total: number) => {
  let classes = "";

  if (idx < total - 1) classes += "border-b ";
  else classes += "border-b-0 ";

  if (idx < 2) classes += "md:border-b ";
  else classes += "md:border-b-0 ";
  if (idx % 2 === 0 && idx + 1 < total) classes += "md:border-r ";
  else classes += "md:border-r-0 ";

  classes += "lg:border-b-0 ";
  if (idx < total - 1) classes += "lg:border-r ";
  else classes += "lg:border-r-0 ";

  return classes;
};

export default function PartnerAccoladesWall() {
  return (
    <section id="awards-impact" className="py-10 lg:py-16 bg-[#0A1128] border-t border-[#1A264A] relative overflow-hidden">
      {/* Subtle atmospheric background for dark mode */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 bg-blue-600/10" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Split Header - Single-colored Heading */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10 sm:mb-16">
          <div className="shrink-0">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.1] text-white">
              Quantifiable Achievement & Trust
            </h2>
          </div>
          <div className="flex flex-col lg:items-end gap-6 max-w-xl">
            <p className="text-base lg:text-lg leading-relaxed lg:text-left font-medium text-gray-300">
              Backed by independent benchmark audits, global security accreditations, and long-term client trust.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-t border-b border-[#1A264A]">
          {achievementMetrics.map((metric, idx) => {
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
                  achievementMetrics.length
                )}`}
              >
                <div className="w-12 h-12 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0A1128] transition-colors">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                <div className="text-white">
                  <Counter end={metric.value} suffix={metric.suffix} />
                </div>

                <h3 className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">
                  {metric.label}
                </h3>

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
