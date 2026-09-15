# Enchantment Auto Details — launch checklist

Everything on this list is either a fact the site needs before it goes live, or
a claim it is deliberately NOT making until the owner confirms it. The site is
built so that an EMPTY value hides the element — no placeholder phone numbers
or fake hours ever reach the page. Fill these in `src/config/site.ts` unless a
different file is named.

## 0. What we know (owner-supplied 2026-09-14)

- **Logo**: chrome script "Enchantment" over a red-outlined "AUTO DETAILS"
  banner, subline "IN GOD WE TRUST", on black with red smoke, with a red Dodge
  Charger below. Bundled in `public/img` (hero artwork, feathered emblem crop,
  share card, typographic favicon). Regenerate with `scripts/brand-assets.mjs`.
- **Service menu** (the "Enchantment Auto Spa Service Menu" artwork):
  Bronze / Silver / Gold full details, Interior Detail Only, Exterior Foam
  Wash, Vacuum Only. Silver and Gold are priced by vehicle size. This is the
  WHOLE menu — the site mentions nothing else (no coating, correction, tint, PPF).
- **Prices are hidden on purpose** (owner's instruction). See §3.4.
- **Six photos** (Urus ×2, C8 Corvette collage, red-leather Camry collage,
  grey Urus) arrived with the logo; three are bundled as service-tile
  fallbacks. **Confirm they are the shop's own work** (see §4).

## 1. Facts required before launch (site.ts)

| Field | Where it shows | Status |
| --- | --- | --- |
| `PHONE` | Nav, sticky mobile bar, every CTA, forms' error fallback, schema | **EMPTY — no call buttons render** |
| `EMAIL` | Footer, contact page, schema | empty — hidden |
| `addressParts.city` | Every eyebrow, meta title, schema, copy | **EMPTY — copy says "New Mexico" until set** |
| `business.address` + `addressParts.street/zip` + `mapsQuery` | Footer, contact map, FinalCTA, schema | empty — service area shown instead of a map |
| `business.hours` + `hoursSchema` | Footer, contact, quote page, schema | empty — hidden |
| `serviceArea.primary` / `nearby` | Footer, contact | "New Mexico"; `nearby` empty |
| `social.*` | Footer icons | empty — hidden |
| `VITE_SITE_URL` (Railway env) | Canonicals, OG URLs, sitemap | placeholder `https://www.enchantmentautodetails.com` |
| Owner's name | Nowhere yet — About page / Meet the Team | unknown |
| Trading name | Logo says "Auto Details", menu says "Auto Spa" | site uses **Enchantment Auto Details**; confirm |

## 2. Google Business Profile

- `site.reviews.count/rating/verifiedOn/profileUrl` are all zero/empty.
  Nothing rating-related renders (no stars, no aggregateRating markup, no
  "read our reviews"). When the numbers are known, read them off the live
  profile, set them here with the date, and paste the real quotes into
  `src/content/reviews.ts`. Never add a review that isn't on the profile.
- Reviews collected inside ShopFlow (Settings → featured) show up on the site
  automatically. They are never emitted as structured data.

## 3. ShopFlow tenant (owner does none of this — you do)

1. **Create the tenant** with shop name exactly `Enchantment Auto Details`,
   industry `detail`. The admin create-shop endpoint derives the slug
   `enchantment-auto-details` from that name (`server/db.js` slug(): lowercase,
   non-alphanumerics → `-`, 32 chars). If a slug collision ever appends a
   suffix, change `VITE_SHOPFLOW_SHOP_SLUG` on the Railway service to match.
2. `VITE_SHOPFLOW_SHOP_SLUG` on the Railway service is `enchantment-auto-details`.
   The default in `src/config/shopflow.ts` is the same. A wrong slug = every
   lead lost — and it must never be another shop's slug.
3. **Lead form options** (Settings → lead form options) must contain these
   three strings EXACTLY, or the server drops the service tag from every lead:
   `Full Detail`, `Interior Detail`, `Exterior Wash`
   (these are `leadValue` in `src/content/services.ts`). The package
   (Bronze / Silver / Gold / Vacuum Only) arrives in the lead's notes as the
   "Goal:" line.
4. **Pricing** — enter the menu in Settings → Services so booking, deposits
   and the CRM have the real numbers. The WEBSITE HIDES THEM
   (`site.pricing.published = false`): no table, no "from $", no deposit
   line, whatever ShopFlow says. Flip the flag to publish. Menu as supplied:
   Bronze $65 (flat) · Silver $120–$145 by size · Gold $200–$230 by size ·
   Interior Detail Only $100 · Exterior Foam Wash $35 · Vacuum Only $10.
   If ever published, a service lands on a page by category (`detail`,
   `interior`, `wash`…) or by name ("Bronze", "Interior Detail Only",
   "Exterior Foam Wash") — see `src/lib/pricing.ts`.
5. Vehicle leads send year/make/model; colour is optional (the server never
   requires it). There is no property flow on this site.
6. **Photos**: Settings → Work Gallery. The gallery, the homepage "real work"
   band and every service-page gallery are hidden until the first upload. A
   caption files the photo under a service (see `src/content/gallery.ts`).
   Upload the six owner photos here to start.
7. **Website Photos** slots. The platform's slots are still the Evo names; the
   site maps them: `service_detail` → Full Detail tile, `service_ceramic` →
   Interior Detail, `service_tint` → Exterior Wash, `hero` → homepage hero
   (landscape only), `logo` → header logo. Until the platform gets its own
   slot names, tell the owner which is which — or rename them in
   `src/config/images.ts` when the platform changes.
8. **Meet the Team**: Settings → Meet the Team populates /about.

## 4. Claims held back (site.ts → `unverified`)

None of these render anywhere. Each one needs the owner's word, in writing.

| Claim | Where it would go once confirmed |
| --- | --- |
| The six photos are the shop's own work | Already used as tile fallbacks — REMOVE any that aren't (`config/images.ts` → `fallback`) |
| Product brands (soaps, waxes, dressings) | A `BrandLine` on the service pages (the Evo site has the component) |
| Any satisfaction guarantee / re-do policy | `trustSignals` (drafted, `verified: false`) + a FAQ |
| Detailing certifications | `trustSignals` |
| "Owner-detailed" / who does the work | `trustSignals` (drafted, `verified: false`), About page |
| Mobile / at-home detailing | Process steps, FAQ, contact page |
| Years in business | Nowhere until known |
| Any service not on the menu (coating, correction, tint, PPF) | Never — the site says explicitly that it doesn't do them (home FAQ, About) |

## 5. The four trust-bar commitments

These render today because every one is read off the owner's own menu or is a
promise about HOW the shop works. The owner must agree to stand behind them:

- Free quotes — one number before we start
- Spot-free wash & dry — on every package
- Bronze · Silver · Gold — pick the depth, we do the rest
- Priced by the vehicle — sedan to full-size truck

## 6. Analytics (all optional, all env-driven, nothing hard-coded)

| Env var | Effect |
| --- | --- |
| `VITE_GA4_ID` | GA4 loads; quote/phone/gallery events fire |
| `VITE_GOOGLE_ADS_ID` | Ads remarketing config |
| `VITE_GOOGLE_ADS_LEAD_LABEL` | Quote-form conversion (`AW-xxx/yyy`) |
| `VITE_META_PIXEL_ID` | Meta Pixel + Lead / InitiateCheckout / Contact events |

## 7. Deploy (Railway)

- Service `enchantment-auto-details-website` in the **The ShopFlow** Railway
  project (same project as Evo-Solutions, Street Soundz and the platform),
  deployed from github.com/adub7k/enchantment-auto-details-website `main`.
  Every push redeploys.
- Public URL until a domain is bought:
  https://enchantment-auto-details-website-production.up.railway.app
- Env set on the service (2026-09-14): `VITE_SHOPFLOW_API_URL`,
  `VITE_SHOPFLOW_SHOP_SLUG=enchantment-auto-details`, `VITE_SITE_URL`
  (the railway.app URL above — set to the real domain when it exists),
  `NITRO_PRESET=node-server`. Analytics IDs not set. All are baked in at
  BUILD time — a variable change triggers a rebuild automatically.
- Custom domain: `railway domain <domain>` on this service, then point the
  registrar at it (apex → www redirect like Evo).
- Gotchas inherited from Evo: no bun lockfiles, `.npmrc` has `force=true`,
  don't use `npm ci` in the build command, `engines.node >= 22`.

## 8. Logo & brand assets

Regenerate favicons, the share card and the tile fallbacks if anything changes:
`scripts/brand-assets.mjs` (see the header comment for how to run it — it
needs sharp + opentype.js resolvable from the folder you run it in, and an
Oswald 700 TTF for the favicon). The favicon is a typographic chrome "E" with
the red ring because the script wordmark is unreadable at 16px — swap it if
the owner supplies a square mark.
