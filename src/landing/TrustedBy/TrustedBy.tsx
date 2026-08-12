"use client";
import React from "react";
import Image from "next/image";

const CLIENTS = [
  { name: "Protean eGov Technologies", img: "/assets/images/client-logo/protean.svg" },
  { name: "Bank of Maharashtra", img: "/assets/images/client-logo/bank_of_maharashtra.svg" },
  { name: "FDC India", img: "/assets/images/client-logo/fdc.jpeg" },
  { name: "Axis Bank", img: "/assets/images/client-logo/axis_bank.png" },
  { name: "UCO Bank", img: "/assets/images/client-logo/uco_bank.svg" },
  { name: "RBL Bank", img: "/assets/images/client-logo/rbl_bank.svg" },
  { name: "ABCD Bank", img: "/assets/images/client-logo/abcd_bank.png" },
  { name: "CRIS", img: "/assets/images/client-logo/cris_logo.png" },
  { name: "Generali Central Life Insurance", img: "/assets/images/client-logo/generali_centeral.png" },
  { name: "NSDL Payments Bank", img: "/assets/images/client-logo/nsdl.png" },
  { name: "IDBI Bank", img: "/assets/images/client-logo/idbi_bank.png" },
  { name: "Muscat Finance", img: "/assets/images/client-logo/muscat_finance.png" },
];

export default function TrustedBy() {
  return (
    <section className="py-2 bg-[#F8F9FB] overflow-hidden border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">

        {/* Carousel Container */}
        <div className="relative flex overflow-x-hidden group">
          {/* Gradient Masks for smooth fade on edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-[#F8F9FB] to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-[#F8F9FB] to-transparent pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex animate-marquee whitespace-nowrap items-center py-2">
            {/* Render list 3 times for seamless infinite scroll */}
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, index) => {
              return (
                <div 
                  key={index} 
                  className="flex items-center gap-3 mx-8 md:mx-12 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                >
                  <div className="relative h-6 w-6 md:h-8 md:w-8 flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={client.img}
                      alt={`${client.name} Logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-base md:text-lg font-normal font-heading tracking-tight text-gray-700">
                    {client.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Inline Styles for Marquee Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33333%); }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
