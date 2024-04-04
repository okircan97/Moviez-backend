const express = require("express");
require("dotenv").config();
const addMovie = require("./Controllers/addMovie");
const getAllMovies = require("./Controllers/getAllMovies");
const getSingleMovie = require("./Controllers/getSingleMovie");
const editMovie = require("./Controllers/editMovie");
const mongoose = require("mongoose");

// Connect to MongoDB.
mongoose
  .connect(process.env.mongo_connection, {})
  .then(() => {
    console.log("Successfully connected to MongoDB!");
  })
  .catch(() => {
    console.log("An error occurred while connting to MongoDB");
  });

// Models
require("./Models/movies.model");

// The server stuff.
const app = express();
// Accept the JSON payloads.
app.use(express.json());

// Handle the requests.
app.post("/api/movies", addMovie);
app.get("/api/movies", getAllMovies);
app.get("/api/movies/:name", getSingleMovie);
app.patch("/api/movies", editMovie);

// Listen the server.
app.listen(8000, () => {
  console.log("Server started successfully!");
});
