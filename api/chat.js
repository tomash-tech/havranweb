export default async function handler(req, res) {
 console.log("KEY:", process.env.GEMINI_API_KEY);
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string'
      ? JSON.parse(req.body)
      : req.body;

    const { messages } = body;

    const conversation = messages
      .map(m => `${m.role === 'user' ? 'Uživatel' : 'Asistent'}: ${m.content}`)
      .join('\n');

const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': process.env.GEMINI_API_KEY
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `Jsi přátelský AI asistent HavranWeb...

${conversation}`
            }
          ]
        }
      ]
    })
  }
);

const data = await response.json();

const reply =
  data?.candidates?.[0]?.content?.parts?.[0]?.text ||
  'Omlouvám se, něco se pokazilo.';

res.status(200).json({ reply });
   const data = await response.json();

// 👇 POŠLEME CELÝ RESPONSE DO CHatu (debug)
return res.status(200).json({
  reply: "DEBUG: " + JSON.stringify(data)
});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}
