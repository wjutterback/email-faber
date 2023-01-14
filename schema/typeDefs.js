const gql = require('graphql-tag');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
    }

    type Query {
        users: [User]
        something: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;