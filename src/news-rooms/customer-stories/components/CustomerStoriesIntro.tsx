"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";
import { Sparkles } from "lucide-react";

export default function CustomerStoriesIntro() {
  return (
    <SectionThemeWrapper sectionId="customer_stories_intro" defaultTheme="light">
      {() => {
        return (
          <section className="py-6 lg:py-8 bg-[#0A1128] border-b border-[#1E234B] overflow-hidden relative">
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                
                {/* Left side: Heading */}
                <div className="lg:col-span-5">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-medium tracking-tight leading-[1.15] text-white">
                      <EditableText
                        path="customer.stories.intro.heading1"
                        fallback="Transforming Delivery Models &"
                        as="span"
                      />
                      <br className="hidden sm:block" />
                      <EditableText
                        path="customer.stories.intro.heading2"
                        fallback=" Unlocking Business Value"
                        as="span"
                      />
                    </h2>
                  </motion.div>
                </div>

                {/* Right side: Content */}
                <div className="lg:col-span-7 lg:pl-12 xl:pl-20">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6"
                  >
                    <p className="text-lg leading-relaxed text-gray-300">
                      <EditableText
                        path="customer.stories.intro.col1"
                        fallback="Customer-focused narratives showing how ApMoSys helps organizations modernize delivery, improve quality, and unlock measurable value."
                        as="span"
                        multiline
                      />
                    </p>

                    <p className="text-lg leading-relaxed text-gray-300">
                      <EditableText
                        path="customer.stories.intro.col2"
                        fallback="From core banking modernizations to high-scale e-commerce platforms, our customer stories showcase real-world engineering solutions and quantifiable outcomes."
                        as="span"
                        multiline
                      />
                    </p>
                  </motion.div>
                </div>

              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
