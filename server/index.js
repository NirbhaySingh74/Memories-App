import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const PORT = process.env.PORT;
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.listen(process.env.PORT, () => {
  console.log(`app is running on PORT ${PORT}`);
});
