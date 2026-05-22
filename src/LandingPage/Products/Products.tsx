import React from "react";

export default function Products() {
  return (
    <section id="products" className="py-24 border-b border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] mb-6">
              Our Proprietary Automation Products
            </h2>
            <p className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed mb-6">
              ApMoSys builds customizable products that resolve critical gaps in traditional software development lifecycles.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-primary-red mt-1">✓</span>
                <div>
                  <h4 className="font-bold text-[#FFFFFF]">cliQTest Suite</h4>
                  <p className="text-xs text-[#7A7A7A] mt-1">Saves up to 60% setup time for multi-platform environments.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-primary-red mt-1">✓</span>
                <div>
                  <h4 className="font-bold text-[#FFFFFF]">Netraa Vision Engine</h4>
                  <p className="text-xs text-[#7A7A7A] mt-1">Guarantees layout compliance and flags regressions in seconds.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-primary-red mt-1">✓</span>
                <div>
                  <h4 className="font-bold text-[#FFFFFF]">AIOps Monitor</h4>
                  <p className="text-xs text-[#7A7A7A] mt-1">Resolves bottlenecks proactively using advanced data pattern metrics.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Bento Stats Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#1F1F1F] border border-[#3A3A3A] p-6 rounded-lg flex flex-col justify-between">
              <span className="text-[#7A7A7A] font-mono text-xs uppercase block">Release Speed</span>
              <div>
                <span className="text-4xl font-bold font-heading text-primary-red block mt-4">10x</span>
                <p className="text-[#A0A0A0] text-xs leading-relaxed mt-2">Faster visual validation compared to manual testing procedures.</p>
              </div>
            </div>
            
            <div className="bg-[#1F1F1F] border border-[#3A3A3A] p-6 rounded-lg flex flex-col justify-between">
              <span className="text-[#7A7A7A] font-mono text-xs uppercase block">Client Trust</span>
              <div>
                <span className="text-4xl font-bold font-heading text-[#FFFFFF] block mt-4">50+</span>
                <p className="text-[#A0A0A0] text-xs leading-relaxed mt-2">Global enterprises in banking, retail, and healthcare security sectors.</p>
              </div>
            </div>

            <div className="bg-[#1F1F1F] border border-[#3A3A3A] p-6 rounded-lg flex flex-col justify-between">
              <span className="text-[#7A7A7A] font-mono text-xs uppercase block">Success Metrics</span>
              <div>
                <span className="text-4xl font-bold font-heading text-[#FFFFFF] block mt-4">99.8%</span>
                <p className="text-[#A0A0A0] text-xs leading-relaxed mt-2">Accuracy achieved in UI visual verification using Netraa models.</p>
              </div>
            </div>

            <div className="bg-[#1F1F1F] border border-[#3A3A3A] p-6 rounded-lg flex flex-col justify-between">
              <span className="text-[#7A7A7A] font-mono text-xs uppercase block">Friction Reduction</span>
              <div>
                <span className="text-4xl font-bold font-heading text-primary-red block mt-4">75%</span>
                <p className="text-[#A0A0A0] text-xs leading-relaxed mt-2">Fewer false positives compared to traditional testing frameworks.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
