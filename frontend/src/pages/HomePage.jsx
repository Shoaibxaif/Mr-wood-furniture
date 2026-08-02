import { Seo } from "@/components/site/Seo";
import { EditorialMarquee } from "@/components/site/EditorialMarquee";
import { SectionHeading, FaqBlock, CtaBand } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { FAQS } from "@/lib/constants";
import {
  HomeHero, TrustBar, ServiceTiles, ProjectProof, WhyMrWood, ProcessSteps, PricingSnapshot,
} from "@/components/home/HomeSections";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function HomePage() {
  return (
    <>
      <Seo
        title="Mr. Wood Interiors & Furniture | Custom Furniture & Interior Designers in Jaipur"
        description="Premium custom furniture manufacturing and interior design in Jaipur — modular kitchens, wardrobes, TV units, false ceilings and full home & office interiors. In-house workshop. Free consultation."
        path="/"
        jsonLd={faqSchema}
      />
      <HomeHero />
      <EditorialMarquee />
      <TrustBar />
      <ServiceTiles />
      <ProjectProof />
      <WhyMrWood />
      <ProcessSteps />
      <PricingSnapshot />

      <section id="faq" data-testid="faq-section" className="bg-sand grain relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeading overline="Answers" title={<>Questions,<br /><span className="italic text-terracotta">answered honestly.</span></>} sub="Everything Jaipur homeowners ask before starting." />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal><FaqBlock faqs={FAQS} /></Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
