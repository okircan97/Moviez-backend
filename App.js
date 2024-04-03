const express = require("express");
require("dotenv").config();
const addMovie = require("./Controllers/addMovie");
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
// Accept the JSOn payloads.
app.use(express.json());

app.post("/api/movies", addMovie);

// Listen the server.
app.listen(8000, () => {
  console.log("Server started successfully!");
});
