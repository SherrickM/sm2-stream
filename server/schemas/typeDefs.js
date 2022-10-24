// Require the Apollo Server
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    name: String!
    email: String!
    password: String!
  },

  type Movie {
    title: String!
    description: String!
    poster: String!
    trailer: String
    releaseDate: Int!
    movieLength: Int!
    tySeries: Boolean!
  }

  type List {
    title: String!
    genre: String!
    moreInfo: String!
  },

  # Queries

  # Mutations
`;

module.exports = { typeDefs };
