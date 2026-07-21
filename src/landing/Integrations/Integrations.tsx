"use client";

import React from "react";
import { GitBranch, Database, AppWindow, CloudLightning, Container, Terminal } from "lucide-react";

const integrations = [
  { name: "Git", icon: <GitBranch className="w-6 h-6" /> },
  { name: "Databases", icon: <Database className="w-6 h-6" /> },
  { name: "Web Apps", icon: <AppWindow className="w-6 h-6" /> },
  { name: "Cloud", icon: <CloudLightning className="w-6 h-6" /> },
  { name: "Docker", icon: <Container className="w-6 h-6" /> },
  { name: "CLI Tools", icon: <Terminal className="w-6 h-6" /> },
];

export default function Integrations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Connects seamlessly with your existing stack.
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              No need to rip and replace. ApMoSys integrates smoothly into your current CI/CD pipelines, cloud environments, and deployment tools to augment your capabilities instantly.
            </p>
            <button className="px-6 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
              View All Integrations
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {integrations.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-start gap-4 p-6 bg-gray-50 border border-gray-100 rounded-md hover:border-gray-300 transition-all duration-300"
              >
                <div className="text-blue-600">
                  {item.icon}
                </div>
                <span className="text-sm font-bold text-gray-900 tracking-wider">{item.name}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
