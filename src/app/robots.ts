import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/static/', '/_next/image'],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}