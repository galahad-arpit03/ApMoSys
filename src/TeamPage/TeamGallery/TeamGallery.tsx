"use client";

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
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-[#B40001] uppercase tracking-[3px]">
            Life At ApMoSys
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Moments That Define Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {gallery.map((image, index) => (
            <div
              key={index}
              className="h-[280px] rounded-2xl overflow-hidden bg-[#222]"
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