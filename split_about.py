import os

base_dir = 'src/who-we-are/about-us'

def save_file(subpath, content):
    path = os.path.join(base_dir, subpath)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

# 1. StatsSection
stats_data = '''export const statsData = [
  { label: "Years of Excellence", value: "15+" },
  { label: "Enterprise Clients", value: "500+" },
  { label: "Global Engineers", value: "300+" },
  { label: "Countries Served", value: "40+" },
];
'''
stats_tsx = '''"use client";
import React from "react";
import { motion } from "framer-motion";
import { statsData } from "./StatsSectionData";

export default function StatsSection() {
  return (
    <section className="pt-20 pb-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 border border-gray-200 rounded-xl bg-white shadow-sm"
            >
              <div className="text-4xl md:text-5xl font-black text-gray-900 mb-3">{stat.value}</div>
              <div className="text-[11px] md:text-xs uppercase tracking-[0.1em] text-gray-500 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
'''
save_file('StatsSection/StatsSectionData.ts', stats_data)
save_file('StatsSection/StatsSection.tsx', stats_tsx)


# 2. StorySection
story_data = '''export const storyData = {
  heading: "Our Heritage",
  description: "Founded on the principles of engineering rigor and operational excellence, we have grown from a specialized QA boutique to a global systems integrator.",
  cards: [
    {
      title: "The Early Years",
      content: "We recognized a critical gap in enterprise software delivery: the need for reliable, automated quality assurance that didn't compromise on speed. Our early frameworks set the foundation for our current platforms."
    },
    {
      title: "Global Expansion",
      content: "As our clients' needs evolved, so did we. Expanding our footprint across continents allowed us to provide true \\"follow-the-sun\\" support and leverage global engineering talent."
    }
  ]
};
'''
story_tsx = '''"use client";
import React from "react";
import { motion } from "framer-motion";
import { storyData } from "./StorySectionData";

export default function StorySection() {
  return (
    <section className="pt-10 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{storyData.heading}</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {storyData.description}
            </p>
            <div className="h-1 w-12 bg-primary-red rounded-full" />
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {storyData.cards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
              >
                <h3 className="text-gray-900 font-bold text-lg mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
'''
save_file('StorySection/StorySectionData.ts', story_data)
save_file('StorySection/StorySection.tsx', story_tsx)


# 3. CoreValues
values_data = '''import { CheckCircle2, Cpu, Shield, Zap } from "lucide-react";
import React from "react";

export const coreValuesData = [
  {
    title: "Uncompromising Quality",
    desc: "We hold ourselves to the highest standards of software engineering. Quality is not a phase; it is embedded in our culture.",
    icon: "CheckCircle2",
  },
  {
    title: "Intelligent Innovation",
    desc: "We leverage AI and next-generation tools not just for the sake of technology, but to solve complex business problems efficiently.",
    icon: "Cpu",
  },
  {
    title: "Data Security First",
    desc: "Enterprise data is sacred. Our architectures are designed with zero-trust principles and comprehensive compliance frameworks.",
    icon: "Shield",
  },
  {
    title: "Agile Resilience",
    desc: "We build systems and teams that adapt to market changes rapidly, ensuring our clients stay ahead of the curve.",
    icon: "Zap",
  },
];
'''
values_tsx = '''"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Shield, Zap } from "lucide-react";
import { coreValuesData } from "./CoreValuesData";

const iconMap: any = {
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-white" />,
  Cpu: <Cpu className="w-6 h-6 text-white" />,
  Shield: <Shield className="w-6 h-6 text-white" />,
  Zap: <Zap className="w-6 h-6 text-white" />
};

export default function CoreValues() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-gray-600 text-sm">
            These are the foundational principles that guide our decision-making, shape our culture, and define our commitment to our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreValuesData.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="shrink-0 mt-1 bg-primary-red p-2 rounded-lg shadow-sm">
                {iconMap[value.icon]}
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
'''
save_file('CoreValues/CoreValuesData.ts', values_data)
save_file('CoreValues/CoreValues.tsx', values_tsx)


# 4. CorporateCTA
cta_data = '''export const corporateCTAData = {
  heading: "Partner With Us",
  description: "Ready to transform your digital operations? Our team of enterprise architects and engineering specialists are ready to collaborate.",
  buttonText: "Contact Sales Team"
};
'''
cta_tsx = '''"use client";
import React from "react";
import { corporateCTAData } from "./CorporateCTAData";

export default function CorporateCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#B40001] rounded-2xl p-10 md:p-14 text-center shadow-lg relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{corporateCTAData.heading}</h2>
            <p className="text-white/90 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              {corporateCTAData.description}
            </p>
            <button className="bg-white hover:bg-gray-50 text-[#B40001] px-8 py-3.5 rounded-md font-bold text-sm transition-colors shadow-sm">
              {corporateCTAData.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
'''
save_file('CorporateCTA/CorporateCTAData.ts', cta_data)
save_file('CorporateCTA/CorporateCTA.tsx', cta_tsx)


# 5. MilestonesTimeline
mt_data = '''export const milestonesData = [
    { year: "2012", title: "ApMoSys Founded", items: ["Founded by Mr. Bibhu Prasad Padhi with 5 employees.", "Signed 1st client, a public sector Bank in Feb 2012."] },
    { year: "2013", title: "ISO Certification", items: ["ISO 9011 certifications done."] },
    { year: "2014", title: "Revenue Milestone", items: ["1 crore revenue Generated."] },
    { year: "2015", title: "Large-base Expansion", items: ["Moved to a comparatively larger base, crossed 100 employees."] },
    { year: "2016", title: "Client Base Growth", items: ["Number of clients crossed 15."] },
    { year: "2017", title: "ISO Certification", items: ["ISO 21000 certification completed, reinforcing global quality standards in delivery."] },
    { year: "2018", title: "Revenue & Office Expansion", items: ["10 cr Revenue generated & shifted to proper corporate office at Mahape."] },
    { year: "2019", title: "Workforce Milestone", items: ["350 total employees onboarded."] },
    { year: "2020", title: "New Office Procurement", items: ["Procured our own office at Greenscape Technocity, Mahape."] },
    { year: "2021", title: "Rapid Scaling", items: ["Crossed 750 employees mark, Number of clients more than 70."] },
    { year: "2022", title: "Massive Expansion", items: ["Crossed 1000 employees and 100+ clients. Awarded Best Organization for Women Empowerment at 3rd GIWL Awards."] },
    { year: "2023", title: "Strategic Partnerships", items: ["Rising Star Awardee by Dynatrace. Axis Bank AVC Performer.", "Published multiple Springer and IEEE whitepapers."] },
    { year: "2024", title: "Strengthening Ecosystem", items: ["Endorsed Service Partner by Dynatrace. Rising Star by Automation Anywhere.", "Achieved CMMI Maturity Level 3 Certification.", "Crossed 1400 Employees, Clients more than 140."] }
];
'''
mt_tsx = '''"use client";
import React from "react";
import { motion } from "framer-motion";
import { milestonesData } from "./MilestonesTimelineData";

export default function MilestonesTimeline() {
  return (
    <section className="py-24 bg-white overflow-hidden relative border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-semibold uppercase tracking-widest text-primary-red mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-red" />
            Our Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
            Milestones <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B40001] to-red-600">Achieved</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            A legacy of technical excellence, continuous growth, and industry-defining innovation since 2012.
          </p>
        </div>

        <div className="relative">
          {/* Vertical tracking line */}
          <div className="absolute left-[20px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-red-200/60 sm:-translate-x-1/2" />

          <div className="space-y-12 sm:space-y-16">
            {milestonesData.map((ms, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative flex flex-col sm:flex-row items-center w-full group"
                >
                  <div className="absolute left-[10px] sm:left-1/2 w-[22px] h-[22px] rounded-md bg-[#B40001] shadow-[0_2px_8px_rgba(180,0,1,0.4)] flex items-center justify-center sm:-translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110" />

                  <div className={`w-full sm:w-1/2 pl-16 sm:pl-0 sm:pr-12 flex ${isEven ? 'justify-end' : 'justify-start'} items-center`}>
                    {isEven ? (
                      <div className="hidden sm:block text-6xl md:text-7xl lg:text-8xl font-black text-gray-200 tracking-tighter select-none">
                        {ms.year}
                      </div>
                    ) : (
                      <div className="bg-[#B40001] p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow w-full relative">
                        <div className="sm:hidden text-4xl font-black text-white/40 mb-4 select-none">{ms.year}</div>
                        <h3 className="text-white font-bold text-lg mb-3">{ms.title}</h3>
                        <ul className="space-y-2 text-white/90 text-sm leading-relaxed">
                          {ms.items.map((item, i) => (
                            <li key={i} className="flex gap-2 items-start">
                              <span className="text-white/60 mt-1 shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className={`w-full sm:w-1/2 pl-16 sm:pl-12 flex ${isEven ? 'justify-start' : 'justify-start'} items-center mt-6 sm:mt-0`}>
                    {isEven ? (
                      <div className="bg-[#B40001] p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow w-full relative">
                        <div className="sm:hidden text-4xl font-black text-white/40 mb-4 select-none">{ms.year}</div>
                        <h3 className="text-white font-bold text-lg mb-3">{ms.title}</h3>
                        <ul className="space-y-2 text-white/90 text-sm leading-relaxed">
                          {ms.items.map((item, i) => (
                            <li key={i} className="flex gap-2 items-start">
                              <span className="text-white/60 mt-1 shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="hidden sm:block text-6xl md:text-7xl lg:text-8xl font-black text-gray-200 tracking-tighter select-none">
                        {ms.year}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
'''
save_file('MilestonesTimeline/MilestonesTimelineData.ts', mt_data)
save_file('MilestonesTimeline/MilestonesTimeline.tsx', mt_tsx)

# 6. Main AboutPage wrapper
about_page_tsx = '''"use client";
import React from "react";
import AboutHero from "./AboutHero/AboutHero";
import StatsSection from "./StatsSection/StatsSection";
import StorySection from "./StorySection/StorySection";
import CoreValues from "./CoreValues/CoreValues";
import MilestonesTimeline from "./MilestonesTimeline/MilestonesTimeline";
import CorporateCTA from "./CorporateCTA/CorporateCTA";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <AboutHero />
      <StatsSection />
      <StorySection />
      <CoreValues />
      <MilestonesTimeline />
      <CorporateCTA />
    </main>
  );
}
'''
save_file('AboutPage.tsx', about_page_tsx)
print("Finished splitting components for About Us!")
