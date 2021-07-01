const data = require("../../../../assets/dictionaries/dictionaries.json");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.send(data);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
