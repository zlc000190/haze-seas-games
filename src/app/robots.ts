import type { MetadataRoute } from 'next';

const aiCrawlers = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-User',
  'PerplexityBot',
  'YouBot',
  'Applebot',
  'Google-Extended'
];

const templateAndPrivatePaths = [
  '/api/',
  '/_next/',
  '/admin',
  '/admin/',
  '/auth',
  '/auth/',
  '/dashboard',
  '/dashboard/',
  '/billing',
  '/billing/',
  '/sign-in',
  '/sign-up',
  '/login',
  '/forgot-password',
  '/privacy-policy',
  '/terms-of-service',
  '/shipany',
  '/shipany/'
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: templateAndPrivatePaths
      })),
      {
        userAgent: '*',
        allow: '/',
        disallow: templateAndPrivatePaths
      }
    ],
    sitemap: 'https://hazeseas.games/sitemap.xml',
    host: 'https://hazeseas.games'
  };
}
