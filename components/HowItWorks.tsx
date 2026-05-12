import { howItWorksSteps } from "@/lib/content";
import { Card, Section } from "./ui";

export default function HowItWorks() {
  return (
    <Section id="miten" title="Miten prosessi toimii">
      <div className="grid gap-4 md:grid-cols-2">
        {howItWorksSteps.map((s) => (
          <Card key={s.title}>
            <h3 className="font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-slate-700">{s.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
