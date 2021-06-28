const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const postsRoute = require("./src/routes/posts");
const initRoute = require("./src/routes/init");
const serverless = require("serverless-http");
require("dotenv/config");

//middlware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cors());
app.use("/posts", postsRoute);
app.use("/init", initRoute);

//connect DB
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.listen(3000);

module.exports.handler = serverless(app);
