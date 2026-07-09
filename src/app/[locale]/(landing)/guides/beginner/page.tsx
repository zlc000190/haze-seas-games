import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { beginnerSteps, beginnerNextSteps } from '@/lib/data/beginner';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isZh = locale === 'zh';
  return {
    title: isZh
      ? '新手攻略 - 7 步上手 Haze Seas'
      : 'Beginner Guide - 7 Steps to Start Haze Seas',
    description: isZh
      ? '7 步 Haze Seas 新手攻略:选设备、学控制、兑换码、首 build、追踪果实、加入社区。'
      : '7-step Haze Seas beginner walkthrough: pick device, learn controls, redeem codes, choose first build, track spawns, join community.'
  };
}

export default async function BeginnerGuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';

  return (
    <div className="min-h-screen bg-haze-bg text-white">
      <section className="relative overflow-hidden py-16 md:py-20 border-b border-white/5">
        <div className="container-page relative z-10">
          <h1 className="font-display text-5xl md:text-7xl tracking-wide text-white mb-4">
            {isZh ? '新手攻略' : 'Beginner Guide'}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
            {isZh
              ? '7 步上手 Haze Seas — 从首次登录到第一套正式 build。'
              : 'A 7-step walkthrough from first login to your first real build in Haze Seas.'}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-page max-w-3xl">
          <ol className="space-y-5">
            {beginnerSteps.map(step => (
              <li key={step.step} className="relative rounded-xl border border-white/5 bg-haze-card p-6">
                <div className="absolute -left-3 -top-3 w-10 h-10 rounded-full bg-haze-gold text-haze-bg font-display text-xl flex items-center justify-center shadow-lg">
                  {step.step}
                </div>
                <div className="ml-6">
                  <h2 className="font-display text-2xl tracking-wide text-white mb-2">
                    {isZh ? step.titleZh : step.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {isZh ? step.detailZh : step.detail}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-1.5 text-sm">
                    {(isZh ? step.checklistZh : step.checklist).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300">
                        <span className="text-haze-accent">☐</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <section className="mt-12 rounded-xl border border-haze-gold/30 bg-haze-card p-6">
            <h2 className="font-display text-2xl tracking-wide text-haze-gold mb-3">
              {isZh ? beginnerNextSteps.titleZh : beginnerNextSteps.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {beginnerNextSteps.links.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-haze-bg px-4 py-2 text-sm text-white hover:border-haze-gold/30"
                >
                  {isZh ? l.zh : l.name} →
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}