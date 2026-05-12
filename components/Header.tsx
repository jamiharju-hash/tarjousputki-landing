import { navItems } from "@/lib/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="text-lg font-bold text-white">Tarjousputki</a>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => <a key={item.href} href={item.href} className="hover:text-white">{item.label}</a>)}
        </nav>
        <a href="#yhteys" className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950">Varaa kartoitus</a>
      </div>
    </header>
  );
}
