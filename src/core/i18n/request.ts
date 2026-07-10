import { getRequestConfig } from 'next-intl/server';

import { defaultLocale, locales, localeMessagesPaths } from '../../config/locale';

type Locale = (typeof locales)[number];

function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

// Inline minimal routing shim (was in core/i18n/config.ts; collapsing to avoid circular import)
export const routing = {
  locales,
  defaultLocale
} as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale: Locale = isLocale(requested) ? requested : defaultLocale;

  const messages: Record<string, unknown> = {};
  for (const ns of localeMessagesPaths) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const mod = require(`../../config/locale/messages/${locale}/${ns}.json`);
      const part = mod.default ?? mod;
      // next-intl expects: messages['<namespace>']['<key>']
      // our json files are the namespace content directly
      messages[ns] = part;
    } catch {
      // namespace optional per locale
    }
  }

  return { locale, messages };
});