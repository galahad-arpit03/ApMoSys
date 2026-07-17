"use client";
import React from "react";
import { Hexagon, Triangle, Circle, Box, Layers, Globe, Activity, Command, Code, Cpu } from "lucide-react";

const CLIENTS = [
  { name: "Acme Corp", icon: Hexagon },
  { name: "Globex", icon: Globe },
  { name: "Soylent", icon: Circle },
  { name: "Initech", icon: Box },
  { name: "Umbrella", icon: Triangle },
  { name: "Stark Ind.", icon: Activity },
  { name: "Wayne Ent.", icon: Layers },
  { name: "Cyberdyne", icon: Cpu },
  { name: "Massive Dyn.", icon: Command },
  { name: "Hooli", icon: Code },
];

export default function TrustedBy() {
  return (
    <section className="py-2 bg-white overflow-hidden border-b-[0.5px] border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Carousel Container */}
        <div className="relative flex overflow-x-hidden group">
          {/* Gradient Masks for smooth fade on edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex animate-marquee whitespace-nowrap items-center py-2">
            {/* Render list 3 times for seamless infinite scroll */}
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, index) => {
              const Icon = client.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-center gap-2.5 mx-8 md:mx-12 cursor-pointer"
                >
                  <Icon className="w-5 h-5 md:w-7 md:h-7 text-black" />
                  <span className="text-base md:text-lg font-normal font-heading text-black tracking-tight">
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
          animation: marquee 30s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
