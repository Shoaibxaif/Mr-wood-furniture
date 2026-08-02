import { Link } from "react-router-dom";
import { BUSINESS, whatsappLink } from "@/lib/constants";
import { SERVICE_LIST } from "@/lib/servicesData";

const EXPLORE = [
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Guides", to: "/guides" },
  { label: "About", to: "/about" },
  { label: "Trade Partners", to: "/trade" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

export const Footer = () => (
  <footer data-testid="site-footer" className="bg-bone border-t border-ink/10">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-20 pb-10">
      <div className="grid grid-cols-2 md:grid-cols-12 gap-10 mb-16">
        <div className="col-span-2 md:col-span-4">
          <h3 className="font-heading text-3xl text-ink">Mr. Wood Interiors & Furniture</h3>
          <p className="font-body text-clay mt-4 max-w-sm">
            Bespoke furniture manufacturing and interior design, crafted in Jaipur since 2012.
            Serving Jaipur and select projects across Rajasthan.
          </p>
        </div>

        <div className="md:col-span-3 md:col-start-6">
          <p className="font-mono text-xs uppercase tracking-widest text-terracotta mb-5">Services</p>
          <ul className="space-y-3">
            {SERVICE_LIST.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="font-body text-sm text-clay hover:text-ink transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="font-mono text-xs uppercase tracking-widest text-terracotta mb-5">Explore</p>
          <ul className="space-y-3">
            {EXPLORE.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="font-body text-sm text-clay hover:text-ink transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="font-mono text-xs uppercase tracking-widest text-terracotta mb-5">Contact</p>
          <ul className="space-y-3 font-body text-sm text-clay">
            <li><a href={`tel:${BUSINESS.phoneRaw}`} className="hover:text-ink transition-colors">{BUSINESS.phone}</a></li>
            <li><a href={`mailto:${BUSINESS.email}`} className="hover:text-ink transition-colors">{BUSINESS.email}</a></li>
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">WhatsApp</a></li>
            <li className="max-w-[220px]">{BUSINESS.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10 pt-10">
        <Link to="/" className="block">
          <h2 className="font-heading text-[19vw] leading-[0.8] tracking-tighter text-ink/90 select-none hover:text-terracotta transition-colors">
            Mr. Wood
          </h2>
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-10 pt-6 border-t border-ink/10">
        <p className="font-mono text-xs text-clay">© {new Date().getFullYear()} Mr. Wood Interiors & Furniture · Jaipur, Rajasthan</p>
        <p className="font-mono text-xs text-clay">Interior Design · Custom Furniture · Modular Kitchens</p>
      </div>
    </div>
  </footer>
);
