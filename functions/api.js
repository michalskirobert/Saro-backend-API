const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const serverless = require("serverless-http");
const EnglishRoute = require("./routes/en");
const initRoute = require("./routes");
require("dotenv/config");

const app = express();
const router = express.Router();

//middlware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use("/en", EnglishRoute);
app.use("/init", initRoute);
app.use("/", router);

//cors
// const allowedOrigins = ["http://localhost:3000", "https://i-saro.netlify.app"];
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // allow requests with no origin
//       // (like mobile apps or curl requests)
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.indexOf(origin) === -1) {
//         let msg =
//           "The CORS policy for this site does not " +
//           "allow access from the specified Origin." +
//           " Api made only for SARO INC";
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     },
//   })
// );

app.use(cors());

//connect DB
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => console.log("CORS 30000"));

module.exports.handler = serverless(app);
