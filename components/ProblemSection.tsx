import { consequencePoints, problemPoints } from "@/lib/content";
import { Card, Section } from "./ui";

export default function ProblemSection() {
  return (
    <>
      <Section id="ongelma" title="Ongelma: asiakashankinta on satunnaista">
        <div className="grid gap-4 md:grid-cols-3">
          {problemPoints.map((p) => <Card key={p}><p className="text-slate-700">{p}</p></Card>)}
        </div>
      </Section>
      <Section title="Satunnaisen myynnin seuraukset">
        <div className="grid gap-4 md:grid-cols-3">
          {consequencePoints.map((p) => <Card key={p}><p className="text-slate-700">{p}</p></Card>)}
        </div>
      </Section>
    </>
  );
}
