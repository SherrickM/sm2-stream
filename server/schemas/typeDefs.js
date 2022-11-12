// Require the Apollo Server
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    username: String
    email: String
    password: String
  }

  type Movie {
    id: ID!
    title: String
    description: String
    poster: String
    trailer: String
    releaseDate: Int
    movieLength: Int
    tySeries: Boolean
  }

  type List {
    id: ID!
    movies: [Movie]
  }

  type Auth {
    token: ID
    user: User
  }

  input SaveMovie {
    id: String!
    title: String!
    year: String!
    cast: [String]
    genre: [String]
  }

  # Queries

  type Query{
    movies: [Movie]
    me: User 
  }

  type Mutations{
    createUser(username: String, email: String, password: String): Auth
    createList(movieList: SaveMovie):User
    removeMovie(movieId: ID):User
    login(email:String, password: String): Auth
    updatelist():User

  }

`;

module.exports = { typeDefs };
