const typeDefs = `
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    posts: [Post]
    friends: [Friend]
    workouts: [Workout]
    programs: [Program]
    favorites: [Exercise]
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

  type Muscle {
    name: String!
  }
  
  type Program {
    _id: ID!
    originalId: ID
    userId: ID
    name: String!
    description: String
    duration: String
    workouts: [ProgramWorkout]
  }

  type ProgramWorkout {
    day: String!
    workout: String!
  }
  
  type Workout {
    _id: ID
    originalId: ID
    userId: ID
    name: String
    description: String
    dateCompleted: String
    workout: [WorkoutPhase]
  }
  
  type WorkoutPhase {
    phase: String!
    exercises: [WorkoutExercise!]!
  }
  
  type WorkoutExercise {
    exercise: Exercise!
    sets: [ExerciseSet!]!
  }
  
  type Exercise {
    name: String!
    type: String!
    muscle: String!
    equipment: String!
    difficulty: String!
    instructions: String!
  }
  
  type ExerciseSet {
    reps: Int!
    weight: Int!
    completed: Boolean
  }
  
  input WorkoutInput {
    originalId: ID
    userId: ID
    name: String!
    description: String
    dateCompleted: String
    workout: [WorkoutPhaseInput!]!
  }

  input ProgramInput {
    originalId: ID
    userId: ID
    name: String!
    description: String
    duration: String
    workouts: [ProgramWorkoutInput]
  }

  input ProgramWorkoutInput {
    day: String!
    workout: ID!
  }
  
  input WorkoutPhaseInput {
    phase: String!
    exercises: [WorkoutExerciseInput!]!
  }
  
  input WorkoutExerciseInput {
    exercise: ExerciseInput!
    sets: [ExerciseSetInput!]!
  }
  
  input ExerciseInput {
    name: String!
    type: String!
    muscle: String!
    equipment: String!
    difficulty: String!
    instructions: String!
  }
  
  input ExerciseSetInput {
    reps: Int!
    weight: Int!
    completed: Boolean!
  }
  
  input CreateWorkoutInput {
    originalId: ID
    userId: ID
    name: String!
    description: String
    dateCompleted: String
    workout: [WorkoutPhaseInput!]!
  }

  type Mutation {
    updateWorkout(workoutId: ID!, updatedWorkout: WorkoutInput!): Workout
    createWorkout(workoutInput: CreateWorkoutInput!): Workout
    addUser(input: UserInput): Auth
    login(email: String!, password: String!): Auth
    addPost(postText: String!): Post
    addComment(postId: ID!, commentText: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
    addFriend(friendId: ID!): Friend
    createProgram(programInput: ProgramInput!): Program
    favoriteExercise(exerciseId: ID!): User
  }

  type Query {
    getAllUsers: [User]
    getUser(_id: ID!): User
    getAllPostsOfUser(_id: ID!): [Post]
    me: User
    getAllPublicPrograms(originalId: String): [Program]
    getAllPublicWorkouts(originalId: String): [Workout]
    getProgramById(programId: ID!): Program
    getWorkoutById(_id: ID!): Workout
    getAllWorkouts: [Workout]!
    getWorkoutByOriginalId(originalId: ID!): Workout
    getProgramsByByUser(userId: ID!): [Program]
    getAllExercises: [Exercise]!
  }
  `;
  
  module.exports = typeDefs;
  
  // removeFriend(friendId: ID!): User
  
  // addUser(firstName: String!, lastName: String!, Username: String!, email: String!, password: String!): Auth
  // addUser(input: UserInput): Auth
  


