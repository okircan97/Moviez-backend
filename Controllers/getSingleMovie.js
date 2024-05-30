const mongoose = require("mongoose");

const getSingleMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const movie = await moviesModel.findOne({
    _id: req.params.id,
  });

  res.status(200).json({
    data: movie,
  });
};
module.exports = getSingleMovie;
