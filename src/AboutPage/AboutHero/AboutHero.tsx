"use client";

import { motion } from "framer-motion";
import { useContentStore } from "@/src/admin/store/adminStore";

export default function AboutHero() {
  const { content } = useContentStore();

  const hero = content.about.hero;

  return (
    <section className="min-h-[80vh] flex items-center border-b border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity:0,y:20 }}
            animate={{ opacity:1,y:0 }}
          >
            <span className="text-primary-red text-xs uppercase tracking-[0.2em] font-bold">
              {hero.badge}
            </span>

            <h1 className="font-heading text-5xl lg:text-6xl font-extrabold mt-4 mb-6">
              {hero.heading}
            </h1>

            <p className="text-[#A0A0A0] text-lg leading-relaxed mb-8">
              {hero.subheading}
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-primary-red px-6 py-3 rounded-md font-semibold">
                {hero.ctaPrimary}
              </button>

              <button className="border border-[#3A3A3A] px-6 py-3 rounded-md">
                {hero.ctaSecondary}
              </button>
            </div>
          </motion.div>

          <div className="bg-[#1F1F1F] border border-[#3A3A3A] rounded-xl p-8">
            <div className="grid grid-cols-2 gap-4">

              <div className="border border-[#3A3A3A] p-6 rounded-lg">
                <p className="text-primary-red text-3xl font-bold">15+</p>
                <p className="text-[#A0A0A0] text-sm mt-2">
                  Years Experience
                </p>
              </div>

              <div className="border border-[#3A3A3A] p-6 rounded-lg">
                <p className="text-primary-red text-3xl font-bold">500+</p>
                <p className="text-[#A0A0A0] text-sm mt-2">
                  Projects
                </p>
              </div>

              <div className="border border-[#3A3A3A] p-6 rounded-lg">
                <p className="text-primary-red text-3xl font-bold">40+</p>
                <p className="text-[#A0A0A0] text-sm mt-2">
                  Countries
                </p>
              </div>

              <div className="border border-[#3A3A3A] p-6 rounded-lg">
                <p className="text-primary-red text-3xl font-bold">24/7</p>
                <p className="text-[#A0A0A0] text-sm mt-2">
                  Operations
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}