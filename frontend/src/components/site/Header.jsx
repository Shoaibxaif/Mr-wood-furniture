import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      data-testid="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-bone/85 backdrop-blur-xl border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link to="/" data-testid="logo-link" className="flex items-baseline gap-1">
          <span className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-ink">
            Mr. Wood
          </span>
          <span className="font-mono text-[10px] tracking-widest2 uppercase text-terracotta hidden sm:inline mb-1">
            Jaipur
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className="font-body text-sm uppercase tracking-widest text-clay hover:text-ink transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-terracotta hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            data-testid="header-quote-btn"
            className="hidden sm:inline-block bg-walnut text-bone px-6 py-3 uppercase tracking-widest text-xs hover:bg-terracotta transition-colors duration-300"
          >
            Get a Quote
          </Link>
          <button
            onClick={() => setOpen(true)}
            data-testid="mobile-menu-open"
            className="md:hidden text-ink"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-ink text-bone p-8 flex flex-col"
            data-testid="mobile-menu"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-heading text-2xl">Mr. Wood</span>
              <button onClick={() => setOpen(false)} data-testid="mobile-menu-close" aria-label="Close menu">
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-heading text-4xl hover:text-terracotta transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-auto bg-terracotta text-bone px-6 py-4 text-center uppercase tracking-widest text-sm"
            >
              Get a Quote
            </Link>
            <p className="mt-6 font-mono text-xs text-bone/60">{BUSINESS.phone}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
