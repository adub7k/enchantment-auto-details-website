import type { MotifKind } from "@/config/images";

/**
 * Designed stand-ins for photography.
 *
 * Every image slot reads a ShopFlow photo first, then a bundled owner photo,
 * and only then one of these — so a slot never shows stock and never shows
 * an empty box. They're built from the brand: near-black ground, a fine dot
 * grid, and the logo's red doing what each service does — foam beads for the
 * wash, seat stitching for the interior, a light sweep across paint for the
 * full detail.
 *
 * Motion is transform/opacity only, disabled under prefers-reduced-motion,
 * and deterministic (seeded) so server and client render the same markup.
 */

/** Deterministic pseudo-random so SSR and hydration agree. */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}
const r3 = (n: number) => Math.round(n * 1000) / 1000;

function RedDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <linearGradient id="ead-red" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.7 0.2 27)" />
          <stop offset="0.55" stopColor="oklch(0.58 0.22 28)" />
          <stop offset="1" stopColor="oklch(0.42 0.17 28)" />
        </linearGradient>
        <radialGradient id="ead-bead" cx="0.35" cy="0.3" r="0.75">
          <stop offset="0" stopColor="oklch(0.97 0.01 20)" stopOpacity="0.9" />
          <stop offset="0.35" stopColor="oklch(0.7 0.19 27)" stopOpacity="0.55" />
          <stop offset="1" stopColor="oklch(0.42 0.17 28)" stopOpacity="0.15" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/** Water beads on a panel — the wash. */
function Beads({ count, seed, animate }: { count: number; seed: number; animate: boolean }) {
  const rnd = seeded(seed);
  const beads = Array.from({ length: count }, () => ({
    cx: r3(rnd() * 100),
    cy: r3(rnd() * 100),
    r: r3(0.8 + rnd() * rnd() * 5),
    dur: (4 + rnd() * 4).toFixed(2),
    delay: (rnd() * 4).toFixed(2),
  }));
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      {beads.map((b, i) => (
        <circle
          key={i}
          cx={b.cx}
          cy={b.cy}
          r={b.r}
          fill="url(#ead-bead)"
          className={animate ? "ead-bead" : ""}
          style={
            animate
              ? ({
                  "--bead-dur": `${b.dur}s`,
                  "--bead-delay": `${b.delay}s`,
                } as React.CSSProperties)
              : undefined
          }
        />
      ))}
    </svg>
  );
}

function Suds({ animate }: { animate: boolean }) {
  return (
    <div className="absolute inset-0 dotgrid">
      <div className="absolute inset-0 bg-[linear-gradient(160deg,oklch(0.24_0.01_20)_0%,transparent_55%)]" />
      <Beads count={54} seed={11} animate={animate} />
      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_50%,transparent_45%,var(--background)_100%)]" />
    </div>
  );
}

/** Quilted seat stitching — the interior. */
function Interior({ animate }: { animate: boolean }) {
  const lines = Array.from({ length: 9 }, (_, i) => r3(-20 + i * 17.5));
  return (
    <div className="absolute inset-0 dotgrid">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        {lines.map((x) => (
          <line
            key={`a${x}`}
            x1={x}
            y1="0"
            x2={r3(x + 60)}
            y2="100"
            stroke="oklch(0.58 0.22 28)"
            strokeOpacity="0.35"
            strokeWidth="0.35"
            strokeDasharray="1.6 1.1"
          />
        ))}
        {lines.map((x) => (
          <line
            key={`b${x}`}
            x1={r3(x + 60)}
            y1="0"
            x2={x}
            y2="100"
            stroke="oklch(0.58 0.22 28)"
            strokeOpacity="0.35"
            strokeWidth="0.35"
            strokeDasharray="1.6 1.1"
          />
        ))}
        {/* Piping line across the seat */}
        <line
          x1="0"
          y1="62"
          x2="100"
          y2="62"
          stroke="oklch(0.86 0.005 260)"
          strokeOpacity="0.25"
          strokeWidth="0.6"
        />
        <line
          x1="0"
          y1="64"
          x2="100"
          y2="64"
          stroke="oklch(0.58 0.22 28)"
          strokeOpacity="0.5"
          strokeWidth="0.4"
        />
      </svg>
      <div
        className={`absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,oklch(0.58_0.22_28_/_0.16),transparent_70%)] ${
          animate ? "ead-pulse" : ""
        }`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_50%_50%,transparent_40%,var(--background)_100%)]" />
    </div>
  );
}

/** A light sweep across glossy paint — the full detail. */
function Gloss({ animate }: { animate: boolean }) {
  return (
    <div className="absolute inset-0 dotgrid">
      {/* Horizon: a body line with reflection below it */}
      <div className="absolute inset-x-0 top-[58%] h-px bg-chrome/40" />
      <div className="absolute inset-x-0 top-[58%] h-[42%] bg-[linear-gradient(to_bottom,oklch(0.58_0.22_28_/_0.22),transparent_70%)]" />
      <div className="absolute inset-x-0 top-0 h-[58%] bg-[linear-gradient(to_top,oklch(0.24_0.01_20),oklch(0.16_0.006_20)_80%)]" />
      {/* Sweep */}
      <div
        className={`absolute -inset-y-10 w-[36%] -skew-x-[22deg] bg-[linear-gradient(to_right,transparent,oklch(0.95_0.02_20_/_0.16)_45%,oklch(0.7_0.2_27_/_0.28)_55%,transparent)] ${
          animate ? "ead-sweep" : "left-[30%]"
        }`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_50%,transparent_50%,var(--background)_100%)]" />
    </div>
  );
}

function HeroField({ animate }: { animate: boolean }) {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 dotgrid opacity-60" />
      {/* Red smoke, like the logo's ground. */}
      <div
        className={`absolute -right-[10%] top-[-20%] h-[80%] w-[70%] rounded-full bg-[radial-gradient(circle,oklch(0.58_0.22_28_/_0.34),transparent_62%)] ${
          animate ? "ead-pulse" : ""
        }`}
      />
      <div className="absolute -bottom-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,oklch(0.58_0.22_28_/_0.14),transparent_60%)]" />
      <div className="absolute inset-0 opacity-50">
        <Beads count={40} seed={42} animate={animate} />
      </div>
      {/* Wet floor line */}
      <div className="absolute inset-x-0 bottom-[22%] h-px bg-accent/30" />
    </div>
  );
}

/* ---------------------------------------------------------------- export -- */

/**
 * Renders inside a positioned parent (the caller sets size / aspect-ratio).
 * `animate` defaults on; pass false for lists of many tiles.
 */
export function Motif({
  kind,
  animate = true,
  className = "",
}: {
  kind: MotifKind;
  animate?: boolean;
  className?: string;
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden bg-surface ${className}`} aria-hidden>
      <RedDefs />
      {kind === "suds" && <Suds animate={animate} />}
      {kind === "interior" && <Interior animate={animate} />}
      {kind === "gloss" && <Gloss animate={animate} />}
      {kind === "hero" && <HeroField animate={animate} />}
    </div>
  );
}

/**
 * An image slot: the owner's ShopFlow photo when set, the bundled owner
 * photo otherwise, the motif as the last resort. Reserves its box via
 * aspect-ratio so nothing moves when the photo arrives.
 */
export function SlotImage({
  src,
  fallback,
  alt,
  motif,
  ratio = "16/10",
  className = "",
  priority = false,
  animate = true,
}: {
  src: string;
  fallback?: string;
  alt: string;
  motif: MotifKind;
  ratio?: string;
  className?: string;
  priority?: boolean;
  animate?: boolean;
}) {
  const shown = src || fallback || "";
  return (
    <div className={`framed ${className}`} style={{ aspectRatio: ratio }}>
      {shown ? (
        <img
          src={shown}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <Motif kind={motif} animate={animate} />
      )}
      <div className="framed-rule" />
    </div>
  );
}
