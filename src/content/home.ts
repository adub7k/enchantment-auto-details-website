/**
 * Homepage-only copy: the differentiators and the cross-service FAQ.
 *
 * Every "why us" point below is a commitment about HOW the shop works, or a
 * fact read straight off the owner's service menu. No install counts, no
 * years-in-business, no review tallies, no prices.
 */

import { CITY } from "@/config/site";

export const whyUs = [
  {
    title: "Spot-free, every package",
    body: "Bronze, Silver or Gold, the wash is the same: foam, a proper hand wash, and a spot-free dry so hard water never marks the paint. The packages differ in how deep we go, not in how carefully we wash.",
  },
  {
    title: "The small stuff is the job",
    body: "Vents, cup holders, door panels, door jambs, wheel wells, the top edge of the glass. Anyone can vacuum a carpet. A detail is the hundred places a vacuum doesn't reach.",
  },
  {
    title: "We'll recommend the cheaper package when it's right",
    body: "A clean daily driver doesn't need Gold, and we'll say so. Talking you down to Bronze is how we get the call for Silver next spring.",
  },
  {
    title: "One number, before we start",
    body: "Silver and Gold are priced by vehicle size, so the quote is for your car, not a generic one. Nothing changes mid-job without you hearing about it first.",
  },
  {
    title: "Done in the right order",
    body: "Wash first, interior next, paint last. Vacuum before you shampoo, clean trim before you shine it. It sounds obvious; it's what separates a detail from a tidy.",
  },
  {
    title: "You see it before you pay",
    body: "A walk-around at pickup: what came out, what didn't, and what to do to keep it that way. If something isn't right, it gets fixed then, not next week.",
  },
];

/** Cross-service FAQ. Also feeds FAQPage structured data on the homepage. */
export const homeFaqs = [
  {
    q: "What does Enchantment Auto Details do?",
    a: `Car detailing in ${CITY}. Full inside-and-out details in three packages — Bronze, Silver and Gold — plus an interior-only detail, a quick vacuum-only, and an exterior foam wash. That's the whole menu.`,
  },
  {
    q: "What's the difference between Bronze, Silver and Gold?",
    a: "Bronze is the full clean: spot-free wash and dry, interior and trunk vacuumed, vents, cup holders, door panels, jambs, glass, trim, wheel wells and tires. Silver adds shampooed carpets and seats and a cleaned headliner. Gold adds seatbelts, a one-pass wax and buff, a one-pass light-scratch remover, polished exhaust tips and a detailed engine bay.",
  },
  {
    q: "How much does a detail cost?",
    a: "Bronze is one price for any vehicle. Silver and Gold are priced by vehicle size, because a full-size truck has a lot more carpet and paint than a compact. Tell us the vehicle and the package in the quote form and you'll get the exact number back — no range, no surprises.",
  },
  {
    q: "Can I just get the inside done?",
    a: "Yes. The interior detail deep-cleans the vents, door panels and cup holders, shampoos the carpets and seats and cleans the headliner. If it only needs the crumbs gone, there's a vacuum-only option.",
  },
  {
    q: "Can I just get a wash?",
    a: "Yes. The exterior foam wash is a hand wash with a spot-free dry, the glass cleaned and the tires shined. No spinning brushes, no water spots. It's the upkeep between details.",
  },
  {
    q: "Do you do ceramic coating, paint correction or window tint?",
    a: "No. We detail cars — wash, interior, and the wax, light-scratch removal and engine bay in the Gold package. If you need coating, correction or tint, we'll happily tell you it's not us.",
  },
  {
    q: "How long does it take?",
    a: "A wash or a vacuum-only is quick. Bronze is a few hours. Silver and Gold are longer, because shampooed fabric needs drying time and a wax and buff can't be rushed. We give you a realistic window when you book.",
  },
  {
    q: "Do you work on trucks and SUVs?",
    a: "Constantly. Bigger vehicles take longer, which is why Silver and Gold are priced by size — you'll have the number before we start.",
  },
  {
    q: "How do I book?",
    a: "The quote form takes about a minute: tell us the vehicle, the package or the problem, add photos if you have them, and we come back with a number and a time. Or call, if you'd rather talk to a person.",
  },
];

/** The homepage "how it works" list. */
export const homeProcess = [
  {
    title: "Tell us the vehicle and what it needs",
    body: "Bronze, Silver, Gold, interior, or a wash — or just describe the state it's in. Photos help.",
  },
  {
    title: "Get a number",
    body: "For your vehicle, for that package. Silver and Gold are sized to the car.",
  },
  {
    title: "Drop it off",
    body: "We tell you how long it'll take before you hand over the keys.",
  },
  {
    title: "We detail it in order",
    body: "Wash, interior, then paint on Gold. The small stuff gets done by hand.",
  },
  {
    title: "Walk around at pickup",
    body: "See what came out. Hear how to keep it that way. Drive off.",
  },
];
