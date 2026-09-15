/**
 * Per-service page content.
 *
 * Three services, straight off the owner's service menu (2026-09-14):
 * the Bronze / Silver / Gold full details, the interior-only detail (plus
 * vacuum-only), and the exterior foam wash. Nothing else is offered and
 * nothing else is mentioned — no coatings, no paint correction, no tint.
 *
 * Copy rules: NO PRICES (owner's call — the menu numbers live in ShopFlow
 * for booking and are hidden on the site), no product brands, no warranty
 * claims, no certification claims, no "years of experience". Every one of
 * those lives in site.ts → unverified until the owner confirms it. Describe
 * what the shop DOES — the menu is precise about that — and how it works.
 */

import { CITY } from "@/config/site";

export type GalleryTag = "full" | "interior" | "exterior";

/** Literal route paths, so <Link to={service.route}> stays type-safe. */
export type ServiceRoute = "/full-detail" | "/interior-detail" | "/exterior-wash";

export type ServiceContent = {
  slug: string;
  route: ServiceRoute;
  key: GalleryTag;
  /** Must match a lead-form option in ShopFlow so the CRM tags it correctly. */
  leadValue: string;
  serviceName: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  sub: string;
  /** Owner-photo slot (config/images.ts → ShopFlow → Settings → Website Photos). */
  imageSlot: "service_full" | "service_interior" | "service_exterior";
  cardBlurb: string;
  cardBenefits: string[];
  problem: { title: string; body: string; costs: { label: string; body: string }[] };
  benefits: { title: string; body: string }[];
  options?: {
    title: string;
    intro: string;
    items: { name: string; tag: string; body: string; bestFor: string; includes: string[] }[];
  };
  truths?: { does: string[]; doesNot: string[] };
  included: string[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  quote: { heading: string; sub: string };
  /** Service-specific options for the goals step of the quote form. */
  goalOptions: string[];
  /** Hint on the photo step of the quote form. */
  photoHint: string;
  related: string[];
};

/** The Bronze base list, exactly as the menu words it. Silver and Gold build on it. */
const BRONZE_LIST = [
  "Vacuum interior and trunk",
  "Clean vents, cup holders, door panels and the small stuff",
  "Spot-free wash and dry",
  "Door jambs cleaned",
  "Windows cleaned inside and out",
  "Plastics and trim shined",
  "Wheel wells cleaned, tires shined",
];

export const services: ServiceContent[] = [
  /* ====================================================== FULL DETAIL ==== */
  {
    slug: "full-detail",
    route: "/full-detail",
    key: "full",
    leadValue: "Full Detail",
    serviceName: "Full Detail",
    navLabel: "Full Detail — Bronze · Silver · Gold",
    metaTitle: `Full Car Detailing in ${CITY} | Bronze, Silver & Gold Packages — Enchantment Auto Details`,
    metaDescription: `Inside-and-out car detailing in ${CITY}. Three packages — Bronze, Silver, Gold — from a spot-free wash and full vacuum up to shampooed seats, a wax and buff and a detailed engine bay. Free quote.`,
    eyebrow: `Full Detail · ${CITY}`,
    headline: "The whole car, inside and out. Pick how deep.",
    sub: "Every full detail starts the same way: a spot-free wash and dry, the interior and trunk vacuumed, vents and cup holders and door panels cleaned, glass done both sides, trim and tires dressed. Silver adds shampooed carpets and seats. Gold adds a wax and buff, light-scratch removal and the engine bay. You choose the package; we do the same careful job on all three.",
    imageSlot: "service_full",
    cardBlurb:
      "Bronze, Silver or Gold — a proper inside-and-out detail, scaled to how much the car needs.",
    cardBenefits: [
      "Spot-free wash & dry",
      "Full vacuum, vents, jambs",
      "Shampoo on Silver+",
      "Wax & engine bay on Gold",
    ],
    problem: {
      title: "What a New Mexico car collects, and where it hides",
      body: "A car that lives here gets worked on by the desert every day it's parked outside. The dirt you can see is the easy part.",
      costs: [
        {
          label: "Dust in every seam",
          body: "Fine desert dust settles into vents, cup holders, seat rails and the gap under the console. A quick vacuum skims the carpet and leaves the rest — which is why a car can be 'clean' and still feel dusty a day later.",
        },
        {
          label: "Sun-baked interiors",
          body: "High-altitude UV dulls dashboards and door panels and turns old dressings grey and greasy. Plastics and trim need cleaning before they need shining — which is the order we do it in.",
        },
        {
          label: "Water spots that don't wipe off",
          body: "Hard water dried on hot paint leaves mineral rings. A spot-free wash and dry is the difference between a car that looks washed and one that looks streaked by lunchtime.",
        },
        {
          label: "Life happening in the car",
          body: "Kids, dogs, job sites, coffee. None of it is a problem — it just decides whether you need Bronze, or Silver with the seats shampooed, or Gold with the works.",
        },
      ],
    },
    benefits: [
      {
        title: "One wash standard on every package",
        body: "Bronze, Silver and Gold all get the same spot-free wash and dry, the same jambs and glass and wheel wells. The packages differ in how deep the interior goes and whether the paint gets worked — not in how carefully the car is washed.",
      },
      {
        title: "The interior gets properly reached",
        body: "Vacuum the interior and the trunk, then the vents, cup holders, door panels and consoles by hand. It's the small stuff that makes a car feel detailed rather than tidied.",
      },
      {
        title: "Shampoo where it counts (Silver and Gold)",
        body: "Carpets and cloth seats shampooed, headliner cleaned. This is the step that takes out what a vacuum can't — ground-in dirt, spills, the smell that comes with them.",
      },
      {
        title: "Wax, buff and light-scratch removal (Gold)",
        body: "A one-pass wax and buff brings the gloss back, and a one-pass scratch remover takes out the light swirls and marks that make paint look hazy in the sun. Not a full paint correction — a proper freshen-up.",
      },
      {
        title: "Engine bay and exhaust (Gold)",
        body: "The engine bay detailed and the exhaust tips polished. The two places a buyer or an enthusiast looks first, and the two most people never touch.",
      },
      {
        title: "Priced by the vehicle, quoted before we start",
        body: "Silver and Gold are priced by vehicle size — a compact isn't a full-size truck. You get the number for your car before anything starts, not an invoice with surprises on it.",
      },
    ],
    options: {
      title: "Bronze, Silver or Gold",
      intro:
        "Three packages, each one built on the last. The honest guide: Bronze for a car that's basically looked after, Silver when the seats and carpets need real cleaning, Gold when you want the paint and the engine bay done too — or the car is about to be sold or shown.",
      items: [
        {
          name: "Bronze",
          tag: "The full clean",
          body: "Everything a car needs to feel new again on a normal week: a spot-free wash and dry outside, a full vacuum and hand-clean inside, glass, jambs, trim and tires.",
          bestFor: "Daily drivers, regular upkeep, a car that's used but not abused",
          includes: BRONZE_LIST,
        },
        {
          name: "Silver",
          tag: "Bronze + shampoo",
          body: "The Bronze detail plus the carpets and seats shampooed and the headliner cleaned. For interiors with ground-in dirt, spills or a smell — the things a vacuum leaves behind. Priced by vehicle size.",
          bestFor: "Family cars, pets, work trucks, anything that's been lived in",
          includes: [...BRONZE_LIST, "Carpets and seats shampooed", "Headliner cleaned"],
        },
        {
          name: "Gold",
          tag: "The works",
          body: "The Silver detail plus seatbelts cleaned, a one-pass wax and buff, a one-pass scratch remover for light scratches, the exhaust polished and the engine bay detailed. Priced by vehicle size.",
          bestFor: "Selling or showing the car, a once-a-year reset, a car you're proud of",
          includes: [
            ...BRONZE_LIST,
            "Carpets and seats shampooed",
            "Seatbelts and headliner cleaned",
            "Wax and buff (one pass)",
            "Scratch remover (one pass — light scratches)",
            "Exhaust polished",
            "Engine bay detailed",
          ],
        },
      ],
    },
    truths: {
      does: [
        "Wash and dry the car without water spots",
        "Get the dust out of the vents, seams and cup holders — not just the carpet",
        "Shampoo carpets and seats on Silver and Gold",
        "Bring the gloss back and take out light scratches on Gold",
        "Leave the engine bay and exhaust looking as good as the rest (Gold)",
      ],
      doesNot: [
        "Remove deep scratches that catch a fingernail — that's paint work, not polish",
        "Fix sun-cracked dashboards or torn seats",
        "Make a neglected interior new in a single visit — some stains are permanent",
        "Come with a fixed price before we know the vehicle and its condition",
        "Take an hour. A full detail takes as long as the car needs",
      ],
    },
    included: [
      "Spot-free wash and dry",
      "Interior and trunk vacuumed",
      "Vents, cup holders, door panels and consoles cleaned",
      "Door jambs cleaned",
      "Windows cleaned inside and out",
      "Plastics and trim shined, wheel wells cleaned, tires shined",
      "A walk-around at pickup so you see what came out",
    ],
    process: [
      {
        title: "Tell us the vehicle and the package",
        body: "Year, make, model, and Bronze, Silver or Gold — or tell us what's wrong with it and we'll recommend one.",
      },
      {
        title: "Get a number",
        body: "Silver and Gold are priced by vehicle size, so the quote is for your car, not a generic one.",
      },
      {
        title: "Book it in",
        body: "Bronze is a few hours. Silver and Gold are longer — we'll tell you how long before you drop it off.",
      },
      {
        title: "We work through it in order",
        body: "Wash first, interior next, paint last on Gold. Order matters: you don't dress trim before the dust is out.",
      },
      {
        title: "Walk around at pickup",
        body: "We show you what came out, what didn't, and what to do to keep it that way.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between Bronze, Silver and Gold?",
        a: "Bronze is the full wash-and-interior clean. Silver adds shampooed carpets and seats and a cleaned headliner. Gold adds seatbelts, a one-pass wax and buff, a one-pass light-scratch remover, polished exhaust tips and a detailed engine bay. Every package gets the same spot-free wash, vacuum, vents, jambs, glass, trim and tires.",
      },
      {
        q: "Which one should I pick?",
        a: "If the car is used normally and just needs a proper clean, Bronze. If the seats or carpets have stains, ground-in dirt or a smell, Silver — a vacuum won't fix those. If you want the paint freshened and the engine bay done, or you're selling the car, Gold. Tell us the condition and we'll say honestly which one it needs.",
      },
      {
        q: "How long does a full detail take?",
        a: "Bronze is a few hours of solid work. Silver and Gold take longer because shampooed seats and carpets need time and a wax and buff can't be rushed. We'll give you a realistic window when you book rather than a number that makes us hurry.",
      },
      {
        q: "Why are Silver and Gold priced by vehicle size?",
        a: "Because a full-size truck or three-row SUV has a lot more carpet, seat and paint than a compact. Bronze is one price; Silver and Gold are quoted for the size of your vehicle so nobody pays for a car they don't have.",
      },
      {
        q: "Will the Gold wax and scratch remover fix my paint?",
        a: "It will bring the gloss back and take out the light swirls and marks you can't catch a fingernail in. Deeper scratches that have gone through the clear coat need paint, not polish — we'll tell you which yours are at drop-off.",
      },
      {
        q: "Do you do trucks and SUVs?",
        a: "Constantly. Bigger vehicles take longer, which is exactly why Silver and Gold are priced by size — you'll have the number before we start.",
      },
      {
        q: "Can you get pet hair out?",
        a: "Yes. Embedded pet hair in cloth seats is one of the more time-consuming jobs there is, so mention it when you book and we'll allow for it — usually that means Silver.",
      },
    ],
    quote: {
      heading: "Get a full detail quote",
      sub: "Tell us the vehicle and the package — or the condition, and we'll recommend one. Photos of the worst spots get you a more accurate number.",
    },
    goalOptions: [
      "Bronze — the full clean",
      "Silver — shampoo seats & carpets",
      "Gold — the works",
      "Not sure — recommend one",
      "Getting it ready to sell",
      "Regular upkeep",
    ],
    photoHint:
      "A photo of the interior and one of the paint help us tell you whether it's a Bronze, Silver or Gold job.",
    related: ["interior-detail", "exterior-wash"],
  },

  /* =================================================== INTERIOR DETAIL === */
  {
    slug: "interior-detail",
    route: "/interior-detail",
    key: "interior",
    leadValue: "Interior Detail",
    serviceName: "Interior Detail",
    navLabel: "Interior Detail",
    metaTitle: `Interior Car Detailing in ${CITY} | Shampoo, Vents, Headliner — Enchantment Auto Details`,
    metaDescription: `Interior-only detailing in ${CITY}: vents, door panels and cup holders deep-cleaned, carpets and seats shampooed, headliner cleaned. Or a quick vacuum-only. Free quote.`,
    eyebrow: `Interior Detail · ${CITY}`,
    headline: "Just the inside, done properly.",
    sub: "Vents, door panels and cup holders deep-cleaned. Carpets and seats shampooed. Headliner cleaned. For the car that's fine outside and a mess inside — or for anyone who'd rather wash the outside themselves. There's a vacuum-only option too, for the weeks it just needs the crumbs gone.",
    imageSlot: "service_interior",
    cardBlurb:
      "Vents, panels and cup holders deep-cleaned, seats and carpets shampooed, headliner done. Or a quick vacuum-only.",
    cardBenefits: [
      "Deep-clean vents & panels",
      "Shampoo carpets & seats",
      "Headliner cleaned",
      "Vacuum-only option",
    ],
    problem: {
      title: "Why the inside never quite feels clean",
      body: "Most people vacuum the carpet and wipe the dash. The dirt that makes a car feel old is everywhere else.",
      costs: [
        {
          label: "Vents and seams",
          body: "Desert dust settles into the vents, the seams of the seats, the gap around the shifter and every cup holder. It doesn't vacuum out — it needs brushes, air and the right cleaner.",
        },
        {
          label: "Ground-in carpet and cloth",
          body: "Dirt gets walked into the carpet and sat into the seats. Once it's in the fibres a vacuum only takes the top layer — shampooing is what pulls it out.",
        },
        {
          label: "The headliner",
          body: "Nobody cleans it, so it collects hands, hair product, smoke and years of dust. A clean headliner is half of why a shampooed interior smells new.",
        },
        {
          label: "Whatever the car's been through",
          body: "Spilled drinks, kid seats, dog hair, work boots. It's all fixable — it just decides whether it's a vacuum-only week or a full interior detail.",
        },
      ],
    },
    benefits: [
      {
        title: "Deep-cleaned, not wiped",
        body: "Vents, door panels, cup holders and consoles cleaned by hand with brushes, not a cloth dragged over the top. This is the difference between a clean car and a detailed one.",
      },
      {
        title: "Shampooed carpets and seats",
        body: "Cloth seats and carpets shampooed to lift out the dirt that's worked into the fibres — stains, spills, ground-in grit and the smells that come with them.",
      },
      {
        title: "Headliner included",
        body: "The one surface everyone forgets. Cleaned as part of the job, because an interior isn't clean if the ceiling isn't.",
      },
      {
        title: "Vacuum-only when that's all it needs",
        body: "A quick, thorough vacuum of the interior for the weeks between details. Honest option for a car that's basically clean.",
      },
      {
        title: "Pairs with an exterior wash",
        body: "Add a foam wash and the whole car is done in one visit. If you want the full works, that's the Bronze, Silver or Gold package.",
      },
      {
        title: "Pet hair, sand, spills — all normal",
        body: "Tell us what's in there and we'll allow the time. Nothing that comes through the door surprises us.",
      },
    ],
    options: {
      title: "Interior detail or vacuum only",
      intro: "Two ways to do the inside. One is a reset; the other is upkeep.",
      items: [
        {
          name: "Interior Detail",
          tag: "The reset",
          body: "Vents, door panels and cup holders deep-cleaned, carpets and seats shampooed, headliner cleaned. The inside of the car, properly.",
          bestFor: "Stains, smells, dust in everything, a car you've just bought used",
          includes: [
            "Vents, door panels and cup holders deep-cleaned",
            "Carpets and seats shampooed",
            "Headliner cleaned",
          ],
        },
        {
          name: "Vacuum Only",
          tag: "Upkeep",
          body: "A thorough vacuum of the interior. Quick, cheap and honest — for the weeks it just needs the crumbs and dust gone.",
          bestFor: "Between details, before a passenger, after the kids",
          includes: ["Interior vacuumed"],
        },
      ],
    },
    truths: {
      does: [
        "Get the dust out of vents, seams, cup holders and door panels",
        "Lift ground-in dirt and most stains out of carpets and cloth seats",
        "Clean the headliner most people have never touched",
        "Take the smell out that comes with all of the above",
        "Fit in a quick vacuum-only when that's all you need",
      ],
      doesNot: [
        "Remove every stain — some dyes and burns are permanent",
        "Repair torn seats, cracked dashes or broken trim",
        "Include the outside of the car — that's an exterior wash or a full detail",
        "Dry instantly after a shampoo; allow a few hours",
        "Come with a fixed price before we know the vehicle and its condition",
      ],
    },
    included: [
      "Interior vacuumed",
      "Vents deep-cleaned",
      "Door panels and cup holders deep-cleaned",
      "Carpets shampooed",
      "Seats shampooed",
      "Headliner cleaned",
    ],
    process: [
      {
        title: "Tell us what's in there",
        body: "Be honest — dog hair, a spilled latte, a smoker's car. Photos of the worst spots get you an accurate quote.",
      },
      {
        title: "We scope it",
        body: "Interior detail, or vacuum only. If the outside needs doing too, we'll suggest a package instead.",
      },
      {
        title: "Book it in",
        body: "A vacuum-only is quick. An interior detail is a few hours plus drying time for the shampoo.",
      },
      {
        title: "Vacuum, then hand-clean, then shampoo",
        body: "Dry dirt out first, then the panels and vents, then the fabric. Order matters.",
      },
      {
        title: "Pickup",
        body: "We'll show you what came out and what didn't, and how to keep it that way.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between an interior detail and a vacuum?",
        a: "A vacuum takes the loose dirt off the top of the carpet and seats. An interior detail cleans the vents, door panels and cup holders by hand, shampoos the carpets and seats to pull out what's worked into the fibres, and cleans the headliner. Different job, different result.",
      },
      {
        q: "Can you get stains out of the seats?",
        a: "Most of them. Shampooing lifts out dirt, drink spills and general grime. Some things — dye transfer, bleach, burns — are permanent, and we'll tell you at drop-off rather than promise a miracle.",
      },
      {
        q: "How long does it take to dry?",
        a: "Shampooed seats and carpets are damp when you collect the car and dry fully over a few hours, faster in our climate than most. Leave a window cracked if you can.",
      },
      {
        q: "Can you get pet hair out?",
        a: "Yes. It's one of the more time-consuming jobs there is, so mention it when you book and we'll allow for it.",
      },
      {
        q: "Do you clean leather?",
        a: "Yes — leather seats and panels are cleaned as part of an interior detail. Tell us the car has leather when you book so we bring the right products.",
      },
      {
        q: "Can I add an exterior wash?",
        a: "Yes. An interior detail plus a foam wash gets the whole car done in one visit. If you'd like the paint waxed or the engine bay done too, that's the Gold package.",
      },
    ],
    quote: {
      heading: "Get an interior quote",
      sub: "Tell us what the inside is like. Photos of the worst areas get you a much more accurate number.",
    },
    goalOptions: [
      "Full interior detail",
      "Vacuum only",
      "Pet hair",
      "Stains or a smell",
      "Just bought it used",
      "Add an exterior wash too",
    ],
    photoHint: "A photo of the seats and one of the floor tell us more than any description.",
    related: ["full-detail", "exterior-wash"],
  },

  /* ==================================================== EXTERIOR WASH ==== */
  {
    slug: "exterior-wash",
    route: "/exterior-wash",
    key: "exterior",
    leadValue: "Exterior Wash",
    serviceName: "Exterior Wash",
    navLabel: "Exterior Foam Wash",
    metaTitle: `Exterior Car Wash in ${CITY} | Spot-Free Foam Wash & Dry — Enchantment Auto Details`,
    metaDescription: `Hand foam wash in ${CITY}: spot-free wash and dry, glass cleaned, tires shined. No spinning brushes, no water spots. Book a wash or add it to an interior detail. Free quote.`,
    eyebrow: `Exterior Foam Wash · ${CITY}`,
    headline: "A spot-free wash. Not a car wash.",
    sub: "Foam, a proper wash, a spot-free dry, the glass cleaned and the tires shined. No spinning brushes putting swirls in your paint, and no hard water drying on it in the sun. For the weeks between details, or on its own.",
    imageSlot: "service_exterior",
    cardBlurb:
      "Foam wash, spot-free dry, glass and tire shine. Hand-done, no brushes — the upkeep wash between details.",
    cardBenefits: ["Foam wash", "Spot-free dry", "Glass cleaned", "Tire shine"],
    problem: {
      title: "What the automatic wash is doing to your car",
      body: "It's fast and it's cheap, and it's the reason most paint here looks hazy by year three.",
      costs: [
        {
          label: "Swirl marks",
          body: "Spinning brushes carry the grit from the last hundred cars. Every pass leaves fine circular scratches — the haze you see on dark paint in direct sun.",
        },
        {
          label: "Water spots",
          body: "Our water is hard. Let it dry on hot paint and the minerals etch in as rings that don't wipe off. A spot-free dry is the whole point of doing it by hand.",
        },
        {
          label: "Dust straight back on",
          body: "A car that leaves the tunnel wet picks up dust before it's dry. Dried properly, it stays clean for longer than it has any right to.",
        },
        {
          label: "The bits it misses",
          body: "Lower doors, behind the mirrors, the glass edges, the wheel faces. A machine washes a rectangle; a person washes a car.",
        },
      ],
    },
    benefits: [
      {
        title: "Foam first",
        body: "Foam loosens the dirt so it lifts off rather than getting dragged across the paint. It's the step that keeps a hand wash from putting in the swirls the tunnel does.",
      },
      {
        title: "Spot-free wash and dry",
        body: "Washed, rinsed and dried so hard water never sits on the paint. No rings, no streaks, no haze by the time you get home.",
      },
      {
        title: "Glass done properly",
        body: "Inside and out, including the top edge people miss. Clean glass is most of what makes a car feel clean from the driver's seat.",
      },
      {
        title: "Tires shined",
        body: "Dressed to a clean finish, not a greasy slinging shine that ends up down the side of the car.",
      },
      {
        title: "The upkeep wash",
        body: "This is what keeps a detailed car detailed. A wash every couple of weeks means the next full detail is Bronze, not Gold.",
      },
      {
        title: "Adds to any interior job",
        body: "Book it with an interior detail or a vacuum-only and the whole car leaves clean in one visit.",
      },
    ],
    truths: {
      does: [
        "Wash the car without adding swirl marks",
        "Dry it spot-free so hard water never marks the paint",
        "Clean the glass, inside and out",
        "Shine the tires and clean the wheel faces",
        "Keep a detailed car looking detailed between visits",
      ],
      doesNot: [
        "Remove existing swirls or scratches — that's the Gold package's wax and scratch remover",
        "Include the interior — add a vacuum-only or an interior detail",
        "Wax or protect the paint — a wash is a wash",
        "Fix oxidised or faded paint",
        "Get done in five minutes — a proper wash takes the time it takes",
      ],
    },
    included: ["Foam pre-wash", "Spot-free wash and dry", "Glass cleaned", "Tires shined"],
    process: [
      {
        title: "Tell us the vehicle",
        body: "Year, make, model — and whether you want the inside done at the same time.",
      },
      {
        title: "Book a slot",
        body: "A wash on its own is quick. Combined with an interior job we'll give you a window.",
      },
      {
        title: "Foam, wash, rinse",
        body: "Dirt loosened and lifted, not dragged. Wheels and lower doors get the attention the tunnel skips.",
      },
      {
        title: "Spot-free dry",
        body: "Dried before the sun gets to it. No rings, no streaks.",
      },
      {
        title: "Glass and tires, then pickup",
        body: "Glass both sides, tires dressed, and you're on your way.",
      },
    ],
    faqs: [
      {
        q: "What's a spot-free wash?",
        a: "A wash where the car is dried before hard water can evaporate on the paint and leave mineral rings. New Mexico water is hard enough that a car left to air-dry in the sun comes out looking worse than it went in. Drying it properly is most of the job.",
      },
      {
        q: "Why not just use the automatic car wash?",
        a: "Because the brushes carry the grit from every car before yours, and that's what puts the fine swirl marks in your paint. A hand foam wash lifts the dirt off instead of dragging it around. It takes longer and it's worth it.",
      },
      {
        q: "Does the wash include the inside?",
        a: "No — the exterior foam wash is outside only: wash, dry, glass and tires. Add a vacuum-only or an interior detail and the whole car gets done in the same visit.",
      },
      {
        q: "Does it include wax?",
        a: "No. The Gold package includes a one-pass wax and buff. The wash is the upkeep between those — it keeps the car clean, it doesn't add protection.",
      },
      {
        q: "How often should I wash the car?",
        a: "In our dust, every two to three weeks keeps a car looking detailed and stops dirt bonding to the paint. More often if it lives outside or you've driven through a monsoon storm.",
      },
      {
        q: "Do you wash trucks and SUVs?",
        a: "Yes. Bigger vehicles take a little longer and we'll tell you the number before we start.",
      },
    ],
    quote: {
      heading: "Book a wash",
      sub: "Tell us the vehicle and whether you want the inside done too. We'll confirm a time.",
    },
    goalOptions: [
      "Just a wash",
      "Wash + vacuum only",
      "Wash + interior detail",
      "Regular upkeep washes",
      "After a road trip or storm",
      "Not sure yet",
    ],
    photoHint:
      "Optional. A photo of the car helps if it's especially dirty or has something stuck on it.",
    related: ["full-detail", "interior-detail"],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
