"use client";

export default function CSRSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 border-b border-[#222]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-16">

          <span className="text-[#B40001] uppercase tracking-[0.2em] text-xs font-bold">
            Corporate Social Responsibility
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-4">
            Creating Meaningful Impact
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">

          <div className="bg-[#161616] border border-[#2A2A2A] rounded-xl p-6 sm:p-8">

            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#B40001] break-words">
              Education
            </div>

            <p className="mt-5 text-neutral-400 leading-7">
              Supporting students through technology workshops,
              mentorship programs, and career guidance initiatives.
            </p>

          </div>

          <div className="bg-[#161616] border border-[#2A2A2A] rounded-xl p-6 sm:p-8">

            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#B40001] break-words">
              Sustainability
            </div>

            <p className="mt-5 text-neutral-400 leading-7">
              Promoting environmentally responsible practices
              and sustainable growth within our ecosystem.
            </p>

          </div>

          <div className="bg-[#161616] border border-[#2A2A2A] rounded-xl p-6 sm:p-8">

            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#B40001] break-words">
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
