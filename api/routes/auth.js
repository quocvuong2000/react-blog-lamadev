const router = require("express").Router();
var CryptoJS = require("crypto-js");

const User = require("../models/User");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.VUONG_SEC_PASS
    ).toString(),
    email: req.body.email,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Sai thông tin đăng nhập");

    const decryptPass = CryptoJS.AES.decrypt(
      user.password,
      process.env.VUONG_SEC_PASS
    ).toString(CryptoJS.enc.Utf8);
    decryptPass !== req.body.password && res.status(401).json("Sai thông tin đăng nhập");

    try {
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {}
});

module.exports = router;
