"use client";

import { FormEvent, useState } from "react";
import type { Lead } from "@/types/lead";
import { Section } from "./ui";

const initialState: Lead = {
  name: "",
  company: "",
  email: "",
  location: "",
  revenueRange: "",
  employeeCount: "",
  biggestChallenge: "",
  preferredContactMethod: "email",
  honeypot: "",
  message: "",
};

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
    <Section id="yhteys" title="Pyydä yhteydenotto">
      <form onSubmit={onSubmit} className="grid gap-3 rounded-2xl bg-white p-6">
        <input className="rounded-lg border border-slate-300 p-3" placeholder="Nimi" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input className="rounded-lg border border-slate-300 p-3" placeholder="Yritys" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required />
        <input className="rounded-lg border border-slate-300 p-3" placeholder="Sähköposti" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input className="rounded-lg border border-slate-300 p-3" placeholder="Paikkakunta" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required />

        <select className="rounded-lg border border-slate-300 p-3" value={form.revenueRange} onChange={(e) => setForm({ ...form, revenueRange: e.target.value })} required>
          <option value="" disabled>Valitse liikevaihtoluokka</option>
          <option value="0-150k">Alle 150 000 €</option>
          <option value="150k-500k">150 000 € – 500 000 €</option>
          <option value="500k-1.5m">500 000 € – 1,5 M€</option>
          <option value="1.5m+">Yli 1,5 M€</option>
        </select>

        <select className="rounded-lg border border-slate-300 p-3" value={form.employeeCount} onChange={(e) => setForm({ ...form, employeeCount: e.target.value })} required>
          <option value="" disabled>Valitse henkilöstömäärä</option>
          <option value="1-2">1–2</option>
          <option value="3-5">3–5</option>
          <option value="6-10">6–10</option>
          <option value="11-15">11–15</option>
          <option value="16+">16+</option>
        </select>

        <textarea className="rounded-lg border border-slate-300 p-3" placeholder="Mikä on suurin este uusien tarjouspyyntöjen saamisessa juuri nyt?" value={form.biggestChallenge} onChange={(e) => setForm({ ...form, biggestChallenge: e.target.value })} rows={4} required />

        <select className="rounded-lg border border-slate-300 p-3" value={form.preferredContactMethod} onChange={(e) => setForm({ ...form, preferredContactMethod: e.target.value as Lead["preferredContactMethod"] })} required>
          <option value="email">Sähköposti</option>
          <option value="phone">Puhelin</option>
          <option value="whatsapp">WhatsApp</option>
        </select>
        <input
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          name="companyWebsite"
          placeholder="Jätä tämä kenttä tyhjäksi"
          value={form.honeypot ?? ""}
          onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
        />

        <button className="rounded-lg bg-cyan-400 px-4 py-3 font-semibold text-slate-950" type="submit">Lähetä</button>
        {status ? <p className="text-sm text-slate-700">{status}</p> : null}
      </form>
    </Section>
  );
}
