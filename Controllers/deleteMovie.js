const mongoose = require("mongoose");

const deleteMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  const id = req.params.id;

  const getMovie = await moviesModel.findOne({ _id: id });
  try {
    if (!getMovie) throw "This movie does not exist.";
  } catch (e) {
    res.status(400).json({
      status: "failure",
      message: e,
    });
    return;
  }

  try {
    await moviesModel.deleteOne({
      _id: id,
    });
    res.status(200).json({
      status: "success",
      message: "movie deleted successfully",
    });
  } catch (e) {
    res.status(400).json({
      status: "failure",
      message: e.message,
    });
  }
  return;
};

module.exports = deleteMovie;
