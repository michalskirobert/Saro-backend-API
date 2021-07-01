const express = requre("express");

const app = express();

app.use("/posts", postsRoute);
app.use("/init", initRoute);
app.use("/", router);
