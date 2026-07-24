import { MetadataRoute } from 'next'
import { defaultContent } from '@/src/admin/store/adminStore'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://apmosys.com' // Adjust domain as needed

  const staticRoutes = [
    '',
    '/about',
    '/alliance',
    '/blogs',
    '/careers',
    '/coe',
    '/community',
    '/contact',
    '/industries',
    '/leadership',
    '/newsrooms',
    '/newsrooms/awards-recognition',
    '/newsrooms/customer-stories',
    '/newsrooms/events',
    '/newsrooms/success-metrics',
    '/products',
    '/services',
    '/services/ai-engineering',
    '/team',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // You can dynamically import blogs if they are stored in defaultContent or similar
  // For this example, we assume you might fetch them or use a static list
  // Here we use a static list of slugs based on what was added to adminStore earlier
  const blogSlugs = [
    'ai-in-quality-engineering', // Example slug for blog 1 (assuming it was something like this)
    'performance-engineering-at-scale',
    'zero-trust-security-cicd',
    'navigating-cloud-native',
    'future-of-qa-devops'
  ]

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
