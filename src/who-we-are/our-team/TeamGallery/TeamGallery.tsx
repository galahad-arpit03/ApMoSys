"use client";
import { teamgalleryData } from "./TeamGalleryData";


const gallery = [
  "/team/team1.jpg",
  "/team/team2.jpg",
  "/team/team3.jpg",
  "/team/team4.jpg",
  "/team/team5.jpg",
  "/team/team6.jpg",
];

export default function TeamGallery() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#B40001] uppercase tracking-[0.2em] text-xs font-bold">
            Life At ApMoSys
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-4">
            Moments That Define Us
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">

          {gallery.map((image, index) => (
            <div
              key={index}
              className="h-56 sm:h-64 lg:h-[280px] rounded-xl overflow-hidden bg-[#222]"
            >
              {/* Replace with actual photos */}
              {/* <img src={image} className="w-full h-full object-cover" /> */}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
