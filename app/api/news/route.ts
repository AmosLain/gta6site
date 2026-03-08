import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import path from "path";

const NEWS_FILE = path.join(process.cwd(), "data", "news.json");

function readNews() {
  try {
    return JSON.parse(readFileSync(NEWS_FILE, "utf-8"));
  } catch {
    return [];
  }
}

export async function GET() {
  const news = readNews();
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

    const news = readNews();
    const newItem = {
      id: Date.now().toString(),
      date: date || new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
      badge: badge || "News",
      title: title.trim(),
      body: body.trim(),
      source: source?.trim() || "",
      sourceUrl: sourceUrl?.trim() || "",
    };

    news.unshift(newItem); // add to top
    writeFileSync(NEWS_FILE, JSON.stringify(news, null, 2));

    return NextResponse.json({ success: true, item: newItem });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
