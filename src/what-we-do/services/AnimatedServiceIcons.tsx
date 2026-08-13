"use client";

import React from "react";
import { motion } from "framer-motion";

interface IconProps {
  className?: string;
  strokeWidth?: number;
}

// 1. Quality Engineering: Check Circle with rotating ring & stroke draw
export function AnimatedQualityIcon({ className = "w-10 h-10", strokeWidth = 1.75 }: IconProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        variants={{
          initial: { scale: 1, rotate: 0 },
          hover: { scale: [1, 1.1, 1], rotate: [0, 90, 0], transition: { duration: 0.6, ease: "easeInOut" } },
        }}
      />
      <motion.path
        d="m9 12 2 2 4-4"
        variants={{
          initial: { pathLength: 1, opacity: 1 },
          hover: { pathLength: [0.2, 1], scale: [0.85, 1.15, 1], transition: { duration: 0.5, ease: "easeInOut" } },
        }}
      />
    </motion.svg>
  );
}

// 2. Intelligent Automation: Bot Head with wiggling antennas & blinking eyes
export function AnimatedAutomationIcon({ className = "w-10 h-10", strokeWidth = 1.75 }: IconProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <motion.path
        d="M2 14h2"
        variants={{
          initial: { x: 0 },
          hover: { x: [-2, 2, 0], transition: { duration: 0.4, repeat: 1 } },
        }}
      />
      <motion.path
        d="M20 14h2"
        variants={{
          initial: { x: 0 },
          hover: { x: [2, -2, 0], transition: { duration: 0.4, repeat: 1 } },
        }}
      />
      <motion.circle
        cx="9"
        cy="13"
        r="1"
        fill="currentColor"
        variants={{
          initial: { scale: 1 },
          hover: { scale: [1, 1.6, 1], transition: { duration: 0.4 } },
        }}
      />
      <motion.circle
        cx="15"
        cy="13"
        r="1"
        fill="currentColor"
        variants={{
          initial: { scale: 1 },
          hover: { scale: [1, 1.6, 1], transition: { duration: 0.4, delay: 0.05 } },
        }}
      />
      <motion.path
        d="M9 17h6"
        variants={{
          initial: { d: "M9 17h6" },
          hover: { d: "M9 16.5c1 1 5 1 6 0", transition: { duration: 0.3 } },
        }}
      />
    </motion.svg>
  );
}

// 3. Cloud & DevOps: Cloud drifting with pulse upload arrow
export function AnimatedCloudIcon({ className = "w-10 h-10", strokeWidth = 1.75 }: IconProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <motion.path
        d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
        variants={{
          initial: { y: 0 },
          hover: { y: [-2, 2, -2, 0], transition: { duration: 0.6, ease: "easeInOut" } },
        }}
      />
      <motion.path
        d="M12 13v6"
        variants={{
          initial: { y: 0, opacity: 0.8 },
          hover: { y: [-3, 0], opacity: [0.4, 1], transition: { duration: 0.4, repeat: 1 } },
        }}
      />
      <motion.path
        d="m9 16 3-3 3 3"
        variants={{
          initial: { y: 0 },
          hover: { y: [-3, 0], transition: { duration: 0.4, repeat: 1 } },
        }}
      />
    </motion.svg>
  );
}

// 4. Security & Compliance: Shield with animated lock shackle
export function AnimatedSecurityIcon({ className = "w-10 h-10", strokeWidth = 1.75 }: IconProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <motion.path
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        variants={{
          initial: { scale: 1 },
          hover: { scale: [1, 1.06, 1], transition: { duration: 0.5, ease: "easeInOut" } },
        }}
      />
      <motion.path
        d="m9 12 2 2 4-4"
        variants={{
          initial: { pathLength: 1 },
          hover: { pathLength: [0, 1], transition: { duration: 0.5, ease: "easeOut" } },
        }}
      />
    </motion.svg>
  );
}

// 5. DevSecOps: Git Branch with pulsating nodes
export function AnimatedDevOpsIcon({ className = "w-10 h-10", strokeWidth = 1.75 }: IconProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="6" x2="6" y1="3" y2="15" />
      <motion.circle
        cx="18"
        cy="6"
        r="3"
        variants={{
          initial: { scale: 1 },
          hover: { scale: [1, 1.35, 1], transition: { duration: 0.4 } },
        }}
      />
      <motion.circle
        cx="6"
        cy="18"
        r="3"
        variants={{
          initial: { scale: 1 },
          hover: { scale: [1, 1.35, 1], transition: { duration: 0.4, delay: 0.15 } },
        }}
      />
      <motion.path
        d="M18 9a9 9 0 0 1-9 9"
        variants={{
          initial: { pathLength: 1 },
          hover: { pathLength: [0.3, 1], transition: { duration: 0.5 } },
        }}
      />
    </motion.svg>
  );
}

// 6. AI Engineering: CPU Chip with pulsating core & revolving circuit paths
export function AnimatedAIIcon({ className = "w-10 h-10", strokeWidth = 1.75 }: IconProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <motion.rect
        width="6"
        height="6"
        x="9"
        y="9"
        rx="1"
        variants={{
          initial: { scale: 1, rotate: 0 },
          hover: { scale: [1, 1.25, 1], rotate: [0, 45, 0], transition: { duration: 0.6, ease: "easeInOut" } },
        }}
      />
      <motion.path
        d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"
        variants={{
          initial: { opacity: 0.8 },
          hover: { opacity: [0.4, 1, 0.4], transition: { duration: 0.5, repeat: 1 } },
        }}
      />
    </motion.svg>
  );
}

// 7. Observability & AIOps: Eye Radar with expanding iris pulse
export function AnimatedObservabilityIcon({ className = "w-10 h-10", strokeWidth = 1.75 }: IconProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <motion.circle
        cx="12"
        cy="12"
        r="3"
        variants={{
          initial: { scale: 1 },
          hover: { scale: [1, 1.4, 1], transition: { duration: 0.5 } },
        }}
      />
    </motion.svg>
  );
}

// 8. Application Development: Code Brackets spreading with rotating slash
export function AnimatedAppDevIcon({ className = "w-10 h-10", strokeWidth = 1.75 }: IconProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <motion.polyline
        points="16 18 22 12 16 6"
        variants={{
          initial: { x: 0 },
          hover: { x: [0, 3, 0], transition: { duration: 0.4 } },
        }}
      />
      <motion.polyline
        points="8 6 2 12 8 18"
        variants={{
          initial: { x: 0 },
          hover: { x: [0, -3, 0], transition: { duration: 0.4 } },
        }}
      />
      <motion.line
        x1="14"
        x2="10"
        y1="4"
        y2="20"
        variants={{
          initial: { rotate: 0 },
          hover: { rotate: [0, 15, -15, 0], transition: { duration: 0.5 } },
        }}
      />
    </motion.svg>
  );
}

export const animatedServiceIconMap: Record<string, React.ComponentType<IconProps>> = {
  quality: AnimatedQualityIcon,
  automation: AnimatedAutomationIcon,
  cloud: AnimatedCloudIcon,
  security: AnimatedSecurityIcon,
  devops: AnimatedDevOpsIcon,
  ai: AnimatedAIIcon,
  observability: AnimatedObservabilityIcon,
  appdev: AnimatedAppDevIcon,
};

export const defaultAnimatedIcon = AnimatedQualityIcon;
