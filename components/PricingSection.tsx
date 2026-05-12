import { pricingPackages } from "@/lib/content";
import { Card, Section } from "./ui";

export default function PricingSection() {
  return (
    <Section id="hinnoittelu" title="Hinnoittelupaketit">
      <div className="grid gap-4 lg:grid-cols-3">
        {pricingPackages.map((p) => (
          <Card key={p.name} className={p.popular ? "ring-2 ring-cyan-400" : ""}>
            {p.popular ? <p className="mb-2 text-sm font-semibold text-cyan-700">Suosituin</p> : null}
            <h3 className="text-xl font-bold text-slate-900">{p.name}</h3>
            <p className="mt-2 text-2xl font-extrabold text-slate-900">{p.price}</p>
            <p className="text-slate-600">{p.setup}</p>
            <ul className="mt-4 space-y-2 text-slate-700">{p.features.map((f) => <li key={f}>• {f}</li>)}</ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
