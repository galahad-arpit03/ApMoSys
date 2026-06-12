"use client";
import { heroData } from "./HeroData";

import React from "react";
import { motion } from "framer-motion";
import {

  BrainCircuit,
  Cloud,
  Cog,
  ShieldCheck,
  Activity,
  Bot,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const particles = [
  { top: "12%", left: "8%" },
  { top: "20%", left: "30%" },
  { top: "15%", left: "55%" },
  { top: "28%", left: "80%" },

  { top: "45%", left: "15%" },
  { top: "50%", left: "40%" },
  { top: "48%", left: "65%" },
  { top: "58%", left: "88%" },

  { top: "75%", left: "10%" },
  { top: "80%", left: "35%" },
  { top: "78%", left: "60%" },
  { top: "72%", left: "85%" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-64px)] flex items-center bg-[#0B0B0B]">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary-red/10 blur-[180px] rounded-full"
      />
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">

        {/* Horizontal Lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <line x1="8%" y1="12%" x2="30%" y2="20%" stroke="#B40001" strokeWidth="1" />
          <line x1="30%" y1="20%" x2="55%" y2="15%" stroke="#B40001" strokeWidth="1" />
          <line x1="55%" y1="15%" x2="80%" y2="28%" stroke="#B40001" strokeWidth="1" />

          <line x1="15%" y1="45%" x2="40%" y2="50%" stroke="#B40001" strokeWidth="1" />
          <line x1="40%" y1="50%" x2="65%" y2="48%" stroke="#B40001" strokeWidth="1" />
          <line x1="65%" y1="48%" x2="88%" y2="58%" stroke="#B40001" strokeWidth="1" />

          <line x1="10%" y1="75%" x2="35%" y2="80%" stroke="#B40001" strokeWidth="1" />
          <line x1="35%" y1="80%" x2="60%" y2="78%" stroke="#B40001" strokeWidth="1" />
          <line x1="60%" y1="78%" x2="85%" y2="72%" stroke="#B40001" strokeWidth="1" />
        </svg>

        {particles.map((particle, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
            }}
            className="absolute w-2 h-2 rounded-full bg-primary-red"
            style={{
              top: particle.top,
              left: particle.left,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="lg:col-span-6">

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 border border-primary-red/30 bg-primary-red/10 px-4 py-2 rounded-full mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-primary-red animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] text-white">
                Digital Engineering • Quality Engineering • AI • Cloud
              </span>
            </motion.div>

            <div className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95]">

              {[
                "Build.",
                "Test.",
                "Monitor.",
                "Transform.",
              ].map((word, index) => (
                <motion.div
                  key={word}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.4,
                    duration: 0.6,
                  }}
                  className={
                    word === "Monitor."
                      ? "text-primary-red"
                      : "text-white"
                  }
                >
                  {word}
                </motion.div>
              ))}

            </div>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 text-lg text-[#A0A0A0] max-w-2xl leading-relaxed"
            >
              Helping enterprises accelerate innovation through Software
              Engineering, Quality Engineering, DevOps, Cloud,
              AI Automation and Infrastructure Observability.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a
                href="/contact"
                className="bg-primary-red hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                Schedule Consultation
              </a>

              <a
                href="#services"
                className="border border-[#333] hover:border-primary-red text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Stats */}
            {/* <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16"
            >
              {[
                ["14+", "Years"],
                ["100+", "Clients"],
                ["1000+", "Professionals"],
                ["10+", "Countries"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-3xl font-bold text-white">
                    {value}
                  </div>
                  <div className="text-sm text-[#777] mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div> */}
          </div>

          {/* Right Side */}
          {/* Right Side */}
          <div className="lg:col-span-6 flex items-center justify-center">

            <div className="relative w-full max-w-[600px] h-[450px] sm:h-[500px]">

              {/* Center Core */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  boxShadow: [
                    "0 0 20px rgba(180,0,1,0.2)",
                    "0 0 60px rgba(180,0,1,0.5)",
                    "0 0 20px rgba(180,0,1,0.2)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-28
        h-28
        sm:w-36
        sm:h-36
        rounded-full
        bg-[#111111]
        border-2
        border-primary-red/40
        flex
        items-center
        justify-center
        z-20
      "
              >
                <div className="text-center">
                  <div className="text-primary-red text-xs uppercase tracking-widest">
                    ApMoSys
                  </div>

                  <div className="text-white text-sm mt-2">
                    Engineering
                    <br />
                    Excellence
                  </div>
                </div>
              </motion.div>

              {/* Orbit Ring */}
              <div
                className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[320px]
        h-[320px]
        sm:w-[420px]
        sm:h-[420px]
        rounded-full
        border
        border-[#2A2A2A]
      "
              />

              {/* Second Ring */}
              <div
                className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[240px]
        h-[240px]
        sm:w-[320px]
        sm:h-[320px]
        rounded-full
        border
        border-[#222]
      "
              />

              {/* Orbit Container */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 50,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
        absolute
        inset-0
      "
              >

                {[
                  {
                    name: "Artificial Intelligence",
                    icon: BrainCircuit,
                    top: "8%",
                    left: "50%",
                  },
                  {
                    name: "Cloud",
                    icon: Cloud,
                    top: "25%",
                    left: "84%",
                  },
                  {
                    name: "DevOps",
                    icon: Cog,
                    top: "72%",
                    left: "82%",
                  },
                  {
                    name: "Quality Engineering",
                    icon: ShieldCheck,
                    top: "90%",
                    left: "50%",
                  },
                  {
                    name: "Automation",
                    icon: Bot,
                    top: "72%",
                    left: "18%",
                  },
                  {
                    name: "Observability",
                    icon: Activity,
                    top: "25%",
                    left: "15%",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.name}
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="absolute group"
                      style={{
                        top: item.top,
                        left: item.left,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {/* Icon Node */}
                      <motion.div
                        animate={{
                          rotate: -360,
                        }}
                        transition={{
                          duration: 50,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="
w-14
h-14
sm:w-16
sm:h-16
rounded-full
bg-gradient-to-br
from-[#1D1D1D]
to-[#111111]
border
border-primary-red/30
backdrop-blur-sm
flex
items-center
justify-center
shadow-[0_0_25px_rgba(180,0,1,0.18)]
group-hover:shadow-[0_0_35px_rgba(180,0,1,0.35)]
transition-all
duration-300
"
                      >
                        <Icon
                          size={26}
                          className="text-primary-red"
                        />
                      </motion.div>

                      {/* Tooltip */}
                      <div
                        className="
          absolute
          top-full
          left-1/2
          -translate-x-1/2
          mt-3
          px-3
          py-1.5
          rounded-lg
          bg-[#111111]
          border
          border-[#2A2A2A]
          text-xs
          text-white
          whitespace-nowrap
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-300
          pointer-events-none
          z-50
        "
                      >
                        {item.name}
                      </div>
                    </motion.div>
                  );
                })}

              </motion.div>

              {/* Connection Lines */}

              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 600 500"
              >
                <motion.line
                  x1="300"
                  y1="250"
                  x2="300"
                  y2="70"
                  stroke="#B40001"
                  strokeWidth="1"
                  animate={{
                    opacity: [0.2, 1, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                <motion.line
                  x1="300"
                  y1="250"
                  x2="500"
                  y2="150"
                  stroke="#B40001"
                  strokeWidth="1"
                  animate={{
                    opacity: [0.2, 1, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                <motion.line
                  x1="300"
                  y1="250"
                  x2="500"
                  y2="350"
                  stroke="#B40001"
                  strokeWidth="1"
                  animate={{
                    opacity: [0.2, 1, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                <motion.line
                  x1="300"
                  y1="250"
                  x2="300"
                  y2="430"
                  stroke="#B40001"
                  strokeWidth="1"
                  animate={{
                    opacity: [0.2, 1, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                <motion.line
                  x1="300"
                  y1="250"
                  x2="100"
                  y2="350"
                  stroke="#B40001"
                  strokeWidth="1"
                  animate={{
                    opacity: [0.2, 1, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                <motion.line
                  x1="300"
                  y1="250"
                  x2="100"
                  y2="150"
                  stroke="#B40001"
                  strokeWidth="1"
                  animate={{
                    opacity: [0.2, 1, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </svg>

              {/* Floating Data Pulses */}

              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                  }}
                  className="
          absolute
          w-2
          h-2
          rounded-full
          bg-primary-red
        "
                  style={{
                    top: `${25 + i * 10}%`,
                    left: `${35 + i * 5}%`,
                  }}
                />
              ))}

              {/* Bottom Caption */}

              {/* <div
                className="
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2
        text-center
        max-w-md
      "
              >
                <div className="text-primary-red text-sm mb-2">
                  Enterprise Technology Ecosystem
                </div>

                <div className="text-[#888] text-sm leading-relaxed">
                  Connecting software engineering, quality engineering,
                  cloud platforms, observability and intelligent automation
                  into one integrated delivery model.
                </div>
              </div> */}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}