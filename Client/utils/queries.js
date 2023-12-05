import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    getUser(username: $username) {
      _id
      username
      email
      posts {
        _id
        postText
        createdAt
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query getAllPostsOfUser($_id: ID!) {
    getAllPostsOfUser(_id: $_id) {
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

export const QUERY_SINGLE_POST = gql`
  query getSinglePost($_id: ID!) {
    getSinglePost(_id: $_id) {
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      posts {
        _id
        postText
        postAuthor
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

export const GET_ALL_EXERCISES = gql`
query {
  getAllExercises {
    id
    name
    description
  }
}
`;
 
// export const FETCH_EXERCISES = gql`
//   query {
//     exercises {
//       name
//       type
//       muscle
//       equipment
//       difficulty
//       instructions
//     }
//   }
// `;
