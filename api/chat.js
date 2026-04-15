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
  "https://generativelanguage.googleapis.com/v1/models?key=" + process.env.GEMINI_API_KEY
);

const data = await response.json();

return res.status(200).json({
  reply: "MODELS: " + JSON.stringify(data)
});
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `Jsi přátelský AI asistent HavranWeb.

${conversation}`,
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
      reply: "ERROR: " + err.message
    });
  }
}
