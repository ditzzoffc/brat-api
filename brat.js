import fetch from "node-fetch";

export default async function handler(req, res) {
  const text = req.query.text;

  if (!text) {
    return res.status(400).json({ error: "Parameter 'text' wajib diisi" });
  }

  try {
    const apiUrl = `https://bratgenerator.com/api?text=${encodeURIComponent(text)}`;
    const response = await fetch(apiUrl);
    const arrayBuffer = await response.arrayBuffer();

    res.setHeader("Content-Type", "image/png");
    res.send(Buffer.from(arrayBuffer));
  } catch (error) {
    res.status(500).json({ error: "Gagal mengambil gambar dari bratgenerator.com" });
  }
}
