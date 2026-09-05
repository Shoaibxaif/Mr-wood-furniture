import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { FaqBlock, CtaBand } from "@/components/site/Blocks";
import { Reveal, Overline } from "@/components/site/Reveal";
import { getGuide } from "@/lib/guidesData";

export default function GuideArticle() {
  const { slug } = useParams();
  const g = getGuide(slug);
  if (!g) return <Navigate to="/guides" replace />;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", headline: g.title, description: g.metaDescription, author: { "@type": "Organization", name: "Mr. Wood Interiors & Furniture" }, publisher: { "@type": "Organization", name: "Mr. Wood Interiors & Furniture" } },
      { "@type": "FAQPage", mainEntity: g.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  const related = (g.related || []).map(getGuide).filter(Boolean);

  return (
    <>
      <Seo title={g.metaTitle} description={g.metaDescription} path={`/guides/${slug}`} jsonLd={jsonLd} />

      <article className="max-w-[900px] mx-auto px-6 md:px-12 pt-36 md:pt-44 pb-24">
        <Link to="/guides" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-clay hover:text-terracotta transition-colors mb-10">
          <ArrowLeft size={14} /> All guides
        </Link>

        <Overline>Guide · Updated {g.updated} · {g.readTime}</Overline>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95] mt-5 text-ink">{g.title}</h1>
        <p className="font-body text-xl text-clay mt-8 leading-relaxed">{g.intro}</p>

        <div className="mt-14 space-y-12">
          {g.sections.map((s, i) => (
            <Reveal key={i}>
              <section>
                <h2 className="font-heading text-3xl md:text-4xl text-ink tracking-tight">{s.h2}</h2>
                <p className="font-body text-lg text-clay mt-4 leading-relaxed">{s.body}</p>
              </section>
            </Reveal>
          ))}
        </div>

        {g.table && (
          <Reveal>
            <figure className="mt-14">
              <div className="overflow-x-auto border border-ink/15">
                <table className="w-full text-left" data-testid="guide-table">
                  <thead className="bg-sand">
                    <tr className="font-mono text-[11px] uppercase tracking-widest text-clay">
                      {g.table.head.map((h) => <th key={h} className="p-4">{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {g.table.rows.map((row, ri) => (
                      <tr key={ri} className="border-t border-ink/10 font-body text-sm">
                        {row.map((cell, ci) => (
                          <td key={ci} className={`p-4 ${ci === 0 ? "font-semibold text-ink" : "text-clay"}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <figcaption className="font-mono text-xs text-clay mt-3 uppercase tracking-wider">{g.table.caption} — demo data.</figcaption>
            </figure>
          </Reveal>
        )}

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="font-heading text-3xl md:text-4xl text-ink mb-6">Frequently asked</h2>
          <FaqBlock faqs={g.faqs} testid="guide-faq" />
        </div>

        {related.length > 0 && (
          <div className="mt-16 border-t border-ink/15 pt-10">
            <Overline>Keep reading</Overline>
            <div className="mt-6 space-y-4">
              {related.map((r) => (
                <Link key={r.slug} to={`/guides/${r.slug}`} className="block font-heading text-2xl text-ink hover:text-terracotta transition-colors">{r.title} →</Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <CtaBand />
    </>
  );
}
