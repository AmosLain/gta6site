import type { Metadata } from "next";
import { readFileSync } from "fs";
import path from "path";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import EmailCapture from "@/components/EmailCapture";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "GTA 6 News — Latest Updates, Leaks & Announcements (2026)",
  description:
    "All the latest GTA 6 news: release date confirmations, trailer breakdowns, leaks, Take-Two earnings updates, and Rockstar announcements. Updated regularly.",
  alternates: { canonical: "/news" },
};

interface NewsItem {
  id: string;
  date: string;
  badge: string;
  title: string;
  body: string;
  source: string;
  sourceUrl: string;
}

function getNews(): NewsItem[] {
  try {
    const file = path.join(process.cwd(), "data", "news.json");
    return JSON.parse(readFileSync(file, "utf-8"));
  } catch {
    return [];
  }
}

const badgeColors: Record<string, string> = {
  Official: "bg-vice-orange/20 text-vice-orange",
  Rumor: "bg-yellow-500/20 text-yellow-400",
  Leak: "bg-red-500/20 text-red-400",
  News: "bg-blue-500/20 text-blue-400",
};

const faqItems = [
  {
    question: "What is the latest GTA 6 news?",
    answer:
      "As of March 2026, the most recent official news is Take-Two's February 2026 earnings call confirming the November 19, 2026 release date. The next major news event is expected Summer 2026 when Rockstar's marketing campaign begins.",
  },
  {
    question: "Has GTA 6 been delayed again?",
    answer:
      "As of the latest Take-Two earnings call in February 2026, GTA 6 is confirmed for November 19, 2026. The game has been delayed twice before — from 2025 to May 2026, then to November 2026.",
  },
  {
    question: "When will Rockstar announce more GTA 6 details?",
    answer:
      "Rockstar's marketing campaign is expected to begin Summer 2026, approximately 3–4 months before the November launch. This typically means Trailer 3, pre-order announcements, and potentially a gameplay showcase.",
  },
  {
    question: "Where can I follow GTA 6 news?",
    answer:
      "The best sources are Rockstar Games' official website and YouTube channel, Take-Two Interactive's investor relations page for earnings updates, and journalists like Jason Schreier who have well-sourced Rockstar reporting. Sign up for our email updates below.",
  },
];

export default function NewsPage() {
  const newsItems = getNews();

  return (
    <>
      <Hero
        title="GTA 6 NEWS"
        subtitle="Every major update, announcement, and confirmed detail — in chronological order. Bookmark this page and check back as the November 2026 launch approaches."
        badge="Last Updated: March 2026"
        primaryCTA={{ label: "Release Date", href: "/release-date" }}
        secondaryCTA={{ label: "Watch Trailers", href: "/trailer" }}
      />

      <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto space-y-6">
        <h2 className="font-display text-3xl text-white tracking-wider text-center mb-8">
          LATEST UPDATES
        </h2>
        {newsItems.length === 0 && (
          <div className="glass rounded-2xl p-8 text-center text-gray-500">No news yet.</div>
        )}
        {newsItems.map((item) => (
          <div key={item.id} className="glass rounded-2xl p-6 sm:p-8 glow-border">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className={`text-xs font-semibold px-2 py-1 rounded ${badgeColors[item.badge] ?? "bg-gray-500/20 text-gray-400"} uppercase tracking-wider`}>
                {item.badge}
              </span>
              <span className="text-xs text-gray-500">{item.date}</span>
              {item.source && item.sourceUrl && (
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-vice-orange hover:underline"
                >
                  via {item.source} →
                </a>
              )}
            </div>
            <h3 className="font-display text-xl text-white tracking-wide mb-3">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
          </div>
        ))}
      </section>

      <section className="py-8 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-8 sm:p-12">
          <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wider mb-6">
            What to Expect Before Launch
          </h2>
          <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
            <p>
              With GTA 6 confirmed for November 19, 2026, Rockstar has a well-established marketing playbook to
              follow. The silence that defined 2024 and early 2025 is expected to give way to a major campaign
              starting around June or July 2026 — roughly 4–5 months before launch.
            </p>
            <p>
              Based on Rockstar's history with GTA 5 and Red Dead Redemption 2, expect a Trailer 3 that shows
              extended gameplay, a pre-order announcement with edition details and pricing, and possibly a
              dedicated gameplay deep-dive showcasing the open world and story. Closer to launch, a GTA Online
              reveal is also likely.
            </p>
            <p>
              The November 19 date places GTA 6 in prime holiday shopping territory — the same window that
              saw record-breaking launches for Call of Duty and other major titles. For a game of this scale
              and budget, the holiday window almost guarantees record first-week sales regardless of reviews.
            </p>
          </div>
        </div>
      </section>

      <FAQ
        heading="NEWS FAQ"
        items={faqItems}
      />

      <EmailCapture />
      <LastUpdated className="pb-8" />
    </>
  );
}
