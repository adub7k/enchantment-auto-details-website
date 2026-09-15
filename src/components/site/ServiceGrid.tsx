import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services, type ServiceContent } from "@/content/services";
import { images } from "@/config/images";
import { useSiteImage } from "@/lib/shopGallery";
import { usePricing, startingAt } from "@/lib/pricing";
import { StartingAt } from "./PricingTable";
import { SlotImage } from "./Motif";
import { Reveal } from "./Reveal";

/** Three services, one row. The full detail leads because it's the menu's headline. */
export function ServiceGrid() {
  const pricing = usePricing();

  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <Reveal
          key={s.slug}
          delay={i * 60}
          className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
        >
          <ServiceCard service={s} from={startingAt(pricing, s.slug)} />
        </Reveal>
      ))}
    </div>
  );
}

function ServiceCard({ service: s, from }: { service: ServiceContent; from: number | null }) {
  const slot = images.service[s.imageSlot];
  const src = useSiteImage(slot.key);

  return (
    <Link
      to={s.route}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface/50 transition-colors hover:border-accent/50"
    >
      <SlotImage
        src={src}
        fallback={slot.fallback}
        alt={slot.alt}
        motif={slot.motif}
        ratio="16/9"
        className="rounded-none"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl">{s.serviceName}</h3>
          <StartingAt amount={from} />
        </div>
        <p className="mt-2.5 leading-relaxed text-muted-foreground">{s.cardBlurb}</p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
          {s.cardBenefits.map((b) => (
            <li key={b} className="before:mr-2 before:text-accent before:content-['—']">
              {b}
            </li>
          ))}
        </ul>
        <span className="mt-5 inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-accent">
          See {s.serviceName.toLowerCase()}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
