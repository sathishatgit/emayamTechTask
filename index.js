import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoute from "./router/userRoute.js";

dotenv.config();

async function run() {
  const mongoURL = "mongodb://127.0.0.1:27017/user-auth";

  try {
    await mongoose.connect(mongoURL);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Sathish API"));
app.use("/user", userRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
