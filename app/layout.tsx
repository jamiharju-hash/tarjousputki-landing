import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tarjousputki Landing",
  description: "Kasvata myyntiä selkeällä tarjousputkella.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}
