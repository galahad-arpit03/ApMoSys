"use client";
import { communityheroData } from "./CommunityHeroData";

import { motion } from "framer-motion";


export default function CommunityHero() {
  // Replace with CMS field later
  const heroImage = "";

  return (
    <section className="flex items-center border-b border-[#1F1F1F] py-16 sm:py-20 lg:min-h-[80vh] lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary-red text-xs uppercase tracking-[0.2em] font-bold">
              Community
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-4 mb-6">
              Empowering Communities Through Technology
            </h1>

            <p className="text-[#A0A0A0] text-base sm:text-lg leading-relaxed">
              Beyond delivering enterprise technology solutions,
              we believe in creating positive social impact through
              education, innovation, collaboration, and community
              engagement.
            </p>
          </motion.div>

          <div className="bg-[#1F1F1F] border border-[#3A3A3A] rounded-xl overflow-hidden h-64 sm:h-80 lg:h-[450px]">

            {heroImage ? (
              <img
                src={heroImage}
                alt="Community Initiatives"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-neutral-500 text-base sm:text-lg font-medium text-center px-6">
                  Community Initiatives Image
                </span>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
