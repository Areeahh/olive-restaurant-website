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
- **Checkout** – home delivery & pickup ordering: pulls in whatever's in the cart, lets the customer choose Delivery or Pickup, collects address/phone/time/payment method, and sends the full order to you on WhatsApp to confirm
- **Contact** – contact form, contact details, embedded map, WhatsApp CTA

A cart icon in the navbar opens a slide-out cart drawer; items persist for
the session (in memory). "Order Now" (navbar) and "Checkout" (cart drawer)
both lead to the delivery/pickup checkout flow; "Book a Table" leads to the
dine-in reservation form — these are two separate flows on purpose, since
booking a table and ordering delivery are different requests.

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
  `src/components/WhatsAppButton.jsx`, `src/pages/Reservation.jsx`,
  `src/pages/Checkout.jsx`, and `src/pages/Contact.jsx` (digits only, with
  country code, e.g. `923269659536`).
- **Delivery fee**: edit `DELIVERY_FEE` at the top of `src/pages/Checkout.jsx`.
- **Menu items / prices / categories**: `src/data/menu.js`.
- **Colors / fonts**: CSS variables in `src/index.css` under `@theme`.
- **Images**: drop your own photos into `public/images/...` using the exact
  filenames listed in `public/images/README.md` — they'll appear
  automatically, no code changes needed. Until a file exists, a styled
  placeholder is shown instead, so the site never breaks.
- **Contact info / address / socials**: `src/components/Footer.jsx` and
  `src/pages/Contact.jsx`.

## About the "content lock"

The site now blocks right-click, text selection/dragging, and image
dragging (`src/App.jsx` + the `user-select` rules in `src/index.css`). This
stops casual copying for the average visitor, but it is **not real
protection** — anyone can still view your content via the browser's "View
Page Source," DevTools, or by disabling JavaScript, and nothing can prevent
a screenshot. Treat this as a light deterrent, not a security measure. If
you ever want it removed, delete the `useContentGuard()` call in
`src/App.jsx` and the `user-select`/`user-drag` rules in `src/index.css`.

## Tech stack

- React 19 + Vite
- React Router (client-side routing across all navbar pages)
- Tailwind CSS v4
- lucide-react (icons)
