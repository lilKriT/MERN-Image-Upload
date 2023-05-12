import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import colors from "colors";
import multer from "multer";
import path from "path";

// Multer
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + `-` + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
}).single("myImage"); // apparently this is important. this name here has to be the same as field name in frontend!

const checkFileType = (
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  // Allowed ext
  const fileTypes = /jpeg|jpg|png|gif/;
  // Check the extension
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimeType = fileTypes.test(file.mimetype);
  if (extname && mimeType) {
    return cb(null, true);
  } else {
    cb(new Error("Images only!"));
  }
};

// Setup
const app = express();
dotenv.config({ path: "../../.env" });
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Routes

app.get("/", (req, res) => {
  res.send("Working");
});
app.post("/upload", (req, res) => {
  //   res.send("Uploaded");
  upload(req, res, (err) => {
    if (err) {
      console.log("Error");
      res.send("error");
    } else {
      if (req.file === undefined) {
        console.log("No file");
      }
      console.log(req.file);
      res.send("test");
    }
  });
});

// Connecting
connectDB();
app.listen(port, () => {
  console.log(
    colors.green.underline(`Image Upload listening on port: ${port}`)
  );
});
