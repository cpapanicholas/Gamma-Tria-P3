import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ORIGINAL_WORKOUT = gql`
query getWorkoutsByOriginalId($originalId: ID!) {
  getWorkoutsByOriginalId(originalId: $originalId) {
    _id
    originalId
    userId
    name
    description
    workout {
      phase
      exercises {
        exercise {
          name
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

export const QUERY_GET_ALL_PROGRAMS = gql`
  query GetAllPrograms {
    getAllPrograms {
      _id
    }
  }
`;
 

