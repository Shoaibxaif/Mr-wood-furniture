import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { Overline } from "@/components/site/Reveal";

const HOVER_IMG = [
  "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?crop=entropy&cs=srgb&fm=jpg&w=700&q=80",
  "https://images.unsplash.com/photo-1682662044733-9120471befc7?crop=entropy&cs=srgb&fm=jpg&w=700&q=80",
  "https://images.unsplash.com/photo-1720247520881-672bc136da8a?crop=entropy&cs=srgb&fm=jpg&w=700&q=80",
  "https://images.unsplash.com/photo-1631396326838-de37e5f8bcbc?crop=entropy&cs=srgb&fm=jpg&w=700&q=80",
  "https://images.unsplash.com/photo-1724582586495-d050726cf354?crop=entropy&cs=srgb&fm=jpg&w=700&q=80",
  "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?crop=entropy&cs=srgb&fm=jpg&w=700&q=80",
];

export const Services = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="services" data-testid="services-section" className="bg-sand grain relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <Overline>What we make</Overline>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-6 text-ink">
              Services, <span className="italic text-terracotta">end to end.</span>
            </h2>
          </div>
          <p className="font-body text-clay max-w-sm">
            Six disciplines, one accountable studio — from a single wardrobe to a turnkey home.
          </p>
        </div>

        <div className="relative border-t border-ink/15">
          {SERVICES.map((s, i) => (
            <a
              key={s.no}
              href="#contact"
              data-testid={`service-item-${i}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="group flex items-center justify-between gap-6 py-8 md:py-10 border-b border-ink/15 cursor-pointer"
            >
              <div className="flex items-baseline gap-6 md:gap-10">
                <span className="font-mono text-sm text-terracotta">{s.no}</span>
                <h3 className="font-heading text-3xl md:text-5xl text-ink tracking-tight group-hover:translate-x-3 transition-transform duration-300">
                  {s.title}
                </h3>
              </div>
              <div className="flex items-center gap-8">
                <p className="hidden lg:block font-body text-sm text-clay max-w-xs text-right">
                  {s.desc}
                </p>
                <ArrowUpRight
                  className="text-clay group-hover:text-terracotta group-hover:rotate-45 transition-all duration-300 shrink-0"
                  size={28}
                />
              </div>
            </a>
          ))}

          {/* Floating hover preview (desktop) */}
          <AnimatePresence>
            {active !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="hidden lg:block pointer-events-none absolute right-[42%] top-1/2 -translate-y-1/2 w-72 h-80 overflow-hidden z-20 shadow-2xl"
              >
                <img
                  src={HOVER_IMG[active]}
                  alt={SERVICES[active].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
