"use client";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { motion } from "framer-motion";

const visionItems = [
  {
    num: "01",
    title: "Innovation First",
    desc: "Continuously advancing technology and engineering practices to solve tomorrow's challenges. We build for resilience and scale."
  },
  {
    num: "02",
    title: "Uncompromising Excellence",
    desc: "Delivering exceptional quality, reliability, and measurable business outcomes for every client. Excellence is our baseline."
  },
  {
    num: "03",
    title: "Global Impact",
    desc: "Creating meaningful value through digital transformation, intelligent automation, and trusted partnerships across the globe."
  }
];

export default function LeadershipVision() {
  return (
    <SectionThemeWrapper sectionId="leadership_vision" defaultTheme="light">
      {() => {
        return (
          <section className="py-12 transition-colors duration-300 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">

                <div className="lg:col-span-5 lg:sticky lg:top-32">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.1] mb-6 text-gray-800">
                    Engineering <br/> The Future.
                  </h2>

                  <p className="text-lg font-medium leading-relaxed mt-8 text-black">
                    Our vision is to create a future where intelligent
                    engineering, automation, and innovation enable
                    organizations to achieve operational excellence at scale.
                  </p>
                </div>

                <div className="lg:col-span-6 lg:col-start-7 space-y-10">
                  {visionItems.map((item, i) => (
                    <motion.div 
                      key={item.num}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      variants={{
                        hidden: { borderColor: "#cbd5e1" }, // slate-300
                        visible: { borderColor: "#1e293b", transition: { duration: 0.7, delay: 0.1 } } // gray-800
                      }}
                      className="relative pl-8 sm:pl-12 border-l"
                    >
                      <motion.div 
                        variants={{
                          hidden: { height: 0 },
                          visible: { height: "3rem", transition: { duration: 0.7, delay: 0.1 } }
                        }}
                        className="absolute -left-[3px] top-2 w-[5px] bg-gray-800"
                      />
                      
                      <motion.div 
                        variants={{
                          hidden: { WebkitTextStroke: "1px rgba(30,41,59,0.2)" },
                          visible: { WebkitTextStroke: "1px rgba(30,41,59,1)", transition: { duration: 0.7, delay: 0.1 } }
                        }}
                        className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text mb-4 select-none"
                      >
                        {item.num}
                      </motion.div>
                      
                      <motion.h3 
                        variants={{
                          hidden: { opacity: 0.7, y: 10 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
                        }}
                        className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800"
                      >
                        {item.title}
                      </motion.h3>
                      
                      <motion.p 
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
                        }}
                        className="text-lg font-medium leading-relaxed text-black"
                      >
                        {item.desc}
                      </motion.p>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
