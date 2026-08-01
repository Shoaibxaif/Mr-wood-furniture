import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { Reveal, Overline } from "@/components/site/Reveal";

export const Portfolio = () => (
  <section
    id="portfolio"
    data-testid="portfolio-section"
    className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40"
  >
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
      <div>
        <Overline>Selected work</Overline>
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-6 text-ink">
          Spaces we&apos;ve <span className="italic text-terracotta">brought to life.</span>
        </h2>
      </div>
      <a
        href="#contact"
        data-testid="portfolio-cta"
        className="font-mono text-xs uppercase tracking-widest text-clay hover:text-terracotta transition-colors border-b border-clay/40 pb-1"
      >
        Start your project →
      </a>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
      {PROJECTS.map((p, i) => (
        <Reveal key={p.title} delay={i * 0.08} className={p.span}>
          <div
            data-testid={`project-card-${i}`}
            className="group relative overflow-hidden bg-sand aspect-[4/3] cursor-pointer"
          >
            <motion.img
              src={p.img}
              alt={`${p.title} — ${p.cat} by Mr. Wood Interiors Jaipur`}
              className="w-full h-full object-cover scale-[0.98] group-hover:scale-105 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <p className="font-mono text-[11px] uppercase tracking-widest text-terracotta mb-2">
                {p.cat}
              </p>
              <h3 className="font-heading text-2xl md:text-3xl text-bone tracking-tight">
                {p.title}
              </h3>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
