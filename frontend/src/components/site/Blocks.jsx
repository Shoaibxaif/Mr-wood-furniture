import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { whatsappLink } from "@/lib/constants";
import { Reveal, Overline } from "@/components/site/Reveal";
import { Check } from "lucide-react";

export const SectionHeading = ({ overline, title, sub, className = "" }) => (
  <div className={className}>
    {overline && <Overline>{overline}</Overline>}
    <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-5 text-ink leading-[0.95]">
      {title}
    </h2>
    {sub && <p className="font-body text-lg text-clay mt-6 max-w-2xl leading-relaxed">{sub}</p>}
  </div>
);

// Inner-page hero band
export const PageHero = ({ overline, title, sub, image }) => (
  <section className="pt-36 md:pt-44 pb-16 md:pb-20 border-b border-ink/10 grain relative">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-7">
        <Overline>{overline}</Overline>
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl tracking-tighter leading-[0.9] mt-6 text-ink">
          {title}
        </h1>
        {sub && <p className="font-body text-lg text-clay mt-8 max-w-xl leading-relaxed">{sub}</p>}
      </div>
      {image && (
        <div className="lg:col-span-5 h-56 lg:h-80 overflow-hidden bg-sand">
          <img src={image} alt={typeof title === "string" ? title : "Mr. Wood Interiors Jaipur"} className="w-full h-full object-cover" loading="eager" />
        </div>
      )}
    </div>
  </section>
);

export const PricingTiers = ({ tiers, note }) => (
  <div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {tiers.map((t, i) => (
        <Reveal key={t.name} delay={i * 0.08}>
          <div
            data-testid={`pricing-tier-${t.name.toLowerCase()}`}
            className={`h-full p-8 border ${t.featured ? "border-terracotta bg-ink text-bone" : "border-ink/15 bg-bone text-ink"}`}
          >
            {t.tag && (
              <span className={`font-mono text-[10px] uppercase tracking-widest ${t.featured ? "text-terracotta" : "text-clay"}`}>
                {t.tag}
              </span>
            )}
            <h3 className="font-heading text-3xl mt-3">{t.name}</h3>
            <p className={`font-heading text-2xl mt-2 ${t.featured ? "text-terracotta" : "text-terracotta"}`}>{t.price}</p>
            {t.note && <p className={`font-body text-sm mt-1 ${t.featured ? "text-bone/60" : "text-clay"}`}>{t.note}</p>}
            <ul className="mt-6 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-3 font-body text-sm">
                  <Check size={16} className="text-terracotta mt-0.5 shrink-0" />
                  <span className={t.featured ? "text-bone/85" : "text-clay"}>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
    <p className="font-mono text-xs text-clay mt-6 uppercase tracking-wider">
      * Demo pricing — indicative ranges only. {note}
    </p>
  </div>
);

export const FaqBlock = ({ faqs, testid = "faq-accordion" }) => (
  <Accordion type="single" collapsible className="w-full" data-testid={testid}>
    {faqs.map((f, i) => (
      <AccordionItem key={i} value={`item-${i}`} className="border-b border-ink/15" data-testid={`faq-item-${i}`}>
        <AccordionTrigger className="font-heading text-xl md:text-2xl text-ink text-left hover:text-terracotta hover:no-underline py-6">
          {f.q}
        </AccordionTrigger>
        <AccordionContent className="font-body text-base text-clay leading-relaxed pb-6">
          {f.a}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export const CtaBand = ({ title = "Ready to design your space?", sub = "Book a free consultation and get a transparent, itemised estimate — no obligation.", primaryLabel = "Get a Free Quote", primaryTo = "/contact" }) => (
  <section data-testid="cta-band" className="bg-ink text-bone grain relative">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-28 relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
      <div>
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95] max-w-2xl">
          {title}
        </h2>
        <p className="font-body text-lg text-bone/70 mt-6 max-w-xl">{sub}</p>
      </div>
      <div className="flex flex-wrap gap-4 shrink-0">
        <Link to={primaryTo} data-testid="cta-primary" className="bg-terracotta text-bone px-8 py-4 uppercase tracking-widest text-sm hover:bg-bone hover:text-ink transition-colors duration-300">
          {primaryLabel}
        </Link>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" data-testid="cta-whatsapp" className="border border-bone/30 text-bone px-8 py-4 uppercase tracking-widest text-sm hover:bg-bone/10 transition-colors duration-300">
          WhatsApp Us
        </a>
      </div>
    </div>
  </section>
);
