const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const serverless = require("serverless-http");
const EnglishRoute = require("./routes/en");
const initRoute = require("./routes");
// const buraczynscyRoute = require("./routes/others");
require("dotenv/config");

const app = express();
app.use(cors());
const router = express.Router();

//middlware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use("/en", EnglishRoute);
app.use("/init", initRoute);
// app.use("/buraczynscy", buraczynscyRoute);
app.use("/", router);
app.disable("etag");

//connect DB
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports.handler = serverless(app);
