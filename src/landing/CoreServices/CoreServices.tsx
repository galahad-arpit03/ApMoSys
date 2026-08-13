"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  AutomationTestingIcon,
  QualityEngineeringIcon,
  PerformanceEngineeringIcon,
  SecurityTestingIcon,
  ApplicationDevelopmentIcon,
  DevOpsIcon,
  CloudMigrationIcon,
  DataAnalyticsIcon,
  EnterpriseAIIcon,
  ITServiceManagementIcon,
  RPAIcon,
  ApplicationMonitoringIcon,
} from "./HoverIcons";

const services = [
  { id: 1, name: "Automation Testing", desc: "Accelerate release cycles with intelligent test automation.", icon: AutomationTestingIcon },
  { id: 2, name: "Quality Engineering", desc: "Delivering defect-free, high-quality software solutions.", icon: QualityEngineeringIcon },
  { id: 3, name: "Performance Engineering", desc: "Ensure scalability, speed, and reliability under any load.", icon: PerformanceEngineeringIcon },
  { id: 4, name: "Security Testing", desc: "Identify vulnerabilities and strengthen your application security.", icon: SecurityTestingIcon },
  { id: 5, name: "Application Development", desc: "Building robust, scalable, and future-ready applications.", icon: ApplicationDevelopmentIcon },
  { id: 6, name: "DevOps & CI/CD", desc: "Streamline delivery with automation, integration, and continuous delivery.", icon: DevOpsIcon },
  { id: 7, name: "Cloud Migration", desc: "Migrate, modernize, and manage workloads in the cloud.", icon: CloudMigrationIcon },
  { id: 8, name: "Data & Analytics", desc: "Transform data into actionable insights that drive growth.", icon: DataAnalyticsIcon },
  { id: 9, name: "Enterprise AI Solutions", desc: "Leverage AI to innovate, automate, and stay ahead of the curve.", icon: EnterpriseAIIcon },
  { id: 10, name: "IT Service Management", desc: "Optimize IT services to improve efficiency and end-user satisfaction.", icon: ITServiceManagementIcon },
  { id: 11, name: "Robotic Process Automation", desc: "Automate repetitive tasks and improve operational efficiency.", icon: RPAIcon },
  { id: 12, name: "Application Monitoring", desc: "Proactive monitoring for performance, availability, and user experience.", icon: ApplicationMonitoringIcon },
];

const getBorderClasses = (idx: number, total: number) => {
  let classes = "border-gray-200 ";

  // Base (Mobile) - 1 col
  classes += idx < total - 1 ? "border-b " : "border-b-0 ";

  // Medium (Tablet) - 2 cols
  classes += idx % 2 === 0 ? "md:border-r " : "md:border-r-0 ";
  classes += idx < total - 2 ? "md:border-b " : "md:border-b-0 ";

  // Large (Desktop) - 4 cols
  classes += (idx + 1) % 4 !== 0 ? "lg:border-r " : "lg:border-r-0 ";
  classes += idx < total - 4 ? "lg:border-b " : "lg:border-b-0 ";

  return classes;
};

export default function CoreServices() {
  return (
    <section className="py-10 lg:py-16 bg-[#FAFAFA]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">

        {/* Header Section */}
        <div className="mb-10 lg:mb-14 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-slate-900 leading-[1.1] tracking-tight text-left">
              Enterprise Capabilities
            </h2>
          </div>
          <div className="w-full md:w-1/2 md:border-l border-gray-300 md:pl-8">
            <p className="text-base lg:text-lg leading-relaxed text-[#5A5A5A] text-left font-medium">
              Empowering your digital transformation with a comprehensive suite of enterprise-grade services engineered for speed, scalability, and zero-defect delivery.
            </p>
          </div>
        </div>

        {/* Tabular Grid Section (Seamless, No Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-t border-b border-gray-200">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`group py-6 md:py-10 px-6 xl:px-10 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-5 hover:bg-gray-100/50 transition-colors ${getBorderClasses(idx, services.length)}`}
            >
              <div className="shrink-0 w-12 h-12 rounded-full border border-[#2563EB]/20 bg-transparent flex items-center justify-center text-[#2563EB]">
                {React.createElement(service.icon, { className: "w-5 h-5", strokeWidth: 1.5 })}
              </div>

              <div>
                <h4 className="text-[17px] font-bold text-slate-900 mb-1.5">{service.name}</h4>
                <p className="text-[13px] font-normal text-slate-900 leading-relaxed max-w-[200px]">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
