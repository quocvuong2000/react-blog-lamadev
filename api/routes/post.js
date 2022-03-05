const router = require("express").Router();

const Post = require("../models/Post");

//CREATE
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      await post.delete();
      res.status(200).json("Xóa bài viết thành công");
    } else {
      res.status(401).json("Bạn không được xóa bài viết của người khác");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (req.body.username === post.username) {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedPost);
    } else {
      res.status(401).json("Bạn không được cập nhập bài viết của người khác");
    }
  } catch (error) {}
});

//GET
router.get("/:id",async (req,res)=> {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET ALL
router.get("/", async (req,res)=> {
    const user = req.query.user;
    const catName = req.query.cat
    try {
        let posts;
        if(user) {
            posts = await Post.find({user});
        }else if(catName) {
            posts = await Post.find({
                categories : {
                    $in: [catName]
                }
            });
        }else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;
