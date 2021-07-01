import data from "./../../../../assets/init/dictionaries.json";

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.send([{ languages: ["Japanese", "English"] }]);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
