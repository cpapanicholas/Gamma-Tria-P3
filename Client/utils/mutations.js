import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      token
      user {
        _id
        firstName
        lastName
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

export const FAVORITE_EXERCISE = gql`
  mutation favoriteExercise($exerciseId: ID!) {
    favoriteExercise(exerciseId: $exerciseId) {
      _id
      favorites {
        _id
        name
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