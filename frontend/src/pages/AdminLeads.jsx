import { useEffect, useState } from "react";
import axios from "axios";
import { RefreshCw } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function AdminLeads() {
  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState({ total: 0, new: 0 });
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const [l, s] = await Promise.all([
        axios.get(`${API}/leads`),
        axios.get(`${API}/leads/stats`),
      ]);
      setLeads(l.data);
      setStats(s.data);
    } catch (e) {
      /* ignore */
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="min-h-screen bg-bone text-ink p-6 md:p-12 font-body">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-terracotta">Mr. Wood · Admin</p>
            <h1 className="font-heading text-4xl md:text-5xl mt-2">Lead Enquiries</h1>
          </div>
          <button
            onClick={load}
            data-testid="admin-refresh"
            className="flex items-center gap-2 border border-ink/20 px-5 py-3 uppercase tracking-widest text-xs hover:bg-walnut hover:text-bone transition-colors"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} /> Refresh
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-10">
          <div className="border border-ink/15 p-6">
            <div className="font-heading text-5xl text-terracotta" data-testid="stat-total">{stats.total}</div>
            <div className="font-mono text-xs uppercase tracking-widest text-clay mt-2">Total Leads</div>
          </div>
          <div className="border border-ink/15 p-6">
            <div className="font-heading text-5xl text-olive" data-testid="stat-new">{stats.new}</div>
            <div className="font-mono text-xs uppercase tracking-widest text-clay mt-2">New</div>
          </div>
        </div>

        <div className="border border-ink/15 overflow-x-auto">
          <table className="w-full text-sm" data-testid="leads-table">
            <thead className="bg-sand">
              <tr className="text-left font-mono text-[11px] uppercase tracking-widest text-clay">
                <th className="p-4">Name</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Service</th>
                <th className="p-4">Message</th>
                <th className="p-4">When</th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 && (
                <tr><td colSpan={5} className="p-8 text-center text-clay">No enquiries yet.</td></tr>
              )}
              {leads.map((l) => (
                <tr key={l.id} className="border-t border-ink/10 align-top" data-testid="lead-row">
                  <td className="p-4 font-semibold">{l.name}</td>
                  <td className="p-4"><a href={`tel:${l.phone}`} className="text-terracotta">{l.phone}</a></td>
                  <td className="p-4">{l.service || "—"}</td>
                  <td className="p-4 max-w-xs text-clay">{l.message || "—"}</td>
                  <td className="p-4 font-mono text-xs text-clay whitespace-nowrap">
                    {new Date(l.created_at).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
