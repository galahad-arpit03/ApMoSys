// src/what-we-do/coe/icons.tsx
import {
  Users,
  BarChart3,
  Settings,
  Cpu,
  Building2,
  Shield,
  Brain,        // AI Research Lab
  Wrench,       // Automation Hub
  Lock,         // Security Lab
  Cloud,        // Cloud & DevOps Lab
  type LucideIcon,
} from "lucide-react";

/**
 * Map of CoE icon names to Lucide React components
 */
export const coesIconMap: Record<string, LucideIcon> = {
  // CoE Overview icons
  functional: Users,
  performance: BarChart3,
  automation: Settings,
  ai: Cpu,
  banking: Building2,
  insurance: Shield,
  
  // Innovation Lab icons
  brain: Brain,
  wrench: Wrench,
  lock: Lock,
  cloud: Cloud,
};

/**
 * Default fallback icon
 */
export const defaultCoEIcon: LucideIcon = Users;