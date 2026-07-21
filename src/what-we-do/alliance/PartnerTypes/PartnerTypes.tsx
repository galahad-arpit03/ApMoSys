// src/what-we-do/alliance/PartnerTypes/PartnerTypes.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import EditableText from "@/src/admin/components/EditableText";
import { useContentStore } from "@/src/admin/store/adminStore";

export default function PartnerTypes() {
  const { content } = useContentStore();
  const partnerItems = content.alliance?.partners?.items || [];

  const fallbackPartners = [
    {
      id: "1",
      name: "Dynatrace",
      category: "Technology Partner",
      description:
        "Endorsed Service Partner of the Year providing enterprise observability and AIOps solutions.",
      link: "#",
    },
    {
      id: "2",
      name: "Automation Anywhere",
      category: "Technology Partner",
      description:
        "Rising Star Partner delivering intelligent automation and RPA solutions.",
      link: "#",
    },
    {
      id: "3",
      name: "AppDynamics",
      category: "Technology Partner",
      description:
        "APM Specialist providing application performance monitoring and analytics.",
      link: "#",
    },
    {
      id: "4",
      name: "MicroFocus",
      category: "Technology Partner",
      description:
        "Testing Alliance partner delivering enterprise quality engineering solutions.",
      link: "#",
    },
  ];

  const items = partnerItems.length > 0 ? partnerItems : fallbackPartners;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const ITEMS_PER_SLIDE = 2;
  const totalSlides = Math.ceil(items.length / ITEMS_PER_SLIDE);

  const goToSlide = (index: number) => {
    setCurrentIndex((index + totalSlides) % totalSlides);
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    autoplayRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [currentIndex, isPaused]);

  // Get items for current slide
  const startIndex = currentIndex * ITEMS_PER_SLIDE;
  const currentItems = items.slice(startIndex, startIndex + ITEMS_PER_SLIDE);

  return (
    <section 
      className="py-16 lg:py-24 bg-white border-t border-gray-100 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Header */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-[1.1]">
              <EditableText
                path="alliance.partners.heading"
                fallback="Trusted Technology Alliance Partners"
                as="span"
              />
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-[#5A5A5A] leading-relaxed">
              <EditableText
                path="alliance.partners.description"
                fallback="We collaborate with the world's leading technology providers to deliver integrated solutions that accelerate enterprise transformation."
                as="span"
                multiline
              />
            </p>
          </div>
        </div>

        {/* Carousel - 2 Items at a Time */}
        <div className="relative">
          {/* Slide Container */}
          <div className="overflow-hidden rounded-md">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIdx) => {
                const start = slideIdx * ITEMS_PER_SLIDE;
                const slideItems = items.slice(start, start + ITEMS_PER_SLIDE);
                return (
                  <div
                    key={slideIdx}
                    className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {slideItems.map((partner) => (
                      <div
                        key={partner.id}
                        className="bg-[#FAFAFA] border border-gray-200 rounded-md p-6 lg:p-8 hover:border-[#2563EB]/30 hover:shadow-lg transition-all group"
                      >
                        {/* Partner Logo */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 rounded-md bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] font-bold text-xl group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                            {partner.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-black group-hover:text-[#2563EB] transition-colors">
                              <EditableText
                                path={`alliance.partners.items.${Number(partner.id) - 1}.name`}
                                fallback={partner.name}
                                as="span"
                              />
                            </h3>
                            <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest bg-[#2563EB]/10 px-2.5 py-0.5 rounded-full inline-block">
                              <EditableText
                                path={`alliance.partners.items.${Number(partner.id) - 1}.category`}
                                fallback={partner.category}
                                as="span"
                              />
                            </span>
                          </div>
                        </div>

                        <p className="text-sm text-[#5A5A5A] leading-relaxed mb-4 line-clamp-3">
                          <EditableText
                            path={`alliance.partners.items.${Number(partner.id) - 1}.description`}
                            fallback={partner.description}
                            as="span"
                            multiline
                          />
                        </p>

                        <a
                          href={partner.link}
                          className="inline-flex items-center gap-2 text-xs font-bold text-black hover:text-[#2563EB] transition-colors group/link"
                        >
                          Learn More
                          <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-[#2563EB] hover:border-[#2563EB] transition-all z-10"
                aria-label="Previous partners"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-[#2563EB] hover:border-[#2563EB] transition-all z-10"
                aria-label="Next partners"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        {totalSlides > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 h-2.5 bg-[#2563EB]"
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}