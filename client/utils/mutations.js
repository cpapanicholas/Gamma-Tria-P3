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
      user {
        _id
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation Mutation($postInput: PostInput!) {
    addPost(postInput: $postInput) {
      _id
      userId
      mediaUrl
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($commentInput: CommentInput!) {
    addComment(commentInput: $commentInput) {
      _id
      comments {
        _id
        username
        commentText
        userId
      }
      postText
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
  mutation FavoriteExercise($exerciseInput: ExerciseInput!) {
    favoriteExercise(exerciseInput: $exerciseInput) {
      _id
      favoriteExercises {
        name
      }
    }
  }
`;

export const CHANGE_USER_STATUS = gql`
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