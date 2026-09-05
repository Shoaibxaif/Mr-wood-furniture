import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Seo } from "@/components/site/Seo";
import { PageHero, SectionHeading } from "@/components/site/Blocks";
import { Reveal, Overline } from "@/components/site/Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const CAPABILITIES = [
  ["Manufacturing capacity", "A dedicated in-house workshop that can run multiple project lines in parallel — we scale to your programme, not the other way around."],
  ["Material consistency", "Specify once and get the same BWP ply, hardware and finish across every unit and every site. No surprise substitutions."],
  ["Turnaround you can schedule", "Because we control fabrication, we commit to dates architects and builders can actually put on a Gantt chart."],
  ["Spec-to-site accountability", "One partner from shop drawings to installation — fewer interfaces, fewer claims, cleaner handovers."],
];

export default function Trade() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
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
      await axios.post(`${API}/leads`, { ...form, service: "Trade / B2B Partnership", lead_type: "trade", source: "trade-page" });
      setDone(true);
      toast.success("Spec received — our projects team will be in touch.");
    } catch {
      toast.error("Something went wrong. Please email us instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Seo
        title="Trade & Contract Partnerships | For Architects & Builders in Jaipur | Mr. Wood"
        description="Mr. Wood partners with architects, interior designers and builders in Jaipur for in-house joinery manufacturing, consistent materials and reliable turnaround. Submit a spec."
        path="/trade"
      />
      <PageHero
        overline="For architects & builders"
        title={<>A manufacturing<br />partner you can <span className="italic text-terracotta">rely on.</span></>}
        sub="You own the design relationship. We give you a dependable in-house workshop for the joinery, wardrobes and cabinetry that make or break a fit-out — on spec, on time."
      />

      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <SectionHeading overline="Why firms work with us" title={<>Built for <span className="italic text-terracotta">contract work.</span></>} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mt-14">
          {CAPABILITIES.map(([t, b], i) => (
            <Reveal key={t} delay={i * 0.06} className="border-t border-ink/15 pt-6">
              <h3 className="font-heading text-2xl md:text-3xl text-ink">{t}</h3>
              <p className="font-body text-base text-clay mt-3 leading-relaxed max-w-md">{b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Submit a spec */}
      <section className="bg-ink text-bone grain relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Overline className="text-terracotta">Partner with us</Overline>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-5 leading-[0.95]">Submit a <span className="italic text-terracotta">spec.</span></h2>
            <p className="font-body text-lg text-bone/70 mt-6 max-w-md">Send us a drawing, a BOQ or just a description of your programme. Our projects team will review and revert with capacity and indicative rates.</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            {done ? (
              <div data-testid="trade-success" className="border border-terracotta/40 p-10">
                <h3 className="font-heading text-4xl text-terracotta">Spec received.</h3>
                <p className="font-body text-bone/70 mt-4">Our projects team will reach out shortly to discuss capacity and terms.</p>
              </div>
            ) : (
              <form onSubmit={submit} data-testid="trade-form" className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <input data-testid="trade-name" value={form.name} onChange={update("name")} placeholder="Name / Firm *" className="bg-transparent border-b border-bone/25 py-3 rounded-none focus:outline-none focus:border-terracotta w-full text-lg placeholder:text-bone/40 transition-colors" />
                  <input data-testid="trade-phone" value={form.phone} onChange={update("phone")} placeholder="Phone *" className="bg-transparent border-b border-bone/25 py-3 rounded-none focus:outline-none focus:border-terracotta w-full text-lg placeholder:text-bone/40 transition-colors" />
                </div>
                <input data-testid="trade-email" value={form.email} onChange={update("email")} placeholder="Work email" className="bg-transparent border-b border-bone/25 py-3 rounded-none focus:outline-none focus:border-terracotta w-full text-lg placeholder:text-bone/40 transition-colors" />
                <textarea data-testid="trade-message" value={form.message} onChange={update("message")} rows={3} placeholder="Describe the programme, scope or spec…" className="bg-transparent border-b border-bone/25 py-3 rounded-none focus:outline-none focus:border-terracotta w-full text-lg placeholder:text-bone/40 resize-none transition-colors" />
                <button type="submit" data-testid="trade-submit" disabled={loading} className="w-full sm:w-auto bg-terracotta text-bone px-10 py-4 uppercase tracking-widest text-sm hover:bg-bone hover:text-ink transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-60">
                  {loading && <Loader2 size={16} className="animate-spin" />}
                  {loading ? "Sending…" : "Submit a Spec"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
