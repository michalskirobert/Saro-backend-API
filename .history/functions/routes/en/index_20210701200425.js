const express = require("express");
const postsRoute = require("./init");
const EnglishRoute = express();

EnglishRoute.use("/posts", postsRoute);

module.exports = EnglishRoute;
