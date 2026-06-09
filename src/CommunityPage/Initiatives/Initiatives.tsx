"use client";

const initiatives = [
  {
    title: "Technology Workshops",
    description:
      "Hands-on sessions helping students and professionals learn emerging technologies.",
  },
  {
    title: "Industry Knowledge Sharing",
    description:
      "Webinars, tech talks, and expert sessions that encourage continuous learning.",
  },
  {
    title: "Innovation Programs",
    description:
      "Supporting innovation through hackathons, research initiatives, and collaborative projects.",
  },
  {
    title: "Employee Volunteering",
    description:
      "Encouraging employees to contribute their expertise to social and educational causes.",
  },
];

export default function Initiatives() {
  return (
    <section className="py-24 border-b border-[#222]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-[#B40001] uppercase tracking-[3px]">
            Community Initiatives
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Driving Positive Change
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {initiatives.map((initiative) => (
            <div
              key={initiative.title}
              className="bg-[#161616] border border-[#2A2A2A] rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold">
                {initiative.title}
              </h3>

              <p className="mt-5 text-neutral-400 leading-7">
                {initiative.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}