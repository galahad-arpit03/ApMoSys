"use client";
import { industriespreviewData } from "./IndustriesPreviewData";

import { motion } from "framer-motion";


const industries = [
  {
    title: "Banking & Financial Services",
    description:
      "Accelerating digital banking, payment systems, regulatory compliance and enterprise modernization initiatives.",
    icon: "🏦",
  },
  {
    title: "Insurance",
    description:
      "Improving policy administration, claims processing, testing automation and customer experience platforms.",
    icon: "🛡️",
  },
  {
    title: "Manufacturing",
    description:
      "Enabling smart operations through automation, monitoring, analytics and connected enterprise ecosystems.",
    icon: "🏭",
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Optimizing customer journeys, digital storefronts, performance engineering and scalable commerce platforms.",
    icon: "🛒",
  },
  {
    title: "Logistics & Supply Chain",
    description:
      "Building resilient supply chain systems with visibility, automation and real-time operational intelligence.",
    icon: "🚚",
  },
  {
    title: "Healthcare",
    description:
      "Supporting secure, compliant and high-availability healthcare applications and digital platforms.",
    icon: "🏥",
  },
  {
    title: "Telecommunications",
    description:
      "Enhancing network operations, observability, customer platforms and digital service delivery.",
    icon: "📡",
  },
  {
    title: "Enterprise Technology",
    description:
      "Driving large-scale digital transformation initiatives across modern enterprise ecosystems.",
    icon: "💻",
  },
];

export default function IndustriesPreview() {
  return (
    <section
      className="bg-[#111111] py-20 lg:py-28 border-t border-[#1F1F1F]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-14 lg:mb-20">

          <span className="text-primary-red uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-semibold">
            Industries We Serve
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-bold mt-4 sm:mt-5">
            Deep Industry Expertise.
            <br className="hidden sm:block" />
            Proven Enterprise Impact.
          </h2>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#A0A0A0] leading-relaxed max-w-3xl mx-auto">
            ApMoSys partners with organizations across highly regulated
            and technology-intensive industries to accelerate innovation,
            strengthen quality, and drive operational excellence.
          </p>

        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">

          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
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
                border-[#242424]
                rounded-2xl
                p-6
                lg:p-8
                hover:border-primary-red/40
                transition-all
                duration-300
              "
            >

              {/* Icon */}
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
                  text-2xl
                  mb-6
                "
              >
                {industry.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  text-white
                  text-lg
                  lg:text-xl
                  font-semibold
                  leading-snug
                  mb-4
                "
              >
                {industry.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-[#A0A0A0]
                  text-sm
                  lg:text-base
                  leading-relaxed
                "
              >
                {industry.description}
              </p>

            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">

          <a
            href="/industries"
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
            Explore All Industries
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  );
}