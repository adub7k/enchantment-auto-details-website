/**
 * Brand asset generator — run once whenever the logo or the fallback photos change.
 *
 *   OUT_DIR=/path/to/repo/public node scripts/brand-assets.mjs <logo-artwork.jpg> <font.ttf> [full.jpg interior.jpg exterior.jpg]
 *
 * Needs `sharp` and `opentype.js` resolvable (they're deliberately NOT project
 * deps — native sharp would slow every Railway build for a one-off task):
 * cd into any folder that has them installed and run it from there.
 *
 * Produces, in /public:
 *   img/enchantment-hero.webp                the owner's full logo artwork (emblem + car on black)
 *   img/enchantment-share.jpg                1200×630 share card (artwork, cover-cropped)
 *   img/enchantment-logo-{1400,700}.webp     the emblem cropped out of the artwork with a feathered
 *                                            edge, so its black ground melts into the near-black page
 *   img/enchantment-mark-{512,256}.png       square "E" mark (typographic — the script is unreadable at 32px)
 *   favicon-{32,48,96,192}.png, apple-touch-icon.png, favicon.ico
 *   img/enchantment-{full-detail,interior,exterior}-1200.webp  owner photos → service tile fallbacks
 */
import sharp from "sharp";
import opentype from "opentype.js";
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const [, , ART, FONT, FULL, INTERIOR, EXTERIOR] = process.argv;
if (!ART || !FONT)
  throw new Error("usage: brand-assets.mjs <artwork.jpg> <font.ttf> [full interior exterior]");
const PUB = resolve(process.env.OUT_DIR ?? "public");
const IMG = resolve(PUB, "img");
mkdirSync(IMG, { recursive: true });

const RED = "#D8232A";
const RED_DEEP = "#8E1419";
const BLACK = "#141213";

const art = sharp(ART);
const { width: AW, height: AH } = await art.metadata();
console.log("artwork", AW, AH);

/* ---- hero + share card ------------------------------------------------ */
await sharp(ART).webp({ quality: 84 }).toFile(`${IMG}/enchantment-hero.webp`);
await sharp(ART)
  .resize({ width: 1200, height: 630, fit: "cover", position: "centre" })
  .jpeg({ quality: 86 })
  .toFile(`${IMG}/enchantment-share.jpg`);

/* ---- emblem wordmark with a feathered edge ---------------------------- */
// Emblem region, as fractions of the artwork (script + banner + subline).
const crop = {
  left: Math.round(AW * 0.19),
  top: Math.round(AH * 0.02),
  width: Math.round(AW * 0.62),
  height: Math.round(AH * 0.56),
};
const emblem = await sharp(ART).extract(crop).png().toBuffer();
const feather =
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${crop.width}" height="${crop.height}">
  <defs><radialGradient id="m" cx="0.5" cy="0.5" r="0.5"><stop offset="0.72" stop-color="#fff"/><stop offset="1" stop-color="#000"/></radialGradient></defs>
  <rect width="100%" height="100%" fill="url(#m)"/></svg>`);
const masked = await sharp(emblem)
  .joinChannel(await sharp(feather).resize(crop.width, crop.height).toColourspace("b-w").toBuffer())
  .png()
  .toBuffer();
for (const w of [1400, 700]) {
  await sharp(masked)
    .resize({ width: w })
    .webp({ quality: 88, alphaQuality: 90 })
    .toFile(`${IMG}/enchantment-logo-${w}.webp`);
}
console.log("wordmark", crop.width, crop.height, "→ ratio", (crop.width / crop.height).toFixed(3));

/* ---- square mark ------------------------------------------------------ */
const font = opentype.parse(readFileSync(FONT).buffer.slice(0));
const text = "E";
const size = 380;
const path = font.getPath(text, 0, 0, size, { kerning: true });
const bb = path.getBoundingBox();
const tw = bb.x2 - bb.x1,
  th = bb.y2 - bb.y1;
const tx = (512 - tw) / 2 - bb.x1,
  ty = (512 - th) / 2 - bb.y1;
const d = font.getPath(text, tx, ty, size, { kerning: true }).toPathData(2);
const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="chrome" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FFFFFF"/><stop offset="0.48" stop-color="#D9DADF"/><stop offset="0.52" stop-color="#9A9CA6"/><stop offset="1" stop-color="#E6E7EB"/>
    </linearGradient>
    <linearGradient id="red" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${RED}"/><stop offset="1" stop-color="${RED_DEEP}"/></linearGradient>
  </defs>
  <rect width="512" height="512" rx="104" fill="${BLACK}"/>
  <rect x="16" y="16" width="480" height="480" rx="90" fill="none" stroke="url(#red)" stroke-width="14"/>
  <path d="${d}" fill="url(#chrome)" stroke="${RED}" stroke-width="6" stroke-linejoin="round" paint-order="stroke"/>
</svg>`;
const mark = Buffer.from(markSvg);
await sharp(mark).png().toFile(`${IMG}/enchantment-mark-512.png`);
await sharp(mark).resize(256).png().toFile(`${IMG}/enchantment-mark-256.png`);
for (const s of [32, 48, 96, 192])
  await sharp(mark).resize(s).png().toFile(`${PUB}/favicon-${s}.png`);
await sharp(mark).resize(180).png().toFile(`${PUB}/apple-touch-icon.png`);

/* ---- favicon.ico (PNG entries, Vista+) -------------------------------- */
const sizes = [16, 32, 48];
const pngs = await Promise.all(sizes.map((s) => sharp(mark).resize(s).png().toBuffer()));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = 6 + 16 * sizes.length;
const dir = [];
for (let i = 0; i < sizes.length; i++) {
  const e = Buffer.alloc(16);
  e.writeUInt8(sizes[i], 0);
  e.writeUInt8(sizes[i], 1);
  e.writeUInt8(0, 2);
  e.writeUInt8(0, 3);
  e.writeUInt16LE(1, 4);
  e.writeUInt16LE(32, 6);
  e.writeUInt32LE(pngs[i].length, 8);
  e.writeUInt32LE(offset, 12);
  offset += pngs[i].length;
  dir.push(e);
}
writeFileSync(`${PUB}/favicon.ico`, Buffer.concat([header, ...dir, ...pngs]));

/* ---- owner photos → service tile fallbacks ---------------------------- */
// The owner supplied 2×2 collages for two of them; take one quadrant so a
// 16:9 tile doesn't slice across four photos. `q` = which quadrant.
async function tile(src, out, q) {
  if (!src) return;
  let img = sharp(src);
  const m = await img.metadata();
  if (q) {
    const half = Math.floor(Math.min(m.width, m.height) / 2);
    const gutter = Math.round(half * 0.012);
    const left = q === "tr" || q === "br" ? m.width - half + gutter : 0;
    const top = q === "bl" || q === "br" ? m.height - half + gutter : 0;
    img = img.extract({ left, top, width: half - gutter, height: half - gutter });
  }
  await img
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(`${IMG}/${out}`);
  console.log("tile", out);
}
await tile(FULL, "enchantment-full-detail-1200.webp", "tl");
await tile(INTERIOR, "enchantment-interior-1200.webp", "tr");
await tile(EXTERIOR, "enchantment-exterior-1200.webp", null);

console.log("brand assets written to", PUB);
