const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    username: String!
    email: String!
    password: String!
    posts: [Post]
    friends: [User]
    workouts: [Workout]
    programs: [Program]
  }

  type Post {
    _id: ID!
    
  }

  type Workout {
    _id: ID!
    
  }

  type Program {
    _id: ID!
    
  }

  input UserInput {
    name: String!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    getUser(_id: ID!): User
    
  }

  type Mutation {
    createUser(input: UserInput): User

  }
`;

module.exports = typeDefs;