const express = require("express");
const dictionariesRoute = require("./dictionaries");
const EnglishRoute = express.Router();
const eventsRoute = require("./events");

EnglishRoute.use("/dictionaries", dictionariesRoute);
EnglishRoute.use("/events", eventsRoute);

module.exports = EnglishRoute;
