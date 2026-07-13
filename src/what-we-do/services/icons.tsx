// src/what-we-do/services/icons.tsx
import {
  CheckCircle2,   // quality
  Bot,            // automation
  Cloud,          // cloud
  Shield,         // security
  GitBranch,      // devops
  Cpu,            // ai
  Eye,            // observability
  Search,         // discovery (approach)
  Layers,         // architecture (approach)
  RefreshCw,      // agile (approach)
  Zap,            // speed (benefits)
  DollarSign,     // cost (benefits)
  TrendingUp,     // scale (benefits)
  Lightbulb,      // innovation (benefits)
  type LucideIcon,
} from "lucide-react";

/**
 * Map of icon names to Lucide React components
 * Used across all service-related sections
 */
export const serviceIconMap: Record<string, LucideIcon> = {
  // Service overview icons
  quality: CheckCircle2,
  automation: Bot,
  cloud: Cloud,
  security: Shield,
  devops: GitBranch,
  ai: Cpu,
  observability: Eye,

  // Approach icons
  discovery: Search,
  architecture: Layers,
  agile: RefreshCw,

  // Benefits icons
  speed: Zap,
  cost: DollarSign,
  scale: TrendingUp,
  innovation: Lightbulb,
};

/**
 * Default fallback icon when an unknown icon name is used
 */
export const defaultServiceIcon: LucideIcon = CheckCircle2;