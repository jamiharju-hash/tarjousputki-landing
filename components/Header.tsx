export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <p className="text-lg font-bold">Tarjousputki</p>
        <a href="#yhteys" className="rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white">
          Varaa demo
        </a>
      </div>
    </header>
  );
}
