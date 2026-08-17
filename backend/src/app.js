import "dotenv/config";
import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import healthRoutes from "./routes/health.routes.js";
import { notFound } from "./middleware/notFound.js";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "OPTIONS"],
    allowedHeaders: ["Content-Type", "x-admin-secret"],
  })
);

app.use(express.json({ limit: "20kb" }));

app.get("/api/ping", (req, res) => {
  res.status(200).json({
    success: true,
    message: "ISM Family backend is running",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api", healthRoutes);
app.use("/api", userRoutes);
app.use("/api/admin", adminRoutes);

// MUST always remain at bottom
app.use(notFound);

export default app;