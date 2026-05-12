export type Lead = {
  name: string;
  company: string;
  email: string;
  location: string;
  revenueRange: string;
  employeeCount: string;
  biggestChallenge: string;
  preferredContactMethod: "email" | "phone" | "whatsapp";
  message?: string;
};
