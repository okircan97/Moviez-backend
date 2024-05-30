const mongoose = require("mongoose");

const editMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  // Retrieve the movie ID from the URL parameter instead of the body
  const { id } = req.params;
  const { movie_name, rating, info, image_url } = req.body;

  if (!id) throw new Error("Movie id is required."); // Throw an error if no ID

  const updateData = {}; // Object to store updates
  if (movie_name !== undefined) updateData.movie_name = movie_name;
  if (rating !== undefined) updateData.rating = rating;
  if (info !== undefined) updateData.info = info;
  if (image_url !== undefined) updateData.image_url = image_url;

  // Use the id directly from req.params to identify the movie to update
  const result = await moviesModel.updateOne(
    { _id: id },
    { $set: updateData }, // Use the updateData object
    { runValidators: true }
  );

  // Check if the update was successful
  if (result.modifiedCount === 0) {
    throw new Error("No changes were made. Movie not found or data identical.");
  }

  res.status(200).json({
    status: "success",
    message: "Movie updated successfully.",
  });
};

module.exports = editMovie;
