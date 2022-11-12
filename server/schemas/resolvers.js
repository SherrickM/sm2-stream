const { Movie, List, User} = require('../models')
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
// Queries
Query:{
  movies: async ()=> {
    return Movie.find();
  },
  me: async (parent, args, context)=> {
    if(context.user){
      return 
    }
    return new AuthenticationError('not logged in')
  }
}
// Mutations
// Create User
// Create List
// Remove List
// login
// udate
// 

};