import { navItems } from "@/lib/content";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/78 backdrop-blur-xl">
      <div className="shell flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="Tarjousputki etusivu">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-green-300 text-sm font-black text-slate-950 shadow-[0_0_40px_rgba(60,255,158,.25)]">T</span>
          <span className="text-base font-black tracking-tight text-white">Tarjousputki</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Päänavigaatio">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#yhteys" className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-green-300">
          Varaa kartoitus
        </a>
      </div>
    </header>
  );
}
