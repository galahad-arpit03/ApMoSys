"use client";
import { initiativesData } from "./InitiativesData";


const initiatives = [
  {
    title: "Technology Workshops",
    description:
      "Hands-on sessions helping students and professionals learn emerging technologies.",
  },
  {
    title: "Industry Knowledge Sharing",
    description:
      "Webinars, tech talks, and expert sessions that encourage continuous learning.",
  },
  {
    title: "Innovation Programs",
    description:
      "Supporting innovation through hackathons, research initiatives, and collaborative projects.",
  },
  {
    title: "Employee Volunteering",
    description:
      "Encouraging employees to contribute their expertise to social and educational causes.",
  },
];

import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

export default function Initiatives() {
  return (
    <SectionThemeWrapper sectionId="community_initiatives" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-10 sm:py-14 lg:py-16 border-b transition-colors duration-300 ${isDark ? "bg-[#0F0F0F] border-[#222]" : "bg-white border-gray-200"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-left mb-10 sm:mb-16">
                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                  <EditableText path="community.initiatives.heading1" fallback="Driving" as="span" />{" "}
                  <span className="text-[#B40001]">
                    <EditableText path="community.initiatives.heading2" fallback="Positive Change" as="span" />
                  </span>
                </h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
                {initiatives.map((initiative, i) => (
                  <div
                    key={initiative.title}
                    className={`group relative p-8 sm:p-10 rounded-2xl flex flex-col h-full border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden ${
                      isDark 
                        ? "bg-[#141414]/90 border-[#2A2A2A] hover:bg-[#1A1A1A] hover:border-[#B40001]/30 hover:shadow-[0_10px_40px_rgba(180,0,1,0.1)]" 
                        : "bg-white/80 border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
                    }`}
                  >
                    <div className="mb-auto relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <span className={`text-lg sm:text-xl font-mono font-bold transition-colors duration-500 text-[#B40001]`}>
                          0{i + 1}.
                        </span>
                        <div className={`h-[1px] flex-1 transition-colors duration-500 ${isDark ? "bg-[#333] group-hover:bg-[#555]" : "bg-gray-200 group-hover:bg-gray-300"}`}></div>
                      </div>
                      
                      <h3 className={`text-2xl font-medium mb-4 tracking-tight transition-colors duration-300 ${
                        isDark ? "text-white group-hover:text-gray-100" : "text-gray-900 group-hover:text-[#B40001]"
                      }`}>
                        <EditableText path={`community.initiatives.card${i}.title`} fallback={initiative.title} as="span" />
                      </h3>
                    </div>

                    <p className={`font-medium leading-relaxed relative z-10 transition-colors duration-300 ${
                      isDark ? "text-gray-400 group-hover:text-gray-300" : "text-gray-500 group-hover:text-gray-700"
                    }`}>
                      <EditableText path={`community.initiatives.card${i}.desc`} fallback={initiative.description} as="span" multiline />
                    </p>
                    
                    {/* Faint watermark number behind the text on hover */}
                    <div className={`absolute -bottom-6 -right-4 text-9xl font-black opacity-0 group-hover:opacity-[0.03] transition-all duration-700 pointer-events-none ${isDark ? "text-white" : "text-black"} scale-75 group-hover:scale-100`}>
                      0{i + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
