"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GlobalPresence() {
  const offices = [
    {
      city: "Chennai",
      address: "Office No. C315, 3rd Floor, Apeejay House, 39/12, Haddows Road, Nungambakkam, Chennai – 600 006",
      image: "/Contact Us/mumbai_hq.png",
      link: "https://www.google.com/maps/place/Apeejay+Business+Centre/@13.0631753,80.2453564,17z/data=!3m2!4b1!5s0x3a52666945ca8d3d:0xdd03801419888d34!4m6!3m5!1s0x3a526669439ac537:0x2e28741298f598ea!8m2!3d13.0631753!4d80.2479313!16s%2Fg%2F1tjtgpsz?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      city: "Bhubaneswar",
      address: "ApMoSys Technologies Pvt. Ltd., Fortune Towers, 4th Floor, A Zone, Nandankanan Road, Chandrasekharpur, Bhubaneswar – 751023, Odisha",
      image: "/Contact Us/dubai_office.png",
      link: "https://www.google.com/maps/place/ApMoSys+Technologies+Pvt+Ltd/@20.3094975,85.8169395,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1909005ebd71a1:0xf02ca3f5e8cf8ad5!8m2!3d20.3094975!4d85.8195144!16s%2Fg%2F11xt2cgl14?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      city: "United Arab Emirates",
      address: "ApMoSys Technology FZ-LLC, B05-716A Business Center 04, RAKEZ Business Zone – FZ RAK, UAE. PO BOX 10055",
      image: "/Contact Us/ontario_office.png",
      link: "https://www.google.com/maps/search/ApMoSys+Technology+FZ-LLC,+B05-716A+Business+Center+04,+RAKEZ+Business+Zone+-FZ+RAK,+United+Arab+Emirates.+PO+BOX+10055./@25.452999,55.3465905,9z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  return (
    <section className="bg-[#FAFAFA] text-[#121212] py-20 border-t border-[#E8E8E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#121212] mb-4">
            Global Presence
          </h2>
          <p className="text-[#5A5A5A] text-sm sm:text-base leading-relaxed">
            Strategic locations delivering technical excellence across multiple timezones.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offices.map((office, idx) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.12, ease: "easeOut" }}
              whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(0,0,0,0.10)" }}
              className="bg-[#FFFFFF] border border-[#E8E8E8] rounded-xl overflow-hidden shadow-sm transition-shadow"
            >
              <div className="relative h-48 w-full overflow-hidden bg-[#E8E8E8]">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={office.image}
                    alt={office.city}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-[#121212] mb-2">{office.city}</h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed mb-5 min-h-[60px]">
                  {office.address}
                </p>
                <motion.a
                  href={office.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-red hover:text-[#D10000] transition-colors uppercase tracking-wider"
                >
                  View on Map
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
