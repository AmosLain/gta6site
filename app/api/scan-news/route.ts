import { NextRequest, NextResponse } from "next/server";

const RSS_FEEDS = [
  { name: "IGN", url: "https://feeds.ign.com/ign/all" },
  { name: "Eurogamer", url: "https://www.eurogamer.net/?format=rss" },
  { name: "Kotaku", url: "https://kotaku.com/rss" },
  { name: "RockstarIntel", url: "https://rockstarintel.com/feed" },
  { name: "VGC", url: "https://www.videogameschronicle.com/feed/" },
  { name: "GamesRadar", url: "https://www.gamesradar.com/rss/" },
];

const GTA6_KEYWORDS = ["gta 6", "gta6", "grand theft auto 6", "grand theft auto vi", "gta vi", "rockstar games"];

function parseRSSDate(dateStr: string): Date {
  try {
    return new Date(dateStr);
  } catch {
    return new Date(0);
  }
}

function extractItems(xml: string, sourceName: string) {
  const items: { title: string; link: string; date: Date; source: string; description: string }[] = [];

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
    const date = parseRSSDate(dateMatch?.[1]?.trim() ?? "");
    const description = descMatch?.[1]?.replace(/<[^>]+>/g, "").trim().slice(0, 200) ?? "";

    const titleLower = title.toLowerCase();
    const descLower = description.toLowerCase();
    const isGTA6 = GTA6_KEYWORDS.some(kw => titleLower.includes(kw) || descLower.includes(kw));

    if (isGTA6 && title && link) {
      items.push({ title, link, date, source: sourceName, description });
    }
  }

  return items;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const password = searchParams.get("password");

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 7); // last 7 days

  const results: { title: string; link: string; date: string; source: string; description: string }[] = [];

  await Promise.allSettled(
    RSS_FEEDS.map(async (feed) => {
      try {
        const res = await fetch(feed.url, {
          headers: { "User-Agent": "Mozilla/5.0 (compatible; GTA6HQ/1.0)" },
          signal: AbortSignal.timeout(8000),
        });
        if (!res.ok) return;
        const xml = await res.text();
        const items = extractItems(xml, feed.name);
        for (const item of items) {
          if (item.date >= cutoff) {
            results.push({
              title: item.title,
              link: item.link,
              date: item.date.toISOString(),
              source: item.source,
              description: item.description,
            });
          }
        }
      } catch {
        // feed failed silently
      }
    })
  );

  results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return NextResponse.json({ items: results, scannedAt: new Date().toISOString() });
}
