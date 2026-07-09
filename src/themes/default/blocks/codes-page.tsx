'use client';

import { useState, useCallback } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { codes } from '@/lib/data/codes';

const steps = [
  { emoji: '🎮', stepKey: 'step1' },
  { emoji: '🎁', stepKey: 'step2' },
  { emoji: '⌨️', stepKey: 'step3' },
];

const faqs = [
  { qKey: 'q1', aKey: 'a1' },
  { qKey: 'q2', aKey: 'a2' },
  { qKey: 'q3', aKey: 'a3' },
  { qKey: 'q4', aKey: 'a4' },
];

export function CodesPage() {
  const t = useTranslations('codes');
  const locale = useLocale();
  const isZh = locale === 'zh';
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = useCallback(async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      // fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
      } catch {
        // ignore
      }
      document.body.removeChild(textArea);
    }
  }, []);

  return (
    <div className="min-h-screen bg-haze-bg text-white">
      {/* ───────────── Hero ───────────── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* decorative gradient background */}
        <div className="codes-hero-glow" aria-hidden="true" />
        <div className="codes-hero-grid" aria-hidden="true" />

        <div className="container-page relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-haze-gold/30 bg-haze-gold/10 px-4 py-1.5 text-xs font-medium text-haze-gold mb-6">
            <span className="h-2 w-2 rounded-full bg-haze-gold animate-pulse" />
            {t('hero.updated')}
          </div>

          <h1 className="font-display text-5xl md:text-7xl tracking-wide text-white mb-4">
            {t('hero.title')}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* ───────────── Active Codes ───────────── */}
      <section className="py-12 md:py-16">
        <div className="container-page">
          <div className="mb-8">
            <h2 className="font-display text-3xl md:text-4xl tracking-wide text-haze-gold mb-2">
              {t('activeCodes.title')}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t('activeCodes.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {codes.map((entry) => {
              const isCopied = copiedCode === entry.code;
              return (
                <div
                  key={entry.code}
                  className="codes-card group relative rounded-xl border border-white/5 bg-haze-card p-5 transition-all duration-200 hover:scale-[1.02] hover:border-haze-gold/30"
                >
                  {/* NEW badge */}
                  {entry.isNew && (
                    <span className="codes-new-badge absolute -top-2 -right-2 rounded-full bg-haze-gold px-2.5 py-0.5 text-[10px] font-bold text-haze-bg">
                      {t('activeCodes.new')}
                    </span>
                  )}

                  {/* code + status badge row */}
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <div className="font-mono text-lg font-bold text-haze-accent break-all">
                      {entry.code}
                    </div>
                    {entry.status === 'pending' && (
                      <span className="rounded-full bg-yellow-500/15 border border-yellow-500/30 px-2 py-0.5 text-[10px] font-bold text-yellow-300 uppercase tracking-wide">
                        Pending
                      </span>
                    )}
                    {entry.status === 'unverified' && (
                      <span className="rounded-full bg-orange-500/15 border border-orange-500/30 px-2 py-0.5 text-[10px] font-bold text-orange-300 uppercase tracking-wide">
                        Unverified
                      </span>
                    )}
                    {entry.source === 'community' && entry.status !== 'unverified' && (
                      <span className="rounded-full bg-purple-500/15 border border-purple-500/30 px-2 py-0.5 text-[10px] font-bold text-purple-300 uppercase tracking-wide">
                        Community
                      </span>
                    )}
                  </div>

                  {/* reward */}
                  <p className={`text-sm mb-4 ${entry.status === 'pending' || entry.status === 'unverified' ? 'text-yellow-200/80 italic' : 'text-muted-foreground'}`}>
                    🎁 {isZh ? entry.rewardZh : entry.reward}
                  </p>
                  {entry.notes && (
                    <p className="text-[11px] text-muted-foreground/70 mb-3 italic">
                      {entry.notes}
                    </p>
                  )}

                  {/* copy button */}
                  <button
                    onClick={() => handleCopy(entry.code)}
                    className={`w-full rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      isCopied
                        ? 'bg-haze-green text-white'
                        : 'bg-haze-gold/10 text-haze-gold hover:bg-haze-gold/20 border border-haze-gold/20'
                    }`}
                  >
                    {isCopied ? t('activeCodes.copied') : t('activeCodes.copy')}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────── How to Redeem ───────────── */}
      <section className="py-12 md:py-16 border-t border-white/5">
        <div className="container-page">
          <h2 className="font-display text-3xl md:text-4xl tracking-wide text-haze-gold mb-10 text-center">
            {t('howToRedeem.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, idx) => (
              <div
                key={s.stepKey}
                className="relative rounded-xl border border-white/5 bg-haze-card p-6 text-center"
              >
                {/* step number */}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-haze-accent/10 text-haze-accent font-display text-xl">
                  {idx + 1}
                </div>

                {/* emoji */}
                <div className="text-4xl mb-4">{s.emoji}</div>

                {/* description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`howToRedeem.${s.stepKey}`)}
                </p>

                {/* arrow connector */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 text-haze-gold/40 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section className="py-12 md:py-16 border-t border-white/5">
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl tracking-wide text-haze-gold mb-8 text-center">
            {t('faq.title')}
          </h2>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.qKey}
                className="codes-faq-item group rounded-xl border border-white/5 bg-haze-card overflow-hidden"
              >
                <summary className="cursor-pointer select-none px-5 py-4 text-sm font-medium text-white flex items-center justify-between list-none">
                  <span>{t(`faq.${faq.qKey}`)}</span>
                  <span className="text-haze-gold ml-2 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {t(`faq.${faq.aKey}`)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Footer / Disclaimer ───────────── */}
      <footer className="py-12 border-t border-white/5">
        <div className="container-page text-center">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            {t('footer.disclaimer')}
          </p>

          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-haze-card px-5 py-2.5 text-sm text-white transition-all duration-200 hover:border-haze-gold/30 hover:bg-haze-gold/5"
          >
            <span>←</span>
            {isZh ? '返回首页' : 'Back to Home'}
          </a>
        </div>
      </footer>
    </div>
  );
}
