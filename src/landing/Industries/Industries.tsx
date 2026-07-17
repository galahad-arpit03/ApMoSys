"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Landmark, 
  ShieldCheck, 
  HeartPulse, 
  ShoppingCart, 
  Factory, 
  Building2, 
  RadioTower, 
  Truck,
  ArrowUpRight
} from "lucide-react";

const industries = [
  { id: 1, name: "Banking", desc: "Secure & scalable financial solutions.", icon: Landmark },
  { id: 2, name: "Insurance", desc: "Streamlined claims & policy management.", icon: ShieldCheck },
  { id: 3, name: "Healthcare", desc: "HIPAA-compliant patient care systems.", icon: HeartPulse },
  { id: 4, name: "Retail", desc: "Omnichannel e-commerce & supply chain.", icon: ShoppingCart },
  { id: 5, name: "Manufacturing", desc: "Smart factory & IoT integration.", icon: Factory },
  { id: 6, name: "Government", desc: "Secure public sector digital services.", icon: Building2 },
  { id: 7, name: "Telecom", desc: "High-performance network operations.", icon: RadioTower },
  { id: 8, name: "Logistics", desc: "Real-time tracking & fleet management.", icon: Truck },
];

const getBorderClasses = (idx: number, total: number) => {
  let classes = "border-gray-200 ";
  
  if (idx < total - 1) classes += "border-b ";

  if (idx === total - 2) classes += "md:border-b-0 ";
  if (idx % 2 === 0) classes += "md:border-r ";
  else classes += "md:border-r-0 ";

  if (idx >= 4) classes += "lg:border-b-0 ";
  else classes += "lg:border-b ";
  
  if ((idx + 1) % 4 !== 0) classes += "lg:border-r ";
  else classes += "lg:border-r-0 ";

  return classes;
};

export default function Industries() {
  return (
    <section className="py-10 lg:py-16 bg-[#FAFAFA]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - LHS/RHS Split */}
        <div className="mb-8 lg:mb-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          {/* Left Side: Heading */}
          <div className="shrink-0">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-[1.1]">
              Industries We <br className="hidden lg:block" />
              <span>Serve</span>
            </h2>
          </div>
          
          {/* Right Side: Paragraph */}
          <div className="flex flex-col lg:items-end gap-6 max-w-xl">
            <p className="text-base lg:text-lg leading-relaxed text-[#5A5A5A] lg:text-left">
              Transforming global enterprises across diverse sectors with cutting-edge automation, scalable architecture, and uncompromised security.
            </p>
          </div>
        </div>

        {/* Tabular Grid Section (Seamless, No Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-t border-b border-gray-200">
          {industries.map((industry, idx) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`group py-10 px-6 xl:px-10 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-5 hover:bg-gray-100/50 transition-colors ${getBorderClasses(idx, industries.length)}`}
            >
              <div className="shrink-0 w-12 h-12 rounded-full border border-[#2563EB]/20 bg-transparent flex items-center justify-center text-[#2563EB]">
                <industry.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              
              <div>
                <h4 className="text-[17px] font-bold text-slate-900 mb-1.5">{industry.name}</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed max-w-[200px]">{industry.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
