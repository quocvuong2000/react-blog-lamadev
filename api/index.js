const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");
const cors = require("cors");
const path = require('path');

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const catRoute = require("./routes/category");
const postRoute = require("./routes/post");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("thanh cong ket noi db"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));


app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/cats", catRoute);
app.use("/api/posts", postRoute);

app.listen(5000, () => {
  console.log("Ket noi server backend thanh cong");
});
