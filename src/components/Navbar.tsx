import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/codes", label: "Codes" },
  { href: "/tier-list", label: "Tier List" },
  { href: "/fruits", label: "Fruits" },
  { href: "/guides/beginner", label: "Beginner Guide" },
  { href: "/official", label: "Official Links" }
];

export function Navbar() {
  return (
    <header className="border-b border-white/5 bg-haze-bg/80 backdrop-blur sticky top-0 z-50">
      <div className="container-page flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-haze-gold to-haze-accent flex items-center justify-center font-display text-haze-bg text-xl">H</div>
          <span className="font-display tracking-wider text-xl">HAZE SEAS <span className="text-haze-accent">GAMES</span></span>
        </Link>
        <nav className="hidden md:flex gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
