import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { PageHero, CtaBand } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { GUIDES_DATA } from "@/lib/guidesData";

export default function GuidesHub() {
  const [featured, ...rest] = GUIDES_DATA;
  return (
    <>
      <Seo
        title="Interior & Furniture Guides for Jaipur Homeowners | Mr. Wood"
        description="Honest, expert guides on modular kitchen costs, material comparisons and home interior timelines in Jaipur — written to help you decide well, not to sell."
        path="/guides"
      />
      <PageHero
        overline="Resources"
        title={<>Decide well,<br /><span className="italic text-terracotta">before you spend.</span></>}
        sub="Straight-talking guides on costs, materials and timelines — the questions we get asked every week, answered without the sales spin."
      />

      {/* Featured */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <Reveal>
          <Link to={`/guides/${featured.slug}`} data-testid="featured-guide" className="group grid grid-cols-1 lg:grid-cols-12 gap-8 border border-ink/15 hover:border-terracotta transition-colors p-8 md:p-12">
            <div className="lg:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-widest text-terracotta">Featured · {featured.readTime}</p>
              <h2 className="font-heading text-3xl md:text-5xl text-ink mt-4 leading-tight group-hover:text-terracotta transition-colors">{featured.title}</h2>
              <p className="font-body text-lg text-clay mt-5 max-w-2xl">{featured.excerpt}</p>
            </div>
            <div className="lg:col-span-3 lg:col-start-10 flex items-end justify-end">
              <ArrowUpRight size={40} className="text-clay group-hover:text-terracotta group-hover:rotate-45 transition-all duration-300" />
            </div>
          </Link>
        </Reveal>
      </section>

      {/* Rest */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((g, i) => (
            <Reveal key={g.slug} delay={i * 0.06}>
              <Link to={`/guides/${g.slug}`} data-testid={`guide-card-${i}`} className="group block border border-ink/15 hover:border-terracotta transition-colors p-8 h-full">
                <p className="font-mono text-[10px] uppercase tracking-widest text-terracotta">{g.readTime}</p>
                <h3 className="font-heading text-2xl md:text-3xl text-ink mt-4 group-hover:text-terracotta transition-colors">{g.title}</h3>
                <p className="font-body text-base text-clay mt-4">{g.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Still have questions?" sub="Skip the reading — ask our team directly and get straight answers about your space." primaryLabel="Talk to Us" />
    </>
  );
}
