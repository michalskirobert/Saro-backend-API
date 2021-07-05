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
    type: Array,
    required: false,
  },
  language: requiredString,
  crew: requiredString,
  content: requiredString,
  city: requiredString,
  place: requiredString,
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: false,
  },
  time: requiredString,
  url: String,
});

module.exports = mongoose.model("Events", PostSchema);
