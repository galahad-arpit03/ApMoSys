"use client";
import { teamgalleryData } from "./TeamGalleryData";


const gallery = [
  "/team/team1.jpg",
  "/team/team2.jpg",
  "/team/team3.jpg",
  "/team/team4.jpg",
  "/team/team5.jpg",
  "/team/team6.jpg",
];

import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

export default function TeamGallery() {
  return (
    <SectionThemeWrapper sectionId="team_gallery" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-10 sm:py-14 lg:py-16 transition-colors duration-300 ${isDark ? "bg-[#0F0F0F]" : "bg-white"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-left mb-10 sm:mb-16">
                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                  <EditableText path="team.gallery.heading1" fallback="Moments That" as="span" />{" "}
                  <span className="text-[#B40001]">
                    <EditableText path="team.gallery.heading2" fallback="Define Us" as="span" />
                  </span>
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">

                {gallery.map((image, index) => (
                  <div
                    key={index}
                    className={`h-56 sm:h-64 lg:h-[280px] rounded-xl overflow-hidden ${isDark ? "bg-[#222]" : "bg-gray-100"}`}
                  >
                    {/* Replace with actual photos */}
                    {/* <img src={image} className="w-full h-full object-cover" /> */}
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
