import packageJson from '../../package.json';

export type ConfigMap = Record<string, string>;

export const envConfigs: ConfigMap = {
  app_url: process.env.NEXT_PUBLIC_APP_URL ?? 'https://hazeseas.games',
  app_name: process.env.NEXT_PUBLIC_APP_NAME ?? 'Haze Seas Games',
  app_description: process.env.NEXT_PUBLIC_APP_DESCRIPTION ?? 'The fan-made Haze Seas reference: working codes updated within 24h, Devil Fruit tier lists, beginner guides, and official Haze Studios links.',
  app_logo: process.env.NEXT_PUBLIC_APP_LOGO ?? '/favicon.svg',
  app_favicon: process.env.NEXT_PUBLIC_APP_FAVICON ?? '/favicon.svg',
  app_preview_image: process.env.NEXT_PUBLIC_APP_PREVIEW_IMAGE ?? '/api/og',
  theme: process.env.NEXT_PUBLIC_THEME ?? 'default',
  appearance: process.env.NEXT_PUBLIC_APPEARANCE ?? 'dark',
  locale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? 'en',
  version: packageJson.version,
  locale_detect_enabled: process.env.NEXT_PUBLIC_LOCALE_DETECT_ENABLED ?? 'false',
};
