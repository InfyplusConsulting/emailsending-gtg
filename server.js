const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const bookingRoutes = require("./routes/bookingRoutes"); // 👈 adjust if filename is different

const app = express();
const PORT = process.env.PORT || 5000;

// 🔧 Middlewares
app.use(cors({
  origin: "http://127.0.0.1:5502 , https://gotogo.in, https://www.gotogo.in",
  methods: ["GET", "POST"],
  credentials: false
}));
app.use(bodyParser.json());

// 🛣️ Mount the /api route
app.use("/api", bookingRoutes);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("📦 Booking Email API is running!");
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
