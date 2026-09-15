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

import { serviceBySlug } from "@/content/services";
import { seo, faqLd, serviceLd, breadcrumbLd } from "@/lib/seo";

const s = serviceBySlug("full-detail")!;
const PATH = "/full-detail";
const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Full Detail", path: PATH },
];

export const Route = createFileRoute("/full-detail")({
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
  component: FullDetail,
});

/**
 * The packages page leads with the packages: the buyer's only real decision
 * is Bronze / Silver / Gold, so it comes before the "why" copy.
 */
function FullDetail() {
  return (
    <SiteLayout>
      <ServiceHero
        eyebrow={s.eyebrow}
        headline={s.headline}
        sub={s.sub}
        slot="service_full"
        serviceName={s.serviceName}
        breadcrumbs={CRUMBS}
      />

      {s.options && (
        <Section tone="raised" id="packages">
          <div className="container-x">
            <SectionHead eyebrow="The packages" title={s.options.title} body={s.options.intro} />
            <OptionsList items={s.options.items} />
          </div>
        </Section>
      )}

      <Section>
        <div className="container-x">
          <SectionHead eyebrow="The problem" title={s.problem.title} body={s.problem.body} />
          <CostGrid costs={s.problem.costs} />
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
            <SectionHead
              eyebrow="Straight answers"
              title="What a detail will and won't do."
              body="Worth knowing before you spend the money — including the parts most shops leave out."
            />
            <TruthTable truths={s.truths} />
          </div>
        </Section>
      )}

      <WorkSection
        eyebrow="Full details"
        title="Cars we've done inside and out."
        tag="full"
        tone="raised"
      />

      <PricingSection
        slug={s.slug}
        serviceName={s.serviceName}
        title="What a full detail costs here."
        body="Prices from our booking system — the same numbers we quote in person. Silver and Gold are priced by vehicle size."
      />

      <QuoteBlock heading={s.quote.heading} sub={s.quote.sub} serviceSlug={s.slug} />

      <Section>
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead eyebrow="Included" title="In every package." />
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
          <SectionHead eyebrow="Full detail FAQ" title="Questions we get every week." />
          <FaqList faqs={s.faqs} />
        </div>
      </Section>

      <RelatedServices slugs={s.related} guidesFor={s.slug} />
      <FinalCTA
        heading="Ready for the whole car done?"
        body="Send us the year, make and model and the package — or the state it's in. We'll come back with a number."
        location="full-detail-final"
        service={s.serviceName}
      />
    </SiteLayout>
  );
}
