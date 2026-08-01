import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const sessionId = `web-${Math.random().toString(36).slice(2)}-${Date.now()}`;

const SUGGESTIONS = [
  "What does a modular kitchen cost?",
  "Plywood or MDF for wardrobes?",
  "How long does a full home take?",
];

export const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm the Mr. Wood design assistant. Ask me anything about kitchens, wardrobes, materials or costs." },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = async (text) => {
    const msg = (text ?? input).trim();
    if (!msg || busy) return;
    setInput("");
    setBusy(true);
    setMessages((m) => [...m, { role: "user", content: msg }, { role: "assistant", content: "" }]);

    try {
      const res = await fetch(`${API}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, message: msg }),
      });
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
    } catch (e) {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { role: "assistant", content: "I'm having trouble connecting. Please WhatsApp us and our team will help right away." };
        return copy;
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        data-testid="chat-toggle"
        aria-label="Open design assistant"
        className="fixed right-5 bottom-5 z-50 w-14 h-14 bg-terracotta text-bone rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        {open ? <X size={24} /> : <Sparkles size={24} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            data-testid="chat-window"
            className="fixed right-5 bottom-24 z-50 w-[90vw] max-w-sm h-[70vh] max-h-[560px] bg-bone border border-ink/15 shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-ink text-bone px-5 py-4 flex items-center gap-3">
              <Sparkles size={18} className="text-terracotta" />
              <div>
                <p className="font-heading text-lg leading-none">Design Assistant</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-bone/50 mt-1">Mr. Wood · Jaipur</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    data-testid={`chat-msg-${m.role}`}
                    className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed font-body ${
                      m.role === "user"
                        ? "bg-walnut text-bone"
                        : "bg-sand text-ink border border-ink/10"
                    }`}
                  >
                    {m.content || <span className="opacity-50">…</span>}
                  </div>
                </div>
              ))}
              {messages.length <= 1 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="font-body text-xs border border-ink/20 px-3 py-1.5 text-clay hover:bg-walnut hover:text-bone hover:border-walnut transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="p-3 border-t border-ink/10 flex items-center gap-2">
              <input
                data-testid="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about your space…"
                className="flex-1 bg-transparent text-sm font-body focus:outline-none px-2 text-ink placeholder:text-clay/60"
              />
              <button
                onClick={() => send()}
                disabled={busy}
                data-testid="chat-send"
                aria-label="Send message"
                className="w-10 h-10 bg-terracotta text-bone flex items-center justify-center hover:bg-walnut transition-colors disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
