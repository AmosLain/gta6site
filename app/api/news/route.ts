import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const NEWS_KEY = "gta6:news";
const MAX_ITEMS = 100;

interface NewsItem {
  id: string;
  date: string;
  badge: string;
  title: string;
  body: string;
  source: string;
  sourceUrl: string;
  autoAdded?: boolean;
}

async function readNews(): Promise<NewsItem[]> {
  try {
    const data = await kv.get<NewsItem[]>(NEWS_KEY);
    return data ?? [];
  } catch {
    return [];
  }
}

async function writeNews(items: NewsItem[]): Promise<void> {
  await kv.set(NEWS_KEY, items.slice(0, MAX_ITEMS));
}

export async function GET() {
  const news = await readNews();
  return NextResponse.json(news);
}

export async function POST(req: NextRequest) {
  try {
    const { password, title, body, badge, date, source, sourceUrl } = await req.json();

    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!title?.trim() || !body?.trim()) {
      return NextResponse.json({ error: "Title and body required" }, { status: 400 });
    }

    const news = await readNews();
    const newItem: NewsItem = {
      id: Date.now().toString(),
      date:
        date ||
        new Date().toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        }),
      badge: badge || "News",
      title: title.trim(),
      body: body.trim(),
      source: source?.trim() || "",
      sourceUrl: sourceUrl?.trim() || "",
    };

    news.unshift(newItem);
    await writeNews(news);

    return NextResponse.json({ success: true, item: newItem });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { password, id } = await req.json();

    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const news = await readNews();
    const filtered = news.filter((item: NewsItem) => item.id !== id);
    await writeNews(filtered);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}