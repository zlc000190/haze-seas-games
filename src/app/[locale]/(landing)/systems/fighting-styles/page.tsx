import { setRequestLocale } from 'next-intl/server';
import { fightingStyles } from '@/lib/data/fighting-styles';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isZh = locale === 'zh';
  return {
    title: isZh
      ? '战斗风格 - 5 个 V1 + V2(未实装)'
      : 'Fighting Styles - 5 V1 + V2 (Unreleased)',
    description: isZh
      ? 'Haze Seas 5 个战斗风格:Black Leg、Electro、Fishman、Cyborg、Dragon Claw。V2 全部未实装。'
      : 'All 5 Haze Seas fighting styles: Black Leg, Electro, Fishman, Cyborg, Dragon Claw. V2 unreleased (Sea 3).'
  };
}

export default async function FightingStylesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';

  return (
    <div className="min-h-screen bg-haze-bg text-white">
      <section className="relative overflow-hidden py-16 md:py-20 border-b border-white/5">
        <div className="container-page relative z-10">
          <h1 className="font-display text-5xl md:text-7xl tracking-wide text-white mb-4">
            {isZh ? '战斗风格' : 'Fighting Styles'}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
            {isZh
              ? '5 个战斗风格,每个有 V1 基础形态 + V2 升级。V2 形态全部 Unreleased(Sea 3)—— 这里列出是为了完整。'
              : 'Five fighting styles, each with a V1 base form and a V2 upgrade. V2 forms are all Unreleased (Sea 3) — listed for completeness.'}
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container-page space-y-6">
          {fightingStyles.map(style => (
            <article key={style.slug} className="rounded-xl border border-white/5 bg-haze-card p-6">
              <header className="flex items-start justify-between gap-3 mb-4 flex-wrap">
                <div>
                  <h2 className="font-display text-3xl tracking-wide text-white">{isZh ? style.nameZh : style.name}</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    V1 {isZh ? '训练师' : 'Trainer'}: <strong className="text-white">{style.v1Trainer}</strong> ·{' '}
                    {isZh ? '价格' : 'Cost'}: <strong className="text-haze-gold">{style.v1Cost}</strong>
                  </p>
                </div>
                <span className="rounded-full bg-yellow-500/15 border border-yellow-500/30 px-3 py-1 text-[10px] font-bold text-yellow-300 uppercase">
                  V2 Unreleased
                </span>
              </header>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg bg-white/5 p-4">
                  <h3 className="font-bold text-emerald-300 mb-2">V1 — Obtained</h3>
                  <ul className="space-y-1 text-sm">
                    {style.v1Moves.map(m => (
                      <li key={m.key}>
                        <kbd className="inline-block w-6 text-center rounded bg-haze-accent/20 text-haze-accent font-mono text-xs px-1.5 py-0.5 mr-2">
                          {m.key}
                        </kbd>
                        {m.name}
                        <span className="text-muted-foreground text-xs ml-2">(M {m.mastery})</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg bg-white/5 p-4 opacity-70">
                  <h3 className="font-bold text-yellow-300 mb-2">V2 — Unreleased</h3>
                  <ul className="space-y-1 text-sm">
                    {style.v2Moves.map(m => (
                      <li key={m.key}>
                        <kbd className="inline-block w-6 text-center rounded bg-haze-accent/20 text-haze-accent font-mono text-xs px-1.5 py-0.5 mr-2">
                          {m.key}
                        </kbd>
                        {m.name}
                        <span className="text-muted-foreground text-xs ml-2">(M {m.mastery})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                <strong className="text-yellow-200">{isZh ? 'V2 需求' : 'V2 Requirement'}:</strong> {style.v2Requirement}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}