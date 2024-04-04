const mongoose = require("mongoose");

const getSingleMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  try {
    const movie = await moviesModel.findOne({
      movie_name: req.params.name,
    });

    res.status(200).json({
      data: movie,
    });
  } catch (e) {
    res.status(400).json({
      data: e.message,
    });
  }
  return;
};
module.exports = getSingleMovie;
