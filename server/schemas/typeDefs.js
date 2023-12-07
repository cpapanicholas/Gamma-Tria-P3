const typeDefs = `
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    status: Status
    posts: [Post]
    friends: [Friend]
    workouts: [Workout]
    programs: [Program]
    favoriteExercises: [Exercise]
    daysCheckedIn: [String]
  }

  

  type Text {
    text: String
  }

  input TextInput {
    text: String
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
    mediaUrl: String
    userId: ID
    username: String
    visibility: Boolean
    createdAt: String
    workoutId: ID
    workoutName: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    username: String
    commentText: String
    createdAt: String
    userId: ID
  }

  input CommentInput {
    userId: ID
    username: String
    commentText: String
    postId: ID
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
    _id: ID!
    name: String!
    type: String!
    muscle: String!
    equipment: String!
    difficulty: String!
    instructions: String!
  }
  
  input ExerciseInfoInput {
    name: String!
    type: String!
    muscle: String!
    equipment: String!
    difficulty: String!
    instructions: String!
  }

  input ExerciseInput {
    exercise: ExerciseInfoInput
    userId: ID
  }

  type Status {
    statusName: Text
    state: Boolean
    checkInTime: String
  }

  input StatusChangeInput {
    userId: ID
    statusName: TextInput
    state: Boolean
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

  input PostInput {
    mediaUrl: String
    postText: String
    workoutId: ID
    workoutName: String
    visibility: Boolean
    userId: ID!
    username: String!
  }
  type SearchResult {
    _id: ID
  }

  type Mutation {
    updateWorkout(workoutId: ID!, updatedWorkout: WorkoutInput!): Workout
    createWorkout(workoutInput: CreateWorkoutInput!): Workout
    addUser(input: UserInput): Auth
    login(email: String!, password: String!): Auth
    addPost(postInput: PostInput!): Post
    addComment(commentInput: CommentInput!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
    addFriend(friendId: ID!): Friend
    createProgram(programInput: ProgramInput!): Program
    favoriteExercise(exerciseInput: ExerciseInput!): User
    changeUserStatus(statusChangeInput: StatusChangeInput!): User
  }

  type Query {
    getAllUsers: [User]
    getUserWithWorkoutInfo(_id: ID!): User
    getUser(_id: ID!): User
    getAllPostsOfUser(_id: ID!): [Post]
    getAllPosts: [Post]
    me: User
    getAllPublicPrograms(originalId: String): [Program]
    getAllPublicWorkouts(originalId: String): [Workout]
    getProgramById(programId: ID!): Program
    getWorkoutById(_id: ID!): Workout
    getWorkoutsByUserId(userId: ID!): [Workout]
    getAllWorkouts: [Workout]!
    getWorkoutByOriginalId(originalId: ID!): Workout
    getProgramsByByUser(userId: ID!): [Program]
    getAllExercises: [Exercise]!
    search(searchTerm: String!): [SearchResult]
  }
  `;
  
  module.exports = typeDefs;
  
  // removeFriend(friendId: ID!): User
  
  // addUser(firstName: String!, lastName: String!, Username: String!, email: String!, password: String!): Auth
  // addUser(input: UserInput): Auth
  


