import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const NEWS_KEY = "gta6:news";
const LAST_SCAN_KEY = "gta6:last_scan";
const MAX_ITEMS = 100;

const RSS_FEEDS = [
  { name: "RockstarIntel", url: "https://rockstarintel.com/feed", badge: "News" },
  { name: "IGN", url: "https://feeds.ign.com/ign/all", badge: "News" },
  { name: "Kotaku", url: "https://kotaku.com/rss", badge: "News" },
  { name: "Eurogamer", url: "https://www.eurogamer.net/?format=rss", badge: "News" },
  { name: "VGC", url: "https://www.videogameschronicle.com/feed/", badge: "News" },
  { name: "GamesRadar", url: "https://www.gamesradar.com/rss/", badge: "News" },
];

const GTA6_KEYWORDS = [
  "gta 6", "gta6", "grand theft auto 6", "grand theft auto vi", "gta vi",
  "lucia", "jason duval", "vice city 2026", "rockstar games gta",
];

interface NewsItem {
  id: string;
  date: string;
  badge: string;
  title: string;
  body: string;
  source: string;
  sourceUrl: string;
  autoAdded: boolean;
}

function extractItems(xml: string, sourceName: string, badge: string) {
  const items: { title: string; link: string; date: Date; description: string }[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
  let match: RegExpExecArray | null;

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1];
    const titleMatch = itemXml.match(/<title>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/title>/i);
    const linkMatch = itemXml.match(/<link>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/link>/i) ||
                      itemXml.match(/<link[^>]*href="([^"]+)"/i);
    const dateMatch = itemXml.match(/<pubDate>(.*?)<\/pubDate>/i) ||
                      itemXml.match(/<dc:date>(.*?)<\/dc:date>/i);
    const descMatch = itemXml.match(/<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/i);

    const title = titleMatch?.[1]?.trim() ?? "";
    const link = linkMatch?.[1]?.trim() ?? "";
    const dateStr = dateMatch?.[1]?.trim() ?? "";
    const description = descMatch?.[1]?.replace(/<[^>]+>/g, "").trim().slice(0, 300) ?? "";
    const date = dateStr ? new Date(dateStr) : new Date(0);

    const isGTA6 = GTA6_KEYWORDS.some((kw) =>
      title.toLowerCase().includes(kw) || description.toLowerCase().includes(kw)
    );

    if (isGTA6 && title && link) {
      items.push({ title, link, date, description });
    }
  }

  return items.map((item) => ({
    id: `auto_${Buffer.from(item.link).toString("base64").slice(0, 16)}`,
    date: item.date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    badge,
    title: item.title,
    body: item.description || `Latest GTA 6 coverage from ${sourceName}.`,
    source: sourceName,
    sourceUrl: item.link,
    autoAdded: true,
    _date: item.date,
  }));
}

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const { searchParams } = new URL(req.url);
  const password = searchParams.get("password");

  const isCron = authHeader === `Bearer ${process.env.CRON_SECRET}`;
  const isManual = password === process.env.ADMIN_PASSWORD;

  if (!isCron && !isManual) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 14);

  const allNewItems: (NewsItem & { _date?: Date })[] = [];

  await Promise.allSettled(
    RSS_FEEDS.map(async (feed) => {
      try {
        const res = await fetch(feed.url, {
          headers: { "User-Agent": "Mozilla/5.0 (compatible; GTA6HQ/1.0)" },
          signal: AbortSignal.timeout(8000),
        });
        if (!res.ok) return;
        const xml = await res.text();
        const items = extractItems(xml, feed.name, feed.badge);
        for (const item of items) {
          if (item._date && item._date >= cutoff) {
            allNewItems.push(item as NewsItem & { _date?: Date });
          }
        }
      } catch {
        // silent fail
      }
    })
  );

  if (allNewItems.length === 0) {
    await kv.set(LAST_SCAN_KEY, new Date().toISOString());
    return NextResponse.json({ added: 0, message: "No new GTA 6 articles found" });
  }

  const existing = await kv.get<NewsItem[]>(NEWS_KEY) ?? [];
  const existingIds = new Set(existing.map((item) => item.id));
  const existingUrls = new Set(existing.map((item) => item.sourceUrl));

  const toAdd = allNewItems
    .filter((item) => !existingIds.has(item.id) && !existingUrls.has(item.sourceUrl))
    .sort((a, b) => (b._date?.getTime() ?? 0) - (a._date?.getTime() ?? 0));

  const cleanItems: NewsItem[] = toAdd.map(({ _date, ...item }) => item);
  const merged = [...cleanItems, ...existing].slice(0, MAX_ITEMS);

  await kv.set(NEWS_KEY, merged);
  await kv.set(LAST_SCAN_KEY, new Date().toISOString());

  return NextResponse.json({
    added: cleanItems.length,
    total: merged.length,
    scannedAt: new Date().toISOString(),
    newTitles: cleanItems.map((i) => i.title),
  });
}
