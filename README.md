# Tarjousputki Landing

Tarjousputki on Next.js + TypeScript + Tailwind CSS -landing page suomalaisille LVI-yrityksille, jotka haluavat systemaattisen B2B-tarjouspyyntöputken.

## Tavoite

Sivuston tavoite on konvertoida 3–15 henkilön LVI-yrityksiä varaamaan maksuton 15 minuutin kartoitus. Sivusto esittelee ongelman, seuraukset, ratkaisun, paketit, 90 päivän Kasvu-pilotin, proof-mittarit ja yhteydenottolomakkeen.

## Tekninen stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint flat config
- npm
- Vercel-yhteensopiva rakenne

## Projektin rakenne

```txt
/app
  /api
    /leads
      route.ts
  layout.tsx
  page.tsx
  globals.css

/components
  Header.tsx
  Hero.tsx
  ProblemSection.tsx
  SolutionSection.tsx
  HowItWorks.tsx
  IdealCustomer.tsx
  PricingSection.tsx
  PilotSection.tsx
  ProofSection.tsx
  ProcessSection.tsx
  FAQSection.tsx
  ContactForm.tsx
  Footer.tsx

/lib
  content.ts
  validators.ts

/types
  lead.ts
```

## Paikallinen kehitys

```bash
npm install
npm run dev
```

Avaa selaimessa:

```bash
http://localhost:3000
```

## Tarkistukset

```bash
npm run typecheck
npm run lint
npm run build
```

## Lead API

Lomake lähettää liidit reitille:

```txt
POST /api/leads
```

Tällä hetkellä liidit validoidaan ja tallennetaan palvelinlogiin. Toteutus on pidetty adapterimaisena, jotta sen voi myöhemmin liittää HubSpotiin, Airtableen, Supabaseen tai sähköpostiautomaatioon.

## Ympäristömuuttujat

Katso `.env.example`.

Nykyinen MVP ei vaadi pakollisia ympäristömuuttujia.

## Vercel-deploy

1. Luo projekti Vercelissä.
2. Valitse GitHub-repo `jamiharju-hash/tarjousputki-landing`.
3. Framework preset: `Next.js`.
4. Build command: `npm run build`.
5. Install command: `npm install`.
6. Output directory: jätä tyhjäksi / Next.js default.
7. Lisää ympäristömuuttujat tarvittaessa.
8. Deploy.

## Seuraavat parannukset

- HubSpot/Airtable/Supabase-integraatio leadien tallennukseen
- Sähköposti-ilmoitus uudesta liidistä
- Kalenterivarauslinkki CTA-painikkeisiin
- Referenssicaset ja toimialakohtaiset laskeutumissivut
- Analytics: GA4, Meta Pixel, LinkedIn Insight Tag ja server-side conversion tracking
- A/B-testit hero-otsikolle, pricing-järjestykselle ja lomakkeen pituudelle
