"use client";

import EditableText from "@/src/admin/components/EditableText";
import { teamcultureData } from "./TeamCultureData";


import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

const getBorderClasses = (idx: number, total: number) => {
  let classes = "";
  // Mobile
  if (idx < total - 1) classes += "border-b ";
  
  // Tablet (2 cols)
  if (idx < 2) classes += "md:border-b ";
  else classes += "md:border-b-0 ";
  
  if (idx % 2 === 0 && idx !== total - 1) classes += "md:border-r ";
  else classes += "md:border-r-0 ";
  
  // Desktop (3 cols for 3 items)
  classes += "lg:border-b-0 ";
  
  if (idx < total - 1) classes += "lg:border-r ";
  else classes += "lg:border-r-0 ";
  
  return classes;
};

export default function TeamCulture() {
  const items = [
    { title: "Continuous Learning", description: "We encourage continuous skill development, certifications, research, and innovation." },
    { title: "Collaboration", description: "Cross-functional teams work together to solve complex enterprise challenges." },
    { title: "Innovation", description: "We constantly experiment with AI, automation, and next-generation technologies." }
  ];

  return (
    <SectionThemeWrapper sectionId="team_culture" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`pt-8 pb-10 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 transition-colors duration-300 ${isDark ? "bg-[#0F0F0F]" : "bg-white"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10 sm:mb-16">
                <div className="shrink-0">
                  <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-heading font-normal leading-[1.1] tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                    <EditableText path="team.culture.heading1" fallback="Built Around" as="span" />
                    <br className="hidden lg:block" />
                    <span>
                      <EditableText path="team.culture.heading2" fallback="Learning & Innovation" as="span" />
                    </span>
                  </h2>
                </div>
                <div className="flex flex-col lg:items-end gap-6 max-w-xl">
                  <p className={`text-base lg:text-lg leading-relaxed lg:text-left ${isDark ? "text-gray-300" : "text-[#5A5A5A]"}`}>
                    We foster an environment where curiosity thrives. Our teams are empowered to experiment, learn, and grow—ensuring that every project benefits from the latest advancements in technology and methodology.
                  </p>
                </div>
              </div>

              {/* Tabular Grid Section */}
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border-t border-b ${isDark ? "border-[#222]" : "border-gray-200"}`}>
                {items.map((item, i) => (
                  <div
                    key={item.title}
                    className={`group py-6 md:py-10 px-6 xl:px-10 flex flex-col items-start gap-5 transition-colors ${
                      isDark ? "hover:bg-[#141414]" : "hover:bg-gray-100/50"
                    } ${isDark ? "border-[#222]" : "border-gray-200"} ${getBorderClasses(i, items.length)}`}
                  >
                    <div className="w-full">
                      <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                        <EditableText path={`team.culture.card${i}.title`} fallback={item.title} as="span" />
                      </h3>
                      <p className={`text-sm font-normal leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        <EditableText path={`team.culture.card${i}.desc`} fallback={item.description} as="span" multiline />
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
