"use client";

export default function GlobesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-7xl mx-auto space-y-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Global Visualizations
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            Interactive, dependency-free amCharts 5 examples rendered natively.
          </p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Globe Rotate */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl flex flex-col">
            <div className="px-6 py-4 border-b border-gray-700 bg-gray-800/50">
              <h2 className="text-xl font-semibold">Rotating Globe</h2>
            </div>
            <div className="w-full h-[500px] relative bg-white">
              <iframe
                src="/amcharts/examples/map-globe-rotate-to-country/index.html"
                className="absolute inset-0 w-full h-full border-0"
                title="Rotating Globe"
              />
            </div>
          </div>

          {/* Map Day and Night */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl flex flex-col">
            <div className="px-6 py-4 border-b border-gray-700 bg-gray-800/50">
              <h2 className="text-xl font-semibold">Day & Night Globe</h2>
            </div>
            <div className="w-full h-[500px] relative bg-white">
              <iframe
                src="/amcharts/examples/map-day-and-night/index.html"
                className="absolute inset-0 w-full h-full border-0"
                title="Day and Night Globe"
              />
            </div>
          </div>

          {/* Globe with Projected Circles */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl flex flex-col">
            <div className="px-6 py-4 border-b border-gray-700 bg-gray-800/50">
              <h2 className="text-xl font-semibold">Projected Circles</h2>
            </div>
            <div className="w-full h-[500px] relative bg-white">
              <iframe
                src="/amcharts/examples/map-globe-with-projected-circles/index.html"
                className="absolute inset-0 w-full h-full border-0"
                title="Projected Circles Globe"
              />
            </div>
          </div>

          {/* Map Sankey Waypoints */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl flex flex-col">
            <div className="px-6 py-4 border-b border-gray-700 bg-gray-800/50">
              <h2 className="text-xl font-semibold">Strait of Hormuz (Sankey Flow)</h2>
            </div>
            <div className="w-full h-[500px] relative bg-[#0a0e12]">
              <iframe
                src="/amcharts/examples/map-sankey-waypoints/index.html"
                className="absolute inset-0 w-full h-full border-0"
                title="Sankey Flow Globe"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
