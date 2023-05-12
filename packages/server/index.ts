import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db";
import colors from "colors";

// Setup
const app = express();
dotenv.config({ path: "../../.env" });
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Connecting
connectDB();
app.listen(port, () => {
  console.log(
    colors.green.underline(`Image Upload listening on port: ${port}`)
  );
});
