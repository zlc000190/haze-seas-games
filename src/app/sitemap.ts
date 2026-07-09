import type { MetadataRoute } from 'next';
import { fruits } from '@/lib/data/fruits';
import { bosses } from '@/lib/data/bosses';
import { fightingStyles } from '@/lib/data/fighting-styles';
import { races } from '@/lib/data/races';
import { updates } from '@/lib/data/updates';

const SITE = 'https://hazeseas.games';

const staticPaths = [
  { path: '/codes',                         priority: 0.95, changeFreq: 'daily'   as const },
  { path: '/systems/devil-fruits',          priority: 0.9,  changeFreq: 'weekly'  as const },
  { path: '/tier-list',                     priority: 0.9,  changeFreq: 'weekly'  as const },
  { path: '/systems/fighting-styles',       priority: 0.85, changeFreq: 'weekly'  as const },
  { path: '/systems/swords-and-weapons',    priority: 0.85, changeFreq: 'weekly'  as const },
  { path: '/systems/races',                 priority: 0.85, changeFreq: 'weekly'  as const },
  { path: '/systems/awakenings',            priority: 0.8,  changeFreq: 'weekly'  as const },
  { path: '/guides/beginner',               priority: 0.85, changeFreq: 'monthly' as const },
  { path: '/bosses',                        priority: 0.85, changeFreq: 'weekly'  as const },
  { path: '/islands',                       priority: 0.8,  changeFreq: 'weekly'  as const },
  { path: '/updates',                       priority: 0.75, changeFreq: 'weekly'  as const },
  { path: '/links',                         priority: 0.5,  changeFreq: 'monthly' as const }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls: MetadataRoute.Sitemap = [];

  // Home (both locales)
  for (const locale of ['', '/zh']) {
    urls.push({
      url: `${SITE}${locale}/`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: {
        languages: { en: `${SITE}/`, zh: `${SITE}/zh/` }
      }
    });
  }

  // Static wiki pages × 2 locales
  for (const entry of staticPaths) {
    for (const locale of ['', '/zh']) {
      const fullPath = `${locale}${entry.path}`;
      urls.push({
        url: `${SITE}${fullPath}`,
        lastModified: now,
        changeFrequency: entry.changeFreq,
        priority: entry.priority,
        alternates: {
          languages: {
            en: `${SITE}${entry.path}`,
            zh: `${SITE}/zh${entry.path}`
          }
        }
      });
    }
  }

  // Dynamic: Devil Fruits × 2 locales
  for (const f of fruits) {
    for (const locale of ['', '/zh']) {
      urls.push({
        url: `${SITE}${locale}/systems/devil-fruits/${f.slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.7,
        alternates: {
          languages: {
            en: `${SITE}/systems/devil-fruits/${f.slug}`,
            zh: `${SITE}/zh/systems/devil-fruits/${f.slug}`
          }
        }
      });
    }
  }

  return urls;
}