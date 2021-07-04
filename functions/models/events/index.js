const mongoose = require("mongoose");

const requiredString = {
  type: String,
  required: true,
};

const PostSchema = mongoose.Schema({
  title: requiredString,
  subtitle: requiredString,
  category: requiredString,
  imgURL: requiredString,
  imagesURL: {
    type: String,
    required: false,
  },
  language: requiredString,
  crew: requiredString,
  content: requiredString,
  city: requiredString,
  place: requiredString,
  startDate: {
    type: Date,
    default: Date.now(),
    required: false,
  },
  endDate: {
    type: Date,
    required: false,
  },
  time: {
    type: Date,
    required: true,
  },
  link: requiredString,
});

module.exports = mongoose.model("Events", PostSchema);
