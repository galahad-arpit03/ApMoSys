"use client";
import { eventssectionData } from "./EventsSectionData";


const events = [
  {
    title: "Technology Leadership Summit",
    description:
      "Bringing together technology leaders and innovators to discuss future trends.",
  },
  {
    title: "Student Innovation Challenge",
    description:
      "Encouraging young minds to solve real-world problems through technology.",
  },
  {
    title: "Community Tech Day",
    description:
      "A collaborative event focused on learning, networking, and innovation.",
  },
];

import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

export default function EventsSection() {
  return (
    <SectionThemeWrapper sectionId="community_events" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-10 sm:py-14 lg:py-16 transition-colors duration-300 ${isDark ? "bg-[#0F0F0F]" : "bg-white"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-left mb-10 sm:mb-16">
                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                  <EditableText path="community.events.heading1" fallback="Connecting" as="span" />{" "}
                  <span className="text-[#B40001]">
                    <EditableText path="community.events.heading2" fallback="Through Experiences" as="span" />
                  </span>
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {events.map((event) => (
                  <div
                    key={event.title}
                    className={`border rounded-xl overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#161616] border-[#2A2A2A]" : "bg-gray-50 border-gray-200"}`}
                  >
                    <div className={`h-48 sm:h-56 ${isDark ? "bg-[#252525]" : "bg-gray-200"}`} />
                    <div className="p-6 sm:p-8">
                      <h3 className={`text-xl sm:text-2xl font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                        {event.title}
                      </h3>
                      <p className={`mt-5 leading-7 ${isDark ? "text-neutral-400" : "text-gray-600"}`}>
                        {event.description}
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
