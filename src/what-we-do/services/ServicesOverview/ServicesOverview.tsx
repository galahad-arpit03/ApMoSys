"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { serviceIconMap, defaultServiceIcon } from "../icons";

const CARD_STACK_CONFIG = [
  { x: 0, y: 0, rotate: -2 },
  { x: 3, y: -1, rotate: 1 },
  { x: -2, y: 2, rotate: -1 },
  { x: 2, y: 1, rotate: 2 },
  { x: -1, y: -2, rotate: -1 },
  { x: 2, y: 2, rotate: 1 },
  { x: -2, y: -1, rotate: -2 },
  { x: 1, y: 2, rotate: 1 },
];

const fallbackItems = [
  {
    id: "1",
    title: "Quality Engineering",
    description:
      "Comprehensive testing strategies including functional, automation, performance, and security testing to ensure zero-defect releases.",
    icon: "quality",
    image: "/assets/images/services/quality.png",
  },
  {
    id: "2",
    title: "Intelligent Automation",
    description:
      "AI-powered automation frameworks that reduce manual effort, accelerate delivery, and improve accuracy across your software lifecycle.",
    icon: "automation",
    image: "/assets/images/services/automation.png",
  },
  {
    id: "3",
    title: "Cloud & DevOps",
    description:
      "End-to-end cloud migration, CI/CD pipeline orchestration, infrastructure as code, and Kubernetes-based container management.",
    icon: "cloud",
    image: "/assets/images/services/cloud.png",
  },
  {
    id: "4",
    title: "Security & Compliance",
    description:
      "Comprehensive security testing, vulnerability assessments, and compliance validation for regulated industries.",
    icon: "security",
    image: "/assets/images/services/security.png",
  },
  {
    id: "5",
    title: "DevSecOps",
    description:
      "Integrated security practices into DevOps pipelines to ensure secure software delivery without compromising speed.",
    icon: "devops",
    image: "/assets/images/services/devsecops.png",
  },
  {
    id: "6",
    title: "AI Engineering",
    description:
      "Custom AI solutions including machine learning models, NLP, computer vision, and predictive analytics for enterprise applications.",
    icon: "ai",
    image: "/assets/images/services/ai.png",
  },
  {
    id: "7",
    title: "Observability & AIOps",
    description:
      "Real-time monitoring, anomaly detection, and intelligent operations management for mission-critical systems.",
    icon: "observability",
    image: "/assets/images/services/observability.png",
  },
  {
    id: "8",
    title: "Application Development",
    description:
      "Modern web and mobile application development using microservices, React, Next.js, and cloud-native architectures.",
    icon: "devops",
    image: "/assets/images/services/appdev.png",
  },
];

function useWindowDimensions() {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
}

function getCardStageLayout(width: number, height: number) {
  if (width >= 1280) {
    return {
      activeCenterX: -width * 0.16,
      activeCenterY: 0,
      targetX: width * 0.26,
      targetY: height * 0.18,
      scale: 0.66,
    };
  } else if (width >= 1024) {
    return {
      activeCenterX: -width * 0.14,
      activeCenterY: 0,
      targetX: width * 0.24,
      targetY: height * 0.16,
      scale: 0.64,
    };
  } else if (width >= 768) {
    return {
      activeCenterX: -width * 0.10,
      activeCenterY: 0,
      targetX: width * 0.18,
      targetY: height * 0.14,
      scale: 0.60,
    };
  } else {
    return {
      activeCenterX: 0,
      activeCenterY: -height * 0.05,
      targetX: width * 0.12,
      targetY: height * 0.12,
      scale: 0.55,
    };
  }
}

interface ServiceCardItemProps {
  item: typeof fallbackItems[0];
  index: number;
  totalCards: number;
  scrollYProgress: MotionValue<number>;
  dimensions: { width: number; height: number };
}

function ServiceCardItem({
  item,
  index,
  totalCards,
  scrollYProgress,
  dimensions,
}: ServiceCardItemProps) {
  const { activeCenterX, activeCenterY, targetX, targetY, scale: deckScale } =
    getCardStageLayout(dimensions.width, dimensions.height);

  const offset = CARD_STACK_CONFIG[index % CARD_STACK_CONFIG.length];
  const isLastCard = index === totalCards - 1;

  const finalDeckX = targetX + offset.x;
  const finalDeckY = targetY + offset.y;
  const finalRotate = offset.rotate;

  const slotSize = 1 / totalCards; // 0.125

  // 4 timeline points for smooth entry -> active pause -> deck travel -> deck pause
  const entryStart = index === 0 ? 0 : (index - 1) * slotSize + 0.01;
  const entryEnd = index === 0 ? 0 : (index - 1) * slotSize + 0.09;
  const moveStart = index * slotSize + 0.01;
  const moveEnd = index * slotSize + 0.09;

  // X position mapping (Last card stays at activeCenterX forever)
  const x = useTransform(scrollYProgress, (progress) => {
    if (isLastCard) {
      if (progress <= entryStart) return activeCenterX - 50;
      if (progress >= entryEnd) return activeCenterX;
      const p = (progress - entryStart) / (entryEnd - entryStart);
      return activeCenterX - 50 + p * 50;
    }
    if (progress <= entryStart && index > 0) return activeCenterX - 50;
    if (progress <= entryEnd && index > 0) {
      const p = (progress - entryStart) / (entryEnd - entryStart);
      return activeCenterX - 50 + p * 50;
    }
    if (progress <= moveStart) return activeCenterX;
    if (progress >= moveEnd) return finalDeckX;
    const p = (progress - moveStart) / (moveEnd - moveStart);
    return activeCenterX + p * (finalDeckX - activeCenterX);
  });

  // Y position mapping
  const y = useTransform(scrollYProgress, (progress) => {
    if (isLastCard) return activeCenterY;
    if (progress <= moveStart) return activeCenterY;
    if (progress >= moveEnd) return finalDeckY;
    const p = (progress - moveStart) / (moveEnd - moveStart);
    return activeCenterY + p * (finalDeckY - activeCenterY);
  });

  // Scale mapping (Last card stays enlarged at 1.0 forever)
  const scale = useTransform(scrollYProgress, (progress) => {
    if (isLastCard) {
      if (progress <= entryStart) return 0.85;
      if (progress >= entryEnd) return 1.0;
      const p = (progress - entryStart) / (entryEnd - entryStart);
      return 0.85 + p * 0.15;
    }
    if (progress <= entryStart && index > 0) return 0.85;
    if (progress <= entryEnd && index > 0) {
      const p = (progress - entryStart) / (entryEnd - entryStart);
      return 0.85 + p * 0.15;
    }
    if (progress <= moveStart) return 1.0;
    if (progress >= moveEnd) return deckScale;
    const p = (progress - moveStart) / (moveEnd - moveStart);
    return 1.0 - p * (1.0 - deckScale);
  });

  // Rotation mapping
  const rotate = useTransform(scrollYProgress, (progress) => {
    if (isLastCard || progress <= moveStart) return 0;
    if (progress >= moveEnd) return finalRotate;
    const p = (progress - moveStart) / (moveEnd - moveStart);
    return p * finalRotate;
  });

  // Opacity mapping (Once entered, NEVER drops or disappears!)
  const opacity = useTransform(scrollYProgress, (progress) => {
    if (index === 0) return 1;
    if (progress <= entryStart) return 0;
    if (progress >= entryEnd) return 1;
    return (progress - entryStart) / (entryEnd - entryStart);
  });

  // Z-Index mapping
  const zIndex = useTransform(scrollYProgress, (progress) => {
    if (isLastCard || progress < moveEnd) return 40;
    return 10 + index;
  });

  const IconComponent = serviceIconMap[item.icon] || defaultServiceIcon;

  return (
    <motion.div
      style={{
        x,
        y,
        scale,
        rotate,
        opacity,
        zIndex,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="absolute left-1/2 top-1/2 w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px] xl:w-[480px] xl:h-[480px] origin-center pointer-events-auto"
    >
      <div className="w-full h-full rounded-md overflow-hidden bg-[#0A1128] group/card flex flex-col justify-between p-6 sm:p-8 md:p-9 lg:p-10 shadow-2xl origin-center will-change-transform border border-slate-800 relative hover:bg-[#0f1730] transition-colors duration-300">
        {/* Glowing 3D Background Image in Bottom Right (CoESection style) */}
        <div
          className="absolute -bottom-10 -right-10 w-52 h-52 md:w-68 md:h-68 bg-contain bg-no-repeat bg-center opacity-30 mix-blend-screen transition-transform duration-700 group-hover/card:scale-110 group-hover/card:opacity-50 pointer-events-none"
          style={{ backgroundImage: `url(${item.image})` }}
        />

        {/* Top Header & Icon */}
        <div className="relative z-10">
          <div className="text-[10px] md:text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>ENGINEERING SERVICE</span>
            </div>
            <span className="font-mono text-blue-400 font-bold">0{index + 1}</span>
          </div>

          <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 my-3 group-hover/card:bg-blue-500 group-hover/card:text-white transition-colors duration-300">
            <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
          </div>

          <h3 className="font-heading text-xl sm:text-2xl md:text-3xl xl:text-4xl text-white font-semibold leading-tight mt-3 mb-2">
            {item.title}
          </h3>
        </div>

        {/* Bottom Content & Link */}
        <div className="relative z-10">
          <p className="text-slate-300 text-xs sm:text-sm md:text-base font-medium line-clamp-3 leading-relaxed mb-5 sm:mb-6">
            {item.description}
          </p>

          <a
            href={`/services/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="flex items-center text-blue-400 font-bold text-xs sm:text-sm tracking-widest uppercase hover:text-blue-300 transition-colors w-max cursor-pointer group/link"
          >
            LEARN MORE
            <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover/card:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const dimensions = useWindowDimensions();

  return (
    <section
      ref={sectionRef}
      id="services-grid"
      className="relative h-[800vh] bg-white border-b border-gray-100 overflow-x-clip"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-16 max-w-[1600px] mx-auto select-none">
        {/* Split Header */}
        <div className="mb-6 sm:mb-8 lg:mb-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center z-30 relative flex-shrink-0">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-[1.1] tracking-tight text-left">
              Full-Stack Engineering Services
            </h2>
          </div>
          <div className="lg:col-span-7 lg:border-l border-gray-200 lg:pl-8">
            <p className="text-sm sm:text-base lg:text-lg text-[#5A5A5A] leading-relaxed text-left font-normal max-w-3xl">
              End-to-end engineering capabilities spanning quality assurance, automation, cloud, security, and AI — designed to accelerate your enterprise transformation.
            </p>
          </div>
        </div>

        {/* Card Stage / Deck Container */}
        <div className="relative flex-grow w-full flex items-center justify-center min-h-[400px] sm:min-h-[460px]">
          {fallbackItems.map((item, index) => (
            <ServiceCardItem
              key={item.id}
              item={item}
              index={index}
              totalCards={fallbackItems.length}
              scrollYProgress={scrollYProgress}
              dimensions={dimensions}
            />
          ))}
        </div>
      </div>
    </section>
  );
}