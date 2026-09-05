import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loader2 } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
export const TOKEN_KEY = "mrwood_admin_token";

function formatErr(detail) {
  if (!detail) return "Login failed. Please try again.";
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail)) return detail.map((e) => e?.msg || JSON.stringify(e)).join(" ");
  return String(detail);
}

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/auth/login`, { email, password });
      localStorage.setItem(TOKEN_KEY, data.token);
      navigate("/admin");
    } catch (err) {
      setError(formatErr(err.response?.data?.detail) || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-ink text-bone flex items-center justify-center p-6 grain">
      <div className="w-full max-w-md relative z-10">
        <p className="font-mono text-xs uppercase tracking-widest2 text-terracotta">Mr. Wood · Admin</p>
        <h1 className="font-heading text-5xl mt-3 mb-10">Sign in.</h1>
        <form onSubmit={submit} data-testid="admin-login-form" className="space-y-8">
          <input data-testid="login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="bg-transparent border-b border-bone/25 py-3 rounded-none focus:outline-none focus:border-terracotta w-full text-lg placeholder:text-bone/40 transition-colors" />
          <input data-testid="login-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="bg-transparent border-b border-bone/25 py-3 rounded-none focus:outline-none focus:border-terracotta w-full text-lg placeholder:text-bone/40 transition-colors" />
          {error && <p data-testid="login-error" className="font-body text-sm text-terracotta">{error}</p>}
          <button type="submit" data-testid="login-submit" disabled={loading} className="w-full bg-terracotta text-bone px-8 py-4 uppercase tracking-widest text-sm hover:bg-bone hover:text-ink transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-60">
            {loading && <Loader2 size={16} className="animate-spin" />}
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
