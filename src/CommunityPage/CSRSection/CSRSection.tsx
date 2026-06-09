"use client";

export default function CSRSection() {
  return (
    <section className="py-24 border-b border-[#222]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-[#B40001] uppercase tracking-[3px]">
            Corporate Social Responsibility
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Creating Meaningful Impact
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#161616] border border-[#2A2A2A] rounded-2xl p-8">

            <div className="text-4xl font-bold text-[#B40001]">
              Education
            </div>

            <p className="mt-5 text-neutral-400 leading-7">
              Supporting students through technology workshops,
              mentorship programs, and career guidance initiatives.
            </p>

          </div>

          <div className="bg-[#161616] border border-[#2A2A2A] rounded-2xl p-8">

            <div className="text-4xl font-bold text-[#B40001]">
              Sustainability
            </div>

            <p className="mt-5 text-neutral-400 leading-7">
              Promoting environmentally responsible practices
              and sustainable growth within our ecosystem.
            </p>

          </div>

          <div className="bg-[#161616] border border-[#2A2A2A] rounded-2xl p-8">

            <div className="text-4xl font-bold text-[#B40001]">
              Inclusion
            </div>

            <p className="mt-5 text-neutral-400 leading-7">
              Building opportunities that empower individuals,
              communities, and future innovators.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}