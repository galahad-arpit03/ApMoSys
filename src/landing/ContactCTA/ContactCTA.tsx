"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const locations = [
  "Navi Mumbai, India",
  "Chennai, India",
  "Bhubaneswar, India",
  "Ras Al Khaimah, UAE",
  "Mississauga, Canada"
];

export default function ContactCTA() {
  return (
    <section className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#B40001] rounded-md p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-[0_10px_40px_rgba(180,0,1,0.2)]">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          
          <div className="relative z-10 w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Ready to engineer your digital future?
            </h2>
            <p className="text-red-100 text-lg leading-relaxed mb-8 max-w-lg">
              Connect with our experts to discuss your challenges, explore our products, or see a live demo of our capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#B40001] px-8 py-4 rounded-md font-bold hover:bg-gray-50 transition-colors shadow-lg flex items-center justify-center gap-2">
                Contact Sales <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-md font-bold hover:bg-white/10 transition-colors flex items-center justify-center">
                Join Our Team
              </button>
            </div>
          </div>

          <div className="relative z-10 w-full lg:w-1/2 bg-black/20 backdrop-blur-sm border border-white/10 p-8 rounded-md">
            <h3 className="text-white font-bold text-xl mb-6">Global Presence</h3>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-red-200 shrink-0 mt-0.5" />
                <div>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {locations.map((loc, idx) => (
                      <span key={idx} className="text-red-100 text-sm flex items-center gap-2">
                        {idx > 0 && <span className="w-1 h-1 rounded-full bg-red-400/50 hidden sm:block" />}
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="h-px w-full bg-white/10" />
              
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-200" />
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm">Business Inquiry</span>
                    <a href="mailto:sales@apmosys.com" className="text-red-100 text-sm hover:text-white transition-colors">sales@apmosys.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-200" />
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm">Call Us</span>
                    <a href="tel:+912241222250" className="text-red-100 text-sm hover:text-white transition-colors">+91 22 4122 2250</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}