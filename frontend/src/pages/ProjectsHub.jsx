import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Seo } from "@/components/site/Seo";
import { PageHero, CtaBand } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { PROJECTS_DATA, ROOM_TYPES, STYLES, LOCALITIES } from "@/lib/projectsData";

const FilterRow = ({ label, options, value, onChange, prefix }) => (
  <div className="flex flex-wrap items-center gap-2">
    <span className="font-mono text-[10px] uppercase tracking-widest text-clay mr-2 w-16">{label}</span>
    {options.map((o) => (
      <button
        key={o}
        data-testid={`filter-${prefix}-${o.toLowerCase().replace(/\s+/g, "-")}`}
        onClick={() => onChange(o)}
        className={`font-body text-xs px-3 py-1.5 border transition-colors ${
          value === o ? "bg-walnut text-bone border-walnut" : "border-ink/20 text-clay hover:border-walnut"
        }`}
      >
        {o}
      </button>
    ))}
  </div>
);

export default function ProjectsHub() {
  const [room, setRoom] = useState("All");
  const [style, setStyle] = useState("All");
  const [locality, setLocality] = useState("All");

  const filtered = PROJECTS_DATA.filter(
    (p) =>
      (room === "All" || p.roomType === room) &&
      (style === "All" || p.style === style) &&
      (locality === "All" || p.locality === locality)
  );

  return (
    <>
      <Seo
        title="Our Projects | Interior & Furniture Portfolio in Jaipur | Mr. Wood"
        description="Browse completed interior and furniture projects by Mr. Wood across Jaipur — kitchens, wardrobes, living rooms, full homes and offices. Filter by room, style and locality."
        path="/projects"
      />
      <PageHero
        overline="Selected work"
        title={<>Real projects,<br /><span className="italic text-terracotta">real homes.</span></>}
        sub="Every project here was designed, manufactured and installed by our in-house team. Filter to find work like yours."
      />

      {/* Filters */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 pt-12 pb-4">
        <div className="space-y-4 border-b border-ink/10 pb-8" data-testid="project-filters">
          <FilterRow label="Room" options={ROOM_TYPES} value={room} onChange={setRoom} prefix="room" />
          <FilterRow label="Style" options={STYLES} value={style} onChange={setStyle} prefix="style" />
          <FilterRow label="Area" options={LOCALITIES} value={locality} onChange={setLocality} prefix="locality" />
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 pb-24 md:pb-32 pt-10">
        {filtered.length === 0 ? (
          <p className="font-body text-clay py-20 text-center" data-testid="no-projects">No projects match these filters yet — try widening your selection.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="projects-grid">
            {filtered.map((p, i) => (
              <motion.div key={p.slug} layout initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}>
                <Link to={`/projects/${p.slug}`} data-testid={`project-card-${i}`} className="group block bg-sand overflow-hidden">
                  <div className="overflow-hidden aspect-[4/5]">
                    <img src={p.cover} alt={`${p.title} — ${p.roomType} in ${p.locality}`} className="w-full h-full object-cover scale-[0.99] group-hover:scale-105 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-terracotta">{p.roomType} · {p.style} · {p.locality}</p>
                    <h3 className="font-heading text-2xl text-ink mt-2">{p.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <CtaBand />
    </>
  );
}
