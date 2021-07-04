const express = require("express");
const app = express.Router();
const Post = require("./../../../models/posts");
const paginatedResults = require("../../../helpers/pagination");

app.get("/", paginatedResults(Post), (req, res) => {
  try {
    res.json(res.paginatedResults);
  } catch (error) {
    res.json(error);
  }
});

app.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    desc: req.body.desc,
  });
  const savedPost = await post.save();
  res.json(savedPost);
});

module.exports = app;
