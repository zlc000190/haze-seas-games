import type { Metadata } from "next";

export const SITE_URL = "https://hazeseas.games";
export const SITE_NAME = "Haze Seas Games";
export const OG_IMAGE = "/api/og";

export function canonical(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean === "/" ? "/" : clean}`;
}

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const url = canonical(opts.path);
  const image = opts.image ?? OG_IMAGE;
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: opts.path },
    openGraph: {
      type: opts.type ?? "website",
      url,
      siteName: SITE_NAME,
      title: opts.title,
      description: opts.description,
      images: [{ url: image, width: 1200, height: 630, alt: opts.title }]
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [image]
    }
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url
    }))
  });
}

export function faqJsonLd(
  items: { question: string; answer: string }[]
): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(q => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer }
    }))
  });
}

export function itemListJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string; position: number }[];
}): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    numberOfItems: opts.items.length,
    itemListElement: opts.items.map(it => ({
      "@type": "ListItem",
      position: it.position,
      name: it.name,
      url: it.url,
      item: it.url
    }))
  });
}
