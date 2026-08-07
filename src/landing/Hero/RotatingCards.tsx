"use client";
import React, { useState, useEffect, useRef } from 'react';

const cards = [
  { id: 1, title: 'MADRID', subtitle: 'BARCELONA', bottomText: 'SEVILLA', bg: 'bg-[#1a1c1a]', text: 'text-[#e0e3c8]' },
  { id: 2, title: 'THU', subtitle: '0316 AVE', bottomText: '', bg: 'bg-[#c5c8d4]', text: 'text-white', isImage: true },
  { id: 3, title: '0034', subtitle: '0095', bottomText: '-', bg: 'bg-[#f4f4f0]', text: 'text-black', isSplit: true },
  { id: 4, title: '2026', subtitle: 'NOV', bottomText: '', bg: 'bg-[#677054]', text: 'text-white', isImage: true },
  { id: 5, title: 'BERLIN', subtitle: 'MUNICH', bottomText: 'FRANKFURT', bg: 'bg-[#2a2c2a]', text: 'text-[#e0e3c8]' },
  { id: 6, title: 'FRI', subtitle: '0417 BLVD', bottomText: '', bg: 'bg-[#b5b8c4]', text: 'text-white', isImage: true },
  { id: 7, title: '0044', subtitle: '0096', bottomText: '-', bg: 'bg-[#e4e4e0]', text: 'text-black', isSplit: true },
  { id: 8, title: '2027', subtitle: 'DEC', bottomText: '', bg: 'bg-[#576044]', text: 'text-white', isImage: true },
];

export const RotatingCards = () => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentRotation = useRef(0);
  const autoRotateRef = useRef<number | null>(null);

  const numCards = cards.length;
  const radius = 200; // Distance from center

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
          transform: `rotateZ(-10deg) rotateX(-15deg) rotateY(${rotation}deg)`,
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
              {card.isImage && (
                <div 
                  className="absolute inset-0 opacity-60 z-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=400&q=80")' }}
                />
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
