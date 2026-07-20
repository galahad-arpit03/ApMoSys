"use client";

import React from "react";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import { useContentStore } from "@/src/admin/store/adminStore";
import { productIconMap, defaultProductIcon } from "../icons";

export default function ProductBenefits() {
  const { content } = useContentStore();
  const benefitItems = content.products?.benefits?.items || [];

  return (
    <section className="py-16 lg:py-24 bg-[#0A1128] border-t border-[#1A264A] relative overflow-hidden">
      {/* Subtle background glow - darker for dark theme */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Header – matching landing page pattern */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            {/* <span className="text-[#2563EB] uppercase tracking-[0.25em] text-xs font-semibold">
              <EditableText
                path="products.benefits.label"
                fallback="Why Our Products"
                as="span"
              />
            </span> */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-white mt-4 leading-[1.1]">
              <EditableText
                path="products.benefits.heading"
                fallback="Built for Enterprise Excellence"
                as="span"
              />
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              <EditableText
                path="products.benefits.description"
                fallback="Every product in the ApMoSys suite is engineered to solve complex enterprise challenges — delivering security, scalability, and intelligent automation at every level."
                as="span"
                multiline
              />
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefitItems.map((benefit, idx) => {
            const IconComponent = productIconMap[benefit.icon] || defaultProductIcon;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group relative bg-[#121B38] border border-[#1A264A] rounded-md p-8 transition-all hover:-translate-y-1 hover:border-[#2563EB]/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.05)]"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-md border border-[#2563EB]/30 bg-[#2563EB]/20 flex items-center justify-center text-[#2563EB] mb-5 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  <IconComponent className="w-7 h-7" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#2563EB] transition-colors">
                  <EditableText
                    path={`products.benefits.items.${idx}.title`}
                    fallback={benefit.title}
                    as="span"
                  />
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed">
                  <EditableText
                    path={`products.benefits.items.${idx}.description`}
                    fallback={benefit.description}
                    as="span"
                    multiline
                  />
                </p>

                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#2563EB] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}