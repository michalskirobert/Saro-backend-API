const express = require("express");
const dictionariesRoute = require("./dictionaries");
const eventsRoute = require("./events");
const EnglishRoute = express.Router();

EnglishRoute.use("/dictionaries", dictionariesRoute);
EnglishRoute.use("/events", eventsRoute);

module.exports = EnglishRoute;
