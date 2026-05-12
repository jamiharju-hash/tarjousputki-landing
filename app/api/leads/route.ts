import { NextResponse } from "next/server";
import { validateLead } from "@/lib/validators";
import type { Lead } from "@/types/lead";

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<Lead>;
  const validation = validateLead(body);

  if (!validation.valid) {
    return NextResponse.json({ message: validation.error }, { status: 400 });
  }

  const lead = body as Lead;
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (webhookUrl) {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: "tarjousputki-landing", lead }),
    });

    if (!webhookResponse.ok) {
      console.error("[leads] webhook forward failed", webhookResponse.status);
      return NextResponse.json({ message: "Lähetys epäonnistui. Yritä hetken päästä uudelleen." }, { status: 502 });
    }
  } else {
    console.info("[leads] New lead submission", lead);
  }

  return NextResponse.json({ message: "Kiitos! Olemme sinuun pian yhteydessä." }, { status: 200 });
}
