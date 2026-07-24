"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Award } from "lucide-react";

const certificationApproaches = [
  {
    id: "iso-certification",
    title: "ISO 27001 & ISO 9001 Certified",
    description: "Certified information security and quality management systems guaranteeing strict data governance, physical security, and operational rigor.",
    icon: ShieldCheck,
  },
  {
    id: "soc-compliance",
    title: "SOC 2 Type II Certified",
    description: "Independently audited controls covering security, availability, processing integrity, confidentiality, and privacy for cloud delivery.",
    icon: Lock,
  },
  {
    id: "cmmi-level-5",
    title: "CMMI Level 5 Maturity Rating",
    description: "Highest process maturity standard validating continuous process optimization, quantitative performance management, and flaw-free delivery.",
    icon: Award,
  },
];

export default function CertificationsBadgeGrid() {
  return (
    <section id="awards-certifications" className="py-10 lg:py-16 bg-[#0A1128] border-b border-[#1A264A] relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#242A56]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Split Header - Single-colored Heading */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.1]">
              Certified Standards & Rigorous Compliance
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Our engineering operations adhere to world-class regulatory standards and security frameworks, providing peace of mind to regulated enterprises globally.
            </p>
          </div>
        </div>

        {/* Approach Grid – 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {certificationApproaches.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative bg-[#121B38] border border-[#1A264A] rounded-md p-8 hover:border-[#242A56] hover:shadow-lg transition-all hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white mb-5 group-hover:bg-white group-hover:text-[#0A1128] transition-colors">
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-base xl:text-lg font-medium text-white mb-3 group-hover:text-gray-200 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] xl:text-[14px] text-gray-300 leading-snug">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
