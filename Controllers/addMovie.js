const mongoose = require("mongoose");

const addMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  // Deconstruct the req to ignore irrelevant stuff.
  const { movie_name, info, rating } = req.body;

  // Check for validations.
  try {
    if (!movie_name) throw "Movie name can not be empty.";
    if (!info) throw "Info can not be empty.";
    if (!rating) throw "Rating can not be empty.";
    if (rating < 1 || rating > 10) throw "Rating value must be between 1-10.";
  } catch (e) {
    res.status(400).json({
      status: "Fail",
      message: e,
    });
  }

  // Wait for the response.
  try {
    await moviesModel.create({
      movie_name: movie_name,
      info: info,
      rating: rating,
    });
  } catch (e) {
    res.status(400).json({
      status: "Fail",
      message: "A problem occurred during movie creation.",
    });
  }

  res.status(200).json({
    status: "Success",
    message: "Movie added",
  });
};

module.exports = addMovie;
