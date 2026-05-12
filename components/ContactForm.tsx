"use client";

import { FormEvent, useState } from "react";
import type { Lead } from "@/types/lead";

const initialState: Lead = { name: "", email: "", company: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<Lead>(initialState);
  const [status, setStatus] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    setStatus(data.message ?? "Lähetys epäonnistui.");
    if (response.ok) setForm(initialState);
  }

  return (
    <section id="yhteys" className="mx-auto max-w-4xl px-6 py-12">
      <h2 className="text-2xl font-bold">Pyydä yhteydenotto</h2>
      <form onSubmit={onSubmit} className="mt-4 grid gap-3">
        <input className="rounded border p-3" placeholder="Nimi" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input className="rounded border p-3" placeholder="Sähköposti" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input className="rounded border p-3" placeholder="Yritys" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required />
        <textarea className="rounded border p-3" placeholder="Miten voimme auttaa?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} required />
        <button className="rounded bg-sky-500 px-4 py-3 font-semibold text-white" type="submit">Lähetä</button>
      </form>
      {status ? <p className="mt-3 text-sm text-slate-700">{status}</p> : null}
    </section>
  );
}
