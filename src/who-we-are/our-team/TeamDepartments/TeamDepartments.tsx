"use client";
import { teamdepartmentsData } from "./TeamDepartmentsData";


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
    <section className="py-16 sm:py-20 lg:py-24 border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-16">
          <span className="text-[#B40001] uppercase tracking-[0.2em] text-xs font-bold">
            Departments
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-4">
            Diverse Expertise, One Mission
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">

          {departments.map((department) => (
            <div
              key={department.title}
              className="bg-[#161616] border border-[#2A2A2A] rounded-xl p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
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
