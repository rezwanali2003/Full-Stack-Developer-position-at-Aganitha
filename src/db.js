// src/db.js
import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();

const { Pool } = pkg;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in environment");
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10,          // reasonable pool size
  idleTimeoutMillis: 30000,
});
