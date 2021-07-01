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

module.exports router