"use client";
import { servicesData } from "./ServicesData";

import React from "react";
import { motion } from "framer-motion";


const services = [
  {
    id: "01",
    title: "Quality Engineering",
    description:
      "Functional, automation, performance and security testing services designed to accelerate releases while maintaining software quality.",
    highlights: [
      "Test Automation",
      "Performance Testing",
      "Security Testing",
    ],
  },
  {
    id: "02",
    title: "Application Development",
    description:
      "Enterprise-grade web, mobile and custom software development tailored to modern business requirements.",
    highlights: [
      "Web Applications",
      "Mobile Apps",
      "Custom Software",
    ],
  },
  {
    id: "03",
    title: "DevOps & Cloud",
    description:
      "CI/CD implementation, cloud migration, infrastructure automation and platform engineering services.",
    highlights: [
      "AWS & Azure",
      "Kubernetes",
      "CI/CD Pipelines",
    ],
  },
  {
    id: "04",
    title: "Infrastructure Monitoring",
    description:
      "Observability, AIOps, log analytics and proactive monitoring for mission-critical systems.",
    highlights: [
      "Observability",
      "AIOps",
      "Log Analytics",
    ],
  },
  {
    id: "05",
    title: "AI & Intelligent Automation",
    description:
      "Artificial Intelligence, machine learning and robotic process automation solutions that drive efficiency.",
    highlights: [
      "Machine Learning",
      "RPA",
      "Predictive Analytics",
    ],
  },
  {
    id: "06",
    title: "Enterprise Platforms",
    description:
      "SAP, Salesforce, ERP and CRM implementation, modernization and support services.",
    highlights: [
      "SAP",
      "Salesforce",
      "ERP & CRM",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#0B0B0B] py-20 lg:py-28 border-t border-[#1F1F1F]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-20">

          <span className="text-primary-red uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-semibold">
            Services
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 sm:mt-5">
            End-to-End Technology
            <br className="hidden sm:block" />
            Services & Solutions
          </h2>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#A0A0A0] leading-relaxed max-w-3xl mx-auto">
            From software engineering and quality assurance to cloud,
            observability and AI, ApMoSys delivers integrated technology
            services that help enterprises innovate faster and operate smarter.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                bg-[#141414]
                border
                border-[#242424]
                rounded-3xl
                p-6
                lg:p-8
                hover:border-primary-red/40
                transition-all
                duration-300
              "
            >
              {/* Top Section */}
              <div className="flex items-center justify-between mb-8">

                <div
                  className="
                    w-14
                    h-14
                    rounded-xl
                    bg-primary-red/10
                    border
                    border-primary-red/20
                    flex
                    items-center
                    justify-center
                    text-primary-red
                    font-bold
                  "
                >
                  {service.id}
                </div>

                <div
                  className="
                    text-4xl
                    lg:text-5xl
                    font-bold
                    text-[#222222]
                    group-hover:text-[#333333]
                    transition-colors
                  "
                >
                  {service.id}
                </div>

              </div>

              {/* Content */}
              <h3 className="text-white text-xl lg:text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">

                {service.highlights.map((item) => (
                  <span
                    key={item}
                    className="
                      px-3
                      py-1.5
                      rounded-full
                      text-[11px]
                      sm:text-xs
                      bg-primary-red/10
                      border
                      border-primary-red/20
                      text-primary-red
                    "
                  >
                    {item}
                  </span>
                ))}

              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-[#242424]">

                <button
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-white
                    font-medium
                    group-hover:text-primary-red
                    transition-colors
                  "
                >
                  Learn More

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom Metrics */}
        {/* <div className="mt-14 lg:mt-20">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

            {[
              {
                value: "100+",
                label: "Enterprise Clients",
              },
              {
                value: "14+",
                label: "Years Experience",
              },
              {
                value: "1000+",
                label: "Technology Experts",
              },
              {
                value: "24×7",
                label: "Support Coverage",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="
                  bg-[#141414]
                  border
                  border-[#242424]
                  rounded-2xl
                  p-5
                  lg:p-6
                  text-center
                "
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-red">
                  {item.value}
                </div>

                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#888888] mt-2">
                  {item.label}
                </div>
              </div>
            ))}

          </div>

        </div> */}

      </div>
    </section>
  );
}