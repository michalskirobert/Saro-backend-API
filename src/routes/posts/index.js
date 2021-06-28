const express = require("express");
const router = express.Router();
const Post = require("./../../models/posts");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json(error);
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    desc: req.body.desc,
  });
  const savedPost = await post.save();
  res.json(savedPost);
});

router.get("/:postId", async (req, res) => {
  const post = await Post.findById(req.params.postId);
  res.json(post);
});

router.delete("/:postId", async (req, res) => {
  const post = await Post.remove({ _id: req.params.postId });
  res.json(post);
});

router.patch("/:postId", async (req, res) => {
  const updatedPost = await Post.updateOne(
    { _id: req.params.postId },
    { $set: { modfidedDate: Date.now } }
  );
  res.json(updatedPost);
});

module.exports = router;
