// src/what-we-do/alliance/PartnerTypes/PartnerTypes.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import EditableText from "@/src/admin/components/EditableText";
import { useContentStore } from "@/src/admin/store/adminStore";

export default function PartnerTypes() {
  const { content } = useContentStore();
  const partnerItems = content.alliance?.partners?.items || [];

  const fallbackPartners = [
    {
      id: "1",
      name: "Dynatrace",
      category: "Technology Partner",
      description:
        "Endorsed Service Partner of the Year providing enterprise observability and AIOps solutions.",
      link: "#",
    },
    {
      id: "2",
      name: "Automation Anywhere",
      category: "Technology Partner",
      description:
        "Rising Star Partner delivering intelligent automation and RPA solutions.",
      link: "#",
    },
    {
      id: "3",
      name: "AppDynamics",
      category: "Technology Partner",
      description:
        "APM Specialist providing application performance monitoring and analytics.",
      link: "#",
    },
    {
      id: "4",
      name: "MicroFocus",
      category: "Technology Partner",
      description:
        "Testing Alliance partner delivering enterprise quality engineering solutions.",
      link: "#",
    },
  ];

  const items = partnerItems.length > 0 ? partnerItems : fallbackPartners;

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Header */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            {/* <span className="text-[#2563EB] uppercase tracking-[0.25em] text-xs font-semibold">
              <EditableText
                path="alliance.partners.label"
                fallback="Our Partners"
                as="span"
              />
            </span> */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-black mt-4 leading-[1.1]">
              <EditableText
                path="alliance.partners.heading"
                fallback="Trusted Technology Alliance Partners"
                as="span"
              />
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-[#5A5A5A] leading-relaxed">
              <EditableText
                path="alliance.partners.description"
                fallback="We collaborate with the world's leading technology providers to deliver integrated solutions that accelerate enterprise transformation."
                as="span"
                multiline
              />
            </p>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-white border border-gray-200 rounded-md p-8 hover:border-[#2563EB]/30 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              {/* Partner Logo Placeholder */}
              <div className="w-full h-16 rounded-md bg-gray-100 flex items-center justify-center mb-4 text-xs font-bold text-gray-500">
                <EditableText
                  path={`alliance.partners.items.${idx}.name`}
                  fallback={partner.name}
                  as="span"
                  className="text-sm font-bold text-black"
                />
              </div>

              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest">
                <EditableText
                  path={`alliance.partners.items.${idx}.category`}
                  fallback={partner.category}
                  as="span"
                />
              </span>

              <p className="text-sm text-[#5A5A5A] leading-relaxed mt-3">
                <EditableText
                  path={`alliance.partners.items.${idx}.description`}
                  fallback={partner.description}
                  as="span"
                  multiline
                />
              </p>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <a
                  href={partner.link}
                  className="inline-flex items-center gap-2 text-xs font-bold text-black hover:text-[#2563EB] transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Decorative bottom line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#2563EB] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}