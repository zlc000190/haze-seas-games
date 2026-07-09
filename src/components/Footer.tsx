export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-16 py-8 text-sm text-slate-400">
      <div className="container-page flex flex-col md:flex-row justify-between gap-4">
        <div>
          <p className="font-display tracking-wider text-slate-200">HAZE SEAS GAMES</p>
          <p className="mt-1">Fan-made wiki. Not affiliated with Haze Studios or Roblox.</p>
        </div>
        <div className="text-xs">
          <p>Haze Seas is developed by Haze Studios.</p>
          <p>All game content &copy; their respective owners.</p>
        </div>
      </div>
    </footer>
  );
}
