// const mongoose = require("mongoose");

// const editMovie = async (req, res) => {
//   const moviesModel = mongoose.model("movies");
//   const { movie_id, movie_name, rating, info, image_url } = req.body;
//   try {
//     if (!movie_id) throw "Movie id is required.";
//   } catch (e) {
//     res.status(400).json({
//       status: "failed",
//       message: e,
//     });
//     return;
//   }

//   try {
//     await moviesModel.updateOne(
//       { _id: movie_id },
//       {
//         movie_name: movie_name,
//         rating: rating,
//         info: info,
//         image_url: image_url,
//       },
//       { runValidators: true }
//     );
//     res.status(200).json({
//       status: "I am editing a movie...",
//     });
//   } catch (e) {
//     res.status(400).json({
//       status: "failed",
//       message: e.message,
//     });
//   }
//   return;
// };

// module.exports = editMovie;

const editMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  const { movie_id, movie_name, rating, info, image_url } = req.body;

  try {
    if (!movie_id) throw "Movie id is required.";

    const updateData = {}; // Object to store updates
    if (movie_name !== undefined) updateData.movie_name = movie_name;
    if (rating !== undefined) updateData.rating = rating;
    if (info !== undefined) updateData.info = info;
    if (image_url !== undefined) updateData.image_url = image_url;

    await moviesModel.updateOne(
      { _id: movie_id },
      updateData, // Use the updateData object
      { runValidators: true }
    );

    res.status(200).json({
      status: "success",
      message: "Movie updated successfully.",
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e.message || e,
    });
  }
};

module.exports = editMovie;
