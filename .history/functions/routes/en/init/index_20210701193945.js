const express = requre("express");

const EnglishRoute = express();

app.use("/posts", postsRoute);
app.use("/init", initRoute);
app.use("/", router);

module.exports = app;
