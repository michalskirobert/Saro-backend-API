const express = require("express");
const postsRoute = require("./../../posts");
const EnglishRoute = express();

EnglishRoute.use("/posts", postsRoute);

module.exports = EnglishRoute;
