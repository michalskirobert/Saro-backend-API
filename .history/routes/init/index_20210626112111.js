const express = require("express");
const router = express.Router();
const Init = require("./../../models/init");

router.get("/", async (req, res) => {
  try {
    const categories = await Init.find();
    res.json(categories);
  } catch (error) {
    res.json(error);
  }
});
module.exports = router;
