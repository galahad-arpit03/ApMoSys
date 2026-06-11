"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const stats = [
  {
    stat: "14+",
    label: "Years Experience",
  },
  {
    stat: "100+",
    label: "Enterprise Clients",
  },
  {
    stat: "1000+",
    label: "Technology Professionals",
  },
  {
    stat: "10+",
    label: "Countries Served",
  },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      className="bg-[#111111] py-20 lg:py-28 border-t border-[#1F1F1F]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="text-primary-red uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-semibold">
              About ApMoSys
            </span>

            <h2 className="mt-4 sm:mt-5 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Accelerating Enterprise
              <br className="hidden sm:block" />
              Innovation Since 2012
            </h2>

            <p className="mt-6 sm:mt-8 text-[#A0A0A0] text-base sm:text-lg leading-relaxed">
              ApMoSys is a global technology consulting and digital
              engineering company helping enterprises build resilient
              software, modernize infrastructure, accelerate delivery
              pipelines and ensure business continuity through quality
              engineering and observability.
            </p>

            <p className="mt-5 sm:mt-6 text-[#A0A0A0] text-base sm:text-lg leading-relaxed">
              From application development and cloud transformation
              to testing, monitoring and AI-powered automation,
              we deliver technology solutions that enable
              organizations to innovate faster and operate smarter.
            </p>

            <a
              href="/about"
              className="
                inline-flex
                items-center
                gap-2
                mt-8
                sm:mt-10
                text-primary-red
                font-semibold
                group
              "
            >
              Learn More About Us

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">

            {stats.map((item) => (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  bg-[#171717]
                  border
                  border-[#2A2A2A]
                  rounded-2xl
                  p-5
                  sm:p-6
                  lg:p-8
                "
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-red">
                  {item.stat}
                </div>

                <div
                  className="
                    text-[#A0A0A0]
                    mt-3
                    text-[10px]
                    sm:text-xs
                    lg:text-sm
                    uppercase
                    tracking-wider
                    leading-relaxed
                  "
                >
                  {item.label}
                </div>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}