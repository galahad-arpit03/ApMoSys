"use client";

export default function TeamCulture() {
  return (
    <section className="py-24 border-b border-[#222]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-[#B40001] uppercase tracking-[3px]">
            Our Culture
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Built Around Learning & Innovation
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#161616] p-8 rounded-2xl border border-[#2A2A2A]">
            <h3 className="text-2xl font-semibold mb-4">
              Continuous Learning
            </h3>

            <p className="text-neutral-400 leading-7">
              We encourage continuous skill development,
              certifications, research, and innovation.
            </p>
          </div>

          <div className="bg-[#161616] p-8 rounded-2xl border border-[#2A2A2A]">
            <h3 className="text-2xl font-semibold mb-4">
              Collaboration
            </h3>

            <p className="text-neutral-400 leading-7">
              Cross-functional teams work together to solve
              complex enterprise challenges.
            </p>
          </div>

          <div className="bg-[#161616] p-8 rounded-2xl border border-[#2A2A2A]">
            <h3 className="text-2xl font-semibold mb-4">
              Innovation
            </h3>

            <p className="text-neutral-400 leading-7">
              We constantly experiment with AI, automation,
              and next-generation technologies.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}