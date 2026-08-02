import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { CtaBand } from "@/components/site/Blocks";
import { Reveal, Overline } from "@/components/site/Reveal";
import { getProject, PROJECTS_DATA } from "@/lib/projectsData";

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = getProject(slug);
  if (!p) return <Navigate to="/projects" replace />;

  const more = PROJECTS_DATA.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <>
      <Seo
        title={`${p.title} | ${p.roomType} Project in ${p.locality} | Mr. Wood`}
        description={`${p.brief} A ${p.style} ${p.roomType.toLowerCase()} project by Mr. Wood in ${p.locality}, Jaipur.`}
        path={`/projects/${slug}`}
        image={p.cover}
      />

      <section className="pt-36 md:pt-44 pb-14 max-w-[1600px] mx-auto px-6 md:px-12">
        <Link to="/projects" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-clay hover:text-terracotta transition-colors mb-10">
          <ArrowLeft size={14} /> All projects
        </Link>
        <Overline>{p.roomType} · {p.style} · {p.locality} · {p.year}</Overline>
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl tracking-tighter leading-[0.9] mt-6 text-ink max-w-4xl">{p.title}</h1>
      </section>

      {/* Cover */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="overflow-hidden aspect-[16/9] bg-sand">
          <img src={p.cover} alt={p.title} className="w-full h-full object-cover" loading="eager" />
        </div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-clay mt-3">Representative imagery — real project photos added as available.</p>
      </section>

      {/* Story */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-12">
          {[["The brief", p.brief], ["The challenge", p.challenge], ["The outcome", p.outcome]].map(([h, body]) => (
            <Reveal key={h}>
              <div className="border-t border-ink/15 pt-6">
                <Overline>{h}</Overline>
                <p className="font-heading text-2xl md:text-3xl text-ink leading-snug mt-4">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="border border-ink/15 p-8 sticky top-28">
            <Overline>Materials & finishes</Overline>
            <ul className="mt-5 space-y-3">
              {p.materials.map((m) => (
                <li key={m} className="font-body text-sm text-clay border-b border-ink/10 pb-3">{m}</li>
              ))}
            </ul>
            <Link to="/contact" className="inline-block mt-8 bg-walnut text-bone px-6 py-3 uppercase tracking-widest text-xs hover:bg-terracotta transition-colors">
              Start a similar project
            </Link>
          </div>
        </aside>
      </section>

      {/* Gallery */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {p.gallery.map((g, i) => (
            <Reveal key={i} delay={i * 0.05} className={i % 3 === 0 ? "md:col-span-2" : ""}>
              <div className="overflow-hidden bg-sand aspect-[16/10]">
                <img src={g} alt={`${p.title} detail ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* More projects */}
      <section className="bg-sand grain relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-24 relative z-10">
          <h2 className="font-heading text-3xl md:text-5xl text-ink mb-10">More projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {more.map((m) => (
              <Link key={m.slug} to={`/projects/${m.slug}`} className="group block bg-bone overflow-hidden">
                <div className="overflow-hidden aspect-[4/3]">
                  <img src={m.cover} alt={m.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-terracotta">{m.roomType} · {m.locality}</p>
                  <h3 className="font-heading text-2xl text-ink mt-1">{m.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
