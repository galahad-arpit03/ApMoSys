"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import {
  CheckCircle2,
  Search,
  Layers,
  Code,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const steps = [
  {
    id: "1",
    shortLabel: "DISCOVERY",
    title: "Discovery & Assessment",
    description:
      "We analyze your current systems, processes, and challenges to identify opportunities for automation, optimization, and modernization.",
    icon: Search,
    details: ["Technical Audit", "Stakeholder Interviews", "Process Mapping"],
    image: "/what-we-do/services/cube/stage_1_discovery.png",
  },
  {
    id: "2",
    shortLabel: "STRATEGY",
    title: "Strategy & Architecture",
    description:
      "We design a tailored engineering strategy and architectural blueprint aligned with your business goals and technical requirements.",
    icon: Layers,
    details: ["Architecture Design", "Technology Selection", "Roadmap Planning"],
    image: "/what-we-do/services/cube/stage_2_strategy.png",
  },
  {
    id: "3",
    shortLabel: "DEVELOPMENT",
    title: "Implementation & Development",
    description:
      "Our engineering teams execute the strategy using agile methodologies, delivering value incrementally with continuous feedback.",
    icon: Code,
    details: ["Agile Sprints", "CI/CD Pipeline", "Code Reviews"],
    image: "/what-we-do/services/cube/stage_3_development.png",
  },
  {
    id: "4",
    shortLabel: "VALIDATION",
    title: "Quality & Security Validation",
    description:
      "Comprehensive testing, security scanning, and performance validation ensure your systems meet the highest quality standards.",
    icon: ShieldCheck,
    details: ["Automated Testing", "Security Audit", "Performance Testing"],
    image: "/what-we-do/services/cube/stage_4_validation.png",
  },
  {
    id: "5",
    shortLabel: "DEPLOYMENT",
    title: "Deployment & Operations",
    description:
      "We deploy your solutions and provide ongoing monitoring, support, and optimization to ensure long-term success and reliability.",
    icon: Rocket,
    details: ["Production Deployment", "24/7 Monitoring", "Continuous Optimization"],
    image: "/what-we-do/services/cube/stage_5_deployment.png",
  },
];

const decorativeImage = "/what-we-do/services/cube/stage_6_decorative.png";

interface CubeFaceProps {
  step?: (typeof steps)[number];
  faceIndex: number;
  activeStep: number;
  transformStyle: string;
  isDecorative?: boolean;
}

function CubeFace({
  step,
  faceIndex,
  activeStep,
  transformStyle,
  isDecorative,
}: CubeFaceProps) {
  const isActive = activeStep === faceIndex;
  const imageSrc = isDecorative ? decorativeImage : step?.image;

  return (
    <div
      className={`absolute inset-0 rounded-none overflow-hidden select-none transition-all duration-300 ${
        isActive
          ? "border-2 border-[#6E44FF] shadow-[0_0_35px_rgba(110,68,255,0.4)] z-10"
          : "border border-gray-800/80 shadow-md opacity-90"
      }`}
      style={{
        transform: transformStyle,
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      {/* Dark Theme Image background */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={step?.title || "Cube Face"}
          className="w-full h-full object-cover rounded-none"
        />
      )}

      {/* Sleek Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-3.5 sm:p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold text-white bg-black/60 px-2 py-0.5 border border-white/10 backdrop-blur-md">
            {isDecorative ? "AP2L" : `0${step?.id}`}
          </span>
          {/* <span className="text-[9px] font-mono font-semibold text-purple-300 bg-[#6E44FF]/50 px-2 py-0.5 border border-[#6E44FF]/60 backdrop-blur-md uppercase tracking-wider">
            {isDecorative ? "CORE" : step?.shortLabel}
          </span> */}
        </div>

        <div>
          <p className="font-heading font-bold text-xs sm:text-sm text-white drop-shadow-md leading-tight line-clamp-2">
            {isDecorative ? "AP2L ENGINE" : step?.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ServiceProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Continuous interpolation for cube rotation
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, -90, -180, -270, -360]
  );

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.75, 0.9, 1],
    [-10, -10, -45, -90]
  );

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Update active step based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.2) {
      setActiveStep(0);
    } else if (latest < 0.4) {
      setActiveStep(1);
    } else if (latest < 0.6) {
      setActiveStep(2);
    } else if (latest < 0.8) {
      setActiveStep(3);
    } else {
      setActiveStep(4);
    }
  });

  const activeData = steps[activeStep];
  const ActiveIcon = activeData.icon;

  const faceTransforms = [
    "rotateY(0deg) translateZ(var(--cube-half))",
    "rotateY(90deg) translateZ(var(--cube-half))",
    "rotateY(180deg) translateZ(var(--cube-half))",
    "rotateY(-90deg) translateZ(var(--cube-half))",
    "rotateX(90deg) translateZ(var(--cube-half))",
    "rotateX(-90deg) translateZ(var(--cube-half))",
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-[170vh] bg-[#FAFAFA] border-b border-gray-100"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center py-6 sm:py-8 overflow-hidden">
        <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-8 lg:px-16">
          {/* Header section */}
          <div className="mb-6 lg:mb-8">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-[1.15]">
              A Structured Path to Engineering Excellence
            </h2>
          </div>

          {/* Main interactive grid: Process Cards (Left) & 3D Cube (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Side: Active Stage Card */}
            <div className="lg:col-span-7">
              <div className="w-full min-h-[240px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs hover:border-[#2563EB]/30 transition-all h-full flex flex-col justify-between"
                  >
                    <div>
                      {/* Header: Step Pill & Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider bg-[#2563EB]/10 px-3 py-1 rounded-full">
                          Step 0{activeData.id}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB]">
                          <ActiveIcon className="w-5 h-5" strokeWidth={1.75} />
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl sm:text-2xl font-bold text-black font-heading mb-3">
                        {activeData.title}
                      </h3>
                      <p className="text-[#5A5A5A] text-sm sm:text-base leading-relaxed mb-6">
                        {activeData.description}
                      </p>
                    </div>

                    {/* Detail tags */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                      {activeData.details.map((detail) => (
                        <span
                          key={detail}
                          className="text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-2xs"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                          {detail}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Side: 3D Cube Container */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-2 lg:py-0">
              {/* Ambient purple/blue glow */}
              <div className="absolute w-80 h-80 bg-[#6E44FF]/15 rounded-full blur-3xl pointer-events-none" />

              {/* 3D Viewport Wrapper */}
              <div className="relative flex items-center justify-center p-2 [perspective:1200px]">
                {/* 3D Cube Parent */}
                <motion.div
                  className="relative w-[285px] h-[285px] md:w-[330px] md:h-[330px] lg:w-[350px] lg:h-[350px] [--cube-half:142.5px] md:[--cube-half:165px] lg:[--cube-half:175px]"
                  style={{
                    transformStyle: "preserve-3d",
                    rotateY: shouldReduceMotion ? 0 : rotateY,
                    rotateX: shouldReduceMotion ? 0 : rotateX,
                  }}
                  transition={{ type: "spring", damping: 30, stiffness: 200 }}
                >
                  {/* 6 Cube Faces with sharp corners */}
                  {steps.map((step, idx) => (
                    <CubeFace
                      key={step.id}
                      step={step}
                      faceIndex={idx}
                      activeStep={activeStep}
                      transformStyle={faceTransforms[idx]}
                    />
                  ))}
                  {/* 6th Decorative Bottom Face */}
                  <CubeFace
                    faceIndex={5}
                    activeStep={activeStep}
                    transformStyle={faceTransforms[5]}
                    isDecorative
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}