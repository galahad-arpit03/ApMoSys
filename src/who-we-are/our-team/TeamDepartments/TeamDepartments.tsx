"use client";

import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { teamdepartmentsData } from "./TeamDepartmentsData";


const departments = [
  {
    title: "AI Engineering",
    description:
      "Building intelligent automation and AI-driven enterprise solutions.",
  },
  {
    title: "Digital Assurance",
    description:
      "Ensuring software quality through advanced testing frameworks.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Accelerating deployments and infrastructure modernization.",
  },
  {
    title: "Product Engineering",
    description:
      "Designing and delivering innovative enterprise platforms.",
  },
  {
    title: "Customer Success",
    description:
      "Helping customers maximize value from every engagement.",
  },
  {
    title: "Research & Innovation",
    description:
      "Exploring emerging technologies and future-ready solutions.",
  },
];

const getBorderClasses = (idx: number, total: number) => {
  let classes = "";
  // Mobile
  if (idx < total - 1) classes += "border-b ";
  
  // Tablet (2 cols)
  if (idx < total - 2) classes += "md:border-b ";
  else classes += "md:border-b-0 ";
  
  if (idx % 2 === 0) classes += "md:border-r ";
  else classes += "md:border-r-0 ";
  
  // Desktop (3 cols for 6 items)
  if (idx < total - 3) classes += "lg:border-b ";
  else classes += "lg:border-b-0 ";
  
  if ((idx + 1) % 3 !== 0) classes += "lg:border-r ";
  else classes += "lg:border-r-0 ";
  
  return classes;
};

export default function TeamDepartments() {
  return (
    <SectionThemeWrapper sectionId="team_departments" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-10 sm:py-14 lg:py-16 transition-colors duration-300 ${isDark ? "bg-[#0F0F0F]" : "bg-gray-50"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10 sm:mb-16">
                <div className="shrink-0">
                  <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-heading font-normal leading-[1.1] tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                    <EditableText path="team.departments.heading1" fallback="Diverse Expertise," as="span" />
                    <br className="hidden lg:block" />
                    <span>
                      <EditableText path="team.departments.heading2" fallback="One Mission" as="span" />
                    </span>
                  </h2>
                </div>
                <div className="flex flex-col lg:items-end gap-6 max-w-xl">
                  <p className={`text-base lg:text-lg leading-relaxed lg:text-left ${isDark ? "text-gray-300" : "text-[#5A5A5A]"}`}>
                    Our organization is built on the strength of specialized teams working in perfect harmony. From engineering to customer success, every department shares a unified vision to deliver uncompromising quality.
                  </p>
                </div>
              </div>

              {/* Tabular Grid Section */}
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border-t border-b ${isDark ? "border-[#222]" : "border-gray-200"}`}>
                {departments.map((department, i) => (
                  <div
                    key={department.title}
                    className={`group py-6 md:py-10 px-6 xl:px-10 flex flex-col items-start gap-5 transition-colors ${
                      isDark ? "hover:bg-[#141414]" : "hover:bg-gray-100/50"
                    } ${isDark ? "border-[#222]" : "border-gray-200"} ${getBorderClasses(i, departments.length)}`}
                  >
                    <div className="w-full">
                      <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                        <EditableText path={`team.departments.card${i}.title`} fallback={department.title} as="span" />
                      </h3>
                      <p className={`text-sm font-normal leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        <EditableText path={`team.departments.card${i}.desc`} fallback={department.description} as="span" multiline />
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
