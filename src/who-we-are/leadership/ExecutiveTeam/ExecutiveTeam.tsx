"use client";
import { executiveteamData } from "./ExecutiveTeamData";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ExecutiveTeam() {
  return (
    <SectionThemeWrapper sectionId="leadership_executive" defaultTheme="light">
      {(theme) => {
        // Force light theme styling as requested
        const isDark = false;
        return (
          <section className={`py-16 sm:py-20 lg:py-24 border-b transition-colors duration-300 ${isDark ? "bg-[#0F0F0F] border-[#222]" : "bg-gray-50 border-gray-200"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-left mb-10 sm:mb-16">
                <span className="text-[#B40001] uppercase tracking-[0.2em] text-xs font-bold">
                  Executive Leadership
                </span>

                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                  Meet Our Executive Team
                </h2>

                <p className={`mt-6 max-w-3xl ${isDark ? "text-neutral-400" : "text-gray-600"}`}>
                  Experienced leaders driving innovation, enterprise growth,
                  and engineering excellence across ApMoSys.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-4 lg:gap-8 mt-12 sm:mt-16">
                {executiveteamData.map((member, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
                    key={member.name}
                    className="group relative flex flex-col items-start"
                  >
                    {/* Image Section */}
                    <div className={`relative w-full aspect-[4/5] overflow-hidden rounded-sm mb-6 ${isDark ? "bg-[#111]" : "bg-gray-100"}`}>
                      <div className={`absolute inset-0 z-10 opacity-30 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0 ${isDark ? "bg-black" : "bg-transparent"}`} />
                      {member.image ? (
                        <Image 
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                        />
                      ) : (
                        <div className={`absolute inset-0 flex items-center justify-center text-sm ${isDark ? "text-[#444]" : "text-gray-400"}`}>
                          No Image
                        </div>
                      )}
                      {/* Accent Line overlaying image bottom */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#B40001] transition-all duration-500 group-hover:w-full z-20" />
                    </div>

                    {/* Content Section */}
                    <div className="w-full">
                      <p className="text-[#B40001] uppercase tracking-widest text-xs font-bold mb-2">
                        {member.role}
                      </p>
                      
                      <h3 className={`text-2xl font-bold tracking-tight mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                        {member.name}
                      </h3>

                      <p className={`leading-relaxed text-sm sm:text-base font-light ${isDark ? "text-[#A0A0A0]" : "text-gray-600"}`}>
                        {member.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
