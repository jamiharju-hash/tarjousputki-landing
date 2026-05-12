import { NextResponse } from "next/server";
import { validateLead } from "@/lib/validators";
import type { Lead } from "@/types/lead";

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<Lead>;
  const validation = validateLead(body);

  if (!validation.valid) {
    return NextResponse.json({ message: validation.error }, { status: 400 });
  }

  return NextResponse.json({ message: "Kiitos! Olemme sinuun pian yhteydessä." }, { status: 200 });
}
