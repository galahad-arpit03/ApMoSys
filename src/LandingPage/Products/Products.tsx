"use client";

import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    title: "RUAMBOT",
    category: "AIOps & Observability",
    description:
      "AI-powered infrastructure monitoring and observability platform that delivers proactive incident detection, root-cause insights, and operational intelligence.",
    highlights: [
      "Real-Time Monitoring",
      "Incident Intelligence",
      "Predictive Analytics",
    ],
  },
  {
    title: "Protean",
    category: "Quality Engineering Platform",
    description:
      "Enterprise testing platform designed to improve software quality through automation, execution orchestration, and accelerated validation cycles.",
    highlights: [
      "Automation First",
      "Cross-Platform Testing",
      "Faster Releases",
    ],
  },
  {
    title: "Engineering Accelerators",
    category: "Delivery Frameworks",
    description:
      "Reusable frameworks, templates, and automation accelerators that reduce implementation effort and significantly improve delivery velocity.",
    highlights: [
      "Reusable Assets",
      "Rapid Deployment",
      "Reduced Costs",
    ],
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="bg-[#0B0B0B] py-20 lg:py-28 border-t border-[#1F1F1F]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-20">

          <span className="text-primary-red uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-semibold">
            Platforms & Accelerators
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 sm:mt-5">
            Purpose-Built Innovation
            <br className="hidden sm:block" />
            For Enterprise Delivery
          </h2>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#A0A0A0] leading-relaxed max-w-3xl mx-auto">
            Proprietary platforms, frameworks and accelerators designed
            to improve software quality, operational visibility and
            digital transformation outcomes.
          </p>

        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
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
                overflow-hidden
                hover:border-primary-red/40
                transition-all
                duration-300
              "
            >

              {/* Product Visual */}
              <div
                className="
                  h-44
                  sm:h-52
                  lg:h-56
                  bg-[#1B1B1B]
                  border-b
                  border-[#242424]
                  flex
                  items-center
                  justify-center
                  relative
                "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-red/5 via-transparent to-transparent" />

                <span className="text-[#666666] text-xs sm:text-sm relative z-10">
                  Product Dashboard Preview
                </span>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">

                <div className="text-primary-red text-xs sm:text-sm font-medium uppercase tracking-wide mb-3">
                  {product.category}
                </div>

                <h3 className="text-white text-xl sm:text-2xl font-bold mb-4">
                  {product.title}
                </h3>

                <p className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed">
                  {product.description}
                </p>

                {/* Highlights */}
                <div className="mt-6 flex flex-wrap gap-2">

                  {product.highlights.map((item) => (
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

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom Stats */}
        <div className="mt-14 lg:mt-20">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

            {[
              {
                value: "100+",
                label: "Enterprise Implementations",
              },
              {
                value: "60%",
                label: "Faster Delivery Cycles",
              },
              {
                value: "99.9%",
                label: "Operational Reliability",
              },
              {
                value: "24×7",
                label: "Monitoring & Support",
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

        </div>

      </div>
    </section>
  );
}