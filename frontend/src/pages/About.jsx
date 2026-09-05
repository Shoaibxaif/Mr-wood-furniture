import { Seo } from "@/components/site/Seo";
import { PageHero, SectionHeading, CtaBand } from "@/components/site/Blocks";
import { Reveal, Overline } from "@/components/site/Reveal";
import { WHY } from "@/lib/constants";

const IMG = {
  workshop: "https://images.unsplash.com/photo-1631396326838-de37e5f8bcbc?crop=entropy&cs=srgb&fm=jpg&w=1400&q=80",
  living: "https://images.unsplash.com/photo-1724582586495-d050726cf354?crop=entropy&cs=srgb&fm=jpg&w=1200&q=80",
};

export default function About() {
  return (
    <>
      <Seo
        title="About Mr. Wood | In-House Interior & Furniture Studio in Jaipur"
        description="Mr. Wood is a Jaipur design-and-build studio that manufactures interiors and furniture in its own workshop. Meet the craftsmanship, process and people behind the work."
        path="/about"
      />
      <PageHero
        overline="Our story"
        title={<>We build what<br />we <span className="italic text-terracotta">promise.</span></>}
        sub="Mr. Wood began in 2012 with a simple frustration: interiors in Jaipur were being sold by people who never touched the tools. We decided to do both — design and make — under one roof."
        image={IMG.workshop}
      />

      {/* The differentiator */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <SectionHeading overline="Why in-house matters" title={<>No dealers.<br /><span className="italic text-terracotta">No middlemen.</span></>} />
          <div className="mt-8 space-y-5 font-body text-lg text-clay leading-relaxed max-w-xl">
            <p>Most interior companies are resellers. They win the project, then outsource the manufacturing to whichever workshop is cheapest that month. Quality becomes a lottery, and when something goes wrong, everyone points elsewhere.</p>
            <p>We took the harder path: our own workshop, our own carpenters, our own finishing line. When we promise a joint will stay tight or a timeline will hold, it's because we control the hands that make it happen.</p>
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <div className="overflow-hidden aspect-[4/5] bg-sand">
            <img src={IMG.living} alt="Mr. Wood interior craftsmanship in Jaipur" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink text-bone grain relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {WHY.map((w, i) => (
            <Reveal key={w.label} delay={i * 0.08}>
              <div className="font-heading text-5xl md:text-6xl text-terracotta">{w.stat}</div>
              <div className="font-body text-sm text-bone/70 mt-3">{w.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <SectionHeading overline="What we believe" title={<>Craft is a <span className="italic text-terracotta">discipline.</span></>} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
          {[
            ["Honesty over upselling", "We'll talk you out of finishes you don't need. A client who trusts us refers three more."],
            ["The joints decide everything", "Anyone can make furniture look good on day one. We build for how it feels in year ten."],
            ["Local and reachable", "We're a Jaipur studio, not a call centre. After handover, we still answer the phone."],
          ].map(([t, b], i) => (
            <Reveal key={t} delay={i * 0.06} className="border-t border-ink/15 pt-6">
              <h3 className="font-heading text-2xl md:text-3xl text-ink">{t}</h3>
              <p className="font-body text-base text-clay mt-3 leading-relaxed">{b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Come see the workshop." sub="Visit our Jaipur studio, meet the team and see how your space will be built — before you commit." primaryLabel="Book a Visit" />
    </>
  );
}
