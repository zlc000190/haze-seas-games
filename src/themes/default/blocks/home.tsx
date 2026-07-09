'use client';

import { useState, useCallback, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { GamePlatform } from './game-platform';
import { games } from '@/lib/games';
import { codes } from '@/lib/data/codes';

const NAV_LINKS = [
  { href: '/codes',                        emoji: '🎁', name: 'Codes',          nameZh: '兑换码' },
  { href: '/systems/devil-fruits',         emoji: '🍇', name: 'Devil Fruits',   nameZh: '恶魔果实' },
  { href: '/tier-list',                    emoji: '📊', name: 'Tier List',      nameZh: 'Tier 排行' },
  { href: '/guides/beginner',              emoji: '⛵', name: 'Beginner Guide', nameZh: '新手攻略' },
  { href: '/bosses',                       emoji: '💀', name: 'Super Bosses',   nameZh: 'Super Boss' },
  { href: '/islands',                      emoji: '🏝️', name: 'Islands',        nameZh: '岛屿' },
  { href: '/links',                        emoji: '🔗', name: 'Official Links', nameZh: '官方链接' }
];

const GAMEMONETIZE_TOP3 = [
  {
    slug: 'sea-kings',
    title: 'Sea Kings',
    emoji: '🏴‍☠️',
    description: 'Pirate naval combat — sink enemy ships, upgrade your fleet.',
    descriptionZh: '海盗海战 — 击沉敌舰,升级舰队。',
    url: 'https://html5.gamemonetize.co/azd2160bf0hum6z3y5miuyxym0yjnqxw/',
    badge: '★ 海战 5/5'
  },
  {
    slug: 'fruit-merger',
    title: 'Fruit Merger',
    emoji: '🍒',
    description: 'Merge fruits to evolve into Devil-Fruit-tier evolutions.',
    descriptionZh: '合并果实,进化出恶魔果实级别形态。',
    url: 'https://html5.gamemonetize.co/y1z2j6chycgz55jmcxkxhznshlf17dl6/',
    badge: '★ 果实 4/5'
  },
  {
    slug: 'stickman-fruit-island-2',
    title: 'Stickman Bros In Fruit Island 2',
    emoji: '🏝️',
    description: 'Stickman brothers collect fruits on Fruit Island.',
    descriptionZh: '火柴人兄弟在 Fruit Island 收集果实。',
    url: 'https://html5.gamemonetize.co/7xq1ndi04moqr45f9g9zwjqosib0rkhy/',
    badge: '★ 冒险 4/5'
  }
];

export function Home() {
  const locale = useLocale();
  const isZh = locale === 'zh';
  const [activeEmbed, setActiveEmbed] = useState<string | null>(null);

  // Codes strip data
  const topCodes = codes
    .filter(c => c.status === 'active')
    .slice(0, 4);

  const handleCopy = useCallback((code: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(code).catch(() => {});
    }
  }, []);

  // ESC closes embed
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveEmbed(null); };
    if (activeEmbed) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeEmbed]);

  return (
    <div className="min-h-screen bg-haze-bg text-white">
      {/* ───────────── Hero ───────────── */}
      <section className="relative overflow-hidden py-16 md:py-24 border-b border-white/5">
        <div className="container-page relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-haze-gold/30 bg-haze-gold/10 px-4 py-1.5 text-xs font-medium text-haze-gold mb-6">
            <span className="h-2 w-2 rounded-full bg-haze-gold animate-pulse" />
            {isZh ? '⚓ 2026 REWORK · 实时更新' : '⚓ 2026 REWORK · UPDATED DAILY'}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wide bg-gradient-to-r from-haze-gold via-yellow-200 to-haze-accent bg-clip-text text-transparent mb-4">
            HAZE SEAS GAMES
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {isZh
              ? 'Haze Seas 全攻略 + 8 款免费在线小游戏。兑换码、恶魔果实图鉴、新手攻略、Super Boss — 全部基于官方 Trello 数据,实时更新。'
              : 'The complete Haze Seas guide plus 8 free browser games. Codes, Devil Fruit wiki, beginner walkthrough, and Super Boss data — all sourced from the official Trello.'}
          </p>
        </div>
      </section>

      {/* ───────────── Top Codes Strip ───────────── */}
      <section className="py-6 border-b border-white/5 bg-haze-card/40">
        <div className="container-page">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <h2 className="font-display text-xl tracking-wide text-haze-gold">
              {isZh ? '🔥 当前兑换码' : '🔥 Active Codes'}
            </h2>
            <a href={isZh ? '/zh/codes' : '/codes'} className="text-xs text-haze-accent hover:underline">
              {isZh ? '查看全部 →' : 'View all →'}
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {topCodes.map(c => (
              <button
                key={c.code}
                onClick={() => handleCopy(c.code)}
                className="group flex items-center justify-between gap-2 rounded-lg border border-white/5 bg-haze-bg px-3 py-2 text-left transition hover:border-haze-gold/30"
              >
                <div className="min-w-0">
                  <code className="font-mono font-bold text-haze-gold text-sm block truncate">{c.code}</code>
                  <p className="text-[10px] text-muted-foreground truncate">{isZh ? c.rewardZh : c.reward}</p>
                </div>
                <span className="text-xs text-haze-accent opacity-0 group-hover:opacity-100 transition shrink-0">
                  Copy
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Quick Nav ───────────── */}
      <section className="py-10">
        <div className="container-page">
          <h2 className="font-display text-2xl tracking-wide text-white mb-5">
            {isZh ? '📚 攻略导航' : '📚 Wiki Navigation'}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={isZh ? `/zh${link.href}` : link.href}
                className="group flex items-center gap-3 rounded-xl border border-white/5 bg-haze-card p-4 transition hover:border-haze-gold/30 hover:scale-[1.02]"
              >
                <div className="text-3xl shrink-0">{link.emoji}</div>
                <div className="min-w-0">
                  <p className="font-bold text-white group-hover:text-haze-gold transition truncate">
                    {isZh ? link.nameZh : link.name}
                  </p>
                </div>
                <span className="ml-auto text-haze-accent opacity-0 group-hover:opacity-100 transition shrink-0">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── GameMonetize Featured (Sea Kings et al.) ───────────── */}
      <section className="py-10 border-y border-white/5 bg-haze-card/40">
        <div className="container-page">
          <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
            <div>
              <h2 className="font-display text-3xl tracking-wide text-white">
                {isZh ? '🎮 推荐游戏(浏览器直玩)' : '🎮 Featured Games (Play in browser)'}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {isZh ? '无需下载,在本站直接玩 — 增加停留时间,SEO 加分。' : 'No download, play directly — boosts dwell time + SEO.'}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {GAMEMONETIZE_TOP3.map(g => (
              <button
                key={g.slug}
                onClick={() => setActiveEmbed(g.slug)}
                className="group text-left rounded-xl border border-white/5 bg-haze-card overflow-hidden transition hover:border-haze-gold/30"
              >
                <div className="aspect-video w-full bg-gradient-to-br from-haze-bg to-haze-card flex items-center justify-center relative">
                  <div className="text-7xl">{g.emoji}</div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition">
                    <span className="text-haze-gold font-bold tracking-wider">▶ PLAY NOW</span>
                  </div>
                  <span className="absolute top-2 right-2 rounded-full bg-haze-gold/90 text-haze-bg px-2 py-0.5 text-[10px] font-bold">
                    {g.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white group-hover:text-haze-gold transition">{g.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {isZh ? g.descriptionZh : g.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Embed Modal (GameMonetize) ───────────── */}
      {activeEmbed && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveEmbed(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden border border-haze-gold/30 bg-haze-bg"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveEmbed(null)}
              className="absolute top-3 right-3 z-10 rounded-full bg-black/70 hover:bg-black text-white w-9 h-9 flex items-center justify-center"
              aria-label="Close"
            >
              ✕
            </button>
            {GAMEMONETIZE_TOP3.map(g =>
              g.slug === activeEmbed ? (
                <iframe
                  key={g.slug}
                  src={g.url}
                  className="w-full h-full"
                  frameBorder={0}
                  allowFullScreen
                  scrolling="no"
                  title={g.title}
                />
              ) : null
            )}
          </div>
        </div>
      )}

      {/* ───────────── Game Platform (8 self-made games) — 'More games' ───────────── */}
      <section className="py-10">
        <div className="container-page">
          <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
            <h2 className="font-display text-2xl tracking-wide text-white">
              {isZh ? '🎯 更多自研小游戏' : '🎯 More Mini-Games'}
            </h2>
            <span className="text-xs text-muted-foreground">
              {isZh ? `${games.length} 款,键盘 1-8 切换,全屏支持` : `${games.length} games · keyboard 1-8 · fullscreen`}
            </span>
          </div>
          <GamePlatform />
        </div>
      </section>

      {/* ───────────── Footer disclaimer ───────────── */}
      <footer className="py-10 border-t border-white/5 text-center">
        <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
          {isZh
            ? '本站为粉丝攻略站,与 Haze Studios / Roblox Corporation 无关。数据快照 2026-07-06 ET。'
            : 'Fan-made guide — not affiliated with Haze Studios or Roblox Corporation. Data snapshot 2026-07-06 ET.'}
        </p>
      </footer>
    </div>
  );
}