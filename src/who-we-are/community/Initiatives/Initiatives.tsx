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

const getBorderClasses = (idx: number, total: number) => {
  let classes = "";
  if (idx < total - 1) classes += "border-b ";
  
  if (idx < 2) classes += "md:border-b ";
  else classes += "md:border-b-0 ";
  
  if (idx % 2 === 0) classes += "md:border-r ";
  else classes += "md:border-r-0 ";
  
  classes += "lg:border-b-0 ";
  if (idx < total - 1) classes += "lg:border-r ";
  else classes += "lg:border-r-0 ";
  
  return classes;
};

export default function Initiatives() {
  return (
    <SectionThemeWrapper sectionId="community_initiatives" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-10 sm:py-14 lg:py-16 transition-colors duration-300 ${isDark ? "bg-[#0F0F0F]" : "bg-white"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10 sm:mb-16">
                <div className="shrink-0">
                  <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-heading font-normal leading-[1.1] tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                    <EditableText path="community.initiatives.heading1" fallback="Driving" as="span" />
                    <br className="hidden lg:block" />
                    <span>
                      <EditableText path="community.initiatives.heading2" fallback="Positive Change" as="span" />
                    </span>
                  </h2>
                </div>
                <div className="flex flex-col lg:items-end gap-6 max-w-xl">
                  <p className={`text-base lg:text-lg leading-relaxed lg:text-left ${isDark ? "text-gray-300" : "text-[#5A5A5A]"}`}>
                    Our commitment to community growth focuses on technological empowerment, knowledge distribution, and active volunteer engagement. We strive to make a difference beyond business.
                  </p>
                </div>
              </div>

              {/* Tabular Grid Section */}
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-t border-b ${isDark ? "border-[#222]" : "border-gray-200"}`}>
                {initiatives.map((initiative, i) => (
                  <div
                    key={initiative.title}
                    className={`group py-6 md:py-10 px-6 xl:px-8 flex flex-col items-start gap-5 transition-colors ${
                      isDark ? "hover:bg-[#141414]" : "hover:bg-gray-100/50"
                    } ${isDark ? "border-[#222]" : "border-gray-200"} ${getBorderClasses(i, initiatives.length)}`}
                  >
                    <div className="w-full">
                      <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                        <EditableText path={`community.initiatives.card${i}.title`} fallback={initiative.title} as="span" />
                      </h3>
                      <p className={`text-sm font-normal leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        <EditableText path={`community.initiatives.card${i}.desc`} fallback={initiative.description} as="span" multiline />
                      </p>
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
