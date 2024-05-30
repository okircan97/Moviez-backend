const mongoose = require("mongoose");

const addMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  // Deconstruct the req to ignore irrelevant stuff.
  const { movie_name, info, rating, image_url } = req.body;

  // Check for validations.
  if (rating < 1 || rating > 10) throw "Rating value must be between 1-10.";

  await moviesModel.create({
    movie_name: movie_name,
    info: info,
    rating: rating,
    image_url: image_url,
  });

  res.status(200).json({
    status: "Success",
    message: "Movie added",
  });
};

module.exports = addMovie;
