"use client";

const departments = [
  {
    title: "AI Engineering",
    description:
      "Building intelligent automation and AI-driven enterprise solutions.",
  },
  {
    title: "Digital Assurance",
    description:
      "Ensuring software quality through advanced testing frameworks.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Accelerating deployments and infrastructure modernization.",
  },
  {
    title: "Product Engineering",
    description:
      "Designing and delivering innovative enterprise platforms.",
  },
  {
    title: "Customer Success",
    description:
      "Helping customers maximize value from every engagement.",
  },
  {
    title: "Research & Innovation",
    description:
      "Exploring emerging technologies and future-ready solutions.",
  },
];

export default function TeamDepartments() {
  return (
    <section className="py-24 border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-[#B40001] uppercase tracking-[3px]">
            Departments
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Diverse Expertise, One Mission
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {departments.map((department) => (
            <div
              key={department.title}
              className="bg-[#161616] border border-[#2A2A2A] rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {department.title}
              </h3>

              <p className="text-neutral-400 leading-7">
                {department.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}