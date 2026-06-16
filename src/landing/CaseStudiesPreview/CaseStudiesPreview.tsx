"use client";
import { casestudiespreviewData } from "./CaseStudiesPreviewData";

import { motion } from "framer-motion";


const studies = [
  {
    title: "Enterprise Banking Transformation",
    result: "40%",
    metric: "Faster Releases",
    description:
      "Modernized testing and delivery pipelines for a large banking ecosystem, accelerating software releases and improving quality assurance.",
  },
  {
    title: "Insurance Platform Modernization",
    result: "60%",
    metric: "Reduction In Defects",
    description:
      "Implemented quality engineering frameworks and automation accelerators to improve release confidence and reduce production issues.",
  },
  {
    title: "Observability Implementation",
    result: "99.9%",
    metric: "Availability Achieved",
    description:
      "Deployed end-to-end monitoring and observability solutions for mission-critical applications and infrastructure.",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section
      className="bg-[#0A1128] py-20 lg:py-28 border-t border-[#1A264A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-20">

          <span className="text-primary-red uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-semibold">
            Success Stories
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-bold mt-4 sm:mt-5">
            Outcomes That Matter
          </h2>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#A0A0A0] leading-relaxed">
            Delivering measurable business value through digital
            transformation, quality engineering and enterprise technology
            solutions.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {studies.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                group
                bg-[#121B38]
                border
                border-[#243461]
                rounded-3xl
                overflow-hidden
                hover:border-primary-red/40
              "
            >
              {/* Image Placeholder */}
              <div
                className="
                  h-44
                  sm:h-52
                  lg:h-56
                  bg-[#1A264A]
                  border-b
                  border-[#243461]
                  flex
                  items-center
                  justify-center
                "
              >
                <span className="text-[#666] text-xs sm:text-sm">
                  Case Study Image
                </span>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">

                <div className="text-primary-red text-xs sm:text-sm font-medium mb-3 uppercase tracking-wide">
                  Featured Case Study
                </div>

                <h3 className="text-white text-xl sm:text-2xl font-bold mb-4 leading-snug">
                  {item.title}
                </h3>

                <div className="mb-5">
                  <div className="text-3xl sm:text-4xl font-bold text-primary-red">
                    {item.result}
                  </div>

                  <div className="text-sm text-[#B0B0B0] mt-1">
                    {item.metric}
                  </div>
                </div>

                <p className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>

                <button
                  className="
                    text-white
                    font-medium
                    inline-flex
                    items-center
                    gap-2
                    group-hover:text-primary-red
                    transition-colors
                  "
                >
                  Read Case Study

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">

          <a
            href="/newsrooms/customer-stories"
            className="
              inline-flex
              items-center
              gap-2
              text-primary-red
              font-semibold
              hover:gap-3
              transition-all
            "
          >
            View All Success Stories
            →
          </a>

        </div>

      </div>
    </section>
  );
}