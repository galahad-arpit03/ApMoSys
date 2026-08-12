"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  AnimatePresence,
  useSpring,
} from "framer-motion";
import {
  CheckCircle2,
  Search,
  Layers,
  Code,
  ShieldCheck,
  Rocket,
  RefreshCw,
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
    image: "/assets/images/cube/stage-1-discovery.png",
  },
  {
    id: "2",
    shortLabel: "STRATEGY",
    title: "Strategy & Architecture",
    description:
      "We design a tailored engineering strategy and architectural blueprint aligned with your business goals and technical requirements.",
    icon: Layers,
    details: ["Architecture Design", "Technology Selection", "Roadmap Planning"],
    image: "/assets/images/cube/stage-2-strategy.png",
  },
  {
    id: "3",
    shortLabel: "DEVELOPMENT",
    title: "Implementation & Development",
    description:
      "Our engineering teams execute the strategy using agile methodologies, delivering value incrementally with continuous feedback.",
    icon: Code,
    details: ["Agile Sprints", "CI/CD Pipeline", "Code Reviews"],
    image: "/assets/images/cube/stage-3-development.png",
  },
  {
    id: "4",
    shortLabel: "VALIDATION",
    title: "Quality & Security Validation",
    description:
      "Comprehensive testing, security scanning, and performance validation ensure your systems meet the highest quality standards.",
    icon: ShieldCheck,
    details: ["Automated Testing", "Security Audit", "Performance Testing"],
    image: "/assets/images/cube/stage-4-validation.png",
  },
  {
    id: "5",
    shortLabel: "DEPLOYMENT",
    title: "Deployment & Operations",
    description:
      "We deploy your solutions and provide ongoing monitoring, support, and optimization to ensure long-term success and reliability.",
    icon: Rocket,
    details: ["Production Deployment", "24/7 Monitoring", "Continuous Optimization"],
    image: "/assets/images/cube/stage-5-deployment.png",
  },
  {
    id: "6",
    shortLabel: "EVOLUTION",
    title: "Continuous Evolution & Scaling",
    description:
      "We proactively monitor, scale, and evolve your systems to ensure long-term resilience and continuous innovation.",
    icon: RefreshCw,
    details: ["Performance Tuning", "Elastic Scaling", "Innovation Labs"],
    image: "/assets/images/cube/stage-6-optimization.png",
  },
];

interface CubeFaceProps {
  step: (typeof steps)[number];
  faceIndex: number;
  activeStep: number;
  transformStyle: string;
}

function CubeFace({
  step,
  faceIndex,
  activeStep,
  transformStyle,
}: CubeFaceProps) {
  const isActive = activeStep === faceIndex;
  const imageSrc = step.image;

  return (
    <div
      className={`absolute inset-0 rounded-none overflow-hidden select-none transition-all duration-300 ${isActive
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent p-3.5 sm:p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold text-white bg-black/60 px-2 py-0.5 border border-white/10 backdrop-blur-md">
            {`0${step?.id}`}
          </span>
        </div>

        <div>
          <p className="font-heading font-bold text-xs sm:text-sm text-white drop-shadow-md leading-tight line-clamp-2">
            {step?.title}
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
  // Smooth out raw scroll progress for buttery transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Continuous interpolation for 6 cube faces
  const rotateY = useTransform(
    smoothProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, -90, -180, -270, -360, -360]
  );

  const rotateX = useTransform(
    smoothProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [-10, -10, -10, -10, -90, 90]
  );

  const progressWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Update active step based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.16) {
      setActiveStep(0);
    } else if (latest < 0.33) {
      setActiveStep(1);
    } else if (latest < 0.50) {
      setActiveStep(2);
    } else if (latest < 0.66) {
      setActiveStep(3);
    } else if (latest < 0.83) {
      setActiveStep(4);
    } else {
      setActiveStep(5);
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
          <div className="mb-2 lg:mb-4">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-[1.15]">
              A Structured Path to <br /> Engineering Excellence
            </h2>
          </div>

          {/* Main interactive grid: Process Cards (Left) & 3D Cube (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Side: Active Stage Card */}
            <div className="lg:col-span-7">
              <div className="w-full h-[285px] md:h-[330px] lg:h-[350px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-gradient-to-br from-white to-purple-50/50 border border-gray-100 rounded-md p-8 sm:p-10 shadow-xl shadow-gray-200/50 hover:border-[#6E44FF]/20 hover:shadow-2xl transition-all h-full flex flex-col justify-center relative overflow-hidden group"
                  >
                    {/* Giant Background Number */}
                    <div className="absolute right-[-10px] bottom-[-30px] lg:right-[-20px] lg:bottom-[-40px] text-[180px] lg:text-[260px] font-black text-[#6E44FF]/[0.03] font-heading leading-none select-none pointer-events-none z-0 group-hover:text-[#6E44FF]/[0.06] transition-colors duration-500">
                      {activeData.id}
                    </div>

                    <div className="relative z-10 w-full lg:w-[95%]">
                      {/* Title & Description */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-heading mb-4 tracking-tight">
                        {activeData.title}
                      </h3>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 font-light">
                        {activeData.description}
                      </p>

                      {/* Detail tags */}
                      <div className="flex flex-wrap gap-2.5 pt-6 border-t border-gray-200/60">
                        {activeData.details.map((detail) => (
                          <span
                            key={detail}
                            className="text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-200 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:border-gray-300 hover:shadow transition-all"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#6E44FF]" />
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Side: 3D Cube Container */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-2 lg:py-0 h-[285px] md:h-[330px] lg:h-[350px]">
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
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}