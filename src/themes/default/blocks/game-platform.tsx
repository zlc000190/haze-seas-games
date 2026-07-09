'use client';

import { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import { useLocale } from 'next-intl';

import { games, categories } from '@/lib/games';

export function GamePlatform() {
  const locale = useLocale();
  const isZh = locale === 'zh';
  const [activeGameSlug, setActiveGameSlug] = useState(games[0].slug);
  const [iframeKey, setIframeKey] = useState(0);

  const featuredScrollRef = useRef<HTMLDivElement>(null);
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  const activeGame = useMemo(
    () => games.find((g) => g.slug === activeGameSlug) ?? games[0],
    [activeGameSlug]
  );

  const t = useCallback(
    (en: string, zh: string) => (isZh ? zh : en),
    [isZh]
  );

  const handleGameSwitch = useCallback((slug: string) => {
    setActiveGameSlug(slug);
    setIframeKey((k) => k + 1);
  }, []);

  // Keyboard shortcuts: 1-8 to switch games, F for fullscreen
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const num = parseInt(e.key);
      if (num >= 1 && num <= games.length) {
        handleGameSwitch(games[num - 1].slug);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleGameSwitch]);

  const iframeContainerRef = useRef<HTMLDivElement>(null);

  const handleFullscreen = useCallback(() => {
    const container = iframeContainerRef.current;
    if (!container) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      container.requestFullscreen();
    }
  }, []);

  const scrollBy = useCallback((ref: React.RefObject<HTMLDivElement | null>, delta: number) => {
    ref.current?.scrollBy({ left: delta, behavior: 'smooth' });
  }, []);

  const starString = (rating: number) => {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    return '★'.repeat(full) + (half ? '☆' : '') + '☆'.repeat(5 - full - (half ? 1 : 0));
  };

  return (
    <div className="min-h-screen bg-haze-bg text-white flex">
      {/* Left sidebar — game switcher */}
      <aside className="fixed left-0 top-0 bottom-0 w-16 md:w-20 bg-haze-card/80 border-r border-white/5 z-50 flex flex-col items-center py-4 gap-3 overflow-y-auto">
        <a href="/" className="mb-2 flex flex-col items-center gap-1">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-haze-gold to-haze-accent flex items-center justify-center text-lg font-bold text-haze-bg font-display text-sm">
            H
          </div>
        </a>
        {games.map((game) => (
          <button
            key={game.slug}
            onClick={() => handleGameSwitch(game.slug)}
            title={isZh ? game.titleZh : game.title}
            className={`sidebar-game w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${game.gradient} border ${game.borderColor} flex items-center justify-center text-lg transition-all duration-150 hover:scale-110 ${
              activeGameSlug === game.slug
                ? 'ring-2 ring-haze-gold shadow-[0_0_20px_rgba(245,185,77,0.4)]'
                : ''
            }`}
          >
            {game.emoji}
          </button>
        ))}
        <div className="mt-auto flex flex-col gap-3 pb-2">
          <button
            className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title={t('Settings', '设置')}
          >
            ⚙️
          </button>
          <button
            className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title={t('Fullscreen', '全屏')}
          >
            ⛶
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-16 md:ml-20">
        {/* Top nav */}
        <header className="sticky top-0 z-40 bg-haze-bg/90 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
            <nav className="hidden md:flex items-center gap-6">
              <span className="nav-link text-sm font-medium text-haze-gold relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-haze-gold">
                {t('Home', '首页')}
              </span>
              <a href="#new" className="nav-link text-sm font-medium text-slate-400 hover:text-white transition-colors">
                {t('New Games', '新游戏')}
              </a>
              <a href="#popular" className="nav-link text-sm font-medium text-slate-400 hover:text-white transition-colors">
                {t('Popular', '热门')}
              </a>
              <a href="#leaderboard" className="nav-link text-sm font-medium text-slate-400 hover:text-white transition-colors">
                {t('Leaderboard', '排行榜')}
              </a>
              <a href="#favorites" className="nav-link text-sm font-medium text-slate-400 hover:text-white transition-colors">
                {t('Favorites', '我的收藏')}
              </a>
            </nav>
            <button className="md:hidden p-2 text-slate-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder={t('Search games...', '搜索游戏...')}
                  className="w-48 lg:w-64 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-haze-accent/50 transition-colors"
                />
                <svg className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-haze-gold to-haze-accent flex items-center justify-center text-xs font-bold text-haze-bg cursor-pointer">
                U
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 space-y-8">
          {/* Game main area — play immediately */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <h2 className="font-display text-2xl tracking-wider text-white">
                  {t('Now Playing', '正在游戏')}
                </h2>
                {activeGame.tag === 'HOT' && (
                  <span className="tag-hot px-2 py-0.5 rounded-full bg-haze-gold/20 text-haze-gold text-xs font-medium border border-haze-gold/30 animate-pulse">
                    HOT
                  </span>
                )}
                {activeGame.tag === 'NEW' && (
                  <span className="px-2 py-0.5 rounded-full bg-haze-accent/20 text-haze-accent text-xs font-medium border border-haze-accent/30">
                    NEW
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-400 hover:text-white transition-colors border border-white/10">
                  🔊 {t('Sound', '声音')}
                </button>
                <button
                  onClick={handleFullscreen}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-400 hover:text-white transition-colors border border-white/10"
                >
                  ⛶ {t('Fullscreen', '全屏')}
                </button>
                <button
                  onClick={() => setIframeKey((k) => k + 1)}
                  className="px-3 py-1.5 rounded-lg bg-haze-gold/20 hover:bg-haze-gold/30 text-xs text-haze-gold transition-colors border border-haze-gold/30 font-medium"
                >
                  ↻ {t('Replay', '重玩')}
                </button>
              </div>
            </div>

            {/* Game iframe container */}
            <div
              ref={iframeContainerRef}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-haze-card"
              style={{ aspectRatio: '16/9', maxHeight: '65vh' }}
            >
              <iframe
                key={iframeKey}
                src={activeGame.url}
                allow="fullscreen"
                scrolling="no"
                className="w-full h-full border-none"
                title={isZh ? activeGame.titleZh : activeGame.title}
              />

              {/* Game info overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-haze-bg/90 to-transparent p-4 pointer-events-none">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl text-white">
                      {isZh ? activeGame.titleZh : activeGame.title}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {isZh ? activeGame.descriptionZh : activeGame.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pointer-events-auto">
                    <span className="flex items-center gap-1 px-2 py-1 rounded-lg bg-haze-gold/20 text-haze-gold text-xs font-medium">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {activeGame.rating}
                    </span>
                    <span className="px-2 py-1 rounded-lg bg-white/10 text-slate-400 text-xs">
                      {activeGame.plays} {t('plays', '游玩')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-slate-500">
              {activeGame.instructions.map((inst, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 border border-white/10"
                >
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 font-mono text-xs">
                    {inst.keys}
                  </kbd>
                  {inst.action}
                </span>
              ))}
            </div>
          </section>

          {/* Featured games — horizontal scroll */}
          <section id="new">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-xl tracking-wider text-white">
                {t('Featured Games', '推荐游戏')}
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollBy(featuredScrollRef, -300)}
                  className="scroll-btn w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-haze-accent/20 hover:border-haze-accent/50 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollBy(featuredScrollRef, 300)}
                  className="scroll-btn w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-haze-accent/20 hover:border-haze-accent/50 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              ref={featuredScrollRef}
              className="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
              style={{ scrollbarWidth: 'none' }}
            >
              {games.map((game) => (
                <div
                  key={game.slug}
                  onClick={() => handleGameSwitch(game.slug)}
                  className="featured-card flex-shrink-0 w-40 md:w-48 cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className={`relative rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br ${game.gradient} border ${game.borderColor}`}>
                    <div className="absolute inset-0 flex items-center justify-center text-4xl">
                      {game.emoji}
                    </div>
                    <div className="play-overlay absolute inset-0 bg-haze-bg/60 flex items-center justify-center opacity-0 transition-opacity duration-200 hover:opacity-100">
                      <div className="w-12 h-12 rounded-full bg-haze-gold flex items-center justify-center text-haze-bg text-xl">
                        ▶
                      </div>
                    </div>
                    {game.tag === 'HOT' && (
                      <div className="absolute top-2 right-2 tag-hot px-1.5 py-0.5 rounded bg-haze-gold/20 text-haze-gold text-xs font-medium">
                        HOT
                      </div>
                    )}
                    {game.tag === 'NEW' && (
                      <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-haze-accent/20 text-haze-accent text-xs font-medium">
                        NEW
                      </div>
                    )}
                  </div>
                  <div className="mt-2">
                    <h4 className="text-sm font-medium text-white truncate">
                      {isZh ? game.titleZh : game.title}
                    </h4>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-haze-gold text-xs">{starString(game.rating)}</span>
                      <span className="text-xs text-slate-500">{game.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Categories */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-xl tracking-wider text-white">
                {t('Browse Categories', '分类浏览')}
              </h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollBy(categoryScrollRef, -200)}
                  className="scroll-btn w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-haze-accent/20 hover:border-haze-accent/50 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollBy(categoryScrollRef, 200)}
                  className="scroll-btn w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-haze-accent/20 hover:border-haze-accent/50 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              ref={categoryScrollRef}
              className="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
              style={{ scrollbarWidth: 'none' }}
            >
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className={`category-pill flex-shrink-0 flex flex-col items-center gap-2 p-4 rounded-2xl bg-haze-card border border-white/5 w-28 md:w-32 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-[0_0_16px_rgba(58,169,255,0.2)]`}
                >
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${cat.gradient} border ${cat.borderColor} flex items-center justify-center text-2xl`}>
                    {cat.emoji}
                  </div>
                  <span className="text-xs text-slate-300 font-medium">
                    {isZh ? cat.nameZh : cat.name}
                  </span>
                  <span className="text-xs text-slate-500">{cat.count} {t('games', '款')}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Latest + Leaderboard */}
          <section id="leaderboard" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Latest games */}
            <div className="bg-haze-card border border-white/5 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg tracking-wider text-white">
                  {t('Newest Games', '最新上架')}
                </h3>
                <a href="#" className="text-xs text-haze-accent hover:underline">
                  {t('View all →', '查看全部 →')}
                </a>
              </div>
              <div className="space-y-3">
                {[games[2], games[1], games[3], games[4]].map((game, i) => (
                  <div
                    key={game.slug}
                    onClick={() => handleGameSwitch(game.slug)}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${game.gradient} border ${game.borderColor} flex items-center justify-center text-xl flex-shrink-0`}>
                      {game.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-white truncate">
                        {isZh ? game.titleZh : game.title}
                      </h4>
                      <p className="text-xs text-slate-500">{game.subtitle}</p>
                    </div>
                    {game.tag === 'NEW' ? (
                      <span className="px-2 py-0.5 rounded bg-haze-accent/20 text-haze-accent text-xs font-medium">NEW</span>
                    ) : (
                      <span className={`px-2 py-0.5 rounded text-xs ${i === 0 ? 'bg-haze-green/20 text-haze-green' : 'bg-white/10 text-slate-400'}`}>
                        {i === 0 ? t('2d ago', '2天前') : i === 1 ? t('5d ago', '5天前') : t('1w ago', '1周前')}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-haze-card border border-white/5 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg tracking-wider text-white">
                  {t('Popular Ranking', '热门排行')}
                </h3>
                <a href="#" className="text-xs text-haze-accent hover:underline">
                  {t('View all →', '查看全部 →')}
                </a>
              </div>
              <div className="space-y-3">
                {[...games]
                  .sort((a, b) => b.rating - a.rating)
                  .slice(0, 4)
                  .map((game, i) => (
                    <div
                      key={game.slug}
                      onClick={() => handleGameSwitch(game.slug)}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <span className={`w-6 h-6 rounded text-xs font-bold flex items-center justify-center flex-shrink-0 ${
                        i === 0 ? 'bg-haze-gold/20 text-haze-gold' : 'bg-white/10 text-slate-300'
                      }`}>
                        {i + 1}
                      </span>
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${game.gradient} border ${game.borderColor} flex items-center justify-center text-lg flex-shrink-0`}>
                        {game.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-white truncate">
                          {isZh ? game.titleZh : game.title}
                        </h4>
                        <p className="text-xs text-slate-500">{game.plays} {t('plays', '次游玩')}</p>
                      </div>
                      <span className="text-haze-gold text-xs">{starString(game.rating)}</span>
                    </div>
                  ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-white/5 pt-8 pb-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-haze-gold to-haze-accent flex items-center justify-center text-sm font-bold text-haze-bg font-display">
                  H
                </div>
                <span className="font-display text-lg tracking-wider text-white">HAZE SEAS GAMES</span>
              </div>
              <div className="flex items-center gap-6 text-xs text-slate-500">
                <a href="#" className="hover:text-haze-accent transition-colors">
                  {t('About Us', '关于我们')}
                </a>
                <a href="#" className="hover:text-haze-accent transition-colors">
                  {t('Privacy Policy', '隐私政策')}
                </a>
                <a href="#" className="hover:text-haze-accent transition-colors">
                  {t('Contact', '联系方式')}
                </a>
                <a href="#" className="hover:text-haze-accent transition-colors">
                  {t('For Developers', '开发者入驻')}
                </a>
              </div>
            </div>
            <div className="mt-4 text-center text-xs text-slate-600">
              © 2026 Haze Seas Games. {t('All rights reserved. Fan-made site, not affiliated with Haze Studios or Roblox.', 'All rights reserved. 本站为 Haze Seas 游戏爱好者非官方网站。')}
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
