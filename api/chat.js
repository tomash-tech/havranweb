export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models",
      {
        headers: {
          "x-goog-api-key": process.env.GEMINI_API_KEY
        }
      }
    );

    const data = await response.json();

    return res.status(200).json({
      reply: "MODELS: " + JSON.stringify(data)
    });

  } catch (err) {
    console.error("FETCH ERROR:", err);

    return res.status(200).json({
      reply: "ERROR: " + err.toString()
    });
  }
}
