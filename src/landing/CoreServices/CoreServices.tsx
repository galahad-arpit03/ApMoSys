"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
  ArrowRight,
  Box
} from "lucide-react";

const services = [
  { id: 1, name: "Automation Testing", desc: "Accelerate release cycles with intelligent test automation.", icon: Settings },
  { id: 2, name: "Quality Engineering", desc: "Delivering defect-free, high-quality software solutions.", icon: ShieldCheck },
  { id: 3, name: "Performance Engineering", desc: "Ensure scalability, speed, and reliability under any load.", icon: Gauge },
  { id: 4, name: "Security Testing", desc: "Identify vulnerabilities and strengthen your application security.", icon: ShieldAlert },
  { id: 5, name: "Application Development", desc: "Building robust, scalable, and future-ready applications.", icon: Code2 },
  { id: 6, name: "DevOps & CI/CD", desc: "Streamline delivery with automation, integration, and continuous delivery.", icon: InfinityIcon },
  { id: 7, name: "Cloud Migration", desc: "Migrate, modernize, and manage workloads in the cloud.", icon: Cloud },
  { id: 8, name: "Data & Analytics", desc: "Transform data into actionable insights that drive growth.", icon: BarChart3 },
  { id: 9, name: "Enterprise AI Solutions", desc: "Leverage AI to innovate, automate, and stay ahead of the curve.", icon: BrainCircuit },
  { id: 10, name: "IT Service Management", desc: "Optimize IT services to improve efficiency and end-user satisfaction.", icon: Headset },
  { id: 11, name: "Robotic Process Automation", desc: "Automate repetitive tasks and improve operational efficiency.", icon: Bot },
  { id: 12, name: "Application Monitoring", desc: "Proactive monitoring for performance, availability, and user experience.", icon: Monitor },
];

export default function CoreServices() {
  const [rotationCount, setRotationCount] = useState(0);

  // Auto-rotate the massive wheel
  useEffect(() => {
    const timer = setInterval(() => {
      setRotationCount((prev) => prev + 1);
    }, 4000); // Rotate every 4 seconds
    return () => clearInterval(timer);
  }, []);

  // Use 10 degrees per step for 36 items (perfect for a 2000px radius)
  const currentAngle = -rotationCount * 10;
  const wheelServices = [...services, ...services, ...services]; // 36 items

  // Calculate active index (1 to 12) for the static counter
  const activeIndex = ((rotationCount % services.length) + services.length) % services.length;

  return (
    <section className="bg-[#F8F9FA] relative overflow-hidden h-[825px] w-full font-sans border-b border-gray-200">

      {/* Flipped Background Image (Commented out per user request)
      <div className="absolute inset-0 z-0 pointer-events-none scale-y-[-1]">
        <Image 
          src="/assets/images/image1.png" 
          alt="Background Structure" 
          fill 
          className="object-cover object-top opacity-50 mix-blend-screen" 
        />
      </div>
      */}

      {/* CSS Background Elements (Replicating Image) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Left decorative concentric circles */}
        <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] border-[1px] border-purple-200/50 rounded-full" />
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] border-[1px] border-purple-200/50 rounded-full" />
        <div className="absolute top-[-50px] left-[-50px] w-[400px] h-[400px] border-[1px] border-purple-200/50 rounded-full" />

        {/* Right Side decorative dots */}
        <div className="absolute top-[5%] right-[5%] w-[400px] h-[300px] bg-[radial-gradient(#CBD5E1_2px,transparent_2px)] [background-size:30px_30px] opacity-40" />
      </div>

      {/* Header Section */}
      <div className="relative z-30 pt-10 lg:pt-14 px-6 sm:px-8 lg:px-16 max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        <div className="w-full md:w-1/2">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 leading-[1.1] tracking-tight text-left">
            Enterprise Capabilities
          </h2>
        </div>
        <div className="w-full md:w-1/2 md:border-l border-gray-300 md:pl-8">
          <p className="text-base lg:text-lg leading-relaxed text-gray-700 text-left font-medium">
            Empowering your digital transformation with a comprehensive suite of enterprise-grade services engineered for speed, scalability, and zero-defect delivery.
          </p>
        </div>
      </div>


      {/* The CTA Card */}
      <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] bg-[#1E18F8]/10 backdrop-blur-xl border border-[#334155]/30 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between z-40 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-5 mb-4 sm:mb-0">
          <div className="w-14 h-14 bg-[#334155]/20 rounded-xl flex items-center justify-center border border-[#334155]/40">
            <Box className="text-white w-7 h-7" />
          </div>
          <div className="text-left">
            <h4 className="text-white font-semibold text-lg">Need a tailored solution?</h4>
            <p className="text-gray-300 text-sm">Let&apos;s build something extraordinary together.</p>
          </div>
        </div>
        <button className="px-6 py-3.5 bg-[#334155]/30 backdrop-blur-xl border border-[#334155]/60 hover:bg-[#334155]/50 hover:border-[#334155]/80 text-white font-medium rounded-md transition-all duration-300 flex items-center gap-2.5 text-sm hover:scale-[1.0]">
          Talk to an Expert <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* The Arch & Cards Container */}
      <div className="absolute bottom-[-1400px] left-1/2 w-0 h-0 z-20">

        {/* The massive solid arc (Replicating the flipped image curve with requested colors) */}
        <div className="absolute top-[-2000px] left-[-2000px] w-[4000px] h-[4000px] bg-[#00061e] border-[2px] border-[#A855F7]/80 rounded-full pointer-events-none shadow-[inset_0_0_80px_rgba(168,85,247,0.2),0_0_40px_rgba(168,85,247,0.3)]">
          {/* Inner dots inside the purple wheel covering everything */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />
        </div>

        {/* Static Center Counter */}
        <div className="absolute top-[-1660px] left-1/2 -translate-x-1/2 w-48 z-30 pointer-events-none flex items-center justify-center">
          <span className="font-mono text-[12px] tracking-widest text-white/30 whitespace-nowrap">
            {String(activeIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
          </span>
        </div>

        <motion.div
          animate={{ rotate: currentAngle }}
          transition={{ type: "tween", ease: "easeInOut", duration: 1 }}
          style={{ willChange: "transform" }}
          className="absolute top-0 left-0 w-0 h-0"
        >
          {/* The 36 Service Cards */}
          {wheelServices.map((service, idx) => {
            const fixedAngle = idx * 10; // 360 / 36 items = 10 degrees each

            // Calculate global angle to determine which item is currently at the top (active)
            let globalAngle = (fixedAngle + currentAngle) % 360;
            if (globalAngle < -180) globalAngle += 360;
            if (globalAngle > 180) globalAngle -= 360;

            const isActive = Math.abs(globalAngle) < 5; // Tighter active window for 10deg steps

            return (
              <div
                key={`${service.id}-${idx}`}
                className="absolute top-0 left-0 origin-bottom flex flex-col items-center pointer-events-none"
                style={{
                  transform: `rotate(${fixedAngle}deg)`,
                  width: 270, // Slightly reduced width
                  height: 2000, // Radius
                  marginLeft: -135, // Half of width
                  marginTop: -2000,
                }}
              >
                {/* Glowing Node on the arc ring */}
                <div className={`w-3 h-3 rounded-full z-20 transition-all duration-500 ${isActive ? 'bg-[#2617C9] shadow-[0_0_15px_4px_#2617C9]' : 'bg-[#2617C9]/40'}`} />

                {/* Connector Line */}
                <div className={`w-[1.5px] h-[35px] bg-gradient-to-b transition-all duration-500 ${isActive ? 'from-[#2617C9]' : 'from-[#2617C9]/30'} to-transparent`} />

                {/* The Card */}
                <div 
                  onClick={() => {
                    // Click to rotate directly to this card
                    setRotationCount((prev) => prev + Math.round(globalAngle / 10));
                  }}
                  className={`relative overflow-hidden w-full h-[240px] mt-6 border rounded-2xl flex flex-col justify-between items-start p-6 backdrop-blur-[20px] pointer-events-auto cursor-pointer transition-all duration-500 group ${
                    isActive 
                      ? "opacity-100 scale-105 bg-[#dddddd] border-[#727272] shadow-[0_8px_32px_rgba(255,255,255,0.15)] -translate-y-[20px]" 
                      : "opacity-50 scale-95 bg-[#334155]/30 border-[#334155]/50 shadow-none hover:border-[#334155]/70 hover:opacity-100 hover:bg-[#334155]/40 transform-none"
                  }`}
                >
                  {/* Top row: Icon and Number */}
                  <div className="flex justify-between items-start w-full">
                     {/* Icon Background */}
                     <div className={`w-12 h-12 rounded-md flex items-center justify-center border bg-gradient-to-br transition-colors duration-500 ${isActive ? 'border-gray-200 from-gray-100 to-white shadow-sm' : 'border-white/20 from-white/10 to-transparent'}`}>
                        {React.createElement(service.icon, { className: `w-6 h-6 transition-colors duration-500 ${isActive ? 'text-gray-800' : 'text-white'}` })}
                     </div>
                     {/* Number top right */}
                     <span className={`font-bold text-5xl transition-colors duration-500 ${isActive ? 'text-slate-900/50' : 'text-white/10'}`}>
                       {String(service.id).padStart(2, '0')}
                     </span>
                  </div>
                  
                  {/* Text Content at bottom */}
                  <div className="mt-auto">
                    <h3 
                      className={`font-medium text-[18px] leading-tight mb-2 transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-200 group-hover:text-white'}`}
                      style={{ fontFamily: '"Geist", sans-serif' }}
                    >
                      {service.name}
                    </h3>
                    <p 
                      className={`text-[14px] leading-relaxed transition-colors duration-300 ${isActive ? 'text-gray-600' : 'text-gray-500 group-hover:text-gray-400'}`}
                      style={{ fontFamily: '"Manrope", sans-serif' }}
                    >
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
