import { SYSTEM_PROMPT } from "./prompt.js";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    // ✅ bezpečné parsování body
    let body;
    try {
      body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    } catch {
      body = {};
    }

    const messages = Array.isArray(body?.messages) ? body.messages : [];

    const conversation = messages
      .map(m => `${m?.role === 'user' ? 'Uživatel' : 'Asistent'}: ${m?.content || ''}`)
      .join('\n');

    // ✅ timeout na fetch (zabrání 504)
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `${SYSTEM_PROMPT}

Konverzace:
${conversation}

Asistent:`,
                },
              ],
            },
          ],
        }),
        signal: controller.signal,
      }
    );

    clearTimeout(timeout);

    let data = {};
    try {
      data = await response.json();
    } catch {
      return res.status(200).json({
        reply: "Chyba při čtení odpovědi z AI."
      });
    }

    let reply = "";

    if (data?.candidates?.length > 0) {
      const parts = data.candidates[0]?.content?.parts || [];
      reply = parts.map(p => p.text || "").join("");
    }

    if (!reply) {
      reply = "DEBUG: " + JSON.stringify(data);
    }

    return res.status(200).json({ reply });

  } catch (err) {
    console.error("FATAL ERROR:", err);

    // 👉 timeout fallback
    if (err.name === "AbortError") {
      return res.status(200).json({
        reply: "Server je teď vytížený, zkus to prosím za chvíli."
      });
    }

    return res.status(200).json({
      reply: "ERROR: " + err.toString()
    });
  }
}
