import { faqItems } from "@/lib/content";
import { Section } from "./ui";

export default function FAQSection() {
  return (
    <Section id="ukk" title="Usein kysytyt kysymykset">
      <div className="space-y-3">
        {faqItems.map((item) => (
          <details key={item.question} className="rounded-xl bg-white p-5">
            <summary className="cursor-pointer font-semibold text-slate-900">{item.question}</summary>
            <p className="mt-2 text-slate-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
