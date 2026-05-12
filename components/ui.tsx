import { ReactNode } from "react";

export function Section({ id, title, children, subtitle }: { id?: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-100 sm:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-2 max-w-3xl text-slate-300">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl bg-white p-6 shadow-lg shadow-slate-950/10 ${className}`}>{children}</div>;
}
