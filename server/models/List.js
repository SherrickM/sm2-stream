// My List , title,  Save, genre, More INfo

const { Schema, model } = require('mongoose');


const listSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    moreInfo: {
      type: String,
      required: true,
    },

  },
  
);

const List = model('List',listSchema);

module.exports = List;