"use client";

import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

const getBorderClasses = (idx: number, total: number) => {
  let classes = "";
  if (idx < total - 1) classes += "border-b ";
  
  if (idx < 2) classes += "md:border-b ";
  else classes += "md:border-b-0 ";
  
  if (idx % 2 === 0 && idx !== total - 1) classes += "md:border-r ";
  else classes += "md:border-r-0 ";
  
  classes += "lg:border-b-0 ";
  if (idx < total - 1) classes += "lg:border-r ";
  else classes += "lg:border-r-0 ";
  
  return classes;
};

export default function CSRSection() {
  const items = [
    { title: "Education", description: "Supporting students through technology workshops, mentorship programs, and career guidance initiatives." },
    { title: "Sustainability", description: "Promoting environmentally responsible practices and sustainable growth within our ecosystem." },
    { title: "Inclusion", description: "Building opportunities that empower individuals, communities, and future innovators." }
  ];

  return (
    <SectionThemeWrapper sectionId="community_csr" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`pt-8 pb-10 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 transition-colors duration-300 ${isDark ? "bg-[#0F0F0F]" : "bg-gray-50"}`}>
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
              
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10 sm:mb-16">
                <div className="shrink-0">
                  <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-heading font-normal leading-[1.1] tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                    <EditableText path="community.csr.heading1" fallback="Creating" as="span" />
                    <br className="hidden lg:block" />
                    <span>
                      <EditableText path="community.csr.heading2" fallback="Meaningful Impact" as="span" />
                    </span>
                  </h2>
                </div>
                <div className="flex flex-col lg:items-end gap-6 max-w-xl">
                  <p className={`text-base lg:text-lg leading-relaxed lg:text-left ${isDark ? "text-gray-300" : "text-[#5A5A5A]"}`}>
                    We invest in creating a better future by actively supporting social equity, environmental sustainability, and inclusive education programs globally.
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
                        <EditableText path={`community.csr.card${i}.title`} fallback={item.title} as="span" />
                      </h3>
                      <p className={`text-sm font-normal leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        <EditableText path={`community.csr.card${i}.desc`} fallback={item.description} as="span" multiline />
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
