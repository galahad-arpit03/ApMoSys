"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Cpu, Cloud, Workflow } from "lucide-react";

const features = [
  {
    id: "architecture",
    title: "Microservices Architecture",
    icon: <Layers className="w-5 h-5" />,
    description: "Decouple your monolithic systems into highly scalable, independent services that can be deployed autonomously.",
  },
  {
    id: "ai",
    title: "AI-Powered Analytics",
    icon: <Cpu className="w-5 h-5" />,
    description: "Harness the power of machine learning to predict system failures before they occur and optimize performance.",
  },
  {
    id: "cloud",
    title: "Cloud Native Scalability",
    icon: <Cloud className="w-5 h-5" />,
    description: "Built for AWS, Azure, and GCP. Instantly scale resources based on demand without downtime.",
  },
  {
    id: "automation",
    title: "Intelligent Automation",
    icon: <Workflow className="w-5 h-5" />,
    description: "Automate repetitive QA, deployment, and infrastructure tasks to free up your engineering teams.",
  }
];

export default function CoreFeatures() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const activeData = features.find(f => f.id === activeFeature) || features[0];

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        
        <div className="mb-16 text-left max-w-2xl">
          <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-4">
            Engineered for <span className="text-blue-600">Performance.</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Explore the capabilities that make ApMoSys the preferred platform for enterprise digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Side: Navigation */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {features.map((feature) => {
              const isActive = activeFeature === feature.id;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`
                    w-full text-left p-6 transition-all duration-300 border rounded-md
                    ${isActive 
                      ? "bg-white border-blue-600 shadow-sm" 
                      : "bg-transparent border-transparent hover:bg-gray-100"
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div className={`mt-1 ${isActive ? "text-blue-600" : "text-gray-400"}`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg mb-2 ${isActive ? "text-gray-900" : "text-gray-600"}`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm ${isActive ? "text-gray-600" : "text-gray-400"}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Visualizer */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-md shadow-sm flex items-center justify-center p-8 sm:p-12 h-full min-h-[400px]">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-left w-full max-w-md"
                >
                  <div className="w-16 h-16 bg-red-50 text-blue-600 rounded-md flex items-center justify-center mb-8 border border-red-100">
                    {activeData.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{activeData.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{activeData.description}</p>
                  
                  {/* Mock Data Lines */}
                  <div className="mt-8 space-y-3">
                    <div className="h-2 bg-gray-100 w-full" />
                    <div className="h-2 bg-gray-100 w-5/6" />
                    <div className="h-2 bg-gray-100 w-4/6" />
                  </div>
                </motion.div>
              </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
