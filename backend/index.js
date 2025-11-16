import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

// 1️⃣ Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: /http:\/\/localhost:\d+/, credentials: true }));

// 2️⃣ Connect DB
connectDB();

// 3️⃣ API routes
app.use("/api/auth", authRoutes);

// 4️⃣ Serve React frontend ONLY for non-API routes
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Catch-all route for frontend (non-API routes only)
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// 5️⃣ Global error handler
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
});

// 6️⃣ Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
