# Tarjousputki Landing Page

A conversion-focused landing page for Tarjousputki, built with Next.js App Router. The site is designed to clearly communicate the offer, answer common objections, and capture inbound leads through a contact form.

## 1) Project overview

This repository contains a production-ready marketing landing page with:

- Modular page sections (hero, problem, solution, pricing, FAQ, etc.)
- A lead capture form and server API endpoint
- Type-safe validation for incoming lead data
- A clean baseline for adding CRM/automation integrations later

## 2) Tech stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **UI:** React 19
- **Styling:** Tailwind CSS 4
- **Linting:** ESLint
- **Runtime:** Node.js

## 3) Folder structure

```txt
app/
  api/leads/route.ts      # Lead form API endpoint
  layout.tsx              # Root layout
  page.tsx                # Landing page
  globals.css             # Global styles
components/               # Reusable landing page sections/components
lib/
  content.ts              # Landing page copy/content
  validators.ts           # Lead form validation logic
types/
  lead.ts                 # Shared lead types
```

## 4) Local development instructions

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

- `http://localhost:3000`

4. Run linting:

```bash
npm run lint
```

## 5) Environment variables

Required local file:

1. Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

2. Set optional webhook destination if you want to forward leads:

- `LEAD_WEBHOOK_URL`

If `LEAD_WEBHOOK_URL` is not set, leads are only validated and logged server-side.

## 6) Build command

Create a production build with:

```bash
npm run build
```

## 7) Deployment instructions for Vercel

### Option A: Deploy with Git integration (recommended)

1. Push repository to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com](https://vercel.com) and import the project.
3. Select the repository.
4. Keep default build settings (Vercel detects Next.js automatically).
5. Add any required environment variables in **Project Settings → Environment Variables**.
6. Click **Deploy**.

### Option B: Deploy with Vercel CLI

1. Install CLI (if needed):
   - `npm i -g vercel`
2. Run from repository root:
   - `vercel`
3. For production deployment:
   - `vercel --prod`

## 8) Lead form behavior

- The form submits data to `POST /api/leads`.
- Server-side validation requires: `name`, `company`, `email`, `location`, `revenueRange`, `employeeCount`, `biggestChallenge`, and `preferredContactMethod`.
- On valid submit, the API returns a success message.
- **Current behavior:** submissions are logged server-side.
- **Current behavior:** no external CRM/database persistence is configured yet.

## 9) Future integrations

The lead form can later be connected to:

- HubSpot
- Airtable
- Supabase
- Make/Zapier
- Email notification service

A common implementation pattern is:

1. Validate input in `app/api/leads/route.ts`
2. Transform payload to integration-specific shape
3. Send to one or more destinations (CRM + notification)
4. Return user-friendly success/error responses

## 10) QA checklist before launch

- [ ] Replace placeholder company details
- [ ] Add privacy policy link
- [ ] Add real contact email
- [ ] Test mobile layout
- [ ] Test form submission
- [ ] Test Vercel deployment
- [ ] Check metadata title and description
- [ ] Add analytics if needed

---

## Handy commands

```bash
npm install
npm run dev
npm run lint
npm run build
```
