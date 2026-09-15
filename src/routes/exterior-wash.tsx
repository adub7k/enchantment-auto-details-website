import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";
import { ServiceHero } from "@/components/site/ServiceHero";
import { Section, SectionHead } from "@/components/site/Section";
import { CostGrid, BenefitGrid, TruthTable, IncludedList } from "@/components/site/ServiceSections";
import { WorkSection } from "@/components/site/GalleryGrid";
import { QuoteBlock } from "@/components/site/QuoteBlock";
import { PricingSection } from "@/components/site/PricingTable";
import { ProcessList } from "@/components/site/ProcessList";
import { ReviewsSection } from "@/components/site/Reviews";
import { FaqList } from "@/components/site/FaqList";
import { RelatedServices } from "@/components/site/RelatedServices";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Reveal } from "@/components/site/Reveal";

import { serviceBySlug } from "@/content/services";
import { seo, faqLd, serviceLd, breadcrumbLd } from "@/lib/seo";

const s = serviceBySlug("exterior-wash")!;
const PATH = "/exterior-wash";
const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Exterior Wash", path: PATH },
];

/** Hand wash vs the tunnel — the comparison this page exists to make. */
const compare = [
  {
    point: "How the dirt comes off",
    tunnel: "Dragged across the paint by brushes carrying the last car's grit",
    us: "Loosened with foam, lifted by hand with clean mitts",
  },
  {
    point: "Drying",
    tunnel: "Air blowers, then it drips dry in the sun — spots",
    us: "Dried spot-free before the water can evaporate",
  },
  {
    point: "Glass",
    tunnel: "Outside only, streaked",
    us: "Inside and out, including the top edge",
  },
  {
    point: "Wheels and lower doors",
    tunnel: "Whatever the brushes reach",
    us: "Wheel faces, wells and rockers done deliberately",
  },
  {
    point: "Your paint after a year",
    tunnel: "A haze of swirl marks",
    us: "The same as it went in",
  },
];

export const Route = createFileRoute("/exterior-wash")({
  head: () => {
    const meta = seo({ title: s.metaTitle, description: s.metaDescription, path: PATH });
    return {
      ...meta,
      scripts: [
        {
          type: "application/ld+json",
          children: serviceLd(s.serviceName, s.metaDescription, PATH),
        },
        { type: "application/ld+json", children: faqLd(s.faqs) },
        { type: "application/ld+json", children: breadcrumbLd(CRUMBS) },
      ],
    };
  },
  component: ExteriorWash,
});

function ExteriorWash() {
  return (
    <SiteLayout>
      <ServiceHero
        eyebrow={s.eyebrow}
        headline={s.headline}
        sub={s.sub}
        slot="service_exterior"
        serviceName={s.serviceName}
        breadcrumbs={CRUMBS}
        ctaLabel="Book a wash"
      />

      <Section tone="raised">
        <div className="container-x">
          <SectionHead eyebrow="The problem" title={s.problem.title} body={s.problem.body} />
          <CostGrid costs={s.problem.costs} />
        </div>
      </Section>

      {/* The comparison — specific to this page. */}
      <Section>
        <div className="container-x">
          <SectionHead
            eyebrow="Side by side"
            title="The tunnel vs. a hand wash."
            body="Same car, same dirt, two different results a year later."
          />
          <Reveal delay={60} className="mt-10 overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-surface">
                  <th
                    scope="col"
                    className="px-5 py-3.5 font-display text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground"
                  ></th>
                  <th
                    scope="col"
                    className="px-5 py-3.5 font-display text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground"
                  >
                    Automatic wash
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3.5 font-display text-xs font-medium uppercase tracking-[0.16em] text-accent"
                  >
                    Our foam wash
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {compare.map((c) => (
                  <tr key={c.point}>
                    <th
                      scope="row"
                      className="px-5 py-4 align-top font-display text-base font-semibold"
                    >
                      {c.point}
                    </th>
                    <td className="px-5 py-4 align-top text-muted-foreground">{c.tunnel}</td>
                    <td className="px-5 py-4 align-top">{c.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </Section>

      <Section tone="raised">
        <div className="container-x">
          <SectionHead eyebrow="What changes" title="What you'll actually notice." />
          <BenefitGrid benefits={s.benefits} />
        </div>
      </Section>

      {s.truths && (
        <Section>
          <div className="container-x">
            <SectionHead eyebrow="Straight answers" title="What a wash will and won't do." />
            <TruthTable truths={s.truths} />
          </div>
        </Section>
      )}

      <WorkSection eyebrow="Washes" title="Spot-free, out the door." tag="exterior" tone="raised" />

      <PricingSection
        slug={s.slug}
        serviceName={s.serviceName}
        title="What a wash costs here."
        body="Prices from our booking system — the same numbers we quote in person."
      />

      <QuoteBlock heading={s.quote.heading} sub={s.quote.sub} serviceSlug={s.slug} />

      <Section>
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead eyebrow="Included" title="What's in the foam wash." />
            <IncludedList items={s.included} />
          </div>
          <div>
            <SectionHead eyebrow="The process" title="How it goes." />
            <ProcessList steps={s.process} />
          </div>
        </div>
      </Section>

      <ReviewsSection />

      <Section className="cv-auto">
        <div className="container-x grid gap-10 lg:grid-cols-[22rem_1fr] lg:gap-16">
          <SectionHead eyebrow="Wash FAQ" title="Questions we get every week." />
          <FaqList faqs={s.faqs} />
        </div>
      </Section>

      <RelatedServices slugs={s.related} guidesFor={s.slug} />
      <FinalCTA
        heading="Ready for a wash that doesn't spot?"
        body="Tell us the vehicle and whether you want the inside done too. We'll confirm a time."
        location="exterior-final"
        service={s.serviceName}
      />
    </SiteLayout>
  );
}
