const mongoose = require("mongoose");

const deleteMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  const id = req.params.id;

  const getMovie = await moviesModel.findOne({ _id: id });
  if (!getMovie) throw "This movie does not exist.";

  await moviesModel.deleteOne({
    _id: id,
  });
  res.status(200).json({
    status: "success",
    message: "movie deleted successfully",
  });
};

module.exports = deleteMovie;
