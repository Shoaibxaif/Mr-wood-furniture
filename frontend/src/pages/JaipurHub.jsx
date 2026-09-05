import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { PageHero, SectionHeading, CtaBand } from "@/components/site/Blocks";
import { Reveal, Overline } from "@/components/site/Reveal";
import { SERVICE_LIST } from "@/lib/servicesData";
import { LOCALITIES } from "@/lib/projectsData";

const AREAS = LOCALITIES.filter((l) => l !== "All").concat(["Tonk Road", "Jhotwara", "Vidhyadhar Nagar", "Bani Park"]);

export default function JaipurHub() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Mr. Wood Interiors & Furniture",
    areaServed: { "@type": "City", name: "Jaipur" },
    address: { "@type": "PostalAddress", addressLocality: "Jaipur", addressRegion: "Rajasthan", addressCountry: "IN" },
  };
  return (
    <>
      <Seo
        title="Interior Designers & Furniture Makers in Jaipur | Mr. Wood"
        description="Mr. Wood serves homeowners and businesses across Jaipur — Malviya Nagar, Vaishali Nagar, C-Scheme, Mansarovar, Jagatpura and beyond — with in-house interiors and custom furniture."
        path="/jaipur"
        jsonLd={jsonLd}
      />
      <PageHero
        overline="Serving Jaipur"
        title={<>Your local<br /><span className="italic text-terracotta">interior studio.</span></>}
        sub="Mr. Wood is a Jaipur design-and-build studio with its own workshop in the city. Being local isn't a marketing line for us — it's why we can measure fast, install carefully and stay reachable after handover."
      />

      {/* Why local matters */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <SectionHeading overline="Why local matters" title={<>Built in Jaipur,<br /><span className="italic text-terracotta">for Jaipur homes.</span></>} sub="Our designs account for Jaipur's climate — the dust, the dry heat and the humidity swings — with moisture-smart materials and finishes that hold up locally." />
      </section>

      {/* Areas served */}
      <section className="bg-sand grain relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
          <Overline>Areas we serve</Overline>
          <h2 className="font-heading text-4xl md:text-6xl text-ink mt-5 mb-12">Across the city</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
            {AREAS.map((a, i) => (
              <Reveal key={a} delay={(i % 4) * 0.04}>
                <div className="bg-bone p-6 flex items-center gap-3" data-testid={`area-${i}`}>
                  <MapPin size={16} className="text-terracotta shrink-0" />
                  <span className="font-body text-ink">{a}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="font-body text-clay mt-8 max-w-2xl">Don't see your area? We serve all of Jaipur and take select projects across Rajasthan. <Link to="/contact" className="text-terracotta border-b border-terracotta/40">Just ask →</Link></p>
        </div>
      </section>

      {/* Services in Jaipur */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <SectionHeading overline="Services in Jaipur" title={<>What we build <span className="italic text-terracotta">here.</span></>} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {SERVICE_LIST.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="group border border-ink/15 p-6 hover:border-terracotta transition-colors">
              <h3 className="font-heading text-xl text-ink group-hover:text-terracotta transition-colors">{s.title}</h3>
              <p className="font-mono text-[10px] uppercase tracking-widest text-clay mt-2">in Jaipur</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Future expansion note (structured to extend) */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 pb-24">
        <div className="border-t border-ink/15 pt-8">
          <p className="font-mono text-xs uppercase tracking-widest text-clay">Coming next</p>
          <p className="font-heading text-2xl md:text-3xl text-ink mt-3 max-w-3xl">As we grow, this hub will expand to serve more of Rajasthan and, in time, cities across India — with the same in-house standard.</p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
