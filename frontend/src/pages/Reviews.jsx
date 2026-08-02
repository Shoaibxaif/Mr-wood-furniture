import { Link } from "react-router-dom";
import { Star, ExternalLink } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { PageHero, CtaBand } from "@/components/site/Blocks";
import { whatsappLink } from "@/lib/constants";

// Honest, no-invented-content reviews page. Populate ONLY with real, sourced reviews.
const VERIFIED_REVIEWS = []; // Intentionally empty until real Google/verified reviews are imported.

export default function Reviews() {
  const hasReviews = VERIFIED_REVIEWS.length > 0;
  return (
    <>
      <Seo
        title="Reviews | Mr. Wood Interiors & Furniture, Jaipur"
        description="Verified client reviews for Mr. Wood Interiors & Furniture in Jaipur. We publish only real, sourced reviews — never invented testimonials."
        path="/reviews"
      />
      <PageHero
        overline="Reviews"
        title={<>What clients<br /><span className="italic text-terracotta">actually say.</span></>}
        sub="We publish only real, verified reviews from our clients and Google Business Profile — never invented testimonials."
      />

      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-28">
        {hasReviews ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VERIFIED_REVIEWS.map((r, i) => (
              <div key={i} className="border border-ink/15 p-8" data-testid={`review-${i}`}>
                <div className="flex gap-1 text-terracotta mb-4">{Array.from({ length: 5 }).map((_, s) => <Star key={s} size={16} fill="currentColor" />)}</div>
                <p className="font-body text-clay leading-relaxed">“{r.quote}”</p>
                <p className="font-heading text-xl text-ink mt-5">{r.author}</p>
              </div>
            ))}
          </div>
        ) : (
          <div data-testid="reviews-empty" className="border border-dashed border-ink/25 p-12 md:p-20 text-center max-w-3xl mx-auto">
            <div className="flex justify-center gap-1 text-terracotta/40 mb-6">{Array.from({ length: 5 }).map((_, s) => <Star key={s} size={22} fill="currentColor" />)}</div>
            <h2 className="font-heading text-3xl md:text-4xl text-ink">Verified reviews coming soon.</h2>
            <p className="font-body text-lg text-clay mt-5 max-w-xl mx-auto leading-relaxed">
              We're importing our verified Google Business Profile reviews here. In the meantime, we're happy to connect you directly with recent clients in your area.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a href={whatsappLink("Hi Mr. Wood, could you share references from recent clients?")} target="_blank" rel="noopener noreferrer" className="bg-walnut text-bone px-8 py-4 uppercase tracking-widest text-sm hover:bg-terracotta transition-colors">
                Ask for References
              </a>
              <Link to="/projects" className="border border-walnut/30 text-ink px-8 py-4 uppercase tracking-widest text-sm hover:bg-walnut hover:text-bone transition-colors inline-flex items-center gap-2">
                See Our Work <ExternalLink size={15} />
              </Link>
            </div>
          </div>
        )}
      </section>

      <CtaBand />
    </>
  );
}
