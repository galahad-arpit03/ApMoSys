"use client";

import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] py-20 lg:py-32 border-t border-[#1F1F1F]">

      {/* Background Glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[300px]
          h-[300px]
          sm:w-[500px]
          sm:h-[500px]
          lg:w-[700px]
          lg:h-[700px]
          bg-primary-red/10
          blur-[120px]
          lg:blur-[150px]
          rounded-full
        "
      />

      {/* Grid Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          pointer-events-none
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            bg-[#121212]/70
            backdrop-blur-md
            border
            border-[#242424]
            rounded-3xl
            p-8
            sm:p-10
            lg:p-16
            text-center
          "
        >

          {/* Label */}
          <span className="text-primary-red uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[10px] sm:text-xs font-semibold">
            Let's Talk
          </span>

          {/* Heading */}
          <h2
            className="
              font-heading
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              text-white
              font-bold
              mt-5
              leading-tight
            "
          >
            Ready To Transform
            <br className="hidden sm:block" />
            Your Digital Operations?
          </h2>

          {/* Description */}
          <p
            className="
              mt-6
              sm:mt-8
              text-base
              sm:text-lg
              lg:text-xl
              text-[#A0A0A0]
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            Partner with ApMoSys to accelerate innovation,
            modernize technology ecosystems, improve software quality,
            strengthen observability, and drive measurable business outcomes.
          </p>

          {/* CTA Buttons */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              justify-center
              items-center
              gap-4
              sm:gap-5
              mt-10
              sm:mt-12
            "
          >

            <motion.a
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="/contact"
              className="
                w-full
                sm:w-auto
                min-w-[220px]

                bg-primary-red
                hover:bg-primary-hover

                text-white
                px-8
                py-4
                rounded-xl
                font-semibold

                transition-all
                duration-300
              "
            >
              Schedule Consultation
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="/services"
              className="
                w-full
                sm:w-auto
                min-w-[220px]

                border
                border-[#333333]
                hover:border-primary-red

                text-white
                px-8
                py-4
                rounded-xl
                font-semibold

                transition-all
                duration-300
              "
            >
              Explore Services
            </motion.a>

          </div>

          {/* Bottom Metrics */}
          {/* <div
            className="
              mt-12
              lg:mt-16
              pt-8
              border-t
              border-[#242424]

              grid
              grid-cols-2
              lg:grid-cols-4
              gap-6
            "
          >

            {[
              {
                value: "14+",
                label: "Years Experience",
              },
              {
                value: "100+",
                label: "Clients Served",
              },
              {
                value: "1000+",
                label: "Professionals",
              },
              {
                value: "10+",
                label: "Countries",
              },
            ].map((item) => (
              <div key={item.label}>

                <div className="text-2xl sm:text-3xl font-bold text-primary-red">
                  {item.value}
                </div>

                <div className="text-[11px] sm:text-xs uppercase tracking-wider text-[#777777] mt-2">
                  {item.label}
                </div>

              </div>
            ))}

          </div> */}

        </motion.div>

      </div>

    </section>
  );
}