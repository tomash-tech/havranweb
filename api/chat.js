import { SYSTEM_PROMPT } from "./prompt.js";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    let body;
    try {
      body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    } catch {
      body = {};
    }

    const messages = Array.isArray(body?.messages) ? body.messages : [];

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          ...messages.map(m => ({
            role: m.role,
            content: m.content || "",
          })),
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    let reply = data?.choices?.[0]?.message?.content;

    if (!reply) {
      reply = "DEBUG: " + JSON.stringify(data);
    }

    return res.status(200).json({ reply });

  } catch (err) {
    console.error("ERROR:", err);

    return res.status(200).json({
      reply: "Server je teď vytížený, zkus to prosím za chvíli."
    });
  }
}