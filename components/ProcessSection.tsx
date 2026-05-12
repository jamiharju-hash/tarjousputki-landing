import { deliverySteps } from "@/lib/content";
import { Card, Section } from "./ui";

export default function ProcessSection() {
  return (
    <Section title="Toimitus askel askeleelta">
      <Card>
        <ol className="space-y-3 text-slate-700">{deliverySteps.map((s) => <li key={s}>{s}</li>)}</ol>
      </Card>
    </Section>
  );
}
