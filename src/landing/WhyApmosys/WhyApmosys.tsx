"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Briefcase, Globe, Award, Cpu, Clock, Lightbulb, ArrowRight } from "lucide-react";

const features = [
  { id: 1, title: "14+ Years", desc: "Of proven excellence in global software delivery.", icon: Calendar },
  { id: 2, title: "140+ Clients", desc: "Trusted by Fortune 500 enterprise leaders.", icon: Briefcase },
  { id: 3, title: "1400+ Experts", desc: "Highly skilled engineering professionals.", icon: Users },
  { id: 4, title: "Global Delivery", desc: "Seamless execution across all time zones.", icon: Globe },
  { id: 5, title: "Certified Engineers", desc: "Top-tier talent with industry certifications.", icon: Award },
  { id: 6, title: "AI Driven", desc: "Next-gen AI and automation capabilities.", icon: Cpu },
  { id: 7, title: "24×7 Support", desc: "Round-the-clock enterprise assistance.", icon: Clock },
  { id: 8, title: "Innovation First", desc: "Pioneering modern technological solutions.", icon: Lightbulb },
];

const getBorderClasses = (idx: number, total: number) => {
  let classes = "border-gray-200 ";
  
  // Mobile (1 col): all but last have bottom border
  if (idx < total - 1) classes += "border-b ";

  // Tablet (2 cols): 
  if (idx === total - 2) classes += "md:border-b-0 ";
  if (idx % 2 === 0) classes += "md:border-r ";
  else classes += "md:border-r-0 ";

  // Desktop (4 cols):
  if (idx >= 4) classes += "lg:border-b-0 ";
  else classes += "lg:border-b ";
  
  if ((idx + 1) % 4 !== 0) classes += "lg:border-r ";
  else classes += "lg:border-r-0 ";

  return classes;
};

export default function WhyApmosys() {
  return (
    <section className="py-10 lg:py-16 bg-[#FAFAFA]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        
        {/* Header - LHS/RHS Split */}
        <div className="mb-8 lg:mb-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          {/* Left Side: Heading */}
          <div className="shrink-0">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-[1.1]">
              Why People <br className="hidden lg:block" /> Choose Us?
            </h2>
          </div>

          {/* Right Side: Paragraph */}
          <div className="flex flex-col lg:items-end gap-6 max-w-xl">
            <p className="text-base lg:text-lg leading-relaxed text-[#5A5A5A] lg:text-left">
              Empowering global businesses with cutting-edge engineering, uncompromising quality, and AI-driven solutions. Our scale and deep domain expertise ensure your digital transformation is seamless.
            </p>
          </div>
        </div>

        {/* Tabular Grid Section (4x2 on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-t border-gray-200">
          {features.map((feature, idx) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`py-6 md:py-10 px-6 xl:px-10 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-5 hover:bg-gray-100/50 transition-colors ${getBorderClasses(idx, features.length)}`}
            >
              <div className="shrink-0 w-12 h-12 rounded-full border border-[#2563EB]/20 bg-transparent flex items-center justify-center text-[#2563EB]">
                <feature.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              
              <div>
                <h4 className="text-[17px] font-bold text-slate-900 mb-1.5">{feature.title}</h4>
                <p className="text-[13px] font-normal text-slate-900 leading-relaxed max-w-[200px]">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
