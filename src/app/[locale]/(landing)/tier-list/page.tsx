import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { codes } from '@/lib/data/codes';
import { fruits, fruitsSnapshot } from '@/lib/data/fruits';
import { beginnerSteps } from '@/lib/data/beginner';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isZh = locale === 'zh';
  return {
    title: isZh
      ? 'Tier 排行 - 果实、武器、种族、战斗风格'
      : 'Tier List - Fruits, Weapons, Races, Fighting Styles',
    description: isZh
      ? 'Haze Seas 社区验证的 Tier 排行:35 个果实 + 武器 + 种族 + 战斗风格。'
      : 'Community-verified Haze Seas tier rankings across fruits, weapons, races, and fighting styles.'
  };
}

const NAV_CARDS = [
  { href: '/tier-list/fruits',    emoji: '🍇', name: 'Devil Fruit Tier List',   nameZh: '恶魔果实排行', desc: 'All 35 fruits ranked for PvE and PvP', descZh: '35 个果实 PvE / PvP 排行' },
  { href: '/tier-list/weapons',   emoji: '⚔️', name: 'Weapon Tier List',        nameZh: '武器排行',     desc: 'Swords and weapons ranked by overall value', descZh: '剑与武器综合价值排行' },
  { href: '/tier-list/races',     emoji: '🏃', name: 'Race Tier List',          nameZh: '种族排行',     desc: 'Races ranked including V2 upgrades', descZh: '含 V2 升级的种族排行' },
  { href: '/tier-list/styles',    emoji: '🥋', name: 'Fighting Style Tier List',nameZh: '战斗风格排行', desc: 'Fighting styles ranked for PvE and PvP', descZh: '战斗风格 PvE / PvP 排行' }
];

export default async function TierListPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';

  // Quick MVP: show fruits grouped by Mythical / Legendary / Rare / Uncommon / Common
  const order = ['Mythical','Legendary','TBD','Rare','Uncommon','Common'] as const;
  const grouped = order.map(r => ({ rarity: r, items: fruits.filter(f => f.rarity === r) })).filter(g => g.items.length > 0);

  return (
    <div className="min-h-screen bg-haze-bg text-white">
      <section className="relative overflow-hidden py-16 md:py-20 border-b border-white/5">
        <div className="container-page relative z-10">
          <h1 className="font-display text-5xl md:text-7xl tracking-wide text-white mb-4">
            {isZh ? 'Tier 排行' : 'Tier Lists'}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
            {isZh
              ? '社区验证的 Haze Seas 排行(快照 2026-07-01 ET) — 随版本变动,以系统页为准。'
              : 'Community-verified Haze Seas rankings (snapshot 2026-07-01 ET). Subject to change with reworks — always cross-check with the relevant system page.'}
          </p>
        </div>
      </section>

      {/* Navigation cards for the 4 sub-tier-lists */}
      <section className="py-10 border-b border-white/5">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {NAV_CARDS.map(card => (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-xl border border-white/5 bg-haze-card p-5 transition hover:border-haze-gold/30"
              >
                <div className="text-3xl mb-2">{card.emoji}</div>
                <h3 className="font-bold text-white group-hover:text-haze-gold transition">{isZh ? card.nameZh : card.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{isZh ? card.descZh : card.desc}</p>
                <p className="text-[10px] text-yellow-300 mt-2 italic">Coming soon — data scaffolding only</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MVP: full fruit tier ranking (real data) */}
      <section className="py-10">
        <div className="container-page">
          <h2 className="font-display text-3xl tracking-wide text-haze-gold mb-6">
            {isZh ? `🍇 恶魔果实排行(快照 ${fruitsSnapshot.date})` : `🍇 Devil Fruit Tier Ranking (snapshot ${fruitsSnapshot.date})`}
          </h2>
          <p className="text-xs text-muted-foreground mb-4 italic">
            {isZh
              ? '基于官方 Trello 数据 + hazeseas.com 验证。Mythical > Legendary > Rare > Uncommon > Common。TBD 档位官方尚未平衡。'
              : 'Based on official Trello data + hazeseas.com verification. Mythical > Legendary > Rare > Uncommon > Common. TBD = not yet balanced.'}
          </p>
          {grouped.map(g => (
            <div key={g.rarity} className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-bold ${
                  g.rarity === 'Mythical'  ? 'bg-haze-gold/20 text-haze-gold border border-haze-gold/40' :
                  g.rarity === 'Legendary' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                  g.rarity === 'Rare'      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                  g.rarity === 'Uncommon'  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                  g.rarity === 'Common'    ? 'bg-slate-500/20 text-slate-300 border border-slate-500/30' :
                                             'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                }`}>
                  {g.rarity}
                </span>
                <span className="text-xs text-muted-foreground">{g.items.length} {isZh ? '个' : 'fruits'}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map(f => (
                  <Link
                    key={f.slug}
                    href={`/systems/devil-fruits/${f.slug}`}
                    className={`rounded-md px-3 py-1.5 text-sm border transition ${
                      f.status === 'Unobtainable'
                        ? 'bg-red-500/10 text-red-300 border-red-500/30 line-through'
                        : 'bg-white/5 text-slate-200 border-white/10 hover:border-haze-gold/30'
                    }`}
                  >
                    {isZh ? f.nameZh : f.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}