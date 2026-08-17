import dotenv from "dotenv";
import app from "./src/app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/api/ping", (req, res) => {
  res.status(200).json({
    success: true,
    message: "ISM Family backend is running",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`ISM Family API running on http://localhost:${PORT}`);
});
