"use client";

import React from "react";
import { motion } from "framer-motion";

const clients = [
  "TATA AIA",
  "MAHINDRA FINANCE",
  "EDELWEISS",
  "CEAT",
  "HDFC",
  "BFSI CLIENT",
  "INSURANCE GROUP",
  "FORTUNE 500",
];

export default function ClientLogos() {
  const marqueeClients = [...clients, ...clients];

  return (
    <section className="relative overflow-hidden bg-[#0F0F0F] border-y border-[#1F1F1F] py-12 sm:py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">

          <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[#666666] font-medium">
            Trusted By Leading Enterprises
          </p>

          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mt-4">
            Delivering Technology Excellence Across Industries
          </h3>

        </div>

      </div>

      {/* Left Gradient Fade */}
      <div
        className="
          absolute
          left-0
          top-0
          bottom-0
          w-12
          sm:w-20
          lg:w-28
          bg-gradient-to-r
          from-[#0F0F0F]
          to-transparent
          pointer-events-none
          z-10
        "
      />

      {/* Right Gradient Fade */}
      <div
        className="
          absolute
          right-0
          top-0
          bottom-0
          w-12
          sm:w-20
          lg:w-28
          bg-gradient-to-l
          from-[#0F0F0F]
          to-transparent
          pointer-events-none
          z-10
        "
      />

      {/* Marquee */}
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max gap-3 sm:gap-4 lg:gap-6"
      >
        {marqueeClients.map((client, index) => (
          <motion.div
            key={`${client}-${index}`}
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              flex
              items-center
              justify-center

              min-w-[140px]
              sm:min-w-[180px]
              lg:min-w-[220px]

              h-16
              sm:h-20
              lg:h-24

              px-4
              sm:px-6

              rounded-2xl
              border
              border-[#242424]
              bg-[#141414]

              cursor-pointer
            "
          >
            <span
              className="
                text-[#9A9A9A]
                text-xs
                sm:text-sm
                lg:text-base
                font-medium
                tracking-wide
                text-center
              "
            >
              {client}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">

        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

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
              value: "10+",
              label: "Countries Served",
            },
            {
              value: "1000+",
              label: "Technology Experts",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="
                bg-[#141414]
                border
                border-[#242424]
                rounded-xl
                p-4
                sm:p-5
                text-center
              "
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-red">
                {item.value}
              </div>

              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#888888] mt-2">
                {item.label}
              </div>
            </div>
          ))}

        </div> */}

      </div>

    </section>
  );
}