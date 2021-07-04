const express = require("express");
const dictionariesRoute = require("./dictionaries");
const EnglishRoute = express();

EnglishRoute.use("/dictionaries", dictionariesRoute);

module.exports = EnglishRoute;
