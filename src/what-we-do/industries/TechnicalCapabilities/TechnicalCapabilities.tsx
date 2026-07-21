"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import EditableText from "@/src/admin/components/EditableText";

export default function TechnicalCapabilities() {
  const capabilities = [
    {
      titlePath: "industries.technical.item1Title",
      descPath: "industries.technical.item1Desc",
      fallbackTitle: "API Architecture",
      fallbackDesc: "Build resilient, fast, and scalable API gateways across multi-cloud environments.",
    },
    {
      titlePath: "industries.technical.item2Title",
      descPath: "industries.technical.item2Desc",
      fallbackTitle: "Cloud Engineering",
      fallbackDesc: "Native cloud orchestration optimized for AWS, Azure, and GCP efficiency.",
    },
    {
      titlePath: "industries.technical.item3Title",
      descPath: "industries.technical.item3Desc",
      fallbackTitle: "DevSecOps",
      fallbackDesc: "End-to-end security pipeline automation bridging the gap between dev and operations.",
    },
  ];

  return (
    <section className="py-10 lg:py-16 bg-[#0A1128] border-t border-[#1A264A] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Header – No eyebrow */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.1]">
              <EditableText
                path="industries.technical.heading"
                fallback="Technical Capabilities Tailored for Scale"
                as="span"
              />
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              <EditableText
                path="industries.technical.description"
                fallback="Our technical capabilities span the entire enterprise technology stack — from cloud infrastructure to application delivery and security."
                as="span"
                multiline
              />
            </p>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left: Capabilities List */}
          <div>
            <div className="space-y-6">
              {capabilities.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group relative p-6 rounded-md bg-[#121B38] border border-[#1A264A] hover:border-[#2563EB]/40 transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(37,99,235,0.05)] flex items-start gap-5"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base xl:text-lg font-medium text-white mb-1 leading-tight group-hover:text-[#2563EB] transition-colors">
                      <EditableText
                        path={item.titlePath}
                        fallback={item.fallbackTitle}
                        as="span"
                      />
                    </h3>
                    <p className="text-[13px] xl:text-[14px] text-gray-300 leading-snug">
                      <EditableText
                        path={item.descPath}
                        fallback={item.fallbackDesc}
                        as="span"
                        multiline
                      />
                    </p>
                  </div>

                  {/* Decorative bottom line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#2563EB] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="mt-12 lg:mt-0 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-md overflow-hidden shadow-2xl flex items-center justify-center aspect-[4/3] border border-[#1A264A] bg-[#121B38]"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
              <div className="relative z-10 flex flex-col items-center p-8 border border-[#1A264A] rounded-md bg-[#121B38]/80 backdrop-blur-sm">
                <div className="text-[#2563EB] font-mono text-sm mb-4 tracking-widest uppercase">System Telemetry</div>
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-full border-4 border-t-[#2563EB] animate-spin border-[#1A264A]"></div>
                  <div
                    className="w-16 h-16 rounded-full border-4 border-b-[#2563EB] animate-spin border-[#1A264A]"
                    style={{ animationDirection: "reverse", animationDuration: "2s" }}
                  ></div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge – updated colors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-[#2563EB] p-6 rounded-md shadow-xl z-20"
            >
              <EditableText
                path="industries.technical.badgeVal"
                fallback="15+"
                as="div"
                className="font-heading text-3xl font-extrabold text-white mb-1 text-center"
              />
              <EditableText
                path="industries.technical.badgeLabel"
                fallback="Active Partners"
                as="div"
                className="text-xs font-semibold text-white/80 uppercase tracking-wider text-center"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}