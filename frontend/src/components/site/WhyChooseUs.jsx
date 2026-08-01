import { motion } from "framer-motion";
import { WHY, whatsappLink } from "@/lib/constants";
import { Reveal, Overline } from "@/components/site/Reveal";

export const WhyChooseUs = () => (
  <section
    id="why"
    data-testid="why-section"
    className="bg-ink text-bone relative overflow-hidden grain"
  >
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6">
          <Overline className="text-terracotta">Why Mr. Wood</Overline>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-[0.95] mt-6 text-bone">
            Jaipur&apos;s most <span className="italic text-terracotta">accountable</span> interior studio.
          </h2>
          <p className="font-body text-lg text-bone/70 leading-relaxed mt-8 max-w-lg">
            We aren&apos;t a reseller stitching together outsourced work. Every kitchen, wardrobe and
            wall unit is milled and finished in our own Jaipur workshop — which is why our joints
            stay tight and our timelines stay honest.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="why-cta"
            className="inline-block mt-10 border border-bone/30 text-bone px-8 py-4 uppercase tracking-widest text-sm hover:bg-terracotta hover:border-terracotta transition-colors duration-300"
          >
            Visit our Showroom
          </a>
        </div>

        <div className="lg:col-span-5 lg:col-start-8 grid grid-cols-2 gap-px bg-bone/15 self-center">
          {WHY.map((w, i) => (
            <Reveal
              key={w.label}
              delay={i * 0.1}
              className="bg-ink p-8 md:p-10"
            >
              <div className="font-heading text-5xl md:text-6xl text-terracotta">{w.stat}</div>
              <div className="font-body text-sm text-bone/70 mt-3 leading-snug">{w.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
