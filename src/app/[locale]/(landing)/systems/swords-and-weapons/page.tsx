import { setRequestLocale } from 'next-intl/server';
import { weapons } from '@/lib/data/weapons';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isZh = locale === 'zh';
  return {
    title: isZh
      ? '武器与剑 - Haze Seas 全部武器'
      : 'Swords & Weapons - All Haze Seas Weapons',
    description: isZh
      ? 'Haze Seas 全部剑、武器、锤子、装甲、饰品列表 + 来源。'
      : 'Complete Haze Seas sword, weapon, hammer, armor, and accessory list with sources.'
  };
}

const rarityColor: Record<string, string> = {
  Common:    'bg-slate-500/20 text-slate-300 border-slate-500/30',
  Uncommon:  'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  Rare:      'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Legendary: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  Mythical:  'bg-haze-gold/20 text-haze-gold border-haze-gold/40',
  Event:     'bg-pink-500/20 text-pink-300 border-pink-500/30'
};

export default async function WeaponsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';

  const order = ['Mythical','Legendary','Rare','Uncommon','Common','Event'] as const;
  const grouped = order.map(r => ({ rarity: r, items: weapons.filter(w => w.rarity === r) })).filter(g => g.items.length > 0);

  return (
    <div className="min-h-screen bg-haze-bg text-white">
      <section className="relative overflow-hidden py-16 md:py-20 border-b border-white/5">
        <div className="container-page relative z-10">
          <h1 className="font-display text-5xl md:text-7xl tracking-wide text-white mb-4">
            {isZh ? '武器与剑' : 'Swords & Weapons'}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
            {isZh
              ? 'Haze Seas 全部剑、武器、锤子、装甲、饰品列表 + 来源。来源基于官方 Trello + hazeseas.online 社区。'
              : 'Complete Haze Seas sword, weapon, hammer, armor, and accessory list with sources. Sourced from official Trello + hazeseas.online community.'}
          </p>
        </div>
      </section>

      {grouped.map(g => (
        <section key={g.rarity} className="py-6 border-b border-white/5">
          <div className="container-page">
            <div className="flex items-center gap-3 mb-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-bold border ${rarityColor[g.rarity]}`}>
                {g.rarity}
              </span>
              <span className="text-sm text-muted-foreground">{g.items.length} {isZh ? '件' : 'items'}</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {g.items.map(w => (
                <article key={w.slug} className="rounded-xl border border-white/5 bg-haze-card p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-white">{isZh ? w.nameZh : w.name}</h3>
                    <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-slate-300">
                      {w.type}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {isZh ? '来源' : 'Source'}: <span className="text-slate-200">{isZh ? w.sourceZh : w.source}</span>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}