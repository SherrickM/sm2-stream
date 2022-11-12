// My List , title,  Save, genre, More INfo

const { Schema, model } = require('mongoose');


const listSchema = new Schema(
  {
    movies:[{
      type: Schema.Types.ObjectId,
      ref: 'Movie',
      required: true
    }]
    

  },
  
);

const List = model('List',listSchema);

module.exports = List;