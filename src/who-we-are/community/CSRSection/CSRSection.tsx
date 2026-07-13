"use client";

import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

export default function CSRSection() {
  return (
    <SectionThemeWrapper sectionId="community_csr" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`pt-8 pb-10 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 border-b transition-colors duration-300 ${isDark ? "bg-[#0F0F0F] border-[#222]" : "bg-gray-50 border-gray-200"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-left mb-10 sm:mb-16">
                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                  <EditableText path="community.csr.heading1" fallback="Creating" as="span" />{" "}
                  <span className="text-[#B40001]">
                    <EditableText path="community.csr.heading2" fallback="Meaningful Impact" as="span" />
                  </span>
                </h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {[
                  { title: "Education", description: "Supporting students through technology workshops, mentorship programs, and career guidance initiatives." },
                  { title: "Sustainability", description: "Promoting environmentally responsible practices and sustainable growth within our ecosystem." },
                  { title: "Inclusion", description: "Building opportunities that empower individuals, communities, and future innovators." }
                ].map((item, i) => (
                  <div
                    key={item.title}
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
                        <EditableText path={`community.csr.card${i}.title`} fallback={item.title} as="span" />
                      </h3>
                    </div>

                    <p className={`font-medium leading-relaxed relative z-10 transition-colors duration-300 ${
                      isDark ? "text-gray-400 group-hover:text-gray-300" : "text-gray-500 group-hover:text-gray-700"
                    }`}>
                      <EditableText path={`community.csr.card${i}.desc`} fallback={item.description} as="span" multiline />
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
