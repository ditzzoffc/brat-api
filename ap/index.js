import { createCanvas } from "canvas";

export default function handler(req, res) {
  const text = req.query.text || "Hello World!";
  const canvas = createCanvas(800, 400);
  const ctx = canvas.getContext("2d");

  // Background warna pink
  ctx.fillStyle = "#ffc0cb";
  ctx.fillRect(0, 0, 800, 400);

  // Teks hitam
  ctx.fillStyle = "#000";
  ctx.font = "bold 60px Arial";
  ctx.fillText(text, 50, 200);

  // Kirim hasil sebagai PNG
  res.setHeader("Content-Type", "image/png");
  res.send(canvas.toBuffer());
}
