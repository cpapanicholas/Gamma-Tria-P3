import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query GetUser($id: ID!) {
    getUser(_id: $id) {
      _id
      workouts {
        _id
        originalId
      }
      programs {
        _id
        originalId
      }
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


export const QUERY_USER_WITH_WORKOUT_INFO = gql`
  query GetUserWithWorkoutInfo($id: ID!) {
    getUserWithWorkoutInfo(_id: $id) {
      _id
      workouts {
        _id
      }
      programs {
        _id
      }
    }
  }
`;
 
export const QUERY_PUBLIC_WORKOUTS = gql`
  query GetAllPublicWorkouts($originalId: String) {
    getAllPublicWorkouts(originalId: $originalId) {
      _id
      originalId
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

export const QUERY_PUBLIC_PROGRAMS = gql`
query GetAllPublicPrograms($originalId: String) {
  getAllPublicPrograms(originalId: $originalId) {
    _id
    originalId
    userId
    name
    description
    duration
    workouts {
      day
      workout
    }
  }
}
`;

export const QUERY_WORKOUT_BY_ID = gql`
  query GetWorkoutById($id: ID!) {
    getWorkoutById(_id: $id) {
      _id
      name
      originalId
      userId
      workout {
        exercises {
          exercise {
            name
          }
          sets {
            reps
            weight
            completed
          }
        }
        phase
      }
      description
    }
  }
`;

