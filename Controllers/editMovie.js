const { getCipherInfo } = require("crypto");
const mongoose = require("mongoose");

const editMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  const { movie_id, movie_name, rating, info } = req.body;
  try {
    if (!movie_id) throw "Movie id is reqiered.";
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e,
    });
    return;
  }

  try {
    await moviesModel.updateOne(
      { _id: movie_id },
      { movie_name: movie_name, rating: rating, info: info },
      { runValidators: true }
    );
    res.status(200).json({
      status: "I am editing a movie...",
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e.message,
    });
  }
  return;
};

module.exports = editMovie;
