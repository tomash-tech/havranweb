import { SYSTEM_PROMPT } from "./prompt.js";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    // bezpečné parsování body
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

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama3-70b-8192",
        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          {
            role: "user",
            content: conversation,
          },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    const reply =
      data?.choices?.[0]?.message?.content ||
      "Omlouvám se, něco se pokazilo.";

    return res.status(200).json({ reply });

  } catch (err) {
    console.error("ERROR:", err);

    return res.status(200).json({
      reply: "Server je teď vytížený, zkus to prosím za chvíli."
    });
  }
}
