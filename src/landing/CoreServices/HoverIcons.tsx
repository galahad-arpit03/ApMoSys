"use client";

import React from "react";
import { motion } from "framer-motion";

interface IconProps {
  className?: string;
  isHovered?: boolean;
}

// 1. Automation Testing - Gear rotation & pulse
export const AutomationTestingIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    whileHover={{ rotate: 90, scale: 1.15 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <motion.circle
      cx="12"
      cy="12"
      r="3"
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.2 }}
    />
  </motion.svg>
);

// 2. Quality Engineering - Shield Checkmark animation
export const QualityEngineeringIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    whileHover={{ scale: 1.15 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <motion.path
      d="m9 12 2 2 4-4"
      initial={{ pathLength: 1 }}
      whileHover={{ pathLength: [0, 1] }}
      transition={{ duration: 0.4 }}
    />
  </motion.svg>
);

// 3. Performance Engineering - Speedometer Gauge needle sweep
export const PerformanceEngineeringIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    whileHover={{ scale: 1.15 }}
  >
    <path d="m12 14 4-4" />
    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    <motion.line
      x1="12"
      y1="14"
      x2="16"
      y2="10"
      whileHover={{ rotate: [0, 30, -10, 0] }}
      transition={{ duration: 0.5 }}
      style={{ originX: "12px", originY: "14px" }}
    />
  </motion.svg>
);

// 4. Security Testing - Shield Alert pulse
export const SecurityTestingIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    whileHover={{ scale: 1.15 }}
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <motion.line
      x1="12"
      x2="12"
      y1="8"
      y2="12"
      whileHover={{ y: [-1, 1, -1] }}
      transition={{ duration: 0.3, repeat: 2 }}
    />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </motion.svg>
);

// 5. Application Development - Code brackets expand
export const ApplicationDevelopmentIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    whileHover={{ scale: 1.15 }}
  >
    <motion.path
      d="m18 16 4-4-4-4"
      whileHover={{ x: 2 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
    <motion.path
      d="m6 8-4 4 4 4"
      whileHover={{ x: -2 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
    <path d="m14.5 4-5 16" />
  </motion.svg>
);

// 6. DevOps & CI/CD - Infinity loop path flow
export const DevOpsIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    whileHover={{ scale: 1.15 }}
  >
    <motion.path
      d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"
      whileHover={{ pathLength: [0, 1] }}
      transition={{ duration: 0.6 }}
    />
  </motion.svg>
);

// 7. Cloud Migration - Cloud float & arrow up
export const CloudMigrationIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    whileHover={{ scale: 1.15 }}
  >
    <motion.path
      d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
  </motion.svg>
);

// 8. Data & Analytics - Bar chart height stagger
export const DataAnalyticsIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    whileHover={{ scale: 1.15 }}
  >
    <motion.line
      x1="18"
      x2="18"
      y1="20"
      y2="10"
      whileHover={{ y1: 6 }}
      transition={{ duration: 0.2 }}
    />
    <motion.line
      x1="12"
      x2="12"
      y1="20"
      y2="4"
      whileHover={{ y1: 2 }}
      transition={{ duration: 0.2, delay: 0.05 }}
    />
    <motion.line
      x1="6"
      x2="6"
      y1="20"
      y2="14"
      whileHover={{ y1: 10 }}
      transition={{ duration: 0.2, delay: 0.1 }}
    />
  </motion.svg>
);

// 9. Enterprise AI Solutions - Brain Circuit sparkles
export const EnterpriseAIIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    whileHover={{ scale: 1.15 }}
  >
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path d="M15 13a3 3 0 1 0-6 0" />
    <motion.circle
      cx="12"
      cy="12"
      r="2"
      whileHover={{ scale: [1, 1.4, 1] }}
      transition={{ duration: 0.4 }}
    />
  </motion.svg>
);

// 10. IT Service Management - Headset pulse & tilt
export const ITServiceManagementIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    whileHover={{ rotate: [-5, 5, -5, 0], scale: 1.15 }}
    transition={{ duration: 0.4 }}
  >
    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
  </motion.svg>
);

// 11. Robotic Process Automation - Bot antenna bounce
export const RPAIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    whileHover={{ scale: 1.15 }}
  >
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <motion.circle
      cx="9"
      cy="13"
      r="1"
      whileHover={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 0.3 }}
    />
    <motion.circle
      cx="15"
      cy="13"
      r="1"
      whileHover={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 0.3, delay: 0.1 }}
    />
  </motion.svg>
);

// 12. Application Monitoring - Monitor pulse line
export const ApplicationMonitoringIcon: React.FC<IconProps> = ({
  className = "w-6 h-6",
}) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    whileHover={{ scale: 1.15 }}
  >
    <rect width="20" height="14" x="2" y="3" rx="2" />
    <line x1="8" x2="16" y1="21" y2="21" />
    <line x1="12" x2="12" y1="17" y2="21" />
    <motion.path
      d="M6 10h3l2-3 2 6 2-3h3"
      initial={{ pathLength: 1 }}
      whileHover={{ pathLength: [0, 1] }}
      transition={{ duration: 0.5 }}
    />
  </motion.svg>
);

// 13. CTA Box Icon
export const CTABoxIcon: React.FC<IconProps> = ({ className = "w-7 h-7" }) => (
  <motion.svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    whileHover={{ rotate: 15, scale: 1.2 }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
  >
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </motion.svg>
);
