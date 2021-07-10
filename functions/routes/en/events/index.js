const express = require("express");
const app = express.Router();
const Events = require("./../../../models/events");

function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);
    const startIndex = (page - 1) * size;

    let items = {};

    try {
      items.items = await model.find().limit(size).skip(startIndex).exec();
      res.paginatedResults = items;
      items.totalCount = model.length;
      next();
    } catch (error) {
      res.status(500).json({ errorMessage: error.message });
    }
  };
}

module.exports = paginatedResults;

app.get("/", paginatedResults(Events), async (req, res) => {
  try {
    res.json(res.paginatedResults);
  } catch (error) {
    res.json(error);
  }
});

app.post("/", async (req, res) => {
  const post = new Events({
    title: req.body.title,
    subtitle: req.body.subtitle,
    category: req.body.category,
    imgURL: req.body.imgURL,
    imagesURL: req.body.imagesURL,
    language: req.body.language,
    crew: req.body.crew,
    content: req.body.content,
    city: req.body.city,
    place: req.body.place,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    time: req.body.time,
  });
  const savedPost = await post.save();
  res.json(savedPost);
});

app.patch("/:postId", async (req, res) => {
  const updatedPost = await Events.updateOne(
    { _id: req.params.postId },
    { $set: { modfidedDate: Date.now } }
  );
  res.json(updatedPost);
});

app.put("/:postId", async (req, res) => {
  const updatedPost = await Events.updateOne(
    { _id: req.params.postId },
    { $set: { modfidedDate: Date.now } }
  );
  res.json(updatedPost);
});

app.delete("/:postId", async (req, res) => {
  const post = await Events.remove({ _id: req.params.postId });
  res.json(post);
});

module.exports = app;
