import type { Lead } from "@/types/lead";

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
const CONTACT_METHODS = ["email", "phone", "whatsapp"] as const;

export function validateLead(input: Partial<Lead>): { valid: boolean; error?: string } {
  if (!input.name || input.name.trim().length < 2) {
    return { valid: false, error: "Nimi on pakollinen." };
  }

  if (!input.company || input.company.trim().length < 2) {
    return { valid: false, error: "Yrityksen nimi on pakollinen." };
  }

  if (!input.email || !EMAIL_REGEX.test(input.email)) {
    return { valid: false, error: "Sähköposti on virheellinen." };
  }

  if (!input.location || input.location.trim().length < 2) {
    return { valid: false, error: "Paikkakunta on pakollinen." };
  }

  if (!input.revenueRange || input.revenueRange.trim().length < 2) {
    return { valid: false, error: "Liikevaihtoluokka on pakollinen." };
  }

  if (!input.employeeCount || input.employeeCount.trim().length < 1) {
    return { valid: false, error: "Henkilöstömäärä on pakollinen." };
  }

  if (!input.biggestChallenge || input.biggestChallenge.trim().length < 10) {
    return { valid: false, error: "Kuvaile suurin haaste vähintään 10 merkillä." };
  }

  if (!input.preferredContactMethod || !CONTACT_METHODS.includes(input.preferredContactMethod)) {
    return { valid: false, error: "Valitse ensisijainen yhteydenottotapa." };
  }

  return { valid: true };
}
