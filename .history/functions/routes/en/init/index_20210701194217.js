const express = require("express");
const serverless = require("serverless-http");
const postsRoute = require("./../../posts");
const EnglishRoute = express();

EnglishRoute.use("/posts", postsRoute);
EnglishRoute.use("/", router);

module.exports.handler = serverless(EnglishRoute);
