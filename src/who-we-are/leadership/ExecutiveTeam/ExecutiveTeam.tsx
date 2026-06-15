"use client";
import { executiveteamData } from "./ExecutiveTeamData";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ExecutiveTeam() {
  return (
    <SectionThemeWrapper sectionId="leadership_executive" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-16 sm:py-20 lg:py-24 border-b transition-colors duration-300 ${isDark ? "bg-[#0F0F0F] border-[#222]" : "bg-gray-50 border-gray-200"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center mb-10 sm:mb-16">
                <span className="text-[#B40001] uppercase tracking-[0.2em] text-xs font-bold">
                  Executive Leadership
                </span>

                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                  Meet Our Executive Team
                </h2>

                <p className={`mt-6 max-w-3xl mx-auto ${isDark ? "text-neutral-400" : "text-gray-600"}`}>
                  Experienced leaders driving innovation, enterprise growth,
                  and engineering excellence across ApMoSys.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                {executiveteamData.map((member, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    key={member.name}
                    className={`group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border ${
                      isDark 
                        ? "bg-[#161616] border-[#2A2A2A] hover:border-[#B40001]/30" 
                        : "bg-white border-gray-200 hover:border-[#B40001]/30"
                    }`}
                  >
                    <div className="grid sm:grid-cols-5 h-full">
                      {/* Image Section */}
                      <div className="sm:col-span-2 relative h-64 sm:h-auto overflow-hidden">
                        <div className="absolute inset-0 bg-[#242424]" />
                        {/* We will render a placeholder if the image path is not found or real image */}
                        {member.image ? (
                          <Image 
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                            No Image
                          </div>
                        )}
                        {/* Gradient Overlay for modern look */}
                        <div className={`absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r opacity-50 sm:opacity-20 ${isDark ? "from-[#161616] to-transparent" : "from-white to-transparent"}`} />
                      </div>

                      {/* Content Section */}
                      <div className="sm:col-span-3 p-6 sm:p-8 flex flex-col justify-center">
                        <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                          {member.name}
                        </h3>

                        <p className="text-[#B40001] mt-2 font-semibold">
                          {member.role}
                        </p>

                        <div className={`w-10 h-1 mt-4 rounded-full ${isDark ? "bg-[#333]" : "bg-gray-200"}`} />

                        <p className={`leading-relaxed mt-4 text-sm sm:text-base ${isDark ? "text-neutral-400" : "text-gray-600"}`}>
                          {member.description}
                        </p>
                      </div>
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
