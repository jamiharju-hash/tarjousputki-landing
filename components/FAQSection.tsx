import { faqItems } from "@/lib/content";

export default function FAQSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <h2 className="text-2xl font-bold">Usein kysytyt kysymykset</h2>
      <div className="mt-4 space-y-3">
        {faqItems.map((item) => (
          <details key={item.question} className="rounded-lg border bg-white p-4">
            <summary className="cursor-pointer font-semibold">{item.question}</summary>
            <p className="mt-2 text-slate-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
