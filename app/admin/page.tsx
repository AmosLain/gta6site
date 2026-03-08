"use client";

import { useState } from "react";

interface NewsItem {
  title: string;
  link: string;
  date: string;
  source: string;
  description: string;
}

interface AddForm {
  title: string;
  body: string;
  badge: string;
  date: string;
  source: string;
  sourceUrl: string;
}

const RSS_FEEDS = [
  "IGN", "Eurogamer", "Kotaku", "RockstarIntel", "VGC", "GamesRadar"
];

const sourceBadgeColor: Record<string, string> = {
  IGN: "bg-red-500/20 text-red-400",
  Eurogamer: "bg-blue-500/20 text-blue-400",
  Kotaku: "bg-yellow-500/20 text-yellow-400",
  RockstarIntel: "bg-green-500/20 text-green-400",
  VGC: "bg-purple-500/20 text-purple-400",
  GamesRadar: "bg-pink-500/20 text-pink-400",
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<NewsItem[]>([]);
  const [scannedAt, setScannedAt] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [addingFor, setAddingFor] = useState<number | null>(null);
  const [saveStatus, setSaveStatus] = useState<Record<number, "idle" | "saving" | "saved" | "error">>({});
  const [form, setForm] = useState<AddForm>({ title: "", body: "", badge: "News", date: "", source: "", sourceUrl: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim()) setAuthed(true);
  };

  const scanNews = async () => {
    setLoading(true);
    setError("");
    setItems([]);
    setAddingFor(null);

    try {
      const res = await fetch(`/api/scan-news?password=${encodeURIComponent(password)}`);
      if (res.status === 401) { setError("Wrong password."); setAuthed(false); setLoading(false); return; }
      const data = await res.json();
      setItems(data.items ?? []);
      setScannedAt(data.scannedAt);
    } catch {
      setError("Scan failed. Check your connection.");
    }
    setLoading(false);
  };

  const openAddForm = (i: number, item: NewsItem) => {
    setAddingFor(i);
    setForm({
      title: item.title,
      body: item.description ? `${item.description}...` : "",
      badge: "News",
      date: new Date(item.date).toLocaleDateString("en-US", { month: "long", year: "numeric" }),
      source: item.source,
      sourceUrl: item.link,
    });
  };

  const saveToNews = async (i: number) => {
    setSaveStatus(s => ({ ...s, [i]: "saving" }));
    try {
      const res = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, ...form }),
      });
      if (res.ok) {
        setSaveStatus(s => ({ ...s, [i]: "saved" }));
        setAddingFor(null);
      } else {
        setSaveStatus(s => ({ ...s, [i]: "error" }));
      }
    } catch {
      setSaveStatus(s => ({ ...s, [i]: "error" }));
    }
  };

  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" });
    } catch { return iso; }
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass rounded-2xl p-8 w-full max-w-sm text-center">
          <div className="text-4xl mb-4">🔐</div>
          <h1 className="font-display text-2xl text-white tracking-wider mb-6">Admin Access</h1>
          <div className="flex flex-col gap-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin(e)}
              placeholder="Enter password"
              className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-vice-orange/50"
            />
            <button onClick={handleLogin} className="px-6 py-3 bg-vice-orange text-white rounded-lg font-semibold text-sm hover:bg-vice-orange/90 transition-all">
              Enter
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-display text-3xl text-white tracking-wider">GTA6 HQ Admin</h1>
          <p className="text-gray-500 text-sm mt-1">RSS News Scanner — last 7 days</p>
        </div>
        <div className="flex gap-3">
          <a href="/news" target="_blank" className="px-4 py-3 text-xs font-semibold bg-white/5 border border-white/10 text-gray-300 rounded-xl hover:bg-white/10 transition-all">
            View /news →
          </a>
          <button
            onClick={scanNews}
            disabled={loading}
            className="px-6 py-3 bg-vice-orange text-white rounded-xl font-semibold text-sm hover:bg-vice-orange/90 transition-all disabled:opacity-60 flex items-center gap-2"
          >
            {loading ? <><span className="animate-spin inline-block">⟳</span> Scanning...</> : <><span>🔍</span> Scan GTA 6 News</>}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 px-4 py-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 text-sm">{error}</div>
      )}

      {scannedAt && !loading && (
        <p className="text-xs text-gray-600 mb-4">
          Scanned at {formatDate(scannedAt)} — {items.length} GTA 6 articles found
        </p>
      )}

      {items.length === 0 && scannedAt && !loading && (
        <div className="glass rounded-2xl p-8 text-center text-gray-500 text-sm">No GTA 6 news found in the last 7 days.</div>
      )}

      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="glass rounded-2xl p-5 glow-border">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${sourceBadgeColor[item.source] ?? "bg-gray-500/20 text-gray-400"}`}>
                    {item.source}
                  </span>
                  <span className="text-xs text-gray-600">{formatDate(item.date)}</span>
                </div>
                <h3 className="text-white text-sm font-semibold leading-snug mb-1">{item.title}</h3>
                {item.description && (
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{item.description}...</p>
                )}
              </div>
              <div className="flex gap-2 shrink-0">
                <a href={item.link} target="_blank" rel="noopener noreferrer"
                  className="px-3 py-2 text-xs font-semibold bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:bg-white/10 transition-all">
                  Read →
                </a>
                {saveStatus[i] === "saved" ? (
                  <span className="px-3 py-2 text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 rounded-lg">✓ Added</span>
                ) : (
                  <button
                    onClick={() => addingFor === i ? setAddingFor(null) : openAddForm(i, item)}
                    className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all ${addingFor === i ? "bg-vice-orange/20 border border-vice-orange/40 text-vice-orange" : "bg-vice-orange/10 border border-vice-orange/20 text-vice-orange hover:bg-vice-orange/20"}`}
                  >
                    {addingFor === i ? "✕ Cancel" : "+ Add to News"}
                  </button>
                )}
              </div>
            </div>

            {/* Inline add form */}
            {addingFor === i && (
              <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Badge</label>
                    <select
                      value={form.badge}
                      onChange={(e) => setForm(f => ({ ...f, badge: e.target.value }))}
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-vice-orange/50"
                    >
                      <option>News</option>
                      <option>Official</option>
                      <option>Rumor</option>
                      <option>Leak</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Date label</label>
                    <input
                      value={form.date}
                      onChange={(e) => setForm(f => ({ ...f, date: e.target.value }))}
                      placeholder="e.g. March 2026"
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-vice-orange/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Title</label>
                  <input
                    value={form.title}
                    onChange={(e) => setForm(f => ({ ...f, title: e.target.value }))}
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-vice-orange/50"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Body <span className="text-gray-600">(edit before saving)</span></label>
                  <textarea
                    value={form.body}
                    onChange={(e) => setForm(f => ({ ...f, body: e.target.value }))}
                    rows={4}
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-vice-orange/50 resize-none"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-600">Source: {form.source} — <a href={form.sourceUrl} target="_blank" className="text-vice-orange hover:underline">preview →</a></p>
                  <button
                    onClick={() => saveToNews(i)}
                    disabled={saveStatus[i] === "saving"}
                    className="px-5 py-2 bg-vice-orange text-white rounded-lg font-semibold text-xs hover:bg-vice-orange/90 transition-all disabled:opacity-60"
                  >
                    {saveStatus[i] === "saving" ? "Saving..." : "Save to /news"}
                  </button>
                </div>
                {saveStatus[i] === "error" && (
                  <p className="text-xs text-red-400">Failed to save. Try again.</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
