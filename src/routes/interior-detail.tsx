import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";
import { ServiceHero } from "@/components/site/ServiceHero";
import { Section, SectionHead } from "@/components/site/Section";
import {
  CostGrid,
  BenefitGrid,
  OptionsList,
  TruthTable,
  IncludedList,
} from "@/components/site/ServiceSections";
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

const s = serviceBySlug("interior-detail")!;
const PATH = "/interior-detail";
const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Interior Detail", path: PATH },
];

/** The order the inside gets done in — specific to this page. */
const order = [
  { step: "Vacuum", note: "Interior and trunk, under the seats, the rails. Dry dirt out first." },
  {
    step: "Vents & panels",
    note: "Brushed and cleaned by hand — vents, door panels, cup holders, console.",
  },
  {
    step: "Shampoo",
    note: "Carpets and seats worked and extracted. This is what takes the stain and the smell.",
  },
  { step: "Headliner", note: "Cleaned, not soaked — the ceiling nobody else touches." },
  { step: "Glass & finish", note: "Windows inside, a final wipe-down, and it's ready." },
];

export const Route = createFileRoute("/interior-detail")({
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
  component: InteriorDetail,
});

function InteriorDetail() {
  return (
    <SiteLayout>
      <ServiceHero
        eyebrow={s.eyebrow}
        headline={s.headline}
        sub={s.sub}
        slot="service_interior"
        serviceName={s.serviceName}
        breadcrumbs={CRUMBS}
      />

      <Section tone="raised">
        <div className="container-x">
          <SectionHead eyebrow="The problem" title={s.problem.title} body={s.problem.body} />
          <CostGrid costs={s.problem.costs} />
        </div>
      </Section>

      {/* The order of work — specific to this page. */}
      <Section>
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <SectionHead
              eyebrow="In this order"
              title="Five steps, in the only order that works."
              body="Shampoo before you vacuum and you make mud. Dress the trim before the dust is out and it streaks. The sequence is the job."
            />
            <Reveal delay={60}>
              <ol className="border-t border-border">
                {order.map((c, i) => (
                  <li
                    key={c.step}
                    className="grid grid-cols-[2rem_1fr] gap-4 border-b border-border py-4"
                  >
                    <span className="font-display text-sm font-bold tabular-nums text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="font-display text-base font-semibold">{c.step}</span>
                      <span className="mt-0.5 block text-sm text-muted-foreground">{c.note}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </Section>

      {s.options && (
        <Section tone="raised">
          <div className="container-x">
            <SectionHead eyebrow="Options" title={s.options.title} body={s.options.intro} />
            <OptionsList items={s.options.items} />
          </div>
        </Section>
      )}

      <Section>
        <div className="container-x">
          <SectionHead eyebrow="What changes" title="What you'll actually notice." />
          <BenefitGrid benefits={s.benefits} />
        </div>
      </Section>

      {s.truths && (
        <Section tone="raised">
          <div className="container-x">
            <SectionHead
              eyebrow="Straight answers"
              title="What an interior detail will and won't do."
            />
            <TruthTable truths={s.truths} />
          </div>
        </Section>
      )}

      <WorkSection eyebrow="Interiors" title="Insides we've brought back." tag="interior" />

      <PricingSection
        slug={s.slug}
        serviceName={s.serviceName}
        title="What interior work costs here."
        body="Prices from our booking system — the same numbers we quote in person."
        tone="raised"
      />

      <QuoteBlock heading={s.quote.heading} sub={s.quote.sub} serviceSlug={s.slug} />

      <Section>
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead eyebrow="Included" title="What's in the interior detail." />
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
          <SectionHead eyebrow="Interior FAQ" title="Questions we get every week." />
          <FaqList faqs={s.faqs} />
        </div>
      </Section>

      <RelatedServices slugs={s.related} guidesFor={s.slug} />
      <FinalCTA
        heading="Ready to get the inside sorted?"
        body="Tell us the vehicle and what's in there. Photos of the worst spots get you the most accurate number."
        location="interior-final"
        service={s.serviceName}
      />
    </SiteLayout>
  );
}
