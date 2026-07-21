import { nextgensectionData } from "./NextGenSectionData";
import React from "react";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";


export default function NextGenSection() {
  return (
    <SectionThemeWrapper sectionId="careers_nextgen" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            className={`py-12 lg:py-16 border-t transition-colors duration-300 overflow-hidden ${
              isDark ? "bg-[#0A1128] text-white border-[#1F2C47]" : "bg-white text-gray-900 border-gray-200"
            }`}
          >
            <Container>
              <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                
                {/* Left Text */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="col-span-6 mb-12 lg:mb-0"
                >
                  <EditableText
                    path="careers.nextgen.heading"
                    fallback="The Next Generation of Architects."
                    as="h2"
                    className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] mb-6 block ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  />
                  <EditableText
                    path="careers.nextgen.subheading"
                    fallback="We do not just hire talent; we groom it. Our specialized training programs are designed to transform promising graduates into elite software architects and automation specialists ready for industry challenges."
                    as="p"
                    className={`text-lg sm:text-xl leading-relaxed mb-10 max-w-lg block ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                    multiline
                  />
                  
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className={`border p-6 rounded-xl flex-1 transition-colors ${
                      isDark ? "bg-[#1A233A] border-[#1F2C47]" : "bg-gray-50 border-gray-200"
                    }`}>
                      <EditableText
                        path="careers.nextgen.stat1Value"
                        fallback="6 Months"
                        as="span"
                        className={`block text-[17px] font-bold mb-1.5 ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      />
                      <EditableText
                        path="careers.nextgen.stat1Label"
                        fallback="Intense Bootcamp"
                        as="span"
                        className={`text-[13px] font-semibold uppercase tracking-widest block ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      />
                    </div>
                    <div className={`border p-6 rounded-xl flex-1 transition-colors ${
                      isDark ? "bg-[#1A233A] border-[#1F2C47]" : "bg-gray-50 border-gray-200"
                    }`}>
                      <EditableText
                        path="careers.nextgen.stat2Value"
                        fallback="Paid"
                        as="span"
                        className={`block text-[17px] font-bold mb-1.5 ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      />
                      <EditableText
                        path="careers.nextgen.stat2Label"
                        fallback="Global Internship"
                        as="span"
                        className={`text-[13px] font-semibold uppercase tracking-widest block ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Right Testimonial */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  className="col-span-6 lg:pl-10"
                >
                  <div className={`border p-10 rounded-2xl relative transition-colors ${
                    isDark ? "bg-[#1A233A] border-[#1F2C47]" : "bg-gray-50 border-gray-200"
                  }`}>
                    <svg
                      className={`absolute top-6 right-8 w-12 h-12 transition-colors ${
                        isDark ? "text-[#2563EB]/20" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    
                    <div className={`relative z-10 text-lg font-medium leading-relaxed mb-8 block ${
                      isDark ? "text-gray-300" : "text-slate-800"
                    }`}>
                      <EditableText
                        path="careers.nextgen.quote"
                        fallback={`"The ApMoSys training academy didn't just teach me how to think about systems. I transitioned from a fresh graduate to leading a QA automation team in under two years."`}
                        as="p"
                        className="block cursor-pointer"
                        multiline
                      />
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full flex-shrink-0 bg-gradient-to-tr from-[#2563EB] to-blue-400" />
                      <div>
                        <EditableText
                          path="careers.nextgen.quoteAuthor"
                          fallback="Sarah Jenkins"
                          as="h4"
                          className={`font-bold block text-[17px] ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        />
                        <EditableText
                          path="careers.nextgen.quoteRole"
                          fallback="Lead Automation Architect"
                          as="p"
                          className={`text-[13px] font-semibold uppercase tracking-wider block ${
                            isDark ? "text-gray-400" : "text-gray-500"
                          }`}
                        />
                      </div>
                    </div>
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
