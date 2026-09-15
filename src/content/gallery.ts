/**
 * Portfolio configuration.
 *
 * Every photo in the gallery comes from ShopFlow (Settings → Work Gallery),
 * so the owner can add work without a deploy. The gallery starts empty and
 * every "our work" section hides itself until the first photo lands. There
 * is no stock photography here and none should be added. (The owner's own
 * photos bundled in /public/img are used as fixed fallbacks for the hero and
 * service tiles — see config/images.ts — not as gallery entries.)
 *
 * A caption typed into ShopFlow files the photo under a service using the
 * keyword map below; anything unmatched shows under "All work".
 */

import type { GalleryTag } from "./services";

export const galleryFilters: { key: GalleryTag | "all"; label: string }[] = [
  { key: "all", label: "All work" },
  { key: "full", label: "Full Detail" },
  { key: "interior", label: "Interior" },
  { key: "exterior", label: "Exterior" },
];

/** Keyword → tag, so a caption typed in ShopFlow files a photo correctly. */
const CAPTION_TAGS: [RegExp, GalleryTag][] = [
  [/bronze|silver|gold|full detail|inside and out|engine bay|wax|buff|package/i, "full"],
  [/interior|seat|carpet|shampoo|headliner|vent|leather|vacuum|dash|console/i, "interior"],
  [/exterior|wash|foam|paint|wheel|tire|tyre|spot-?free|glass|shine/i, "exterior"],
];

export function tagFromCaption(caption: string): GalleryTag | null {
  for (const [re, tag] of CAPTION_TAGS) if (re.test(caption)) return tag;
  return null;
}
