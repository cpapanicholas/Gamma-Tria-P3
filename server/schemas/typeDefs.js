const typeDefs = `
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    posts: [Post]
    friends: [Friend]
    workouts: [Workout]
    programs: [Program]
  }

  input UserInput {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
  }

  type Friend {
    _id: ID!
    userId: ID!
    friendId: ID!
  }

  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getAllUsers: [User]
    getUser(_id: ID!): User
    getAllPostsOfUser(_id: ID!): [Post]
    me: User
    getAllPrograms: [Program]
  }

  type Workout {
    _id: ID!
    name: String!
    exercises: [Exercise]
    difficulty: String!
  }
  
  type Exercise {
    name: String!
    difficulty: String
    muscleGroups: [Muscle]
  }

  type Muscle {
    name: String!
  }
  
  input ExerciseInput {
    name: String!
    sets: Int!
    reps: Int!
    difficulty: String
  }
  
  input WorkoutInput {
    name: String!
    exercises: [ExerciseInput!]!
  }

  type Program {
    _id: ID!
    name: String!
    workouts: [Workout]
  }

  type Mutation {
    addUser(input: UserInput): Auth
    login(email: String!, password: String!): Auth
    addPost(postText: String!): Post
    addComment(postId: ID!, commentText: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
    createWorkout(input: ExerciseInput): Workout
    createProgram(name: String!, workoutIds: [ID!]!): Program
    addProgram(programI: ID!): Program
    addFriend(friendId: ID!): Friend
  }
`;

module.exports = typeDefs;


// addUser(firstName: String!, lastName: String!, Username: String!, email: String!, password: String!): Auth
// addUser(input: UserInput): Auth