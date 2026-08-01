import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS, whatsappLink } from "@/lib/constants";

export const StickyActions = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          className="fixed right-5 bottom-24 z-40 flex flex-col gap-3"
          data-testid="sticky-actions"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="sticky-whatsapp"
            aria-label="Chat on WhatsApp"
            className="w-13 h-13 p-3.5 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
          >
            <MessageCircle size={22} />
          </a>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            data-testid="sticky-call"
            aria-label="Call us"
            className="w-13 h-13 p-3.5 bg-walnut text-bone rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
          >
            <Phone size={22} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
