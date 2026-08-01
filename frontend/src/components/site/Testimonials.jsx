import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { Overline } from "@/components/site/Reveal";

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const next = () => setI((v) => (v + 1) % TESTIMONIALS.length);
  const prev = () => setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section
      data-testid="testimonials-section"
      className="bg-sand grain relative"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40 relative z-10">
        <Overline>Client voices</Overline>
        <div className="mt-10 min-h-[240px] md:min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              data-testid="testimonial-quote"
            >
              <p className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-ink max-w-5xl">
                “{t.quote}”
              </p>
              <footer className="mt-10 flex items-center gap-4">
                <span className="w-12 h-px bg-terracotta" />
                <div>
                  <div className="font-body font-semibold text-ink">{t.author}</div>
                  <div className="font-mono text-xs uppercase tracking-widest text-clay">{t.role}</div>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-4 mt-12">
          <button
            onClick={prev}
            data-testid="testimonial-prev"
            aria-label="Previous testimonial"
            className="w-12 h-12 border border-ink/20 flex items-center justify-center hover:bg-walnut hover:text-bone transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={next}
            data-testid="testimonial-next"
            aria-label="Next testimonial"
            className="w-12 h-12 border border-ink/20 flex items-center justify-center hover:bg-walnut hover:text-bone transition-colors"
          >
            <ArrowRight size={18} />
          </button>
          <span className="font-mono text-sm text-clay ml-4">
            {String(i + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
};
