const express = require("express");
const router = express.Router();
const Events = require("./../../models/events");

router.get("/", async (req, res) => {
  try {
    const posts = await Events.find();
    res.json(posts);
  } catch (error) {
    res.json(error);
  }
});

router.post("/", async (req, res) => {
  const post = new Events({
    title: req.body.title,
    desc: req.body.desc,
  });
  const savedPost = await post.save();
  res.json(savedPost);
});

router.get("/:postId", async (req, res) => {
  const post = await Events.findById(req.params.postId);
  res.json(post);
});

router.delete("/:postId", async (req, res) => {
  const post = await Events.remove({ _id: req.params.postId });
  res.json(post);
});

router.patch("/:postId", async (req, res) => {
  const updatedPost = await Events.updateOne(
    { _id: req.params.postId },
    { $set: { modfidedDate: Date.now } }
  );
  res.json(updatedPost);
});

module.exports = router;
