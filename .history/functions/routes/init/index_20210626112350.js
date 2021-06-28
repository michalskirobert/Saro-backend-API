const express = require("express");
const router = express.Router();
const Init = require("./../../models/init");

router.get("/", async (req, res) => {
  try {
    res.send([{ languages: ["Japanese", "English"] }]);
  } catch (error) {
    res.json(error);
  }
});
module.exports = router;
