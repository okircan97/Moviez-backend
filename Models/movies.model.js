const mongoose = require("mongoose");
const moviesSchema = new mongoose.Schema({
  movie_name: {
    type: String,
    required: [true, "Name is required"],
  },
  info: {
    type: String,
    required: [true, "Info is required"],
  },
  rating: {
    type: Number,
    required: [true, "Rating is required"],
  },
});

const moviesModel = mongoose.model("movies", moviesSchema);
module.exports = moviesModel;
