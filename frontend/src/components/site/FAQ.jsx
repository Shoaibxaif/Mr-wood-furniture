import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";
import { Reveal, Overline } from "@/components/site/Reveal";

export const FAQ = () => (
  <section
    id="faq"
    data-testid="faq-section"
    className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40"
  >
    {/* FAQPage schema for AEO */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      }}
    />
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div className="lg:col-span-4">
        <Overline>Answers</Overline>
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-6 text-ink">
          Questions, <span className="italic text-terracotta">answered honestly.</span>
        </h2>
        <p className="font-body text-clay mt-6 max-w-sm">
          Everything Jaipur homeowners ask us before starting — costs, timelines, materials and warranty.
        </p>
      </div>

      <div className="lg:col-span-7 lg:col-start-6">
        <Reveal>
          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-ink/15"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="font-heading text-xl md:text-2xl text-ink text-left hover:text-terracotta hover:no-underline py-6">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-base text-clay leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </div>
  </section>
);
