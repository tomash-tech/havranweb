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
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
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

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Omlouvám se, něco se pokazilo.";

    res.status(200).json({ reply });

  } catch (err) {
    console.error("ERROR:", err);

    res.status(200).json({
      reply: "ERROR: " + err.message
    });
  }
}
