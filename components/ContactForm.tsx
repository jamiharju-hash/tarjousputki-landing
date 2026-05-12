"use client";

import { FormEvent, useState } from "react";
import type { Lead } from "@/types/lead";
import { Section } from "./ui";

const initialState: Lead = { name: "", email: "", company: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<Lead>(initialState);
  const [status, setStatus] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    const data = await response.json();
    setStatus(data.message ?? "Lähetys epäonnistui.");
    if (response.ok) setForm(initialState);
  }

  return (
    <Section id="yhteys" title="Pyydä yhteydenotto">
      <form onSubmit={onSubmit} className="grid gap-3 rounded-2xl bg-white p-6">
        <input className="rounded-lg border border-slate-300 p-3" placeholder="Nimi" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input className="rounded-lg border border-slate-300 p-3" placeholder="Sähköposti" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input className="rounded-lg border border-slate-300 p-3" placeholder="Yritys" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required />
        <textarea className="rounded-lg border border-slate-300 p-3" placeholder="Mikä on tavoitteenne tarjouspyyntöjen suhteen seuraavan 90 päivän aikana?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} required />
        <button className="rounded-lg bg-cyan-400 px-4 py-3 font-semibold text-slate-950" type="submit">Lähetä</button>
        {status ? <p className="text-sm text-slate-700">{status}</p> : null}
      </form>
    </Section>
  );
}
