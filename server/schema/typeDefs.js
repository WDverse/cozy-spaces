const { gql } = require('apollo-server-express');
//Describes the data of our graphQL API
const typeDefs = gql`
type Location { 
    _id: ID!
    location: String
    price : Int
    status: String
}
input LocationInput {    
    location: String    
}
type User{
    _id: ID
    username: String
    email: String
    password: String
    locations : [Location]
}

type Auth {
    token: ID!
    user: User
  }

type Query {
    users: [User]!
    user(userId: ID!): User

}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email:String!,password:String!): Auth
    removeUser(userId: ID!): User
    addLocation(location: LocationInput): Location
    removeLocation(locationId: ID!): Location
    searchLocation(location: String!): [Location]
}`;

module.exports = typeDefs