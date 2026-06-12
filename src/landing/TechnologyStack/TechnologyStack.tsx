"use client";
import { technologystackData } from "./TechnologyStackData";

import { motion } from "framer-motion";


const categories = [
  {
    title: "Application Development",
    description:
      "Modern frameworks and enterprise technologies for scalable application development.",
    items: [
      "Java",
      "Spring Boot",
      "React",
      "Angular",
      "Node.js",
      ".NET",
    ],
    icon: "💻",
  },
  {
    title: "Quality Engineering",
    description:
      "Comprehensive testing ecosystem for automation, performance and quality assurance.",
    items: [
      "Selenium",
      "Playwright",
      "Cypress",
      "JMeter",
      "Postman",
      "Appium",
    ],
    icon: "🧪",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud-native infrastructure, containerization and continuous delivery platforms.",
    items: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Jenkins",
    ],
    icon: "☁️",
  },
  {
    title: "Observability & AIOps",
    description:
      "Monitoring, analytics and intelligent operations management solutions.",
    items: [
      "Dynatrace",
      "AppDynamics",
      "Zabbix",
      "Nagios",
      "Centreon",
      "Elastic",
    ],
    icon: "📊",
  },
];

const stats = [
  {
    value: "50+",
    label: "Technology Platforms",
  },
  {
    value: "100+",
    label: "Certified Experts",
  },
  {
    value: "24×7",
    label: "Operations Coverage",
  },
  {
    value: "1000+",
    label: "Successful Engagements",
  },
];

export default function TechnologyStack() {
  return (
    <section className="bg-[#111111] py-20 lg:py-28 border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-20">

          <span className="text-primary-red uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-semibold">
            Technology Ecosystem
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-bold mt-4 sm:mt-5">
            Powered By Industry
            <br className="hidden sm:block" />
            Leading Technologies
          </h2>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#A0A0A0] leading-relaxed max-w-3xl mx-auto">
            Leveraging modern frameworks, cloud platforms, testing tools
            and observability technologies to deliver scalable enterprise
            solutions and accelerate digital transformation.
          </p>

        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                bg-[#171717]
                border
                border-[#242424]
                rounded-3xl
                p-6
                lg:p-8
                hover:border-primary-red/40
                transition-all
                duration-300
              "
            >

              {/* Icon */}
              <div
                className="
                  w-14
                  h-14
                  rounded-xl
                  bg-primary-red/10
                  border
                  border-primary-red/20
                  flex
                  items-center
                  justify-center
                  text-2xl
                  mb-6
                "
              >
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-semibold mb-3">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">
                {category.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">

                {category.items.map((item) => (
                  <span
                    key={item}
                    className="
                      px-3
                      py-1.5
                      rounded-full
                      text-[11px]
                      sm:text-xs
                      bg-[#1F1F1F]
                      border
                      border-[#303030]
                      text-[#C0C0C0]
                    "
                  >
                    {item}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

        {/* Stats Section */}
        <div className="mt-14 lg:mt-20">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

            {stats.map((item) => (
              <div
                key={item.label}
                className="
                  bg-[#171717]
                  border
                  border-[#242424]
                  rounded-2xl
                  p-5
                  lg:p-6
                  text-center
                "
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-red">
                  {item.value}
                </div>

                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#888888] mt-2">
                  {item.label}
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">

          <a
            href="/services"
            className="
              inline-flex
              items-center
              gap-2
              text-primary-red
              font-semibold
              hover:gap-3
              transition-all
              duration-300
            "
          >
            Explore Our Technology Services
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  );
}