import { setRequestLocale } from 'next-intl/server';
import { races } from '@/lib/data/races';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isZh = locale === 'zh';
  return {
    title: isZh
      ? '种族图鉴 - Human 到 D.Clan + V2 升级'
      : 'Races Wiki - Human to D.Clan + V2 Upgrades',
    description: isZh
      ? 'Haze Seas 7 个种族:Common 到 Mythical,每个都有 V2 升级。'
      : 'All 7 Haze Seas races from Common to Mythical. Every race has a V2 upgrade.'
  };
}

const rarityColor: Record<string, string> = {
  Common:    'bg-slate-500/20 text-slate-300 border-slate-500/30',
  Uncommon:  'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  Rare:      'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Legendary: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  Mythical:  'bg-haze-gold/20 text-haze-gold border-haze-gold/40'
};

export default async function RacesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';

  return (
    <div className="min-h-screen bg-haze-bg text-white">
      <section className="relative overflow-hidden py-16 md:py-20 border-b border-white/5">
        <div className="container-page relative z-10">
          <h1 className="font-display text-5xl md:text-7xl tracking-wide text-white mb-4">
            {isZh ? '种族' : 'Races'}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
            {isZh
              ? '7 个种族,从 Common 到 Mythical。每个种族都有 V2 升级(由 Race Engineer NPC 处理)。Mythical D.Clan 绑定 Conqueror Clashing 机制。'
              : 'Seven races from Common to Mythical. Every race has a V2 upgrade obtained from the Race Engineer NPC. The D.Clan (Mythical) is tied to the Conqueror Clashing mechanic.'}
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {races.map(race => (
              <article key={race.slug} className="rounded-xl border border-white/5 bg-haze-card p-5">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h2 className="font-bold text-lg text-white">{isZh ? race.nameZh : race.name}</h2>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${rarityColor[race.rarity]}`}>
                    {race.rarity}
                  </span>
                </div>
                {race.hasV2 && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-haze-accent/20 text-haze-accent mb-2">
                    ⚡ V2 Available
                  </span>
                )}
                <p className="text-sm text-muted-foreground">{isZh ? race.notesZh : race.notes}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-haze-gold/30 bg-haze-card p-6">
            <h3 className="font-display text-xl tracking-wide text-haze-gold mb-2">
              💡 {isZh ? '用 Race Spins 重抽' : 'Re-roll with Race Spins'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {isZh
                ? '兑换码 GROUPONLY 给 Race Spins。叠加 spins,在活动期间重抽,有机会抽到 Mythical D.Clan。'
                : 'Codes like GROUPONLY grant Race Spins. Stack spins and reroll during events for a shot at Mythical D.Clan.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}