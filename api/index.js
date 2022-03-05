const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");
const userRoute =require("./routes/user");
const catRoute = require("./routes/category");
const postRoute = require("./routes/post");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("thanh cong ket noi db"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/cat", catRoute);
app.use("/api/post", postRoute);

app.listen(5000, () => {
  console.log("Ket noi server backend thanh cong");
});
