import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { fruits, type FruitRarity, type FruitType } from '@/lib/data/fruits';
import { locales } from '@/config/locale';

export const revalidate = 86400; // 24h
export const dynamicParams = true;

export function generateStaticParams() {
  // next-intl requires the full [locale, ...rest] matrix
  return fruits.flatMap(f => locales.map(locale => ({ locale, slug: f.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const f = fruits.find(x => x.slug === slug);
  if (!f) return {};
  const isZh = locale === 'zh';
  return {
    title: isZh
      ? `${f.nameZh} - ${f.rarity} ${f.type} 恶魔果实`
      : `${f.name} - ${f.rarity} ${f.type} Devil Fruit`,
    description: isZh
      ? `${f.nameZh}(${f.rarity} ${f.type}):${f.notesZh || f.notes || 'Haze Seas 恶魔果实'}`
      : `${f.name} (${f.rarity} ${f.type}) in Haze Seas. ${f.notes || ''}`
  };
}

const rarityColor: Record<FruitRarity, string> = {
  Common:    'bg-slate-500/20 text-slate-300 border-slate-500/30',
  Uncommon:  'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  Rare:      'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Legendary: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  Mythical:  'bg-haze-gold/20 text-haze-gold border-haze-gold/40',
  TBD:       'bg-orange-500/20 text-orange-300 border-orange-500/30'
};

export default async function FruitDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const f = fruits.find(x => x.slug === slug);
  if (!f) return notFound();
  const isZh = locale === 'zh';

  return (
    <div className="min-h-screen bg-haze-bg text-white">
      <article className="container-page py-12 max-w-3xl">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href={isZh ? '/zh/systems/devil-fruits' : '/systems/devil-fruits'} className="hover:text-haze-accent">
            ← {isZh ? '全部果实' : 'All Devil Fruits'}
          </Link>
        </nav>

        <header className="mb-8">
          <h1 className="font-display text-5xl md:text-6xl tracking-wide text-white mb-3">
            {isZh ? f.nameZh : f.name}
          </h1>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-bold border ${rarityColor[f.rarity]}`}>
              {f.rarity}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-bold bg-haze-accent/20 text-haze-accent">
              {f.type}
            </span>
            <span className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-bold ${
              f.status === 'Obtainable' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'
            }`}>
              {f.status}
            </span>
          </div>
          {f.notes && (
            <p className="text-base text-muted-foreground italic">
              {isZh ? (f.notesZh || f.notes) : f.notes}
            </p>
          )}
        </header>

        {f.awakeningChain && f.awakeningChain.length > 0 && (
          <section className="rounded-xl border border-haze-gold/30 bg-haze-card p-6 mb-6">
            <h2 className="font-display text-2xl tracking-wide text-haze-gold mb-3">
              {isZh ? '⚡ 觉醒链路' : '⚡ Awakening Chain'}
            </h2>
            <ol className="space-y-2">
              {f.awakeningChain.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-haze-gold text-haze-bg font-bold text-sm shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-white">{step.to}</p>
                    {step.trainer && (
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {isZh ? `训练师: ${step.trainer}` : `Trainer: ${step.trainer}`}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        <section className="rounded-xl border border-white/5 bg-haze-card p-6 mb-6">
          <h2 className="font-display text-2xl tracking-wide text-haze-gold mb-3">
            {isZh ? '刷新规则' : 'Spawn Rules'}
          </h2>
          <ul className="space-y-1.5 text-sm text-slate-300">
            <li>• {isZh ? '每 60 分钟刷新一次' : 'Spawns every 60 minutes'}</li>
            <li>• {isZh ? '20 分钟后消失' : 'Despawns after 20 minutes'}</li>
            <li>• {isZh ? 'VIP 服务器可手动刷新(最多 5 个)' : 'VIP server can spawn up to 5 fruits manually'}</li>
          </ul>
        </section>

        <nav className="mt-10 flex justify-between text-sm">
          <Link href={isZh ? '/zh/systems/devil-fruits' : '/systems/devil-fruits'} className="text-haze-accent hover:underline">
            ← {isZh ? '全部果实' : 'All Devil Fruits'}
          </Link>
          <Link href={isZh ? '/zh/tier-list' : '/tier-list'} className="text-haze-accent hover:underline">
            {isZh ? 'Tier 排行 →' : 'Tier List →'}
          </Link>
        </nav>
      </article>
    </div>
  );
}