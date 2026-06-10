"use client";

import { useContentStore } from "@/src/admin/store/adminStore";

export default function StatsSection() {

  const { content } = useContentStore();

  const stats = content.about.stats;

  const items = [
    {
      value: stats.stat1Value,
      label: stats.stat1Label,
    },
    {
      value: stats.stat2Value,
      label: stats.stat2Label,
    },
    {
      value: stats.stat3Value,
      label: stats.stat3Label,
    },
    {
      value: stats.stat4Value,
      label: stats.stat4Label,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

          {items.map((item,index)=>(
            <div
              key={index}
              className="bg-[#1F1F1F] border border-[#3A3A3A] p-6 sm:p-8 rounded-xl text-center"
            >
              <h3 className="text-primary-red text-4xl sm:text-5xl font-heading font-extrabold mb-4">
                {item.value}
              </h3>

              <p className="text-[#A0A0A0] uppercase text-sm tracking-wider">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
