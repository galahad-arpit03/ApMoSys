// src/what-we-do/alliance/icons.tsx
import {
  Cpu,              // tech
  Users,            // consulting
  Building2,        // industry
  GraduationCap,    // academic
  Globe,            // channel
  Lightbulb,        // innovation
  Award,            // expertise
  Network,          // global
  Link,             // integrated
  Trophy,           // achievement
  Star,             // rising star
  Clipboard,        // certification
  FileText,         // publications
  type LucideIcon,
} from "lucide-react";

/**
 * Map of Alliance icon names to Lucide React components
 */
export const allianceIconMap: Record<string, LucideIcon> = {
  // Alliance Overview
  tech: Cpu,
  consulting: Users,
  industry: Building2,
  academic: GraduationCap,
  channel: Globe,
  innovation: Lightbulb,
  
  // Alliance Benefits
  expertise: Award,
  global: Network,
  integrated: Link,

  // Featured / Achievements
  trophy: Trophy,
  star: Star,
  clipboard: Clipboard,
  filetext: FileText,
};

/**
 * Default fallback icon
 */
export const defaultAllianceIcon: LucideIcon = Users;