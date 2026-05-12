import { disclaimer } from "@/lib/content";
import { Card, Section } from "./ui";

export default function ProofSection() {
  return (
    <Section title="Läpinäkyvä toimintamalli">
      <Card className="bg-amber-50">
        <p className="font-semibold text-slate-900">Tärkeä rajaus</p>
        <p className="mt-2 text-slate-700">{disclaimer}</p>
      </Card>
    </Section>
  );
}
