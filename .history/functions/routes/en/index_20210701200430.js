const express = require("express");
const postsRoute = require("./init");
const EnglishRoute = express();

EnglishRoute.use("/init", postsRoute);

module.exports = EnglishRoute;
