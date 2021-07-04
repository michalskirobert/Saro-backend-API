const express = require("express");
const cors = require("cors");
const dictionariesRoute = require("./dictionaries");
const EnglishRoute = express();
EnglishRoute.use(cors());

EnglishRoute.use("/dictionaries", dictionariesRoute);

module.exports = EnglishRoute;
