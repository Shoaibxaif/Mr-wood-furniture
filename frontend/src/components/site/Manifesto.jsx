import { motion } from "framer-motion";
import { MANIFESTO } from "@/lib/constants";
import { Reveal, Overline } from "@/components/site/Reveal";

export const Manifesto = () => (
  <section
    id="manifesto"
    data-testid="manifesto-section"
    className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40"
  >
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
      <div className="lg:col-span-5">
        <Overline>How we work</Overline>
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95] mt-6 text-ink">
          A process built on <span className="italic text-terracotta">trust</span>, not guesswork.
        </h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7 flex items-end">
        <p className="font-body text-lg text-clay leading-relaxed">
          Interiors go wrong when nobody owns the outcome. We keep design, manufacturing and
          installation under one roof — so the person who promises is the person who delivers.
        </p>
      </div>
    </div>

    <div className="border-t border-ink/10">
      {MANIFESTO.map((m, i) => (
        <Reveal key={m.no} delay={i * 0.05}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 md:py-14 border-b border-ink/10 group">
            <div className="md:col-span-2">
              <span className="font-mono text-5xl md:text-6xl text-terracotta/80 group-hover:text-terracotta transition-colors">
                {m.no}
              </span>
            </div>
            <div className="md:col-span-4">
              <h3 className="font-heading text-3xl md:text-4xl text-ink tracking-tight">{m.title}</h3>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="font-body text-base md:text-lg text-clay leading-relaxed">{m.body}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
