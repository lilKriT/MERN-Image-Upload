import router from "express";
import multer from "multer";
import User from "../models/User";

const storage = multer.diskStorage({
  destination: "./images",
  filename: (req, file, cb) => {
    return file.filename;
  },
});
