import { setRequestLocale } from 'next-intl/server';
import { updates } from '@/lib/data/updates';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isZh = locale === 'zh';
  return {
    title: isZh
      ? '更新日志 - Haze Seas 版本时间线'
      : 'Updates - Haze Seas Patch & Content Timeline',
    description: isZh
      ? 'Haze Seas 更新历史:Sea 3 Update 1(Land of the Gods + Okuchi)、Tremor 重做、Haze Seas 重制版上线。'
      : 'Haze Seas update history: Sea 3 Update 1 (Land of the Gods + Okuchi), Tremor rework, remaster release.'
  };
}

const kindColor: Record<string, string> = {
  major: 'bg-haze-gold/20 text-haze-gold border-haze-gold/40',
  minor: 'bg-haze-accent/20 text-haze-accent border-haze-accent/40',
  patch: 'bg-slate-500/20 text-slate-300 border-slate-500/30'
};

export default async function UpdatesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isZh = locale === 'zh';

  return (
    <div className="min-h-screen bg-haze-bg text-white">
      <section className="relative overflow-hidden py-16 md:py-20 border-b border-white/5">
        <div className="container-page relative z-10">
          <h1 className="font-display text-5xl md:text-7xl tracking-wide text-white mb-4">
            {isZh ? '更新日志' : 'Updates'}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
            {isZh
              ? '基于官方 Roblox 活动卡 + Trello 的版本和内容时间线。日期为美东时间(ET)。'
              : 'Version and content timeline sourced from the official Roblox page and Trello. All dates are US Eastern Time (ET).'}
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container-page max-w-3xl">
          <ol className="relative border-l-2 border-haze-gold/30 pl-6 space-y-8">
            {updates.map((u, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-haze-gold border-4 border-haze-bg" />
                <article className="rounded-xl border border-white/5 bg-haze-card p-5">
                  <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                    <div>
                      <p className="text-xs text-muted-foreground font-mono">{u.date} ET</p>
                      <h2 className="font-display text-2xl tracking-wide text-white mt-1">{isZh ? u.titleZh : u.title}</h2>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold border uppercase ${kindColor[u.kind]}`}>
                      {u.kind}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{isZh ? u.bodyZh : u.body}</p>
                  <ul className="space-y-1 text-sm">
                    {(isZh ? u.highlightsZh : u.highlights).map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-300">
                        <span className="text-haze-accent shrink-0">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}