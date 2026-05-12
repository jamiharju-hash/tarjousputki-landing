import type { Lead } from "@/types/lead";

export function validateLead(input: Partial<Lead>): { valid: boolean; error?: string } {
  if (!input.name || input.name.trim().length < 2) {
    return { valid: false, error: "Nimi on pakollinen." };
  }

  if (!input.email || !/^\S+@\S+\.\S+$/.test(input.email)) {
    return { valid: false, error: "Sähköposti on virheellinen." };
  }

  if (!input.company || input.company.trim().length < 2) {
    return { valid: false, error: "Yrityksen nimi on pakollinen." };
  }

  if (!input.message || input.message.trim().length < 10) {
    return { valid: false, error: "Kuvaile tarpeesi vähintään 10 merkillä." };
  }

  return { valid: true };
}
