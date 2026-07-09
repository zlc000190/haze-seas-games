import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

import { CodesPage } from '@/themes/default/blocks/codes-page';
import { faqSchema, breadcrumbSchema, articleSchema } from '@/lib/json-ld';

const SITE = 'https://hazeseas.games';

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'codes.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  };
}

export default async function CodesRoutePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const url = locale === 'zh' ? `${SITE}/zh/codes` : `${SITE}/codes`;
  const ld = [
    articleSchema({
      title: 'Haze Seas Codes - Active Roblox Redeem Codes',
      description: 'All working Haze Seas codes for free Race Spins, Cash, Gems, and EXP boosts. Updated daily.',
      url
    }),
    faqSchema([
      { question: 'How do I redeem codes in Haze Seas?', answer: 'Open Menu in-game, click the gift box icon, enter the code, press Redeem.' },
      { question: 'How often are new codes released?',  answer: 'New codes drop with major updates, milestones, and developer streams.' },
      { question: 'Why is my code not working?',         answer: 'Codes are case-sensitive. Re-check the active list and snapshot date.' }
    ]),
    breadcrumbSchema([
      { name: 'Home', url: `${SITE}/${locale === 'zh' ? 'zh' : ''}` },
      { name: 'Codes', url }
    ])
  ];

  return (
    <>
      <CodesPage />
      {ld.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
