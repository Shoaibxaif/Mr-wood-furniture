import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/constants";
import { Overline } from "@/components/site/Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const ContactLead = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please share your name and phone number.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, { ...form, source: "contact-form" });
      setDone(true);
      toast.success("Thank you — our design team will call you within one business day.");
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong. Please WhatsApp us instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="bg-ink text-bone grain relative">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-40 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left — NAP + map */}
        <div className="lg:col-span-5">
          <Overline className="text-terracotta">Get in touch</Overline>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-6 leading-[0.95]">
            Let&apos;s design your <span className="italic text-terracotta">next space.</span>
          </h2>
          <p className="font-body text-bone/70 mt-6 max-w-md leading-relaxed">
            Share a few details and get a free consultation and transparent estimate — no obligation.
          </p>

          <div className="mt-12 space-y-6">
            <a href={`tel:${BUSINESS.phoneRaw}`} data-testid="contact-phone" className="flex items-center gap-4 group">
              <Phone size={18} className="text-terracotta" />
              <span className="font-body text-bone/90 group-hover:text-terracotta transition-colors">{BUSINESS.phone}</span>
            </a>
            <a href={`mailto:${BUSINESS.email}`} data-testid="contact-email" className="flex items-center gap-4 group">
              <Mail size={18} className="text-terracotta" />
              <span className="font-body text-bone/90 group-hover:text-terracotta transition-colors">{BUSINESS.email}</span>
            </a>
            <div className="flex items-center gap-4">
              <MapPin size={18} className="text-terracotta" />
              <span className="font-body text-bone/90">{BUSINESS.address}</span>
            </div>
            <div className="flex items-center gap-4">
              <Clock size={18} className="text-terracotta" />
              <span className="font-body text-bone/90">{BUSINESS.hours}</span>
            </div>
          </div>

          <div className="mt-10 overflow-hidden border border-bone/15 h-56">
            <iframe
              title="Mr. Wood Interiors showroom location in Jaipur"
              src={`https://www.google.com/maps?q=${BUSINESS.mapQuery}&output=embed`}
              className="w-full h-full grayscale contrast-125"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-6 lg:col-start-7">
          {done ? (
            <div data-testid="lead-success" className="border border-terracotta/40 p-10 h-full flex flex-col justify-center">
              <h3 className="font-heading text-4xl text-terracotta">Enquiry received.</h3>
              <p className="font-body text-bone/70 mt-4">
                Our design team will reach out within one business day. For anything urgent, WhatsApp us.
              </p>
              <button
                onClick={() => setDone(false)}
                className="mt-8 self-start font-mono text-xs uppercase tracking-widest border-b border-bone/40 pb-1 hover:text-terracotta"
              >
                Send another →
              </button>
            </div>
          ) : (
            <form onSubmit={submit} data-testid="quote-form" className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <input
                  data-testid="lead-name"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Full name *"
                  className="bg-transparent border-b border-bone/25 py-3 rounded-none focus:outline-none focus:border-terracotta w-full text-lg placeholder:text-bone/40 transition-colors"
                />
                <input
                  data-testid="lead-phone"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="Phone number *"
                  className="bg-transparent border-b border-bone/25 py-3 rounded-none focus:outline-none focus:border-terracotta w-full text-lg placeholder:text-bone/40 transition-colors"
                />
              </div>
              <input
                data-testid="lead-email"
                value={form.email}
                onChange={update("email")}
                placeholder="Email (optional)"
                className="bg-transparent border-b border-bone/25 py-3 rounded-none focus:outline-none focus:border-terracotta w-full text-lg placeholder:text-bone/40 transition-colors"
              />
              <select
                data-testid="lead-service"
                value={form.service}
                onChange={update("service")}
                className="bg-transparent border-b border-bone/25 py-3 rounded-none focus:outline-none focus:border-terracotta w-full text-lg text-bone/90 transition-colors [&>option]:text-ink"
              >
                <option value="">What do you need? (optional)</option>
                {SERVICES.map((s) => (
                  <option key={s.title} value={s.title}>{s.title}</option>
                ))}
                <option value="Full Home Interior">Full Home Interior</option>
              </select>
              <textarea
                data-testid="lead-message"
                value={form.message}
                onChange={update("message")}
                rows={3}
                placeholder="Tell us about your space (optional)"
                className="bg-transparent border-b border-bone/25 py-3 rounded-none focus:outline-none focus:border-terracotta w-full text-lg placeholder:text-bone/40 resize-none transition-colors"
              />
              <button
                type="submit"
                data-testid="lead-submit"
                disabled={loading}
                className="w-full sm:w-auto bg-terracotta text-bone px-10 py-4 uppercase tracking-widest text-sm hover:bg-bone hover:text-ink transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-60"
              >
                {loading && <Loader2 size={16} className="animate-spin" />}
                {loading ? "Sending…" : "Request Free Consultation"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
