import { SYSTEM_PROMPT } from "./prompt";
export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { messages } = req.body;

    const conversation = messages
      .map(m => `${m.role === 'user' ? 'Uživatel' : 'Asistent'}: ${m.content}`)
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
                 text: `Jsi AI asistent firmy HavranWeb.

Dodržuj:
- odpovídej stručně
- piš česky
- drž se informací o HavranWeb
- NEVYMÝŠLEJ obecné poučky
- ceny: E-shopy od 2000 Kč, Webové stránky obvykle 4 000 - 12 000, SEO 8 000 s vyjimkou když už u mě mají web tak 5 000
- odpovídej ve 3 větách max
- nemluv o ceně pokud se tě na ni uživatel nezeptá

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

    if (data.candidates && data.candidates.length > 0) {
      const parts = data.candidates[0].content.parts;
      reply = parts.map(p => p.text).join("");
    }

    if (!reply) {
      reply = "DEBUG: " + JSON.stringify(data);
    }

    res.status(200).json({ reply });

  } catch (err) {
    console.error("ERROR:", err);

    res.status(200).json({
      reply: "ERROR: " + err.toString()
    });
  }
}
