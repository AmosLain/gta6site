"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="email" className="py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto glass rounded-2xl p-8 sm:p-12 glow-border text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,107,53,0.4) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vice-orange/10 border border-vice-orange/20 mb-4">
            <span className="text-xs font-semibold text-vice-orange uppercase tracking-widest">
              🔔 Get Notified
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wider mb-3">
            Be First to Know
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Get instant alerts when GTA 6 pre-orders go live, pricing drops, or major
            news breaks. No spam — just the important stuff.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              disabled={status === "loading"}
              className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-vice-orange/50 focus:ring-1 focus:ring-vice-orange/30 transition-all disabled:opacity-50"
            />
            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="px-6 py-3 bg-vice-orange text-white rounded-lg font-semibold text-sm hover:bg-vice-orange/90 transition-all shadow-vice-glow-sm hover:scale-105 active:scale-95 whitespace-nowrap disabled:opacity-60 disabled:scale-100"
            >
              {status === "loading" ? "Subscribing..." : "Notify Me"}
            </button>
          </div>

          {status !== "idle" && status !== "loading" && (
            <div
              className={`mt-4 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                status === "success"
                  ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-400"
                  : "bg-red-500/15 border border-red-500/30 text-red-400"
              }`}
            >
              {status === "success"
                ? "✓ You're on the list! We'll notify you when GTA 6 news drops."
                : "✕ Something went wrong. Please try again."}
            </div>
          )}

          <p className="mt-4 text-xs text-gray-600">
            No spam. Unsubscribe anytime. Not affiliated with Rockstar Games.
          </p>
        </div>
      </div>
    </section>
  );
}
