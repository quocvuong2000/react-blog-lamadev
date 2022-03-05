const router = require("express").Router();
var CryptoJS = require("crypto-js");
const User = require("../models/User");

//UPDATE
router.put("/:id", async (req, res) => {
  if (req.params.id === req.body.userId) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.VUONG_SEC_PASS
      ).toString();
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );

      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("Bạn không có quyền này!");
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  if (req.params.id === req.body.userId) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Xóa thành công");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("Bạn không có quyền này");
  }
});

//GET USER
router.get("/:id" , async (req, res)=> {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;
