const {Schema ,model } = require('mongoose');


const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  trailer: {
    type: String,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  movieLength: {
    type: Number,
    required: true,
  },
  tvSeries: {
    type: Boolean,
    required: true,
  },
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;

