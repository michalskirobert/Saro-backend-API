const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const postsRoute = require("./routes/posts");
const initRoute = require("./routes/init");
const serverless = require("serverless-http");
require("dotenv/config");

const app = express();
const router = express.Router();

//middlware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cors());

app.use("/posts", postsRoute);
app.use("/init", initRoute);
app.use("/.netlify/functions/api");

//connect DB
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// app.listen(3000);

module.exports.handler = serverless(app);
