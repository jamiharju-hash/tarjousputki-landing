import { pilotMetrics } from "@/lib/content";
import { Card, Section } from "./ui";

export default function PilotSection() {
  return (
    <Section title="Suositus: 90 päivän Kasvu-pilotti" subtitle="Pilotti on käytännöllinen tapa varmistaa, että segmentit, viestit ja työrytmi toimivat ennen laajempaa skaalausta.">
      <Card>
        <h3 className="font-semibold text-slate-900">Mitä pilotissa mitataan</h3>
        <ul className="mt-3 grid gap-2 text-slate-700 md:grid-cols-2">{pilotMetrics.map((m) => <li key={m}>• {m}</li>)}</ul>
      </Card>
    </Section>
  );
}
