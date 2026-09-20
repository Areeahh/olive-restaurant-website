# The Olive — Restaurant Website

A full, multi-page React website for a restaurant, built with Vite, React
Router and Tailwind CSS. Includes a sliding hero, live menu with cart,
reservation & contact forms, a gallery lightbox, and a floating WhatsApp
button.

## Pages

- **Home** – sliding hero banner, stats, popular dishes (filterable), promo banners
- **Menu** – full menu with category filter + search, add-to-cart
- **About** – story, values, mission stats, "why choose us"
- **Gallery** – masonry photo grid with a click-to-enlarge lightbox
- **Reservation** – table booking form (date/time/guests) with a WhatsApp confirm option
- **Contact** – contact form, contact details, map placeholder, WhatsApp CTA

A cart icon in the navbar opens a slide-out cart drawer; items persist for
the session (in memory).

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy to Vercel

**Option A — Vercel CLI**

```bash
npm i -g vercel
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```

**Option B — Vercel dashboard (recommended)**

1. Push this project to a GitHub repository.
2. Go to https://vercel.com/new and import that repository.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`,
   output directory `dist` (auto-detected).
4. Click **Deploy**. Done — Vercel gives you a live URL.

`vercel.json` is already included so that client-side routes like `/menu`
or `/gallery` work correctly on refresh/direct link (SPA rewrite to
`index.html`).

## Customize

- **WhatsApp number**: edit `WHATSAPP_NUMBER` in
  `src/components/WhatsAppButton.jsx`, `src/pages/Reservation.jsx`, and
  `src/pages/Contact.jsx` (digits only, with country code, e.g. `923001234567`).
- **Menu items / prices / categories**: `src/data/menu.js`.
- **Colors / fonts**: CSS variables in `src/index.css` under `@theme`.
- **Images**: every image currently uses a styled placeholder
  (`placehold.co`) so the project runs immediately with no missing assets.
  Swap the `image` fields in `src/data/menu.js` and the `src` attributes in
  the page files for your own restaurant photos before going live.
- **Contact info / address / socials**: `src/components/Footer.jsx` and
  `src/pages/Contact.jsx`.

## Tech stack

- React 19 + Vite
- React Router (client-side routing across all navbar pages)
- Tailwind CSS v4
- lucide-react (icons)
