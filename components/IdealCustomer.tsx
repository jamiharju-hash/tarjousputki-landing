import { fitBad, fitGood } from "@/lib/content";
import { Card, Section } from "./ui";

export default function IdealCustomer() {
  return (
    <Section title="Kenelle tämä sopii — ja kenelle ei">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h3 className="font-semibold text-slate-900">Sopii teille, jos…</h3>
          <ul className="mt-3 space-y-2 text-slate-700">{fitGood.map((x) => <li key={x}>• {x}</li>)}</ul>
        </Card>
        <Card>
          <h3 className="font-semibold text-slate-900">Ei paras ratkaisu, jos…</h3>
          <ul className="mt-3 space-y-2 text-slate-700">{fitBad.map((x) => <li key={x}>• {x}</li>)}</ul>
        </Card>
      </div>
    </Section>
  );
}
