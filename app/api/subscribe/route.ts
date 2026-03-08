import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = Number(process.env.BREVO_LIST_ID);

    if (!apiKey || !listId) {
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (res.status === 201 || res.status === 204) {
      return NextResponse.json({ success: true });
    }

    const data = await res.json();

    // Contact already exists — still a success from user's perspective
    if (data.code === "duplicate_parameter") {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
