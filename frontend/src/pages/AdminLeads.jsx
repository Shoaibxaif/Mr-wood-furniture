import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RefreshCw, LogOut } from "lucide-react";
import { TOKEN_KEY } from "@/pages/AdminLogin";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function AdminLeads() {
  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState({ total: 0, new: 0, homeowner: 0, trade: 0 });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const token = typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null;

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    navigate("/admin/login");
  }, [navigate]);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const headers = { Authorization: `Bearer ${token}` };
      const [l, s] = await Promise.all([
        axios.get(`${API}/leads`, { headers }),
        axios.get(`${API}/leads/stats`, { headers }),
      ]);
      setLeads(l.data);
      setStats(s.data);
    } catch (e) {
      if (e.response?.status === 401) logout();
    } finally {
      setLoading(false);
    }
  }, [token, logout]);

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }
    load();
  }, [token, load, navigate]);

  const STAT_CARDS = [
    { key: "total", label: "Total Leads", color: "text-terracotta" },
    { key: "new", label: "New", color: "text-olive" },
    { key: "homeowner", label: "Homeowner", color: "text-walnut" },
    { key: "trade", label: "Trade / B2B", color: "text-ink" },
  ];

  return (
    <div className="min-h-screen bg-bone text-ink p-6 md:p-12 font-body">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-terracotta">Mr. Wood · Admin</p>
            <h1 className="font-heading text-4xl md:text-5xl mt-2">Lead Enquiries</h1>
          </div>
          <div className="flex gap-3">
            <button onClick={load} data-testid="admin-refresh" className="flex items-center gap-2 border border-ink/20 px-5 py-3 uppercase tracking-widest text-xs hover:bg-walnut hover:text-bone transition-colors">
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} /> Refresh
            </button>
            <button onClick={logout} data-testid="admin-logout" className="flex items-center gap-2 border border-ink/20 px-5 py-3 uppercase tracking-widest text-xs hover:bg-ink hover:text-bone transition-colors">
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {STAT_CARDS.map((c) => (
            <div key={c.key} className="border border-ink/15 p-6">
              <div className={`font-heading text-4xl md:text-5xl ${c.color}`} data-testid={`stat-${c.key}`}>{stats[c.key] ?? 0}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-clay mt-2">{c.label}</div>
            </div>
          ))}
        </div>

        <div className="border border-ink/15 overflow-x-auto">
          <table className="w-full text-sm" data-testid="leads-table">
            <thead className="bg-sand">
              <tr className="text-left font-mono text-[11px] uppercase tracking-widest text-clay">
                <th className="p-4">Name</th><th className="p-4">Phone</th><th className="p-4">Type</th><th className="p-4">Service</th><th className="p-4">Message</th><th className="p-4">When</th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 && <tr><td colSpan={6} className="p-8 text-center text-clay">No enquiries yet.</td></tr>}
              {leads.map((l) => (
                <tr key={l.id} className="border-t border-ink/10 align-top" data-testid="lead-row">
                  <td className="p-4 font-semibold">{l.name}</td>
                  <td className="p-4"><a href={`tel:${l.phone}`} className="text-terracotta">{l.phone}</a></td>
                  <td className="p-4"><span className={`px-2 py-0.5 text-xs ${l.lead_type === "trade" ? "bg-walnut text-bone" : "bg-sand text-ink"}`}>{l.lead_type || "homeowner"}</span></td>
                  <td className="p-4">{l.service || "—"}</td>
                  <td className="p-4 max-w-xs text-clay">{l.message || "—"}</td>
                  <td className="p-4 font-mono text-xs text-clay whitespace-nowrap">{new Date(l.created_at).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
