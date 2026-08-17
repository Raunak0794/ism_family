import pool from "../config/db.js";

export const healthCheck = async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    return res.json({ ok: true, service: "ism-family-api" });
  } catch (error) {
    console.error("Health check failed:", error);
    return res.status(500).json({
      ok: false,
      message: "Database unavailable.",
    });
  }
};
