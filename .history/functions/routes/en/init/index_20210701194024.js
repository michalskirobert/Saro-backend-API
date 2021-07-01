const express = require("express");

const postsRoute = require("./../../posts");
const EnglishRoute = express();

app.use("/posts", postsRoute);
app.use("/", router);

module.exports = EnglishRoute;
