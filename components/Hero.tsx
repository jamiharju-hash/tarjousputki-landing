import { heroBullets } from "@/lib/content";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-300">B2B kasvukumppani talotekniikalle</p>
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Enemmän tarjouspyyntöjä, vähemmän säätöä.</h1>
        <p className="mt-5 text-lg text-slate-300">Rakennamme LVI-yrityksellesi systemaattisen B2B-tarjouspyyntöputken, joka tuo keskusteluja isännöitsijöiltä, rakennusliikkeiltä, huoltoyhtiöiltä ja kiinteistömanageroilta.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#hinnoittelu" className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950">Katso paketit</a>
          <a href="#yhteys" className="rounded-lg border border-slate-600 px-5 py-3 font-semibold text-white">Pyydä yhteydenotto</a>
        </div>
      </div>
      <div className="rounded-2xl bg-slate-900 p-6 ring-1 ring-slate-800">
        <h3 className="text-lg font-semibold text-white">Mitä tämä käytännössä tarkoittaa?</h3>
        <ul className="mt-4 space-y-3 text-slate-300">
          {heroBullets.map((point) => <li key={point}>✓ {point}</li>)}
        </ul>
      </div>
    </section>
  );
}
