const mongoose = require("mongoose");

const getSingleMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  try {
    const movie = await moviesModel.findOne({
      _id: req.params.id,
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
