# Enchantment Auto Details — website

Marketing + lead-gen site for Enchantment Auto Details (car detailing, New
Mexico). Built from the Street Soundz / Evo Solutions template; talks to the
ShopFlow platform for leads, photos, team and reviews.

- **Stack:** TanStack Start (React 19, SSR) + Tailwind v4, deployed to Railway.
- **Content** lives in `src/content/*.ts` and `src/config/site.ts` — no CMS.
- **Design system** is `src/styles.css`: black / chrome / red from the logo,
  Oswald for display type, Inter for body.
- **No stock photography.** Image slots read ShopFlow → Settings → Website
  Photos first, then the owner's own photos bundled in `public/img`, then a
  designed motif (`src/components/site/Motif.tsx`).
- **No prices on the site** (owner's call). `site.pricing.published` gates the
  live ShopFlow pricing machinery; flip it to `true` to publish whatever is
  priced in ShopFlow → Settings → Services.
- **Honesty rules:** nothing unverified is published. See `LAUNCH.md` for the
  fields to fill and the claims deliberately held back.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # NITRO_PRESET=node-server for Railway
npm run lint
```

Env (build time): `VITE_SHOPFLOW_API_URL`, `VITE_SHOPFLOW_SHOP_SLUG`,
`VITE_SITE_URL`, optional `VITE_GA4_ID` / `VITE_GOOGLE_ADS_ID` /
`VITE_GOOGLE_ADS_LEAD_LABEL` / `VITE_META_PIXEL_ID`.
