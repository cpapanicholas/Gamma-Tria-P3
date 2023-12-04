import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Mutation($email: String!, $password: String!) {
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
