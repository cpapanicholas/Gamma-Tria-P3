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
