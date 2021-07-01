const express = require("express");
const initRoute = require("./dictionaries");
const EnglishRoute = express();

EnglishRoute.use("/dictionaries", initRoute);

module.exports = EnglishRoute;
