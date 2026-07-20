"use client";
import React from "react";
import { corporateCTAData } from "./CorporateCTAData";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface CorporateCTAProps {
  tag?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  sectionId?: string;
  editablePrefix?: string;
}

export default function CorporateCTA({
  tag,
  heading = corporateCTAData.heading,
  description = corporateCTAData.description,
  buttonText = corporateCTAData.buttonText,
  sectionId = "about_cta",
  editablePrefix = "about.cta"
}: CorporateCTAProps) {
  return (
    <SectionThemeWrapper sectionId={sectionId} defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-10 lg:py-16 transition-colors duration-300 ${isDark ? "bg-[#0F0F0F]" : "bg-white"} px-6 sm:px-8 lg:px-16`}>
            <div className="max-w-[1600px] mx-auto relative rounded-[12px] overflow-hidden shadow-2xl min-h-[300px] md:min-h-[350px] lg:min-h-[380px] flex flex-col justify-center">
              
              {/* Background Image & Overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/assets/images/abstract-waves.png"
                  alt="Background"
                  fill
                  quality={90}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#2b4c8f]/80 mix-blend-multiply"></div>
              </div>

              <div className="relative z-10 p-8 sm:p-12 lg:p-16 w-full flex flex-col lg:flex-row items-center justify-between gap-8">
                
                <div className="max-w-2xl text-left w-full">
                  {tag && (
                    <span className="text-white/80 font-bold uppercase tracking-widest text-xs sm:text-sm mb-4 block">
                      {tag}
                    </span>
                  )}
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight leading-tight">
                    <EditableText
                      path={`${editablePrefix}.heading`}
                      fallback={heading}
                      as="span"
                    />
                  </h2>
                  <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
                    <EditableText
                      path={`${editablePrefix}.description`}
                      fallback={description}
                      as="span"
                      multiline
                    />
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
                  <button className="px-8 py-3.5 bg-white text-[#0F172A] rounded-md font-semibold text-sm text-center shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                    <EditableText
                      path={`${editablePrefix}.buttonText`}
                      fallback={buttonText}
                      as="span"
                    />
                  </button>
                  <button className="px-8 py-3.5 bg-white text-[#0F172A] rounded-md font-semibold text-sm text-center shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                    View Blogs
                  </button>
                </div>

              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
