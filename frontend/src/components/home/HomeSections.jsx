import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { WHY, DIFFERENTIATORS, PROCESS5, HOME_PRICING, whatsappLink } from "@/lib/constants";
import { SERVICE_LIST } from "@/lib/servicesData";
import { PROJECTS_DATA } from "@/lib/projectsData";
import { Reveal, Overline } from "@/components/site/Reveal";
import { SectionHeading, PricingTiers } from "@/components/site/Blocks";

const STRIP = [
  "https://images.unsplash.com/photo-1724582586495-d050726cf354?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
  "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
  "https://images.unsplash.com/photo-1631396326838-de37e5f8bcbc?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
];

const lineParent = { hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } } };
const lineChild = { hidden: { y: "110%" }, show: { y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } };
const Line = ({ children }) => (
  <span className="line-mask"><motion.span variants={lineChild} className="block">{children}</motion.span></span>
);

// ---------- HERO (typography-led + curated photo strip) ----------
export const HomeHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section id="top" ref={ref} data-testid="hero-section" className="relative pt-32 md:pt-40 pb-16 grain overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="font-mono text-xs tracking-widest2 uppercase text-terracotta mb-8">
          Interiors & Custom Furniture — Jaipur, since 2012
        </motion.div>

        <motion.h1 variants={lineParent} initial="hidden" animate="show" className="font-heading text-ink text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.86] tracking-tighter">
          <Line>Crafting</Line>
          <Line><span className="italic text-terracotta">timeless</span> spaces</Line>
          <Line>from solid wood.</Line>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-end">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="lg:col-span-5">
            <p className="font-body text-lg text-clay leading-relaxed">
              A Jaipur design-and-build studio that manufactures bespoke modular kitchens,
              wardrobes and full home interiors in-house — designed with intent, built to last.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/contact" data-testid="hero-cta-button" className="bg-walnut text-bone px-8 py-4 uppercase tracking-widest text-sm hover:bg-terracotta transition-colors duration-300">
                Book a Free Consultation
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" data-testid="hero-whatsapp-button" className="border border-walnut/30 text-ink px-8 py-4 uppercase tracking-widest text-sm hover:bg-walnut hover:text-bone transition-colors duration-300">
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Curated photo strip (not full-bleed) */}
          <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-3 gap-3 md:gap-4">
            {STRIP.map((src, i) => (
              <motion.div
                key={i}
                initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
                animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{ y: i === 1 ? y1 : y2 }}
                className={`overflow-hidden bg-sand ${i === 1 ? "aspect-[3/5]" : "aspect-[3/4] mt-6"}`}
              >
                <img src={src} alt={["Living room interior", "Modular kitchen", "Wood craftsmanship detail"][i] + " by Mr. Wood Jaipur"} className="w-full h-full object-cover" loading="eager" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- TRUST STAT BAR ----------
export const TrustBar = () => (
  <section data-testid="trust-bar" className="bg-sand border-y border-ink/10">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
      {WHY.map((w, i) => (
        <Reveal key={w.label} delay={i * 0.08} className="flex flex-col">
          <span className="font-heading text-5xl md:text-6xl text-terracotta leading-none">{w.stat}</span>
          <span className="font-body text-sm text-clay mt-3 leading-snug">{w.label}</span>
        </Reveal>
      ))}
    </div>
  </section>
);

// ---------- SERVICE ROUTING TILES (8) ----------
export const ServiceTiles = () => (
  <section id="services" data-testid="service-tiles" className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
    <SectionHeading overline="What we do" title={<>Eight disciplines,<br /><span className="italic text-terracotta">one accountable studio.</span></>} sub="Pick where you're starting. Each service is designed, manufactured and installed by the same in-house team." />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 mt-14 border border-ink/10">
      {SERVICE_LIST.map((s, i) => (
        <Reveal key={s.slug} delay={(i % 4) * 0.05}>
          <Link to={`/services/${s.slug}`} data-testid={`service-tile-${i}`} className="group bg-bone h-full p-8 flex flex-col justify-between hover:bg-sand transition-colors duration-300 min-h-[220px]">
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs text-terracotta">{String(i + 1).padStart(2, "0")}</span>
              <ArrowUpRight size={20} className="text-clay group-hover:text-terracotta group-hover:rotate-45 transition-all duration-300" />
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl text-ink tracking-tight">{s.title}</h3>
              <p className="font-body text-sm text-clay mt-3 leading-relaxed">{s.short}</p>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  </section>
);

// ---------- PROJECT PROOF STRIP ----------
export const ProjectProof = () => (
  <section id="portfolio" data-testid="project-proof" className="bg-sand grain relative">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <SectionHeading overline="Real homes, honestly shown" title={<>Spaces we've<br /><span className="italic text-terracotta">actually completed.</span></>} />
        <Link to="/projects" data-testid="see-all-projects" className="font-mono text-xs uppercase tracking-widest text-clay hover:text-terracotta transition-colors border-b border-clay/40 pb-1 shrink-0">
          See all projects →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS_DATA.slice(0, 3).map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <Link to={`/projects/${p.slug}`} data-testid={`proof-card-${i}`} className="group block overflow-hidden bg-bone">
              <div className="overflow-hidden aspect-[4/5]">
                <img src={p.cover} alt={`${p.title} — ${p.roomType}`} className="w-full h-full object-cover scale-[0.99] group-hover:scale-105 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]" loading="lazy" />
              </div>
              <div className="p-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-terracotta">{p.roomType} · {p.locality}</p>
                <h3 className="font-heading text-2xl text-ink mt-2">{p.title}</h3>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

// ---------- WHY MR. WOOD ----------
export const WhyMrWood = () => (
  <section id="why" data-testid="why-section" className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
    <SectionHeading overline="Why Mr. Wood" title={<>The difference is <span className="italic text-terracotta">who's accountable.</span></>} />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mt-14">
      {DIFFERENTIATORS.map((d, i) => (
        <Reveal key={d.title} delay={i * 0.06} className="border-t border-ink/15 pt-6">
          <h3 className="font-heading text-2xl md:text-3xl text-ink">{d.title}</h3>
          <p className="font-body text-base text-clay mt-3 leading-relaxed max-w-md">{d.body}</p>
        </Reveal>
      ))}
    </div>
  </section>
);

// ---------- PROCESS 5-STEP ----------
export const ProcessSteps = () => (
  <section id="process" data-testid="process-section" className="bg-ink text-bone grain relative">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
      <Overline className="text-terracotta">How it works</Overline>
      <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-5 leading-[0.95] max-w-3xl">
        Five steps, <span className="italic text-terracotta">no surprises.</span>
      </h2>
      <div className="mt-14 border-t border-bone/15">
        {PROCESS5.map((p, i) => (
          <Reveal key={p.no} delay={i * 0.05}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-bone/15 group">
              <div className="md:col-span-2"><span className="font-mono text-4xl md:text-5xl text-terracotta/80 group-hover:text-terracotta transition-colors">{p.no}</span></div>
              <div className="md:col-span-3"><h3 className="font-heading text-3xl text-bone">{p.title}</h3></div>
              <div className="md:col-span-6 md:col-start-7"><p className="font-body text-base md:text-lg text-bone/70 leading-relaxed">{p.body}</p></div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

// ---------- PRICING SNAPSHOT ----------
export const PricingSnapshot = () => (
  <section id="pricing" data-testid="pricing-section" className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
    <SectionHeading overline="Investment" title={<>Transparent <span className="italic text-terracotta">starting points.</span></>} sub="Full home interiors, grouped into three clear tiers so you can see roughly where you fit before we ever meet." />
    <div className="mt-14">
      <PricingTiers tiers={HOME_PRICING} note="Final quote follows a free measurement and requirement study." />
    </div>
  </section>
);
