import { motion } from "framer-motion";

// Shared scroll-reveal wrapper
export const Reveal = ({ children, delay = 0, y = 40, className = "", ...props }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

// Overline label
export const Overline = ({ children, className = "" }) => (
  <span className={`font-mono text-xs tracking-widest2 uppercase text-terracotta ${className}`}>
    {children}
  </span>
);
