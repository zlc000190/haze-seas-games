export function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-20 text-sm text-slate-400">{label}</span>
      <div className="flex-1 h-2 bg-white/10 rounded overflow-hidden">
        <div className="h-full bg-haze-accent" style={{ width: `${value * 10}%` }} />
      </div>
      <span className="w-8 text-right font-mono text-sm">{value}/10</span>
    </div>
  );
}
