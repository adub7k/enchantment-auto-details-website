import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { site, CITY_STATE } from "@/config/site";
import { images } from "@/config/images";
import { useWideSiteImage } from "@/lib/shopGallery";
import { trackQuoteClick } from "@/lib/analytics";
import { Motif } from "./Motif";

/**
 * Homepage hero.
 *
 * The band is a red-smoke field with the owner's logo artwork — a finished
 * composition of the emblem over a car — as the visual. When a landscape hero
 * photo is set in ShopFlow it takes over the whole band and the artwork
 * steps aside.
 */
export function Hero() {
  const heroSrc = useWideSiteImage(images.hero.key);

  return (
    <section className="relative isolate flex min-h-[40rem] items-end overflow-hidden pt-[4.5rem] lg:min-h-[86vh]">
      <div className="absolute inset-0 -z-10">
        {heroSrc ? (
          <img
            src={heroSrc}
            alt={images.hero.alt}
            width={1600}
            height={900}
            fetchPriority="high"
            decoding="sync"
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <Motif kind="hero" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/80 to-transparent" />
      </div>

      <div className="container-x relative w-full pb-14 pt-10 sm:pb-20 lg:pb-24">
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* The artwork IS the hero visual until there's a real photo. Shown
              above the copy on phones, beside it on desktop. */}
          {!heroSrc && (
            <div className="hero-step-2 order-first w-full max-w-[34rem] lg:order-last lg:justify-self-end">
              <div
                className="framed w-full shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]"
                style={{ aspectRatio: "1206/686" }}
              >
                <img
                  src={images.hero.fallback}
                  alt={images.hero.alt}
                  width={1206}
                  height={686}
                  fetchPriority="high"
                  decoding="sync"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="framed-rule" />
              </div>
            </div>
          )}

          <div className="max-w-2xl">
            <p className="eyebrow hero-step-1 flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              {CITY_STATE}
            </p>

            <h1 className="hero-step-1 mt-4">
              Detailed by hand.
              <span className="text-accent"> Spot-free, every time.</span>
            </h1>

            <p className="hero-step-2 mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Full inside-and-out details in three packages — Bronze, Silver and Gold — plus
              interior-only details and a proper foam wash. The small stuff done by hand, the wash
              dried before the sun can spot it.
            </p>

            <p className="hero-step-2 mt-5 font-display text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-chrome/90">
              Full Detail <span className="text-accent">·</span> Interior{" "}
              <span className="text-accent">·</span> Exterior Wash
            </p>

            <div className="hero-step-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/quote"
                onClick={() => trackQuoteClick("hero")}
                className="btn btn-primary btn-lg"
              >
                Get My Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#services" className="btn btn-ghost btn-lg">
                See the packages
              </a>
            </div>

            <div className="hero-step-4 mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span>Free quotes, one number before we start</span>
              <span className="hidden h-3 w-px bg-border sm:block" />
              <span>Spot-free wash &amp; dry on every package</span>
              <span className="hidden h-3 w-px bg-border sm:block" />
              <span>{site.business.shortName} Auto Details</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
