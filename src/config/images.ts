/**
 * Image slots.
 *
 * Every slot reads a ShopFlow siteImages key first (Settings → Website
 * Photos); when the owner uploads there, the photo takes over with no deploy.
 * Until then each slot has a bundled fallback — an optimized copy of the
 * shop's OWN photos, supplied with the logo on 2026-09-14 — and, failing
 * that, a designed motif (components/site/Motif.tsx). No stock photography,
 * ever: a stock photo of someone else's work is a lie about the work.
 *
 * TODO(LAUNCH): confirm with the owner that the six photos in /public/img are
 * the shop's own jobs (Urus, C8 Corvette, red-leather Camry). If any aren't,
 * delete the file and clear `fallback` — the motif takes over.
 *
 * Slot keys must match what the ShopFlow platform accepts (SITE_SLOTS in
 * client/js/pages/settings.js): `hero`, `service_tint`, `service_ceramic`,
 * `service_ppf`, `service_detail`, `service_commercial`, `logo`. The three
 * detailing slots below are MAPPED onto existing keys — see LAUNCH.md.
 */

export type MotifKind = "suds" | "interior" | "gloss" | "hero";

type Slot = {
  /** ShopFlow siteImages key this slot reads. */
  key: string;
  motif: MotifKind;
  alt: string;
  /** Bundled owner photo, shown until the ShopFlow slot is set. */
  fallback?: string;
};

export const images = {
  hero: {
    key: "hero",
    motif: "hero",
    alt: "Enchantment Auto Details — full details, interior details and exterior washes",
    // The owner's logo artwork is a full composition (emblem + car on black),
    // so it doubles as the hero visual until a landscape shop photo exists.
    fallback: "/img/enchantment-hero.webp",
  } satisfies Slot,
  share: "/img/enchantment-share.jpg",
  /**
   * Brand mark. `wordmark` is the emblem cropped out of the owner's artwork
   * with a feathered edge so it sits on the near-black page; `mark` is a
   * square typographic favicon (the script wordmark is unreadable at 32px).
   * The ShopFlow `logo` slot overrides the header at runtime as well.
   */
  logo: {
    key: "logo",
    wordmark: "/img/enchantment-logo-700.webp",
    wordmark2x: "/img/enchantment-logo-1400.webp",
    mark: "/img/enchantment-mark-256.png",
    mark512: "/img/enchantment-mark-512.png",
  },
  service: {
    // Platform key → site meaning. Renamed here only; the upload UI in ShopFlow
    // still shows the old labels until the platform gets its own slots.
    service_full: {
      key: "service_detail",
      motif: "gloss",
      alt: "Full detail by Enchantment Auto Details — C8 Corvette, inside and out",
      fallback: "/img/enchantment-full-detail-1200.webp",
    },
    service_interior: {
      key: "service_ceramic",
      motif: "interior",
      alt: "Interior detail by Enchantment Auto Details — red leather, cleaned and conditioned",
      fallback: "/img/enchantment-interior-1200.webp",
    },
    service_exterior: {
      key: "service_tint",
      motif: "suds",
      alt: "Exterior wash by Enchantment Auto Details — spot-free finish on a Lamborghini Urus",
      fallback: "/img/enchantment-exterior-1200.webp",
    },
  } satisfies Record<string, Slot>,
} as const;

export type ServiceImageSlot = keyof typeof images.service;
