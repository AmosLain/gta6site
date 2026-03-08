"use client";

import { useState } from "react";

interface NewsItem {
  id: string;
  title: string;
  body: string;
  date: string;
  source: string;
  sourceUrl: string;
  badge: string;
  autoAdded?: boolean;
}

interface ScannedItem {
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

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scannedItems, setScannedItems] = useState<ScannedItem[]>([]);
  const [savedNews, setSavedNews] = useState<NewsItem[]>([]);
  const [activeTab, setActiveTab] = useState<"scan" | "manage">("scan");
  const [scannedAt, setScannedAt] = useState<string | null>(null);
  const [cronResult, setCronResult] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [addingFor, setAddingFor] = useState<number | null>(null);
  const [saveStatus, setSaveStatus] = useState<Record<number, string>>({});
  const [form, setForm] = useState<AddForm>({ title: "", body: "", badge: "News", date: "", source: "", sourceUrl: "" });

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (password.trim()) setAuthed(true);
  };

  const scanNews = async () => {
    setLoading(true);
    setError("");
    setScannedItems([]);
    setAddingFor(null);

    try {
      const res = await fetch(`/api/scan-news?password=${encodeURIComponent(password)}`);
      if (res.status === 401) { setError("Wrong password."); setAuthed(false); setLoading(false); return; }
      const data = await res.json();
      setScannedItems(data.items ?? []);
      setScannedAt(data.scannedAt);
    } catch {
      setError("Scan failed.");
    } finally {
      setLoading(false);
    }
  };

  const triggerAutoCron = async () => {
    setLoading(true);
    setCronResult(null);
    setError("");
    try {
      const res = await fetch(`/api/cron/scan-news?password=${encodeURIComponent(password)}`);
      const data = await res.json();
      if (data.added !== undefined) {
        setCronResult(`✅ Auto-scan complete: ${data.added} new articles added (${data.total} total)`);
      } else {
        setCronResult(`⚠️ ${data.message || data.error || "Unknown result"}`);
      }
    } catch {
      setError("Auto-scan failed.");
    } finally {
      setLoading(false);
    }
  };

  const loadSavedNews = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/news");
      const data = await res.json();
      setSavedNews(data);
    } catch {
      setError("Failed to load news.");
    } finally {
      setLoading(false);
    }
  };

  const deleteNews = async (id: string) => {
    try {
      const res = await fetch("/api/news", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, id }),
      });
      if (res.ok) {
        setSavedNews((prev) => prev.filter((item) => item.id !== id));
      }
    } catch {
      setError("Delete failed.");
    }
  };

  const saveItem = async (i: number, item: ScannedItem) => {
    setSaveStatus((s: Record<number, string>) => ({ ...s, [i]: "saving" }));
    try {
      const payload = {
        password,
        title: form.title || item.title,
        body: form.body || item.description || `${item.title} — Read more at ${item.source}.`,
        badge: form.badge || "News",
        date: form.date || new Date(item.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
        source: item.source,
        sourceUrl: item.link,
      };
      const res = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setSaveStatus((s: Record<number, string>) => ({ ...s, [i]: "saved" }));
        setAddingFor(null);
        setForm({ title: "", body: "", badge: "News", date: "", source: "", sourceUrl: "" });
      } else {
        setSaveStatus((s: Record<number, string>) => ({ ...s, [i]: "error" }));
      }
    } catch {
      setSaveStatus((s: Record<number, string>) => ({ ...s, [i]: "error" }));
    }
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass rounded-2xl p-8 w-full max-w-sm">
          <h1 className="font-display text-3xl text-white tracking-wider mb-6 text-center">ADMIN</h1>
          {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") { if (password.trim()) setAuthed(true); } }}
            placeholder="Password"
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 mb-4 focus:outline-none focus:border-vice-orange"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-vice-orange text-black font-bold py-3 rounded-lg hover:bg-orange-400 transition-colors"
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-12 max-w-5xl mx-auto">
      <h1 className="font-display text-4xl text-white tracking-wider mb-2">NEWS ADMIN</h1>
      <p className="text-gray-500 text-sm mb-8">Manage GTA 6 HQ news feed</p>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {(["scan", "manage"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => { setActiveTab(tab); if (tab === "manage") loadSavedNews(); }}
            className={`px-4 py-2 rounded-lg font-bold text-sm capitalize transition-colors ${
              activeTab === tab ? "bg-vice-orange text-black" : "bg-white/10 text-gray-400 hover:text-white"
            }`}
          >
            {tab === "scan" ? "🔍 Scan RSS" : "📋 Manage News"}
          </button>
        ))}
      </div>

      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

      {/* SCAN TAB */}
      {activeTab === "scan" && (
        <div>
          <div className="flex gap-3 mb-6 flex-wrap">
            <button
              onClick={scanNews}
              disabled={loading}
              className="bg-vice-orange text-black font-bold px-6 py-3 rounded-lg hover:bg-orange-400 transition-colors disabled:opacity-50"
            >
              {loading ? "Scanning..." : "🔍 Manual Scan (Preview)"}
            </button>
            <button
              onClick={triggerAutoCron}
              disabled={loading}
              className="bg-green-500/20 text-green-400 border border-green-500/30 font-bold px-6 py-3 rounded-lg hover:bg-green-500/30 transition-colors disabled:opacity-50"
            >
              {loading ? "Running..." : "⚡ Auto-Scan & Save"}
            </button>
          </div>

          {cronResult && (
            <div className="glass rounded-xl p-4 mb-6 text-sm text-green-400">{cronResult}</div>
          )}

          {scannedAt && (
            <p className="text-gray-500 text-xs mb-4">
              Scanned: {new Date(scannedAt).toLocaleString()} — {scannedItems.length} GTA 6 articles found
            </p>
          )}

          <div className="space-y-4">
            {scannedItems.map((item, i) => (
              <div key={i} className="glass rounded-xl p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded mr-2 ${
                      item.source === "RockstarIntel" ? "bg-green-500/20 text-green-400" :
                      item.source === "IGN" ? "bg-red-500/20 text-red-400" :
                      "bg-blue-500/20 text-blue-400"
                    }`}>{item.source}</span>
                    <span className="text-gray-500 text-xs">{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex gap-2">
                    {saveStatus[i] === "saved" ? (
                      <span className="text-green-400 text-sm font-bold">✓ Saved</span>
                    ) : saveStatus[i] === "saving" ? (
                      <span className="text-gray-400 text-sm">Saving...</span>
                    ) : (
                      <button
                        onClick={() => setAddingFor(addingFor === i ? null : i)}
                        className="text-xs bg-vice-orange/20 text-vice-orange border border-vice-orange/30 px-3 py-1.5 rounded-lg hover:bg-vice-orange/30 transition-colors"
                      >
                        {addingFor === i ? "Cancel" : "+ Add to News"}
                      </button>
                    )}
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-vice-orange text-xs hover:underline">
                  {item.link.slice(0, 60)}...
                </a>

                {addingFor === i && (
                  <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                    <input
                      placeholder={`Title: ${item.title}`}
                      value={form.title}
                      onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-vice-orange"
                    />
                    <textarea
                      placeholder={item.description || "Write a summary..."}
                      value={form.body}
                      onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
                      rows={3}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-vice-orange resize-none"
                    />
                    <div className="flex gap-2">
                      {["News", "Official", "Rumor", "Leak"].map((b) => (
                        <button
                          key={b}
                          onClick={() => setForm((f) => ({ ...f, badge: b }))}
                          className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                            form.badge === b
                              ? "bg-vice-orange text-black border-vice-orange"
                              : "bg-white/5 text-gray-400 border-white/10 hover:border-vice-orange/50"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => saveItem(i, item)}
                      className="bg-vice-orange text-black font-bold px-4 py-2 rounded-lg hover:bg-orange-400 transition-colors text-sm"
                    >
                      Save to News Feed
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MANAGE TAB */}
      {activeTab === "manage" && (
        <div>
          <p className="text-gray-500 text-sm mb-6">{savedNews.length} articles in news feed</p>
          <div className="space-y-3">
            {savedNews.map((item) => (
              <div key={item.id} className="glass rounded-xl p-4 flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                      item.badge === "Official" ? "bg-green-500/20 text-green-400" :
                      item.badge === "Rumor" ? "bg-yellow-500/20 text-yellow-400" :
                      item.badge === "Leak" ? "bg-red-500/20 text-red-400" :
                      "bg-blue-500/20 text-blue-400"
                    }`}>{item.badge}</span>
                    {item.autoAdded && <span className="text-xs text-gray-600 bg-white/5 px-2 py-0.5 rounded">auto</span>}
                    <span className="text-gray-600 text-xs">{item.date}</span>
                  </div>
                  <h3 className="text-white text-sm font-semibold truncate">{item.title}</h3>
                  {item.source && <p className="text-gray-600 text-xs mt-0.5">via {item.source}</p>}
                </div>
                <button
                  onClick={() => deleteNews(item.id)}
                  className="text-red-400/60 hover:text-red-400 text-sm transition-colors flex-shrink-0"
                  title="Delete"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
