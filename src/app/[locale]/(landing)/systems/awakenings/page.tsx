import { setRequestLocale } from 'next-intl/server';
import { awakeningChains, awakeningTrainers } from '@/lib/data/awakenings';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isZh = locale === 'zh';
  return {
    title: isZh
      ? '觉醒系统 - Gum Gear 5、Dragon 完全形态、Okuchi'
      : 'Awakenings - Gum Gear 5, Dragon Full Form, Okuchi',
    description: isZh
      ? 'Haze Seas 觉醒链路:Gum、Dragon、Okuchi,以及对应的训练师。'
      : 'Haze Seas awakening chains: Gum, Dragon, Okuchi, and the trainers that gate them.'
  };
}

export default async function AwakeningsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';

  return (
    <div className="min-h-screen bg-haze-bg text-white">
      <section className="relative overflow-hidden py-16 md:py-20 border-b border-white/5">
        <div className="container-page relative z-10">
          <h1 className="font-display text-5xl md:text-7xl tracking-wide text-white mb-4">
            {isZh ? '觉醒系统' : 'Awakenings'}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
            {isZh
              ? '觉醒链路工作原理、Gum 和 Dragon 链路、Okuchi 链路,以及开启它们的训练师。'
              : 'How awakenings work, the Gum and Dragon chains, Okuchi chain, and the trainers that gate them.'}
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container-page max-w-4xl space-y-6">
          {awakeningChains.map(chain => (
            <article key={chain.slug} className="rounded-xl border border-white/5 bg-haze-card p-6">
              <h2 className="font-display text-2xl tracking-wide text-haze-gold mb-4">
                {isZh ? chain.fruitNameZh : chain.fruitName}
              </h2>
              <ol className="space-y-3">
                {chain.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-haze-gold text-haze-bg font-bold text-sm shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-bold text-white">{isZh ? step.stageZh : step.stage}</p>
                      {step.trainer && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {isZh ? '训练师' : 'Trainer'}: <span className="text-haze-accent">{step.trainer}</span>
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
              {chain.notes && (
                <p className="mt-4 text-xs text-muted-foreground italic">{isZh ? chain.notesZh : chain.notes}</p>
              )}
            </article>
          ))}

          <article className="rounded-xl border border-haze-accent/30 bg-haze-card p-6">
            <h2 className="font-display text-2xl tracking-wide text-haze-accent mb-3">
              {isZh ? '训练师' : 'Trainers'}
            </h2>
            <ul className="space-y-2 text-sm">
              {awakeningTrainers.map(t => (
                <li key={t.name} className="flex items-center gap-2">
                  <strong className="text-white">{t.name}</strong>
                  <span className="text-muted-foreground">— {t.unlocks}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}