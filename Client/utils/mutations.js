// mutations.js
import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        username
        _id
      }
      token
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($input: UserInput) {
    addUser(input: $input) {
      token
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postText: String!) {
    addPost(postText: $postText) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
      _id
      postText
      postAuthor
      createdAt
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($postId: ID!, $commentId: ID!) {
    removeComment(postId: $postId, commentId: $commentId) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const CREATE_WORKOUT = gql`
  mutation createWorkout($input: WorkoutInput) {
    createWorkout(input: $input) {
      _id
      name
      exercises {
        name
        sets
        reps
      }
      difficulty
    }
  }
`;

export const CREATE_PROGRAM = gql`
  mutation createProgram($name: String!, $workoutIds: [ID!]!) {
    createProgram(name: $name, workoutIds: $workoutIds) {
      _id
      name
      workouts {
        _id
        name
        exercises {
          name
          sets
          reps
        }
        difficulty
      }
    }
  }
`;

export const ADD_PROGRAM = gql`
  mutation addProgram($programId: ID!) {
    addProgram(programId: $programId) {
      _id
      programs {
        _id
        name
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($friendId: ID!) {
    addFriend(friendId: $friendId) {
      _id
      friends {
        _id
        userId
        friendId
        friendshipStatus
      }
    }
  }
`;
export const REMOVE_FRIEND = gql`
  mutation removeFriend($friendId: ID!) {
    removeFriend(friendId: $friendId) {
      success
      message
    }
  }
`;

// Add more mutations as needed
import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        username
        email
        posts {
          _id
        }
        friends {
          _id
        }
        workouts {
          _id
        }
        programs {
          _id
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($input: UserInput) {
    addUser(input: $input) {
      token
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const UPDATE_WORKOUT = gql`
  mutation UpdateWorkout($workoutId: ID!, $updatedWorkout: WorkoutInput!) {
    updateWorkout(workoutId: $workoutId, updatedWorkout: $updatedWorkout) {
      _id
      name
      workout {
        phase
        exercises {
          exercise {
            name
            type
            muscle
            equipment
            difficulty
            instructions
          }
          sets {
            reps
            weight
          }
        }
      }
    }
  }
`;

export const CREATE_WORKOUT = gql`
  mutation CreateWorkout($workoutInput: CreateWorkoutInput!) {
    createWorkout(workoutInput: $workoutInput) {
      _id
      name
      description
      workout {
        phase
        exercises {
          exercise {
            name
            type
            muscle
            equipment
            difficulty
            instructions
          }
          sets {
            reps
            weight
          }
        }
      }
    }
  }
`;
