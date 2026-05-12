# tarjousputki-landing

Next.js + TypeScript + Tailwind CSS -pohjainen landing-sivu tarjousputkipalvelulle.

## Käynnistys

```bash
npm install
npm run dev
```

Avaa selaimessa `http://localhost:3000`.

## Projektirakenne

- `app/` – App Router, sivut ja API-reitit
- `components/` – laskeutumissivun osiot
- `lib/` – sisältö ja validointi
- `types/` – yhteiset TypeScript-tyypit

## API

`POST /api/leads`

Esimerkkirunko:

```json
{
  "name": "Matti Meikäläinen",
  "email": "matti@yritys.fi",
  "company": "Yritys Oy",
  "message": "Haluamme parantaa liidien laatua ja nopeuttaa tarjouksia."
}
```
