"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  bank: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3" />
    </svg>
  ),
  cart: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  wrench: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  heart: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  wifi: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.75 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  ),
  truck: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635c0 .568.422 1.048.987 1.106a48.554 48.554 0 0010.026 0 1.106 1.106 0 00.987-1.106V14.25m-2.25 0h-4.5m4.5 0v-3.75m0 3.75h4.5" />
    </svg>
  ),
  building: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
  bolt: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
};

const industries = [
  {
    id: "1",
    title: "Banking & Finance",
    description: "Secure, scalable financial solutions with real-time processing and regulatory compliance.",
    icon: "bank",
    linkText: "Learn More",
  },
  {
    id: "2",
    title: "Retail & E-Commerce",
    description: "Omnichannel commerce platforms with seamless payment processing and inventory management.",
    icon: "cart",
    linkText: "Learn More",
  },
  {
    id: "3",
    title: "Manufacturing",
    description: "Smart factory solutions with IoT integration, predictive maintenance, and supply chain automation.",
    icon: "wrench",
    linkText: "Learn More",
  },
  {
    id: "4",
    title: "Healthcare",
    description: "HIPAA-compliant patient care systems with secure data exchange and telemedicine capabilities.",
    icon: "heart",
    linkText: "Learn More",
  },
  {
    id: "5",
    title: "Insurance",
    description: "Streamlined claims processing, policy administration, and underwriting systems for insurers.",
    icon: "shield",
    linkText: "Learn More",
  },
  {
    id: "6",
    title: "Telecommunications",
    description: "High-performance network operations with real-time monitoring and customer experience optimization.",
    icon: "wifi",
    linkText: "Learn More",
  },
  {
    id: "7",
    title: "Logistics & Supply Chain",
    description: "Real-time tracking, fleet management, and predictive logistics powered by AI and automation.",
    icon: "truck",
    linkText: "Learn More",
  },
  {
    id: "8",
    title: "Government & Public Sector",
    description: "Secure digital services with compliance frameworks and citizen-centric design patterns.",
    icon: "building",
    linkText: "Learn More",
  },
  {
    id: "9",
    title: "Energy & Utilities",
    description: "Smart grid solutions with real-time monitoring, predictive analytics, and sustainability reporting.",
    icon: "bolt",
    linkText: "Learn More",
  },
];

// Helper to determine border classes based on grid position
const getBorderClasses = (idx: number, total: number) => {
  let classes = "border-gray-200 ";

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

export default function IndustryGrid() {
  return (
    <section id="industries-grid" className="py-10 lg:py-16 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Header – No Eyebrow */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-[1.1]">
              Industries We Serve
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-[#5A5A5A] leading-relaxed">
              Transforming global enterprises across diverse sectors with cutting-edge automation, scalable architecture, and uncompromised security.
            </p>
          </div>
        </div>

        {/* Tabular Grid – Light Theme - Spacious */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full border-t border-b border-gray-200">
          {industries.map((industry, idx) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className={`group flex items-start gap-5 p-6 xl:p-10 hover:bg-gray-50/50 transition-all duration-300 cursor-pointer ${getBorderClasses(
                idx,
                industries.length
              )}`}
            >
              {/* Icon - Larger */}
              <div className="flex-shrink-0 w-12 h-12 rounded-md bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                {iconMap[industry.icon] || iconMap.bank}
              </div>

              {/* Text Content - More breathing room */}
              <div className="flex-grow min-w-0">
                <h3 className="text-base xl:text-lg font-medium text-black mb-2 leading-tight group-hover:text-[#2563EB] transition-colors duration-300">
                  {industry.title}
                </h3>
                {/* Description - Always visible, updated font size */}
                <p className="text-[13px] xl:text-[14px] text-[#5A5A5A] leading-snug">
                  {industry.description}
                </p>
                {/* Link - Always visible */}
                <div className="mt-3">
                  <a
                    href="#"
                    className="inline-flex items-center text-xs font-bold text-[#2563EB] hover:text-blue-700 transition-colors group/link"
                  >
                    {industry.linkText}
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}