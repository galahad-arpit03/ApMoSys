"use client";
import React from "react";
import { Hexagon, Triangle, Circle, Box, Layers, Globe, Activity, Command, Code, Cpu, Landmark, Building2, Shield, Zap } from "lucide-react";

const CLIENTS = [
  { name: "FDC India", icon: Building2 },
  { name: "Protean eGov Technologies", icon: Hexagon },
  { name: "L&T Finance", icon: Activity },
  { name: "Bank of Maharashtra", icon: Landmark },
  { name: "UCO Bank", icon: Landmark },
  { name: "RBL Bank", icon: Landmark },
  { name: "ABCD Bank", icon: Landmark },
  { name: "Generali Central Life Insurance (GCLI)", icon: Shield },
  { name: "NSDL Payments Bank", icon: Landmark },
  { name: "IDBI Bank", icon: Landmark },
  { name: "Muscat Finance", icon: Zap },
];

export default function TrustedBy() {
  return (
    <section className="py-3 bg-[#F8F9FB] overflow-hidden border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">

        {/* Carousel Container */}
        <div className="relative flex overflow-x-hidden group">
          {/* Gradient Masks for smooth fade on edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-[#F8F9FB] to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-[#F8F9FB] to-transparent pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex animate-marquee whitespace-nowrap items-center py-2">
            {/* Render list 3 times for seamless infinite scroll */}
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, index) => {
              const Icon = client.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-center gap-2.5 mx-8 md:mx-12 cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-base md:text-lg font-normal font-heading tracking-tight">
                    {client.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Inline Styles for Marquee Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33333%); }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
