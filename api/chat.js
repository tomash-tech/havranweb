import { SYSTEM_PROMPT } from "./prompt.js";

export default async function handler(request) {
  try {
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      body = {};
    }

    const messages = Array.isArray(body?.messages) ? body.messages : [];

    const conversation = messages
      .map(m => `${m?.role === 'user' ? 'Uživatel' : 'Asistent'}: ${m?.content || ''}`)
      .join('\n');

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
      }
    );

    const data = await response.json();

    let reply = "";

    if (data?.candidates?.length > 0) {
      const parts = data.candidates[0]?.content?.parts || [];
      reply = parts.map(p => p.text || "").join("");
    }

    if (!reply) {
      reply = "DEBUG: " + JSON.stringify(data);
    }

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(JSON.stringify({
      reply: "ERROR: " + err.toString()
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
