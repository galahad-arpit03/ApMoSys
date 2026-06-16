"use client";

import React from "react";
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
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#121B31] border border-[#243461] rounded-md p-6 md:p-10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          
          <div className="relative z-10 w-full lg:w-1/2">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight">
              Ready to engineer your digital future?
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-lg">
              Connect with our experts to discuss your challenges, explore our products, or see a live demo of our capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center gap-2">
                Contact Sales <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-transparent border border-[#243461] text-white px-6 py-3 rounded-md font-bold hover:bg-[#1A264A] transition-colors flex items-center justify-center">
                Join Our Team
              </button>
            </div>
          </div>

          <div className="relative z-10 w-full lg:w-1/2 bg-[#0A1128]/50 backdrop-blur-sm border border-[#243461] p-6 rounded-md">
            <h3 className="text-white font-bold text-lg mb-4">Global Presence</h3>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="flex flex-wrap gap-x-3 gap-y-2">
                    {locations.map((loc, idx) => (
                      <span key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                        {idx > 0 && <span className="w-1 h-1 rounded-full bg-[#243461] hidden sm:block" />}
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="h-px w-full bg-[#243461]" />
              
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm">Business Inquiry</span>
                    <a href="mailto:sales@apmosys.com" className="text-gray-400 text-sm hover:text-white transition-colors">sales@apmosys.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm">Call Us</span>
                    <a href="tel:+912241222250" className="text-gray-400 text-sm hover:text-white transition-colors">+91 22 4122 2250</a>
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