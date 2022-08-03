const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    me: User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveMovie(movieData: MovieInput!): User
    removeMovie(movieId: ID!): User
}
type User {
    _id: ID!
    username: String!
    email: String
    movieCount: Int
    savedMovie: [Movie]
}
type Movie {
    movieId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }
  input MovieInput {
    authors: [String]
    description: String!
    movieId: String!
    image: String
    link: String
    title: String!
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;