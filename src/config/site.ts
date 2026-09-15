/**
 * Enchantment Auto Details — business facts.
 *
 * RULE FOR THIS FILE: everything here is published to a live commercial site.
 * A claim goes in only when it is verifiable. Anything the owner still has to
 * confirm lives in `unverified` below, is NOT rendered by any component, and
 * is tracked in LAUNCH.md. Inventing warranties, certifications, brands,
 * review counts or years-in-business is an FTC problem and a Google
 * structured-data penalty — not a copywriting shortcut.
 *
 * Every field marked TODO must be filled in before the site goes live. The
 * components are written so an EMPTY value hides the element (no phone → no
 * call buttons, no address → no map) rather than printing a placeholder.
 */

export type ServiceKey = "full" | "interior" | "exterior";

/** Site origin. Set VITE_SITE_URL in Railway once the real domain is known. */
const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/+$/, "") ||
  "https://www.enchantmentautodetails.com"; // TODO(LAUNCH): confirm the real domain

const PHONE: string = ""; // TODO(LAUNCH): "(505) 555-0100" — empty hides every call button
const EMAIL: string = ""; // TODO(LAUNCH): empty hides the email links

export const site = {
  business: {
    name: "Enchantment Auto Details",
    /** Short form for prose and the footer wordmark. */
    shortName: "Enchantment",
    /** One line under the wordmark and in the footer. Taken from the owner's own service menu. */
    tagline: "Quality automotive detailing.",
    phone: PHONE,
    phoneHref: PHONE ? `tel:+1${PHONE.replace(/\D/g, "")}` : "",
    email: EMAIL,
    emailHref: EMAIL ? `mailto:${EMAIL}` : "",
    /**
     * TODO(LAUNCH): shop address, if there is a shop. A mobile-only or
     * by-appointment business leaves `address` empty and the site shows the
     * service area instead of a map.
     */
    address: "",
    addressParts: {
      street: "",
      city: "", // TODO(LAUNCH): the city — empty falls back to "New Mexico" in copy
      state: "NM", // "Enchantment" = the Land of Enchantment; NM is the one thing we know
      zip: "",
      country: "US",
    },
    /** Used for the map embed + directions link. Empty = no map. */
    mapsQuery: "",
    /**
     * TODO(LAUNCH): real hours. Empty array hides the hours block everywhere.
     * `open: false` renders the line muted (e.g. "Sunday: Closed").
     */
    hours: [] as { day: string; value: string; open: boolean }[],
    /** Machine-readable hours for LocalBusiness schema. Empty = omitted. */
    hoursSchema: [] as { days: string[]; opens: string; closes: string }[],
  },

  /** Canonical origin — used for canonical tags, OG URLs and the sitemap. */
  url: SITE_URL,

  /**
   * Prices. The owner's instruction (2026-09-14) is that the website does NOT
   * show prices — the menu is quote-first. The live-pricing machinery from
   * ShopFlow → Settings → Services is still wired up (lib/pricing.ts,
   * PricingTable.tsx) so flipping this to `true` publishes whatever is priced
   * there, but while it's false no price, "from $" or deposit line renders
   * anywhere, whatever ShopFlow says.
   */
  pricing: {
    published: false,
  },

  /**
   * Google Business Profile.
   *
   * Unknown at build time, so `count` starts at 0 and NOTHING rating-related
   * renders: no stars in the hero, no aggregateRating markup, no "read our
   * reviews" link. Read the numbers off the live profile and update them here
   * (with the date) — see LAUNCH.md. Reviews collected through ShopFlow are
   * shown live from the API and never feed schema markup.
   */
  reviews: {
    rating: 0,
    count: 0,
    verifiedOn: "",
    /** The "write a review" link from the Google Business Profile. */
    profileUrl: "",
  },

  /**
   * Where the shop actually works. Only list places the owner has confirmed —
   * fabricated service areas are the classic local-SEO spam signal.
   */
  serviceArea: {
    primary: "New Mexico", // TODO(LAUNCH): the city / metro
    nearby: [] as string[], // TODO(LAUNCH): e.g. ["Rio Rancho", "Los Lunas"]
    note: "Vehicles are booked in for detailing. Tell us the vehicle and the package you're after and we'll confirm a time.",
  },

  social: {
    /** Only links the owner has confirmed appear in the footer; empty = hidden. */
    instagram: "",
    facebook: "",
    tiktok: "",
    youtube: "",
  },

  /**
   * ============================ NOT PUBLISHED ============================
   * Nothing here is rendered anywhere. Each item is listed in LAUNCH.md with
   * the exact place it will slot into once the owner confirms it.
   */
  unverified: {
    /** Product brands used (soaps, waxes, dressings, coatings). */
    brands: null,
    /** Any guarantee / re-do policy. */
    warranty: null,
    /** Detailing certifications — only publish with the cert. */
    certifications: null,
    /** How long the shop has been open. */
    yearsInBusiness: null,
    /** Mobile / at-home detailing — not confirmed. */
    mobileService: null,
    /** Whether the owner does the work personally. */
    ownerDetails: null,
    /** Ceramic coating, paint correction, tint, PPF — NOT on the menu; never listed. */
    otherServices: null,
    /** The menu artwork says "Enchantment Auto Spa"; the logo says "Auto Details". */
    tradingName: null,
  },
};

/** Convenience booleans so components don't repeat the empty checks. */
export const has = {
  phone: Boolean(site.business.phone),
  email: Boolean(site.business.email),
  address: Boolean(site.business.address),
  hours: site.business.hours.length > 0,
  reviews: site.reviews.count > 0 && site.reviews.rating > 0,
  reviewLink: Boolean(site.reviews.profileUrl),
  city: Boolean(site.business.addressParts.city),
  prices: site.pricing.published,
};

/**
 * Trust-bar items. These are COMMITMENTS the shop makes about how it works,
 * every one of them read straight off the owner's own service menu — not
 * statistics about its past. `verified` gates rendering — anything the owner
 * hasn't signed off on never paints.
 */
export type TrustSignal = {
  id: string;
  value: string;
  label: string;
  verified: boolean;
};

export const trustSignals: TrustSignal[] = [
  { id: "quote", value: "Free quotes", label: "One number before we start", verified: true },
  { id: "spotfree", value: "Spot-free wash & dry", label: "On every package", verified: true },
  {
    id: "packages",
    value: "Bronze · Silver · Gold",
    label: "Pick the depth, we do the rest",
    verified: true,
  },
  {
    id: "sized",
    value: "Priced by the vehicle",
    label: "Sedan to full-size truck",
    verified: true,
  },
  // --- held back pending confirmation (see LAUNCH.md) ---
  { id: "owner", value: "Owner-detailed", label: "You deal with the detailer", verified: false },
  {
    id: "guarantee",
    value: "Satisfaction guarantee",
    label: "Not happy? We re-do it",
    verified: false,
  },
];

export const publishedTrustSignals = trustSignals.filter((t) => t.verified);

/**
 * Short location strings for eyebrows and copy. Until the city is confirmed
 * the site talks about New Mexico — true, and the brand name is a nod to it.
 */
export const CITY = site.business.addressParts.city || "New Mexico";
export const STATE = site.business.addressParts.state;
export const CITY_STATE = site.business.addressParts.city
  ? `${site.business.addressParts.city}, ${STATE}`
  : "New Mexico";

export type Site = typeof site;
