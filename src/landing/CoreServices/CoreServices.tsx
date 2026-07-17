"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Settings,
  Gauge,
  Code2,
  Infinity as InfinityIcon,
  Monitor,
  ShieldAlert,
  Bot,
  Headset,
  Cloud,
  BarChart3,
  BrainCircuit,
  ArrowRight
} from "lucide-react";

const services = [
  { id: 1, name: "Quality Engineering", desc: "Delivering defect-free, high-quality software solutions.", icon: ShieldCheck },
  { id: 2, name: "Automation Testing", desc: "Accelerate release cycles with intelligent test automation.", icon: Settings },
  { id: 3, name: "Performance Engineering", desc: "Ensure scalability, speed, and reliability under any load.", icon: Gauge },
  { id: 4, name: "Application Development", desc: "Custom-built applications designed for your business.", icon: Code2 },
  { id: 5, name: "DevOps & CI/CD", desc: "Streamline delivery with automation and continuous improvement.", icon: InfinityIcon },
  { id: 6, name: "Application Monitoring", desc: "Proactive monitoring for seamless performance and uptime.", icon: Monitor },
  { id: 7, name: "Security Testing", desc: "Identify vulnerabilities early and strengthen application security.", icon: ShieldAlert },
  { id: 8, name: "Robotic Process Automation", desc: "Automate repetitive tasks and improve operational efficiency.", icon: Bot },
  { id: 9, name: "IT Service Management", desc: "End-to-end IT support and service excellence.", icon: Headset },
  { id: 10, name: "Cloud Migration", desc: "Migrate, modernize, and maximize the cloud.", icon: Cloud },
  { id: 11, name: "Data Analytics", desc: "Transform data into insights that drive smarter decisions.", icon: BarChart3 },
  { id: 12, name: "Enterprise AI Solutions", desc: "Leverage AI to innovate and stay ahead of the curve.", icon: BrainCircuit },
];

const getBorderClasses = (idx: number, total: number) => {
  let classes = "border-white/10 ";

  if (idx < total - 1) classes += "border-b ";

  if (idx === total - 2) classes += "sm:border-b-0 ";
  if (idx % 2 === 0) classes += "sm:border-r ";
  else classes += "sm:border-r-0 ";

  if (idx >= total - 3) classes += "lg:border-b-0 ";
  else classes += "lg:border-b ";

  if ((idx + 1) % 3 !== 0) classes += "lg:border-r ";
  else classes += "lg:border-r-0 ";

  return classes;
};

export default function CoreServices() {
  return (
    <section className="py-10 lg:py-16 bg-[#0A1128] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col xl:flex-row items-start gap-12 xl:gap-20">

          {/* LHS: Sticky Header & Paragraph */}
          <div className="xl:w-[350px] shrink-0">
            <div className="sticky top-32">
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.1] mb-6 lg:mb-8">
                Core <br className="hidden xl:block" />
                <span className="text-white">Services</span>
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-gray-200 max-w-xl xl:max-w-none">
                Empowering your digital transformation with a comprehensive suite of enterprise-grade services engineered for speed, scalability, and zero-defect delivery.
              </p>
            </div>
          </div>

          {/* RHS: Tabular Grid (3 Columns) */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full border-t border-b border-white/10">
              {services.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className={`group flex flex-col items-start p-5 xl:p-8 hover:bg-white/[0.02] transition-all duration-300 cursor-pointer ${getBorderClasses(idx, services.length)}`}
                >
                  {/* Text Content Only */}
                  <div className="flex-grow">
                    <h3 className="text-base xl:text-lg font-medium text-white mb-2 leading-tight group-hover:text-[#3B82F6] transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-[13px] xl:text-[14px] text-gray-200 leading-snug">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
