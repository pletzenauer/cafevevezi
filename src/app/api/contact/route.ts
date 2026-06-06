import { NextResponse } from "next/server";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
const TO_EMAIL = "info@cafevevezi.cz";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message, _hp } = body;

  // Honeypot — bots fill this hidden field
  if (_hp) {
    return NextResponse.json({ ok: true });
  }

  // Validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("BREVO_API_KEY is not set");
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 }
    );
  }

  const res = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: "Café Ve Věži Web", email: TO_EMAIL },
      to: [{ email: TO_EMAIL, name: "Café Ve Věži" }],
      replyTo: { email, name },
      subject: `Nová zpráva z webu – ${name}`,
      htmlContent: `
        <h2>Nová zpráva z kontaktního formuláře</h2>
        <p><strong>Jméno:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Brevo API error:", res.status, err);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
