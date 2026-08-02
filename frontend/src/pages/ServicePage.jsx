import { useParams, Link, Navigate } from "react-router-dom";
import { Check } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { PageHero, SectionHeading, PricingTiers, FaqBlock, CtaBand } from "@/components/site/Blocks";
import { Reveal, Overline } from "@/components/site/Reveal";
import { SERVICES_DATA } from "@/lib/servicesData";
import { PROJECTS_DATA } from "@/lib/projectsData";

const catToRoom = {
  "Modular Kitchen": "Kitchen",
  "Wardrobe": "Wardrobe",
  "TV Unit": "Living Room",
  "False Ceiling": "Living Room",
  "Full Home Interior": "Full Home",
  "Commercial": "Commercial",
  "Renovation": "Kitchen",
  "Custom Furniture": "Living Room",
};

export default function ServicePage() {
  const { slug } = useParams();
  const s = SERVICES_DATA[slug];
  if (!s) return <Navigate to="/services" replace />;

  const room = catToRoom[s.category];
  let related = PROJECTS_DATA.filter((p) => p.roomType === room);
  if (related.length < 2) related = PROJECTS_DATA.slice(0, 3);
  related = related.slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", name: s.title, serviceType: s.title, areaServed: "Jaipur, Rajasthan", provider: { "@type": "HomeAndConstructionBusiness", name: "Mr. Wood Interiors & Furniture" }, description: s.metaDescription },
      { "@type": "FAQPage", mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <>
      <Seo title={s.metaTitle} description={s.metaDescription} path={`/services/${slug}`} image={s.heroImg} jsonLd={jsonLd} />
      <PageHero overline="Service · Jaipur" title={s.h1} sub={s.intro} image={s.heroImg} />

      {/* What's included */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionHeading overline="What's included" title={<>Everything, <span className="italic text-terracotta">handled.</span></>} />
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <ul className="space-y-5">
            {s.included.map((item, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <li className="flex items-start gap-4 border-b border-ink/10 pb-5">
                  <Check size={20} className="text-terracotta mt-1 shrink-0" />
                  <span className="font-body text-lg text-ink">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Options / materials */}
      <section className="bg-sand grain relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
          <SectionHeading overline="Materials & finishes" title={<>The choices that <span className="italic text-terracotta">actually matter.</span></>} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {s.options.map((o, i) => (
              <Reveal key={i} delay={i * 0.06} className="border-t border-ink/20 pt-6">
                <span className="font-mono text-xs text-terracotta">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-heading text-2xl md:text-3xl text-ink mt-3">{o.name}</h3>
                <p className="font-body text-base text-clay mt-3 leading-relaxed">{o.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <SectionHeading overline="Investment" title={<>{s.title} <span className="italic text-terracotta">pricing tiers.</span></>} />
        <div className="mt-14"><PricingTiers tiers={s.tiers} note={s.pricingNote} /></div>
      </section>

      {/* Related projects */}
      <section className="bg-ink text-bone grain relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
          <Overline className="text-terracotta">Related work</Overline>
          <h2 className="font-heading text-3xl md:text-5xl mt-5 mb-12">Projects like yours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link to={`/projects/${p.slug}`} className="group block">
                  <div className="overflow-hidden aspect-[4/3] bg-walnut">
                    <img src={p.cover} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-terracotta mt-4">{p.roomType} · {p.locality}</p>
                  <h3 className="font-heading text-2xl mt-1">{p.title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <SectionHeading overline="FAQ" title={<>{s.title}, <span className="italic text-terracotta">answered.</span></>} />
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal><FaqBlock faqs={s.faqs} testid="service-faq" /></Reveal>
        </div>
      </section>

      <CtaBand title={`Ready for your ${s.title.toLowerCase()}?`} />
    </>
  );
}
