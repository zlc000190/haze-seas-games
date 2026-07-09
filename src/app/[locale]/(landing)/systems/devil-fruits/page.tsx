import { setRequestLocale } from 'next-intl/server';
import { fruits, fruitsSpawnRules, fruitsSnapshot } from '@/lib/data/fruits';
import Link from 'next/link';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isZh = locale === 'zh';
  return {
    title: isZh
      ? '恶魔果实图鉴 - Haze Seas 全 35 个果实'
      : 'Devil Fruits Wiki - All 35 Haze Seas Fruits',
    description: isZh
      ? 'Haze Seas 全 35 个恶魔果实数据:稀有度、类型、刷新规则、觉醒链路。来源:官方 Trello。'
      : 'All 35 Haze Seas Devil Fruits: rarity, type, spawn rules, awakening chains. Sourced from official Trello.'
  };
}

const rarityColor: Record<string, string> = {
  Common:    'bg-slate-500/20 text-slate-300 border-slate-500/30',
  Uncommon:  'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  Rare:      'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Legendary: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  Mythical:  'bg-haze-gold/20 text-haze-gold border-haze-gold/40',
  TBD:       'bg-orange-500/20 text-orange-300 border-orange-500/30'
};

const typeColor: Record<string, string> = {
  Natural:   'bg-slate-600/30 text-slate-300',
  Paramecia: 'bg-haze-accent/20 text-haze-accent',
  Logia:     'bg-red-500/20 text-red-300'
};

export default async function DevilFruitsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';

  // Group by rarity
  const byRarity = fruitsSpawnRules.rarityOrder
    .map(r => ({ rarity: r, items: fruits.filter(f => f.rarity === r) }))
    .filter(g => g.items.length > 0);
  const tbd = fruits.filter(f => f.rarity === 'TBD');
  if (tbd.length) byRarity.push({ rarity: 'TBD' as any, items: tbd });

  return (
    <div className="min-h-screen bg-haze-bg text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-20 border-b border-white/5">
        <div className="container-page relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-haze-gold/30 bg-haze-gold/10 px-4 py-1.5 text-xs font-medium text-haze-gold mb-6">
            <span className="h-2 w-2 rounded-full bg-haze-gold animate-pulse" />
            {isZh ? `数据快照 ${fruitsSnapshot.date}` : `Snapshot ${fruitsSnapshot.date}`}
          </div>
          <h1 className="font-display text-5xl md:text-7xl tracking-wide text-white mb-4">
            {isZh ? '恶魔果实图鉴' : 'Devil Fruits Wiki'}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
            {isZh
              ? `Haze Seas 全 ${fruitsSnapshot.total} 个恶魔果实 — 稀有度、类型、刷新规则、觉醒链路。来源:官方 Trello + hazeseas.com 交叉验证。`
              : `All ${fruitsSnapshot.total} Haze Seas Devil Fruits — rarity, type, spawn rules, and awakening chains. Sourced from official Trello + hazeseas.com cross-check.`}
          </p>
        </div>
      </section>

      {/* Spawn Rules */}
      <section className="py-10 border-b border-white/5">
        <div className="container-page">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-white/5 bg-haze-card p-5">
              <div className="text-3xl mb-2">⏱️</div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{isZh ? '刷新频率' : 'Spawn frequency'}</p>
              <p className="font-display text-2xl text-haze-accent mt-1">{fruitsSpawnRules.spawnEveryMin} min</p>
            </div>
            <div className="rounded-xl border border-white/5 bg-haze-card p-5">
              <div className="text-3xl mb-2">⏳</div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{isZh ? '消失时间' : 'Despawn'}</p>
              <p className="font-display text-2xl text-haze-accent mt-1">{fruitsSpawnRules.despawnAfterMin} min</p>
            </div>
            <div className="rounded-xl border border-white/5 bg-haze-card p-5">
              <div className="text-3xl mb-2">⭐</div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{isZh ? 'VIP 服务器上限' : 'VIP server max'}</p>
              <p className="font-display text-2xl text-haze-accent mt-1">{fruitsSpawnRules.vipMaxConcurrent} {isZh ? '个' : 'fruits'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grouped by rarity */}
      {byRarity.map(group => (
        <section key={group.rarity} className="py-8 border-b border-white/5">
          <div className="container-page">
            <div className="flex items-center gap-3 mb-5">
              <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-bold border ${rarityColor[group.rarity]}`}>
                {group.rarity}
              </span>
              <span className="text-sm text-muted-foreground">{group.items.length} {isZh ? '个果实' : 'fruits'}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {group.items.map(f => (
                <Link
                  key={f.slug}
                  href={`/systems/devil-fruits/${f.slug}`}
                  className="group rounded-xl border border-white/5 bg-haze-card p-4 transition hover:border-haze-gold/30 hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-white group-hover:text-haze-gold transition">
                      {isZh ? f.nameZh : f.name}
                    </h3>
                    {f.status === 'Unobtainable' && (
                      <span className="rounded-full bg-red-500/20 border border-red-500/40 px-2 py-0.5 text-[10px] font-bold text-red-300 uppercase">
                        N/A
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${typeColor[f.type]}`}>
                      {f.type}
                    </span>
                    {f.awakeningChain && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-haze-gold/15 text-haze-gold border border-haze-gold/30">
                        ⚡ {isZh ? '可觉醒' : 'Awakens'}
                      </span>
                    )}
                  </div>
                  {f.notes && (
                    <p className="text-[11px] text-muted-foreground line-clamp-2 italic">
                      {isZh ? (f.notesZh || f.notes) : f.notes}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-10 text-center">
        <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
          {isZh
            ? `数据源:官方 Haze Studios Trello + hazeseas.com 交叉验证 · 快照 ${fruitsSnapshot.date}`
            : `Source: Official Haze Studios Trello + hazeseas.com cross-check · Snapshot ${fruitsSnapshot.date}`}
        </p>
        <Link
          href={isZh ? '/zh' : '/'}
          className="inline-flex items-center gap-2 mt-6 rounded-lg border border-white/10 bg-haze-card px-5 py-2.5 text-sm text-white hover:border-haze-gold/30"
        >
          ← {isZh ? '返回首页' : 'Back to Home'}
        </Link>
      </section>
    </div>
  );
}