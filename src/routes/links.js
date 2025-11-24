// src/routes/links.js
import express from "express";
import { pool } from "../db.js";
import { isValidUrl, isValidCode, generateCode } from "../validation.js";

const router = express.Router();

/**
 * Helper: fetch one link by code
 */
async function findLinkByCode(code) {
  const { rows } = await pool.query(
    `
      SELECT id, code, target_url, total_clicks, last_clicked_at, created_at
      FROM links
      WHERE code = $1
    `,
    [code],
  );
  return rows[0] || null;
}

/**
 * POST /api/links
 * Body: { url: string, code?: string }
 * Creates a short link. 409 if custom code already exists.
 */
router.post("/", async (req, res) => {
  try {
    const { url, code } = req.body || {};

    // Basic body presence check
    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    // Validate URL
    if (!isValidUrl(url)) {
      return res
        .status(400)
        .json({ error: "Invalid URL. Use http or https." });
    }

    let finalCode = code ? String(code).trim() : "";

    // If custom code is provided, validate it
    if (finalCode) {
      if (!isValidCode(finalCode)) {
        return res.status(400).json({
          error: "Code must be 6-8 characters, letters and digits only",
        });
      }

      // Check for duplicate custom code
      const existing = await findLinkByCode(finalCode);
      if (existing) {
        return res.status(409).json({ error: "Code already exists" });
      }
    } else {
      // Auto-generate code until a free one is found
      // For a small system and unique index this loop is safe
      // (UNIQUE constraint on DB still protects against race conditions).
      // In case of rare conflict, we catch and retry.
      let attempts = 0;
      const maxAttempts = 5;

      // Try insert with generated codes; rely on DB UNIQUE(code)
      while (!finalCode && attempts < maxAttempts) {
        attempts += 1;
        const candidate = generateCode(6);

        try {
          const insertQuery = `
            INSERT INTO links (code, target_url)
            VALUES ($1, $2)
            RETURNING id, code, target_url, total_clicks, last_clicked_at, created_at
          `;
          const { rows } = await pool.query(insertQuery, [candidate, url]);
          const link = rows[0];
          return res.status(201).json(link);
        } catch (err) {
          // If UNIQUE violation, try again; otherwise rethrow
          if (err.code === "23505") {
            // unique_violation in Postgres
            continue;
          }
          console.error("Error inserting auto code:", err);
          return res.status(500).json({ error: "Internal server error" });
        }
      }

      // If we ever exit loop without returning, something is off
      return res
        .status(500)
        .json({ error: "Could not generate unique code, try again" });
    }

    // Insert new link with a validated custom code
    const insertQuery = `
      INSERT INTO links (code, target_url)
      VALUES ($1, $2)
      RETURNING id, code, target_url, total_clicks, last_clicked_at, created_at
    `;

    const { rows } = await pool.query(insertQuery, [finalCode, url]);
    const link = rows[0];

    return res.status(201).json(link);
  } catch (err) {
    console.error("Error creating link:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * GET /api/links
 * Optional query: ?search=term  (filters by code or target_url, case-insensitive)
 */
router.get("/", async (req, res) => {
  try {
    const search =
      typeof req.query.search === "string" ? req.query.search.trim() : "";

    let query = `
      SELECT id, code, target_url, total_clicks, last_clicked_at, created_at
      FROM links
    `;
    const params = [];

    if (search) {
      query += `
        WHERE code ILIKE $1
           OR target_url ILIKE $1
      `;
      params.push(`%${search}%`);
    }

    query += " ORDER BY created_at DESC";

    const { rows } = await pool.query(query, params);
    return res.status(200).json(rows);
  } catch (err) {
    console.error("Error listing links:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * GET /api/links/:code
 * Returns stats for a single short code.
 */
router.get("/:code", async (req, res) => {
  try {
    const { code } = req.params;
    const link = await findLinkByCode(code);

    if (!link) {
      return res.status(404).json({ error: "Code not found" });
    }

    return res.status(200).json(link);
  } catch (err) {
    console.error("Error fetching link stats:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * DELETE /api/links/:code
 * Deletes a link. After deletion, /:code must return 404.
 */
router.delete("/:code", async (req, res) => {
  try {
    const { code } = req.params;

    const result = await pool.query(
      "DELETE FROM links WHERE code = $1 RETURNING id",
      [code],
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Code not found" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Error deleting link:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
