import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const today = now.toISOString();

  const staticPaths = [
    { path: '', changefreq: 'daily', priority: 1.0 },
    { path: '/features', changefreq: 'weekly', priority: 0.9 },
    { path: '/download', changefreq: 'weekly', priority: 0.9 },
    { path: '/faq', changefreq: 'monthly', priority: 0.7 },
    { path: '/changelog', changefreq: 'weekly', priority: 0.6 },
    { path: '/about', changefreq: 'monthly', priority: 0.5 },
    { path: '/privacy', changefreq: 'yearly', priority: 0.3 },
  ];

  return staticPaths.map((item) => ({
    url: `${siteConfig.url}${item.path}`,
    lastModified: today,
    changeFrequency: item.changefreq as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: item.priority,
  }));
}