const data = require("./../../assets/init/dictionaries.json");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.send(data);
  } catch (error) {
    res.json({ error: `Zjebałaś tutaj jest error ${error}` });
  }
});

module.exports = router;
