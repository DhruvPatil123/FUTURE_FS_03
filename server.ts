import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", app: "Shri Krishna Mobiles" });
  });

  app.post("/api/contact", (req, res) => {
    // In a real application, send an email or store in DB.
    console.log("Contact form submission:", req.body);
    res.json({ success: true, message: "Thank you for reaching out! We'll get back to you soon." });
  });

  app.post("/api/reviews", (req, res) => {
    // In a real application, store this in the database and notify the owner.
    console.log("New review submission:", req.body);
    res.json({ success: true, message: "Thank you for your review!" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // Use * for Express v4 to catch all non-API routes and pass to SPA
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
