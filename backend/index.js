const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const authRoutes = require("./routes/auth.routes");

const app = express();
const PORT = config.get("serverPort");
const corsMiddleware = require("./middleware/cors.middleware");

app.use(corsMiddleware);
app.use(express.json());
app.use("/api/auth", authRoutes);

const start = async () => {
  try {
    await mongoose.connect(config.get("mongoUri"));
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log("Server Error", e.message);
  }
};

start();
