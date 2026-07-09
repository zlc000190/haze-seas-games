import { setRequestLocale } from 'next-intl/server';
import { seas, sea1Islands } from '@/lib/data/islands';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isZh = locale === 'zh';
  return {
    title: isZh
      ? '海图与岛屿 - Sea 1/2/3 全览'
      : 'Islands & Seas - Sea 1/2/3 Complete',
    description: isZh
      ? 'Haze Seas 海图与岛屿:Sea 1(18 岛)/ Sea 2(14 岛)/ Sea 3(部分实装)。'
      : 'Haze Seas islands and seas: Sea 1 (18 islands), Sea 2 (14 islands), Sea 3 partially live.'
  };
}

const statusColor = {
  Live:    'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  Partial: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
  Upcoming:'bg-slate-500/20 text-slate-300 border-slate-500/40'
};

export default async function IslandsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';

  return (
    <div className="min-h-screen bg-haze-bg text-white">
      <section className="relative overflow-hidden py-16 md:py-20 border-b border-white/5">
        <div className="container-page relative z-10">
          <h1 className="font-display text-5xl md:text-7xl tracking-wide text-white mb-4">
            {isZh ? '海图与岛屿' : 'Islands & Seas'}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
            {isZh
              ? 'Haze Seas 全海图与岛屿路线。Sea 1 和 Sea 2 已实装;Sea 3 部分实装(Land of the Gods)。'
              : 'Haze Seas islands and seas. Sea 1 and Sea 2 are fully live; Sea 3 is partially live (Land of the Gods).'}
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container-page space-y-6">
          {seas.map(sea => (
            <article key={sea.slug} className="rounded-xl border border-white/5 bg-haze-card p-6">
              <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
                <div>
                  <h2 className="font-display text-3xl tracking-wide text-white">{sea.name}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{sea.islandCount} {isZh ? '个岛屿' : 'islands'}</p>
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-bold border ${statusColor[sea.status]}`}>
                  {sea.status}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {sea.highlights.map(h => (
                  <span key={h} className="rounded-md bg-white/5 px-3 py-1.5 text-sm text-slate-200 border border-white/5">
                    {h}
                  </span>
                ))}
              </div>
            </article>
          ))}

          <article className="rounded-xl border border-white/5 bg-haze-card p-6">
            <h2 className="font-display text-2xl tracking-wide text-haze-gold mb-4">
              {isZh ? 'Sea 1 已知岛屿' : 'Sea 1 — Known Islands'}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {sea1Islands.map(name => (
                <div key={name} className="rounded-md bg-white/5 px-3 py-2 text-sm text-slate-200 border border-white/5">
                  {name}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}