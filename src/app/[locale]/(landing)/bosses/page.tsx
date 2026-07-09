import { setRequestLocale } from 'next-intl/server';
import { bosses } from '@/lib/data/bosses';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isZh = locale === 'zh';
  return {
    title: isZh
      ? '17 个 Super Boss - 掉落、位置、刷新'
      : 'All 17 Super Bosses - Drops, Locations, Spawn',
    description: isZh
      ? 'Haze Seas 全 17 个 Super Boss 数据:海图、位置、刷新方式、掉落。Sea 3 Boss 暂未实装。'
      : 'All 17 Haze Seas Super Bosses: sea, location, spawn method, drops. Sea 3 bosses still unreleased.'
  };
}

const statusColor = {
  Released:   'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  Unreleased: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40'
};

export default async function BossesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';

  const groups = (['Sea 1','Sea 2','Sea 3','—'] as const).map(sea => ({
    sea,
    items: bosses.filter(b => b.sea === sea)
  })).filter(g => g.items.length > 0);

  return (
    <div className="min-h-screen bg-haze-bg text-white">
      <section className="relative overflow-hidden py-16 md:py-20 border-b border-white/5">
        <div className="container-page relative z-10">
          <h1 className="font-display text-5xl md:text-7xl tracking-wide text-white mb-4">
            {isZh ? 'Super Boss 全图鉴' : 'Super Bosses'}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
            {isZh
              ? 'Haze Seas 全 17 个 Super Boss — 海图、位置、刷新方式、掉落。Sea 3 Boss 暂未实装。'
              : 'All 17 Haze Seas Super Bosses across the seas — locations, spawn methods, and drops. Sea 3 bosses still unreleased.'}
          </p>
        </div>
      </section>

      {groups.map(g => (
        <section key={g.sea} className="py-8 border-b border-white/5">
          <div className="container-page">
            <div className="flex items-center gap-3 mb-5">
              <h2 className="font-display text-3xl tracking-wide text-haze-gold">{g.sea}</h2>
              <span className="text-sm text-muted-foreground">{g.items.length} {isZh ? '个' : 'bosses'}</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {g.items.map(b => (
                <article key={b.slug} className="rounded-xl border border-white/5 bg-haze-card p-5">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-bold text-lg text-white">{b.name}</h3>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${statusColor[b.status]}`}>
                      {b.status}
                    </span>
                  </div>
                  <dl className="space-y-1.5 text-sm">
                    <div>
                      <dt className="text-xs text-muted-foreground uppercase tracking-wider">{isZh ? '位置' : 'Location'}</dt>
                      <dd className="text-slate-200">{isZh ? b.locationZh : b.location}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-muted-foreground uppercase tracking-wider">{isZh ? '刷新方式' : 'Spawn'}</dt>
                      <dd className="text-slate-200">{isZh ? b.spawnZh : b.spawn}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-muted-foreground uppercase tracking-wider">{isZh ? '掉落' : 'Drops'}</dt>
                      <dd className="text-slate-200">{isZh ? b.dropsZh : b.drops}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}