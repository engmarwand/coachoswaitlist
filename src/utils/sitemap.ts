/**
 * CoachOS Sitemap Content Generation Utility
 * Generates XML sitemap content to assist search engine crawlers in mapping
 * content hierarchy, key landing page sections, and metadata.
 */

export interface SitemapSection {
  id: string;
  name: string;
  url: string;
  priority: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  description: string;
}

export const LANDING_PAGE_SECTIONS: SitemapSection[] = [
  {
    id: 'hero',
    name: 'CoachOS Home & Overview',
    url: '/',
    priority: '1.0',
    changefreq: 'weekly',
    description: 'The All-In-One Operating System for Independent Fitness and Business Coaches.'
  },
  {
    id: 'solution',
    name: 'Private Coaching Operating System',
    url: '/#solution',
    priority: '0.9',
    changefreq: 'weekly',
    description: 'Bespoke client management, sales pipelines, habit telemetry, and branded client portals.'
  },
  {
    id: 'integrations',
    name: 'Custom Tool & API Integrations',
    url: '/#integrations',
    priority: '0.8',
    changefreq: 'monthly',
    description: 'Native zero-friction connections with Stripe, Zoom, Calendly, TrueCoach, and MyFitnessPal.'
  },
  {
    id: 'workflow',
    name: 'How CoachOS Works',
    url: '/#workflow',
    priority: '0.8',
    changefreq: 'monthly',
    description: 'Automated 3-step lead capture, intelligent client triage, and centralized program delivery.'
  },
  {
    id: 'comparison',
    name: 'CoachOS vs. Standard Coaching Apps',
    url: '/#comparison',
    priority: '0.85',
    changefreq: 'monthly',
    description: 'Comprehensive feature and ROI comparison between generic templates and custom-built coaching operating systems.'
  },
  {
    id: 'use-cases',
    name: 'Built for Fitness, Executive & Sports Coaches',
    url: '/#use-cases',
    priority: '0.8',
    changefreq: 'monthly',
    description: 'Specialized dashboard architectures configured for 1:1, cohort, and high-ticket retainer coaching models.'
  },
  {
    id: 'waitlist',
    name: 'Founding Cohort Application & Pricing',
    url: '/#waitlist',
    priority: '0.95',
    changefreq: 'daily',
    description: 'Apply for the exclusive founding cohort with lifetime 40% discount and custom dashboard build.'
  },
  {
    id: 'faq',
    name: 'Frequently Asked Questions',
    url: '/#faq',
    priority: '0.7',
    changefreq: 'monthly',
    description: 'Answers to common questions regarding data migration, zero platform fees, and whitelabeling.'
  }
];

/**
 * Generates an XML sitemap string conforming to the Sitemaps.org standard.
 * @param baseUrl The canonical domain base URL
 * @param lastmod ISO Date string (defaults to today)
 */
export function generateSitemapXml(
  baseUrl: string = 'https://ais-pre-jyxdvd5ief42hds7v7tyrp-122467157455.europe-west3.run.app',
  lastmod: string = new Date().toISOString().split('T')[0]
): string {
  const cleanBaseUrl = baseUrl.replace(/\/+$/, '');

  const xmlEntries = LANDING_PAGE_SECTIONS.map((section) => {
    const loc = section.url === '/' ? cleanBaseUrl : `${cleanBaseUrl}${section.url}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${section.changefreq}</changefreq>
    <priority>${section.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${xmlEntries}
</urlset>`;
}
