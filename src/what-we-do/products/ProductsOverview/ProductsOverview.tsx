"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldCheck,
  Search,
  Code,
  Rocket,
  Activity,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

// Icon mapping
const updatedIconMap: Record<string, React.ReactNode> = {
  cliqtest: <Search className="w-5 h-5" strokeWidth={1.75} />,
  netraa: <Sparkles className="w-5 h-5" strokeWidth={1.75} />,
  jupiter: <Layers className="w-5 h-5" strokeWidth={1.75} />,
  shieldvue: <ShieldCheck className="w-5 h-5" strokeWidth={1.75} />,
  swikrti: <Code className="w-5 h-5" strokeWidth={1.75} />,
  finxplore: <Rocket className="w-5 h-5" strokeWidth={1.75} />,
  saransh: <Activity className="w-5 h-5" strokeWidth={1.75} />,
  protean: <Smartphone className="w-5 h-5" strokeWidth={1.75} />,
};

interface ProductItem {
  id: string;
  title: string;
  subtitle?: string;
  category?: string;
  description: string;
  icon: string;
  img?: string;
  bg?: string;
  details?: string[];
  linkText?: string;
}

const defaultProducts: ProductItem[] = [
  {
    id: "1",
    title: "CliqTest",
    subtitle: "AUTOMATION & AI",
    category: "AI-Powered Test Automation",
    description:
      "Intelligent test automation platform that accelerates quality engineering with AI-driven test generation, self-healing execution, and continuous maintenance.",
    icon: "cliqtest",
    img: "/assets/images/heroes/cliqtest-hero.png",
    bg: "bg-[#0B0C10]",
    details: ["AI Test Generation", "Self-Healing Execution", "CI/CD Integration"],
    linkText: "Explore CliqTest",
  },
  {
    id: "2",
    title: "Netraa",
    subtitle: "VISUAL AI & UI TESTING",
    category: "Visual AI Testing & Monitoring",
    description:
      "AI-powered visual testing and monitoring platform that detects UI anomalies, layout regressions, and ensures pixel-perfect user experiences across devices.",
    icon: "netraa",
    img: "/assets/images/heroes/netraa-hero.png",
    bg: "bg-[#0066FF]",
    details: ["Pixel-Match AI", "Layout Regression Audit", "Cross-Browser Check"],
    linkText: "Explore Netraa",
  },
  {
    id: "3",
    title: "Jupiter",
    subtitle: "PERFORMANCE & SCALABILITY",
    category: "Enterprise Load & Stress Testing",
    description:
      "Enterprise-grade performance engineering platform for load testing, stress testing, bottleneck detection, and scalability validation at massive scale.",
    icon: "jupiter",
    img: "/assets/images/heroes/jupiter-hero.png",
    bg: "bg-[#0B0C10]",
    details: ["High-Scale Load Simulation", "Bottleneck AI", "Real-Time Telemetry"],
    linkText: "Explore Jupiter",
  },
  {
    id: "4",
    title: "ShieldVue",
    subtitle: "CYBER SECURITY & DEFENSE",
    category: "Automated Security & Compliance",
    description:
      "Comprehensive security validation platform that automates vulnerability scanning, penetration testing, security posture analysis, and compliance verification.",
    icon: "shieldvue",
    img: "/assets/images/heroes/shieldvue-hero.png",
    bg: "bg-[#1e293b]",
    details: ["Vulnerability Scanning", "Penetration Audit", "SOC2 Compliance"],
    linkText: "Explore ShieldVue",
  },
  {
    id: "5",
    title: "Swikrti",
    subtitle: "WORKFLOW & COMPLIANCE",
    category: "Intelligent Document Automation",
    description:
      "Intelligent document processing and workflow automation platform that streamlines complex business operations with AI, OCR, and RPA integration.",
    icon: "swikrti",
    img: "/assets/images/heroes/swikruti-hero.png",
    bg: "bg-[#121212]",
    details: ["AI Document OCR", "Workflow Automation", "Zero-Defect Audit"],
    linkText: "Explore Swikrti",
  },
  {
    id: "6",
    title: "FinXplore",
    subtitle: "FINANCIAL ANALYTICS & BFSI",
    category: "BFSI Analytics & Reporting",
    description:
      "Advanced financial analytics and reporting platform that provides real-time transaction insights, predictive risk modeling, and regulatory compliance.",
    icon: "finxplore",
    img: "/assets/images/heroes/finxplore-hero.png",
    bg: "bg-[#3b82f6]",
    details: ["Predictive Risk AI", "Real-Time Analytics", "BFSI Compliance"],
    linkText: "Explore FinXplore",
  },
  {
    id: "7",
    title: "Saransh",
    subtitle: "OBSERVABILITY & AIOPS",
    category: "Unified Observability & Insights",
    description:
      "Unified observability and AIOps platform that delivers end-to-end telemetry monitoring, incident intelligence, and automated root-cause analysis.",
    icon: "saransh",
    img: "/assets/images/heroes/saransh-hero.png",
    bg: "bg-[#0B0C10]",
    details: ["End-to-End Tracing", "AIOps Root-Cause", "Incident Alerting"],
    linkText: "Explore Saransh",
  },
  {
    id: "8",
    title: "Protean Device Lab",
    subtitle: "CLOUD DEVICE LAB",
    category: "On-Demand Device Cloud",
    description:
      "Cloud-based device testing lab providing on-demand access to thousands of real mobile devices, OS versions, and screen resolutions for validation.",
    icon: "protean",
    img: "/assets/images/heroes/protean-hero.png",
    bg: "bg-[#1e1b4b]",
    details: ["Real Devices Cloud", "Cross-Platform AI", "Parallel Execution"],
    linkText: "Explore Protean",
  },
];

export default function ProductsOverview() {
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const startX = useRef(0);
  const currentRotation = useRef(0);
  const autoRotateRef = useRef<number | null>(null);

  const pathname = usePathname();
  const isEditRoute = pathname?.startsWith("/administrator");

  const { content } = useContentStore();
  const cmsItems = (content.products?.overview?.items || []) as ProductItem[];

  const products: ProductItem[] = defaultProducts.map((def, idx) => {
    const cms = cmsItems[idx];
    if (!cms) return def;
    return {
      ...def,
      ...cms,
      img: cms.img || def.img,
      bg: cms.bg || def.bg,
      subtitle: cms.subtitle || def.subtitle,
      category: cms.category || def.category,
      details: cms.details || def.details,
    };
  });

  const numCards = products.length;
  const radius = 210; // 3D cylinder radius

  // Determine which card is facing front based on net rotation angle
  useEffect(() => {
    let bestIdx = 0;
    let minDiff = Infinity;
    for (let i = 0; i < numCards; i++) {
      const angle = (360 / numCards) * i;
      let net = (angle + rotation) % 360;
      if (net > 180) net -= 360;
      if (net < -180) net += 360;
      const diff = Math.abs(net);
      if (diff < minDiff) {
        minDiff = diff;
        bestIdx = i;
      }
    }
    if (bestIdx !== activeIndex) {
      setActiveIndex(bestIdx);
    }
  }, [rotation, numCards, activeIndex]);

  // Moderate speed auto rotation (pauses on drag or hover)
  useEffect(() => {
    if (!isDragging && !isHovered) {
      const animate = () => {
        setRotation((prev) => prev - 0.22);
        autoRotateRef.current = requestAnimationFrame(animate);
      };
      autoRotateRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (autoRotateRef.current) cancelAnimationFrame(autoRotateRef.current);
    };
  }, [isDragging, isHovered]);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    startX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
    currentRotation.current = rotation;
  };

  const onDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const delta = x - startX.current;
    setRotation(currentRotation.current + delta * 0.45);
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  const selectProduct = (index: number) => {
    const targetAngle = -(360 / numCards) * index;
    setRotation(targetAngle);
    setActiveIndex(index);
  };

  const activeProduct = products[activeIndex] || products[0];
  const ActiveIconNode =
    updatedIconMap[activeProduct.icon] || updatedIconMap["cliqtest"];

  return (
    <section
      id="products-grid"
      className="py-12 lg:py-20 bg-white border-t border-gray-100 relative overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6E44FF] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Header section */}
        <div className="mb-10 lg:mb-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-[1.15]">
              <EditableText
                path="products.overview.heading"
                fallback="Purpose-Built Platforms for Enterprise Excellence"
                as="span"
              />
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <p className="text-sm sm:text-base text-[#5A5A5A] leading-relaxed max-w-2xl">
              <EditableText
                path="products.overview.description"
                fallback="From AI-powered testing and observability to security validation and device labs — our products are designed to solve real-world enterprise challenges."
                as="span"
                multiline
              />
            </p>
          </div>
        </div>

        {/* Product selector quick pills */}
        {/* <div className="mb-10 flex flex-wrap items-center gap-2 pb-2 border-b border-gray-100">
          {products.map((item, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={item.id || idx}
                onClick={() => selectProduct(idx)}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#2563EB] text-white shadow-xs font-semibold"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200/80"
                }`}
              >
                <span>0{idx + 1}</span>
                <span>{item.title}</span>
              </button>
            );
          })}
        </div> */}

        {/* Main Grid Layout: 3D Rotating Cards (Left) & Active Product Info (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: 3D Rotating Cards Carousel */}
          <div
            className="lg:col-span-5 flex flex-col items-center justify-center relative py-4 lg:py-0 select-none cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              stopDrag();
            }}
            onMouseDown={startDrag}
            onMouseMove={onDrag}
            onMouseUp={stopDrag}
            onTouchStart={startDrag}
            onTouchMove={onDrag}
            onTouchEnd={stopDrag}
          >
            {/* Ambient subtle glow behind cards */}
            <div className="absolute w-72 h-72 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />

            {/* 3D Viewport Wrapper */}
            <div
              className="relative w-full h-[360px] flex items-center justify-center overflow-hidden"
              style={{ perspective: "1200px" }}
            >
              {/* 3D Rotating Cylinder Parent */}
              <div
                className="relative w-[160px] h-[240px]"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateX(-10deg) rotateY(${rotation}deg)`,
                  transition: isDragging ? "none" : "transform 0.15s linear",
                }}
              >
                {products.map((item, index) => {
                  const angle = (360 / numCards) * index;
                  const isCurrentActive = activeIndex === index;
                  const cardBg = item.bg || "bg-[#0B0C10]";
                  const cardImage = item.img || "/assets/images/heroes/cliqtest-hero.png";

                  return (
                    <div
                      key={item.id || index}
                      onClick={() => selectProduct(index)}
                      className={`absolute top-0 left-0 w-full h-full rounded-xl p-4 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-300 cursor-pointer ${cardBg} text-white ${
                        isCurrentActive
                          ? "ring-2 ring-[#2563EB] shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                          : "opacity-80 border border-white/10"
                      }`}
                      style={{
                        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                      }}
                    >
                      {/* Background Hero Image */}
                      {cardImage && (
                        <div className="absolute inset-0 opacity-55 z-0">
                          <Image
                            src={cardImage}
                            alt={item.title}
                            fill
                            className="object-cover object-center rounded-xl"
                            sizes="200px"
                          />
                        </div>
                      )}

                      {/* Card Overlay & Text Content */}
                      <div className="relative z-10 w-full h-full flex flex-col justify-between bg-gradient-to-t from-black/85 via-black/30 to-transparent p-1 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-white bg-black/60 px-2 py-0.5 rounded border border-white/10">
                            0{index + 1}
                          </span>
                          <span className="text-[9px] font-mono font-semibold text-blue-300 bg-[#2563EB]/40 px-2 py-0.5 rounded uppercase tracking-wider">
                            {item.subtitle || "PLATFORM"}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-white leading-tight drop-shadow-md">
                            {item.title}
                          </h4>
                          <p className="text-[10px] text-gray-300 font-mono tracking-wider mt-0.5">
                            AP2L PRODUCT
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Rotation interaction hint */}
            {/* <div className="mt-2 flex items-center gap-2 text-xs font-mono text-gray-400 bg-white/80 border border-gray-200 px-3 py-1 rounded-full shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-ping" />
              <span>ROTATE CARDS TO EXPLORE PRODUCTS</span>
            </div> */}
          </div>

          {/* Right Side: Active Designated Product Information Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 xl:p-10 shadow-sm hover:border-[#2563EB]/30 transition-all flex flex-col justify-between min-h-[380px]"
              >
                <div>
                  {/* Top Badge & Controls */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider bg-[#2563EB]/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                         {activeIndex + 1} 
                      </span>
                      <span className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">
                        {activeProduct.subtitle || "PLATFORM"}
                      </span>
                    </div>

                    {/* Manual Navigation Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          selectProduct(
                            (activeIndex - 1 + products.length) % products.length
                          )
                        }
                        className="p-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                        aria-label="Previous Product"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() =>
                          selectProduct((activeIndex + 1) % products.length)
                        }
                        className="p-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                        aria-label="Next Product"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Icon & Title Row */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] shrink-0">
                      {ActiveIconNode}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold text-[#2563EB] uppercase tracking-wider">
                        {activeProduct.category || "Enterprise Platform"}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-black font-heading leading-tight mt-0.5">
                        <EditableText
                          path={`products.overview.items.${activeIndex}.title`}
                          fallback={activeProduct.title}
                          as="span"
                        />
                      </h3>
                    </div>
                  </div>

                  {/* Full Description */}
                  <p className="text-[#5A5A5A] text-sm sm:text-base leading-relaxed mb-6">
                    <EditableText
                      path={`products.overview.items.${activeIndex}.description`}
                      fallback={activeProduct.description}
                      as="span"
                      multiline
                    />
                  </p>

                  {/* Feature Detail Tags */}
                  {activeProduct.details && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {activeProduct.details.map((detail: string) => (
                        <span
                          key={detail}
                          className="text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-2xs"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                          {detail}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Explore Action CTA Button */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href="#"
                    className="px-6 py-3 bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-sm rounded-xl transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md hover:scale-[1.01]"
                  >
                    <EditableText
                      path={`products.overview.items.${activeIndex}.linkText`}
                      fallback={activeProduct.linkText || `Explore ${activeProduct.title}`}
                      as="span"
                    />
                    <ArrowRight className="w-4 h-4 text-white" />
                  </a>

                  <span className="text-xs font-mono text-gray-400">
                    ApMoSys Platform Engine
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}