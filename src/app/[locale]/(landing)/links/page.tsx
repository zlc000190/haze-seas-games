import { setRequestLocale } from 'next-intl/server';
import { officialLinks, developerInfo } from '@/lib/data/links';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isZh = locale === 'zh';
  return {
    title: isZh
      ? '官方链接 - Haze Seas Discord / Trello / Roblox'
      : 'Official Haze Seas Links - Discord, Trello, Roblox',
    description: isZh
      ? 'Haze Seas 官方频道:Roblox 游戏、Discord、Trello、YouTube、X、Roblox 群。谨防假链接。'
      : 'Verified official Haze Seas and Haze Studios channels: Roblox, Discord, Trello, YouTube, X, and the Roblox group. Watch for scams.'
  };
}

export default async function OfficialLinksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';

  return (
    <div className="min-h-screen bg-haze-bg text-white">
      <section className="relative overflow-hidden py-16 md:py-20 border-b border-white/5">
        <div className="container-page relative z-10">
          <h1 className="font-display text-5xl md:text-7xl tracking-wide text-white mb-4">
            {isZh ? '官方链接' : 'Official Haze Seas Links'}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
            {isZh
              ? 'Haze Seas 和 Haze Studios 官方频道链接。只信任这里列出的链接。'
              : 'Verified links to Haze Seas and Haze Studios channels. Only trust the channels listed here.'}
          </p>
          <div className="mt-6 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm text-yellow-200 max-w-3xl">
            ⚠️ <strong>{isZh ? '谨防假链接' : 'Watch for scams'}</strong> —{' '}
            {isZh
              ? '假 Discord 邀请、假兑换码站、"免费 Robux" 镜像很常见。Haze Studios 只通过官方 Discord 和 Trello 发布兑换码。'
              : 'Fake Discord invites, fake code sites, and "free Robux" mirrors are common around popular Roblox games. Haze Studios will only post codes through the official Discord and Trello.'}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 gap-4">
            {officialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/5 bg-haze-card p-5 transition hover:border-haze-gold/30 hover:bg-haze-card/80"
              >
                <div className="text-4xl shrink-0">{link.emoji}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-white group-hover:text-haze-gold transition">{link.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{isZh ? link.descriptionZh : link.description}</p>
                  <p className="text-xs text-haze-accent mt-1 truncate">{link.url}</p>
                </div>
                <span className="text-haze-gold text-xl shrink-0">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 border-t border-white/5">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-2xl tracking-wide text-haze-gold mb-3">
            {isZh ? '开发者' : 'Developer'}
          </h2>
          <p className="text-sm text-muted-foreground">
            Haze Seas {isZh ? '由' : 'developed by'}{' '}
            <strong className="text-white">{developerInfo.name}</strong> ({developerInfo.tag})。
            {isZh ? '重制版(原名' : 'The remake (formerly'}{' '}
            <strong className="text-white">{developerInfo.remakeName}</strong>
            {') '}{isZh ? `于 ${developerInfo.remakeReleasedDate} 上线。` : `released on ${developerInfo.remakeReleasedDate}.`}
          </p>
        </div>
      </section>
    </div>
  );
}