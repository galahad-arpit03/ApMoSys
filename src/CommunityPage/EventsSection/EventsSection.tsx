"use client";

const events = [
  {
    title: "Technology Leadership Summit",
    description:
      "Bringing together technology leaders and innovators to discuss future trends.",
  },
  {
    title: "Student Innovation Challenge",
    description:
      "Encouraging young minds to solve real-world problems through technology.",
  },
  {
    title: "Community Tech Day",
    description:
      "A collaborative event focused on learning, networking, and innovation.",
  },
];

export default function EventsSection() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-[#B40001] uppercase tracking-[3px]">
            Events & Engagements
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Connecting Through Experiences
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {events.map((event) => (
            <div
              key={event.title}
              className="bg-[#161616] border border-[#2A2A2A] rounded-2xl overflow-hidden"
            >
              <div className="h-56 bg-[#252525]" />

              <div className="p-8">

                <h3 className="text-2xl font-semibold">
                  {event.title}
                </h3>

                <p className="mt-5 text-neutral-400 leading-7">
                  {event.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}