"use client";
import { eventssectionData } from "./EventsSectionData";


import Image from "next/image";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

const events = [
  {
    title: "Technology Leadership Summit",
    description: "Bringing together technology leaders and innovators to discuss future trends.",
    image: "/community/tech-leadership-summit.png"
  },
  {
    title: "Student Innovation Challenge",
    description: "Encouraging young minds to solve real-world problems through technology.",
    image: "/community/student-innovation-challenge.png"
  },
  {
    title: "Community Tech Day",
    description: "A collaborative event focused on learning, networking, and innovation.",
    image: "/community/community-tech-day.png"
  },
];

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

export default function EventsSection() {
  return (
    <SectionThemeWrapper sectionId="community_events" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-10 sm:py-14 lg:py-16 transition-colors duration-300 ${isDark ? "bg-[#0A1128]" : "bg-white"}`}>
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
              
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10 sm:mb-16">
                <div className="shrink-0">
                  <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-heading font-normal leading-[1.1] tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                    <EditableText path="community.events.heading1" fallback="Connecting" as="span" />
                    <br className="hidden lg:block" />
                    <span>
                      <EditableText path="community.events.heading2" fallback="Through Experiences" as="span" />
                    </span>
                  </h2>
                </div>
                <div className="flex flex-col lg:items-end gap-6 max-w-xl">
                  <p className={`text-base lg:text-lg leading-relaxed lg:text-left ${isDark ? "text-gray-300" : "text-[#5A5A5A]"}`}>
                    Join our engaging events and collaborative programs designed to connect innovators, empower communities, and drive meaningful impact across the tech ecosystem.
                  </p>
                </div>
              </div>

              {/* Tabular Grid Section with Images */}
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border-t border-b ${isDark ? "border-[#1F2C47]" : "border-gray-200"}`}>
                {events.map((event, i) => (
                  <div
                    key={event.title}
                    className={`group py-6 md:py-10 px-6 xl:px-10 flex flex-col transition-colors ${
                      isDark ? "hover:bg-[#121B31]/50" : "hover:bg-gray-100/50"
                    } ${isDark ? "border-[#1F2C47]" : "border-gray-200"} ${getBorderClasses(i, events.length)}`}
                  >
                    <div className="relative w-full h-48 sm:h-56 lg:h-48 xl:h-56 mb-8 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                    </div>
                    
                    <div className="w-full">
                      <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                        <EditableText path={`community.events.card${i}.title`} fallback={event.title} as="span" />
                      </h3>
                      <p className={`text-sm font-normal leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        <EditableText path={`community.events.card${i}.desc`} fallback={event.description} as="span" multiline />
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
