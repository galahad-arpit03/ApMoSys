"use client";
import { solutionsData } from "./SolutionsData";

import React from "react";
import { motion } from "framer-motion";


const reasons = [
  {
    id: "01",
    title: "Deep Domain Expertise",
    description:
      "Extensive experience across Banking, Insurance, Manufacturing, Retail, Healthcare and Enterprise Technology ecosystems.",
  },
  {
    id: "02",
    title: "Engineering Accelerators",
    description:
      "Reusable frameworks, automation assets and delivery accelerators that reduce implementation timelines and project risks.",
  },
  {
    id: "03",
    title: "Global Delivery Model",
    description:
      "Distributed teams delivering consistent outcomes across multiple geographies, business units and time zones.",
  },
  {
    id: "04",
    title: "AI-Powered Innovation",
    description:
      "Leveraging Artificial Intelligence, automation and observability platforms to drive operational excellence.",
  },
  {
    id: "05",
    title: "End-to-End Ownership",
    description:
      "From consulting and development to testing, deployment, monitoring and optimization, we own the complete lifecycle.",
  },
  {
    id: "06",
    title: "Centers of Excellence",
    description:
      "Dedicated Quality Engineering, Performance Engineering, Automation and Cloud Centers of Excellence.",
  },
];

export default function Solutions() {
  return (
    <section
      id="why-apmosys"
      className="bg-[#111111] py-20 lg:py-28 border-t border-[#1F1F1F]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-20">

          <span className="text-primary-red uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-semibold">
            Why ApMoSys
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 sm:mt-5">
            Built For Enterprise
            <br className="hidden sm:block" />
            Transformation
          </h2>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#A0A0A0] leading-relaxed max-w-3xl mx-auto">
            Combining engineering excellence, quality-first delivery,
            innovation and industry expertise to help organizations
            modernize, scale and transform with confidence.
          </p>

        </div>

        {/* Why ApMoSys Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
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
                bg-[#171717]
                border
                border-[#252525]
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
                  {item.id}
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
                  {item.id}
                </div>

              </div>

              {/* Content */}
              <h3 className="text-white text-xl lg:text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>

              {/* Bottom Line */}
              <div className="mt-8 pt-6 border-t border-[#242424]">

                <div className="flex items-center justify-between">

                  <span className="text-[#777777] text-sm">
                    Enterprise Capability
                  </span>

                  <span
                    className="
                      text-primary-red
                      group-hover:translate-x-1
                      transition-transform
                    "
                  >
                    →
                  </span>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Trust Metrics */}
        <div className="mt-14 lg:mt-20">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

            {[
              {
                value: "14+",
                label: "Years of Excellence",
              },
              {
                value: "100+",
                label: "Enterprise Customers",
              },
              {
                value: "1000+",
                label: "Technology Experts",
              },
              {
                value: "10+",
                label: "Countries Served",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="
                  bg-[#171717]
                  border
                  border-[#252525]
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

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">

          <a
            href="/about"
            className="
              inline-flex
              items-center
              gap-2
              text-primary-red
              font-semibold
              hover:gap-3
              transition-all
              duration-300
            "
          >
            Learn More About ApMoSys
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  );
}