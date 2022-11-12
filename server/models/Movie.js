const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  type: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
  },
  cast: {
    type: String,
  },
  country: {
    type: String,
  },
  date_added:{
    type: Date,
  },
  release_year: {
    type: Number,
    required: true,
  },
  rating:{
    type: String,
  },
  duration: {
    type: String,
    required: true,
  },
  listed_in: {
    type: String,
  },
  description: {
    type: String,
  }
  
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
