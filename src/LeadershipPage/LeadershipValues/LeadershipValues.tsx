"use client";

const values = [
  {
    title: "Innovation",
    description:
      "Driving continuous improvement through technology."
  },
  {
    title: "Integrity",
    description:
      "Building trust through transparency and accountability."
  },
  {
    title: "Excellence",
    description:
      "Delivering the highest standards of quality."
  },
  {
    title: "Customer Success",
    description:
      "Putting customer outcomes at the center of everything."
  }
];

export default function LeadershipValues() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-14">
          Leadership Principles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {values.map((value) => (
            <div
              key={value.title}
              className="border border-[#2A2A2A] bg-[#181818] p-8 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">
                {value.title}
              </h3>

              <p className="text-neutral-400">
                {value.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}