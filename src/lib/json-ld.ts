/**
 * JSON-LD schema builders + drop-in component.
 * Use: <JsonLd data={websiteJsonLd(...)} /> or pass raw object.
 */
const SITE = 'https://hazeseas.games';

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Haze Seas Games',
    alternateName: 'Haze Seas Wiki',
    url: SITE,
    description: 'Fan-made Haze Seas guide: active codes, Devil Fruit wiki, beginner guide, tier lists, super boss data.',
    inLanguage: ['en', 'zh'],
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE}/?q={search_term_string}` },
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Haze Seas Games',
      url: SITE
    }
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Haze Seas Games',
    url: SITE,
    logo: `${SITE}/og.png`,
    sameAs: [
      'https://www.roblox.com/games/6918802270',
      'https://discord.gg/haze-seas',
      'https://trello.com/b/haze-seas-official-trello',
      'https://x.com/RealHazeStudios'
    ]
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url
    }))
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer }
    }))
  };
}

export function howToSchema(opts: {
  name: string;
  description: string;
  totalTime?: string;
  steps: { name: string; text: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
    step: opts.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text
    }))
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': opts.url },
    image: opts.image ?? `${SITE}/og.png`,
    datePublished: opts.datePublished ?? '2026-07-01',
    dateModified: opts.dateModified ?? new Date().toISOString().slice(0, 10),
    author: { '@type': 'Organization', name: 'Haze Seas Games', url: SITE },
    publisher: {
      '@type': 'Organization',
      name: 'Haze Seas Games',
      url: SITE,
      logo: { '@type': 'ImageObject', url: `${SITE}/og.png` }
    },
    inLanguage: 'en'
  };
}

export function itemListSchema(opts: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    numberOfItems: opts.items.length,
    itemListElement: opts.items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: it.url
    }))
  };
}

export function videoGameSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Haze Seas',
    alternateName: 'HAZE PIECE',
    description: 'A Roblox pirate action RPG by Haze Studios. 35 Devil Fruits, Sea 1/2/3, 17 Super Bosses.',
    genre: ['Action RPG', 'Anime', 'Adventure'],
    gamePlatform: 'Roblox',
    playMode: 'MultiPlayer',
    applicationCategory: 'Game',
    operatingSystem: 'PC, Xbox, Mobile, PlayStation',
    datePublished: '2026-06-30',
    publisher: { '@type': 'Organization', name: 'Haze Studios' }
  };
}