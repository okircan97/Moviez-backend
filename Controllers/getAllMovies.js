const mongoose = require("mongoose");

const getAllMovies = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  const allMovies = await moviesModel.find({});

  res.status(200).json({
    data: allMovies,
  });
};
module.exports = getAllMovies;
