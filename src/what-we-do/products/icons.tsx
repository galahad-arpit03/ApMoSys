// src/what-we-do/products/icons.tsx
import {
  Shield,           // security
  Link,             // integration
  Bot,              // ai
  TrendingUp,       // scale
  BarChart3,        // insights
  Globe,            // support
  type LucideIcon,
} from "lucide-react";

/**
 * Map of icon names to Lucide React components
 * Used across all product-related sections
 */
export const productIconMap: Record<string, LucideIcon> = {
  // Product benefits
  security: Shield,
  integration: Link,
  ai: Bot,
  scale: TrendingUp,
  insights: BarChart3,
  support: Globe,
  
  // Product categories (optional, can reuse same keys)
  // If you want different icons for categories, add them here.
  // For now, we'll reuse the same keys.
};

/**
 * Default fallback icon
 */
export const defaultProductIcon: LucideIcon = Shield;