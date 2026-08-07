"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';

const cards = [
  { id: 1, title: 'CliqTest', subtitle: 'AUTOMATION', bottomText: 'AI-POWERED', bg: 'bg-[#0B0C10]', text: 'text-white', isImage: true, img: '/landing/Hero/cards/cliqtest_hero_1786091845488.png' },
  { id: 2, title: 'Netraa', subtitle: 'VISUAL AI', bottomText: '', bg: 'bg-[#0066FF]', text: 'text-white', isImage: true, img: '/landing/Hero/cards/netraa_hero_1786091859663.png' },
  { id: 3, title: '99.9%', subtitle: 'UPTIME', bottomText: 'SLA', bg: 'bg-[#F8F9FB]', text: 'text-black', isSplit: true },
  { id: 4, title: 'ShieldVue', subtitle: 'SECURITY', bottomText: '', bg: 'bg-[#1e293b]', text: 'text-white', isImage: true, img: '/landing/Hero/cards/shieldvue_hero_1786091875222.png' },
  { id: 5, title: 'Swikrti', subtitle: 'COMPLIANCE', bottomText: 'ZERO DEFECTS', bg: 'bg-[#121212]', text: 'text-white', isImage: true, img: '/landing/Hero/cards/swikruti_hero_1786091888812.png' },
  { id: 6, title: 'FinXplore', subtitle: 'BFSI SCALE', bottomText: '', bg: 'bg-[#3b82f6]', text: 'text-white', isImage: true, img: '/landing/Hero/cards/finxplore_hero_1786091905041.png' },
  { id: 7, title: '10x', subtitle: 'SPEED', bottomText: 'ROI', bg: 'bg-white', text: 'text-black', isSplit: true },
  { id: 8, title: 'Jupiter', subtitle: 'CLOUD OPS', bottomText: '', bg: 'bg-[#0B0C10]', text: 'text-white', isImage: true, img: '/landing/Hero/cards/jupiter_hero_1786091917753.png' },
];

export const RotatingCards = () => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentRotation = useRef(0);
  const autoRotateRef = useRef<number | null>(null);

  const numCards = cards.length;
  const radius = 200; // Distance from center

  const { scrollY } = useScroll();
  const rotateZValue = useTransform(scrollY, [0, 800], [-10, 10]);
  const [zTilt, setZTilt] = useState(-10);

  useMotionValueEvent(rotateZValue, "change", (latest) => {
    setZTilt(latest);
  });

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    startX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
    currentRotation.current = rotation;
  };

  const onDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const delta = x - startX.current;
    // Adjust sensitivity by dividing delta
    setRotation(currentRotation.current + delta * 0.5);
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  // Auto rotation
  useEffect(() => {
    if (!isDragging) {
      const animate = () => {
        setRotation((prev) => prev - 0.2);
        autoRotateRef.current = requestAnimationFrame(animate);
      };
      autoRotateRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (autoRotateRef.current) cancelAnimationFrame(autoRotateRef.current);
    };
  }, [isDragging]);

  return (
    <div 
      className="relative w-full h-[400px] flex items-start pt-10 justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none"
      onMouseDown={startDrag}
      onMouseMove={onDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchStart={startDrag}
      onTouchMove={onDrag}
      onTouchEnd={stopDrag}
      style={{ perspective: '1200px' }}
    >
      {/* 3D Container with tilt */}
      <div 
        className="relative w-[150px] h-[225px]"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateZ(${zTilt}deg) rotateX(-15deg) rotateY(${rotation}deg)`,
          transition: isDragging ? 'none' : 'transform 0.1s linear'
        }}
      >
        {cards.map((card, index) => {
          const angle = (360 / numCards) * index;
          return (
            <div
              key={card.id}
              className={`absolute top-0 left-0 w-full h-full rounded-md p-4 flex flex-col justify-between overflow-hidden shadow-2xl ${card.bg} ${card.text}`}
              style={{
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
              }}
            >
              {card.isImage && card.img && (
                <div className="absolute inset-0 opacity-60 z-0 mix-blend-overlay">
                  <Image 
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
              )}
              
              <div className="relative z-10 w-full h-full flex flex-col">
                {card.isSplit ? (
                  <div className="flex h-full">
                     <div className="w-1/2 border-r border-black/10 pr-2">
                        <div className="text-sm font-mono rotate-90 origin-top-left translate-y-[100px]">{card.title}</div>
                     </div>
                     <div className="w-1/2 pl-2 flex flex-col justify-end">
                        <div className="text-sm font-mono mb-4">{card.bottomText}</div>
                        <div className="text-sm font-mono">{card.subtitle}</div>
                     </div>
                  </div>
                ) : (
                  <>
                    <h3 className={`text-xl font-light tracking-widest ${card.isImage ? 'text-2xl font-normal drop-shadow-md' : ''}`}>
                      {card.title}
                    </h3>
                    <div className="flex-grow flex items-center justify-center">
                      <p className={`text-base tracking-wider ${card.isImage ? 'text-xl font-bold uppercase drop-shadow-md text-white/90 translate-y-8' : ''}`}>
                        {card.subtitle}
                      </p>
                    </div>
                    {card.bottomText && (
                      <p className="text-sm tracking-widest self-end">
                        {card.bottomText}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
