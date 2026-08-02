import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { PageHero, SectionHeading, CtaBand } from "@/components/site/Blocks";
import { Reveal, Overline } from "@/components/site/Reveal";
import { SERVICE_LIST } from "@/lib/servicesData";
import { GUIDES_DATA } from "@/lib/guidesData";

const DECISION = [
  { situation: "I've just bought a new flat", route: "Start with a full Home Interior — one team plans, builds and installs everything so nothing falls between vendors.", to: "/services/home-interior-jaipur", cta: "Home Interiors" },
  { situation: "My kitchen is the priority", route: "A Modular Kitchen is the highest-impact single upgrade. We design around your cooking, not a showroom photo.", to: "/services/modular-kitchen-jaipur", cta: "Modular Kitchens" },
  { situation: "I need better storage", route: "Custom Wardrobes planned around what you actually own reclaim wasted space that ready-made units can't.", to: "/services/wardrobes-jaipur", cta: "Wardrobes" },
  { situation: "My space just feels dated", route: "Renovation modernises what's tired without paying to redo what still works. We assess honestly first.", to: "/services/renovation-jaipur", cta: "Renovation" },
  { situation: "It's an office or shop", route: "Commercial Interiors built for heavy use and brand presence, executed in phases so you never lose a working day.", to: "/services/commercial-interior-jaipur", cta: "Commercial" },
];

const COST_TABLE = [
  ["Modular Kitchen", "₹1,500–2,200 / rft", "₹2,500–4,000 / rft", "₹4,000–7,000+ / rft"],
  ["Wardrobes", "₹1,300–1,900 / sq ft", "₹2,000–3,200 / sq ft", "₹3,200–5,500+ / sq ft"],
  ["TV / Media Unit", "₹35k–60k", "₹65k–1.2L", "₹1.2L+"],
  ["False Ceiling", "₹65–90 / sq ft", "₹100–150 / sq ft", "₹160+ / sq ft"],
  ["Full Home Interior", "₹6–10 L", "₹12–20 L", "₹22 L+"],
];

export default function ServicesHub() {
  return (
    <>
      <Seo
        title="Interior & Furniture Services in Jaipur | Modular Kitchens, Wardrobes & More | Mr. Wood"
        description="Explore Mr. Wood's interior and custom furniture services in Jaipur — modular kitchens, wardrobes, TV units, false ceilings, home & commercial interiors, renovation and bespoke furniture."
        path="/services"
      />
      <PageHero
        overline="Services"
        title={<>Everything your space<br />needs, <span className="italic text-terracotta">made in-house.</span></>}
        sub="We're a design-and-build studio, not a reseller. That means the team who designs your space is the same team that manufactures and installs it — from a single wardrobe to a complete home."
      />

      {/* 8-card grid */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {SERVICE_LIST.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.05}>
              <Link to={`/services/${s.slug}`} data-testid={`hub-service-${i}`} className="group bg-bone h-full p-8 flex flex-col justify-between hover:bg-sand transition-colors duration-300 min-h-[200px]">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-terracotta">{String(i + 1).padStart(2, "0")}</span>
                  <ArrowUpRight size={20} className="text-clay group-hover:text-terracotta group-hover:rotate-45 transition-all duration-300" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl md:text-3xl text-ink">{s.title}</h3>
                  <p className="font-body text-sm text-clay mt-3">{s.short}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Decision helper (AEO) */}
      <section data-testid="decision-helper" className="bg-sand grain relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
          <SectionHeading overline="Not sure where to start?" title={<>Find your starting point<br /><span className="italic text-terracotta">by situation.</span></>} sub="Tell us where you are and we'll point you to the right service." />
          <div className="mt-12 border-t border-ink/15">
            {DECISION.map((d, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-7 border-b border-ink/15 items-center">
                  <div className="md:col-span-4"><p className="font-heading text-2xl text-ink">“{d.situation}”</p></div>
                  <div className="md:col-span-6"><p className="font-body text-base text-clay leading-relaxed">{d.route}</p></div>
                  <div className="md:col-span-2 md:text-right">
                    <Link to={d.to} className="font-mono text-xs uppercase tracking-widest text-terracotta hover:text-walnut transition-colors border-b border-terracotta/40 pb-1">
                      {d.cta} →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cost overview table */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <SectionHeading overline="Cost overview" title={<>A transparent <span className="italic text-terracotta">starting map.</span></>} />
        <div className="mt-12 overflow-x-auto border border-ink/15">
          <table className="w-full text-left" data-testid="cost-table">
            <thead className="bg-sand">
              <tr className="font-mono text-[11px] uppercase tracking-widest text-clay">
                <th className="p-4">Service</th><th className="p-4">Essential</th><th className="p-4">Premium</th><th className="p-4">Signature</th>
              </tr>
            </thead>
            <tbody>
              {COST_TABLE.map((row, i) => (
                <tr key={i} className="border-t border-ink/10 font-body text-sm">
                  <td className="p-4 font-semibold text-ink">{row[0]}</td>
                  <td className="p-4 text-clay">{row[1]}</td>
                  <td className="p-4 text-clay">{row[2]}</td>
                  <td className="p-4 text-clay">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-mono text-xs text-clay mt-4 uppercase tracking-wider">* Demo pricing — indicative ranges only, subject to a free measurement.</p>
      </section>

      {/* Guide links */}
      <section className="bg-ink text-bone grain relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-24 relative z-10">
          <Overline className="text-terracotta">Read before you decide</Overline>
          <h2 className="font-heading text-3xl md:text-5xl mt-5 mb-10">Helpful guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GUIDES_DATA.map((g) => (
              <Link key={g.slug} to={`/guides/${g.slug}`} className="group border border-bone/20 p-6 hover:border-terracotta transition-colors">
                <p className="font-mono text-[10px] uppercase tracking-widest text-terracotta">{g.readTime}</p>
                <h3 className="font-heading text-2xl mt-3 group-hover:text-terracotta transition-colors">{g.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
