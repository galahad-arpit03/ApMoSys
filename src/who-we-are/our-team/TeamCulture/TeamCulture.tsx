"use client";
import { teamcultureData } from "./TeamCultureData";


export default function TeamCulture() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 border-b border-[#222]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#B40001] uppercase tracking-[0.2em] text-xs font-bold">
            Our Culture
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-4">
            Built Around Learning & Innovation
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">

          <div className="bg-[#161616] p-6 sm:p-8 rounded-xl border border-[#2A2A2A]">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Continuous Learning
            </h3>

            <p className="text-neutral-400 leading-7">
              We encourage continuous skill development,
              certifications, research, and innovation.
            </p>
          </div>

          <div className="bg-[#161616] p-6 sm:p-8 rounded-xl border border-[#2A2A2A]">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Collaboration
            </h3>

            <p className="text-neutral-400 leading-7">
              Cross-functional teams work together to solve
              complex enterprise challenges.
            </p>
          </div>

          <div className="bg-[#161616] p-6 sm:p-8 rounded-xl border border-[#2A2A2A]">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
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
