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
  image_url: {
    type: String,
    required: false,
    default:
      "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg",
  },
});

const moviesModel = mongoose.model("movies", moviesSchema);
module.exports = moviesModel;
