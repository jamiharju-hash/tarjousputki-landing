import { solutionPoints } from "@/lib/content";
import { Card, Section } from "./ui";

export default function SolutionSection() {
  return (
    <Section id="ratkaisu" title="Ratkaisu: systemaattinen B2B-tarjouspyyntöputki">
      <div className="grid gap-4 md:grid-cols-3">
        {solutionPoints.map((p) => <Card key={p}><p className="text-slate-700">{p}</p></Card>)}
      </div>
    </Section>
  );
}
