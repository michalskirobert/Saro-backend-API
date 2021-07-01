const express = require("express");
const initRoute = require("./init");
const EnglishRoute = express();

EnglishRoute.use("/init", postsRoute);

module.exports = EnglishRoute;
