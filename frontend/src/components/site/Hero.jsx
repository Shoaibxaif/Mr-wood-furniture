import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS, whatsappLink } from "@/lib/constants";

const lineParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.35 } },
};
const lineChild = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const Line = ({ children }) => (
  <span className="line-mask">
    <motion.span variants={lineChild} className="block">
      {children}
    </motion.span>
  </span>
);

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden grain pt-28 pb-12"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end min-h-[calc(100vh-9rem)]">
        {/* Headline */}
        <div className="lg:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs tracking-widest2 uppercase text-terracotta mb-8"
          >
            Interiors & Custom Furniture — Jaipur
          </motion.div>

          <motion.h1
            variants={lineParent}
            initial="hidden"
            animate="show"
            className="font-heading text-ink text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.88] tracking-tighter"
          >
            <Line>Crafting</Line>
            <Line>
              <span className="italic text-terracotta">timeless</span> spaces
            </Line>
            <Line>from solid wood.</Line>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-10 max-w-xl"
          >
            <p className="font-body text-lg text-clay leading-relaxed">
              A Jaipur design-and-build studio manufacturing bespoke modular kitchens,
              wardrobes and full home interiors — designed with intent, crafted in-house.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                data-testid="hero-cta-button"
                className="bg-walnut text-bone px-8 py-4 uppercase tracking-widest text-sm hover:bg-terracotta transition-colors duration-300"
              >
                Book a Free Consultation
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-whatsapp-button"
                className="border border-walnut/30 text-ink px-8 py-4 uppercase tracking-widest text-sm hover:bg-walnut hover:text-bone transition-colors duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Parallax image */}
        <div className="lg:col-span-5 relative h-[45vh] lg:h-[72vh] w-full">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 overflow-hidden bg-sand"
          >
            <motion.img
              style={{ y, scale }}
              src={PROJECTS[0].img}
              alt="Premium modern living room interior designed by Mr. Wood in Jaipur"
              className="w-full h-[120%] object-cover"
              loading="eager"
            />
          </motion.div>
          <div className="absolute -bottom-4 -left-4 lg:left-auto lg:-left-10 bg-bone px-6 py-4 border border-ink/10 z-10">
            <p className="font-mono text-[10px] tracking-widest uppercase text-clay">Est.</p>
            <p className="font-heading text-3xl text-ink leading-none">2012 · Jaipur</p>
          </div>
        </div>
      </div>
    </section>
  );
};
