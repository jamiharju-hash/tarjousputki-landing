import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tarjousputki | B2B tarjouspyyntöputki LVI-yrityksille",
  description: "Systemaattinen B2B-tarjouspyyntöputki suomalaisille LVI- ja talotekniikkayrityksille.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}
