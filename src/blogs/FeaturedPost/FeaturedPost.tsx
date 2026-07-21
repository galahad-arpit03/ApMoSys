import { featuredpostData } from "./FeaturedPostData";
import React from "react";
import Image from "next/image";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function FeaturedPost() {
  return (
    <SectionThemeWrapper sectionId="blogs_featured" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            className={`relative min-h-[550px] lg:min-h-[600px] flex items-center pt-20 pb-28 border-b transition-colors duration-300 ${
              isDark ? "bg-[#0A1128] text-white border-[#1F2C47]" : "bg-white text-gray-900 border-gray-200"
            }`}
          >
            {/* Background gradients for premium feel */}
            <div className={`absolute inset-0 pointer-events-none ${
              isDark ? "bg-blue-600/10" : "bg-blue-600/5"
            }`} />

            <Container className="relative z-10 w-full">
              <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                  className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left flex flex-col items-start mb-12 lg:mb-0"
                >
                <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
                  <span className="text-[#2563EB] text-xs font-bold tracking-widest uppercase">
                    <EditableText
                      path="blogs.featured.tag"
                      fallback="FEATURED REPORT"
                      as="span"
                    />
                  </span>
                  <span className={`text-sm font-medium tracking-wide ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                    March 24, 2024
                  </span>
                </motion.div>
                
                <motion.h1 variants={fadeUp} className="mb-6 leading-[1.1]">
                  <EditableText
                    path="blogs.featured.heading"
                    fallback="Quantifying the ROI of AI-Driven Performance Engineering"
                    as="span"
                    className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  />
                </motion.h1>
                
                <motion.p variants={fadeUp} className={`text-lg sm:text-xl leading-relaxed mb-10 ${
                  isDark ? "text-gray-300" : "text-[#5A5A5A]"
                }`}>
                  <EditableText
                    path="blogs.featured.excerpt"
                    fallback="A deep dive into how modern enterprises are leveraging autonomous observability and automated root-cause analysis to reduce MTTR by 60%."
                    as="span"
                    multiline
                    className={`text-lg sm:text-xl leading-relaxed ${isDark ? "text-gray-300" : "text-[#5A5A5A]"}`}
                  />
                </motion.p>
                
                <motion.div variants={fadeUp}>
                  <a
                    href="#read"
                    className="inline-flex justify-center items-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-md text-sm transition-colors cursor-pointer"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </motion.div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="lg:col-span-6 relative w-full"
                >
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src="/blogs/blogs_featured.png"
                      alt="Featured Post"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>

              </div>
            </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
