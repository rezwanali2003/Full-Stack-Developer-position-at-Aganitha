// src/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "./db.js";
import linksRouter from "./routes/links.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

/**
 * GET /healthz
 * Basic health check for autograder.
 */
app.get("/healthz", (req, res) => {
  res.status(200).json({
    ok: true,
    version: "1.0",
    uptime: process.uptime(),
  });
});

/**
 * GET /
 * Dashboard placeholder. Frontend will be served here later.
 */
app.get("/", (req, res) => {
  res.send("assignments TinyLink backend is running");
});

// API routes
app.use("/api/links", linksRouter);

/**
 * Redirect route must be after API routes:
 * GET /:code  -> 302 or 404
 */
app.get("/:code", async (req, res) => {
  const { code } = req.params;

  try {
    // Find link by code
    const { rows } = await pool.query(
      `
        SELECT id, target_url
        FROM links
        WHERE code = $1
      `,
      [code],
    );

    if (rows.length === 0) {
      return res.status(404).send("Not found");
    }

    const link = rows[0];

    // Update stats: increment total_clicks and set last_clicked_at
    await pool.query(
      `
        UPDATE links
        SET total_clicks = total_clicks + 1,
            last_clicked_at = NOW()
        WHERE id = $1
      `,
      [link.id],
    );

    return res.redirect(302, link.target_url);
  } catch (err) {
    console.error("Error in redirect:", err);
    return res.status(500).send("Internal server error");
  }
});

// Start server
app.listen(port, () => {
  console.log(`assignments backend listening on port ${port}`);
});
app.use(cors());
app.use(express.json({ limit: "100kb" }));

// Simple startup DB check (optional, logs only)
pool
  .query("SELECT NOW()")
  .then((result) => {
    console.log("DB connected, time:", result.rows[0].now);
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });
