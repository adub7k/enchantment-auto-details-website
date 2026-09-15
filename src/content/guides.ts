/**
 * The /guides SEO hub.
 *
 * Plain data, server-rendered — no CMS. To publish: add an entry (newest
 * first), push. Every guide must earn its place by answering the search
 * honestly and then linking to the service page that solves the problem.
 *
 * Copy rules are the same as everywhere else: no prices, no brand names, no
 * warranty claims, no invented statistics, no "we've done hundreds". Where a
 * number would help, describe what drives it instead of inventing one.
 * Services mentioned are ONLY the ones on the menu — no coatings, no
 * correction, no tint.
 */

export type Block =
  | { t: "p"; x: string }
  | { t: "h2"; x: string }
  | { t: "h3"; x: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "note"; x: string }
  /** Inline link out to a service page — this is the conversion path. */
  | { t: "cta"; x: string; to: string; label: string };

export type GuideCategory = "Full Detail" | "Interior" | "Exterior" | "New Mexico";

export type Guide = {
  slug: string;
  title: string;
  /** Shorter label for nav and footer lists. */
  navTitle: string;
  description: string;
  /** ISO date; drives sort order and Article schema. */
  date: string;
  minutes: number;
  category: GuideCategory;
  /** Service page this guide should feed. */
  service: string;
  body: Block[];
};

export const GUIDE_CATEGORIES: GuideCategory[] = [
  "Full Detail",
  "Interior",
  "Exterior",
  "New Mexico",
];

export const guides: Guide[] = [
  /* ------------------------------------------------------ full detail -- */
  {
    slug: "bronze-silver-or-gold-which-detail-package",
    title: "Bronze, Silver or Gold: which detail package does your car actually need?",
    navTitle: "Which package do I need?",
    description:
      "Three packages, one honest way to choose. What each one adds, the signs your car needs the next tier up, and when the cheaper one is genuinely the right call.",
    date: "2026-09-14",
    minutes: 5,
    category: "Full Detail",
    service: "full-detail",
    body: [
      {
        t: "p",
        x: "The most common question we get isn't 'how much' — it's 'which one'. Our three full-detail packages build on each other, so the question is really: how far into the car does the dirt go? Here's how to answer that from the driver's seat, before you call.",
      },
      { t: "h2", x: "What every package includes" },
      {
        t: "p",
        x: "Bronze, Silver and Gold all start with the same job: a spot-free wash and dry outside; the interior and trunk vacuumed; vents, cup holders and door panels cleaned by hand; door jambs; the windows inside and out; plastics and trim shined; wheel wells cleaned and tires shined. That's a full clean, and for a lot of cars it's all they need.",
      },
      { t: "h2", x: "Signs you need Silver" },
      {
        t: "ul",
        items: [
          "There are stains on the seats or carpet that a vacuum has never touched",
          "The car smells like something — a spill, a pet, a habit",
          "You can see a difference in colour between the carpet under the mats and the carpet around them",
          "The headliner has marks near the visors or the grab handles",
        ],
      },
      {
        t: "p",
        x: "Silver is Bronze plus the carpets and seats shampooed and the headliner cleaned. Shampooing is the step that pulls dirt out of the fibres rather than off the top of them, and it's the only thing that gets rid of a smell instead of covering it.",
      },
      { t: "h2", x: "Signs you need Gold" },
      {
        t: "ul",
        items: [
          "The paint looks hazy or swirled in direct sun, especially on dark colours",
          "You're about to sell the car, or show it",
          "The engine bay has never been cleaned and you'd like it to look like it has",
          "It's the once-a-year reset and you want everything done in one visit",
        ],
      },
      {
        t: "p",
        x: "Gold is Silver plus the seatbelts cleaned, a one-pass wax and buff, a one-pass scratch remover for light scratches, the exhaust tips polished and the engine bay detailed. It's not a full paint correction — it's the freshen-up that brings the gloss back and takes out the light marks.",
      },
      { t: "h2", x: "When Bronze is the right answer" },
      {
        t: "p",
        x: "If the car is used normally, washed occasionally and has no stains or smells, Bronze is the honest recommendation and we'll make it. Spending on Silver to shampoo seats that aren't dirty doesn't make the car cleaner. Bronze every couple of months keeps a car in the state where it never needs more than Bronze.",
      },
      {
        t: "note",
        x: "Silver and Gold are priced by vehicle size — a compact isn't a three-row SUV. Whichever you pick, you get the number for your car before we start.",
      },
      {
        t: "cta",
        x: "Still not sure? Tell us the vehicle and what's wrong with it and we'll recommend one.",
        to: "/full-detail",
        label: "See the full detail packages",
      },
    ],
  },
  {
    slug: "detailing-before-you-sell-your-car",
    title: "Detailing a car before you sell it: what actually moves the price",
    navTitle: "Detailing before you sell",
    description:
      "A detailed car photographs better, inspects better and sells faster. Here's what buyers look at first, what to fix and what to leave, and why the engine bay matters more than you think.",
    date: "2026-09-13",
    minutes: 5,
    category: "Full Detail",
    service: "full-detail",
    body: [
      {
        t: "p",
        x: "A buyer decides how they feel about a car in the first thirty seconds — usually from the photos, before they've even seen it. A detail is the highest-return day of work you can put into a car you're about to sell, and most sellers skip it or do half of it.",
      },
      { t: "h2", x: "What a buyer looks at, in order" },
      {
        t: "ol",
        items: [
          "The paint in the listing photos. Hazy, swirled or water-spotted paint reads as 'neglected' whatever the mileage says.",
          "The driver's seat and the carpet under their feet when they open the door.",
          "The engine bay. It's the proxy buyers use for 'has this been looked after' — a clean one answers the question before they ask it.",
          "The glass, the door jambs, the cup holders. The small stuff that says nobody cut corners.",
        ],
      },
      { t: "h2", x: "What a Gold detail does for a sale" },
      {
        t: "p",
        x: "Gold is built for exactly this. The wax and buff brings the gloss back for the photos. The one-pass scratch remover takes out the light swirls that show up in daylight. The seats and carpets are shampooed, the headliner and seatbelts cleaned, the exhaust polished and the engine bay detailed. Every place a buyer looks, done.",
      },
      { t: "h2", x: "What to leave alone" },
      {
        t: "ul",
        items: [
          "Deep scratches that catch a fingernail. Polish won't fix them; honest disclosure beats a botched touch-up.",
          "Cracked dashboards and torn seats. Clean them, don't hide them.",
          "Greasy tire shine and dressing on the pedals. Buyers notice slick surfaces and it reads as 'covering something up'.",
        ],
      },
      { t: "h2", x: "Timing" },
      {
        t: "p",
        x: "Detail the car, then take the photos the same day in soft light — early morning or late afternoon, out of direct sun. Between then and the sale, a spot-free exterior wash keeps it looking like the pictures.",
      },
      {
        t: "cta",
        x: "Selling soon? Tell us the vehicle and we'll book a Gold detail around your listing date.",
        to: "/full-detail",
        label: "See the Gold package",
      },
    ],
  },

  /* --------------------------------------------------------- interior -- */
  {
    slug: "why-your-car-still-smells-after-vacuuming",
    title: "Why your car still smells after you've vacuumed it",
    navTitle: "Why it still smells after vacuuming",
    description:
      "The vacuum takes the crumbs. The smell lives somewhere else. Where it actually is, why air fresheners make it worse, and what a shampoo does that nothing else can.",
    date: "2026-09-12",
    minutes: 4,
    category: "Interior",
    service: "interior-detail",
    body: [
      {
        t: "p",
        x: "You vacuumed it. You hung the tree from the mirror. Two days later it smells the same. That's not a cleaning failure — a vacuum was never going to touch the problem, because the problem isn't on the surface.",
      },
      { t: "h2", x: "Where the smell actually is" },
      {
        t: "p",
        x: "Smells are trapped in fibres and foam: the carpet pad under the floor mats, the padding inside the seats, the cloth of the headliner. A spilled drink soaks through the carpet into the pad underneath; a dog's oils work into the seat fabric; smoke settles into the headliner, which nobody ever cleans. A vacuum pulls loose dirt off the top layer and leaves all of that exactly where it was.",
      },
      { t: "h2", x: "Why fresheners make it worse" },
      {
        t: "p",
        x: "An air freshener adds a smell on top of a smell. In a hot car the two cook together into something new, and once the freshener fades you're back where you started — usually with a sweet, stale note added. Masking never works for long because the source is still there.",
      },
      { t: "h2", x: "What a shampoo does" },
      {
        t: "p",
        x: "Shampooing carpets and seats works cleaner into the fibres, breaks down what's in them, and extracts it — the dirt, the residue, the smell, all pulled out together. The headliner gets cleaned the same way. That's the whole interior-detail step Bronze doesn't include and Silver does, and it's the only thing that fixes a smell rather than hiding it.",
      },
      { t: "h2", x: "Then keep it that way" },
      {
        t: "ul",
        items: [
          "Deal with spills the same day — the longer they sit, the further they soak",
          "A vacuum-only between details keeps the loose dirt from working in",
          "Leave a window cracked after a shampoo so the fabric dries fully",
        ],
      },
      {
        t: "cta",
        x: "Got a smell that won't leave? Tell us what it is and we'll shampoo it out.",
        to: "/interior-detail",
        label: "See the interior detail",
      },
    ],
  },
  {
    slug: "desert-dust-in-vents-and-seams",
    title: "Desert dust in the vents: why a New Mexico interior needs more than a vacuum",
    navTitle: "Dust in the vents and seams",
    description:
      "Fine high-desert dust gets into places a vacuum can't reach and settles back on every surface within a day. Where it hides, why wiping spreads it, and how a detail actually gets it out.",
    date: "2026-09-11",
    minutes: 4,
    category: "Interior",
    service: "interior-detail",
    body: [
      {
        t: "p",
        x: "Anyone who's owned a car here knows the routine: wipe the dash on Saturday, run a finger through fresh dust on Tuesday. New Mexico dust is fine enough to get through door seals and vents, and it settles into every seam and crevice in the cabin. Wiping the surfaces doesn't remove it — it just moves the visible layer.",
      },
      { t: "h2", x: "Where it hides" },
      {
        t: "ul",
        items: [
          "Inside the air vents, on the louvres and behind them — every time the fan runs it blows back out",
          "The seams of the seats and the stitching on the dash and door panels",
          "Cup holders, the tray under the shifter, the slot the phone sits in",
          "The seat rails and the gap between the seat and the console",
          "The door jambs and the sills you step over",
        ],
      },
      { t: "h2", x: "Why wiping spreads it" },
      {
        t: "p",
        x: "A dry cloth on a dusty dash pushes grit around and into the grain of the plastic. A damp cloth turns it into a film. Neither gets into the vents or the seams, which is where the next day's dust comes from. It has to be brushed out, blown out and lifted — in that order — before any surface is cleaned or dressed.",
      },
      { t: "h2", x: "How a detail handles it" },
      {
        t: "p",
        x: "Vacuum first, including the trunk and under the seats. Then the vents, cup holders, door panels and consoles cleaned by hand with brushes so the dust comes out of the seams instead of being pressed further in. Only then do the plastics and trim get shined — dressing over dust is how you get that streaky, grey finish. It's the same sequence on every one of our packages and on the interior-only detail.",
      },
      {
        t: "note",
        x: "After a detail, a quick vacuum-only every few weeks keeps the dust from building up again in the seams. It's the cheapest maintenance there is.",
      },
      {
        t: "cta",
        x: "Dust in everything? That's what the interior detail is for.",
        to: "/interior-detail",
        label: "See the interior detail",
      },
    ],
  },
  {
    slug: "sun-damaged-dashboard-how-to-stop-it",
    title: "Sun-faded dashboards and door panels: what causes it and how to slow it down",
    navTitle: "Sun-faded dash and trim",
    description:
      "High-altitude UV turns black plastics grey and dries out the dash. Why it happens faster here, why the wrong dressing makes it worse, and how a clean-then-shine routine keeps trim looking new.",
    date: "2026-09-10",
    minutes: 4,
    category: "Interior",
    service: "interior-detail",
    body: [
      {
        t: "p",
        x: "Look at any ten-year-old car that's lived in New Mexico and the dash top will tell you: grey, dull, maybe cracked along the defroster vents. The sun did that. At our altitude, with a sky that's clear most of the year, ultraviolet works on interior plastics harder than it does in most of the country.",
      },
      { t: "h2", x: "What UV does to plastic and vinyl" },
      {
        t: "p",
        x: "Interior plastics and vinyl contain plasticisers that keep them flexible and dark. UV breaks those down. The surface loses its oils, goes chalky and lighter in colour, and eventually gets brittle enough to crack. Heat cycling — a cabin that hits oven temperatures every afternoon and cools every night — speeds it up.",
      },
      { t: "h2", x: "Why the wrong dressing makes it worse" },
      {
        t: "p",
        x: "The glossy, oily dressings sold at the gas station look good for a day. They attract dust, they go greasy in the heat, and some of them dry the plastic out further once they've evaporated. Layer them over dirt and you get a grey, streaky film that's worse than the bare plastic. Trim needs to be cleaned before it's shined, every time.",
      },
      { t: "h2", x: "Clean, then shine" },
      {
        t: "ul",
        items: [
          "Dust and old product brushed and cleaned off the plastics first",
          "A dressing that leaves a clean, matte-to-satin finish — not a wet shine",
          "Door panels, console and dash done the same way so nothing looks mismatched",
        ],
      },
      {
        t: "p",
        x: "That's the 'shine plastics and trim' line on every one of our packages — and the order it's done in is the whole point.",
      },
      { t: "h2", x: "Between details" },
      {
        t: "ul",
        items: [
          "Park in shade or a garage when you can; a sunshade in the windshield makes a real difference to dash temperature",
          "Don't wipe a dusty dash with a dry cloth — it grinds the dust in",
          "Book a Bronze or an interior detail before summer so the trim goes into the hot months clean and dressed",
        ],
      },
      {
        t: "cta",
        x: "Trim gone grey? A proper clean-and-shine is part of every detail.",
        to: "/interior-detail",
        label: "See the interior detail",
      },
    ],
  },

  /* --------------------------------------------------------- exterior -- */
  {
    slug: "hard-water-spots-on-car-paint",
    title:
      "Hard water spots on your paint: why New Mexico water is the problem and what 'spot-free' means",
    navTitle: "Hard water spots",
    description:
      "Those white rings on the hood after a wash or a sprinkler aren't dirt — they're minerals etched into the clear coat. Why it happens here, why they don't wipe off, and how a spot-free dry prevents them.",
    date: "2026-09-09",
    minutes: 4,
    category: "Exterior",
    service: "exterior-wash",
    body: [
      {
        t: "p",
        x: "Wash the car in the driveway on a sunny afternoon and by the time you've put the hose away the hood is covered in white rings. Rub at them and they don't move. That's not a bad wash — it's the water.",
      },
      { t: "h2", x: "What's actually in the water" },
      {
        t: "p",
        x: "New Mexico water is hard: it carries dissolved calcium and magnesium. When a drop of it dries on paint, the water evaporates and the minerals stay behind as a ring. On a hot panel this happens in seconds. Leave the rings long enough in the sun and they etch into the clear coat — at that point they're not sitting on the paint, they're in it.",
      },
      { t: "h2", x: "Where they come from" },
      {
        t: "ul",
        items: [
          "Washing the car in the sun and letting it air-dry",
          "Lawn sprinklers hitting a parked car every morning",
          "Automatic washes that leave the car dripping wet in the exit lane",
          "Rain during a dust storm — the drops carry dust and dry as dirty spots",
        ],
      },
      { t: "h2", x: "What 'spot-free' means" },
      {
        t: "p",
        x: "A spot-free wash and dry means the car is washed, rinsed and dried before the water can evaporate on the paint. The minerals never get the chance to settle. That drying step is most of the difference between a hand wash and a car wash, and it's why every one of our packages and the standalone foam wash are done that way.",
      },
      { t: "h2", x: "If you already have spots" },
      {
        t: "p",
        x: "Fresh spots on the surface come off with a proper wash. Older spots that have started to etch need the paint worked — the one-pass wax and buff in the Gold package brings most of them back. Deep etching that's been baked in for a summer may need more than a detail, and we'll tell you honestly if that's what you've got.",
      },
      {
        t: "cta",
        x: "Tired of the rings? Book a spot-free foam wash.",
        to: "/exterior-wash",
        label: "See the exterior wash",
      },
    ],
  },
  {
    slug: "hand-wash-vs-automatic-car-wash",
    title: "Hand wash vs the automatic car wash: what the brushes are doing to your paint",
    navTitle: "Hand wash vs automatic",
    description:
      "The tunnel wash is fast and cheap, and it's where most swirl marks come from. What actually happens in there, what a foam hand wash does differently, and when the automatic is genuinely fine.",
    date: "2026-09-08",
    minutes: 4,
    category: "Exterior",
    service: "exterior-wash",
    body: [
      {
        t: "p",
        x: "Stand a dark car in direct sun and look at the paint from an angle. If you see a haze of fine circular scratches, that's swirl marks — and on most cars they came from the car wash.",
      },
      { t: "h2", x: "What the tunnel does" },
      {
        t: "p",
        x: "The spinning brushes and cloth strips in an automatic wash carry the grit from every car that went through before yours. Pressed against your paint at speed, that grit acts like fine sandpaper. Each visit adds a few more scratches; over a year they add up to the haze. Touchless washes avoid the brushes but lean on strong chemicals and still leave the car dripping — which, with our hard water, means spots.",
      },
      { t: "h2", x: "What a foam hand wash does differently" },
      {
        t: "ol",
        items: [
          "Foam goes on first and sits, loosening the dirt so it lifts off rather than being dragged across the paint.",
          "The car is washed by hand with clean mitts and water, panel by panel, wheels and lower doors included.",
          "It's rinsed and dried spot-free before the sun can dry it, so no mineral rings.",
          "The glass is cleaned both sides and the tires dressed to a clean finish.",
        ],
      },
      { t: "h2", x: "When the automatic is fine" },
      {
        t: "p",
        x: "Honestly: a work truck with paint you don't care about, or a rental. If the car is anything you'd like to look good in five years, the brushes cost more in the long run than the wash saves.",
      },
      { t: "h2", x: "If the swirls are already there" },
      {
        t: "p",
        x: "A wash won't remove them — that's what the one-pass wax and buff and scratch remover in the Gold package are for. A wash will stop adding to them, which is the point of switching.",
      },
      {
        t: "cta",
        x: "Want the car washed without the scratches? Book a foam wash.",
        to: "/exterior-wash",
        label: "See the exterior wash",
      },
    ],
  },

  /* ------------------------------------------------------- new mexico -- */
  {
    slug: "how-often-to-detail-a-car-in-new-mexico",
    title: "How often should you detail a car in New Mexico?",
    navTitle: "How often to detail here",
    description:
      "Dust, hard water, high-altitude sun and a monsoon season: the desert works on a car harder than most places. A realistic detailing schedule by season, and which package fits each visit.",
    date: "2026-09-07",
    minutes: 5,
    category: "New Mexico",
    service: "full-detail",
    body: [
      {
        t: "p",
        x: "There's no single right answer — it depends on where the car parks and how it's used — but New Mexico gives a car four separate problems that mild, cloudy climates don't, and a schedule that respects them keeps a car looking new for a lot less than fixing it later.",
      },
      { t: "h2", x: "The four things working on your car" },
      {
        t: "ul",
        items: [
          "Dust. Fine, constant, and inside the cabin as well as on the paint.",
          "Hard water. Every drop that dries on the paint leaves minerals behind.",
          "Sun. High altitude and clear skies mean UV that fades trim, dries dashboards and dulls paint faster than at sea level.",
          "Monsoon season. Late-summer storms drop dust and then rain on it — mud spots on every panel, grit in every seam.",
        ],
      },
      { t: "h2", x: "A realistic schedule" },
      {
        t: "h3",
        x: "Every two to three weeks: an exterior wash",
      },
      {
        t: "p",
        x: "A spot-free foam wash keeps dust from bonding to the paint and stops water spots before they etch. Add a vacuum-only if the inside needs it. This is the habit that makes everything below cheaper.",
      },
      { t: "h3", x: "Every two to three months: Bronze" },
      {
        t: "p",
        x: "The full clean — wash, vacuum, vents, jambs, glass, trim, tires. Often enough that the dust never builds up in the seams and the trim never goes grey.",
      },
      { t: "h3", x: "Once or twice a year: Silver or Gold" },
      {
        t: "p",
        x: "Silver when the seats and carpets need shampooing — after a summer of kids and dogs, or after monsoon season. Gold once a year for the wax and buff, the light-scratch removal and the engine bay: a reset that puts the paint back where it was.",
      },
      { t: "h2", x: "Adjust for where it parks" },
      {
        t: "p",
        x: "A garaged car can stretch every interval. A car that lives outside under a tree, near a sprinkler or in a dirt lot should shorten them — particularly the wash, because that's the one that prevents the damage the others have to fix.",
      },
      {
        t: "cta",
        x: "Not sure where your car is on that schedule? Tell us how it's used and we'll suggest a package.",
        to: "/full-detail",
        label: "See the detail packages",
      },
    ],
  },
];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
export const guidesForService = (service: string) => guides.filter((g) => g.service === service);
