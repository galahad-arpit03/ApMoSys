"use client";

import React, { useState } from "react";

export default function Solutions() {
  const [selectedTab, setSelectedTab] = useState<"services" | "solutions" | "industries">("services");

  return (
    <section id="solutions" className="py-24 border-b border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] mb-4">
            Integrated Technology Solutions
          </h2>
          <p className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed">
            Explore how ApMoSys drives efficiency and accelerates release velocity across critical software layers.
          </p>

          {/* Tabs Controller */}
          <div className="flex items-center justify-center mt-8 bg-[#1F1F1F] border border-[#3A3A3A] p-1 rounded-md max-w-md mx-auto">
            <button
              onClick={() => setSelectedTab("services")}
              className={`flex-1 py-2 text-xs font-bold rounded transition-colors ${selectedTab === "services" ? "bg-[#B40001] text-[#FFFFFF]" : "text-[#A0A0A0] hover:text-[#FAFAFA]"}`}
            >
              Services
            </button>
            <button
              onClick={() => setSelectedTab("solutions")}
              className={`flex-1 py-2 text-xs font-bold rounded transition-colors ${selectedTab === "solutions" ? "bg-[#B40001] text-[#FFFFFF]" : "text-[#A0A0A0] hover:text-[#FAFAFA]"}`}
            >
              Solutions
            </button>
            <button
              onClick={() => setSelectedTab("industries")}
              className={`flex-1 py-2 text-xs font-bold rounded transition-colors ${selectedTab === "industries" ? "bg-[#B40001] text-[#FFFFFF]" : "text-[#A0A0A0] hover:text-[#FAFAFA]"}`}
            >
              Industries
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {selectedTab === "services" && (
            <>
              <div className="bg-[#1F1F1F] border border-[#3A3A3A] p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#B40001]/10 border border-[#B40001]/30 text-[#B40001] rounded flex items-center justify-center mb-6 font-bold text-lg">01</div>
                <h3 className="font-heading font-bold text-xl text-[#FFFFFF] mb-3">Software Quality Engineering</h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">
                  End-to-end functional, load, and automated visual verification using custom testing systems.
                </p>
              </div>
              <div className="bg-[#1F1F1F] border border-[#3A3A3A] p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#B40001]/10 border border-[#B40001]/30 text-[#B40001] rounded flex items-center justify-center mb-6 font-bold text-lg">02</div>
                <h3 className="font-heading font-bold text-xl text-[#FFFFFF] mb-3">Application Performance</h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">
                  Continuous monitoring, bottlenecks identification, and optimization across core architecture models.
                </p>
              </div>
              <div className="bg-[#1F1F1F] border border-[#3A3A3A] p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#B40001]/10 border border-[#B40001]/30 text-[#B40001] rounded flex items-center justify-center mb-6 font-bold text-lg">03</div>
                <h3 className="font-heading font-bold text-xl text-[#FFFFFF] mb-3">Cloud Automation Services</h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">
                  Configuring CI/CD pipelines, containerized deployment orchestration, and environment infrastructure management.
                </p>
              </div>
            </>
          )}

          {selectedTab === "solutions" && (
            <>
              <div className="bg-[#1F1F1F] border border-[#3A3A3A] p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#B40001]/10 border border-[#B40001]/30 text-[#B40001] rounded flex items-center justify-center mb-6 font-bold text-lg">QA</div>
                <h3 className="font-heading font-bold text-xl text-[#FFFFFF] mb-3">cliQTest Automation</h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">
                  Our codeless automation system that leverages AI model agents to write and self-heal UI element scripts.
                </p>
              </div>
              <div className="bg-[#1F1F1F] border border-[#3A3A3A] p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#B40001]/10 border border-[#B40001]/30 text-[#B40001] rounded flex items-center justify-center mb-6 font-bold text-lg">AI</div>
                <h3 className="font-heading font-bold text-xl text-[#FFFFFF] mb-3">Netraa Vision Analytics</h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">
                  Pixel-perfect screenshot comparative engines checking regression layouts across varying viewports.
                </p>
              </div>
              <div className="bg-[#1F1F1F] border border-[#3A3A3A] p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#B40001]/10 border border-[#B40001]/30 text-[#B40001] rounded flex items-center justify-center mb-6 font-bold text-lg">OPS</div>
                <h3 className="font-heading font-bold text-xl text-[#FFFFFF] mb-3">AIOps Telemetry</h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">
                  Automated anomaly detection in application logging pipelines, optimizing response alerts.
                </p>
              </div>
            </>
          )}

          {selectedTab === "industries" && (
            <>
              <div className="bg-[#1F1F1F] border border-[#3A3A3A] p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#B40001]/10 border border-[#B40001]/30 text-[#B40001] rounded flex items-center justify-center mb-6 font-bold text-lg">BK</div>
                <h3 className="font-heading font-bold text-xl text-[#FFFFFF] mb-3">BFSI Systems</h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">
                  Validating transaction integrity, security compliance algorithms, and legacy banking platforms.
                </p>
              </div>
              <div className="bg-[#1F1F1F] border border-[#3A3A3A] p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#B40001]/10 border border-[#B40001]/30 text-[#B40001] rounded flex items-center justify-center mb-6 font-bold text-lg">EC</div>
                <h3 className="font-heading font-bold text-xl text-[#FFFFFF] mb-3">E-Commerce & Retail</h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">
                  Optimizing checkouts page loads, scaling capacity checkups, and visual layout assertions.
                </p>
              </div>
              <div className="bg-[#1F1F1F] border border-[#3A3A3A] p-8 rounded-lg">
                <div className="w-12 h-12 bg-[#B40001]/10 border border-[#B40001]/30 text-[#B40001] rounded flex items-center justify-center mb-6 font-bold text-lg">HC</div>
                <h3 className="font-heading font-bold text-xl text-[#FFFFFF] mb-3">Healthcare IT</h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">
                  Ensuring system availability, HL7/FHIR communication formats checking, and database compliance.
                </p>
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
