import '@/config/style/global.css';

import { getLocale, setRequestLocale } from 'next-intl/server';

import { envConfigs } from '@/config';
import { locales } from '@/config/locale';

const SITE_URL = envConfigs.app_url;
const SITE_NAME = envConfigs.app_name;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  setRequestLocale(locale);

  const appUrl = SITE_URL || '';

  const ldJson = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      description:
        'Fan-made Haze Seas wiki with active codes, Devil Fruit tier lists, and beginner guides.',
      inLanguage: 'en-US',
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/api/og`,
    },
  ];

  return (
    <html
      lang={locale}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href={envConfigs.app_favicon} />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {locales?.map((loc) => (
          <link
            key={loc}
            rel="alternate"
            hrefLang={loc}
            href={`${appUrl}${loc === 'en' ? '' : `/${loc}`}`}
          />
        ))}
      </head>
      <body suppressHydrationWarning className="overflow-x-hidden">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
      </body>
    </html>
  );
}
