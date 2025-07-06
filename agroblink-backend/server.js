const cors = require("cors");
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

app.use(cors({
  origin: "http://localhost:5173", // ✅ Vite default port
  credentials: true,
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
