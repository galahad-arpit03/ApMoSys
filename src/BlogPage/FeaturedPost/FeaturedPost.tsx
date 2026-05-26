import React from "react";
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
            className={`relative pt-20 pb-28 border-b transition-colors duration-300 ${
              isDark ? "bg-[#000000] text-[#FAFAFA] border-[#1F1F1F]" : "bg-[#FAFAFA] text-[#121212] border-[#E8E8E8]"
            }`}
          >
            {/* Background gradients for premium feel */}
            <div className={`absolute inset-0 bg-gradient-to-br opacity-30 pointer-events-none ${
              isDark ? "from-[#B40001]/10 to-transparent" : "from-[#B40001]/5 to-transparent"
            }`} />

            <Container className="relative z-10 w-full">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                  className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left flex flex-col items-start"
                >
                <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                  <span className="bg-primary-red text-[#FFFFFF] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm">
                    <EditableText
                      path="blogs.featured.tag"
                      fallback="FEATURED REPORT"
                      as="span"
                    />
                  </span>
                  <span className={`text-sm font-medium tracking-wide ${isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"}`}>
                    March 24, 2024
                  </span>
                </motion.div>
                
                <motion.h1 variants={fadeUp} className="mb-8 leading-[1.15]">
                  <EditableText
                    path="blogs.featured.heading"
                    fallback="Quantifying the ROI of AI-Driven Performance Engineering"
                    as="span"
                    className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-normal leading-[1.15] ${
                      isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                    }`}
                  />
                </motion.h1>
                
                <motion.p variants={fadeUp} className={`text-lg sm:text-xl leading-relaxed mb-10 ${
                  isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                }`}>
                  <EditableText
                    path="blogs.featured.excerpt"
                    fallback="A deep dive into how modern enterprises are leveraging autonomous observability and automated root-cause analysis to reduce MTTR by 60%."
                    as="span"
                    multiline
                    className={`text-lg sm:text-xl leading-relaxed ${isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"}`}
                  />
                </motion.p>
                
                <motion.div variants={fadeUp}>
                  <motion.a
                    href="#read"
                    whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(180,0,1,0.25)" }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex justify-center items-center gap-2 bg-primary-red hover:bg-primary-hover text-white font-bold px-8 py-3.5 rounded-md text-sm tracking-wide uppercase transition-all"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                </motion.div>
                </motion.div>
              </div>
            </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
